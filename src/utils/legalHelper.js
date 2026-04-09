import legalData from "../data/legalData";

export function getLegalResponse(query) {
  const q = query.toLowerCase();

  if (q.match(/arrest|arrested|detained|custody|without warrant/)) return legalData["arrest"];
  if (q.match(/bail|anticipatory bail|remand|default bail/)) return legalData["bail"];
  if (q.match(/cheque|bounce|dishonour|negotiable|138/)) return legalData["cheque"];
  if (q.match(/cyber|fraud|scam|hack|phishing|otp|online fraud/)) return legalData["cyber"];
  if (q.match(/fir|first information|police refuse|not registering/)) return legalData["fir"];
  if (q.match(/consumer|refund|defective|deficient service/)) return legalData["consumer"];
  if (q.match(/domestic|violence|498a|cruelty|wife beating/)) return legalData["domestic"];
  if (q.match(/divorce|separation|alimony|matrimonial/)) return legalData["divorce"];
  if (q.match(/maintenance|spouse support/) && !q.match(/land|property/)) return legalData["divorce"];
  if (q.match(/tenant|vacate|eviction|landlord/) && !q.match(/rent arrear/)) return legalData["tenant"];
  if (q.match(/rent|rental dispute|rent arrear/)) return legalData["rent"];
  if (q.match(/property|ownership|encroachment|sale deed|possession/) && !q.match(/land record|pahani|dharani/)) return legalData["property"];
  if (q.match(/land record|pahani|dharani|mutation|land acquisition/)) return legalData["land"];
  if (q.match(/accident|motor accident|mact|road accident|vehicle/)) return legalData["motor"];
  if (q.match(/medical|negligence|doctor|hospital|malpractice/)) return legalData["medical"];
  if (q.match(/harassment|sexual harassment|posh|workplace/)) return legalData["harassment"];
  if (q.match(/job|salary|employee|fired|termination|labour|wages/)) return legalData["employment"];
  if (q.match(/writ|habeas|mandamus|high court|certiorari/)) return legalData["writ"];
  if (q.match(/rti|right to information|information act/)) return legalData["rti"];
  if (q.match(/succession|inheritance|will|legal heir|probate/)) return legalData["succession"];
  if (q.match(/police misconduct|custodial|police brutality|police abuse/)) return legalData["police"];
  if (q.match(/college|university|ragging|fee refund|education/)) return legalData["education"];
  if (q.match(/pollution|environment|ngt|lake|encroachment/) && !q.match(/property/)) return legalData["environment"];
  if (q.match(/sc\/st|scheduled caste|scheduled tribe|atrocity|caste/)) return legalData["sc_st"];
  if (q.match(/insurance|claim denied|health insurance|policy claim/)) return legalData["insurance"];
  if (q.match(/adoption|adopt|cara/)) return legalData["adoption"];

  return {
    summary: "No exact match found. Please consult a qualified advocate for advice tailored to your situation.",
    arguments: ["Consult a licensed advocate for legal advice specific to your case."],
    timeline: ["Describe your issue clearly to get matched legal guidance."],
    documents: [
      { name: "Telangana High Court", link: "https://tshc.gov.in/" },
      { name: "eCourts Services", link: "https://ecourts.gov.in/" },
      { name: "Legal Aid Services Telangana", link: "https://tslsa.gov.in/" },
    ],
    similarCases: ["Please provide more specific details for relevant case references."],
  };
}