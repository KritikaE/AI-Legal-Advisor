import { useState } from "react";
import { getLegalResponse } from "../utils/legalHelper";
import { Input } from "@/components/ui/input";
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

const Dashboard = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<LegalResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = () => {
    if (!input.trim()) return;

    setLoading(true);

    setTimeout(() => {
      const res = getLegalResponse(input);
      setResult(res);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen p-8 bg-background">

      {/* 🔥 HERO SECTION */}
      <div className="text-center mb-12 animate-fade-in">

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Analyze Your Legal Case ⚖️
        </h1>

        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Get instant legal insights including arguments, timeline,
          required documents, and relevant case references.
        </p>

        {/* Input Box */}
        <div className="max-w-2xl mx-auto flex gap-3 p-2 rounded-xl border bg-card shadow-lg hover:shadow-xl transition">

          <Input
            placeholder="Describe your issue..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border-none focus-visible:ring-0 text-base"
          />

          <Button
            onClick={handleAnalyze}
            className="px-6 text-base font-semibold"
          >
            Analyze Case ⚖️
          </Button>

        </div>

        {/* Suggestions */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {suggestions.map((s, i) => (
            <button
              key={i}
              onClick={() => setInput(s)}
              className="px-3 py-1 text-sm rounded-full border bg-muted hover:bg-primary hover:text-white transition"
            >
              {s}
            </button>
          ))}
        </div>

      </div>

      {/* Loading */}
      {loading && (
        <p className="text-center text-muted-foreground mb-6">
          Analyzing your case...
        </p>
      )}

      {/* RESULTS */}
      {result && (
        <div className="space-y-6 animate-fade-in">

          {/* Top Row */}
          <div className="grid md:grid-cols-3 gap-6">

            {/* Summary */}
            <div className="p-4 rounded-xl border bg-card">
              <h3 className="font-semibold mb-2">📄 Summary</h3>
              <p className="text-sm text-muted-foreground">
                {result.summary}
              </p>
            </div>

            {/* Arguments */}
            <div className="md:col-span-2 p-5 rounded-xl border bg-card">
              <h3 className="font-semibold mb-2">⚖️ Arguments</h3>
              <ul className="space-y-1">
                {result.arguments.map((arg, i) => (
                  <li key={i}>• {arg}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* 🔥 TIMELINE */}
          <div className="p-6 rounded-xl border bg-card">
            <h3 className="font-semibold mb-6">🕒 Case Timeline</h3>

            <div className="relative border-l-2 border-primary ml-4">
              {result.timeline.map((step, i) => (
                <div key={i} className="mb-6 ml-6">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-2"></div>

                  <div className="p-3 bg-muted rounded-lg shadow-sm">
                    <p className="text-sm font-medium">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Documents */}
            <div className="p-5 rounded-xl border bg-card">
              <h3 className="font-semibold mb-3">📄 Documents</h3>

              <ul className="space-y-2">
                {result.documents.map((doc, i) => (
                  <li key={i}>
                    <a
                      href={doc.link}
                      target="_blank"
                      className="text-blue-600 hover:underline"
                    >
                      🔗 {doc.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Similar Cases */}
            <div className="p-5 rounded-xl border bg-card">
              <h3 className="font-semibold mb-2">⚖️ Similar Cases</h3>
              <ul className="space-y-1">
                {result.similarCases.map((c, i) => (
                  <li key={i}>• {c}</li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default Dashboard;