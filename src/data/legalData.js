const legalData = {

  arrest: {
    summary: "This issue relates to arrest without a warrant, which may violate your fundamental rights under Articles 21 and 22 of the Indian Constitution. You are entitled to know the grounds of arrest and must be produced before a magistrate within 24 hours.",
    arguments: [
      "Violation of Article 21 — Right to Life and Personal Liberty",
      "Violation of Article 22 — Protection against arbitrary arrest",
      "Arrest without warrant violates Section 41 CrPC unless cognizable offence",
      "Failure to inform grounds of arrest is unconstitutional per DK Basu guidelines",
      "Right to consult a legal practitioner of choice under Article 22(1)",
    ],
    timeline: [
      "Arrest made by police",
      "Inform family/lawyer immediately",
      "Produced before magistrate within 24 hours",
      "Apply for bail — regular or anticipatory",
      "File writ of habeas corpus in High Court if illegally detained",
      "Trial proceedings begin",
    ],
    documents: [
      { name: "FIR Copy", link: "https://eservices.tnpolice.gov.in/" },
      { name: "Arrest Memo", link: "https://www.indiacode.nic.in/" },
      { name: "Bail Application", link: "https://tshc.gov.in/" },
      { name: "Telangana Police Complaint Portal", link: "https://www.tspolice.gov.in/" },
    ],
    similarCases: [
      "DK Basu vs State of West Bengal (1997) — Guidelines on arrest procedure",
      "Joginder Kumar vs State of UP (1994) — Right to inform family on arrest",
      "Arnesh Kumar vs State of Bihar (2014) — Magistrate must apply mind before remand",
    ],
  },

  bail: {
    summary: "This issue relates to obtaining bail after arrest. Bail can be regular (after arrest) or anticipatory (before arrest). The nature of the offence — bailable or non-bailable — determines the process.",
    arguments: [
      "Right to bail in bailable offences is absolute under Section 436 CrPC",
      "For non-bailable offences, bail is discretionary under Section 437/439 CrPC",
      "Anticipatory bail under Section 438 CrPC available before arrest",
      "Prolonged pre-trial detention violates Article 21",
      "Default bail available if chargesheet not filed within 60/90 days",
    ],
    timeline: [
      "Arrest and remand by magistrate",
      "File bail application in Sessions Court",
      "Hearing by judge",
      "Bail granted or rejected",
      "If rejected, file before High Court under Section 439",
      "Supreme Court as last resort",
    ],
    documents: [
      { name: "Bail Application Format", link: "https://tshc.gov.in/" },
      { name: "FIR Copy", link: "https://www.tspolice.gov.in/" },
      { name: "Surety Documents", link: "https://districts.ecourts.gov.in/" },
    ],
    similarCases: [
      "State of Rajasthan vs Balchand (1977) — Bail is the rule, jail is the exception",
      "Satender Kumar Antil vs CBI (2022) — Default bail rights",
      "Sushila Aggarwal vs State of NCT Delhi (2020) — Anticipatory bail scope",
    ],
  },

  property: {
    summary: "This issue involves property ownership disputes, illegal possession, or title verification in Telangana. Disputes may arise over sale deeds, inheritance, encroachments, or fraudulent registrations.",
    arguments: [
      "Ownership conflict — Title must be proven by documented chain of sale deeds",
      "Illegal possession and encroachment is actionable under Section 441 IPC",
      "Document verification required — Encumbrance Certificate from SRO",
      "Specific Performance of contract enforceable under Specific Relief Act, 1963",
      "Adverse possession claim may arise after 12 years of open possession",
    ],
    timeline: [
      "Obtain Encumbrance Certificate and verify title documents",
      "Send legal notice to opposing party",
      "File suit in Civil Court for declaration/injunction",
      "Court issues interim stay if required",
      "Trial and evidence",
      "Decree and execution",
    ],
    documents: [
      { name: "Sale Deed (Dharani Portal)", link: "https://dharani.telangana.gov.in/" },
      { name: "Encumbrance Certificate", link: "https://registration.telangana.gov.in/" },
      { name: "Property Tax Receipt (GHMC)", link: "https://www.ghmc.gov.in/" },
      { name: "Pahani / Land Records (Mee Bhoomi)", link: "https://meebhoomi.ap.gov.in/" },
    ],
    similarCases: [
      "K.K. Verma vs Union of India — Property rights under Constitution",
      "Poona Ram vs Moti Ram (2019) — Adverse possession in India",
      "Suraj Lamp Industries vs State of Haryana (2012) — GPA sales invalid",
    ],
  },

  tenant: {
    summary: "This issue relates to a tenant refusing to vacate a rented property. The Telangana Rent Control Act, 1960 governs residential tenancies and provides specific grounds for eviction.",
    arguments: [
      "Landlord's right to repossess property for personal use under Rent Control Act",
      "Eviction grounds: non-payment of rent, subletting without consent, misuse of premises",
      "Tenant cannot be forcibly evicted without court order",
      "Notice under Section 106 Transfer of Property Act mandatory before eviction suit",
      "Unauthorized subletting is ground for immediate eviction",
    ],
    timeline: [
      "Send formal eviction notice to tenant (30/15 days as applicable)",
      "File eviction petition in Rent Control Court",
      "Hearing and response from tenant",
      "Evidence stage",
      "Eviction order by Rent Controller",
      "Execution of eviction order by court bailiff",
    ],
    documents: [
      { name: "Rental Agreement", link: "https://registration.telangana.gov.in/" },
      { name: "Rent Receipts", link: "https://igrs.telangana.gov.in/" },
      { name: "Eviction Notice Copy", link: "https://tshc.gov.in/" },
      { name: "Property Documents", link: "https://dharani.telangana.gov.in/" },
    ],
    similarCases: [
      "Satyawati Sharma vs Union of India (2008) — Rent control and landlord rights",
      "Hindustan Petroleum vs Dolly Das (1999) — Eviction on subletting",
      "V. Dhanapal vs Visalakshmi (2009) — Notice requirements for eviction",
    ],
  },

  cyber: {
    summary: "This issue relates to cyber fraud, online scams, phishing, or unauthorized financial transactions. Governed by the IT Act, 2000 and IPC provisions.",
    arguments: [
      "Violation of Section 66C IT Act — Identity theft",
      "Section 66D IT Act — Cheating by personation using computer",
      "Unauthorized financial transaction punishable under Section 43 IT Act",
      "Section 420 IPC — Cheating and dishonestly inducing delivery of property",
      "Data misuse or hacking under Section 66 IT Act",
    ],
    timeline: [
      "Report to bank immediately and block card/account",
      "File complaint on cybercrime.gov.in within 24 hours",
      "File FIR at nearest cyber crime police station",
      "Police investigation and forensic analysis",
      "Charge sheet filed",
      "Trial in designated cyber crime court",
    ],
    documents: [
      { name: "Cyber Crime National Portal", link: "https://cybercrime.gov.in/" },
      { name: "Telangana Cyber Crime Cell", link: "https://www.tspolice.gov.in/cybercrime" },
      { name: "Bank Statement", link: "https://www.onlinesbi.sbi/" },
      { name: "Transaction Screenshot / Evidence", link: "https://cybercrime.gov.in/" },
      { name: "Aadhaar / ID Proof", link: "https://uidai.gov.in/" },
    ],
    similarCases: [
      "Shreya Singhal vs Union of India (2015) — Free speech and IT Act Section 66A struck down",
      "State of Tamil Nadu vs Suhas Katti (2004) — First cyber crime conviction in India",
      "Nasscom vs Ajay Sood (2005) — Phishing and IT Act liability",
    ],
  },

  fir: {
    summary: "This issue relates to filing an FIR (First Information Report) under Section 154 CrPC. Police are obligated to register an FIR for cognizable offences. Refusal is punishable.",
    arguments: [
      "Right to file FIR is absolute for cognizable offences under Section 154 CrPC",
      "Police refusal to register FIR is punishable under Section 166A IPC",
      "Can approach SP/DSP directly if local police refuse",
      "Can file complaint before Magistrate under Section 156(3) CrPC",
      "Lalita Kumari judgment mandates compulsory FIR registration",
    ],
    timeline: [
      "Visit nearest police station and file written complaint",
      "If refused, send complaint to SP/SSP by post",
      "File Section 156(3) petition before Magistrate",
      "Magistrate orders police to register FIR",
      "Police investigation begins",
      "Charge sheet within 60/90 days",
    ],
    documents: [
      { name: "Telangana Police Complaint Portal", link: "https://www.tspolice.gov.in/" },
      { name: "Complaint Copy", link: "https://www.indiacode.nic.in/" },
      { name: "ID Proof", link: "https://uidai.gov.in/" },
    ],
    similarCases: [
      "Lalita Kumari vs Govt of UP (2013) — Mandatory FIR registration",
      "Ramdev Food Products vs State of Gujarat (2015) — FIR cannot be quashed merely on settlement",
      "T.T. Antony vs State of Kerala (2001) — Second FIR on same facts not maintainable",
    ],
  },

  consumer: {
    summary: "This issue involves violation of consumer rights under the Consumer Protection Act, 2019. You can claim defective goods, deficient services, unfair trade practices, or overcharging.",
    arguments: [
      "Defective goods under Section 2(10) Consumer Protection Act, 2019",
      "Deficiency in service under Section 2(11) — actionable before Consumer Forum",
      "Right to refund, replacement, or compensation",
      "Unfair trade practice claim under Section 2(47)",
      "E-commerce platforms also liable under 2019 Act",
    ],
    timeline: [
      "Send legal notice to seller/service provider",
      "File complaint in District Consumer Forum (up to ₹50 lakh)",
      "State Commission (₹50 lakh – ₹2 crore)",
      "National Commission (above ₹2 crore)",
      "Hearing and response from opposite party",
      "Order for compensation/refund/replacement",
    ],
    documents: [
      { name: "National Consumer Helpline", link: "https://consumerhelpline.gov.in/" },
      { name: "E-Daakhil Portal (Online Filing)", link: "https://edaakhil.nic.in/" },
      { name: "Invoice / Receipt", link: "https://www.gst.gov.in/" },
      { name: "Warranty Card / Agreement", link: "https://consumerhelpline.gov.in/" },
    ],
    similarCases: [
      "IMA vs V.P. Shantha (1995) — Medical services under Consumer Act",
      "Spring Meadows Hospital vs Harjol Ahluwalia (1998) — Hospital negligence",
      "Lucknow Development Authority vs M.K. Gupta (1994) — Housing board liable for deficiency",
    ],
  },

  domestic: {
    summary: "This issue relates to domestic violence — physical, emotional, sexual, or economic abuse by a family member or intimate partner. The Protection of Women from Domestic Violence Act, 2005 provides civil and criminal remedies.",
    arguments: [
      "Protection under the Domestic Violence Act, 2005",
      "Right to reside in shared household under Section 17 DV Act",
      "Protection order, residence order, and monetary relief available",
      "Criminal complaint under Section 498A IPC for cruelty by husband/in-laws",
      "Right to custody of children under Section 21 DV Act",
    ],
    timeline: [
      "Approach Protection Officer or NGO for help",
      "File DV complaint before Magistrate",
      "Magistrate issues ex-parte protection order if urgent",
      "Hearing on residence and monetary relief",
      "Final order within 60 days",
      "Parallel criminal complaint under 498A if needed",
    ],
    documents: [
      { name: "WCD Ministry — DV Resources", link: "https://wcd.nic.in/" },
      { name: "Telangana State Women Commission", link: "https://tswc.gov.in/" },
      { name: "Medical Report", link: "https://www.nhp.gov.in/" },
      { name: "ID Proof and Marriage Certificate", link: "https://uidai.gov.in/" },
    ],
    similarCases: [
      "V.D. Bhanot vs Savita Bhanot (2012) — DV Act applies to past relationships too",
      "S.R. Batra vs Taruna Batra (2007) — Shared household definition",
      "Indra Sarma vs V.K.V. Sarma (2013) — Live-in relationships under DV Act",
    ],
  },

  employment: {
    summary: "This issue relates to workplace disputes including wrongful termination, unpaid wages, or labor law violations under the Industrial Disputes Act, 1947 and related statutes.",
    arguments: [
      "Unfair termination without due process violates Industrial Disputes Act, 1947",
      "Non-payment of wages is punishable under Payment of Wages Act, 1936",
      "Mandatory retrenchment compensation under Section 25F ID Act",
      "Standing orders govern service conditions in industrial establishments",
      "Right to reinstatement with back wages if termination found illegal",
    ],
    timeline: [
      "Send written complaint to employer",
      "File complaint before Labour Commissioner",
      "Conciliation proceedings",
      "Reference to Labour Court / Industrial Tribunal",
      "Hearing and award",
      "Execution of award",
    ],
    documents: [
      { name: "Telangana Labour Department", link: "https://labour.telangana.gov.in/" },
      { name: "Employment Contract", link: "https://www.indiacode.nic.in/" },
      { name: "Salary Slips / Bank Statements", link: "https://www.epfindia.gov.in/" },
      { name: "Termination Letter", link: "https://labour.telangana.gov.in/" },
    ],
    similarCases: [
      "Workmen vs Firestone Tyre (1973) — Retrenchment compensation",
      "Punjab National Bank vs Astamija Dash (2008) — Wrongful termination",
      "Bharat Forge Co. vs Uttam Manohar Nakate (2005) — Misconduct and dismissal",
    ],
  },

  divorce: {
    summary: "This issue relates to divorce or matrimonial disputes. Hindu couples are governed by the Hindu Marriage Act, 1955. Grounds include cruelty, desertion, adultery, and mutual consent.",
    arguments: [
      "Grounds for divorce under Section 13 Hindu Marriage Act, 1955",
      "Mutual consent divorce under Section 13B — fastest route",
      "Wife entitled to maintenance under Section 125 CrPC regardless of religion",
      "Permanent alimony under Section 25 Hindu Marriage Act",
      "Custody of minor children governed by best interest principle",
    ],
    timeline: [
      "File divorce petition in Family Court",
      "Service of notice to spouse",
      "Attempt at mediation / reconciliation",
      "Evidence and hearing",
      "Decree of divorce",
      "Appeal if aggrieved — High Court",
    ],
    documents: [
      { name: "Telangana Family Courts", link: "https://tshc.gov.in/" },
      { name: "Marriage Certificate", link: "https://registration.telangana.gov.in/" },
      { name: "ID and Address Proof", link: "https://uidai.gov.in/" },
      { name: "Income/Asset Documents for Alimony", link: "https://incometax.gov.in/" },
    ],
    similarCases: [
      "Naveen Kohli vs Neelu Kohli (2006) — Irretrievable breakdown as divorce ground",
      "Savitaben vs State of Gujarat (2005) — Maintenance rights",
      "Githa Hariharan vs Reserve Bank of India (1999) — Equal guardianship rights",
    ],
  },

  cheque: {
    summary: "This issue relates to dishonour of a cheque under Section 138 of the Negotiable Instruments Act, 1881. It is both a civil and criminal remedy.",
    arguments: [
      "Cheque bounce is a criminal offence under Section 138 NI Act",
      "Conviction can result in imprisonment up to 2 years or double cheque amount as fine",
      "Statutory demand notice must be sent within 30 days of cheque bounce",
      "Complaint must be filed within 30 days of notice period expiry",
      "Civil suit for recovery can be filed simultaneously",
    ],
    timeline: [
      "Receive cheque dishonour memo from bank",
      "Send legal demand notice within 30 days",
      "Wait 15 days for payment",
      "File Section 138 complaint in Magistrate Court within 30 days",
      "Summons issued to accused",
      "Trial and judgment",
    ],
    documents: [
      { name: "Cheque and Dishonour Memo", link: "https://districts.ecourts.gov.in/" },
      { name: "Legal Notice Copy with Postal Receipt", link: "https://www.indiacode.nic.in/" },
      { name: "Bank Statement", link: "https://www.onlinesbi.sbi/" },
      { name: "e-Courts Filing Portal", link: "https://efiling.ecourts.gov.in/" },
    ],
    similarCases: [
      "Kusum Ingots vs Pennar Peterson (2000) — Jurisdiction in cheque bounce",
      "M.S. Narayana Menon vs State of Kerala (2006) — Burden of proof in 138 NI Act",
      "Dashrath Rupsingh Rathod vs State of Maharashtra (2014) — Territorial jurisdiction",
    ],
  },

  land: {
    summary: "This issue relates to land acquisition, revenue disputes, or Telangana land records. The Dharani portal governs mutation and registration of agricultural lands in Telangana.",
    arguments: [
      "Land acquisition must follow Right to Fair Compensation Act, 2013",
      "Mutation in Dharani is mandatory after purchase of agricultural land",
      "Pahani (ROR) is primary revenue record and can be challenged if incorrect",
      "Prohibited lands in Telangana cannot be purchased — Section 22-A Registration Act",
      "Land assigned to SC/ST cannot be transferred without government permission",
    ],
    timeline: [
      "Verify land records on Dharani/Mee Bhoomi portal",
      "Identify dispute (mutation pending, encroachment, wrong entries)",
      "File objection before Tahsildar / MRO",
      "Revenue Court hearing",
      "Appeal to RDO / Collector if needed",
      "High Court writ if revenue remedy fails",
    ],
    documents: [
      { name: "Dharani Portal — Telangana", link: "https://dharani.telangana.gov.in/" },
      { name: "Mee Bhoomi Land Records", link: "https://meebhoomi.ap.gov.in/" },
      { name: "IGRS Telangana — Registration", link: "https://registration.telangana.gov.in/" },
      { name: "Telangana Revenue Department", link: "https://revenue.telangana.gov.in/" },
    ],
    similarCases: [
      "Padmaja Sharma vs State of Telangana (2021) — Dharani portal dispute",
      "Hindustan Zinc vs State of Rajasthan (2015) — Land acquisition compensation",
      "Indore Development Authority vs Manoharlal (2020) — Land acquisition retrospectivity",
    ],
  },

  motor: {
    summary: "This issue relates to motor accident claims under the Motor Vehicles Act, 1988. Victims can claim compensation from insurance companies before Motor Accident Claims Tribunals (MACT).",
    arguments: [
      "Victim entitled to compensation under Section 166 Motor Vehicles Act",
      "No-fault liability under Section 163A for death or permanent disability",
      "Insurance company is liable to pay — insurer cannot deny on technical grounds",
      "Structured formula (Second Schedule) for compensation calculation",
      "Hit-and-run compensation available from Solatium Fund",
    ],
    timeline: [
      "Report accident to police and obtain FIR",
      "Seek medical treatment and preserve records",
      "File claim petition before MACT within 6 months (preferred)",
      "Notice to insurance company",
      "Evidence and medical expert testimony",
      "Award by MACT — appeal to High Court if needed",
    ],
    documents: [
      { name: "Telangana MACT e-Filing", link: "https://tshc.gov.in/" },
      { name: "FIR Copy", link: "https://www.tspolice.gov.in/" },
      { name: "Medical Records and Bills", link: "https://www.nhp.gov.in/" },
      { name: "Insurance Policy of Vehicle", link: "https://www.irdai.gov.in/" },
      { name: "Driving License / RC", link: "https://parivahan.gov.in/" },
    ],
    similarCases: [
      "National Insurance vs Pranay Sethi (2017) — Compensation calculation formula",
      "Rajwati vs United India Insurance (2019) — No-fault liability",
      "Sarla Verma vs DTC (2009) — Multiplier method for compensation",
    ],
  },

  medical: {
    summary: "This issue relates to medical negligence by a doctor, hospital, or healthcare provider. Remedies exist under consumer law, tort law, and criminal law.",
    arguments: [
      "Doctor owes duty of care — breach leads to negligence claim",
      "Medical negligence actionable before Consumer Forum under CP Act 2019",
      "Criminal negligence under Section 304A IPC if death caused by rash/negligent act",
      "Hospital vicariously liable for employed doctors' negligence",
      "Informed consent is mandatory before any procedure",
    ],
    timeline: [
      "Obtain all medical records immediately",
      "Get independent medical opinion",
      "File complaint before District Consumer Forum or High Court",
      "Medical expert evidence critical",
      "NMC / State Medical Council complaint for disciplinary action",
      "Award of compensation",
    ],
    documents: [
      { name: "National Medical Commission", link: "https://www.nmc.org.in/" },
      { name: "Telangana Medical Council", link: "https://tsmc.telangana.gov.in/" },
      { name: "Medical Records / Discharge Summary", link: "https://www.nhp.gov.in/" },
      { name: "Consumer e-Daakhil Portal", link: "https://edaakhil.nic.in/" },
    ],
    similarCases: [
      "Jacob Mathew vs State of Punjab (2005) — Standard of care in medical negligence",
      "Spring Meadows vs Harjol Ahluwalia (1998) — Hospital liability",
      "V. Kishan Rao vs Nikhil Super Speciality Hospital (2010) — Consumer forum jurisdiction",
    ],
  },

  harassment: {
    summary: "This issue relates to workplace sexual harassment governed by the Prevention, Protection and Redressal of Sexual Harassment at Workplace Act (POSH Act), 2013.",
    arguments: [
      "POSH Act, 2013 mandates Internal Complaints Committee (ICC) in every organisation",
      "Any unwelcome sexual conduct — verbal, physical, or digital — constitutes harassment",
      "Complaint must be filed within 3 months of incident",
      "Employer liable if ICC not constituted or complaint not addressed",
      "Section 509 IPC — criminal remedy for word/gesture insulting modesty of woman",
    ],
    timeline: [
      "File written complaint with ICC within 3 months",
      "ICC conducts inquiry within 90 days",
      "Interim relief — transfer, leave — available during inquiry",
      "ICC submits report to employer",
      "Employer takes action within 60 days",
      "Appeal to courts if dissatisfied",
    ],
    documents: [
      { name: "SHe-Box Portal (Govt Employees)", link: "https://shebox.nic.in/" },
      { name: "Telangana Women Safety Wing", link: "https://www.tspolice.gov.in/" },
      { name: "POSH Act Guidelines", link: "https://wcd.nic.in/" },
      { name: "Complaint to Labour Commissioner", link: "https://labour.telangana.gov.in/" },
    ],
    similarCases: [
      "Vishaka vs State of Rajasthan (1997) — Foundation of POSH Act",
      "Medha Kotwal Lele vs Union of India (2012) — POSH implementation",
      "Apparel Export Promotion Council vs A.K. Chopra (1999) — Scope of sexual harassment",
    ],
  },

  rent: {
    summary: "This issue relates to non-payment of rent or rent-related disputes between landlord and tenant governed by the Telangana Rent Control Act, 1960.",
    arguments: [
      "Landlord entitled to evict for non-payment of rent under Rent Control Act",
      "Tenant must pay arrears within time given by court to avoid eviction",
      "Rent cannot be increased arbitrarily — governed by Rent Control provisions",
      "Landlord cannot cut electricity or water supply to force eviction — illegal",
      "Tenant entitled to receipt for every rent payment",
    ],
    timeline: [
      "Issue notice to tenant for rent arrears",
      "File petition before Rent Control Court",
      "Tenant given opportunity to pay arrears",
      "If unpaid, eviction order passed",
      "Execution through court bailiff",
    ],
    documents: [
      { name: "Rental Agreement Registration", link: "https://registration.telangana.gov.in/" },
      { name: "Rent Receipts", link: "https://igrs.telangana.gov.in/" },
      { name: "Telangana High Court", link: "https://tshc.gov.in/" },
    ],
    similarCases: [
      "Satyawati Sharma vs Union of India (2008) — Rent control constitutionality",
      "Prabhakaran vs P.J. Rajendran (2006) — Tenant's right to contest eviction",
      "Gian Devi Anand vs Jeevan Kumar (1985) — Scope of Rent Control Acts",
    ],
  },

  writ: {
    summary: "This issue relates to filing a writ petition in the Telangana High Court under Article 226 of the Constitution against government authorities for violation of fundamental or legal rights.",
    arguments: [
      "Article 226 empowers High Court to issue writs against state and its instrumentalities",
      "Habeas Corpus — for illegal detention",
      "Mandamus — to compel a public authority to perform its duty",
      "Certiorari — to quash orders of inferior tribunals",
      "Prohibition — to stop inferior courts from exceeding jurisdiction",
    ],
    timeline: [
      "Identify the fundamental/legal right violated",
      "Send representation to authority (preferred before filing writ)",
      "Draft writ petition with cause of action",
      "File in Telangana High Court",
      "Interim stay/relief if urgent",
      "Main hearing and final order",
    ],
    documents: [
      { name: "Telangana High Court e-Filing", link: "https://tshc.gov.in/" },
      { name: "Advocate Bar Association Hyderabad", link: "https://hcba.in/" },
      { name: "Government Order / Notice Impugned", link: "https://goir.telangana.gov.in/" },
    ],
    similarCases: [
      "Bandhua Mukti Morcha vs Union of India (1984) — Expansive use of Article 32/226",
      "L. Chandra Kumar vs Union of India (1997) — High Court writ jurisdiction",
      "T.C. Basappa vs T. Nagappa (1954) — Certiorari in India",
    ],
  },

  rti: {
    summary: "This issue relates to filing an RTI (Right to Information) application under the RTI Act, 2005 to obtain information from any public authority.",
    arguments: [
      "Every citizen has right to information under RTI Act, 2005",
      "Public authority must respond within 30 days (48 hours for life/liberty matters)",
      "Refusal or delay can be challenged before First Appellate Authority",
      "Second appeal lies before Telangana Information Commission",
      "PIO can be penalised ₹250/day up to ₹25,000 for delay",
    ],
    timeline: [
      "Identify the public authority holding information",
      "File RTI application with ₹10 fee (BPL exempted)",
      "Response within 30 days",
      "First appeal within 30 days of refusal/non-response",
      "Second appeal to Telangana Information Commission",
      "High Court writ if TIC order not complied with",
    ],
    documents: [
      { name: "RTI Online Portal", link: "https://rtionline.gov.in/" },
      { name: "Telangana Information Commission", link: "https://tsic.telangana.gov.in/" },
      { name: "RTI Application Format", link: "https://rtionline.gov.in/" },
    ],
    similarCases: [
      "CBSE vs Aditya Bandopadhyay (2011) — RTI and fiduciary relationship",
      "Girish Ramchandra Deshpande vs CIC (2012) — Personal information and RTI",
      "Bihar Public Service Commission vs Saiyed Hussain Abbas Rizwi (2012) — RTI scope",
    ],
  },

  succession: {
    summary: "This issue relates to inheritance, Will, or succession disputes after the death of a family member. Hindu succession is governed by the Hindu Succession Act, 1956.",
    arguments: [
      "Legal heirs have right to equal share in intestate succession under HSA 1956",
      "Daughter has equal coparcenary rights after 2005 amendment to HSA",
      "Will must be registered and attested by two witnesses to be valid",
      "Probate required for Will in certain cities — apply to civil court",
      "Nominee in bank/insurance is not automatic legal heir — succession governs",
    ],
    timeline: [
      "Obtain death certificate of deceased",
      "Identify assets and liabilities",
      "Apply for Legal Heir Certificate from Tahsildar",
      "File for Succession Certificate in Civil Court if needed",
      "Probate of Will if applicable",
      "Transfer of assets to legal heirs",
    ],
    documents: [
      { name: "Death Certificate (GHMC/Municipality)", link: "https://www.ghmc.gov.in/" },
      { name: "Legal Heir Certificate (MeeSeva)", link: "https://meeseva.telangana.gov.in/" },
      { name: "Telangana Civil Courts", link: "https://districts.ecourts.gov.in/" },
      { name: "Will Registration", link: "https://registration.telangana.gov.in/" },
    ],
    similarCases: [
      "Vineeta Sharma vs Rakesh Sharma (2020) — Daughters equal coparceners",
      "Ganduri Koteshwaramma vs Chakiri Yanadi (2011) — Retrospective HSA amendment",
      "Smt. Savita Samvedi vs Union of India (1996) — Nomination vs succession",
    ],
  },

  police: {
    summary: "This issue relates to police misconduct, illegal detention, custodial violence, or abuse of power by law enforcement officers.",
    arguments: [
      "Custodial violence is a violation of Article 21 — fundamental right to life",
      "FIR must be registered against police officers for cognizable offences",
      "Complaint to SP, DIG, or DGP through chain of command",
      "State Human Rights Commission / National Human Rights Commission remedy available",
      "Magistrate can inquire into custody deaths under Section 176 CrPC",
    ],
    timeline: [
      "Document injuries / evidence of misconduct immediately",
      "File written complaint to SP / Commissioner of Police",
      "File complaint before NHRC / Telangana SHRC",
      "Approach Magistrate under Section 156(3) CrPC",
      "File writ in High Court for compensation",
      "Criminal prosecution of erring officer",
    ],
    documents: [
      { name: "Telangana Police Grievance Portal", link: "https://www.tspolice.gov.in/" },
      { name: "Telangana Human Rights Commission", link: "https://tshrc.telangana.gov.in/" },
      { name: "NHRC Online Complaint", link: "https://nhrc.nic.in/" },
      { name: "Medical Evidence / Photographs", link: "https://www.nhp.gov.in/" },
    ],
    similarCases: [
      "DK Basu vs State of West Bengal (1997) — Guidelines on custodial deaths",
      "Nilabati Behera vs State of Orissa (1993) — Compensation for custodial death",
      "D. Bhuvan Mohan Patnaik vs State of AP (1975) — Prisoner rights",
    ],
  },

  education: {
    summary: "This issue relates to educational disputes — college admission, fee refund, ragging, or denial of certificate. The Right to Education Act 2009 applies to children up to 14 years.",
    arguments: [
      "Right to Education under Article 21A for children aged 6–14 years",
      "Fee refund on withdrawal governed by UGC/AICTE regulations",
      "Anti-ragging provisions under UGC Regulations 2009 — institution liable",
      "Withholding certificates for pending dues is illegal per Supreme Court",
      "Reservation benefits must be provided as per SC/ST/OBC quotas",
    ],
    timeline: [
      "File complaint with college grievance committee",
      "Approach university ombudsman",
      "File complaint with UGC / AICTE / respective regulatory body",
      "District Consumer Forum for fee disputes",
      "High Court writ for fundamental rights violation",
    ],
    documents: [
      { name: "UGC Student Grievance Portal", link: "https://grievance.ugc.ac.in/" },
      { name: "AICTE Grievance Portal", link: "https://www.aicte-india.org/" },
      { name: "Telangana Education Department", link: "https://school.telangana.gov.in/" },
      { name: "Anti-Ragging Helpline", link: "https://www.antiragging.in/" },
    ],
    similarCases: [
      "P.A. Inamdar vs State of Maharashtra (2005) — Minority institution admission",
      "T.M.A. Pai Foundation vs State of Karnataka (2002) — Education and Article 19",
      "Unni Krishnan vs State of AP (1993) — Right to education as fundamental right",
    ],
  },

  environment: {
    summary: "This issue relates to environmental violations — industrial pollution, illegal construction, encroachment on water bodies, or violation of environmental clearances in Telangana.",
    arguments: [
      "Right to clean environment is part of Article 21 — right to life",
      "Polluter pays principle — violator must compensate for environmental damage",
      "NGT (National Green Tribunal) has jurisdiction over all environmental disputes",
      "Telangana State Pollution Control Board can initiate action against industries",
      "Illegal construction near lakes/nalas violates GO 111 and HMDA regulations",
    ],
    timeline: [
      "Document the violation with photographs and evidence",
      "File complaint with TSPCB / HMDA / GHMC",
      "Approach NGT Southern Zone, Chennai (for Telangana cases)",
      "NGT issues notice and calls for report",
      "Hearing and interim directions",
      "Final order with compensation / restoration directions",
    ],
    documents: [
      { name: "National Green Tribunal", link: "https://www.greentribunal.gov.in/" },
      { name: "Telangana Pollution Control Board", link: "https://tspcb.cgg.gov.in/" },
      { name: "HMDA (Hyderabad)", link: "https://www.hmda.gov.in/" },
      { name: "GHMC Complaint Portal", link: "https://www.ghmc.gov.in/" },
    ],
    similarCases: [
      "MC Mehta vs Union of India (1987) — Absolute liability for hazardous industries",
      "Vellore Citizens Welfare Forum vs Union of India (1996) — Precautionary principle",
      "T.N. Godavarman vs Union of India (1997) — Forest protection",
    ],
  },

  sc_st: {
    summary: "This issue relates to atrocities against Scheduled Castes or Scheduled Tribes under the SC/ST (Prevention of Atrocities) Act, 1989, which provides stringent punishment for caste-based discrimination and violence.",
    arguments: [
      "SC/ST Act 1989 provides special court and exclusive jurisdiction for atrocity cases",
      "Caste-based abuse, humiliation, or denial of rights is punishable",
      "Anticipatory bail is not available to accused under SC/ST Act per Supreme Court",
      "Complaint must be registered as FIR — police cannot treat it as non-cognizable",
      "Victim entitled to interim relief and compensation under SC/ST Rules 1995",
    ],
    timeline: [
      "File complaint at police station — must be registered as FIR",
      "SP level officer must investigate",
      "Exclusive Special Court handles trial",
      "Interim compensation within 7 days of FIR",
      "Chargesheet within 60 days",
      "Fast-track trial in Special SC/ST Court",
    ],
    documents: [
      { name: "Telangana SC/ST Welfare Department", link: "https://www.telangana.gov.in/" },
      { name: "National Commission for SC", link: "https://ncsc.nic.in/" },
      { name: "National Commission for ST", link: "https://ncst.gov.in/" },
      { name: "Telangana Police Portal", link: "https://www.tspolice.gov.in/" },
    ],
    similarCases: [
      "Subhash Kashinath Mahajan vs State of Maharashtra (2018) — SC/ST Act (later reviewed)",
      "Union of India vs State of Maharashtra (2019) — Restoration of original SC/ST Act provisions",
      "Prithvi Raj Chauhan vs Union of India (2020) — Amendment validity",
    ],
  },

  insurance: {
    summary: "This issue relates to insurance claim disputes — health, vehicle, life, or property insurance — where the insurer has denied, delayed, or underpaid a valid claim.",
    arguments: [
      "Insurance company must settle claim within 30 days of receiving documents",
      "Repudiation of valid claim amounts to deficiency in service under CP Act",
      "IRDAI Ombudsman provides free redressal for claims up to ₹50 lakh",
      "Delay in claim settlement attracts 9% interest per year",
      "Good faith and uberrimae fidei principle — insurer cannot deny on minor non-disclosure",
    ],
    timeline: [
      "File claim with all required documents",
      "Follow up if not settled within 30 days",
      "Send written complaint to insurer's grievance cell",
      "File complaint with Insurance Ombudsman (free and fast)",
      "Consumer Forum if Ombudsman remedy insufficient",
      "High Court writ if public insurer",
    ],
    documents: [
      { name: "IRDAI Bima Bharosa Portal", link: "https://bimabharosa.irdai.gov.in/" },
      { name: "Insurance Ombudsman Portal", link: "https://cioins.co.in/" },
      { name: "Policy Document", link: "https://www.irdai.gov.in/" },
      { name: "Claim Rejection Letter", link: "https://bimabharosa.irdai.gov.in/" },
    ],
    similarCases: [
      "United India Insurance vs M/s Harchand Rai (2004) — Good faith in insurance",
      "LIC vs Consumer Education Research Centre (1995) — Insurance as service",
      "New India Assurance vs Triton Shipping (2019) — Marine insurance claim",
    ],
  },

  adoption: {
    summary: "This issue relates to legal adoption of a child in India under the Hindu Adoption and Maintenance Act, 1956 (for Hindus) or CARA/JJ Act process for all religions.",
    arguments: [
      "Legal adoption requires compliance with HAMA 1956 or CARA/JJ Act 2015",
      "Only CARA-registered agencies can facilitate inter-country adoption",
      "Adoptive parents must meet eligibility criteria under Adoption Regulations 2022",
      "Rights of adopted child equal to biological child — including inheritance",
      "Informal/illegal adoption without documentation has no legal standing",
    ],
    timeline: [
      "Register on CARA portal",
      "Home study report by licensed agency",
      "Child matching and referral",
      "Pre-adoption foster care",
      "Petition before District Court / Family Court",
      "Adoption order and registration",
    ],
    documents: [
      { name: "CARA National Adoption Portal", link: "https://cara.wcd.gov.in/" },
      { name: "Telangana Family Courts", link: "https://tshc.gov.in/" },
      { name: "Birth Certificate of Child", link: "https://www.ghmc.gov.in/" },
      { name: "ID and Income Proof of Adoptive Parents", link: "https://uidai.gov.in/" },
    ],
    similarCases: [
      "Laxmikant Pandey vs Union of India (1984) — Inter-country adoption guidelines",
      "ABC vs State of NCT Delhi (2015) — Single parent adoption rights",
      "Shabnam Hashmi vs Union of India (2014) — Adoption rights regardless of religion",
    ],
  },

};

const keywordMap = {
  arrest: "arrest", arrested: "arrest", detained: "arrest", custody: "arrest", "without warrant": "arrest",
  bail: "bail", "anticipatory bail": "bail", remand: "bail", "default bail": "bail",
  property: "property", ownership: "property", possession: "property", encroachment: "property", "sale deed": "property",
  tenant: "tenant", landlord: "tenant", vacate: "tenant", eviction: "tenant", rent: "rent",
  cyber: "cyber", fraud: "cyber", "online scam": "cyber", phishing: "cyber", hacked: "cyber", "otp fraud": "cyber",
  fir: "fir", "first information": "fir", "police refuse": "fir", "not registering": "fir",
  consumer: "consumer", "defective product": "consumer", refund: "consumer", "deficient service": "consumer",
  domestic: "domestic", "domestic violence": "domestic", "498a": "domestic", cruelty: "domestic", "wife beating": "domestic",
  employment: "employment", "wrongful termination": "employment", fired: "employment", wages: "employment", "labour dispute": "employment",
  divorce: "divorce", separation: "divorce", alimony: "divorce", maintenance: "divorce", matrimonial: "divorce",
  cheque: "cheque", "cheque bounce": "cheque", dishonour: "cheque", "138": "cheque", "bounced cheque": "cheque",
  land: "land", "land records": "land", pahani: "land", dharani: "land", mutation: "land", "land acquisition": "land",
  accident: "motor", "motor accident": "motor", mact: "motor", "vehicle accident": "motor", "road accident": "motor",
  medical: "medical", "medical negligence": "medical", doctor: "medical", hospital: "medical", malpractice: "medical",
  harassment: "harassment", "sexual harassment": "harassment", posh: "harassment", workplace: "harassment",
  writ: "writ", habeas: "writ", mandamus: "writ", "high court": "writ", certiorari: "writ",
  rti: "rti", "right to information": "rti", "information act": "rti", "public information": "rti",
  succession: "succession", inheritance: "succession", will: "succession", "legal heir": "succession", probate: "succession",
  police: "police", "police misconduct": "police", "custodial violence": "police", "police brutality": "police",
  education: "education", college: "education", university: "education", ragging: "education", "fee refund": "education",
  environment: "environment", pollution: "environment", ngt: "environment", "lake encroachment": "environment",
  "sc/st": "sc_st", "scheduled caste": "sc_st", "scheduled tribe": "sc_st", atrocity: "sc_st", "caste discrimination": "sc_st",
  insurance: "insurance", "insurance claim": "insurance", "claim denied": "insurance", "health insurance": "insurance",
  adoption: "adoption", "child adoption": "adoption", cara: "adoption", "adopt a child": "adoption",
};

export function getLegalResponse(input) {
  const lower = input.toLowerCase();

  for (const keyword of Object.keys(keywordMap)) {
    if (lower.includes(keyword)) {
      const category = keywordMap[keyword];
      if (category in legalData) {
        return legalData[category];
      }
    }
  }

  return {
    summary: "Your query could not be matched to a specific legal category. Please consult a qualified advocate for advice tailored to your situation.",
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


export default legalData;