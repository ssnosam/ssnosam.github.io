// Content for the Automated Board Reporting case study. The portfolio page
// (src/pages/work/board-reporting.astro) and the slide view
// (src/pages/work/board-reporting/present.astro) both read from here, so a
// copy change lands in both places at once.
//
// Copy comes from the Figma deck "Automated Board Reporting"
// (figma.com/slides/it0n7dPjQ8xXLyBDD48U8N). Speaker notes stay in Figma and
// are deliberately not published with the site. Before each interview, update
// `status` and `landed`: they are the two places the project's state shows.

export const title = 'Automated Board Reporting';
export const product = 'Optro';
export const tagline = 'Automate the assembly, not the authorship.';

export const intro =
  'Every quarter, an internal audit team reports to its board on the audit program. I led the design of an agent that assembles that report from live audit data in Optro, while the people who sign it stay the authors.';

export const thesis = {
  system: 'An agent that assembles the board report from live audit data.',
  person: 'The people who sign it stay the authors.',
};

export const status =
  'MVP locked Oct 1 and in beta. The agentic layer is designed and prototyped for Q4 and Q1.';

export const meta = [
  {
    label: 'My Role',
    lines: ['UX lead and product designer, end to end'],
  },
  {
    label: 'Team',
    lines: [
      '1 designer, 1 product manager, 1 tech lead',
      '2 UX researchers and an engineering team of 8',
    ],
  },
  {
    label: 'Timeframe',
    lines: ['February 2026 to now'],
  },
  {
    label: 'Status',
    lines: [status],
  },
];

export const problem = {
  stat: { value: '5 to 20', label: 'hours per board cycle, about 75% of it spent just gathering data' },
  lead: 'Rebuilt by hand every quarter, even though the structure rarely changes.',
  body: [
    'The preparer pulls audits, issues, and findings out of Optro, fixes them up in Excel, charts them in Power BI, then rebuilds the same tables in PowerPoint. The Excel step exists because the system can’t express their logic, like “is this really past due?”',
    'The structure of the report barely moves from one quarter to the next, but the work is redone every cycle. That was the opportunity: configure it once.',
  ],
};

export const cycle = [
  { tool: 'Optro', step: 'Export audits, issues, and findings' },
  { tool: 'Excel', step: 'Apply logic the system can’t express: “is this really past due?”' },
  { tool: 'Power BI', step: 'Build the charts' },
  { tool: 'PowerPoint', step: 'Rebuild the same tables, again' },
];

export const people = [
  {
    role: 'Preparer',
    job: 'Assemble it.',
    body: 'Spends the hours. Exports to Excel to apply logic the system can’t express, then rebuilds the same tables in PowerPoint.',
  },
  {
    role: 'Audit director',
    job: 'Put my name on it.',
    body: 'Can’t verify deck numbers against the system of record, and worries they’ll change after review.',
  },
  {
    role: 'Board member',
    job: 'Never opens Optro.',
    body: 'Needs figures fixed to a point in time. The PowerPoint has to stand on its own.',
  },
];

export const peopleTakeaway =
  'So the output had to be their PowerPoint, with numbers someone had signed off on.';

export const questions = [
  'How much should the agent do on its own, and where does a person have to decide?',
  'How do you make next quarter’s report mostly build itself?',
  'How do you let an agent draft words that someone else will sign?',
  'How do you keep a report current when nothing may change behind the signer’s back?',
];

export const timeline: { when: string; what: string; key?: boolean }[] = [
  { when: 'Feb', what: 'Divergent riffing with the UX team' },
  { when: 'May', what: 'Wizard and add-in concept' },
  { when: 'Jun', what: 'Concept tests with 4 orgs', key: true },
  { when: 'Jun 18', what: 'Principles set: configure once, no silent refresh' },
  { when: 'Jul 31', what: 'MVP scope locked' },
  { when: 'Aug', what: 'Refresh exploration' },
  { when: 'Oct 1', what: 'Final UX locked, beta begins', key: true },
  { when: 'Late Oct', what: 'GA planned' },
];

export const conceptTest = {
  title: 'Two prototypes, four organizations, seven people.',
  who: 'Chief audit executives, internal audit directors, and a professional practice manager, across energy, entertainment, retail, and UK financial services.',
  options: [
    {
      id: 'A',
      name: 'Menu-driven add-in',
      body: 'A menu in our PowerPoint add-in. Pick a block and it lands at your cursor.',
      result: '3 of 4 chose A',
    },
    {
      id: 'B',
      name: 'Hashtag placeholders',
      body: 'Placeholders typed into the template, which keep their formatting. Cleverer, and powerful for experts.',
    },
  ],
  asked: [
    'Does it fit how you report today?',
    'Is it valuable even with manual setup, from a template or from scratch?',
    'Is it enough AI?',
  ],
};

export const quote = {
  text: 'It’s actually a very admin heavy job. It doesn’t take a lot of insight but having an automated element of this allows us to then focus on the insights.',
  who: 'Professional practice manager',
  org: 'UK financial services group (FTSE 100)',
};

export const learnings = [
  {
    heard: 'Today’s pain was moderate, about 3 out of 5. The value was time back for insight.',
    so: 'Pointed the agent at the admin work: gathering, scoping, and assembling.',
  },
  {
    heard: 'Reviewers need the numbers they reviewed to be the numbers on the slide.',
    so: 'Let the agent propose changes, never apply them silently.',
  },
  {
    heard: 'The AI summary was liked, but no one called it a must-have.',
    so: 'Treated AI prose as a draft to review, and invested most in automating assembly.',
  },
  {
    heard: 'Every team builds a report once and expects to reuse it. Roll-forward is table stakes.',
    so: 'Made next quarter the agent’s job: re-scope, regenerate, flag what’s stale.',
  },
];

export const reframe = {
  before: 'We set out to generate the board deck.',
  after: 'The job was to assemble it from live data, and leave the authorship with the person.',
  body: 'In customers’ own words, somewhere between 60 and 75-plus percent of the report comes straight out of the system. The rest is a person’s judgement, and they sign it. So the system’s job is assembly: gather, connect, keep it accurate. The person keeps the framing, the narrative, and the deck itself.',
};

export const ladder = {
  title: 'An autonomy ladder, not an on/off switch.',
  lead: 'Every task the agent does sits on a rung. Rung 4 is empty on purpose: nothing a board will see changes without a person.',
  rungs: [
    {
      name: 'Suggests',
      body: 'Starting prompts, content blocks, and replacements for last quarter’s dates.',
    },
    {
      name: 'Drafts',
      body: 'The report, new sections, and AI summaries, labeled for review before sharing.',
    },
    {
      name: 'Acts with approval',
      body: 'Proposes each data change as a redline. Nothing applies until someone accepts it.',
    },
    {
      name: 'Acts and reports',
      body: 'Roll forward re-scopes data and regenerates blocks, then labels what it changed.',
    },
    {
      name: 'Acts silently',
      body: 'Empty by design. Anything a board sees waits for a person.',
      empty: true,
    },
  ],
};

export const foundation = {
  title: 'The foundation we shipped.',
  lead: 'Configure once, reuse every cycle. Everything the agent builds lands on this model, as a configured block a person can open and edit.',
  places: [
    {
      verb: 'Create',
      title: 'The wizard. Once.',
      body: 'Report details, audit scoping, and content blocks. Configure it, then leave.',
    },
    {
      verb: 'Manage',
      title: 'The report editor. Every cycle.',
      body: 'Details, Editor, and Data tabs. Review, edit, and save the version you’ll stand behind.',
    },
    {
      verb: 'Inject',
      title: 'Their PowerPoint.',
      body: 'Our add-in drops blocks at the cursor. Their template, branding, and layout stay theirs.',
    },
  ],
};

export type Decision = {
  id: string;
  eyebrow: string;
  title: string;
  tension: string;
  call: string | string[];
  cost: string;
  caption?: string;
};

// The agentic layer, designed and prototyped on top of the MVP.
export const agentDecisions: Decision[] = [
  {
    id: 'create',
    eyebrow: 'Decision 1 of 3',
    title: 'Create by conversation, with every guess on screen.',
    tension:
      'A form is predictable, but it asks people to know the configuration up front. A conversation is easier to start, but it can hide what it decided.',
    call: 'The assistant is the only way in. It asks one clarifying question, then shows its guesses as things you can edit: a scoping table and a content checklist.',
    cost: 'Title and cadence are inferred, not typed, so they must be easy to find and fix. Some power users will want a form back.',
    caption:
      'The stepper and help card advance with the conversation. Every guess lands in something you can check: a scoping table, then a content checklist.',
  },
  {
    id: 'propose',
    eyebrow: 'Decision 2 of 3',
    title: 'The agent proposes. A person commits.',
    tension:
      'An agent’s job is to keep the report current. But a board deck is a point-in-time record someone signed, so a silent update is the worst failure it can have.',
    call: 'When data changes, sections go Pending Review and the editor keeps the values people reviewed. One click shows every change as an inline redline. Each is Apply or Revert, and a revert asks for a rationale.',
    cost: 'The report shows older numbers until someone acts, and reviewing is still work. I cut a separate refresh mode so review happens in place.',
    caption: 'A redline means one thing only: content that changed because its data changed.',
  },
  {
    id: 'roll',
    eyebrow: 'Decision 3 of 3',
    title: 'Regenerate the data. Flag the words.',
    tension:
      'Next quarter’s report should mostly build itself. But the narrative is the person’s, and an agent that rewrites prose erases the authorship the design protects.',
    call: 'Roll forward re-scopes the data, regenerates data-backed blocks, and labels each section. It never rewrites static text: it flags values tied to the old period and suggests a replacement.',
    cost: 'Spotting period-bound text will miss some values and over-flag others. Detection is the next place a smarter AI assist could help.',
    caption:
      'Rolled forward from Q4: data re-scoped, blocks regenerated, and three period-bound values flagged in place to Keep or Replace.',
  },
];

export const drafting = {
  title: 'Ask for a section. Get a configured block back.',
  lead: 'The agent’s output is configuration, not a pile of text, so anyone can open it and check it, and it rebuilds every cycle.',
  points: [
    { label: 'Asks only what it needs', body: 'Columns and sort order come back as one-click answers.' },
    { label: 'Writes configuration', body: 'Data source, filter, and columns land in the normal editor, ready to adjust.' },
    { label: 'Marked until reviewed', body: 'AI-written text carries “review before sharing” until a person checks it.' },
  ],
};

export const trust = {
  title: 'Every agent action is reversible and on the record.',
  lead: 'An agent you can’t audit is an agent auditors won’t use. This is the layer that makes the rest trustworthy.',
  parts: [
    {
      label: 'Version history',
      title: 'Undo at report scale.',
      body: 'Named and automatic versions. Restoring adds a new version, so nothing is overwritten.',
    },
    {
      label: 'Activity log',
      title: 'A record of every call.',
      body: 'What was generated, applied, reverted, or edited, by whom, beside the human edits.',
    },
    {
      label: 'Regeneration warning',
      title: 'No surprise rewrites.',
      body: 'Editing a block whose data changed says, up front, that saving will regenerate it.',
    },
  ],
};

export const checklist = {
  title: 'Five questions every agentic idea has to answer.',
  lead: 'In audit, an agent acts under someone’s authority, so permissions are usually the ceiling, not intelligence.',
  example: 'Roll forward',
  rows: [
    {
      key: 'Does',
      question: 'What action does it take, not what does it know?',
      answer: 'Re-scopes the data, regenerates data-backed blocks, and flags period-bound text.',
    },
    {
      key: 'Reads',
      question: 'What data does it need, and does that exist today?',
      answer: 'Last report’s configuration, plus the new period’s audits and related records.',
    },
    {
      key: 'Rung',
      question: 'How far up the ladder does it act?',
      answer: 'Rung 3 for data-backed blocks. Rung 0 for the person’s words.',
    },
    {
      key: 'Authority',
      question: 'Whose permissions does it act under?',
      answer: 'The report owner’s. Nothing goes to the board until they review it.',
    },
    {
      key: 'Wrong',
      question: 'What is the named recovery when it’s wrong?',
      answer:
        'Every section is labeled Regenerated, Carried over, or Check static text, and version history restores.',
    },
  ],
};

export const beyond = [
  {
    title: 'A pattern, not a one-off',
    body: '“Show the diff, let the person decide, keep a record” became a shared principle across three kinds of suggestion: user, system, and agent. I presented it alongside two teammates.',
  },
  {
    title: 'A framework for agentic work',
    body: 'The autonomy ladder and five-question checklist now frame agentic work beyond reporting. I used them to run a cross-team brainstorm for workflows.',
  },
  {
    title: 'Prototyping with AI',
    body: 'I rebuilt the prototype from the revised Figma in a day with a Claude-driven toolkit, so reviews happen on behavior, not static frames.',
  },
  {
    title: 'A beta designed as a decision',
    body: 'Four questions and an exit bar: most participants finish a real report unaided, with no launch blockers open at GA.',
  },
];

export const landed = {
  lines: ['MVP locked Oct 1.', 'In beta now.', 'Agentic layer prototyped.'],
  body: 'No outcome data yet, so here’s what I’d hold it to.',
  measures: [
    'Time from first prompt to a board-ready draft, against the 5 to 20 hour baseline.',
    'How often people apply versus revert the agent’s proposed changes, and the rationales they give.',
    'How much people edit AI drafts before sharing. Heavy edits mean the draft isn’t earning its place.',
  ],
};

// The deck's five-minute cut: title, challenge, reframe, ladder, decision 1,
// decision 2, decision 3, where it landed, close.
export const shortCut = ['title', 'challenge', 'reframe', 'ladder', 'create', 'propose', 'roll', 'landed', 'close'];
