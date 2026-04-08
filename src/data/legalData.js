const legalData = {
  arrest: {
    summary: "This issue relates to arrest procedures and your legal rights.",
    arguments: [
      "Violation of personal liberty",
      "Arrest without proper warrant",
      "Improper police procedure",
    ],
    timeline: [
      "Arrest",
      "Police custody",
      "Magistrate hearing",
      "Trial process",
    ],
    documents: [
      { name: "FIR Copy", link: "https://eservices.tnpolice.gov.in/" },
      { name: "Arrest Memo", link: "https://www.indiacode.nic.in/" },
      { name: "Bail Application", link: "https://districts.ecourts.gov.in/" },
    ],
    similarCases: [
      "DK Basu vs State of West Bengal",
      "Joginder Kumar vs State of UP",
    ],
  },

  property: {
    summary: "This issue involves property ownership or disputes.",
    arguments: [
      "Ownership conflict",
      "Illegal possession",
      "Document verification required",
    ],
    timeline: [
      "File complaint",
      "Legal notice",
      "Court proceedings",
      "Judgment",
    ],
    documents: [
      { name: "Sale Deed", link: "https://igrs.ap.gov.in/" },
      { name: "Property Tax Receipt", link: "https://cdma.ap.gov.in/" },
      { name: "Encumbrance Certificate", link: "https://registration.ap.gov.in/" },
    ],
    similarCases: ["K.K. Verma vs Union of India"],
  },

  cyber: {
    summary: "This issue relates to cyber fraud or online scams.",
    arguments: [
      "Violation under IT Act, 2000",
      "Unauthorized financial transactions",
      "Data misuse or hacking",
    ],
    timeline: [
      "Report to bank immediately",
      "File cyber complaint",
      "Police investigation",
      "Recovery/legal action",
    ],
    documents: [
      { name: "Cyber Crime Complaint", link: "https://cybercrime.gov.in/" },
      { name: "Bank Statement", link: "https://www.onlinesbi.sbi/" },
      { name: "ID Proof", link: "https://uidai.gov.in/" },
    ],
    similarCases: [
      "Shreya Singhal vs Union of India",
      "State of Tamil Nadu vs Suhas Katti",
    ],
  },

  fir: {
    summary: "This issue relates to filing a criminal FIR.",
    arguments: [
      "Right to file FIR under CrPC",
      "Police must register FIR",
      "Escalation to magistrate possible",
    ],
    timeline: [
      "File FIR",
      "Police investigation",
      "Charge sheet",
      "Trial",
    ],
    documents: [
      { name: "FIR Portal", link: "https://services.india.gov.in/" },
      { name: "Complaint Copy", link: "https://www.indiacode.nic.in/" },
      { name: "ID Proof", link: "https://uidai.gov.in/" },
    ],
    similarCases: ["Lalita Kumari vs Govt of UP"],
  },

  consumer: {
    summary: "This issue involves consumer rights violation.",
    arguments: [
      "Defective goods/services",
      "Right to refund",
      "Compensation claim",
    ],
    timeline: [
      "File complaint",
      "Notice issued",
      "Hearing",
      "Judgment",
    ],
    documents: [
      { name: "Consumer Portal", link: "https://consumerhelpline.gov.in/" },
      { name: "Invoice", link: "https://www.gst.gov.in/" },
      { name: "Receipt", link: "https://www.indiacode.nic.in/" },
    ],
    similarCases: ["IMA vs V.P. Shantha"],
  },

  domestic: {
    summary: "This issue relates to domestic violence.",
    arguments: [
      "Protection under DV Act",
      "Right to safety",
      "Legal protection",
    ],
    timeline: [
      "File complaint",
      "Protection order",
      "Counseling",
      "Trial",
    ],
    documents: [
      { name: "DV Complaint", link: "https://wcd.nic.in/" },
      { name: "Medical Report", link: "https://www.nhp.gov.in/" },
      { name: "ID Proof", link: "https://uidai.gov.in/" },
    ],
    similarCases: ["V.D. Bhanot vs Savita Bhanot"],
  },

  employment: {
    summary: "This issue relates to workplace disputes.",
    arguments: [
      "Unfair termination",
      "Non-payment of wages",
      "Labor law violation",
    ],
    timeline: [
      "File labor complaint",
      "Conciliation",
      "Court hearing",
      "Judgment",
    ],
    documents: [
      { name: "Labor Portal", link: "https://labour.gov.in/" },
      { name: "Contract", link: "https://www.indiacode.nic.in/" },
      { name: "Salary Slips", link: "https://www.epfindia.gov.in/" },
    ],
    similarCases: ["Workmen vs Firestone"],
  },
};

export default legalData;