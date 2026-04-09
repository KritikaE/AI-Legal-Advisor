import { useState } from "react";
import { getLegalResponse } from "../utils/legalHelper";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Scale, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

type LegalResult = {
  summary: string;
  arguments: string[];
  timeline: string[];
  documents: { name: string; link: string }[];
  similarCases: string[];
};

const suggestions = [
  "Police arrested me without warrant",
  "Property dispute with neighbor",
  "Tenant not vacating house",
  "Cyber fraud complaint",
];

type Tab = "summary" | "arguments" | "timeline" | "documents" | "cases";

const tabs: { id: Tab; label: string; emoji: string }[] = [
  { id: "summary",   label: "Summary",      emoji: "📄" },
  { id: "arguments", label: "Arguments",    emoji: "⚖️" },
  { id: "timeline",  label: "Timeline",     emoji: "🕒" },
  { id: "documents", label: "Documents",    emoji: "📁" },
  { id: "cases",     label: "Similar Cases",emoji: "🔍" },
];

const Dashboard = () => {
  const [input, setInput]     = useState("");
  const [result, setResult]   = useState<LegalResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("summary");

  const handleAnalyze = () => {
    if (!input.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setResult(getLegalResponse(input));
      setActiveTab("summary");
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Scale className="h-6 w-6 text-primary" />
            <span className="font-display text-xl font-semibold text-foreground">Legal Advisor</span>
          </Link>
        </div>
      </nav>

      <main className="pt-28 pb-16 px-4">

        {/* Hero input area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-primary/30 bg-primary/10">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Case Analyzer</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
            Describe Your <span className="text-gold">Legal Situation</span>
          </h1>

          <p className="text-muted-foreground mb-8">
            Get instant arguments, timeline, documents, and case references.
          </p>

          {/* Textarea + button */}
          <div className="relative rounded-2xl border border-border/60 bg-card shadow-card hover:shadow-elevated hover:border-primary/30 transition-all duration-300 p-4">
            <textarea
              rows={4}
              className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none resize-none font-sans leading-relaxed"
              placeholder="e.g. Police arrested me without a warrant and did not inform me of the charges..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/40">
              <div className="flex flex-wrap gap-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => setInput(s)}
                    className="text-xs px-3 py-1 rounded-full border border-border/60 text-muted-foreground hover:border-primary/40 hover:text-primary transition-all duration-200"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <Button
            onClick={handleAnalyze}
            disabled={loading}
            size="lg"
            className="gradient-gold text-primary-foreground font-semibold shadow-gold px-10 h-12 text-base mt-5 w-full sm:w-auto"
          >
            {loading ? "Analyzing..." : "Analyze Case ⚖️"}
          </Button>
        </motion.div>

        {/* Results */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: result.arguments.length, label: "Arguments" },
                { value: result.timeline.length,  label: "Timeline steps" },
                { value: result.documents.length, label: "Documents" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-border bg-card p-4 text-center shadow-card"
                >
                  <p className="font-display text-3xl font-bold text-gold">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Tab bar */}
            <div className="flex gap-1 border-b border-border mb-6 overflow-x-auto">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`px-4 py-2.5 text-sm whitespace-nowrap border-b-2 transition-all duration-200 font-medium ${
                    activeTab === t.id
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t.emoji} {t.label}
                </button>
              ))}
            </div>

            {/* Tab panels */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
            >

              {activeTab === "summary" && (
                <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                  <p className="text-sm leading-relaxed text-muted-foreground">{result.summary}</p>
                </div>
              )}

              {activeTab === "arguments" && (
                <div className="rounded-xl border border-border bg-card p-6 shadow-card space-y-4">
                  {result.arguments.map((arg, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <span className="w-6 h-6 rounded-full gradient-gold text-primary-foreground text-xs flex items-center justify-center flex-shrink-0 font-semibold mt-0.5">
                        {i + 1}
                      </span>
                      <p className="text-sm leading-relaxed">{arg}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "timeline" && (
                <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                  <div className="relative ml-3 border-l-2 border-primary/30 pl-6 space-y-6">
                    {result.timeline.map((step, i) => (
                      <div key={i} className="relative">
                        <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full gradient-gold" />
                        <p className="text-xs font-semibold text-primary mb-1 uppercase tracking-wider">
                          Step {i + 1}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "documents" && (
                <div className="rounded-xl border border-border bg-card p-6 shadow-card space-y-3">
                  {result.documents.map((doc, i) => (
                    <a
                      key={i}
                      href={doc.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg border border-border/60 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 group"
                    >
                      <span className="text-sm font-medium">{doc.name}</span>
                      <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                        Open →
                      </span>
                    </a>
                  ))}
                </div>
              )}

              {activeTab === "cases" && (
                <div className="rounded-xl border border-border bg-card p-6 shadow-card space-y-3">
                  {result.similarCases.map((c, i) => (
                    <div
                      key={i}
                      className="flex gap-3 items-start p-4 rounded-lg border border-border/60 bg-background hover:border-primary/30 transition-all duration-200"
                    >
                      <span className="text-primary mt-0.5">⚖️</span>
                      <p className="text-sm leading-relaxed text-muted-foreground">{c}</p>
                    </div>
                  ))}
                </div>
              )}

            </motion.div>
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-primary" />
            <span className="font-display text-lg font-semibold">Legal Advisor</span>
          </div>
          <p className="text-sm text-muted-foreground">© Legal Advisor.</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;