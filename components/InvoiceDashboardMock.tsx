"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useRef } from "react";
import { 
  FileText, CheckCircle, Clock, AlertTriangle, Eye, MoreHorizontal, 
  ArrowUpRight, ArrowDownRight, Search, Filter, Download, Cpu, Mail, 
  Users, Flag, Upload, X, RefreshCw, Sparkles, Building2, Calendar,
  CreditCard, Hash, Percent, Plus
} from "lucide-react";

type Invoice = {
  id: string;
  vendor: string;
  amount: string;
  dueDate: string;
  status: "new" | "review" | "approved" | "synced" | "processing";
  statusLabel: string;
  logo: string;
  logoColor: string;
  extractedData?: ExtractedData;
};

type ExtractedData = {
  vendor: string;
  vendorConfidence: number;
  amount: string;
  amountConfidence: number;
  vat: string;
  vatConfidence: number;
  dueDate: string;
  dueDateConfidence: number;
  iban: string;
  ibanConfidence: number;
};

const initialInvoices: Invoice[] = [
  { 
    id: "INV-2024-001", 
    vendor: "Acme Corp", 
    amount: "CHF 4'250.00", 
    dueDate: "Dec 15, 2024",
    status: "approved",
    statusLabel: "Approved",
    logo: "AC",
    logoColor: "#3B82F6",
    extractedData: {
      vendor: "Acme Corp",
      vendorConfidence: 99,
      amount: "CHF 4'250.00",
      amountConfidence: 98,
      vat: "CHF 327.50 (7.7%)",
      vatConfidence: 97,
      dueDate: "Dec 15, 2024",
      dueDateConfidence: 100,
      iban: "CH93 0076 2011 6238 5295 7",
      ibanConfidence: 95
    }
  },
  { 
    id: "INV-2024-002", 
    vendor: "TechSupply AG", 
    amount: "CHF 1'890.50", 
    dueDate: "Dec 18, 2024",
    status: "review",
    statusLabel: "Needs review",
    logo: "TS",
    logoColor: "#F59E0B",
    extractedData: {
      vendor: "TechSupply AG",
      vendorConfidence: 99,
      amount: "CHF 1'890.50",
      amountConfidence: 98,
      vat: "CHF 147.50 (7.7%)",
      vatConfidence: 97,
      dueDate: "Dec 18, 2024",
      dueDateConfidence: 100,
      iban: "CH93 0076 2011 6238 5295 7",
      ibanConfidence: 95
    }
  },
  { 
    id: "INV-2024-003", 
    vendor: "Office Solutions", 
    amount: "CHF 756.00", 
    dueDate: "Dec 20, 2024",
    status: "new",
    statusLabel: "New",
    logo: "OS",
    logoColor: "#8B5CF6",
    extractedData: {
      vendor: "Office Solutions",
      vendorConfidence: 97,
      amount: "CHF 756.00",
      amountConfidence: 100,
      vat: "CHF 58.27 (7.7%)",
      vatConfidence: 99,
      dueDate: "Dec 20, 2024",
      dueDateConfidence: 98,
      iban: "CH12 0483 5012 3456 7800 0",
      ibanConfidence: 94
    }
  },
  { 
    id: "INV-2024-004", 
    vendor: "Cloud Services Inc", 
    amount: "CHF 2'400.00", 
    dueDate: "Dec 22, 2024",
    status: "synced",
    statusLabel: "Synced",
    logo: "CS",
    logoColor: "#10B981",
    extractedData: {
      vendor: "Cloud Services Inc",
      vendorConfidence: 98,
      amount: "CHF 2'400.00",
      amountConfidence: 99,
      vat: "CHF 185.08 (7.7%)",
      vatConfidence: 98,
      dueDate: "Dec 22, 2024",
      dueDateConfidence: 100,
      iban: "CH45 0023 0023 1234 5678 9",
      ibanConfidence: 96
    }
  }
];

const auditTrail = [
  { action: "Invoice received", time: "2h ago", icon: Mail },
  { action: "AI extracted fields", time: "2h ago", icon: Cpu },
  { action: "Flagged for review", time: "1h ago", icon: Flag },
  { action: "Assigned to team", time: "45m ago", icon: Users }
];

const statusStyles: Record<string, { bg: string; text: string; icon: React.ElementType }> = {
  new: { bg: "bg-blue-50", text: "text-blue-700", icon: FileText },
  review: { bg: "bg-amber-50", text: "text-amber-700", icon: AlertTriangle },
  approved: { bg: "bg-emerald-50", text: "text-emerald-700", icon: CheckCircle },
  synced: { bg: "bg-slate-100", text: "text-slate-600", icon: Clock },
  processing: { bg: "bg-purple-50", text: "text-purple-700", icon: RefreshCw }
};

const vendorColors = ["#3B82F6", "#F59E0B", "#8B5CF6", "#10B981", "#EC4899", "#EF4444"];

export function InvoiceDashboardMock() {
  const [invoices, setInvoices] = useState<Invoice[]>(initialInvoices);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(initialInvoices[1]);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState(0);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processingSteps = [
    "Uploading document...",
    "Analyzing structure...",
    "Running AI extraction...",
    "Validating data...",
    "Complete!"
  ];

  const generateRandomExtraction = (fileName: string): ExtractedData => {
    const vendors = ["Your Company Ltd", "Invoice Sender GmbH", "New Vendor AG", "Partner Corp", "Supplier SA"];
    const amounts = ["CHF 1'234.50", "CHF 3'567.80", "CHF 890.00", "CHF 5'432.10", "CHF 2'100.00"];
    const randomVendor = vendors[Math.floor(Math.random() * vendors.length)];
    const randomAmount = amounts[Math.floor(Math.random() * amounts.length)];
    const amountNum = parseFloat(randomAmount.replace(/[^0-9.]/g, '').replace("'", ""));
    const vat = (amountNum * 0.077).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, "'");
    
    return {
      vendor: randomVendor,
      vendorConfidence: 95 + Math.floor(Math.random() * 5),
      amount: randomAmount,
      amountConfidence: 96 + Math.floor(Math.random() * 4),
      vat: `CHF ${vat} (7.7%)`,
      vatConfidence: 94 + Math.floor(Math.random() * 6),
      dueDate: "Jan 15, 2025",
      dueDateConfidence: 98 + Math.floor(Math.random() * 3),
      iban: "CH93 0076 2011 6238 5295 7",
      ibanConfidence: 93 + Math.floor(Math.random() * 7)
    };
  };

  const handleFileSelect = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadedFileName(file.name);
    setIsProcessing(true);
    setProcessingStep(0);

    // Simulate processing
    for (let i = 0; i < processingSteps.length; i++) {
      setProcessingStep(i);
      await new Promise(resolve => setTimeout(resolve, 800));
    }

    // Create new invoice
    const extractedData = generateRandomExtraction(file.name);
    const newInvoice: Invoice = {
      id: `INV-2024-${String(invoices.length + 1).padStart(3, '0')}`,
      vendor: extractedData.vendor,
      amount: extractedData.amount,
      dueDate: extractedData.dueDate,
      status: "new",
      statusLabel: "New",
      logo: extractedData.vendor.slice(0, 2).toUpperCase(),
      logoColor: vendorColors[Math.floor(Math.random() * vendorColors.length)],
      extractedData
    };

    setInvoices(prev => [newInvoice, ...prev]);
    setSelectedInvoice(newInvoice);
    setIsProcessing(false);
    setShowUploadModal(false);
    
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, [invoices.length]);

  const handleApprove = () => {
    if (!selectedInvoice) return;
    setInvoices(prev => prev.map(inv => 
      inv.id === selectedInvoice.id 
        ? { ...inv, status: "approved" as const, statusLabel: "Approved" }
        : inv
    ));
    setSelectedInvoice(prev => prev ? { ...prev, status: "approved", statusLabel: "Approved" } : null);
  };

  const downloadCSV = () => {
    const csvContent = invoices.map(inv => 
      `${inv.id},${inv.vendor},${inv.amount},${inv.dueDate},${inv.statusLabel}`
    ).join("\n");
    const header = "Invoice ID,Vendor,Amount,Due Date,Status\n";
    const blob = new Blob([header + csvContent], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "invoices_export.csv";
    link.click();
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 95) return "bg-emerald-50 text-emerald-600";
    if (confidence >= 85) return "bg-amber-50 text-amber-600";
    return "bg-red-50 text-red-600";
  };

  const pendingCount = invoices.filter(i => i.status === "new" || i.status === "review").length;
  const totalAmount = invoices.reduce((sum, inv) => {
    const num = parseFloat(inv.amount.replace(/[^0-9.]/g, '').replace("'", ""));
    return sum + num;
  }, 0);

  return (
    <>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
      >
        {/* Browser chrome */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-4 py-3">
          <div className="flex items-center gap-4">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-amber-400" />
              <div className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <div className="rounded-md bg-white px-3 py-1.5 text-xs text-slate-400 border border-slate-200">
              app.lumafin.ch/invoices
            </div>
          </div>
          <div className="flex items-center gap-2">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Search className="h-4 w-4 text-slate-400 hover:text-slate-600 cursor-pointer" />
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Filter className="h-4 w-4 text-slate-400 hover:text-slate-600 cursor-pointer" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }}
              onClick={downloadCSV}
              title="Download CSV"
            >
              <Download className="h-4 w-4 text-slate-400 hover:text-slate-600 cursor-pointer" />
            </motion.button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3">
          {/* Invoice list */}
          <div className="lg:col-span-2 border-r border-slate-100">
            {/* Stats bar */}
            <div className="grid grid-cols-4 gap-4 border-b border-slate-100 px-6 py-3 bg-slate-50/50">
              {[
                { label: "Total", value: `CHF ${totalAmount.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, "'")}`, change: "+12%", up: true },
                { label: "Pending", value: String(pendingCount), change: "-3", up: false },
                { label: "This week", value: String(invoices.length), change: "+8", up: true },
                { label: "Avg. time", value: "2.4h", change: "-18%", up: true }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-xs text-slate-500">{stat.label}</p>
                  <p className="text-lg font-bold text-slate-900">{stat.value}</p>
                  <p className={`text-xs flex items-center justify-center gap-0.5 ${stat.up ? 'text-emerald-600' : 'text-red-500'}`}>
                    {stat.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                    {stat.change}
                  </p>
                </div>
              ))}
            </div>

            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-3">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">Recent Invoices</h3>
                <p className="text-xs text-slate-500">{pendingCount} pending review</p>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowUploadModal(true)}
                className="flex items-center gap-1 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-slate-800"
              >
                <Plus className="h-3 w-3" />
                Add invoice
              </motion.button>
            </div>

            {/* Table header */}
            <div className="grid grid-cols-5 gap-4 border-b border-slate-50 bg-slate-50/50 px-6 py-2 text-xs font-medium text-slate-500">
              <span>Invoice</span>
              <span>Vendor</span>
              <span>Amount</span>
              <span>Due date</span>
              <span>Status</span>
            </div>

            {/* Invoice rows */}
            <div className="divide-y divide-slate-50 max-h-[280px] overflow-y-auto">
              {invoices.map((invoice) => {
                const style = statusStyles[invoice.status];
                const StatusIcon = style.icon;
                const isSelected = selectedInvoice?.id === invoice.id;
                return (
                  <motion.div
                    key={invoice.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ backgroundColor: "#f8fafc" }}
                    onClick={() => setSelectedInvoice(invoice)}
                    className={`grid grid-cols-5 gap-4 px-6 py-3 text-sm cursor-pointer transition-colors ${
                      isSelected ? "bg-slate-50" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-white text-xs font-bold"
                        style={{ backgroundColor: invoice.logoColor }}
                      >
                        {invoice.logo}
                      </motion.div>
                      <span className="font-medium text-slate-900">{invoice.id}</span>
                    </div>
                    <span className="text-slate-600 flex items-center">{invoice.vendor}</span>
                    <span className="font-semibold text-slate-900">{invoice.amount}</span>
                    <span className="text-slate-500">{invoice.dueDate}</span>
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${style.bg} ${style.text}`}
                    >
                      {invoice.status === "processing" ? (
                        <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                          <StatusIcon className="h-3 w-3" />
                        </motion.span>
                      ) : (
                        <StatusIcon className="h-3 w-3" />
                      )}
                      {invoice.statusLabel}
                    </motion.span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right panel */}
          <div className="bg-slate-50/50">
            {selectedInvoice ? (
              <>
                {/* Panel header */}
                <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-white text-xs font-bold cursor-pointer" 
                      style={{ backgroundColor: selectedInvoice.logoColor }}
                    >
                      {selectedInvoice.logo}
                    </motion.div>
                    <div>
                      <p className="text-xs font-semibold text-slate-900">{selectedInvoice.id}</p>
                      <p className="text-xs text-slate-500">{selectedInvoice.vendor}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <motion.button whileHover={{ scale: 1.1 }}>
                      <Eye className="h-4 w-4 text-slate-400 hover:text-slate-600 cursor-pointer" />
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.1 }}>
                      <MoreHorizontal className="h-4 w-4 text-slate-400 hover:text-slate-600 cursor-pointer" />
                    </motion.button>
                  </div>
                </div>

                {/* Extracted fields */}
                {selectedInvoice.extractedData && (
                  <div className="px-4 py-3">
                    <p className="mb-2 text-xs font-semibold text-slate-700 flex items-center gap-2">
                      <Cpu className="h-3.5 w-3.5" /> AI Extracted
                    </p>
                    <div className="space-y-1.5">
                      {[
                        { label: "Vendor", value: selectedInvoice.extractedData.vendor, confidence: selectedInvoice.extractedData.vendorConfidence },
                        { label: "Amount", value: selectedInvoice.extractedData.amount, confidence: selectedInvoice.extractedData.amountConfidence },
                        { label: "VAT", value: selectedInvoice.extractedData.vat, confidence: selectedInvoice.extractedData.vatConfidence },
                        { label: "Due date", value: selectedInvoice.extractedData.dueDate, confidence: selectedInvoice.extractedData.dueDateConfidence },
                        { label: "IBAN", value: selectedInvoice.extractedData.iban.slice(0, 18) + "...", confidence: selectedInvoice.extractedData.ibanConfidence },
                      ].map((field) => (
                        <motion.div
                          key={field.label}
                          whileHover={{ x: 2, backgroundColor: "#ffffff" }}
                          className="flex items-center justify-between rounded-lg bg-white px-2.5 py-1.5 text-xs cursor-pointer transition-colors"
                        >
                          <span className="text-slate-500">{field.label}</span>
                          <div className="flex items-center gap-1.5">
                            <span className="font-medium text-slate-900">{field.value}</span>
                            <span className={`text-xs px-1 py-0.5 rounded ${getConfidenceColor(field.confidence)}`}>
                              {field.confidence}%
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Audit trail */}
                <div className="border-t border-slate-100 px-4 py-3">
                  <p className="mb-2 text-xs font-semibold text-slate-700 flex items-center gap-2">
                    <FileText className="h-3.5 w-3.5" /> Audit Trail
                  </p>
                  <div className="space-y-1.5">
                    {auditTrail.map((item, idx) => (
                      <motion.div 
                        key={idx} 
                        whileHover={{ x: 2 }}
                        className="flex items-center gap-2 text-xs cursor-pointer"
                      >
                        <item.icon className="h-3 w-3 text-slate-400" />
                        <span className="flex-1 text-slate-600">{item.action}</span>
                        <span className="text-slate-400">{item.time}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="border-t border-slate-100 px-4 py-3">
                  <div className="flex gap-2">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleApprove}
                      disabled={selectedInvoice.status === "approved" || selectedInvoice.status === "synced"}
                      className="flex-1 rounded-lg bg-slate-900 py-2 text-xs font-semibold text-white hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {selectedInvoice.status === "approved" ? "Approved ✓" : "Approve"}
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 rounded-lg border border-slate-200 bg-white py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                    >
                      Request info
                    </motion.button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex h-full items-center justify-center p-8 text-center">
                <div>
                  <FileText className="mx-auto h-8 w-8 text-slate-300 mb-2" />
                  <p className="text-sm text-slate-500">Select an invoice to view details</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Upload Modal */}
      <AnimatePresence>
        {showUploadModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => !isProcessing && setShowUploadModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
                    <Upload className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Upload Invoice</h3>
                    <p className="text-xs text-slate-500">Try our AI extraction live</p>
                  </div>
                </div>
                {!isProcessing && (
                  <button onClick={() => setShowUploadModal(false)}>
                    <X className="h-5 w-5 text-slate-400 hover:text-slate-600" />
                  </button>
                )}
              </div>

              <div className="p-6">
                {!isProcessing ? (
                  <label className="block cursor-pointer">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,image/*"
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                    <div className="rounded-xl border-2 border-dashed border-slate-200 p-8 text-center transition-colors hover:border-slate-400 hover:bg-slate-50">
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100"
                      >
                        <Upload className="h-6 w-6 text-slate-500" />
                      </motion.div>
                      <p className="font-medium text-slate-900">Drop your invoice here</p>
                      <p className="mt-1 text-sm text-slate-500">or click to browse</p>
                      <p className="mt-4 text-xs text-slate-400">PDF, PNG, JPG supported</p>
                    </div>
                  </label>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200">
                        <FileText className="h-5 w-5 text-slate-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-900 truncate">{uploadedFileName}</p>
                        <p className="text-xs text-slate-500">Processing...</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {processingSteps.map((step, idx) => {
                        const isActive = idx === processingStep;
                        const isComplete = idx < processingStep;
                        return (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0.5 }}
                            animate={{ opacity: isComplete || isActive ? 1 : 0.5 }}
                            className={`flex items-center gap-3 rounded-lg p-2 ${isActive ? "bg-slate-100" : ""}`}
                          >
                            <div className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${
                              isComplete 
                                ? "bg-emerald-500 text-white" 
                                : isActive 
                                ? "bg-slate-900 text-white" 
                                : "bg-slate-200 text-slate-400"
                            }`}>
                              {isComplete ? (
                                <CheckCircle className="h-4 w-4" />
                              ) : isActive ? (
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                >
                                  <RefreshCw className="h-3 w-3" />
                                </motion.div>
                              ) : (
                                idx + 1
                              )}
                            </div>
                            <span className={`text-sm ${isComplete || isActive ? "text-slate-900" : "text-slate-400"}`}>
                              {step}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t border-slate-100 bg-slate-50 px-6 py-4">
                <p className="text-center text-xs text-slate-500">
                  🔒 Demo only – files processed locally, not stored
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
