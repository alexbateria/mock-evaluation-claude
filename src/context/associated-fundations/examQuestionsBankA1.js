// examQuestions.js
// Claude Associate Foundations - practice exam bank (60 questions, mock-exam register)
// Types: 12 multiple_response (type: "multiple", 5 options A-E, selectCount 2 or 3)
//        48 multiple_choice = 30 standard scenario + 10 "what should you do first" + 8 ordering
// Domains: Prompting 8 | Output Evaluation 13 | Product/Model Selection 7 | Workflow Integration 10
//          Configuration 7 | Governance 9 | Troubleshooting 6
// 12 multiple_choice questions use a near-miss pair (two options that differ by 1-2 words).
// time: 120 s (standard, first, multiple_response) / 90 s (ordering).
// Explanation format: "X is correct: [reason]. A ...; B ...; C ..."

const PROMPTING = "Prompting and Task Execution";
const OUTPUT = "Output Evaluation and Validation";
const PRODUCT = "Product and Model Selection";
const WORKFLOW = "Workflow Integration and Solution Design";
const CONFIG = "Configuration and Knowledge Management";
const GOVERNANCE = "Governance, Risk, and Responsible Use";
const TROUBLE = "Troubleshooting and Optimisation";

const examQuestions = [
  {
    id: 1,
    domain: TROUBLE,
    time: 120,
    question:
      "A team investigates why a weekly report prompt produces different outputs for different members. Consider the following steps:\n1. Retest the standardized workflow with the same input for all five members.\n2. Identify which difference explains the variation in outputs.\n3. Collect five outputs from different team members for the same input.\n4. Standardize the shared prompt and Project instructions based on the findings.\n5. Compare the prompts, files, and settings that each member used.\nWhich sequence orders these steps from first to last?",
    answers: [
      { answer: "3 – 5 – 2 – 1 – 4", trueAnswer: false },
      { answer: "5 – 3 – 2 – 4 – 1", trueAnswer: false },
      { answer: "3 – 5 – 2 – 4 – 1", trueAnswer: true },
      { answer: "3 – 5 – 4 – 2 – 1", trueAnswer: false },
    ],
    explanation:
      "C is correct: the sequence is: collect outputs (3), compare inputs and settings (5), identify the cause (2), standardize (4), retest (1). A swaps 4 and 1, retesting the workflow before it has been standardized; B swaps 3 and 5, comparing prompts before the outputs have been collected; D swaps 2 and 4, standardizing the workflow before the cause is identified.",
  },
  {
    id: 2,
    domain: PRODUCT,
    time: 120,
    type: "multiple",
    selectCount: 2,
    question:
      "A team wants Claude to answer questions from a 250-page product manual and to remember each analyst's preferred report format across separate chats. Pasting the manual into every chat has become impractical. Which two features fit these needs? (Select 2.)",
    answers: [
      { answer: "Haiku, which guarantees complete recall of all 250 pages without retrieval because of its processing speed", trueAnswer: false },
      { answer: "Artifacts, which persist the manual's content and the format preferences as shared knowledge in every new chat, for all future requests", trueAnswer: false },
      { answer: "Research mode, which indexes uploaded files and permanently stores each user's preferences after every completed report", trueAnswer: false },
      { answer: "Memory, which retains each analyst's stated formatting preferences across separate conversations", trueAnswer: true },
      { answer: "A Project with the manual uploaded as knowledge, so that every chat inside the Project can retrieve from it", trueAnswer: true },
    ],
    explanation:
      "D and E are correct: Projects hold shared documents for retrieval, and Memory carries individual preferences across chats. A confuses speed with recall and makes a false guarantee; B misdescribes artifacts as a persistent knowledge layer; C misdescribes Research mode, which searches sources rather than storing preferences.",
  },
  {
    id: 3,
    domain: TROUBLE,
    time: 120,
    question:
      "A Project-based assistant that answered HR questions well for two months now returns outdated leave rules in about one of five answers. Nothing in the instructions has changed. What should the administrator do first?",
    answers: [
      { answer: "Rewrite the Project instructions from scratch with a new structure and more detailed formatting rules", trueAnswer: false },
      { answer: "Split the knowledge base into five smaller Projects, one for each HR policy category", trueAnswer: false },
      { answer: "Review the knowledge files for recently changed or superseded policies, and compare the failing answers with the sources they cite", trueAnswer: true },
      { answer: "Move the Project to a larger model tier and compare answer quality across 50 test questions, without changing any other component", trueAnswer: false },
    ],
    explanation:
      "C is correct: with the instructions unchanged, the knowledge content is the likeliest cause, and comparing failures with their sources confirms it. A rewrites instructions that have not changed and were working; B restructures the knowledge without knowing whether structure is the cause; D changes the tier before the actual cause has been found.",
  },
  {
    id: 4,
    domain: GOVERNANCE,
    time: 120,
    question:
      "A bank's compliance team wants Claude to draft customer-facing statements about a new 0.5% account fee. The statements will reach 120,000 customers and fall under consumer-protection rules. Which control is most appropriate?",
    answers: [
      { answer: "Use Opus for drafting, because the most capable tier is certified to produce legally compliant customer communications", trueAnswer: false },
      { answer: "Require a qualified compliance officer to approve every statement before sending, regardless of how polished the draft appears", trueAnswer: true },
      { answer: "Ask Claude to confirm in its own words that each statement complies with consumer-protection rules before sending", trueAnswer: false },
      { answer: "Require a qualified compliance officer to approve a sample of statements before sending, regardless of how polished the draft appears", trueAnswer: false },
    ],
    explanation:
      "B is correct: regulated customer communications need qualified human sign-off on every item, whatever the quality of the draft. A makes a false claim, since no tier is certified for legal compliance; C relies on model self-attestation instead of qualified review; D reviews only a sample, so unreviewed statements can still contain compliance errors.",
  },
  {
    id: 5,
    domain: CONFIG,
    time: 120,
    question:
      "A team's API-based support assistant uses a system prompt that says only 'Be helpful and professional'. Across 100 sampled replies, 34 omit the required ticket ID. Another 21 speculate when the knowledge base lacks an answer. Which rewrite is most effective?",
    answers: [
      { answer: "Lower the temperature to 0 so that the model stops speculating and includes the ticket ID in every reply", trueAnswer: false },
      { answer: "Add 'always be accurate' and 'never guess' in capital letters at the top, relying on emphasis to enforce both behaviors, in every case, so that no independent verification is required", trueAnswer: false },
      { answer: "Duplicate the current instruction twice at the end of the prompt, since repetition strengthens adherence to formatting rules", trueAnswer: false },
      { answer: "Replace it with testable rules: begin every reply with the ticket ID, cite the source document, and say so when the knowledge does not contain the answer", trueAnswer: true },
    ],
    explanation:
      "D is correct: specific, testable rules address each observed failure, while the vague wording addressed none of them. A changes sampling randomness, which does not add missing requirements; B relies on emphasis, which is probabilistic and untestable; C repeats a vague instruction, so the missing specifics remain absent.",
  },
  {
    id: 6,
    domain: OUTPUT,
    time: 120,
    question:
      "A team validates a Claude-generated FAQ containing 30 answers before publication. Consider the following steps:\n1. Fix or remove answers that contradict the documentation.\n2. Publish the approved FAQ and record the review date.\n3. Have the support lead review the revised answers for tone and completeness.\n4. Sample the 30 answers and check each against the current product documentation.\n5. Ask Claude to regenerate the removed answers using only the supplied documentation.\nWhich sequence orders these steps from first to last?",
    answers: [
      { answer: "4 – 1 – 5 – 3 – 2", trueAnswer: true },
      { answer: "4 – 1 – 5 – 2 – 3", trueAnswer: false },
      { answer: "4 – 1 – 3 – 5 – 2", trueAnswer: false },
      { answer: "4 – 5 – 1 – 3 – 2", trueAnswer: false },
    ],
    explanation:
      "A is correct: the sequence is: check against documentation (4), fix or remove (1), regenerate (5), lead review (3), publish (2). B swaps 3 and 2, publishing the FAQ before the support lead's review; C swaps 5 and 3, reviewing the revised answers before they have been regenerated; D swaps 1 and 5, regenerating answers before the contradicting ones are removed.",
  },
  {
    id: 7,
    domain: WORKFLOW,
    time: 120,
    question:
      "A pilot showed that Claude reduced proposal drafting time from 6 hours to 2.5 hours across 20 proposals, but two proposals needed substantive fact corrections. How should these results be communicated to executives?",
    answers: [
      { answer: "Report the 58% time saving alongside the two corrections, and state that human review of facts remains required before any proposal is sent", trueAnswer: true },
      { answer: "Report that errors will fall to zero after rollout, since the two corrections were caused by the pilot's small sample, in every case", trueAnswer: false },
      { answer: "Report only the time saving, because mentioning the corrections would undermine confidence in a pilot that clearly succeeded", trueAnswer: false },
      { answer: "Report the results as evidence that human review can be removed, since 18 of 20 proposals needed no changes", trueAnswer: false },
    ],
    explanation:
      "A is correct: honest reporting pairs the measured benefit with the observed limitation and the review that remains necessary. B promises a guarantee that a probabilistic system cannot provide; C omits limitations, which damages credibility when errors appear later; D treats a 90% pass rate as a guarantee for high-stakes documents.",
  },
  {
    id: 8,
    domain: GOVERNANCE,
    time: 120,
    question:
      "A startup discovers that three engineers have used personal Claude accounts to debug code containing API keys and customer records. About 40 sessions occurred over two months. What should the security lead do first?",
    answers: [
      { answer: "Draft a revised AI-use policy and schedule a training session for all engineering staff next quarter", trueAnswer: false },
      { answer: "Rotate all affected API keys and notify the customers whose records appear in the sessions", trueAnswer: false },
      { answer: "Adopt an enterprise plan for the whole company and migrate all engineers to it during the next month, at every stage, in every case", trueAnswer: false },
      { answer: "Contain the exposure by telling staff to stop entering such data, and identify which sessions contained credentials or customer records", trueAnswer: true },
    ],
    explanation:
      "D is correct: containment and scoping come first, because every later remediation depends on knowing what was exposed. A is a valid preventive step, but it does not stop the ongoing exposure; B is a valid remediation, but it depends on first identifying what was exposed; C is a structural fix that leaves the current exposure unscoped.",
  },
  {
    id: 9,
    domain: PROMPTING,
    time: 120,
    question:
      "A finance analyst sends a 12-page vendor contract to Claude through the API with the one-line prompt 'Summarize this'. The result is a four-line paragraph that omits the payment terms and the 90-day termination clause. The summary is needed for a legal review tomorrow. Which prompt revision is most appropriate?",
    answers: [
      { answer: "Set max_tokens to 4,000 so that the model has enough room to add the payment and termination clauses it left out of the summary", trueAnswer: false },
      { answer: "Ask Claude to quote one representative clause first, then summarize each one under separate headings for payment terms, termination, and liability", trueAnswer: false },
      { answer: "Ask Claude to quote every relevant clause first, then summarize each one under separate headings for payment terms, termination, and liability", trueAnswer: true },
      { answer: "Repeat the same request three times and keep the summary that mentions the most clauses, since repetition converges on complete coverage", trueAnswer: false },
    ],
    explanation:
      "C is correct: quoting every relevant clause grounds the summary in the contract text, and named headings force coverage of the missing terms. A raises an output ceiling, which does not control which clauses are covered; B quotes only one representative clause, so the omitted terms can still go missing; D relies on chance repetition instead of specifying the required content.",
  },
  {
    id: 10,
    domain: PRODUCT,
    time: 120,
    question:
      "A 12-person legal team wants Claude to follow the same nine-step contract-review procedure and to load a standard clause library only during contract reviews, without occupying context in every chat. Which feature best fits?",
    answers: [
      { answer: "A Skill that packages the procedure and clause library, which Claude loads on demand when a contract-review task is detected", trueAnswer: true },
      { answer: "Project instructions that contain the full clause library, which then load into the context of every chat in that Project", trueAnswer: false },
      { answer: "A saved artifact containing the procedure, which Claude reads automatically at the start of every new conversation", trueAnswer: false },
      { answer: "Memory entries for each team member describing the procedure, since Memory shares stored procedures across the whole team automatically", trueAnswer: false },
    ],
    explanation:
      "A is correct: a Skill packages procedural knowledge and loads it only when the task calls for it, which keeps other chats uncluttered. B puts on-demand material into an always-loaded layer, consuming context in every chat; C wrongly assumes artifacts are read automatically in new conversations; D wrongly claims Memory is shared across the team, though it stores per-user context.",
  },
  {
    id: 11,
    domain: GOVERNANCE,
    time: 120,
    type: "multiple",
    selectCount: 3,
    question:
      "An organization drafts an internal AI-use policy for 900 employees across finance, HR, and engineering. Leadership wants the policy to be enforceable, not aspirational. Which three elements should the policy include? (Select 3.)",
    answers: [
      { answer: "Permission to use any tool that colleagues recommend, because popularity indicates adequate security controls", trueAnswer: false },
      { answer: "A rule that outputs with high model confidence need no review, provided the tool was approved by the IT department", trueAnswer: false },
      { answer: "A reporting path for suspected data exposure, with named contacts and response timelines", trueAnswer: true },
      { answer: "Defined human-review requirements for outputs that affect customers, employees, or legal position", trueAnswer: true },
      { answer: "A list of approved tools with the data categories permitted in each", trueAnswer: true },
    ],
    explanation:
      "C, D and E are correct: approved tools with data limits, review requirements, and an incident path make a policy operational and enforceable. A confuses popularity with security assurance; B treats confidence as a substitute for required review.",
  },
  {
    id: 12,
    domain: TROUBLE,
    time: 120,
    question:
      "A Claude-based drafting tool answers 1,200 short internal queries per hour on Opus. Average latency is 9 seconds, and monthly cost exceeds budget by 40%. Quality reviews show no difference on simple queries. Which optimization is most appropriate?",
    answers: [
      { answer: "Test Haiku or Sonnet on a sample of simple queries, keep Opus for complex cases that need deeper reasoning, and remove unneeded prompt text", trueAnswer: true },
      { answer: "Keep Opus for every query but cap usage at 500 queries per hour, since throughput has no effect on quality, without any deeper diagnosis, without exception", trueAnswer: false },
      { answer: "Add extended thinking to every query so that the model reasons efficiently and produces shorter, cheaper answers", trueAnswer: false },
      { answer: "Raise max_tokens to 4,000 so that responses finish in fewer calls and the total monthly spend decreases", trueAnswer: false },
    ],
    explanation:
      "A is correct: matching the tier to task complexity and trimming the prompt reduces both latency and cost without losing quality. B restricts usage and leaves the tier mismatch untouched; C adds reasoning tokens and latency rather than reducing them; D raises an output ceiling, which does not reduce calls or cost.",
  },
  {
    id: 13,
    domain: OUTPUT,
    time: 120,
    question:
      "Claude drafts a market brief for a client meeting in two hours. It cites a '2024 industry study showing 38% adoption' that the analyst cannot find in any supplied source. Which action is most appropriate before the brief is shared?",
    answers: [
      { answer: "Add an approximate-figures footnote at the end of the brief and share it on schedule, since the discrepancy affects one number only", trueAnswer: false },
      { answer: "Ask Claude to confirm the statistic against the original report before sharing, and remove it if it cannot be located", trueAnswer: false },
      { answer: "Ask a colleague to confirm the statistic against the original report before sharing, and remove it if it cannot be located", trueAnswer: true },
      { answer: "Keep the statistic because it is specific and names a study, which makes fabrication unlikely for a claim with that precision", trueAnswer: false },
    ],
    explanation:
      "C is correct: an independent human check against the primary source is the only reliable way to confirm or discard the figure. A discloses the doubt to the client instead of resolving it; B uses the model to verify its own claim, which is not independent verification; D treats precision as evidence of accuracy, confusing a symptom of confidence with verification.",
  },
  {
    id: 14,
    domain: PROMPTING,
    time: 120,
    type: "multiple",
    selectCount: 2,
    question:
      "A legal-operations team's API-based workflow uses Claude to compare five NDAs against a 12-point checklist, and the output structure varies between runs. Which two prompt elements most improve consistency? (Select 2.)",
    answers: [
      { answer: "Paste all five NDAs in one message with no instructions so that Claude can infer the comparison method automatically", trueAnswer: false },
      { answer: "Ask Claude to stay consistent and to follow the same structure that it used in earlier conversations with the team", trueAnswer: false },
      { answer: "Increase the temperature so that the model explores every reasonable structure before settling on one stable format", trueAnswer: false },
      { answer: "Include one worked example that pairs a sample NDA excerpt with the exact verdict format expected", trueAnswer: true },
      { answer: "Provide the 12 checklist points as a numbered list and require one verdict line per point in a fixed order", trueAnswer: true },
    ],
    explanation:
      "D and E are correct: a numbered checklist with a fixed verdict order and a worked example define the structure explicitly and show the target format. A omits the criteria, leaving the structure to be guessed; B assumes Claude remembers earlier conversations, which a new API request does not include; C adds randomness, which increases variation instead of reducing it.",
  },
  {
    id: 15,
    domain: OUTPUT,
    time: 120,
    question:
      "A hospital communications team uses Claude to draft 25 patient-facing letters weekly about medication changes. In a 30-letter spot check, the drafts read clearly and cite the correct drug names. When is clinical review still required?",
    answers: [
      { answer: "Review is needed only when Claude flags low confidence, since the model reliably signals every case where its content might be wrong", trueAnswer: false },
      { answer: "Review is needed only during the first month, after which a passing spot check proves that later letters will remain accurate", trueAnswer: false },
      { answer: "A clinician should review every letter before it is sent, because patient-safety content needs verification even when drafts read clearly and pass a spot check", trueAnswer: true },
      { answer: "A clinician should review every letter after it is sent, because patient-safety content needs verification even when drafts read clearly and pass a spot check", trueAnswer: false },
    ],
    explanation:
      "C is correct: letters that influence patient health decisions carry a safety risk that clear wording and a small sample cannot remove. A assumes that flagged confidence reliably signals every error; B treats a limited sample as a guarantee for future output; D reviews only after delivery, so errors can reach patients before anyone catches them.",
  },
  {
    id: 16,
    domain: GOVERNANCE,
    time: 120,
    type: "multiple",
    selectCount: 2,
    question:
      "A healthcare provider plans to use Claude to draft appointment reminders and visit summaries for 8,000 patients. The messages will contain names, dates, and some clinical context. Which two safeguards best align with responsible use? (Select 2.)",
    answers: [
      { answer: "Require clinical staff to review any drafted content that interprets results or advises on treatment before release", trueAnswer: true },
      { answer: "Allow each clinic to choose its own AI tool and data practices, then document them after any incident", trueAnswer: false },
      { answer: "Rely on Claude to identify and withhold any information that regulations classify as protected health information", trueAnswer: false },
      { answer: "Treat reminders and summaries as exempt from privacy rules because they contain no diagnoses or treatment decisions", trueAnswer: false },
      { answer: "Confirm with the privacy officer that the data categories and vendor terms satisfy the applicable health-privacy regulation", trueAnswer: true },
    ],
    explanation:
      "A and E are correct: regulatory confirmation by the privacy owner and clinical review of sensitive content are the controls that reduce legal and safety risk. B delays governance until after harm could occur; C delegates a compliance control to a probabilistic model; D makes a false claim, since identifiable patient data is covered.",
  },
  {
    id: 17,
    domain: PRODUCT,
    time: 120,
    question:
      "A retailer must tag 800,000 short product reviews per day with one of five sentiment labels. Results feed a dashboard, latency must stay under two seconds, and cost is the main constraint. Which model choice is the most appropriate starting point?",
    answers: [
      { answer: "Start with Haiku and validate it on a labeled sample of 500 reviews to confirm it meets the accuracy target after full rollout", trueAnswer: false },
      { answer: "Start with Opus, because sentiment labels on customer-facing content always justify the most capable tier regardless of volume or cost", trueAnswer: false },
      { answer: "Start with Sonnet using maximum extended thinking on every review, since any five-label classification requires deep multi-step reasoning", trueAnswer: false },
      { answer: "Start with Haiku and validate it on a labeled sample of 500 reviews to confirm it meets the accuracy target before full rollout", trueAnswer: true },
    ],
    explanation:
      "D is correct: Haiku is the fast, low-cost tier suited to simple high-volume labeling, and an eval on a labeled sample confirms accuracy first. A validates after rollout, so an unmet accuracy target would surface on live data; B states a false absolute that ignores the volume and cost constraints; C adds reasoning cost and latency that a simple labeling task does not need.",
  },
  {
    id: 18,
    domain: PROMPTING,
    time: 120,
    question:
      "A support team's Project holds a 60-page returns policy. Claude answers policy questions correctly but ignores the requested format, three sentences followed by a case-reference line, in roughly 30% of 200 sampled replies. What is the most effective adjustment?",
    answers: [
      { answer: "Tell Claude once in a single chat to remember the format permanently, since Memory then guarantees the structure in every reply", trueAnswer: false },
      { answer: "Upload the returns policy a second time so that the format guidance embedded inside it receives more weight when Claude retrieves content, without changing any other component", trueAnswer: false },
      { answer: "Ask each agent to regenerate the reply until the format is correct, since repeated attempts eventually converge on full compliance", trueAnswer: false },
      { answer: "Add one complete sample reply to the Project instructions showing the exact three-sentence structure and case-reference line, and state that every reply must follow it", trueAnswer: true },
    ],
    explanation:
      "D is correct: a concrete example plus an explicit rule in the Project instructions applies to every chat and demonstrates the target format. A overstates Memory, which stores preferences but cannot guarantee format compliance; B duplicates knowledge content, although the format rule belongs in the instructions layer; C relies on retries where a specified example would fix the cause.",
  },
  {
    id: 19,
    domain: WORKFLOW,
    time: 120,
    type: "multiple",
    selectCount: 2,
    question:
      "A firm plans to use Claude to help redesign its 14-day contract-approval process. It has 60 interview notes from staff and wants to keep decisions with the process owners. Which two uses of Claude appropriately support the redesign? (Select 2.)",
    answers: [
      { answer: "Predict the exact cycle time of each new flow with certainty, using only the interview notes as data", trueAnswer: false },
      { answer: "Cluster 60 interview notes into recurring bottleneck themes and present them to the process owners for validation", trueAnswer: true },
      { answer: "Rewrite the approval policy and publish it directly, since stakeholder review only slows down process redesigns", trueAnswer: false },
      { answer: "Generate three alternative approval flows with the trade-offs of each, for stakeholders to compare and decide", trueAnswer: true },
      { answer: "Approve each revised flow automatically once Claude's estimated cycle time falls below seven days", trueAnswer: false },
    ],
    explanation:
      "B and D are correct: clustering notes and generating options support human decision-making without transferring the decision to the model. A claims certainty that interview notes cannot support; C removes stakeholder review, the control that validates the redesign; E hands a decision to the model on an estimate it cannot guarantee.",
  },
  {
    id: 20,
    domain: TROUBLE,
    time: 120,
    question:
      "A workflow that classifies 2,000 support tickets weekly reached 94% agreement with reviewers in testing. Three weeks after launch, agreement is 81%, and the prompt has not changed. Which diagnosis is most likely?",
    answers: [
      { answer: "Input drift: compare recent failing tickets with the original test examples to find new categories, formats, or wording", trueAnswer: true },
      { answer: "The design is flawed: rebuild the entire workflow on Opus immediately, since a single drop in agreement proves it", trueAnswer: false },
      { answer: "Temperature is too low: increase it to 1.0 so that the classifier explores more labels on unfamiliar tickets", trueAnswer: false },
      { answer: "Model drift: compare recent failing tickets with the original test examples to find new categories, formats, or wording", trueAnswer: false },
    ],
    explanation:
      "A is correct: with the prompt unchanged, the most likely cause is a change in the inputs, so failures should be compared with the test set. B jumps to a rebuild before the cause is diagnosed; C changes sampling randomness, which does not fix unfamiliar inputs; D attributes the decline to the model, although an unchanged prompt points to the inputs.",
  },
  {
    id: 21,
    domain: GOVERNANCE,
    time: 120,
    question:
      "A manager wants Claude to draft performance-review summaries for 45 employees from peer feedback notes. Employees have not been told that AI is involved, and the summaries will influence bonus decisions. Which principle is most relevant?",
    answers: [
      { answer: "Efficiency: drafting 45 summaries quickly justifies skipping disclosure, provided the final bonus figures are calculated accurately", trueAnswer: false },
      { answer: "Transparency and human accountability: employees should know how AI is used, and managers must verify and own every conclusion that affects pay", trueAnswer: true },
      { answer: "Formatting: consistent templates across all 45 summaries are sufficient to demonstrate fairness in compensation decisions", trueAnswer: false },
      { answer: "Model tier: using Opus for the summaries removes the need for disclosure, because its output is considered impartial, for all future requests, without exception", trueAnswer: false },
    ],
    explanation:
      "B is correct: decisions about people require disclosure of AI use and a human who verifies and takes responsibility for the outcome. A prioritizes speed over disclosure and accountability; C confuses a uniform format with fairness; D wrongly claims that a larger tier is impartial.",
  },
  {
    id: 22,
    domain: OUTPUT,
    time: 120,
    type: "multiple",
    selectCount: 3,
    question:
      "Claude produced a ten-slide pricing analysis for a client who will sign a contract next week. The analyst has time for only a limited review of the deck. Which three indicators should trigger additional human validation before delivery? (Select 3.)",
    answers: [
      { answer: "The analysis uses bullet points and charts instead of long paragraphs of prose, which signals lower analytical rigor", trueAnswer: false },
      { answer: "The recommendation would commit the client to a contract worth more than $500,000", trueAnswer: true },
      { answer: "Two slides give different values for the same metric, such as churn of 4% on one and 6% on another", trueAnswer: true },
      { answer: "The slides were generated in under thirty seconds, which proves that the model skipped its reasoning on the analysis, at every stage", trueAnswer: false },
      { answer: "A figure appears with unusual precision, such as 17.43%, but no source table or calculation is shown", trueAnswer: true },
    ],
    explanation:
      "B, C and E are correct: untraceable precision, high financial stakes, and internal contradictions are genuine reliability and risk signals. A confuses presentation format with reliability; D treats generation speed as evidence of poor quality.",
  },
  {
    id: 23,
    domain: WORKFLOW,
    time: 120,
    question:
      "A firm plans to integrate Claude into an existing approval process with a 9-day average cycle time. Consider the following steps:\n1. Pilot Claude drafts on one approval type with five reviewers.\n2. Document the current approval steps, their owners, and the cycle time.\n3. Extend the workflow to the remaining approval types.\n4. Define the points where a human must approve before the process continues.\n5. Identify which steps are repetitive and low-risk enough for AI assistance.\nWhich sequence orders these steps from first to last?",
    answers: [
      { answer: "2 – 5 – 4 – 1 – 3", trueAnswer: true },
      { answer: "2 – 4 – 5 – 1 – 3", trueAnswer: false },
      { answer: "2 – 5 – 4 – 3 – 1", trueAnswer: false },
      { answer: "5 – 2 – 4 – 1 – 3", trueAnswer: false },
    ],
    explanation:
      "A is correct: the sequence is: document the process (2), identify candidate steps (5), define human approval points (4), pilot (1), extend (3). B swaps 5 and 4, defining approval points before deciding which steps involve AI; C swaps 1 and 3, extending the workflow before the pilot has been run; D swaps 2 and 5, identifying candidate steps before the process has been documented.",
  },
  {
    id: 24,
    domain: CONFIG,
    time: 120,
    type: "multiple",
    selectCount: 2,
    question:
      "A Project's 220 knowledge files were last reviewed nine months ago, and answers increasingly reference retired procedures. Support agents now report about one outdated answer per day. Which two maintenance actions most directly address the problem? (Select 2.)",
    answers: [
      { answer: "Turn on Memory for every user so that the retired procedures are gradually overwritten by their recent chats", trueAnswer: false },
      { answer: "Upload more files so that newer content statistically outweighs the retired documents during retrieval", trueAnswer: false },
      { answer: "Tell Claude in one chat that the old procedures are retired, since the Project applies that statement to every other user's chats", trueAnswer: false },
      { answer: "Update the Project instructions to name the authoritative source for each procedure and require Claude to cite it", trueAnswer: true },
      { answer: "Audit the files against current procedures and remove or replace those that have been retired or superseded", trueAnswer: true },
    ],
    explanation:
      "D and E are correct: auditing the files removes stale content, and instructions naming the authoritative source with citations keep answers traceable. A misdescribes Memory, which does not edit a Project's knowledge files; B relies on probabilistic dilution instead of removing conflicting sources; C wrongly assumes a single chat message updates the Project for all users.",
  },
  {
    id: 25,
    domain: WORKFLOW,
    time: 120,
    question:
      "A logistics firm proposes using Claude to 'optimize routes' for 300 trucks. Route planning already relies on live GPS data, road-closure feeds, and a certified optimizer in production. Which role for Claude is most appropriate?",
    answers: [
      { answer: "Replace the certified optimizer, since Claude can process live GPS feeds in a standard chat without any integration", trueAnswer: false },
      { answer: "Compute the final routes directly and have planners approve only the routes exceeding 500 kilometers, to limit review effort, for all future requests, without exception", trueAnswer: false },
      { answer: "Restrict Claude to a Project holding last year's routes, which will let it predict tomorrow's road closures accurately", trueAnswer: false },
      { answer: "Support planners by summarizing driver notes, drafting exception reports, and explaining optimizer outputs, while the certified optimizer continues to compute the routes", trueAnswer: true },
    ],
    explanation:
      "D is correct: Claude adds value on language-heavy support tasks, while the certified optimizer keeps ownership of the computation. A wrongly assumes that standard chat can consume live feeds without integration; B places a language model in the computation layer that the certified optimizer owns; C wrongly claims that historical files enable accurate live closure prediction.",
  },
  {
    id: 26,
    domain: TROUBLE,
    time: 120,
    type: "multiple",
    selectCount: 2,
    question:
      "An API-based prompt that extracts invoice totals returns the wrong currency on 12% of 500 test invoices. The invoices come from suppliers in eight countries. Which two changes are most likely to reduce these errors? (Select 2.)",
    answers: [
      { answer: "Increase max_tokens to 4,000 so that the model has enough room to reconsider the currency of each invoice", trueAnswer: false },
      { answer: "Ask Claude to be more careful with currencies and to double-check every answer before responding", trueAnswer: false },
      { answer: "Add a field definition requiring the currency code exactly as printed on the invoice, with two examples", trueAnswer: true },
      { answer: "Validate the extracted output against a schema that restricts currency to a list of approved ISO codes", trueAnswer: true },
      { answer: "Lower the temperature to 0 and expect the model to eliminate all currency errors across the invoices", trueAnswer: false },
    ],
    explanation:
      "C and D are correct: a precise field definition with examples and a schema validation address the ambiguity and catch remaining errors deterministically. A raises an output ceiling, which does not affect extraction accuracy; B adds a vague plea without a testable rule or an external check; E expects a guarantee from a setting that only reduces sampling variation.",
  },
  {
    id: 27,
    domain: OUTPUT,
    time: 120,
    question:
      "A Claude-generated compliance summary states in section 2 that records must be retained for 5 years and in section 6 that the retention period is 7 years. The source policy runs 80 pages. What is the most appropriate response?",
    answers: [
      { answer: "Raise max_tokens to 8,000 and regenerate, since a truncated context window most likely caused the inconsistent figures", trueAnswer: false },
      { answer: "Keep both numbers, since the policy probably contains two separate retention rules and no further verification is necessary", trueAnswer: false },
      { answer: "Verify both figures against the source policy, then correct the first section that cites the wrong figure before anyone relies on the summary", trueAnswer: false },
      { answer: "Verify both figures against the source policy, then correct every section that cites the wrong figure before anyone relies on the summary", trueAnswer: true },
    ],
    explanation:
      "D is correct: a contradiction inside the summary signals an error or hallucination that must be resolved against the source everywhere it appears. A changes an output ceiling that has nothing to do with contradictory content; B assumes a benign explanation for a contradiction instead of checking the source; C corrects only one occurrence, leaving the inconsistency in other sections.",
  },
  {
    id: 28,
    domain: GOVERNANCE,
    time: 120,
    question:
      "An employee wants to paste unreleased quarterly results, covering $84 million in revenue, into Claude to draft an investor summary for a 9 a.m. call. The company's general AI policy does not mention financial data. What should the employee do first?",
    answers: [
      { answer: "Delete the conversation after the summary is complete to limit how long the results remain stored", trueAnswer: false },
      { answer: "Draft the summary with placeholder numbers and insert the real figures manually after the text is finished, without changing any other component", trueAnswer: false },
      { answer: "Consult the compliance or governance contact to confirm whether unreleased financial data may be entered into the tool at all", trueAnswer: true },
      { answer: "Have the finance director review the finished draft before it is used on the investor call", trueAnswer: false },
    ],
    explanation:
      "C is correct: whether the data may be entered must be settled before any drafting, review, or cleanup step. A acts after exposure and does not establish whether entry was allowed; B is a valid mitigation, but it presumes approval to use the tool for this material; D is a valid review, but it happens after the data has already been shared.",
  },
  {
    id: 29,
    domain: OUTPUT,
    time: 120,
    question:
      "Claude produced a 1,200-word technical incident report for engineers. The same content must reach 300 non-technical customers within 24 hours, covering the cause, the 47-minute impact window, and next steps. Which adaptation is most appropriate?",
    answers: [
      { answer: "Translate the report into another language first, since translation automatically simplifies technical vocabulary for general readers", trueAnswer: false },
      { answer: "Request a plain-language rewrite of about 150 words covering the cause, the 47-minute window, and next steps, then verify every fact against the original report", trueAnswer: true },
      { answer: "Shorten the engineering report to 150 words and keep all technical terms so that customers can look them up if needed, regardless of what the source material shows", trueAnswer: false },
      { answer: "Send the original report with a plain-language subject line, since customers will skim to the sections that matter to them", trueAnswer: false },
    ],
    explanation:
      "B is correct: content must be rewritten for the audience's level, with the facts rechecked against the source. A makes a false claim that translation simplifies vocabulary; C fixes length while ignoring the real problem, the audience's vocabulary; D changes the packaging without adapting the content.",
  },
  {
    id: 30,
    domain: PRODUCT,
    time: 120,
    question:
      "During a three-hour analysis chat of about 180 messages, Claude begins ignoring formatting rules stated in the first message. The team suspects context limits. Which action best restores consistent behavior?",
    answers: [
      { answer: "Start a new chat that opens with a concise summary of decisions and the key formatting rules, or place the rules in the Project instructions", trueAnswer: true },
      { answer: "Turn off Memory, since stored memories occupy the context window and are the main reason that early instructions are ignored", trueAnswer: false },
      { answer: "Switch to Haiku, because smaller tiers can process long conversations without any context limitation at all", trueAnswer: false },
      { answer: "Repeat the first message every ten turns and expect the earlier instructions to keep their full weight in the growing chat, with no further verification afterward", trueAnswer: false },
    ],
    explanation:
      "A is correct: a fresh chat with a short summary, or persistent Project instructions, restores the important context within the window. B confuses Memory with the context window, which fills with conversation content; C makes a false claim, since every model has a context limit; D relies on a probabilistic workaround while the context keeps growing.",
  },
  {
    id: 31,
    domain: CONFIG,
    time: 120,
    question:
      "A Project holds 85 policy PDFs, and analysts report that Claude sometimes cites superseded 2021 versions. The current 2024 versions are also uploaded. Which configuration change most directly fixes the conflicting citations?",
    answers: [
      { answer: "Keep the superseded files and state in the instructions that only the 2024 versions are authoritative for every policy question", trueAnswer: false },
      { answer: "Remove the superseded files and state in the instructions that only the 2024 versions are authoritative for every policy question", trueAnswer: true },
      { answer: "Ask analysts to add 'use only 2024' to every question, since a Project cannot be changed after it is created", trueAnswer: false },
      { answer: "Upload each 2024 file a second time so that the duplicated content outweighs the older versions during retrieval", trueAnswer: false },
    ],
    explanation:
      "B is correct: removing conflicting sources and naming the authoritative version eliminates the ambiguity at its origin. A leaves conflicting sources in the knowledge base, so retrieval can still surface them; C makes a false claim, since Projects can be edited and maintained; D duplicates content without removing the conflicting sources.",
  },
  {
    id: 32,
    domain: PROMPTING,
    time: 120,
    question:
      "A consultant must produce a landscape of eight competitors from current public sources and later draft a two-page executive brief from the findings. She uses one standard chat prompt for both stages and receives no citations. Which strategy best fits the two task types?",
    answers: [
      { answer: "Keep a single long chat for both stages, since Claude stores every search result permanently and attaches citations to later drafts automatically, without any further configuration, in every case", trueAnswer: false },
      { answer: "Use Research mode for the gathering stage to obtain cited findings, then send a separate drafting prompt supplying the verified findings, the audience, and the length", trueAnswer: true },
      { answer: "Draft the two-page brief first and gather sources afterward, so that citations can be fitted to the finished text", trueAnswer: false },
      { answer: "Use Research mode for the drafting stage as well, since it always produces polished executive prose within a strict two-page limit", trueAnswer: false },
    ],
    explanation:
      "B is correct: a research task needs multi-source search with citations, while drafting needs verified inputs, an audience, and a length. A wrongly claims permanent stored results and automatic citations; C reverses the order, which invites unsupported claims fitted with sources afterward; D applies a research feature to drafting and overstates its guaranteed output.",
  },
  {
    id: 33,
    domain: TROUBLE,
    time: 120,
    question:
      "A nightly job calls the Claude API 400 times per minute and receives HTTP 429 responses on roughly 25% of requests. Immediate retries make the failures worse. Which change is most appropriate?",
    answers: [
      { answer: "Treat every 429 as permanent and discard the failed requests, then reconcile the missing results manually each morning", trueAnswer: false },
      { answer: "Add exponential backoff with jitter that honors the retry-after header, smooth the request rate below the account limit, and never cap the total number of attempts", trueAnswer: false },
      { answer: "Add exponential backoff with jitter that honors the retry-after header, smooth the request rate below the account limit, and cap the total number of attempts", trueAnswer: true },
      { answer: "Increase temperature and max_tokens so that each request completes faster and consumes less of the rate limit", trueAnswer: false },
    ],
    explanation:
      "C is correct: backoff with jitter, respect for retry-after, a smoothed rate, and bounded attempts handle a rate limit safely. A discards recoverable requests instead of retrying them safely; B leaves attempts unbounded, so retries can keep loading the API indefinitely; D changes generation settings, which do not change request-rate limits.",
  },
  {
    id: 34,
    domain: WORKFLOW,
    time: 120,
    question:
      "A university registrar wants Claude to draft answers to 3,000 monthly student emails about deadlines, transcripts, and appeals. No AI guidelines currently exist at the university. What should the registrar do first?",
    answers: [
      { answer: "Create a Project with the deadline calendar and transcript policy as its knowledge sources", trueAnswer: false },
      { answer: "Connect Claude to the email inbox so that drafts appear automatically in staff queues for review, for all future requests, without exception", trueAnswer: false },
      { answer: "Pilot the workflow with one department for two weeks and measure the time saved per email", trueAnswer: false },
      { answer: "Classify the inquiry types by risk and decide which ones require human handling, such as appeals, before configuring any drafting workflow", trueAnswer: true },
    ],
    explanation:
      "D is correct: risk classification sets the boundaries of the workflow, and every later step depends on them. A is a valid configuration step, but it comes after the scope is defined; B is a valid integration step, but it presupposes the risk rules; C measures a workflow whose boundaries have not been set.",
  },
  {
    id: 35,
    domain: OUTPUT,
    time: 120,
    question:
      "A recruiter asks Claude to rank 60 candidate summaries for a role. Of the top ten, nine come from the same three universities, although the job criteria do not mention education. The ranking will influence hiring decisions. What is the most appropriate response?",
    answers: [
      { answer: "Keep the ranking but hide university names from recruiters, so that bias cannot influence their final decisions about candidates", trueAnswer: false },
      { answer: "Instruct Claude to ignore university names in the next ranking and accept the result if the top ten look more varied, so that no independent verification is required", trueAnswer: false },
      { answer: "Switch the ranking to Opus, since the most capable tier is free of demographic patterns and resolves the bias automatically", trueAnswer: false },
      { answer: "Pause use of the ranking, audit the criteria and outputs with human reviewers, and reapply only documented job-relevant criteria with people making the decisions", trueAnswer: true },
    ],
    explanation:
      "D is correct: a visible skew in a high-impact decision calls for a human audit of criteria and outputs before further use. A hides the symptom while the ranking logic stays unexamined; B assumes an instruction removes hidden bias, and a varied look is not an audit; C wrongly claims that a larger tier is bias-free.",
  },
  {
    id: 36,
    domain: PROMPTING,
    time: 120,
    question:
      "A marketing lead calls the Claude API once to request 40 campaign taglines for three customer segments. The last 15 taglines repeat the first 10 with minor word changes. The team needs distinct options for each segment. Which approach best increases diversity?",
    answers: [
      { answer: "Attribute the repetition to model capability and move every future brainstorming task to Opus, regardless of how each prompt is structured", trueAnswer: false },
      { answer: "Send one request per segment asking for ten taglines, stating that segment's motivation and listing phrases already used, so each batch draws on distinct context", trueAnswer: true },
      { answer: "Raise max_tokens to 4,000 so that the model has enough room to produce more original wording across all 40 taglines in the single call, from that point onward", trueAnswer: false },
      { answer: "Ask Claude to guarantee that no two taglines share any words, and accept the output once the model states that it complied", trueAnswer: false },
    ],
    explanation:
      "B is correct: separate requests with segment context and an exclusion list give each batch its own material and prevent repeats. A blames the tier for what is a prompt-structure problem; C increases only the output ceiling, which does not change how repetitive the wording is; D uses a self-reported promise where an external check is needed.",
  },
  {
    id: 37,
    domain: CONFIG,
    time: 120,
    question:
      "A 60-person HR team plans a Project for benefits questions. Its 140 documents include three versions of the same health-plan guide, and employees already report conflicting answers from ad hoc chats. What should the Project owner do first?",
    answers: [
      { answer: "Write detailed Project instructions covering tone, escalation rules, and the required citation format", trueAnswer: false },
      { answer: "Identify the authoritative document for each topic and its owner, and retire outdated versions, before uploading anything to the Project", trueAnswer: true },
      { answer: "Share the Project with all 60 team members and collect feedback during the first week", trueAnswer: false },
      { answer: "Upload all 140 documents to the knowledge base and test them with ten sample employee questions, without changing any other component", trueAnswer: false },
    ],
    explanation:
      "B is correct: the knowledge base is only as reliable as its sources, so authority and ownership must be settled before upload. A is a valid step, but instructions cannot resolve conflicting sources; C exposes users to conflicting answers as a way of discovering the problem; D loads the conflicting versions before the authoritative ones are chosen.",
  },
  {
    id: 38,
    domain: OUTPUT,
    time: 120,
    question:
      "Consider the following prompts for summarizing an incident report:\n1. Summarize the attached incident report for the operations director.\n2. Summarize the attached incident report for the operations director in five bullets covering cause, impact, and remediation.\n3. Summarize the attached report.\n4. Summarize the attached incident report for the operations director in five bullets covering cause, impact, and remediation, and flag any claim not supported by the text.\n5. Summarize the attached incident report.\nWhich sequence orders these prompts from the most general to the most specific?",
    answers: [
      { answer: "3 – 5 – 1 – 4 – 2", trueAnswer: false },
      { answer: "3 – 1 – 5 – 2 – 4", trueAnswer: false },
      { answer: "5 – 3 – 1 – 2 – 4", trueAnswer: false },
      { answer: "3 – 5 – 1 – 2 – 4", trueAnswer: true },
    ],
    explanation:
      "D is correct: the sequence adds one constraint at a time: no document type (3), the incident report (5), the audience (1), format and content (2), the validation instruction (4). A places the prompt with the validation instruction before the five-bullet prompt that it extends; B places the audience-specific prompt before the one that only names the incident report; C places the prompt naming the incident report before the prompt that names no document type.",
  },
  {
    id: 39,
    domain: WORKFLOW,
    time: 120,
    type: "multiple",
    selectCount: 3,
    question:
      "A team drafts a message to executives about a new Claude-based invoice-coding workflow that has just completed a pilot. The message must set accurate expectations. Which three statements accurately communicate its value and limits? (Select 3.)",
    answers: [
      { answer: "Roughly 6 percent of invoices still needed manual correction, so a reviewer checks flagged and sampled items", trueAnswer: true },
      { answer: "No further prompt or process changes will be needed after rollout, since the pilot configuration is final", trueAnswer: false },
      { answer: "The workflow cut coding time from 8 minutes to 3 minutes per invoice in a 200-invoice pilot", trueAnswer: true },
      { answer: "Accuracy is guaranteed across all vendors because the pilot used a representative set of forty suppliers", trueAnswer: false },
      { answer: "It performs best on standard, repetitive invoices and should not handle unusual contracts without human review", trueAnswer: true },
    ],
    explanation:
      "A, C and E are correct: a measured benefit, an observed error rate with its review process, and a defined scope give executives accurate expectations. B promises stability that real invoice variation will not allow; D turns a pilot sample into a guarantee that a probabilistic system cannot give.",
  },
  {
    id: 40,
    domain: GOVERNANCE,
    time: 120,
    question:
      "A city agency proposes three Claude uses: summarizing 500 public comments, drafting internal meeting notes, and deciding automatically which of 2,000 benefit applications to deny. Which use is inappropriate without redesign?",
    answers: [
      { answer: "Drafting internal meeting notes, because internal notes may never be produced with AI assistance under any organizational policy, without exception", trueAnswer: false },
      { answer: "All three uses are equally acceptable, since accuracy from the largest tier removes the need for human oversight", trueAnswer: false },
      { answer: "Summarizing public comments, because summaries of public documents always require legal approval before any use is permitted", trueAnswer: false },
      { answer: "Automatically denying benefit applications, because high-impact decisions about individuals require human judgment, an explanation, and a route to appeal", trueAnswer: true },
    ],
    explanation:
      "D is correct: high-stakes decisions that affect individuals need human judgment, explanation, and appeal rights, while the other two uses are low-risk support tasks. A states a false absolute that no policy imposes; B wrongly claims that a larger tier removes the need for oversight; C states a false absolute about summarizing public material.",
  },
  {
    id: 41,
    domain: OUTPUT,
    time: 120,
    question:
      "A newsletter editor receives a Claude draft containing five statistics and two quotes attributed to named executives. The newsletter goes to 40,000 subscribers at 9 a.m. tomorrow. What should the editor do first?",
    answers: [
      { answer: "Ask Claude to shorten the draft to 600 words so that the final review will take less time", trueAnswer: false },
      { answer: "Verify each statistic and quotation against its original source, starting with the two attributed quotes, before making any stylistic edits", trueAnswer: true },
      { answer: "Add a note that the newsletter was drafted with AI assistance, then schedule the send for the planned time", trueAnswer: false },
      { answer: "Adjust the tone and formatting of the draft to match the newsletter style guide and the established brand voice, in every case", trueAnswer: false },
    ],
    explanation:
      "B is correct: factual verification of statistics and attributed quotes is the first control, while formatting, disclosure, and length come later. A shortens before verification, which can hide or spread unverified claims; C is a valid disclosure step, but it does not confirm accuracy; D is a valid editing step, but it comes after the facts are confirmed.",
  },
  {
    id: 42,
    domain: CONFIG,
    time: 120,
    question:
      "An administrator connects a Google Drive connector to support a reporting Project. Consider the following steps:\n1. Test retrieval with ten representative questions and review the cited files.\n2. Enable the Google Drive connector for the approved reporting folder.\n3. Inventory the folders and classify each by data sensitivity.\n4. Review the permissions the connector requests against the data policy.\n5. Add instructions telling Claude to cite the file name in every answer.\nWhich sequence orders these steps from first to last?",
    answers: [
      { answer: "3 – 4 – 2 – 1 – 5", trueAnswer: false },
      { answer: "4 – 3 – 2 – 5 – 1", trueAnswer: false },
      { answer: "3 – 2 – 4 – 5 – 1", trueAnswer: false },
      { answer: "3 – 4 – 2 – 5 – 1", trueAnswer: true },
    ],
    explanation:
      "D is correct: the sequence is: inventory and classify (3), review permissions (4), enable the connector (2), add citation instructions (5), test retrieval (1). A swaps 5 and 1, testing retrieval before the citation instructions are in place; B swaps 3 and 4, reviewing permissions before the folders have been classified; C swaps 4 and 2, enabling the connector before its permissions have been reviewed.",
  },
  {
    id: 43,
    domain: OUTPUT,
    time: 120,
    question:
      "An operations lead asks Claude to convert a 20-page safety policy into a one-page checklist for 200 warehouse staff. The checklist looks tidy but omits two mandatory steps described on pages 9 and 14. What should be done first?",
    answers: [
      { answer: "Compare the checklist against the source policy to identify every omitted or altered requirement before requesting any revision", trueAnswer: true },
      { answer: "Ask Claude to regenerate the checklist with an instruction to include every mandatory step from all 20 pages of the policy", trueAnswer: false },
      { answer: "Print the checklist and pilot it in one warehouse to collect staff feedback on clarity and usability", trueAnswer: false },
      { answer: "Format the checklist as a table with checkboxes so that staff can follow the steps in the right order", trueAnswer: false },
    ],
    explanation:
      "A is correct: a gap analysis against the source defines what is missing, so revisions and pilots follow from evidence. B requests regeneration before the gaps are known and hopes the model will cover every step; C pilots a checklist that is still known to be incomplete; D improves presentation before completeness is confirmed.",
  },
  {
    id: 44,
    domain: PRODUCT,
    time: 120,
    question:
      "A consultant prepares a weekly competitor briefing using Research mode, Projects, and artifacts. Consider the following steps:\n1. Verify the key claims against the cited sources before finalizing.\n2. Save the final briefing as an artifact that the team can revise and share.\n3. Run Research mode and review the cited findings for gaps.\n4. Define the competitors, the seven-day window, and the required source types in the request.\n5. Add the approved briefing template to the Project instructions for future weeks.\nWhich sequence orders these steps from first to last?",
    answers: [
      { answer: "4 – 3 – 1 – 5 – 2", trueAnswer: false },
      { answer: "4 – 3 – 1 – 2 – 5", trueAnswer: true },
      { answer: "4 – 3 – 2 – 1 – 5", trueAnswer: false },
      { answer: "3 – 4 – 1 – 2 – 5", trueAnswer: false },
    ],
    explanation:
      "B is correct: the sequence is: define scope (4), research (3), verify (1), save as artifact (2), store the template in the Project (5). A swaps 2 and 5, storing the template in the Project before the briefing is finalized; C swaps 1 and 2, saving the briefing as an artifact before its claims are verified; D swaps 4 and 3, running the research before the scope has been defined.",
  },
  {
    id: 45,
    domain: WORKFLOW,
    time: 120,
    question:
      "A customer-support director wants Claude to draft replies to 1,500 daily tickets. About 90% are routine refunds, while 10% involve legal threats or medical claims. The director wants speed without unmanaged risk. Which workflow design is most appropriate?",
    answers: [
      { answer: "Draft every reply on Opus and remove agent review for all tickets, because the top tier eliminates the risk of errors", trueAnswer: false },
      { answer: "Send every drafted reply automatically, and withhold only the replies that Claude itself scores as uncertain about its own accuracy", trueAnswer: false },
      { answer: "Draft replies for routine tickets for agent review, and route legal or medical tickets directly to Claude for handling", trueAnswer: false },
      { answer: "Draft replies for routine tickets for agent review, and route legal or medical tickets directly to specialist staff for handling", trueAnswer: true },
    ],
    explanation:
      "D is correct: routine tickets gain speed from drafting with agent review, while high-risk tickets stay with qualified people. A falsely claims that the top tier eliminates errors; B relies on model self-assessment as the only control for risky content; C assigns high-risk tickets to the model instead of qualified staff.",
  },
  {
    id: 46,
    domain: PROMPTING,
    time: 120,
    question:
      "A team prepares a 30-slide onboarding deck from a 50-page handbook. Consider the following actions:\n1. Draft each section's slides from its outline, using only the handbook text for that section.\n2. State the deck's audience, purpose, and 30-slide limit.\n3. Review the combined deck for consistent terminology and tone.\n4. Ask Claude to propose a section-by-section outline from the handbook.\n5. Merge the sections into one deck and remove duplicate slides.\nWhich sequence orders these steps from first to last?",
    answers: [
      { answer: "4 – 2 – 1 – 5 – 3", trueAnswer: false },
      { answer: "2 – 4 – 1 – 3 – 5", trueAnswer: false },
      { answer: "2 – 4 – 1 – 5 – 3", trueAnswer: true },
      { answer: "2 – 4 – 5 – 1 – 3", trueAnswer: false },
    ],
    explanation:
      "C is correct: the sequence is: state the goal (2), outline (4), draft sections (1), merge (5), review (3). A swaps 2 and 4, requesting an outline before the audience, purpose, and limit are stated; B swaps 5 and 3, reviewing the deck before the sections are merged; D swaps 1 and 5, merging sections before they have been drafted.",
  },
  {
    id: 47,
    domain: OUTPUT,
    time: 120,
    type: "multiple",
    selectCount: 2,
    question:
      "A team uses Claude to summarize 150 customer interviews into a five-page insights document for executives. The document will guide a product decision worth several months of work. Which two checks most reliably confirm that the document is accurate and complete? (Select 2.)",
    answers: [
      { answer: "Ask Claude to rate its own confidence for each theme and keep every theme that the model labels above 90 percent", trueAnswer: false },
      { answer: "Confirm that the document is shorter than five pages and that every section contains at least three bullet points", trueAnswer: false },
      { answer: "Regenerate the document twice and accept any theme that appears in all three versions as verified", trueAnswer: false },
      { answer: "Compare the document's themes with a manual coding of ten interviews to find omitted or overrepresented topics", trueAnswer: true },
      { answer: "Trace a random sample of 15 claims back to specific interview transcripts and confirm that the wording matches the source", trueAnswer: true },
    ],
    explanation:
      "D and E are correct: sampling claims against transcripts and comparing with a manual baseline are independent checks of fidelity and coverage. A relies on self-reported confidence rather than independent verification; B checks format and length, which say nothing about accuracy; C agreement across runs can repeat the same error, so it does not prove accuracy.",
  },
  {
    id: 48,
    domain: WORKFLOW,
    time: 120,
    question:
      "A sales team logs calls in a CRM and wants Claude to draft follow-up emails using each account's latest notes. Analysts currently copy 10 to 15 notes into each chat by hand. Which integration approach is most appropriate?",
    answers: [
      { answer: "Use a connector to the CRM scoped to the accounts each rep owns, so Claude retrieves current notes under an administrator's permissions", trueAnswer: false },
      { answer: "Use a connector to the CRM scoped to the accounts each rep owns, so Claude retrieves current notes under that rep's permissions", trueAnswer: true },
      { answer: "Export the entire CRM weekly and upload it to a Project, which then remains current between the weekly exports", trueAnswer: false },
      { answer: "Ask reps to summarize their notes into Memory, since Memory synchronizes automatically with the CRM records", trueAnswer: false },
    ],
    explanation:
      "B is correct: a scoped connector retrieves live notes and preserves each user's existing access rights. A runs retrieval with administrator rights, which breaks least privilege; C wrongly claims that uploaded files stay current between exports; D misdescribes Memory, which does not synchronize with external systems.",
  },
  {
    id: 49,
    domain: PRODUCT,
    time: 120,
    question:
      "An executive needs a briefing on regulatory changes in three jurisdictions published in the last 60 days, with source citations, by end of day. Standard chat answers so far lack references. Which feature best fits?",
    answers: [
      { answer: "A larger model tier in standard chat, since capability alone guarantees recent and accurately cited regulatory information", trueAnswer: false },
      { answer: "Artifacts, which retrieve the newest regulations automatically and store them as permanent memory for later chats", trueAnswer: false },
      { answer: "Research mode with web search enabled, which runs multi-step searches across sources and returns a cited report that the executive can verify", trueAnswer: true },
      { answer: "A Project whose knowledge base holds last year's regulations, because uploaded files stay current without any further updates, in every case, from that point onward", trueAnswer: false },
    ],
    explanation:
      "C is correct: Research mode performs multi-step web searches and returns findings with citations that can be checked. A treats model size as a guarantee of currency and citations; B misdescribes artifacts as a retrieval and memory feature; D wrongly claims that uploaded files update themselves.",
  },
  {
    id: 50,
    domain: WORKFLOW,
    time: 120,
    question:
      "A team plans a weekly report: Claude will read a shared Google Drive folder of 40 spreadsheets and email a summary to 25 stakeholders. The folder mixes public files with HR-confidential files. Which design choice best reduces risk?",
    answers: [
      { answer: "Connect the entire Drive but limit the summary email to five stakeholders, so that any exposure remains small", trueAnswer: false },
      { answer: "Connect the entire Drive for completeness and instruct Claude in the prompt to skip any file that looks confidential, without exception, without any independent human check of the result", trueAnswer: false },
      { answer: "Connect only a dedicated folder of approved reporting files, review the connector permissions against data policy, and require a human check before the email is sent", trueAnswer: true },
      { answer: "Upload copies of every spreadsheet into a Project, since Project knowledge is not subject to the Drive's access rules", trueAnswer: false },
    ],
    explanation:
      "C is correct: limiting the connected scope, reviewing permissions, and adding a human check control both access and output. A shrinks the audience but still exposes confidential files to Claude; B relies on a probabilistic instruction where access must be enforced; D wrongly implies that copies escape access rules and widens exposure to Project members.",
  },
  {
    id: 51,
    domain: OUTPUT,
    time: 120,
    question:
      "A project manager first asks Claude for a 400-word status update to paste into an email today. Later she asks for a 12-section project charter template that the team will edit and reuse over several weeks. Which output format best fits each request?",
    answers: [
      { answer: "Keep the status update inline in the chat, and create the charter as a standalone artifact that the team can revise, reuse, and share", trueAnswer: true },
      { answer: "Create both outputs as artifacts, since every response longer than 100 words must be delivered as a separate downloadable document", trueAnswer: false },
      { answer: "Create the status update as an artifact and the charter inline, so that the longer document remains visible in the conversation", trueAnswer: false },
      { answer: "Keep both outputs inline, because artifacts cannot be edited after creation and would block the revisions that the team plans to make, from that point onward", trueAnswer: false },
    ],
    explanation:
      "A is correct: one-time text pasted elsewhere suits inline delivery, while content that will be edited, reused, or shared suits an artifact. B states a false absolute about when artifacts are required; C reverses the formats, placing the reusable document in the transient layer; D makes a false claim, since artifacts can be iterated on.",
  },
  {
    id: 52,
    domain: PROMPTING,
    time: 120,
    type: "multiple",
    selectCount: 3,
    question:
      "A research analyst asks Claude to synthesize six academic papers on remote-work productivity for a board memo. The first draft mixed findings without comparison and ran 900 words. Which three prompt elements most improve the synthesis? (Select 3.)",
    answers: [
      { answer: "Set max_tokens to 200 so that the output is forced to stay focused on the strongest findings only", trueAnswer: false },
      { answer: "Name the board as the audience and specify a 400-word limit with a recommendation section at the end", trueAnswer: true },
      { answer: "State the comparison dimensions, such as sample size, method, and effect size, and request them as table columns", trueAnswer: true },
      { answer: "Instruct Claude to flag any claim that appears in only one paper and to quote the supporting passage", trueAnswer: true },
      { answer: "Instruct Claude to always omit methodological limitations, since executives never read them in board memoranda", trueAnswer: false },
    ],
    explanation:
      "B, C and D are correct: explicit dimensions, an audience with a length limit, and a flag for single-source claims give Claude the criteria and the traceability the memo needs. A truncates the output instead of directing its content; E removes the caveats that make the synthesis trustworthy.",
  },
  {
    id: 53,
    domain: WORKFLOW,
    time: 120,
    question:
      "A hospital network wants Claude to summarize 200 discharge notes daily for care coordinators. The notes contain identifiable patient data, and the network's privacy team has not yet reviewed the proposal. What should the project team do first?",
    answers: [
      { answer: "Ask the privacy team to determine whether this data and tool are permitted, before running any test or building any configuration", trueAnswer: true },
      { answer: "Train coordinators on effective prompts for clinical summaries so that they are ready at launch", trueAnswer: false },
      { answer: "Write Project instructions defining the discharge-summary structure, tone, and required sections", trueAnswer: false },
      { answer: "Run a two-week pilot on 20 de-identified notes to measure summary quality and coordinator satisfaction, without changing any other component, without exception", trueAnswer: false },
    ],
    explanation:
      "A is correct: permission to process identifiable patient data must be settled before any testing, configuration, or training. B prepares for a launch that has not been authorized; C is a valid configuration step that comes after approval; D is a valid test, but only after permission and scope are settled.",
  },
  {
    id: 54,
    domain: GOVERNANCE,
    time: 120,
    question:
      "A company introduces a new Claude use case for drafting supplier contracts. Consider the following governance steps:\n1. Approve the use case with documented conditions and a named owner.\n2. Classify the data the use case will process by sensitivity.\n3. Describe the proposed use case, its users, and its expected outputs.\n4. Run a limited pilot with monitoring and human review of outputs.\n5. Assess the privacy, regulatory, and bias risks for that data and use.\nWhich sequence orders these steps from first to last?",
    answers: [
      { answer: "3 – 5 – 2 – 1 – 4", trueAnswer: false },
      { answer: "3 – 2 – 5 – 1 – 4", trueAnswer: true },
      { answer: "3 – 2 – 5 – 4 – 1", trueAnswer: false },
      { answer: "3 – 2 – 1 – 5 – 4", trueAnswer: false },
    ],
    explanation:
      "B is correct: the sequence is: describe the use case (3), classify the data (2), assess risks (5), approve with conditions (1), pilot (4). A swaps 2 and 5, assessing risks before the data has been classified; C swaps 1 and 4, piloting the use case before it has been approved; D swaps 5 and 1, approving the use case before its risks have been assessed.",
  },
  {
    id: 55,
    domain: PROMPTING,
    time: 120,
    question:
      "A product manager wants Claude to produce a 20-item test plan from a 15-page requirements document. The first attempt in a standard chat returned only 8 vague items with no priorities. What should the manager do first?",
    answers: [
      { answer: "Clarify the request by stating the required test types, the priority levels, and the expected item format before asking Claude to regenerate the plan", trueAnswer: true },
      { answer: "Save the finished prompt as a Skill so that every team member applies the same test-plan procedure across all Projects", trueAnswer: false },
      { answer: "Pilot the revised prompt on three other requirements documents and measure how many items each run produces", trueAnswer: false },
      { answer: "Split the requirements document into per-section requests and merge the resulting items once each section has been drafted and reviewed, regardless of which layer the problem originates in", trueAnswer: false },
    ],
    explanation:
      "A is correct: clarifying the missing requirements addresses the cause of the vague output before any restructuring, packaging, or testing. B packages a prompt for reuse before it has been proven to work; C tests a revision that has not yet been written; D is a valid decomposition step, but it belongs after the request itself is clarified.",
  },
  {
    id: 56,
    domain: CONFIG,
    time: 120,
    question:
      "An admin connects Gmail to Claude for a 30-person sales team. Some managers' inboxes also contain salary negotiations and legal threads. The team needs drafts based on customer emails only. Which configuration is most appropriate?",
    answers: [
      { answer: "Disable the connector permanently and require staff to paste each customer email into the chat manually every day", trueAnswer: false },
      { answer: "Connect every manager's full inbox and tell Claude in the Project instructions never to open salary or legal threads, with no further verification afterward", trueAnswer: false },
      { answer: "Connect only mailboxes that hold customer correspondence, review the granted permissions against data policy, and keep HR and legal mail outside the connected scope", trueAnswer: true },
      { answer: "Connect full inboxes, because connectors read only the emails that a user explicitly selects in each conversation", trueAnswer: false },
    ],
    explanation:
      "C is correct: limiting the connected scope and reviewing permissions controls what Claude can reach, instead of relying on behavior. A removes the capability instead of scoping it, and adds manual paste risk; B relies on an instruction where access itself must be limited; D makes a false claim about how connector access works.",
  },
  {
    id: 57,
    domain: GOVERNANCE,
    time: 120,
    question:
      "A retailer's analyst wants to upload a 30,000-row customer file with names, emails, and purchase histories into Claude to find churn patterns. The privacy policy limits personal data to approved systems. What is the most appropriate approach?",
    answers: [
      { answer: "Ask the analyst to confirm the tool is approved for personal data, then pseudonymize identifiers and share only the fields needed for churn analysis", trueAnswer: false },
      { answer: "Upload the file in a private chat, because conversations are private by default and are therefore compliant with the policy, in every case, at every stage", trueAnswer: false },
      { answer: "Ask the privacy team to confirm the tool is approved for personal data, then pseudonymize identifiers and share only the fields needed for churn analysis", trueAnswer: true },
      { answer: "Upload only the first 500 rows, since a smaller sample removes any obligation under the privacy policy", trueAnswer: false },
    ],
    explanation:
      "C is correct: the privacy owner decides on approval, and data minimization limits the exposure to what the analysis requires. A leaves the approval decision to the requester instead of the privacy owner; B wrongly equates private conversations with policy compliance; D treats a smaller sample as removing the obligation, though personal data is still shared.",
  },
  {
    id: 58,
    domain: PRODUCT,
    time: 120,
    question:
      "A 40-person finance department wants to adopt Claude for month-end variance commentary, which currently takes 25 staff hours. Colleagues have proposed Projects, Skills, and different model tiers. What should the project lead do first?",
    answers: [
      { answer: "Build a Skill containing the commentary template so that all 40 staff members apply an identical procedure, without changing any other component", trueAnswer: false },
      { answer: "Define the task requirements, including audience, required sections, data sensitivity, and success measure, before selecting any feature or model tier", trueAnswer: true },
      { answer: "Run the same commentary task on Haiku, Sonnet, and Opus to compare their quality and cost", trueAnswer: false },
      { answer: "Create a Project and upload twelve months of prior commentary as its shared knowledge base", trueAnswer: false },
    ],
    explanation:
      "B is correct: requirements decide which feature and tier are appropriate, so they must be defined before any selection. A is a valid packaging step, but only after the procedure is defined; C compares tiers before defining the quality and cost criteria that decide the result; D is a valid configuration step, but it presumes the requirements are known.",
  },
  {
    id: 59,
    domain: OUTPUT,
    time: 120,
    question:
      "A data analyst pastes a 450-row spreadsheet into Claude and asks for revenue totals by region. Claude reports $1.84 million for the North region, while the analyst's pivot table shows $1.62 million. The board pack is due in one hour. What is the most reliable next step?",
    answers: [
      { answer: "Recalculate the North total directly from the source rows, and have Claude run the calculation with code execution so the summed rows can be inspected", trueAnswer: true },
      { answer: "Ask Claude to repeat the calculation and treat an identical second total as confirmation that the figure is correct", trueAnswer: false },
      { answer: "Ask Claude how confident it is in the $1.84 million figure and use it if the model answers that it is highly confident, at every stage", trueAnswer: false },
      { answer: "Average the two figures, because the true value most likely falls between the model's estimate and the pivot table's result", trueAnswer: false },
    ],
    explanation:
      "A is correct: tracing the total to the source rows, with the calculation made visible, exposes where the two figures diverge. B repeats a possibly flawed method, so agreement does not prove accuracy; C treats model confidence as evidence of arithmetic correctness; D invents a value instead of tracing the source of the discrepancy.",
  },
  {
    id: 60,
    domain: CONFIG,
    time: 120,
    type: "multiple",
    selectCount: 3,
    question:
      "A team lead writes instructions for a Claude Project used by 25 support agents. Recent audits found replies that were confident but unsupported by the knowledge base. Which three instructions are specific, testable, and likely to reduce unsupported answers? (Select 3.)",
    answers: [
      { answer: "Be as thorough and helpful as possible in all situations while maintaining a professional tone", trueAnswer: false },
      { answer: "Limit each reply to three sentences followed by a line containing the case reference", trueAnswer: true },
      { answer: "If the knowledge base lacks the answer, say so and route the ticket to the tier-2 queue", trueAnswer: true },
      { answer: "Cite the source document and section for every factual statement in a reply", trueAnswer: true },
      { answer: "Sound confident and complete in every reply, even when the available information is only partial, from that point onward", trueAnswer: false },
    ],
    explanation:
      "B, C and D are correct: each of these rules can be checked as pass or fail and directly limits unsupported or unstructured replies. A is vague and cannot be tested against a pass or fail criterion; E encourages unsupported answers instead of reducing them.",
  },
];

export { examQuestions };
export default examQuestions;
