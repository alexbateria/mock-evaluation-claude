// examQuestions_v2.js
// Claude Associate Foundations - practice exam bank, set 2 (60 new questions, mock-exam register)
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

const examQuestionsV2 = [
  {
    id: 1,
    domain: OUTPUT,
    time: 60,
    question:
      "A communications team receives a Claude-written press release containing a quote attributed to the CEO and three product claims. The release is scheduled to go to 200 journalists at noon. What should the team do first?",
    answers: [
      { answer: "Tighten the headline and opening paragraph so that the release is easier for journalists to scan quickly, regardless of which layer the problem originates in", trueAnswer: false },
      { answer: "Add the company boilerplate and the media contact block at the bottom of the release", trueAnswer: false },
      { answer: "Ask Claude to propose two alternative headlines and test them with the marketing team", trueAnswer: false },
      { answer: "Confirm the CEO quote with the CEO's office and check each product claim against approved product documentation before editing the release", trueAnswer: true },
    ],
    explanation:
      "D is correct: attributed quotes and product claims are the highest-risk content, so they are verified before any editing. A is a valid editing step, but it comes after the facts are confirmed; B is a valid finishing step, but it does not confirm accuracy; C optimizes presentation while the claims remain unverified.",
  },
  {
    id: 2,
    domain: WORKFLOW,
    time: 60,
    question:
      "A bank wants Claude to summarize 600 customer complaints a day for a compliance team. Complaints mentioning fraud or discrimination, about 8% of the total, trigger regulatory deadlines. Which workflow design is most appropriate?",
    answers: [
      { answer: "Use Opus for the summaries and skip compliance review, because the top tier meets every regulatory requirement automatically", trueAnswer: false },
      { answer: "Summarize all complaints with Claude, and route those mentioning fraud or discrimination to a compliance officer for review after the regulatory deadline", trueAnswer: false },
      { answer: "Summarize all complaints with Claude, and route those mentioning fraud or discrimination to a compliance officer for review within the regulatory deadline", trueAnswer: true },
      { answer: "Summarize all complaints automatically and let Claude decide which ones need regulatory handling, since it reliably detects every sensitive case", trueAnswer: false },
    ],
    explanation:
      "C is correct: summaries add speed for all complaints, while regulated cases receive qualified human review on time. A falsely claims that a tier satisfies regulatory requirements; B schedules the review after the deadline, which defeats its purpose; D relies on the model as the only control for regulated cases.",
  },
  {
    id: 3,
    domain: OUTPUT,
    time: 60,
    question:
      "A sales operations analyst needs Claude to compare four CRM vendors across eight criteria for a leadership meeting. She will paste the comparison into a slide and may add a ninth criterion tomorrow. Which output format best fits?",
    answers: [
      { answer: "A table with one row per vendor and one column per criterion, delivered inline or as an artifact, so that criteria can be added or edited easily", trueAnswer: true },
      { answer: "A long narrative paragraph per vendor, since prose lets readers compare any pair of vendors faster than a table does, at every stage, regardless of what the source material shows", trueAnswer: false },
      { answer: "Four separate chat replies with one vendor each, since splitting the output prevents inconsistency between criteria", trueAnswer: false },
      { answer: "An image of the comparison, because images keep formatting intact when pasted into any slide and need no later edits", trueAnswer: false },
    ],
    explanation:
      "A is correct: a table lets readers compare vendors across the same criteria, and it is easy to extend and paste. B makes cross-vendor comparison harder, not easier; C splits content that must be compared side by side, adding inconsistency risk; D prevents the editing that the ninth criterion will require.",
  },
  {
    id: 4,
    domain: WORKFLOW,
    time: 90,
    question:
      "A team replaces ad hoc individual prompting with a documented Claude workflow. Consider the following steps:\n1. Share the documented workflow with the whole team and name an owner.\n2. Collect the prompts that individuals currently use for the task.\n3. Test the consolidated prompt against five real inputs.\n4. Merge the best elements into one prompt with a fixed output format.\n5. Record the prompt, inputs, review step, and known limitations in a runbook.\nWhich sequence orders these steps from first to last?",
    answers: [
      { answer: "2 – 4 – 3 – 1 – 5", trueAnswer: false },
      { answer: "4 – 2 – 3 – 5 – 1", trueAnswer: false },
      { answer: "2 – 3 – 4 – 5 – 1", trueAnswer: false },
      { answer: "2 – 4 – 3 – 5 – 1", trueAnswer: true },
    ],
    explanation:
      "D is correct: the sequence is: collect prompts (2), merge them (4), test (3), document in a runbook (5), share with an owner (1). A swaps 5 and 1, sharing the workflow before it is documented; B swaps 2 and 4, merging prompts before they have been collected; C swaps 4 and 3, testing before the consolidated prompt exists.",
  },
  {
    id: 5,
    domain: OUTPUT,
    time: 60,
    type: "multiple",
    selectCount: 3,
    question:
      "Claude drafted a quarterly investor update from internal sales data for 60 investors. The finance director has one hour for review. Which three signs should trigger a detailed human fact-check before sending? (Select 3.)",
    answers: [
      { answer: "A growth rate is stated to two decimals, but the draft shows no source table or formula for it", trueAnswer: true },
      { answer: "The draft contains a table instead of paragraphs, which indicates that the analysis is less reliable", trueAnswer: false },
      { answer: "The draft is longer than last quarter's update, which proves that the model added unsupported material, from that point onward", trueAnswer: false },
      { answer: "The text attributes a quotation to a named customer who does not appear in the supplied materials", trueAnswer: true },
      { answer: "A forward-looking statement could be read as a commitment about revenue or margins", trueAnswer: true },
    ],
    explanation:
      "A, D and E are correct: unsupported precision, commitments about the future, and unsourced attributions carry factual and legal risk. B confuses presentation format with reliability; C treats length as evidence of fabrication.",
  },
  {
    id: 6,
    domain: TROUBLE,
    time: 60,
    question:
      "A Claude Code agent that fixed lint errors reliably for a month now leaves about one in four errors untouched after a repository reorganization. CLAUDE.md has not changed. What should the engineer do first?",
    answers: [
      { answer: "Switch the agent to a larger model tier and compare results across 40 lint errors, for all future requests, without changing any other component", trueAnswer: false },
      { answer: "Split the repository's lint rules across three separate agents, one for each rule category", trueAnswer: false },
      { answer: "Check whether the reorganization changed file paths, lint configuration, or commands that the agent's instructions refer to, and reproduce a failing case", trueAnswer: true },
      { answer: "Rewrite CLAUDE.md from scratch with a longer list of style rules and examples", trueAnswer: false },
    ],
    explanation:
      "C is correct: the reorganization is the one change, so checking what it altered and reproducing a failure locates the cause. A changes the tier before the actual cause has been found; B restructures the setup without knowing that structure is the cause; D rewrites instructions that were working and have not changed.",
  },
  {
    id: 7,
    domain: WORKFLOW,
    time: 60,
    question:
      "A pilot with Claude cut first-draft time for customer reports from 90 minutes to 35 minutes across 30 reports. Reviewers corrected figures in four reports. How should the team present this to the steering committee?",
    answers: [
      { answer: "Present the 61% time saving together with the four corrected reports, and state that figures still require reviewer verification before reports go to customers", trueAnswer: true },
      { answer: "Present the time saving alone, since the four corrected reports represent a small fraction that does not affect the decision, from that point onward, without exception", trueAnswer: false },
      { answer: "Present the results as proof that reviewers can be removed, since 26 of 30 reports needed no corrections", trueAnswer: false },
      { answer: "Present a forecast of zero corrections after scaling, because the four issues came from unusually complex source data", trueAnswer: false },
    ],
    explanation:
      "A is correct: honest reporting pairs the measured benefit with the observed limitation and the review that remains necessary. B omits a limitation, which damages credibility when errors surface later; C treats an 87% clean rate as a guarantee for customer-facing figures; D promises a guarantee that a probabilistic system cannot give.",
  },
  {
    id: 8,
    domain: TROUBLE,
    time: 60,
    question:
      "An API integration returns JSON that is cut off mid-object in about 6% of responses. Logs show stop_reason equal to max_tokens and max_tokens set to 512. Long customer records appear in those cases. Which change is most appropriate?",
    answers: [
      { answer: "Ask the model in the prompt to finish every object before it stops, since instructions override the token limit", trueAnswer: false },
      { answer: "Lower the temperature to 0 so that the model writes shorter objects that always fit within the 512-token limit", trueAnswer: false },
      { answer: "Raise max_tokens to cover the longest expected output, check stop_reason on some responses, and retry or flag any response that ended with max_tokens", trueAnswer: false },
      { answer: "Raise max_tokens to cover the longest expected output, check stop_reason on every response, and retry or flag any response that ended with max_tokens", trueAnswer: true },
    ],
    explanation:
      "D is correct: the truncation is caused by the token limit, so the limit is raised and every response is checked for how it ended. A falsely claims that an instruction can override a hard token limit; B changes sampling randomness, which does not shorten the required output; C checks only some responses, so other truncated outputs can pass through unnoticed.",
  },
  {
    id: 9,
    domain: GOVERNANCE,
    time: 60,
    question:
      "A team lead finds that two analysts have connected personal email accounts to Claude to draft client messages, exposing correspondence from about 60 clients. No policy covers connectors. What should the lead do first?",
    answers: [
      { answer: "Notify all 60 clients that their correspondence may have been accessed, before confirming what was exposed", trueAnswer: false },
      { answer: "Move the whole team to an enterprise plan and enable approved connectors for everyone next month", trueAnswer: false },
      { answer: "Have the analysts disconnect the personal accounts and determine which client correspondence was accessible, before deciding on notification or policy changes", trueAnswer: true },
      { answer: "Draft a connector policy and circulate it to all staff for comment over the next quarter, so that no other component needs to change", trueAnswer: false },
    ],
    explanation:
      "C is correct: containment and scoping come first, because notification and policy decisions depend on what was exposed. A notifies before the scope of the exposure is known; B is a valid structural step, but it leaves the exposure unscoped; D is a valid preventive step, but it does not stop the current exposure.",
  },
  {
    id: 10,
    domain: PROMPTING,
    time: 60,
    question:
      "A strategy team uses one template, 'Give the best answer,' for both a market-sizing calculation and a product-naming brainstorm. Calculations are inconsistent, and the brainstorm returns three near-identical names. Which adaptation best fits the two task types?",
    answers: [
      { answer: "Ask for exactly one answer in both cases so that the model concentrates on quality instead of quantity or variety", trueAnswer: false },
      { answer: "Use temperature 0 for both tasks, because a deterministic setting improves variety in brainstorming and accuracy in calculation", trueAnswer: false },
      { answer: "Ask for step-by-step working with stated assumptions on the calculation, and request many varied options under different constraints on the brainstorm", trueAnswer: true },
      { answer: "Use the same template for both and select Opus, since the top tier adapts its approach to every task type on its own", trueAnswer: false },
    ],
    explanation:
      "C is correct: analysis needs visible reasoning and assumptions, while brainstorming needs breadth and varied constraints. A removes the breadth that brainstorming needs and the working that analysis needs; B claims a setting that reduces variety would improve variety; D falsely claims that a larger tier adapts the approach without task-specific instructions.",
  },
  {
    id: 11,
    domain: CONFIG,
    time: 60,
    question:
      "A team's CLAUDE.md says 'Write clean code.' Across 40 pull requests from the coding agent, 14 use a banned logging library and 9 skip required tests. Which revision is most effective?",
    answers: [
      { answer: "Ask each developer to remind Claude of the rules at the start of every session, which permanently updates the repository instructions", trueAnswer: false },
      { answer: "Replace the vague line with explicit rules: use the approved logging module, require a test for every new function, and list the banned libraries", trueAnswer: true },
      { answer: "Write 'CLEAN CODE ONLY' in capital letters at the top of the file and rely on emphasis to prevent the violations, so that no independent verification is required", trueAnswer: false },
      { answer: "Add a second line saying 'Write better code' because repeating the general goal makes specific violations disappear", trueAnswer: false },
    ],
    explanation:
      "B is correct: specific, checkable rules address each observed violation, while the vague line addressed none. A falsely claims that spoken reminders update the repository's instruction file; C relies on emphasis, which is probabilistic and cannot be checked; D repeats a vague goal without naming the violated rules.",
  },
  {
    id: 12,
    domain: PROMPTING,
    time: 90,
    question:
      "A developer improves a prompt that summarizes support tickets. Consider the following actions:\n1. Add a check that compares the revised prompt's results with the baseline scores before adoption.\n2. Adopt the revised prompt and keep the test tickets for future regression checks.\n3. Write ten test tickets with the expected summary for each.\n4. Revise the prompt to address the most common failure pattern.\n5. Run the first prompt on the tests and record where outputs miss expectations.\nWhich sequence orders these steps from first to last?",
    answers: [
      { answer: "3 – 4 – 5 – 1 – 2", trueAnswer: false },
      { answer: "3 – 5 – 4 – 1 – 2", trueAnswer: true },
      { answer: "3 – 5 – 4 – 2 – 1", trueAnswer: false },
      { answer: "3 – 5 – 1 – 4 – 2", trueAnswer: false },
    ],
    explanation:
      "B is correct: the sequence is: write tests (3), run the baseline and record failures (5), revise (4), compare with the baseline (1), adopt (2). A swaps 5 and 4, revising the prompt before any failures have been recorded; C swaps 1 and 2, adopting the prompt before it has been compared with the baseline; D swaps 4 and 1, comparing results before the revision has been made.",
  },
  {
    id: 13,
    domain: OUTPUT,
    time: 60,
    question:
      "Claude drafts 12 job advertisements for engineering roles. A reviewer notices that words such as 'dominant' and 'aggressive' recur in 9 of them, and applicant data shows only 14% women. What is the most appropriate response?",
    answers: [
      { answer: "Add 'avoid bias' to the prompt and treat the next batch as bias-free without any human review of its wording, so that no independent verification is required", trueAnswer: false },
      { answer: "Move the task to Opus, since the largest tier removes gendered language from every advertisement it drafts", trueAnswer: false },
      { answer: "Review the ads against inclusive-language guidance with HR, revise the flagged phrases, and compare applicant mix across several postings with the revised wording", trueAnswer: true },
      { answer: "Delete the applicant data so that the team stops measuring an effect that the job ads cannot influence", trueAnswer: false },
    ],
    explanation:
      "C is correct: human review with HR guidance, revision, and measurement address both the wording and its effect. A assumes an instruction guarantees unbiased output; B wrongly claims that a larger tier eliminates biased wording; D hides the symptom and removes the measurement needed to verify improvement.",
  },
  {
    id: 14,
    domain: PRODUCT,
    time: 90,
    question:
      "A team moves a recurring analysis from ad hoc chats into a Project. Consider the following steps:\n1. Test the Project with five real questions and review the answers and citations.\n2. Upload the approved reference documents to the Project knowledge base.\n3. Write Project instructions that tell Claude how to use and cite the documents.\n4. List the recurring questions and the documents needed to answer them.\n5. Invite the team to use the Project and collect feedback for two weeks.\nWhich sequence orders these steps from first to last?",
    answers: [
      { answer: "4 – 2 – 3 – 5 – 1", trueAnswer: false },
      { answer: "2 – 4 – 3 – 1 – 5", trueAnswer: false },
      { answer: "4 – 3 – 2 – 1 – 5", trueAnswer: false },
      { answer: "4 – 2 – 3 – 1 – 5", trueAnswer: true },
    ],
    explanation:
      "D is correct: the sequence is: list questions and documents (4), upload (2), write instructions (3), test (1), invite the team (5). A swaps 1 and 5, inviting the team before the Project has been tested; B swaps 4 and 2, uploading documents before knowing which ones are needed; C swaps 2 and 3, writing instructions before the documents are uploaded.",
  },
  {
    id: 15,
    domain: WORKFLOW,
    time: 60,
    question:
      "A recruiting team wants Claude to draft interview-feedback summaries from recruiter notes in its applicant tracking system, which holds 5,000 candidate records. Records include salary and health details. Which integration design best manages risk?",
    answers: [
      { answer: "Give Claude access to the full candidate database, and instruct it in the prompt to ignore salary and health fields, in every case, so that no independent verification is required", trueAnswer: false },
      { answer: "Let Claude write summaries directly into the system, and review only the 50 records with the longest notes", trueAnswer: false },
      { answer: "Expose only the fields needed for the summary through a scoped connection, keep sensitive fields out of scope, and have a recruiter review each summary before it is saved", trueAnswer: true },
      { answer: "Export all 5,000 records into a Project, since Project knowledge is exempt from the applicant system's data policies", trueAnswer: false },
    ],
    explanation:
      "C is correct: scoping data access and requiring human review control both exposure and output quality. A relies on an instruction where access itself must be limited; B reviews a small, arbitrary subset and leaves most summaries unchecked; D wrongly claims that copies escape data policies.",
  },
  {
    id: 16,
    domain: GOVERNANCE,
    time: 60,
    question:
      "A marketing analyst wants to paste a 12,000-row list of customer names, emails, and purchase totals into Claude to segment audiences. The data policy lists approved systems for personal data. What is the most appropriate approach?",
    answers: [
      { answer: "Ask the data protection officer whether the tool is approved for personal data, then remove direct identifiers and use only the fields the segmentation needs", trueAnswer: true },
      { answer: "Paste the file into a private chat, since a private conversation is automatically compliant with the data policy, with no exceptions for any plan or tier", trueAnswer: false },
      { answer: "Ask the marketing manager whether the tool is approved for personal data, then remove direct identifiers and use only the fields the segmentation needs", trueAnswer: false },
      { answer: "Paste only the first 300 rows, since a small sample is not covered by the data policy", trueAnswer: false },
    ],
    explanation:
      "A is correct: the data protection owner decides on approval, and minimization limits exposure to what the task requires. B wrongly equates a private conversation with policy compliance; C leaves the approval decision to a role that does not own data protection; D treats a smaller sample as exempt, although personal data is still shared.",
  },
  {
    id: 17,
    domain: PRODUCT,
    time: 60,
    question:
      "A product manager repeatedly downloads a shared Google Doc roadmap, updated daily, and uploads it to Claude before drafting status updates. Which feature most directly removes this manual step?",
    answers: [
      { answer: "A larger model tier, since greater capability allows Claude to read links to private documents without any connection, for all future requests", trueAnswer: false },
      { answer: "A Google Drive connector, which lets Claude retrieve the current document under the manager's own access permissions when the manager asks", trueAnswer: true },
      { answer: "A Skill containing last week's roadmap, which Claude refreshes by itself every morning from the shared document", trueAnswer: false },
      { answer: "Memory, which synchronizes with Drive documents in the background and updates the stored roadmap each day", trueAnswer: false },
    ],
    explanation:
      "B is correct: a connector retrieves the live document with the user's existing permissions, so no manual upload is needed. A wrongly assumes that capability replaces access permissions; C wrongly claims that Skills refresh themselves from external documents; D misdescribes Memory as a document synchronization feature.",
  },
  {
    id: 18,
    domain: PROMPTING,
    time: 60,
    question:
      "A support lead wants Claude to rewrite 500 knowledge-base articles in a friendlier tone. A first test on one article changed technical steps and dropped two safety warnings. What should the lead do first?",
    answers: [
      { answer: "Send all 500 articles through the Message Batches API to cut the cost of the rewrite by half", trueAnswer: false },
      { answer: "Create a Skill that stores the tone guide so that every editor reuses the same rewriting procedure", trueAnswer: false },
      { answer: "Define what must stay unchanged, such as steps, warnings, and product names, and restate the request as a tone change that affects style only", trueAnswer: true },
      { answer: "Run the revised prompt on a sample of 20 articles and score each rewrite for technical accuracy and tone, so that no other component needs to change", trueAnswer: false },
    ],
    explanation:
      "C is correct: stating the invariants and limiting the change to style addresses the cause of the damage before any scaling. A is a valid cost step, but it scales a prompt that is known to damage content; B packages a procedure that has not yet been shown to preserve the steps; D is a valid evaluation step, but it follows once the constraints are defined.",
  },
  {
    id: 19,
    domain: PRODUCT,
    time: 60,
    question:
      "A consulting team of eight works on a client engagement for three months. They want Claude to reuse the client glossary and past deliverables in every related chat, while each consultant keeps writing preferences private. Which setup is most appropriate?",
    answers: [
      { answer: "Create a Project with the glossary and deliverables as knowledge and shared instructions, and let each consultant rely on personal Memory for individual preferences", trueAnswer: true },
      { answer: "Use Research mode for the glossary, because it stores uploaded documents permanently and applies them to all future work, with no exceptions for any plan or tier", trueAnswer: false },
      { answer: "Paste the glossary into every chat manually and describe preferences again each time, since this guarantees consistency", trueAnswer: false },
      { answer: "Store the glossary and preferences in one consultant's Memory, which then applies to every teammate's chats automatically", trueAnswer: false },
    ],
    explanation:
      "A is correct: Projects share knowledge and instructions across related chats, while Memory holds individual preferences. B misdescribes Research mode, which searches sources rather than storing documents; C relies on manual repetition as a guarantee and wastes effort; D wrongly claims that one person's Memory is shared with teammates.",
  },
  {
    id: 20,
    domain: TROUBLE,
    time: 90,
    question:
      "A team investigates a sudden decline in the quality of a Claude-assisted workflow. Consider the following steps:\n1. Add a monitoring check so that a similar decline is detected earlier.\n2. Test each change in isolation on the failed examples.\n3. Pull a sample of failed outputs from after the decline began.\n4. Revert the change that caused the drop and confirm that results recover.\n5. List what changed around the same time: prompt, inputs, files, and settings.\nWhich sequence orders these steps from first to last?",
    answers: [
      { answer: "3 – 2 – 5 – 4 – 1", trueAnswer: false },
      { answer: "3 – 5 – 2 – 4 – 1", trueAnswer: true },
      { answer: "5 – 3 – 2 – 4 – 1", trueAnswer: false },
      { answer: "3 – 5 – 2 – 1 – 4", trueAnswer: false },
    ],
    explanation:
      "B is correct: the sequence is: sample the failures (3), list what changed (5), test each change (2), revert and confirm (4), add monitoring (1). A swaps 5 and 2, testing changes before the list of changes exists; C swaps 3 and 5, listing changes before any failures have been sampled; D swaps 4 and 1, adding monitoring before recovery has been confirmed.",
  },
  {
    id: 21,
    domain: GOVERNANCE,
    time: 60,
    type: "multiple",
    selectCount: 2,
    question:
      "A university plans to use Claude to draft feedback comments for 2,000 student assignments. Comments will be emailed with grades that instructors assign. Which two safeguards best align with responsible use? (Select 2.)",
    answers: [
      { answer: "Allow Claude to assign provisional grades automatically, because instructors can correct any grade that students dispute", trueAnswer: false },
      { answer: "Require instructors to review each draft comment for accuracy and fairness before it is emailed to a student", trueAnswer: true },
      { answer: "Tell students that AI assists in drafting feedback and explain how to request a review by an instructor", trueAnswer: true },
      { answer: "Use any AI tool that individual lecturers prefer and record the choices only if a complaint is made", trueAnswer: false },
      { answer: "Treat comments as exempt from privacy rules because they contain only academic content and no sensitive personal data", trueAnswer: false },
    ],
    explanation:
      "B and C are correct: instructor review and transparency with a review route preserve accountability and fairness. A shifts grading to the model and relies on disputes to catch errors; D delays governance until after a problem appears; E makes a false claim, since student records are personal data.",
  },
  {
    id: 22,
    domain: PRODUCT,
    time: 60,
    question:
      "An analyst loads 15 reports of about 60 pages each into one chat and asks cross-report questions. After the tenth report, Claude begins to miss details from early reports. Which approach best handles the context limit?",
    answers: [
      { answer: "Switch to Haiku, because the smallest tier has the largest context window and never loses details from earlier documents, with no exceptions for any plan or tier", trueAnswer: false },
      { answer: "Raise max_tokens to the maximum value, which expands how many earlier pages the model can attend to", trueAnswer: false },
      { answer: "Keep adding reports to the same chat, since later messages automatically strengthen the memory of the earlier ones", trueAnswer: false },
      { answer: "Summarize each report into a structured digest with key figures, load the digests together, and open the original reports only for targeted follow-up questions", trueAnswer: true },
    ],
    explanation:
      "D is correct: digests compress each report into the context budget while the originals stay available for precise follow-ups. A makes a false claim, since no tier has unlimited context; B confuses the output limit with the input context capacity; C wrongly claims that more messages strengthen earlier content.",
  },
  {
    id: 23,
    domain: CONFIG,
    time: 60,
    type: "multiple",
    selectCount: 2,
    question:
      "A Project's instructions were written six months ago for 14 products, but the company now sells 22. Answers about the new products are vague or invented. Which two maintenance actions most directly address the problem? (Select 2.)",
    answers: [
      { answer: "Upload current documentation for the eight new products and remove outdated material for any discontinued product", trueAnswer: true },
      { answer: "Ask Claude to be careful about products it does not recognize, which guarantees that it never invents details", trueAnswer: false },
      { answer: "Tell Claude in one chat about the eight new products, since the Project applies that message to every colleague's chats, in every case", trueAnswer: false },
      { answer: "Add more general marketing text to the instructions so that Claude can infer the details of new products", trueAnswer: false },
      { answer: "Update the instructions to list the current 22 products and to say when a product is not covered by the knowledge", trueAnswer: true },
    ],
    explanation:
      "A and E are correct: current documents plus updated instructions give Claude both the content and the rule for gaps. B uses a vague plea as a guarantee instead of supplying content; C wrongly assumes a single chat message updates the Project for all users; D substitutes general text for the missing product facts.",
  },
  {
    id: 24,
    domain: WORKFLOW,
    time: 60,
    question:
      "A law firm wants Claude to draft first versions of engagement letters for 200 new clients a year. The firm has no AI policy, and the letters include fee terms and client names. What should the managing partner do first?",
    answers: [
      { answer: "Draft five letters with placeholder client names to measure how much editing time Claude saves per letter", trueAnswer: false },
      { answer: "Connect Claude to the firm's document system so that drafts are saved automatically in each client's folder", trueAnswer: false },
      { answer: "Check with the firm's ethics and risk counsel whether client names and fee terms may be entered into the tool, and under which conditions", trueAnswer: true },
      { answer: "Build a Skill containing the firm's standard engagement-letter template so that all associates draft in a uniform structure, regardless of which layer the problem originates in", trueAnswer: false },
    ],
    explanation:
      "C is correct: permission and conditions for client data must be settled before any template, test, or integration. A is a valid test, but it comes after the use is authorized; B integrates a system before the data rules are known; D is a valid packaging step, but it presumes that the use is permitted.",
  },
  {
    id: 25,
    domain: PROMPTING,
    time: 60,
    type: "multiple",
    selectCount: 3,
    question:
      "A policy analyst uses Claude to prepare a briefing on data-retention laws in five countries from current sources. The first answer was uncited and mixed jurisdictions together. Which three prompt elements most improve the result? (Select 3.)",
    answers: [
      { answer: "Name the five jurisdictions and require findings to be grouped under one heading per country", trueAnswer: true },
      { answer: "Require a citation with the source name and date for every legal claim, and mark any claim that lacks one", trueAnswer: true },
      { answer: "Ask Claude to answer from memory only, because memorized legal summaries are more current than web sources, without any further configuration", trueAnswer: false },
      { answer: "State the audience and the decision the briefing will support, such as whether to centralize storage in one region", trueAnswer: true },
      { answer: "Request the shortest possible answer so that unverifiable claims are less likely to appear in the briefing", trueAnswer: false },
    ],
    explanation:
      "A, B and D are correct: jurisdiction headings, mandatory citations, and a stated decision context give structure, traceability, and purpose. C falsely claims that memory is more current than searched sources; E treats brevity as verification, which it is not.",
  },
  {
    id: 26,
    domain: OUTPUT,
    time: 60,
    question:
      "Claude wrote a 900-word technical postmortem for the platform team. The CFO needs a 120-word version for a board packet, covering the $230,000 cost impact, the root cause, and prevention. Which adaptation is most appropriate?",
    answers: [
      { answer: "Cut the postmortem to its first 120 words, since the opening section of a technical document always states the business impact, at every stage, without any further configuration", trueAnswer: false },
      { answer: "Ask for a 120-word board summary in plain language that leads with the cost, states the cause and prevention, and then check each figure against the postmortem", trueAnswer: true },
      { answer: "Keep the full postmortem and add a one-line executive note, because boards prefer complete technical detail over summaries", trueAnswer: false },
      { answer: "Ask Claude to explain the postmortem to a general audience at length, then trim whichever sentences feel least important", trueAnswer: false },
    ],
    explanation:
      "B is correct: the board version must be rewritten for its audience and purpose, with the figures checked against the source. A makes a false absolute about where technical documents place business impact; C ignores the 120-word requirement and the audience's needs; D starts from length instead of the required content and audience.",
  },
  {
    id: 27,
    domain: TROUBLE,
    time: 60,
    type: "multiple",
    selectCount: 2,
    question:
      "A prompt that routes 1,000 support emails to one of eight queues misroutes 14% of messages, mostly between 'billing' and 'refunds'. Which two changes are most likely to reduce misrouting? (Select 2.)",
    answers: [
      { answer: "Raise max_tokens so that the model has room to consider every queue before choosing, which resolves the confusion", trueAnswer: false },
      { answer: "Define each queue with inclusion and exclusion rules and state how to choose between billing and refunds", trueAnswer: true },
      { answer: "Ask Claude to route more carefully and to double-check each decision, which guarantees fewer misroutes", trueAnswer: false },
      { answer: "Merge billing and refunds into one queue without checking how downstream teams handle each type", trueAnswer: false },
      { answer: "Add four labeled examples of borderline billing and refund emails with the correct queue for each", trueAnswer: true },
    ],
    explanation:
      "B and E are correct: explicit queue boundaries and borderline examples target the exact confusion that causes the misroutes. A raises an output ceiling, which does not clarify the queue boundaries; C uses a vague plea as a guarantee instead of adding criteria; D removes the symptom while ignoring the operational difference.",
  },
  {
    id: 28,
    domain: OUTPUT,
    time: 60,
    question:
      "A bank uses Claude to draft explanations for 400 denied credit applications per week. Spot checks of 40 drafts found the reasons accurate and clearly written. Which review policy is most appropriate for notices that carry legal consequences?",
    answers: [
      { answer: "Approval is unnecessary once spot checks pass twice in a row, since two clean samples prove that all later notices are accurate", trueAnswer: false },
      { answer: "A trained credit officer should approve a random sample of notices before mailing, because legal consequences remain even when spot checks look clean", trueAnswer: false },
      { answer: "Approval is needed only for notices where Claude reports low confidence, since the model reliably flags every notice that could be wrong", trueAnswer: false },
      { answer: "A trained credit officer should approve every notice before mailing, because legal consequences remain even when spot checks look clean", trueAnswer: true },
    ],
    explanation:
      "D is correct: legally consequential notices need qualified human approval for each item, whatever the spot-check results. A treats two small samples as proof for all future output; B reviews only a sample, so unreviewed notices can still contain errors with legal effect; C assumes that self-reported confidence reliably identifies every error.",
  },
  {
    id: 29,
    domain: GOVERNANCE,
    time: 60,
    question:
      "A manager wants to paste a draft acquisition term sheet, naming a target company and a price of $120 million, into Claude to improve the wording. The company's AI policy does not address deal confidentiality. What should the manager do first?",
    answers: [
      { answer: "Delete the conversation once the wording is finished to limit how long the content remains available", trueAnswer: false },
      { answer: "Ask a colleague on the deal team to review the improved wording before it goes to the counterparty", trueAnswer: false },
      { answer: "Replace the company name and price with placeholders and continue editing the rest of the wording with Claude, for all future requests", trueAnswer: false },
      { answer: "Ask legal or compliance whether confidential deal information may be entered into the tool, and under which approved conditions", trueAnswer: true },
    ],
    explanation:
      "D is correct: whether the information may be entered at all must be settled before any editing or cleanup. A acts after exposure and does not establish whether entry was allowed; B is a valid review, but it happens after the information has been shared; C is a valid mitigation, but it presumes the use is already approved.",
  },
  {
    id: 30,
    domain: OUTPUT,
    time: 60,
    question:
      "A paralegal asks Claude to summarize case law on a lease dispute. The answer cites three cases with docket numbers, but a database search finds only one of them. The memo is due to a partner in three hours. What is the most appropriate action?",
    answers: [
      { answer: "Remove the two unfound citations as likely fabrications, and have the paralegal verify the remaining case in the legal database before use", trueAnswer: true },
      { answer: "Ask Claude whether the two citations are real and keep them if the model repeats that they are valid", trueAnswer: false },
      { answer: "Remove the two unfound citations as likely fabrications, and have Claude verify the remaining case in the legal database before use", trueAnswer: false },
      { answer: "Keep all three citations because docket numbers are too specific to be invented and the database may simply be incomplete, in every case", trueAnswer: false },
    ],
    explanation:
      "A is correct: unverifiable citations must be treated as fabricated, and the remaining one needs independent confirmation in the primary database. B relies on the model's self-report instead of an external source; C uses the model to check its own citation, which is not independent verification; D treats specificity as proof of existence, confusing a symptom of confidence with verification.",
  },
  {
    id: 31,
    domain: PROMPTING,
    time: 60,
    question:
      "An analyst asks Claude to evaluate a 25-page supplier proposal against eight criteria in a single request. The response scores all criteria but gives no evidence for three of them. Which prompting strategy best fixes this?",
    answers: [
      { answer: "Ask for a shorter answer so that the model concentrates on the criteria it considers most important in the proposal, from that point onward", trueAnswer: false },
      { answer: "Ask Claude to work through each criterion in turn, quoting the supporting passage first and assigning the score only after the quote", trueAnswer: true },
      { answer: "Run the same request five times and average the scores, since averaging removes the need for supporting evidence", trueAnswer: false },
      { answer: "Set max_tokens to the maximum allowed so that the missing evidence is added automatically at the end of the response", trueAnswer: false },
    ],
    explanation:
      "B is correct: a quote-first, criterion-by-criterion structure forces evidence for every score. A treats brevity as a cure for missing evidence, which it does not supply; C uses repetition to average away a missing-evidence problem; D raises an output ceiling without instructing the model to provide evidence.",
  },
  {
    id: 32,
    domain: GOVERNANCE,
    time: 90,
    question:
      "A hospital plans a Claude-assisted workflow for drafting patient discharge instructions. Consider the following governance steps:\n1. Run a supervised pilot in one ward with clinician review of every draft.\n2. Obtain approval from the privacy officer and the clinical safety lead.\n3. Identify the data fields the drafts will contain and classify their sensitivity.\n4. Define which instructions must always be written or approved by a clinician.\n5. Expand to further wards after reviewing pilot incidents and corrections.\nWhich sequence orders these steps from first to last?",
    answers: [
      { answer: "3 – 4 – 2 – 1 – 5", trueAnswer: true },
      { answer: "4 – 3 – 2 – 1 – 5", trueAnswer: false },
      { answer: "3 – 4 – 2 – 5 – 1", trueAnswer: false },
      { answer: "3 – 4 – 1 – 2 – 5", trueAnswer: false },
    ],
    explanation:
      "A is correct: the sequence is: classify the data (3), define clinician-only content (4), obtain approval (2), pilot (1), expand (5). B swaps 3 and 4, defining clinician-only content before the data has been classified; C swaps 1 and 5, expanding to further wards before the pilot has run; D swaps 2 and 1, piloting before approval has been obtained.",
  },
  {
    id: 33,
    domain: TROUBLE,
    time: 60,
    question:
      "A weekly summarization job on Sonnet produced consistent reports for ten weeks. This week the reports omit the 'risks' section in about 30% of cases, although the prompt is unchanged. Which diagnosis is most likely?",
    answers: [
      { answer: "Review this week's source documents for changes in format, length, or structure, because an unchanged prompt points to a change in the model", trueAnswer: false },
      { answer: "Rebuild the whole summarization pipeline on Opus now, since any omission proves that the current design is fundamentally flawed", trueAnswer: false },
      { answer: "Set the temperature to 0 and treat the 30% omission rate as eliminated, since a deterministic setting guarantees every section", trueAnswer: false },
      { answer: "Review this week's source documents for changes in format, length, or structure, because an unchanged prompt points to a change in the input", trueAnswer: true },
    ],
    explanation:
      "D is correct: with the prompt unchanged, the first suspect is a change in the inputs, which can be checked directly. A blames the model, although an unchanged prompt with changed output points first to the input; B jumps to a rebuild before the cause is diagnosed; C changes sampling randomness and cannot guarantee that every section appears.",
  },
  {
    id: 34,
    domain: PRODUCT,
    time: 60,
    type: "multiple",
    selectCount: 2,
    question:
      "A consultant needs Claude to prepare a sourced market overview from current web information, and later to produce a client-facing slide outline that the team will edit together. Which two features fit these needs? (Select 2.)",
    answers: [
      { answer: "Haiku, which guarantees that every figure in the overview matches the latest publicly available data", trueAnswer: false },
      { answer: "Memory, which stores the sourced overview and updates it automatically whenever market conditions change", trueAnswer: false },
      { answer: "Research mode, which performs multiple searches and returns findings with citations that the consultant can verify", trueAnswer: true },
      { answer: "A Project knowledge base holding last year's reports, which Claude refreshes from the web without being asked", trueAnswer: false },
      { answer: "An artifact for the slide outline, which can be revised iteratively and shared as a standalone document", trueAnswer: true },
    ],
    explanation:
      "C and E are correct: Research mode supplies cited, current findings, and an artifact suits an outline that will be edited and shared. A makes a false guarantee about data currency for any tier; B misdescribes Memory as a self-updating research store; D wrongly claims that Project files refresh from the web.",
  },
  {
    id: 35,
    domain: GOVERNANCE,
    time: 60,
    question:
      "A recruitment agency wants Claude to screen 5,000 CVs and automatically reject the lowest-scoring 70%. Hiring decisions affect people's livelihoods, and applicable regulation requires explainability. Which control is most appropriate?",
    answers: [
      { answer: "Let Claude reject automatically and send each candidate Claude's own explanation, which satisfies explainability on its own", trueAnswer: false },
      { answer: "Use Claude to summarize CVs against stated criteria, and require recruiters to make and document every rejection decision themselves", trueAnswer: true },
      { answer: "Use Claude to summarize CVs against stated criteria, and require recruiters to make and document some rejection decisions themselves", trueAnswer: false },
      { answer: "Use Opus for scoring, because the most capable tier is exempt from bias and explainability requirements", trueAnswer: false },
    ],
    explanation:
      "B is correct: AI supports the summary, while accountable humans make and explain every decision that affects a person. A treats a model-generated explanation as a substitute for human accountability; C leaves part of the rejections undocumented and unexplained; D falsely claims that a tier is exempt from regulatory requirements.",
  },
  {
    id: 36,
    domain: OUTPUT,
    time: 90,
    question:
      "A compliance team validates a Claude-generated summary of a new regulation. Consider the following steps:\n1. Correct the discrepancies and record each change.\n2. Compare each obligation in the summary with the numbered clause in the source.\n3. Skim the summary for contradictions between sections.\n4. Approve the summary for distribution to the compliance team.\n5. Adapt headings and tone to the compliance team's template.\nWhich sequence orders these steps from first to last?",
    answers: [
      { answer: "3 – 2 – 1 – 5 – 4", trueAnswer: true },
      { answer: "3 – 2 – 5 – 1 – 4", trueAnswer: false },
      { answer: "2 – 3 – 1 – 5 – 4", trueAnswer: false },
      { answer: "3 – 2 – 1 – 4 – 5", trueAnswer: false },
    ],
    explanation:
      "A is correct: the sequence is: skim for contradictions (3), compare with the source (2), correct (1), adapt the template (5), approve (4). B swaps 1 and 5, adapting the template before the corrections are made; C swaps 3 and 2, comparing with the source before the summary is skimmed for internal contradictions; D swaps 5 and 4, approving the summary before it is adapted to the template.",
  },
  {
    id: 37,
    domain: WORKFLOW,
    time: 60,
    question:
      "An e-commerce team wants Claude to answer customer questions about 3,000 products in chat. Early tests show 15% of answers cite outdated specifications, and marketing wants a launch next week. What should the project lead do first?",
    answers: [
      { answer: "Move the assistant to a larger model tier and compare accuracy on 100 sample questions", trueAnswer: false },
      { answer: "Write detailed instructions covering tone, escalation, and a ban on guessing product specifications", trueAnswer: false },
      { answer: "Launch to a small customer group of 200 and monitor how often agents correct the answers, for all future requests", trueAnswer: false },
      { answer: "Identify which source holds the authoritative, current product specifications and who maintains it, before connecting any content to Claude", trueAnswer: true },
    ],
    explanation:
      "D is correct: answer quality depends on an authoritative, maintained source, which must be identified before any build or launch. A tests a tier change when the cause is outdated source content; B is a valid configuration step, but instructions cannot supply missing current data; C is a valid pilot, but it exposes customers to outdated specifications.",
  },
  {
    id: 38,
    domain: OUTPUT,
    time: 60,
    type: "multiple",
    selectCount: 2,
    question:
      "A compliance team uses Claude to summarize a 90-page regulation into a three-page briefing for managers. Which two checks most reliably confirm that the briefing is faithful and complete? (Select 2.)",
    answers: [
      { answer: "Ask Claude to state that the briefing covers every obligation and accept that statement as evidence of completeness", trueAnswer: false },
      { answer: "Check that every article marked mandatory in the regulation's table of contents is addressed in the briefing", trueAnswer: true },
      { answer: "Have a compliance specialist verify a sample of 15 stated obligations against the regulation's numbered articles", trueAnswer: true },
      { answer: "Generate the briefing a second time and accept any obligation that appears in both versions as verified", trueAnswer: false },
      { answer: "Confirm that the briefing is under three pages and uses the same headings as last quarter's briefing", trueAnswer: false },
    ],
    explanation:
      "B and C are correct: a specialist's sample check tests fidelity, and a coverage check against the table of contents tests completeness. A relies on a self-declaration instead of an independent check; D agreement across runs can repeat the same error; E checks length and layout, which say nothing about accuracy.",
  },
  {
    id: 39,
    domain: WORKFLOW,
    time: 60,
    question:
      "A warehouse manager has 120 incident reports from the past year and wants to reduce picking errors. She asks how Claude should be used in the improvement project. Which use is most appropriate?",
    answers: [
      { answer: "Rewrite the picking procedure and publish it directly to staff, because floor-lead review only delays the improvement", trueAnswer: false },
      { answer: "Cluster the reports into recurring error causes, propose process changes with trade-offs, and let the floor leads decide which change to test", trueAnswer: true },
      { answer: "Predict next quarter's error rate precisely from the 120 reports, then promise that figure to executives as the project target, at every stage", trueAnswer: false },
      { answer: "Cluster the reports into recurring error causes, propose process changes with trade-offs, and let Claude decide which change to test", trueAnswer: false },
    ],
    explanation:
      "B is correct: clustering and option generation support the project, while the people who know the floor make the decision. A removes the review that validates the change; C claims a precision that a small report set cannot support; D transfers the decision from the floor leads to the model.",
  },
  {
    id: 40,
    domain: GOVERNANCE,
    time: 60,
    type: "multiple",
    selectCount: 3,
    question:
      "An organization with 1,200 staff writes guidance for Claude connectors that read email, calendars, and shared drives. Which three requirements should the guidance include? (Select 3.)",
    answers: [
      { answer: "Connectors may be enabled only by approved roles, and each connection is reviewed against the data classification policy", trueAnswer: true },
      { answer: "Users must not connect accounts that hold regulated data unless the privacy team has approved that specific use", trueAnswer: true },
      { answer: "Any employee may connect any account, because the connector automatically inherits the safest permissions available", trueAnswer: false },
      { answer: "Staff must report suspected over-sharing or unintended access to the security team within a defined time", trueAnswer: true },
      { answer: "Connector activity needs no records, since connectors act only on data that the employee could already open, for all future requests", trueAnswer: false },
    ],
    explanation:
      "A, B and D are correct: role-based enablement, approval for regulated data, and an incident reporting duty make connector use controlled and accountable. C falsely claims that connectors apply the safest permissions automatically; E confuses permission with accountability, so audit needs remain.",
  },
  {
    id: 41,
    domain: CONFIG,
    time: 60,
    question:
      "An admin enables a Slack connector for a 40-person product team. Some private channels hold customer escalations and HR discussions. The team wants Claude to summarize only product-feedback channels. Which configuration is most appropriate?",
    answers: [
      { answer: "Grant each member admin rights on the connector so that permission errors never interrupt the summaries", trueAnswer: false },
      { answer: "Limit connector access to the specific product-feedback channels, review the permissions against data policy, and exclude private HR and escalation channels from scope", trueAnswer: true },
      { answer: "Grant access to all channels and instruct Claude never to read private HR or escalation conversations, at every stage, so that no independent verification is required", trueAnswer: false },
      { answer: "Disable the connector entirely and ask staff to copy channel messages into chats manually each week", trueAnswer: false },
    ],
    explanation:
      "B is correct: limiting the connected scope and reviewing permissions controls what Claude can reach. A expands privileges beyond need, which violates least privilege; C relies on an instruction where access itself must be limited; D removes the capability instead of scoping it, and adds manual copy risk.",
  },
  {
    id: 42,
    domain: OUTPUT,
    time: 60,
    question:
      "A Claude-generated vendor comparison states in its summary that Vendor B costs $42,000 per year but lists $48,000 in the detailed table. The comparison informs a purchase approval this week. How should the discrepancy be handled?",
    answers: [
      { answer: "Check both figures against the vendor quotation, correct every place where the wrong amount appears, and re-verify the totals that depend on it", trueAnswer: true },
      { answer: "Check both figures against the vendor quotation, correct the first place where the wrong amount appears, and re-verify the totals that depend on it", trueAnswer: false },
      { answer: "Use the lower figure in the approval paper, since the summary is the section that decision makers are most likely to read", trueAnswer: false },
      { answer: "Ask Claude which figure is correct and use the one that it selects after reviewing both sections of its own comparison", trueAnswer: false },
    ],
    explanation:
      "A is correct: an internal contradiction must be resolved against the primary document everywhere it appears, including dependent totals. B fixes only one occurrence, leaving the inconsistency elsewhere; C picks a value for convenience instead of verifying it; D relies on the model to judge its own output.",
  },
  {
    id: 43,
    domain: PROMPTING,
    time: 60,
    type: "multiple",
    selectCount: 2,
    question:
      "A team builds a prompt that extracts action items from 60 meeting transcripts and wants every output in one format. Results vary in length and in how owners are named. Which two prompt elements most improve format consistency? (Select 2.)",
    answers: [
      { answer: "Shorten the instructions to a single sentence so that the model has fewer rules that could conflict with each other", trueAnswer: false },
      { answer: "Raise the temperature to 1.0 so that the model explores alternative formats before it settles on the best one", trueAnswer: false },
      { answer: "Provide two complete example outputs that show the exact format, including how owners and due dates are written", trueAnswer: true },
      { answer: "Tell Claude to keep the format the same as in the previous batch, assuming it retains earlier API requests", trueAnswer: false },
      { answer: "Specify the required fields in order and state what to write when a field is missing from the transcript", trueAnswer: true },
    ],
    explanation:
      "C and E are correct: worked examples and an ordered field list with a rule for missing data define the output precisely. A removes the specification that creates consistency; B adds randomness, which increases variation instead of reducing it; D assumes memory between API requests, which a new call does not include.",
  },
  {
    id: 44,
    domain: OUTPUT,
    time: 60,
    question:
      "A manager uses Claude to turn 30 pages of meeting notes into a decision log for a regulated project. The log lists 14 decisions, but the manager recalls 17 being made. What should be done first?",
    answers: [
      { answer: "Reformat the log as a table sorted by date so that missing decisions become easier to notice later", trueAnswer: false },
      { answer: "Compare the log with the original notes to identify which decisions are missing or altered, before asking Claude to produce a revised log", trueAnswer: true },
      { answer: "Ask Claude to regenerate the log with an instruction to include every decision, then compare only the new decision count, so that no independent verification is required", trueAnswer: false },
      { answer: "Send the log to the project team for comments and treat silence as confirmation that no decision is missing", trueAnswer: false },
    ],
    explanation:
      "B is correct: a comparison against the source defines exactly what is missing, so any revision is based on evidence. A improves presentation before completeness is confirmed; C requests regeneration before the gaps are known and checks only a count; D treats the absence of replies as verification.",
  },
  {
    id: 45,
    domain: PROMPTING,
    time: 60,
    question:
      "A claims team asks Claude to classify 3,000 insurance emails into six categories. Zero-shot results show 71% agreement with adjusters, and most errors confuse 'billing dispute' with 'coverage question'. Which prompt change is most likely to raise agreement?",
    answers: [
      { answer: "Add three labeled examples for each confusable category and define the boundary between billing disputes and coverage questions in one sentence", trueAnswer: true },
      { answer: "Raise the temperature to 0.9 so that the model explores more category interpretations before it commits to a single label", trueAnswer: false },
      { answer: "Tell Claude to be extremely careful and to reread each email twice, which guarantees consistent labels across all 3,000 emails", trueAnswer: false },
      { answer: "Add three labeled examples for one confusable category and define the boundary between billing disputes and coverage questions in one sentence", trueAnswer: false },
    ],
    explanation:
      "A is correct: labeled examples plus an explicit boundary definition target exactly the confusion that causes the errors. B adds sampling randomness, which does not clarify category boundaries; C uses a vague plea as a guarantee instead of giving concrete criteria; D covers only one category, so the other confusions remain unaddressed.",
  },
  {
    id: 46,
    domain: CONFIG,
    time: 60,
    question:
      "An IT admin plans to connect Google Drive to Claude for a 50-person legal team. The shared drive holds 4,000 files, including privileged client material and public templates. What should the admin do first?",
    answers: [
      { answer: "Brief all 50 lawyers on prompts that make Claude retrieve documents accurately and efficiently", trueAnswer: false },
      { answer: "Inventory the folders, classify them by confidentiality, and decide which folders the legal team genuinely needs before enabling the connector", trueAnswer: true },
      { answer: "Write Project instructions telling Claude to cite the file name and folder for every retrieved document", trueAnswer: false },
      { answer: "Enable the connector for a pilot group of five lawyers and observe which files Claude retrieves in practice, without changing any other component", trueAnswer: false },
    ],
    explanation:
      "B is correct: knowing what the drive contains and who needs it comes before enabling any access. A trains users on a connector whose scope has not been defined; C is a valid instruction step, but it does not limit what can be retrieved; D is a valid pilot, but it exposes privileged files before scope is decided.",
  },
  {
    id: 47,
    domain: WORKFLOW,
    time: 60,
    question:
      "A hotel chain asks Claude to 'handle guest complaints.' Complaints arrive in six languages, 12% involve safety or injury, and compensation above $200 requires a manager's approval. Which scope for Claude is most appropriate?",
    answers: [
      { answer: "Draft replies and suggest compensation within the $200 limit for routine complaints, and escalate safety, injury, and higher-value cases to a manager", trueAnswer: true },
      { answer: "Handle only the complaints in the primary language and ignore the other five, since quality cannot be maintained across languages, at every stage", trueAnswer: false },
      { answer: "Draft replies for all complaints on Haiku and send them automatically, because the smallest tier handles safety cases equally well", trueAnswer: false },
      { answer: "Resolve every complaint end to end, including compensation, because the six-language requirement makes human handling impractical", trueAnswer: false },
    ],
    explanation:
      "A is correct: Claude supports routine cases within the approval limit, while high-risk or high-value cases stay with a manager. B drops most of the volume instead of designing for the requirement; C falsely claims equal handling of safety cases and removes review; D removes the approval and safety controls that the requirements impose.",
  },
  {
    id: 48,
    domain: OUTPUT,
    time: 90,
    question:
      "Consider the following prompts for drafting a customer email about a delay:\n1. Write an email to the client about the delay.\n2. Write a 120-word email to the client about the two-week shipping delay, apologizing once, stating the new date of 14 March, and offering a 10% credit.\n3. Write an email.\n4. Write a short, polite email to the client about the shipping delay.\n5. Write a 120-word email to the client about the two-week shipping delay, apologizing once and stating the new date of 14 March.\nWhich sequence orders these prompts from the most general to the most specific?",
    answers: [
      { answer: "3 – 1 – 5 – 4 – 2", trueAnswer: false },
      { answer: "1 – 3 – 4 – 5 – 2", trueAnswer: false },
      { answer: "3 – 1 – 4 – 5 – 2", trueAnswer: true },
      { answer: "3 – 1 – 4 – 2 – 5", trueAnswer: false },
    ],
    explanation:
      "C is correct: the sequence adds constraints one at a time: no context (3), client and delay (1), tone and length (4), concrete content (5), credit offer (2). A places the detailed 120-word prompt before the short, polite prompt; B places the delay prompt before the bare email request; D places the prompt with the credit offer before the one it extends.",
  },
  {
    id: 49,
    domain: GOVERNANCE,
    time: 60,
    question:
      "A pharmaceutical company lists three proposed Claude uses: drafting an internal newsletter, summarizing 200 published studies for researchers, and approving patient-safety reports for regulators without human sign-off. Which use should not proceed as proposed?",
    answers: [
      { answer: "Drafting the internal newsletter, because any internal communication produced with AI assistance is prohibited by default", trueAnswer: false },
      { answer: "Approving safety reports for regulators without sign-off, because regulated, high-impact submissions require qualified human review and accountability", trueAnswer: true },
      { answer: "Summarizing the published studies, because summaries of published research always need approval from the legal department", trueAnswer: false },
      { answer: "All three proposals are acceptable, because the most capable model tier makes human sign-off unnecessary for regulators", trueAnswer: false },
    ],
    explanation:
      "B is correct: regulated, high-impact submissions need qualified human review, while the other two uses are low-risk support tasks. A states a false absolute that no policy imposes by default; C states a false absolute about summarizing published research; D wrongly claims that a larger tier replaces required human sign-off.",
  },
  {
    id: 50,
    domain: CONFIG,
    time: 90,
    question:
      "A team adds a reusable Skill for monthly variance reports. Consider the following steps:\n1. Run the Skill on five representative tasks and compare the outputs with the standard.\n2. Write the SKILL.md with a clear name, description, and the step-by-step procedure.\n3. Share the Skill with the team and record who maintains it.\n4. Identify the repeatable procedure and the output standard it must meet.\n5. Add the template files and reference documents that the procedure uses.\nWhich sequence orders these steps from first to last?",
    answers: [
      { answer: "4 – 5 – 2 – 1 – 3", trueAnswer: false },
      { answer: "4 – 2 – 5 – 3 – 1", trueAnswer: false },
      { answer: "4 – 2 – 5 – 1 – 3", trueAnswer: true },
      { answer: "2 – 4 – 5 – 1 – 3", trueAnswer: false },
    ],
    explanation:
      "C is correct: the sequence is: identify the procedure and standard (4), write SKILL.md (2), add templates and references (5), test (1), share and assign a maintainer (3). A swaps 2 and 5, adding supporting files before the procedure is written; B swaps 1 and 3, sharing the Skill before it has been tested; D swaps 4 and 2, writing the procedure before it has been identified.",
  },
  {
    id: 51,
    domain: GOVERNANCE,
    time: 60,
    question:
      "A university department proposes using Claude to grade 900 student essays and email each student a final grade, with no instructor review. Students have not been told about AI use. Which governance concern is most significant?",
    answers: [
      { answer: "Model tier is the main concern, since choosing Opus would make the grades free of error and remove the need for appeals", trueAnswer: false },
      { answer: "Grading speed is the main concern, so the department should confirm that all 900 essays can be graded within one day", trueAnswer: false },
      { answer: "High-stakes decisions about individuals need human accountability, disclosure of AI use, and a way for students to appeal a grade", trueAnswer: true },
      { answer: "Essay length is the main concern, since only essays below 500 words may ever be assessed with AI assistance", trueAnswer: false },
    ],
    explanation:
      "C is correct: grades affect students' futures, so they require accountable humans, transparency, and an appeal route. A wrongly claims that a larger tier removes errors and the need for appeals; B focuses on throughput and ignores accountability and disclosure; D invents a rule that no standard imposes.",
  },
  {
    id: 52,
    domain: CONFIG,
    time: 60,
    type: "multiple",
    selectCount: 3,
    question:
      "A developer writes a system prompt for an API-based HR assistant that answers from a 40-page handbook. Early tests show unsupported answers and inconsistent tone. Which three instructions are specific, testable, and most likely to improve reliability? (Select 3.)",
    answers: [
      { answer: "Use a neutral, courteous tone in at most four sentences, and never give legal advice", trueAnswer: true },
      { answer: "Use whichever tone seems appropriate, since flexibility produces more natural answers for every employee", trueAnswer: false },
      { answer: "Answer only from the provided handbook text and quote the relevant section for every answer", trueAnswer: true },
      { answer: "If the handbook does not cover the question, say so and direct the employee to the HR service desk", trueAnswer: true },
      { answer: "Try your best to be helpful in every situation, even when the handbook does not provide enough information, for all future requests", trueAnswer: false },
    ],
    explanation:
      "A, C and D are correct: each rule can be tested as pass or fail and limits unsupported answers or inconsistent tone. B leaves tone unspecified and therefore untestable; E encourages unsupported answers instead of limiting them.",
  },
  {
    id: 53,
    domain: TROUBLE,
    time: 60,
    question:
      "A nightly job sends 20,000 documents to Claude, each with the same 6,000-token instruction block. Results are needed by morning, and monthly cost is 35% over budget. Which optimization is most appropriate?",
    answers: [
      { answer: "Use the Message Batches API for the asynchronous workload and apply prompt caching to the shared instruction block to reduce repeated input cost", trueAnswer: true },
      { answer: "Increase max_tokens so that each response completes in fewer calls, which lowers the number of billed input tokens", trueAnswer: false },
      { answer: "Switch to real-time streaming for every document, since streaming lowers the per-token price for large workloads", trueAnswer: false },
      { answer: "Remove the instruction block to cut tokens, and rely on the model to infer the task from each document, regardless of what the source material shows", trueAnswer: false },
    ],
    explanation:
      "A is correct: the work is asynchronous and shares a large prefix, which fits batch processing and prompt caching. B raises an output ceiling, which neither reduces calls nor input cost; C falsely claims that streaming changes the price per token; D removes the specification that the task depends on.",
  },
  {
    id: 54,
    domain: CONFIG,
    time: 60,
    question:
      "A Project's knowledge base holds 120 files, including the 2022 and 2025 versions of an expense policy. Employees report that answers about travel limits sometimes cite the old $150 limit instead of $200. Which change most directly fixes this?",
    answers: [
      { answer: "Ask employees to type '$200' in each question, since the Project cannot hold a correction after files are uploaded", trueAnswer: false },
      { answer: "Remove the 2022 expense policy and state in the instructions that the 2025 policy is an authoritative source for travel limits", trueAnswer: false },
      { answer: "Rename the 2022 file to 'old' and leave it in the knowledge base so that Claude learns to prefer newer files, at every stage", trueAnswer: false },
      { answer: "Remove the 2022 expense policy and state in the instructions that the 2025 policy is the only authoritative source for travel limits", trueAnswer: true },
    ],
    explanation:
      "D is correct: removing the superseded file and naming a single authoritative source removes the conflict. A makes a false claim, since Project content can be edited and maintained; B implies that other sources may also be authoritative, leaving room for conflicting answers; C keeps the conflicting source and assumes a file name changes retrieval behavior.",
  },
  {
    id: 55,
    domain: WORKFLOW,
    time: 60,
    type: "multiple",
    selectCount: 3,
    question:
      "A team presents a Claude-assisted contract-intake workflow to the board after a six-week pilot of 250 contracts. Directors want realistic expectations. Which three statements accurately communicate its value and limits? (Select 3.)",
    answers: [
      { answer: "Extraction accuracy will reach 100 percent once the prompt has been refined, so reviewers can then be removed, in every case", trueAnswer: false },
      { answer: "Average intake time fell from 40 minutes to 18 minutes per contract during the pilot", trueAnswer: true },
      { answer: "Reviewers corrected extracted dates or party names in about 7 percent of contracts, so a sampling check remains in place", trueAnswer: true },
      { answer: "The workflow suits standard contract types, and nonstandard agreements still go to a lawyer for full manual review", trueAnswer: true },
      { answer: "The pilot proves that the workflow will perform equally well on any contract type, jurisdiction, or language", trueAnswer: false },
    ],
    explanation:
      "B, C and D are correct: a measured benefit, an observed error rate with its control, and a defined scope set accurate expectations. A promises perfection from a probabilistic system; E generalizes a limited pilot into a guarantee.",
  },
  {
    id: 56,
    domain: PRODUCT,
    time: 60,
    question:
      "A law firm needs Claude to compare 40 clauses across two 80-page agreements and explain conflicts, with accuracy as the main requirement. Volume is only 15 comparisons per week. Which model choice is the most appropriate starting point?",
    answers: [
      { answer: "Start with Opus, because the task needs deep reasoning across long documents, and verify a sample of outputs against other outputs", trueAnswer: false },
      { answer: "Start with Haiku, because the fastest tier gives the same reasoning quality on long legal documents at a lower cost, in every case", trueAnswer: false },
      { answer: "Start with Sonnet and accept every output, because default settings always meet accuracy requirements for legal comparison", trueAnswer: false },
      { answer: "Start with Opus, because the task needs deep reasoning across long documents, and verify a sample of outputs against the source clauses", trueAnswer: true },
    ],
    explanation:
      "D is correct: the task is low-volume, accuracy-critical, and reasoning-heavy, which fits the most capable tier, with sampled verification. A compares outputs with each other, which cannot reveal shared errors; B falsely claims equal reasoning quality for the fastest tier; C makes a false absolute and removes verification.",
  },
  {
    id: 57,
    domain: OUTPUT,
    time: 60,
    question:
      "Claude produces a one-page churn analysis from a 5,000-row export. The text says churn rose 'sharply to 9.4%' in Q3, but the exported rows show 6.1% for that quarter. A manager plans to present it tomorrow morning. Which step is most reliable?",
    answers: [
      { answer: "Recompute Q3 churn from the exported rows with a script or spreadsheet formula, then correct the analysis and every statement that depends on the figure", trueAnswer: true },
      { answer: "Replace 9.4% with the average of 9.4% and 6.1%, because the truth most likely lies between the two values", trueAnswer: false },
      { answer: "Ask Claude to double-check the number and keep it if the model reaffirms 9.4% in a second answer", trueAnswer: false },
      { answer: "Keep the sharp-rise narrative and soften the wording to 'rose notably', since the direction of change is probably still right, for all future requests, from that point onward", trueAnswer: false },
    ],
    explanation:
      "A is correct: recomputing from the source data exposes the error and lets every dependent statement be corrected. B invents a value instead of tracing the discrepancy to the source; C treats self-confirmation as verification; D softens the wording while leaving an unverified claim in place.",
  },
  {
    id: 58,
    domain: PROMPTING,
    time: 60,
    question:
      "A developer's API prompt asks Claude to extract invoice number, date, and total from 400 emails and 'return JSON'. About 8% of responses add a sentence before the JSON, which breaks the downstream parser. What is the most robust fix?",
    answers: [
      { answer: "Add 'never write anything except JSON' in capital letters and treat the instruction as a guarantee that the parser never fails, without exception", trueAnswer: false },
      { answer: "Add a regular expression after the parser step that deletes the first sentence of every response before parsing it", trueAnswer: false },
      { answer: "Lower the temperature to 0 so that the model stops adding introductory sentences to any of the 400 responses", trueAnswer: false },
      { answer: "Specify the exact schema, request only the JSON object, and validate every response against the schema, retrying or flagging any that fail validation", trueAnswer: true },
    ],
    explanation:
      "D is correct: a precise schema plus programmatic validation makes the pipeline robust even when a response deviates. A treats an emphatic instruction as a guarantee, although compliance remains probabilistic; B patches the symptom downstream and breaks on responses that have no extra sentence; C changes sampling randomness, which does not enforce output structure.",
  },
  {
    id: 59,
    domain: PRODUCT,
    time: 60,
    question:
      "A 25-person operations team is told to 'use Claude more' for weekly reporting that takes 30 staff hours. Leadership has proposed Research mode, Skills, and a Project. What should the team lead do first?",
    answers: [
      { answer: "Package the report layout as a Skill so that all 25 staff members produce the weekly report in exactly the same format", trueAnswer: false },
      { answer: "Test Haiku, Sonnet, and Opus on this week's report and compare speed and quality side by side", trueAnswer: false },
      { answer: "Map the weekly reporting steps, inputs, and data sensitivity, and decide which steps are repetitive enough to benefit from Claude", trueAnswer: true },
      { answer: "Upload the last twelve reports to a new Project to serve as knowledge for the next weekly report", trueAnswer: false },
    ],
    explanation:
      "C is correct: understanding the task and its data comes before choosing any feature. A is a valid packaging step, but only after the process is understood; B compares tiers before the requirements are defined; D is a valid configuration step, but it presumes that the task fits a Project.",
  },
  {
    id: 60,
    domain: WORKFLOW,
    time: 60,
    type: "multiple",
    selectCount: 2,
    question:
      "A finance department wants Claude's help redesigning its 10-day month-end close. It has timing logs for 12 recurring tasks and notes from five team interviews. Which two uses of Claude appropriately support the redesign? (Select 2.)",
    answers: [
      { answer: "Guarantee that the redesigned close will finish in six days, using the timing logs as the only evidence", trueAnswer: false },
      { answer: "Reassign tasks to staff automatically based on Claude's estimate of each person's speed, without consulting the team", trueAnswer: false },
      { answer: "Analyze the task timing logs and interview notes to highlight the steps that most often cause delays, then present the findings for the team to validate", trueAnswer: true },
      { answer: "Draft two or three alternative close sequences with the risks of each, so that the controller can choose which to pilot", trueAnswer: true },
      { answer: "Approve the new sequence for production use as soon as Claude rates it as lower risk than the current process, since the model's own report is sufficient evidence", trueAnswer: false },
    ],
    explanation:
      "C and D are correct: analysis of the evidence and option generation support human decisions without transferring them to the model. A claims a certainty that logs alone cannot support; B hands a people decision to the model without consultation; E uses the model's rating as the approval control.",
  },
];

export { examQuestionsV2 };
export default examQuestionsV2;