import legalData from "../data/legalData";

export function getLegalResponse(query) {
  const lowerQuery = query.toLowerCase();
  let key = "default";

  if (lowerQuery.match(/arrest|police|custody/)) key = "arrest";
  else if (lowerQuery.match(/property|land|house/)) key = "property";
  else if (lowerQuery.match(/cyber|fraud|scam|hack/)) key = "cyber";
  else if (lowerQuery.match(/fir|complaint|crime/)) key = "fir";
  else if (lowerQuery.match(/consumer|refund|defective/)) key = "consumer";
  else if (lowerQuery.match(/domestic|violence|abuse/)) key = "domestic";
  else if (lowerQuery.match(/job|salary|employee|work/)) key = "employment";

  const data = legalData[key];

  return (
    data || {
      summary: "No exact match found. Please consult a lawyer.",
      arguments: [],
      timeline: [],
      documents: [],
      similarCases: [],
    }
  );
}