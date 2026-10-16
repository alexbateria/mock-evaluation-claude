// examQuestions_v3.js
// Claude Associate Foundations - practice exam bank, set 3 (60 new questions, mock-exam register)
// Types: 12 multiple_response (type: "multiple", 5 options A-E, selectCount 2 or 3)
//        48 multiple_choice = 30 standard scenario + 10 "what should you do first" + 8 ordering
// Domains: Prompting 8 | Output Evaluation 13 | Product/Model Selection 7 | Workflow Integration 10
//          Configuration 7 | Governance 9 | Troubleshooting 6
// 12 multiple_choice questions use a near-miss pair (two options that differ by 1-2 words).
// time: 60 s (standard, first, multiple_response) / 90 s (ordering).
// Explanation format: "X is correct: [reason]. A ...; B ...; C ..."

const PROMPTING = "Prompting and Task Execution";
const OUTPUT = "Output Evaluation and Validation";
const PRODUCT = "Product and Model Selection";
const WORKFLOW = "Workflow Integration and Solution Design";
const CONFIG = "Configuration and Knowledge Management";
const GOVERNANCE = "Governance, Risk, and Responsible Use";
const TROUBLE = "Troubleshooting and Optimisation";

const examQuestionsV3 = [
  {
    id: 1,
    domain: PRODUCT,
    time: 60,
    question:
      "A solo consultant works with three clients and wants Claude to remember client A's terminology without it appearing in client B's or client C's work. Which setup is most appropriate?",
    answers: [
      { answer: "Use a separate Project for each client, so that knowledge and instructions stay scoped to that client's chats", trueAnswer: true },
      { answer: "Paste each client's glossary at the start of every chat and rely on Claude not to mix them up", trueAnswer: false },
      { answer: "Use one long chat for all clients, since a single conversation keeps client contexts separate automatically", trueAnswer: false },
      { answer: "Store all three clients' terminology in one general memory and ask Claude to apply the right one by client name", trueAnswer: false },
    ],
    explanation:
      "A is correct: a Project per client scopes knowledge and instructions, which prevents terminology from crossing between clients. B relies on the model to keep contexts apart where scoping is needed; C makes a false claim, since mixed context in one chat leaks across clients; D wrongly assumes that a single shared memory keeps contexts separate.",
  },
  {
    id: 2,
    domain: CONFIG,
    time: 60,
    question:
      "A sales Project holds 70 documents, including two pricing sheets: v3 with a 12% volume discount and v4 with an 8% discount. Reps report mixed discount answers. Which configuration change most directly fixes this?",
    answers: [
      { answer: "Upload v4 two more times so that the repeated content outweighs v3 when Claude retrieves pricing information", trueAnswer: false },
      { answer: "Remove pricing sheet v3 and state in the instructions that v4 is the only authoritative pricing source", trueAnswer: true },
      { answer: "Ask reps to say 'use v4' in each chat, since Project instructions cannot refer to file versions", trueAnswer: false },
      { answer: "Remove pricing sheet v3 and state in the instructions that v4 is the primary pricing source", trueAnswer: false },
    ],
    explanation:
      "B is correct: removing the superseded sheet and naming one authoritative source eliminates the conflict. A duplicates content without removing the conflicting source; C makes a false claim, since instructions can name an authoritative file; D implies that other sources may also count, leaving room for conflicting answers.",
  },
  {
    id: 3,
    domain: GOVERNANCE,
    time: 60,
    question:
      "An HR coordinator discovers that a manager used a personal Claude account to summarize 15 employee grievance files, which contain medical details. No policy covers this. What should the coordinator do first?",
    answers: [
      { answer: "Notify all 15 employees immediately, before confirming which details were actually entered", trueAnswer: false },
      { answer: "Draft an AI acceptable-use policy and circulate it for comment across all departments next quarter", trueAnswer: false },
      { answer: "Stop further use and identify which grievance files and details were entered, before deciding who must be notified and what policy changes are needed", trueAnswer: true },
      { answer: "Purchase an enterprise plan for HR and migrate the team's AI use to it next month, without changing any other component, from that point onward", trueAnswer: false },
    ],
    explanation:
      "C is correct: containment and scoping come first, because notification and policy decisions depend on what was exposed. A notifies before the scope of the exposure is known; B is a valid preventive step, but it does not stop the current exposure; D is a valid structural step, but it leaves the exposure unscoped.",
  },
  {
    id: 4,
    domain: PROMPTING,
    time: 60,
    type: "multiple",
    selectCount: 2,
    question:
      "A strategy team asks Claude to condense 20 customer-call transcripts into an executive brief. The brief is vague and misses figures that customers mentioned. Which two prompt elements most improve it? (Select 2.)",
    answers: [
      { answer: "Require the brief to list every figure that customers mentioned together with the speaker's account name", trueAnswer: true },
      { answer: "Increase the temperature so that the model surfaces less obvious points hidden inside the transcripts", trueAnswer: false },
      { answer: "Specify the executive audience, a 300-word limit, and three headings: needs, objections, and requests", trueAnswer: true },
      { answer: "Tell Claude to include everything important, which guarantees that no figure or objection is omitted", trueAnswer: false },
      { answer: "Ask for the shortest possible brief, since brevity forces the model to select only the most useful figures", trueAnswer: false },
    ],
    explanation:
      "A and C are correct: a required figure list and a defined audience, length, and structure make the brief specific and checkable. B adds randomness, which does not make the extraction more complete; D uses a vague instruction as a guarantee of completeness; E treats brevity as a selection method, which drops figures at random.",
  },
  {
    id: 5,
    domain: TROUBLE,
    time: 60,
    question:
      "A document-analysis feature calls Opus 3,000 times daily for 400-token classification tasks. Average latency is 11 seconds, and cost is 50% above target. Tests show equal accuracy on Haiku for 90% of cases. Which optimization is most appropriate?",
    answers: [
      { answer: "Enable extended thinking on every call, since deeper reasoning always reduces latency and cost", trueAnswer: false },
      { answer: "Cap daily calls at 1,500, since lower volume resolves the tier mismatch", trueAnswer: false },
      { answer: "Increase max_tokens to reduce the number of calls, which lowers both latency and spend for all cases, without any change to the prompt itself", trueAnswer: false },
      { answer: "Route the routine 90% to Haiku, keep Opus for the harder cases identified by evaluation, and trim any unneeded prompt text", trueAnswer: true },
    ],
    explanation:
      "D is correct: matching the tier to task difficulty and trimming the prompt reduces latency and cost without losing quality. A adds reasoning tokens and latency instead of reducing them; B restricts usage and leaves the tier mismatch untouched; C raises an output ceiling, which does not reduce calls, latency, or spend.",
  },
  {
    id: 6,
    domain: WORKFLOW,
    time: 60,
    question:
      "After a five-week pilot, Claude cut the time to produce monthly KPI packs from 14 hours to 6 hours across 8 packs. Two packs contained mislabeled metrics. How should the team present this to leadership?",
    answers: [
      { answer: "Report that mislabeling will not recur because the pilot team has already fixed the prompt", trueAnswer: false },
      { answer: "Report the 57% time saving, disclose the two packs with mislabeled metrics, and state that an analyst check on metric labels remains part of the process", trueAnswer: true },
      { answer: "Report that the analyst check can end, since six of eight packs were correct on the first attempt", trueAnswer: false },
      { answer: "Report the time saving only, since two packs out of eight is too few to mention to leadership, from that point onward, regardless of what the source material shows", trueAnswer: false },
    ],
    explanation:
      "B is correct: a measured benefit is reported together with the observed errors and the control that remains. A promises a guarantee that a probabilistic system cannot give; C treats a 75% clean rate as a guarantee for leadership reporting; D omits a limitation, which damages credibility when errors resurface.",
  },
  {
    id: 7,
    domain: GOVERNANCE,
    time: 60,
    type: "multiple",
    selectCount: 3,
    question:
      "A company drafts requirements for AI-generated customer communications across five countries. Compliance wants the requirements to be enforceable. Which three requirements should be included? (Select 3.)",
    answers: [
      { answer: "The company keeps records of prompts, outputs, and approvals for the period that regulators require", trueAnswer: true },
      { answer: "Messages that may be mistaken for human-written correspondence follow the disclosure rules of each country", trueAnswer: true },
      { answer: "Records are unnecessary because Claude can reproduce any past message exactly on request", trueAnswer: false },
      { answer: "Customer-facing content in regulated areas requires approval by a trained reviewer before it is sent", trueAnswer: true },
      { answer: "Outputs from the largest model tier are exempt from review because that tier is accurate on legal topics", trueAnswer: false },
    ],
    explanation:
      "A, B and D are correct: reviewer approval, record keeping, and disclosure rules make the requirements enforceable and auditable. C confuses regeneration with an auditable record of what was sent; E treats a tier's capability as a substitute for required review.",
  },
  {
    id: 8,
    domain: WORKFLOW,
    time: 60,
    question:
      "A plant manager wants Claude to propose maintenance schedules for 120 machines from three years of downtime logs. A sample shows that many log entries lack a root cause. What should the manager do first?",
    answers: [
      { answer: "Build a Project with the logs and instructions for producing maintenance proposals", trueAnswer: false },
      { answer: "Ask Claude to propose schedules for all 120 machines and compare them with the current plan, so that no independent verification is required", trueAnswer: false },
      { answer: "Assess the quality and completeness of the downtime logs, including how many entries lack a root cause, before designing any workflow", trueAnswer: true },
      { answer: "Train maintenance supervisors on prompts that ask Claude to rank machines by failure risk", trueAnswer: false },
    ],
    explanation:
      "C is correct: the quality of the input data limits the value of any schedule, so it is assessed first. A is a valid configuration step, but it presumes the logs are fit for use; B generates output from data of unknown quality; D trains users on a task whose input data has not been assessed.",
  },
  {
    id: 9,
    domain: PROMPTING,
    time: 60,
    type: "multiple",
    selectCount: 3,
    question:
      "A communications manager asks Claude to draft a customer statement about a four-hour outage affecting 20,000 users. The first draft sounds defensive and omits compensation. Which three prompt elements most improve the draft? (Select 3.)",
    answers: [
      { answer: "Tell Claude to avoid sounding defensive, which on its own guarantees that the tone will be accountable, with no further verification afterward", trueAnswer: false },
      { answer: "Give the audience and length, such as a 150-word email to affected customers, with the time of the next update", trueAnswer: true },
      { answer: "State the facts to include: start and end times, the cause, and the compensation of one month's credit", trueAnswer: true },
      { answer: "Specify an accountable, plain tone with a named sender and no blame placed on third parties", trueAnswer: true },
      { answer: "Ask Claude to match the company's earlier statements, assuming it stores previous API conversations", trueAnswer: false },
    ],
    explanation:
      "B, C and D are correct: facts, tone, and audience with length give Claude the content and constraints that the first draft lacked. A treats a vague instruction as a guarantee of tone; E assumes memory of earlier API calls, which a new request does not include.",
  },
  {
    id: 10,
    domain: GOVERNANCE,
    time: 60,
    question:
      "A logistics firm lists three proposed Claude uses: drafting driver-safety newsletters, summarizing 300 customs regulations, and deciding automatically which drivers to dismiss after incident reports, with no human review. Which use should not proceed as proposed?",
    answers: [
      { answer: "Dismissing drivers automatically, because decisions with serious consequences for individuals require human judgment, due process, and accountability", trueAnswer: true },
      { answer: "All three uses are acceptable, since the accuracy of Opus removes the need for human review of dismissals", trueAnswer: false },
      { answer: "Drafting safety newsletters, because AI-assisted newsletters are banned whenever they discuss driver safety", trueAnswer: false },
      { answer: "Summarizing regulations, because summaries of public rules always require written regulator approval before internal use", trueAnswer: false },
    ],
    explanation:
      "A is correct: decisions with serious consequences for individuals need human judgment and due process, while the other two uses are low-risk support tasks. B wrongly claims that a larger tier replaces human review of serious decisions; C states a false absolute that no standard imposes; D states a false absolute about summarizing public rules.",
  },
  {
    id: 11,
    domain: WORKFLOW,
    time: 60,
    type: "multiple",
    selectCount: 2,
    question:
      "An airline wants Claude's help to reduce its 18-day baggage-claim resolution time. It has 150 claim files and notes from six staff interviews. Which two uses of Claude appropriately support the improvement? (Select 2.)",
    answers: [
      { answer: "Propose two or three revised handling flows with the trade-offs of each, for managers to compare and choose", trueAnswer: true },
      { answer: "Approve the new flow once Claude assesses it as lower risk than the existing flow", trueAnswer: false },
      { answer: "Reassign claim handlers automatically using Claude's ranking, without involving the handlers or their managers", trueAnswer: false },
      { answer: "Guarantee that the revised process will resolve claims in seven days, using the claim files as the only basis", trueAnswer: false },
      { answer: "Summarize the claim files and interviews into recurring causes of delay, and present them for staff to validate", trueAnswer: true },
    ],
    explanation:
      "A and E are correct: analysis of the evidence and option generation support human decisions without transferring them to the model. B uses the model's assessment as the approval control; C hands a people decision to the model without consultation; D claims a certainty that historical files cannot support.",
  },
  {
    id: 12,
    domain: GOVERNANCE,
    time: 60,
    question:
      "A lender wants Claude to decide automatically which of 10,000 loan applications to decline. Regulation requires adverse-action explanations and human accountability. Which control is most appropriate?",
    answers: [
      { answer: "Use Claude to prepare case summaries, and require a credit officer to make and document some decline decisions with their stated reasons", trueAnswer: false },
      { answer: "Use Opus for decisions, because the top tier is exempt from adverse-action and explanation rules", trueAnswer: false },
      { answer: "Let Claude decline automatically and generate each adverse-action notice, which meets the explanation requirement by itself", trueAnswer: false },
      { answer: "Use Claude to prepare case summaries, and require a credit officer to make and document every decline decision with its stated reasons", trueAnswer: true },
    ],
    explanation:
      "D is correct: AI supports the preparation, while an accountable person makes and explains each decision that affects an applicant. A leaves part of the declines undocumented and unexplained; B falsely claims that a tier is exempt from regulatory requirements; C treats a model-generated notice as a substitute for human accountability.",
  },
  {
    id: 13,
    domain: PRODUCT,
    time: 60,
    type: "multiple",
    selectCount: 2,
    question:
      "A team needs Claude to write weekly status reports in the same structure every time, drawing on a 120-page project plan that changes monthly. Which two features fit these needs? (Select 2.)",
    answers: [
      { answer: "Haiku, which guarantees the same report structure in every run without any instructions", trueAnswer: false },
      { answer: "A Project with the project plan uploaded as knowledge, updated whenever the plan changes", trueAnswer: true },
      { answer: "Project instructions that define the weekly report structure, so that every chat in the Project follows it", trueAnswer: true },
      { answer: "Artifacts, which store the plan permanently and update it each time the project changes", trueAnswer: false },
      { answer: "Memory, which synchronizes the project plan automatically each time the plan is edited elsewhere, without any further configuration", trueAnswer: false },
    ],
    explanation:
      "B and C are correct: Project knowledge supplies the plan, and Project instructions fix the structure for every chat. A makes a false guarantee about a model tier; D misdescribes artifacts as a self-updating knowledge store; E misdescribes Memory as a synchronization feature.",
  },
  {
    id: 14,
    domain: OUTPUT,
    time: 60,
    question:
      "A Claude summary of a 15-page board report states in its first paragraph that the merger closes in Q2 and in its conclusion that it closes in Q4. The summary will be sent to 40 directors. What is the most appropriate response?",
    answers: [
      { answer: "Use Q4 because the conclusion is the part of a summary that readers trust most", trueAnswer: false },
      { answer: "Lower the temperature to 0 and regenerate, then accept the result if both paragraphs agree", trueAnswer: false },
      { answer: "Ask Claude which quarter is correct and use its answer after it re-reads its own summary, without any independent human check of the result", trueAnswer: false },
      { answer: "Check the report's timeline, correct both references to match it, and review the other dates in the summary for similar inconsistencies", trueAnswer: true },
    ],
    explanation:
      "D is correct: an internal contradiction must be resolved against the source, and related dates should be rechecked. A chooses by position instead of verifying the source; B changes sampling randomness, and agreement does not prove that the date is correct; C relies on the model to judge its own output.",
  },
  {
    id: 15,
    domain: GOVERNANCE,
    time: 60,
    type: "multiple",
    selectCount: 2,
    question:
      "A school network plans to use Claude to draft report-card comments for 6,000 students. Teachers will send the final comments to families. Which two safeguards best align with responsible use? (Select 2.)",
    answers: [
      { answer: "Confirm with the data protection lead that the student data categories and vendor terms comply with applicable rules", trueAnswer: true },
      { answer: "Treat comments as exempt from privacy rules because they do not include grades or test results", trueAnswer: false },
      { answer: "Rely on Claude to remove any information about disabilities or behavior that regulations restrict", trueAnswer: false },
      { answer: "Allow each school to select its own AI tool and set rules after any parent complaint, without any deeper diagnosis", trueAnswer: false },
      { answer: "Require teachers to review and edit each comment for accuracy and fairness before it reaches a family", trueAnswer: true },
    ],
    explanation:
      "A and E are correct: teacher review and a data protection check preserve accuracy, fairness, and legal compliance. B makes a false claim, since comments about students are personal data; C delegates a compliance control to a probabilistic model; D delays governance until after a problem occurs.",
  },
  {
    id: 16,
    domain: PRODUCT,
    time: 60,
    question:
      "A 90-person customer success team asks IT to 'turn on Claude features' for churn analysis. Proposals include a CRM connector, a Project, and Opus for everyone. What should the team lead do first?",
    answers: [
      { answer: "Provision Opus for all users and compare outputs on three sample accounts", trueAnswer: false },
      { answer: "Define the churn analysis questions, the data needed and its sensitivity, then select the features that fit those requirements", trueAnswer: true },
      { answer: "Connect the CRM for all 90 users so that everyone can pull account data into chats, without exception, from that point onward", trueAnswer: false },
      { answer: "Create a Project with last year's churn reports and instructions for the analysis format", trueAnswer: false },
    ],
    explanation:
      "B is correct: requirements decide which features are needed, so they must be defined before any selection. A selects a tier before the quality and cost requirements are defined; C is a valid connector step, but it opens data access before requirements are known; D is a valid configuration step, but it presumes that a Project fits the task.",
  },
  {
    id: 17,
    domain: OUTPUT,
    time: 60,
    question:
      "A product owner shares a draft business case and asks Claude whether it is solid. Claude calls it 'excellent' without noting that the 25% churn assumption has no source. Which prompt change best obtains a useful review?",
    answers: [
      { answer: "Ask Claude to critique the case as a skeptical reviewer, list the unsupported assumptions, and rank them by their impact on the result", trueAnswer: true },
      { answer: "Raise the temperature so that the model produces less agreeable and more varied judgments of the case", trueAnswer: false },
      { answer: "Ask Claude to be more positive so that the team stays motivated while reviewing the numbers", trueAnswer: false },
      { answer: "Ask whether it is sure, and treat a second confirmation as evidence that the assumptions are sound, since the model's own report is sufficient evidence, without exception", trueAnswer: false },
    ],
    explanation:
      "A is correct: a defined critical role with a list of ranked assumptions turns agreement into an actual review. B adds randomness, which does not produce a systematic critique; C encourages agreement instead of scrutiny; D treats repeated agreement as verification.",
  },
  {
    id: 18,
    domain: TROUBLE,
    time: 60,
    type: "multiple",
    selectCount: 2,
    question:
      "An API-based prompt extracts delivery dates from 800 shipping emails and returns the wrong date format in 9% of cases. Which two changes are most likely to reduce these errors? (Select 2.)",
    answers: [
      { answer: "State the exact date format with two examples, and require a fixed value such as unknown when no date appears", trueAnswer: true },
      { answer: "Lower the temperature to 0 and expect all formatting errors to disappear across the 800 emails", trueAnswer: false },
      { answer: "Ask Claude to be careful with date formats, which guarantees that every response uses the correct format", trueAnswer: false },
      { answer: "Increase max_tokens to 2,000 so that the model has more room to reconsider each date before answering, from that point onward", trueAnswer: false },
      { answer: "Validate every output against a date pattern, and retry or flag responses that fail the validation", trueAnswer: true },
    ],
    explanation:
      "A and E are correct: an explicit format with a rule for missing data plus programmatic validation address the ambiguity and catch remaining errors. B expects a guarantee from a setting that only reduces sampling variation; C uses a vague plea as a guarantee instead of adding a rule; D raises an output ceiling, which does not change the format.",
  },
  {
    id: 19,
    domain: GOVERNANCE,
    time: 60,
    question:
      "A product lead wants to paste source code containing proprietary algorithms and API keys into Claude to find a bug before a release in three hours. The AI policy does not mention source code. What should the lead do first?",
    answers: [
      { answer: "Paste only the failing function and keep the rest of the code private to limit exposure", trueAnswer: false },
      { answer: "Ask the security team whether proprietary source code may be entered into the tool, and under what approved conditions", trueAnswer: true },
      { answer: "Delete the conversation after the fix is applied so that the code is no longer stored", trueAnswer: false },
      { answer: "Remove the API keys and paste the code, then ask a teammate to review the proposed fix, for all future requests", trueAnswer: false },
    ],
    explanation:
      "B is correct: whether the code may be entered at all must be settled before any cleanup or review. A is a valid minimization step, but it still enters proprietary code without approval; C acts after exposure and does not establish whether entry was allowed; D is a valid mitigation, but it presumes that entering the code is allowed.",
  },
  {
    id: 20,
    domain: WORKFLOW,
    time: 90,
    question:
      "A team integrates Claude drafts into an existing invoice-dispute process. Consider the following steps:\n1. Extend the workflow to additional dispute categories.\n2. Run drafted responses for one dispute category with specialist review.\n3. Document the current dispute steps, owners, and typical resolution time.\n4. Measure resolution time and error rates for the drafted responses.\n5. Define which disputes require a human specialist from the start.\nWhich sequence orders these steps from first to last?",
    answers: [
      { answer: "5 – 3 – 2 – 4 – 1", trueAnswer: false },
      { answer: "3 – 2 – 5 – 4 – 1", trueAnswer: false },
      { answer: "3 – 5 – 2 – 1 – 4", trueAnswer: false },
      { answer: "3 – 5 – 2 – 4 – 1", trueAnswer: true },
    ],
    explanation:
      "D is correct: the sequence is: document the process (3), define specialist-only disputes (5), run the pilot (2), measure (4), extend (1). A swaps 3 and 5, defining specialist-only disputes before the process is documented; B swaps 5 and 2, running the pilot before the specialist-only disputes are defined; C swaps 4 and 1, extending the workflow before the pilot results are measured.",
  },
  {
    id: 21,
    domain: PROMPTING,
    time: 60,
    question:
      "A sales director asks Claude for a five-message customer email sequence. The first attempt produced five generic emails. The director has details on three customer segments and a 15% discount offer. What should the director do first?",
    answers: [
      { answer: "Save the successful sequence as a Skill so that the sales team can reuse the same procedure, regardless of which layer the problem originates in, without exception", trueAnswer: false },
      { answer: "Gather and state the audience segments, the offer terms, and the goal of each email in the prompt before requesting a revised sequence", trueAnswer: true },
      { answer: "Schedule the five emails in the marketing platform and measure open rates across segments", trueAnswer: false },
      { answer: "Ask Claude to produce ten alternative subject lines for each email and compare them by tone", trueAnswer: false },
    ],
    explanation:
      "B is correct: the generic output comes from missing inputs, so stating them is the first step before any variation or scaling. A is a valid reuse step, but no successful sequence exists yet; C measures a sequence that is still known to be generic; D is a valid refinement step, but it comes after the content inputs are supplied.",
  },
  {
    id: 22,
    domain: CONFIG,
    time: 60,
    question:
      "An admin connects a Notion workspace to Claude for 60 staff. The workspace includes public documents and private pages for HR investigations. The team needs only the engineering wiki. Which configuration is most appropriate?",
    answers: [
      { answer: "Disable access for everyone and have staff copy wiki pages into chats manually every day", trueAnswer: false },
      { answer: "Connect with a single shared admin account for all 60 staff so that access errors are minimized, for all future requests, without changing any other component", trueAnswer: false },
      { answer: "Restrict access to the engineering wiki pages, review the connector's permissions against data policy, and keep HR investigation pages outside the connected scope", trueAnswer: true },
      { answer: "Connect the whole workspace and instruct Claude in its settings not to open HR pages", trueAnswer: false },
    ],
    explanation:
      "C is correct: limiting the connected scope and reviewing permissions controls what Claude can reach. A removes the capability instead of scoping it, and adds manual copy risk; B expands privileges beyond need, which violates least privilege; D relies on an instruction where access itself must be limited.",
  },
  {
    id: 23,
    domain: OUTPUT,
    time: 60,
    question:
      "A grants officer receives a Claude-drafted proposal summary that cites a $2.4 million budget and three prior awards. The proposal is due to the funder in two days. What should the officer do first?",
    answers: [
      { answer: "Verify the budget figure and each cited award against the finance records and award letters before polishing the summary", trueAnswer: true },
      { answer: "Tighten the summary to the funder's 500-word limit and align its headings with the funder's template, from that point onward, at every stage", trueAnswer: false },
      { answer: "Ask Claude to add two more supporting statistics so that the case appears stronger", trueAnswer: false },
      { answer: "Ask a colleague to proofread the grammar and punctuation of the summary", trueAnswer: false },
    ],
    explanation:
      "A is correct: figures and cited awards are the highest-risk content, so they are verified before any polishing. B is a valid formatting step, but it comes after the facts are confirmed; C adds more unverified claims to a summary that is not yet verified; D is a valid proofreading step, but it does not confirm accuracy.",
  },
  {
    id: 24,
    domain: GOVERNANCE,
    time: 60,
    question:
      "A news site plans to publish 30 Claude-written product reviews per week under human bylines without saying that AI was involved. Readers rely on the reviews for purchases. Which approach is most appropriate?",
    answers: [
      { answer: "Disclose AI involvement to readers, have an editor verify each claim against hands-on testing or sources, and keep a named human accountable for what is published", trueAnswer: true },
      { answer: "Use Opus so that disclosure and verification become unnecessary, because the top tier cannot misstate product features, with no exceptions for any plan or tier, in every case", trueAnswer: false },
      { answer: "Disclose AI use in a footer and skip verification, since disclosure alone removes responsibility for accuracy", trueAnswer: false },
      { answer: "Skip disclosure because accurate reviews do not require readers to know how the text was produced", trueAnswer: false },
    ],
    explanation:
      "A is correct: transparency, claim verification, and human accountability protect readers who rely on the reviews. B falsely claims that a tier cannot misstate facts; C confuses disclosure with verification and accountability; D treats accuracy as a replacement for transparency.",
  },
  {
    id: 25,
    domain: OUTPUT,
    time: 90,
    question:
      "Consider the following prompts for a sales data analysis request:\n1. Analyze our sales data.\n2. Analyze our 2025 sales data by region and product line.\n3. Analyze our 2025 sales data by region and product line, and show the three largest year-on-year declines in a table with percentages.\n4. Analyze our data.\n5. Analyze our 2025 sales data.\nWhich sequence orders these prompts from the most general to the most specific?",
    answers: [
      { answer: "4 – 1 – 5 – 3 – 2", trueAnswer: false },
      { answer: "4 – 1 – 5 – 2 – 3", trueAnswer: true },
      { answer: "1 – 4 – 5 – 2 – 3", trueAnswer: false },
      { answer: "4 – 1 – 2 – 5 – 3", trueAnswer: false },
    ],
    explanation:
      "B is correct: the sequence adds one constraint at a time: data (4), sales data (1), the year (5), breakdowns (2), the decline table (3). A places the decline-table prompt before the breakdown prompt that it extends; C places the sales-data prompt before the prompt that names no data type; D places the breakdown prompt before the prompt that only names the year.",
  },
  {
    id: 26,
    domain: TROUBLE,
    time: 60,
    question:
      "A feature requests a 4,000-token report from the Claude API and waits for the full response. The gateway times out after 60 seconds, and about 10% of calls fail. Which change is most appropriate?",
    answers: [
      { answer: "Use streaming so that tokens arrive progressively, and set the gateway timeout based on the shortest expected generation time", trueAnswer: false },
      { answer: "Lower max_tokens to 500 so that every report finishes quickly within the timeout, whatever its required content", trueAnswer: false },
      { answer: "Use streaming so that tokens arrive progressively, and set the gateway timeout based on the longest expected generation time", trueAnswer: true },
      { answer: "Switch to the Message Batches API for this interactive feature, because batch jobs return results in real time", trueAnswer: false },
    ],
    explanation:
      "C is correct: streaming delivers output progressively, and the timeout must reflect the longest realistic generation. A sets the timeout from the shortest generation, so long reports still fail; B truncates the reports instead of fixing the waiting pattern; D falsely claims that batch processing returns results in real time.",
  },
  {
    id: 27,
    domain: CONFIG,
    time: 60,
    type: "multiple",
    selectCount: 2,
    question:
      "A support Project's knowledge base holds 180 articles, and 40 of them describe a retired product. Customers are receiving instructions for the retired version. Which two maintenance actions most directly address the problem? (Select 2.)",
    answers: [
      { answer: "Tell Claude in one chat that the product is retired, because the Project applies that message to all agents' chats", trueAnswer: false },
      { answer: "Update the instructions to state which products are supported and to say when a question concerns an unsupported product", trueAnswer: true },
      { answer: "Archive or delete the 40 articles for the retired product, and confirm that current articles cover each supported feature", trueAnswer: true },
      { answer: "Upload ten more articles about current products so that the retired articles are statistically outweighed", trueAnswer: false },
      { answer: "Ask Claude to avoid retired products, which guarantees that it never retrieves instructions for them", trueAnswer: false },
    ],
    explanation:
      "B and C are correct: removing stale content and stating the supported scope in the instructions fix both the source and the behavior. A wrongly assumes that a single chat message updates the Project for all users; D dilutes the problem instead of removing the stale sources; E uses a vague plea as a guarantee instead of removing the content.",
  },
  {
    id: 28,
    domain: PRODUCT,
    time: 60,
    question:
      "A recruiter wants Claude to see candidate emails in Gmail and her calendar availability when drafting interview invitations. She currently copies both into each chat. Which feature most directly removes this manual work?",
    answers: [
      { answer: "Gmail and Google Calendar connectors, which let Claude retrieve the recruiter's own emails and availability under the recruiter's permissions", trueAnswer: true },
      { answer: "A Project knowledge base that automatically mirrors the recruiter's inbox and calendar every hour", trueAnswer: false },
      { answer: "Memory, which learns the recruiter's calendar from earlier chats and updates it whenever meetings change, at every stage, for all future requests", trueAnswer: false },
      { answer: "Research mode, which searches the recruiter's inbox and calendar by default in every conversation", trueAnswer: false },
    ],
    explanation:
      "A is correct: connectors retrieve live data under the user's own permissions, so manual copying is unnecessary. B wrongly claims that Project files mirror external data automatically; C misdescribes Memory as a calendar synchronization feature; D misdescribes Research mode, which searches the web rather than private accounts by default.",
  },
  {
    id: 29,
    domain: WORKFLOW,
    time: 60,
    question:
      "A recruiting team schedules 300 interviews monthly across four time zones and wants Claude's help with invitations. Recruiters currently check calendars by hand. Which integration approach is most appropriate?",
    answers: [
      { answer: "Use calendar and email connectors scoped to each recruiter's own accounts, so that drafts reflect real availability and Claude sends each invitation", trueAnswer: false },
      { answer: "Give Claude shared administrator access to every recruiter's mailbox so that scheduling never stops for permissions, without changing any other component, for all future requests", trueAnswer: false },
      { answer: "Upload all recruiters' calendars into one Project, because uploaded calendars update automatically when meetings change", trueAnswer: false },
      { answer: "Use calendar and email connectors scoped to each recruiter's own accounts, so that drafts reflect real availability and the recruiter sends each invitation", trueAnswer: true },
    ],
    explanation:
      "D is correct: scoped connectors supply real availability under each user's permissions, and a person sends the final message. A lets the model send invitations without a person's approval; B expands privileges beyond need, which violates least privilege; C wrongly claims that uploaded files update themselves.",
  },
  {
    id: 30,
    domain: OUTPUT,
    time: 60,
    type: "multiple",
    selectCount: 2,
    question:
      "A research firm uses Claude to draft a literature summary from 25 papers for a client report. Which two checks most reliably confirm that the summary is accurate? (Select 2.)",
    answers: [
      { answer: "Regenerate the summary once and accept statements that appear in both versions as verified", trueAnswer: false },
      { answer: "Ask Claude to confirm that all citations are real and accept the confirmation as sufficient verification, without any independent human check of the result", trueAnswer: false },
      { answer: "Trace a sample of ten findings to the exact passages in the cited papers and confirm that the effect sizes match", trueAnswer: true },
      { answer: "Confirm that the summary uses academic phrasing and the same section headings as earlier reviews", trueAnswer: false },
      { answer: "Check that every cited paper exists with the stated authors and year by using a bibliographic database", trueAnswer: true },
    ],
    explanation:
      "C and E are correct: tracing findings to passages tests fidelity, and checking the bibliography detects fabricated references. A agreement across runs can repeat the same error; B relies on the model to verify its own citations; D checks style and layout, which say nothing about accuracy.",
  },
  {
    id: 31,
    domain: WORKFLOW,
    time: 60,
    question:
      "A bank's operations head wants Claude to summarize 2,500 daily payment-exception cases for analysts. Cases include customer names and account numbers, and the risk team has not been consulted. What should the head do first?",
    answers: [
      { answer: "Run a pilot on 50 cases to measure how much analyst time the summaries save, at every stage, since one fix applies equally at every layer", trueAnswer: false },
      { answer: "Write instructions that define the summary format and the fields analysts need", trueAnswer: false },
      { answer: "Consult the risk and privacy teams about whether this data may be processed by the tool, and under which controls, before any trial", trueAnswer: true },
      { answer: "Train analysts on prompts for payment-exception summaries so that they are ready at launch", trueAnswer: false },
    ],
    explanation:
      "C is correct: permission and controls for customer financial data must be settled before any pilot, instructions, or training. A is a valid pilot, but only after permission is settled; B is a valid configuration step, but it presumes the use is approved; D prepares for a launch that has not been authorized.",
  },
  {
    id: 32,
    domain: OUTPUT,
    time: 60,
    question:
      "A marketing manager asks Claude for competitor revenue figures for a deck. Claude lists exact dollar amounts for five companies, but the manager cannot find them in any filing. The presentation is tomorrow. What is the most appropriate action?",
    answers: [
      { answer: "Round every figure to the nearest million, since rounding removes the risk that an exact amount is wrong", trueAnswer: false },
      { answer: "Ask Claude to cite the filings it used and trust the figures if it names plausible documents", trueAnswer: false },
      { answer: "Treat the figures as unverified, retrieve revenue from each company's marketing materials, and replace any number that cannot be confirmed", trueAnswer: false },
      { answer: "Treat the figures as unverified, retrieve revenue from each company's published filings, and replace any number that cannot be confirmed", trueAnswer: true },
    ],
    explanation:
      "D is correct: unverifiable exact figures must be replaced with numbers confirmed in authoritative primary sources. A hides the precision while leaving the figures unverified; B accepts the model's own citations as verification; C uses marketing materials, which are not authoritative revenue sources.",
  },
  {
    id: 33,
    domain: GOVERNANCE,
    time: 90,
    question:
      "A company decides whether to allow Claude for drafting HR policy documents. Consider the following governance steps:\n1. Approve the use with documented conditions and a named owner.\n2. Describe the documents, users, and the sensitivity of the data involved.\n3. Run a limited pilot with review of every draft by HR.\n4. Assess legal, privacy, and fairness risks of the proposed use.\n5. Review pilot findings and decide whether to extend the use.\nWhich sequence orders these steps from first to last?",
    answers: [
      { answer: "4 – 2 – 1 – 3 – 5", trueAnswer: false },
      { answer: "2 – 1 – 4 – 3 – 5", trueAnswer: false },
      { answer: "2 – 4 – 1 – 5 – 3", trueAnswer: false },
      { answer: "2 – 4 – 1 – 3 – 5", trueAnswer: true },
    ],
    explanation:
      "D is correct: the sequence is: describe the use (2), assess risks (4), approve with conditions (1), pilot (3), review findings (5). A swaps 2 and 4, assessing risks before the use has been described; B swaps 4 and 1, approving the use before its risks have been assessed; C swaps 3 and 5, reviewing pilot findings before the pilot has run.",
  },
  {
    id: 34,
    domain: CONFIG,
    time: 60,
    question:
      "A team's system prompt for an API customer-support bot says 'Answer customers helpfully.' Across 150 sampled replies, 40 promise refunds that the policy does not allow, and 25 skip the apology line. Which rewrite is most effective?",
    answers: [
      { answer: "Add 'never promise anything wrong' in capital letters and rely on emphasis to stop unauthorized refund promises", trueAnswer: false },
      { answer: "Add a second sentence, 'Be very helpful,' since stronger helpfulness reduces unauthorized promises", trueAnswer: false },
      { answer: "Replace it with explicit rules: offer refunds only as listed in the policy, begin with the apology line, and escalate any request outside the policy", trueAnswer: true },
      { answer: "Set the temperature to 0 so that the bot stops promising refunds and always includes the apology line, in every case, with no other adjustment needed", trueAnswer: false },
    ],
    explanation:
      "C is correct: specific, testable rules address each observed failure, while the vague instruction addressed none of them. A relies on emphasis, which is probabilistic and cannot be checked; B strengthens the vague goal that caused the unauthorized promises; D changes sampling randomness, which does not add missing requirements.",
  },
  {
    id: 35,
    domain: TROUBLE,
    time: 90,
    question:
      "A team diagnoses an unexpected cost increase in a Claude-based workflow. Consider the following steps:\n1. Compare token use per request before and after the cost increase.\n2. Implement the most promising fix, such as caching or a lighter tier.\n3. Identify which requests or steps consume the most tokens.\n4. Confirm that quality metrics still meet the target after the fix.\n5. Gather the usage logs for the period when cost began to rise.\nWhich sequence orders these steps from first to last?",
    answers: [
      { answer: "1 – 5 – 3 – 2 – 4", trueAnswer: false },
      { answer: "5 – 1 – 3 – 2 – 4", trueAnswer: true },
      { answer: "5 – 1 – 3 – 4 – 2", trueAnswer: false },
      { answer: "5 – 1 – 2 – 3 – 4", trueAnswer: false },
    ],
    explanation:
      "B is correct: the sequence is: gather the logs (5), compare periods (1), identify the largest consumers (3), implement a fix (2), confirm quality (4). A swaps 5 and 1, comparing periods before the logs have been gathered; C swaps 2 and 4, confirming quality before the fix has been implemented; D swaps 3 and 2, implementing a fix before the largest consumers are identified.",
  },
  {
    id: 36,
    domain: OUTPUT,
    time: 60,
    type: "multiple",
    selectCount: 3,
    question:
      "Claude drafted a supplier indemnification clause for a $3 million contract. The legal team has limited time before signature. Which three signs should trigger a full legal review? (Select 3.)",
    answers: [
      { answer: "The draft cites a statute or regulation by number that the reviewer cannot locate", trueAnswer: true },
      { answer: "The clause conflicts with a term elsewhere in the agreement, such as a different notice period", trueAnswer: true },
      { answer: "The clause was drafted quickly, which shows that Claude skipped the relevant legal considerations", trueAnswer: false },
      { answer: "The clause is written in plain language rather than traditional legal phrasing, which proves that it is unreliable", trueAnswer: false },
      { answer: "The clause allocates liability or caps damages in a way that the company has not used before", trueAnswer: true },
    ],
    explanation:
      "A, B and E are correct: unusual liability terms, unverifiable legal references, and internal conflicts are real legal and accuracy risks. C treats drafting speed as evidence of poor quality; D treats plain language as a sign of unreliability.",
  },
  {
    id: 37,
    domain: PROMPTING,
    time: 60,
    question:
      "A finance team calls the Claude API to reconcile 30 ledger entries and finds arithmetic slips in 12% of runs. The prompt asks only for the final balance. Which change is most likely to reduce the slips?",
    answers: [
      { answer: "Ask for the final balance twice in one response and keep the answer that appears more often", trueAnswer: false },
      { answer: "Reduce max_tokens to 100 so that the model has less room to introduce errors into the arithmetic, with no other adjustment needed, for all future requests", trueAnswer: false },
      { answer: "Add 'do not make mistakes' to the prompt, which removes arithmetic slips from every run", trueAnswer: false },
      { answer: "Ask Claude to list each entry with its running total before stating the balance, or run the calculation with a code tool and verify the result", trueAnswer: true },
    ],
    explanation:
      "D is correct: visible step-by-step working, or a deterministic code tool, makes arithmetic traceable and checkable. A compares two unverified answers instead of showing the working; B limits output length, which removes the working without improving accuracy; C treats a vague instruction as a guarantee of accuracy.",
  },
  {
    id: 38,
    domain: CONFIG,
    time: 60,
    question:
      "A legal operations lead plans a Project for contract-clause questions, drawing on 300 templates from five departments. Some templates conflict on liability caps, and employees already report inconsistent advice. What should the lead do first?",
    answers: [
      { answer: "Upload all 300 templates and test the Project with ten sample questions about liability caps, since one fix applies equally at every layer", trueAnswer: false },
      { answer: "Decide with the legal team which template is authoritative for each clause type, and retire the conflicting versions before uploading", trueAnswer: true },
      { answer: "Share the Project with all five departments and gather feedback on inconsistencies after two weeks", trueAnswer: false },
      { answer: "Write instructions requiring Claude to cite the template name and section in every answer", trueAnswer: false },
    ],
    explanation:
      "B is correct: a knowledge base is only as consistent as its sources, so authority is settled before upload. A loads the conflicting versions before an authoritative one is chosen; C exposes users to conflicting answers as a way of discovering the problem; D is a valid step, but citations cannot resolve conflicting sources.",
  },
  {
    id: 39,
    domain: WORKFLOW,
    time: 60,
    type: "multiple",
    selectCount: 3,
    question:
      "A team presents an AI-assisted proposal-drafting workflow to leadership after a four-week pilot of 60 proposals. Leaders want realistic expectations. Which three statements accurately communicate its value and limits? (Select 3.)",
    answers: [
      { answer: "Drafting time dropped from 5 hours to 2 hours per proposal, as measured across the pilot", trueAnswer: true },
      { answer: "Fact errors will disappear after the next prompt update, so review can be reduced to occasional sampling, so that no independent verification is required", trueAnswer: false },
      { answer: "Fact corrections were needed in about 10 percent of proposals, so every proposal still has a human review before it is sent", trueAnswer: true },
      { answer: "The pilot demonstrates that proposals of any size and complexity can be drafted without senior writers", trueAnswer: false },
      { answer: "The workflow works best for standard proposal types, and bespoke bids stay with senior writers", trueAnswer: true },
    ],
    explanation:
      "A, C and E are correct: a measured benefit, an observed error rate with its control, and a defined scope set accurate expectations. B promises perfection from a probabilistic system; D generalizes a limited pilot into a guarantee.",
  },
  {
    id: 40,
    domain: PRODUCT,
    time: 60,
    question:
      "A development team wants an internal assistant that explains 200-line functions and writes unit tests for 80 engineers. About 5,000 requests arrive daily, and quality, speed, and cost all matter. Which model choice is the most appropriate starting point?",
    answers: [
      { answer: "Start with Opus for all requests, since the most capable tier is always the most cost-effective choice at volume", trueAnswer: false },
      { answer: "Start with Sonnet as the balanced tier, run a comparison on 50 representative tasks, and move to Haiku only for tasks where quality is insufficient", trueAnswer: false },
      { answer: "Start with Sonnet as the balanced tier, run a comparison on 50 representative tasks, and move to Opus only for tasks where quality is insufficient", trueAnswer: true },
      { answer: "Start with Haiku for all requests, because the fastest tier matches the reasoning quality of larger tiers on code", trueAnswer: false },
    ],
    explanation:
      "C is correct: Sonnet balances quality, speed, and cost, and an evaluation on representative tasks shows where a stronger tier is needed. A makes a false absolute about cost-effectiveness at volume; B moves to the less capable tier exactly where quality is lacking; D falsely claims equal reasoning quality for the fastest tier.",
  },
  {
    id: 41,
    domain: OUTPUT,
    time: 90,
    question:
      "A consulting team prepares a Claude-drafted report for external release. Consider the following steps:\n1. Check each quote and statistic against its original source.\n2. Edit the language to match the client's style guide.\n3. Read the draft once for structure and missing sections.\n4. Obtain sign-off from the engagement partner.\n5. Correct unsupported claims and record the changes.\nWhich sequence orders these steps from first to last?",
    answers: [
      { answer: "3 – 1 – 5 – 2 – 4", trueAnswer: true },
      { answer: "1 – 3 – 5 – 2 – 4", trueAnswer: false },
      { answer: "3 – 1 – 5 – 4 – 2", trueAnswer: false },
      { answer: "3 – 5 – 1 – 2 – 4", trueAnswer: false },
    ],
    explanation:
      "A is correct: the sequence is: structural read (3), source checks (1), corrections (5), language edit (2), partner sign-off (4). B swaps 3 and 1, checking sources before the structural read; C swaps 2 and 4, requesting sign-off before the language is edited; D swaps 1 and 5, correcting claims before they have been checked.",
  },
  {
    id: 42,
    domain: WORKFLOW,
    time: 60,
    question:
      "A retailer wants Claude to answer 8,000 monthly customer emails. About 85% are order-status questions, and 15% are damaged-goods complaints, some requiring refunds above $100. Which workflow design is most appropriate?",
    answers: [
      { answer: "Let Claude draft status replies for agent approval, and route damaged-goods complaints with refunds above $100 to any agent for decision", trueAnswer: false },
      { answer: "Let Claude draft status replies for agent approval, and route damaged-goods complaints with refunds above $100 to a senior agent for decision", trueAnswer: true },
      { answer: "Use Opus for all replies and remove review, since the largest tier guarantees accurate refund decisions", trueAnswer: false },
      { answer: "Let Claude send every status reply automatically and approve refunds below $500 on its own estimate of fraud risk, for all future requests", trueAnswer: false },
    ],
    explanation:
      "B is correct: drafting speeds up routine replies, while higher-value refund decisions stay with a senior person. A removes the seniority control for high-value refund decisions; C falsely claims that the largest tier guarantees accurate decisions; D relies on the model's self-assessed risk as the only control.",
  },
  {
    id: 43,
    domain: PROMPTING,
    time: 90,
    question:
      "An analyst builds a prompt chain for competitive research. Consider the following actions:\n1. Run the research request and review the findings for gaps and weak sources.\n2. Specify the companies, time window, and required source types.\n3. Ask a follow-up that targets the gaps with narrower questions.\n4. Request a final comparison table that cites a source for every cell.\n5. State the decision the research will inform and who will read it.\nWhich sequence orders these steps from first to last?",
    answers: [
      { answer: "5 – 1 – 2 – 3 – 4", trueAnswer: false },
      { answer: "2 – 5 – 1 – 3 – 4", trueAnswer: false },
      { answer: "5 – 2 – 1 – 3 – 4", trueAnswer: true },
      { answer: "5 – 2 – 1 – 4 – 3", trueAnswer: false },
    ],
    explanation:
      "C is correct: the sequence is: state the decision (5), specify the scope (2), run and review (1), follow up on gaps (3), request the final table (4). A swaps 2 and 1, running the research before the scope is specified; B swaps 5 and 2, specifying the scope before stating the decision it serves; D swaps 3 and 4, requesting the final table before the gaps are closed.",
  },
  {
    id: 44,
    domain: TROUBLE,
    time: 60,
    question:
      "A chatbot built on Claude answered 92% of test questions correctly at launch. Six weeks later, correct answers are 78%, and the prompt has not changed. The product catalog was updated twice in that period. Which diagnosis is most likely?",
    answers: [
      { answer: "Source drift: compare the failing questions with the updated catalog and refresh the knowledge that the bot relies on", trueAnswer: true },
      { answer: "Source drift: compare the failing questions with the updated catalog and freeze the knowledge that the bot relies on", trueAnswer: false },
      { answer: "The design is flawed: replace the bot with a new one built on Opus now, since any decline proves that the original design failed", trueAnswer: false },
      { answer: "Temperature is too low: raise it to 0.8 so that the bot explores more answers and recovers correctness on new catalog items", trueAnswer: false },
    ],
    explanation:
      "A is correct: with the prompt unchanged and the catalog updated, outdated knowledge is the likeliest cause. B freezes outdated knowledge, which keeps the cause in place; C jumps to a rebuild before the cause is diagnosed; D changes sampling randomness, which cannot supply missing catalog knowledge.",
  },
  {
    id: 45,
    domain: PRODUCT,
    time: 90,
    question:
      "An analyst manages context in a very long Claude chat. Consider the following steps:\n1. Check the digest against the earlier conversation for accuracy and omissions.\n2. Continue the analysis and move stable rules into Project instructions.\n3. Notice that Claude has begun to ignore early instructions or details.\n4. Ask Claude to produce a digest of decisions, key figures, and open questions.\n5. Start a new chat that begins with the digest and the formatting rules.\nWhich sequence orders these steps from first to last?",
    answers: [
      { answer: "3 – 4 – 1 – 5 – 2", trueAnswer: true },
      { answer: "3 – 4 – 1 – 2 – 5", trueAnswer: false },
      { answer: "3 – 1 – 4 – 5 – 2", trueAnswer: false },
      { answer: "4 – 3 – 1 – 5 – 2", trueAnswer: false },
    ],
    explanation:
      "A is correct: the sequence is: notice the problem (3), request a digest (4), check it (1), start a new chat (5), continue and move stable rules into the Project (2). B swaps 5 and 2, continuing the analysis before the new chat is started; C swaps 4 and 1, checking a digest before it exists; D swaps 3 and 4, requesting a digest before the problem has been noticed.",
  },
  {
    id: 46,
    domain: CONFIG,
    time: 60,
    type: "multiple",
    selectCount: 3,
    question:
      "A team writes a SKILL.md for monthly expense audits that Claude should load only for audit tasks. Which three elements make the Skill effective? (Select 3.)",
    answers: [
      { answer: "The complete text of every company policy pasted into the instructions to make sure that nothing is missing", trueAnswer: false },
      { answer: "A one-line description such as 'helps with finance,' since a broad description makes Claude load the Skill reliably, in every case", trueAnswer: false },
      { answer: "A precise description that states when the Skill should be used, so that Claude loads it for the right tasks", trueAnswer: true },
      { answer: "Step-by-step instructions with the required output format and the checks to perform", trueAnswer: true },
      { answer: "Supporting reference files, such as the expense policy and a template, stored alongside the instructions", trueAnswer: true },
    ],
    explanation:
      "C, D and E are correct: a precise description controls when the Skill loads, and clear steps and references make its output consistent. A bloats the instructions instead of storing references separately; B uses a vague description, which makes loading unreliable instead of reliable.",
  },
  {
    id: 47,
    domain: PROMPTING,
    time: 60,
    question:
      "An HR analyst asks Claude to 'write a policy on remote work.' The result is a generic 300-word text that ignores the company's four-day office rule and its operations in 18 countries. Which prompt revision is most appropriate?",
    answers: [
      { answer: "Set max_tokens to 4,000 so that the model can expand the generic text to cover the company's specific attendance rule", trueAnswer: false },
      { answer: "Ask Claude to make the policy more specific and to imagine what the company's rules most likely are", trueAnswer: false },
      { answer: "Supply the attendance rule and the countries in scope, then request a structured draft with sections for eligibility, equipment, and exceptions", trueAnswer: true },
      { answer: "Supply the attendance rule and one country in scope, then request a structured draft with sections for eligibility, equipment, and exceptions", trueAnswer: false },
    ],
    explanation:
      "C is correct: concrete company facts and a requested structure replace the generic output with a draft tied to real constraints. A raises an output ceiling, which does not supply the missing company facts; B asks the model to guess facts that only the company can provide; D covers only one country, so the policy still ignores 17 of the 18 operating countries.",
  },
  {
    id: 48,
    domain: CONFIG,
    time: 90,
    question:
      "A team updates a Project after a policy change. Consider the following steps:\n1. Tell users what changed and where to report wrong answers.\n2. Remove or replace the files that contain the old policy.\n3. Confirm which policy change took effect and on what date.\n4. Test the Project with questions that depend on the changed policy.\n5. Update instructions that mention the old policy name or limits.\nWhich sequence orders these steps from first to last?",
    answers: [
      { answer: "2 – 3 – 5 – 4 – 1", trueAnswer: false },
      { answer: "3 – 2 – 5 – 1 – 4", trueAnswer: false },
      { answer: "3 – 2 – 5 – 4 – 1", trueAnswer: true },
      { answer: "3 – 5 – 2 – 4 – 1", trueAnswer: false },
    ],
    explanation:
      "C is correct: the sequence is: confirm the change (3), replace the files (2), update the instructions (5), test (4), notify users (1). A swaps 3 and 2, removing files before the change has been confirmed; B swaps 4 and 1, notifying users before the Project has been tested; D swaps 2 and 5, updating instructions before the files are replaced.",
  },
  {
    id: 49,
    domain: OUTPUT,
    time: 60,
    question:
      "A manager uses Claude to extract 40 action items from the transcripts of six meetings. A spot check shows that 5 items are assigned to the wrong owner. What should be done first?",
    answers: [
      { answer: "Convert the action items into a tracker table with owner columns for easier follow-up", trueAnswer: false },
      { answer: "Add an instruction to name owners carefully and rerun the extraction on all six transcripts, in every case, so that no independent verification is required", trueAnswer: false },
      { answer: "Email all owners their assigned items and ask them to correct any mistakes they notice", trueAnswer: false },
      { answer: "Compare the extracted owners against the transcripts for all 40 items to find the pattern of errors, before revising the prompt", trueAnswer: true },
    ],
    explanation:
      "D is correct: understanding the pattern of errors tells the team what to change, so diagnosis comes before any revision. A improves presentation before the owner assignments are verified; B reruns with a vague instruction before the pattern of errors is known; C shifts verification to the owners instead of checking the extraction.",
  },
  {
    id: 50,
    domain: GOVERNANCE,
    time: 60,
    question:
      "A clinic administrator wants to paste 2,000 appointment records with patient names, diagnoses, and phone numbers into Claude to predict no-shows. The privacy policy restricts health data to approved systems. What is the most appropriate approach?",
    answers: [
      { answer: "Paste only 100 records, since a smaller sample falls outside the scope of the privacy rules", trueAnswer: false },
      { answer: "Ask the privacy officer whether the tool is approved for health data, then de-identify the records and share only the fields needed for no-show prediction", trueAnswer: true },
      { answer: "Ask the clinic manager whether the tool is approved for health data, then de-identify the records and share only the fields needed for no-show prediction", trueAnswer: false },
      { answer: "Paste the records into a private chat, since private chats are automatically compliant with health-privacy rules", trueAnswer: false },
    ],
    explanation:
      "B is correct: the privacy owner decides on approval, and de-identification with minimization limits exposure. A treats a smaller sample as exempt, although health data is still shared; C leaves the approval decision to a role that does not own privacy; D wrongly equates a private chat with regulatory compliance.",
  },
  {
    id: 51,
    domain: PRODUCT,
    time: 60,
    question:
      "A research analyst needs Claude to work through a multi-step valuation problem with 12 interdependent assumptions. Earlier attempts skipped steps and produced inconsistent totals. Which feature best supports this task?",
    answers: [
      { answer: "Memory, which stores intermediate calculations and reasons about them between separate chats automatically", trueAnswer: false },
      { answer: "Projects, which add reasoning capacity to every chat that belongs to the Project", trueAnswer: false },
      { answer: "A higher max_tokens value alone, which makes the model reason more carefully about every assumption, without exception, without any change to the prompt itself", trueAnswer: false },
      { answer: "Extended thinking, which gives the model additional reasoning budget before it answers, combined with a request to show assumptions and calculations", trueAnswer: true },
    ],
    explanation:
      "D is correct: extended thinking supports multi-step reasoning, and visible assumptions make the result checkable. A misdescribes Memory as a reasoning feature; B misdescribes Projects, which add knowledge and instructions rather than reasoning; C raises an output ceiling, which does not change reasoning quality.",
  },
  {
    id: 52,
    domain: OUTPUT,
    time: 60,
    question:
      "Claude wrote a 700-word clinical-trial summary for researchers. A patient newsletter needs a 150-word version at a seventh-grade reading level, keeping the 12-week duration and the main side effects. Which adaptation is most appropriate?",
    answers: [
      { answer: "Request a rewrite at a seventh-grade reading level in about 150 words that keeps the duration and main side effects, then have a clinician verify the content", trueAnswer: true },
      { answer: "Ask Claude to simplify the text without any verification, because simplified medical summaries cannot contain errors", trueAnswer: false },
      { answer: "Add a disclaimer to the original summary and send it unchanged to patients, since the disclaimer covers the language level, in every case, regardless of what the source material shows", trueAnswer: false },
      { answer: "Delete the technical paragraphs and keep the rest, since the remaining text will automatically suit a patient audience", trueAnswer: false },
    ],
    explanation:
      "A is correct: the text is rewritten for the audience's level and length, and a clinician verifies the medical content. B makes a false claim that simplification cannot introduce errors; C changes the packaging without adapting the content; D removes content without adapting the language or checking what remains.",
  },
  {
    id: 53,
    domain: WORKFLOW,
    time: 60,
    question:
      "A construction firm proposes using Claude to 'approve' safety inspection reports from 40 sites. Approval carries regulatory liability and requires a licensed inspector's signature. Which role for Claude is most appropriate?",
    answers: [
      { answer: "Approve reports that have no missing items and send only the flagged ones to the inspector", trueAnswer: false },
      { answer: "Give Claude the inspector's template so that its approvals are legally equivalent to the inspector's signature", trueAnswer: false },
      { answer: "Limit Claude to sites with fewer than 20 workers, since smaller sites do not need signatures", trueAnswer: false },
      { answer: "Draft summaries and flag missing items, while the licensed inspector reviews and signs every report", trueAnswer: true },
    ],
    explanation:
      "D is correct: Claude supports the preparation, while the accountable licensed person makes and signs the decision. A lets the model approve on its own check, which the regulation reserves for the inspector; B makes a false claim that a template creates legal equivalence; C invents an exemption that the signature requirement does not contain.",
  },
  {
    id: 54,
    domain: PROMPTING,
    time: 60,
    question:
      "A product team asks Claude in a single prompt to analyze 200 survey responses, propose five features, estimate costs, and write a roadmap slide. The output is shallow across all four tasks. Which strategy best improves quality?",
    answers: [
      { answer: "Increase the temperature so that the model produces deeper analysis on each of the four tasks", trueAnswer: false },
      { answer: "Split the work into sequential prompts for theme analysis, feature proposals, cost estimates, and the roadmap, passing each verified result into the next step", trueAnswer: true },
      { answer: "Ask for a longer response so that each of the four tasks receives more words within the same single prompt, for all future requests", trueAnswer: false },
      { answer: "Repeat the single prompt twice and merge the outputs, since repetition adds depth without any change in structure", trueAnswer: false },
    ],
    explanation:
      "B is correct: decomposing the task gives each step full attention and lets the team verify intermediate results. A adds sampling randomness, which does not add analytical depth; C adds length without separating the tasks or verifying any stage; D relies on repetition and merging instead of a structured process.",
  },
  {
    id: 55,
    domain: OUTPUT,
    time: 60,
    question:
      "An analyst needs Claude to extract 300 product records into fields that a database import requires: SKU, name, price, and stock. The import rejects any record with a missing field. Which output format is most appropriate?",
    answers: [
      { answer: "A chart image of the records, because images preserve the values exactly for import", trueAnswer: false },
      { answer: "A JSON array that follows a stated schema, validated programmatically before import, so that malformed records are rejected or retried", trueAnswer: true },
      { answer: "A free-form table whose columns Claude chooses, because the model can infer the database schema reliably", trueAnswer: false },
      { answer: "A narrative paragraph per record, since prose lets reviewers verify each field more easily than structured data, from that point onward", trueAnswer: false },
    ],
    explanation:
      "B is correct: a schema-bound structured format with programmatic validation matches the import's strict requirements. A chooses a format that cannot be imported into a database; C relies on the model to guess a schema that must be specified; D removes the structure that the import depends on.",
  },
  {
    id: 56,
    domain: PROMPTING,
    time: 60,
    question:
      "An editor asks Claude to draft a 600-word explainer on a new tax rule for readers with no accounting background. The draft uses terms such as 'amortization schedule' without explanation. Which prompt adjustment best fixes this?",
    answers: [
      { answer: "Tell Claude to write like a tax professional, because professional wording automatically becomes clear to general readers", trueAnswer: false },
      { answer: "Add a glossary page after the article and keep the body text unchanged, so that readers can look up terms themselves, at every stage, in every case", trueAnswer: false },
      { answer: "State the reader's background, require every technical term to be defined in plain words on first use, and include one worked example with round numbers", trueAnswer: true },
      { answer: "Ask Claude to make the explainer shorter, since fewer words will remove the need to define technical terms", trueAnswer: false },
    ],
    explanation:
      "C is correct: audience, definitions on first use, and a worked example make the text accessible to non-specialists. A falsely assumes that professional wording is clear to a general audience; B moves the fix to a different location instead of making the text itself understandable; D treats brevity as a cure for unexplained terminology.",
  },
  {
    id: 57,
    domain: OUTPUT,
    time: 60,
    question:
      "An insurer uses Claude to draft explanations for 150 claim denials per week. Accuracy reviews of 20 drafts found no errors. Which review policy is most appropriate for notices that carry legal consequences?",
    answers: [
      { answer: "An adjuster should approve every denial explanation before it is sent, because claim decisions carry legal consequences that sampling cannot remove", trueAnswer: true },
      { answer: "Review can stop once 20 consecutive drafts pass, since that sample proves that all future drafts will be accurate", trueAnswer: false },
      { answer: "Review is required only for explanations that Claude marks as uncertain, since the model flags every risky explanation reliably, with no further verification afterward", trueAnswer: false },
      { answer: "Claude should approve every denial explanation before it is sent, because claim decisions carry legal consequences that sampling cannot remove", trueAnswer: false },
    ],
    explanation:
      "A is correct: legally consequential notices need accountable human approval for each item, regardless of sample results. B treats a small sample as proof for future output; C assumes that self-reported uncertainty captures every error; D assigns the approval to the drafting model instead of an accountable person.",
  },
  {
    id: 58,
    domain: WORKFLOW,
    time: 60,
    question:
      "A finance team wants Claude to write a weekly cash-flow commentary from an ERP export of 12,000 rows. The export includes vendor bank details. Which design best manages risk?",
    answers: [
      { answer: "Share the commentary only with the CFO, since a smaller audience removes the need to protect the source data, for all future requests", trueAnswer: false },
      { answer: "Upload the full export and instruct Claude not to mention bank details in the commentary", trueAnswer: false },
      { answer: "Prepare an export with only the fields needed for the commentary, exclude bank details, and have an analyst review the commentary before circulation", trueAnswer: true },
      { answer: "Store the full export in a Project, because Project knowledge is not subject to data classification rules", trueAnswer: false },
    ],
    explanation:
      "C is correct: data minimization limits exposure, and analyst review controls the output. A limits the audience of the output while the source data stays exposed; B relies on an instruction where the data itself should be excluded; D makes a false claim that uploads escape data classification rules.",
  },
  {
    id: 59,
    domain: TROUBLE,
    time: 60,
    question:
      "A Skill-based report workflow produced consistent monthly reports for six months. Now about 20% of runs miss sections. The SKILL.md was not edited, but the template file was replaced last week. What should the owner do first?",
    answers: [
      { answer: "Move the workflow to a larger model tier and compare outputs across 30 sample runs, since one fix applies equally at every layer, without exception", trueAnswer: false },
      { answer: "Split the report into three smaller Skills, one for each section that is missing", trueAnswer: false },
      { answer: "Rewrite the SKILL.md from scratch with a longer set of rules and additional examples", trueAnswer: false },
      { answer: "Compare the new template with the previous one and the Skill's instructions to see whether they refer to sections that no longer exist", trueAnswer: true },
    ],
    explanation:
      "D is correct: the template is the one change, so comparing it with the instructions locates the likely cause. A changes the tier before the actual cause has been found; B restructures the workflow without knowing that structure is the cause; C rewrites instructions that were working and have not changed.",
  },
  {
    id: 60,
    domain: OUTPUT,
    time: 60,
    question:
      "Claude produces a risk register with 12 entries. Two rows rate the same supplier delay as high in one row and low in the other. The register goes to a steering committee on Friday. How should this be handled?",
    answers: [
      { answer: "Compare both rows with the supplier's delivery data, set one consistent rating with a documented reason, and check every other row for similar conflicts", trueAnswer: true },
      { answer: "Ask Claude to reconcile the two rows and accept its choice without checking the delivery data", trueAnswer: false },
      { answer: "Keep the higher rating because a cautious rating is always safer than one based on delivery data", trueAnswer: false },
      { answer: "Compare both rows with the supplier's delivery data, set one consistent rating with a documented reason, and check one other row for similar conflicts", trueAnswer: false },
    ],
    explanation:
      "A is correct: a contradiction is resolved with evidence, documented, and then searched for elsewhere in the register. B relies on the model's judgment with no independent evidence; C chooses a rating by caution instead of evidence; D checks only one other row, so remaining conflicts can survive.",
  },
];

export { examQuestionsV3 };
export default examQuestionsV3;