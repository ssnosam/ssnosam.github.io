// Content for the Disclosure case study. The portfolio page
// (src/pages/work/disclosure.astro) and the slide view
// (src/pages/work/disclosure/present.astro) both read from here, so a copy
// change lands in both places at once.
//
// Anything marked `draft` was inferred from the original deck's screens and
// flows rather than written from memory. Confirm or rewrite before presenting.

import screenReports from '../assets/work/disclosure/screen-reports.png';
import screenExports from '../assets/work/disclosure/screen-exports-log.png';
import screenSurvey from '../assets/work/disclosure/screen-survey.png';

export const title = 'Disclosure';
export const tagline = 'Confidently collect and transform data for compliance and reporting';

export const intro =
  "Disclosure is Measurabl's reporting product for sustainable-finance regulation. It helps asset managers turn building-level ESG data into submissions like the EU's SFDR Principal Adverse Impact report, and it can show an auditor exactly how every number was derived.";

export const meta = [
  {
    label: 'My Role',
    lines: [
      'Senior Product Designer, Measurabl',
      'Discovery, journey mapping, flows, and end-to-end UI',
    ],
  },
  {
    label: 'Context',
    lines: [
      '2023 – 2024', // draft: confirm dates
      'Cross-functional working group: product, engineering, and ESG advisory', // draft
    ],
  },
];

export const problem = {
  lead: 'The rules are strict and expensive to get wrong, and the people responsible for them were working in spreadsheets.',
  body: [
    'Asset managers and ESG analysts have to collect their data and transform it to fit many different sustainable-finance reporting requirements, each with its own prescriptive rules.',
    'They also have to be transparent about the methodology behind every transformation. That is the only way to submit with confidence to mandatory frameworks that are audited and assured.',
  ],
};

export const stat = {
  value: '78%',
  label:
    'of investors run a structured, methodical evaluation of non-financial disclosures (EY, 2021)',
};

export const goals = [
  {
    title: 'Assess and act on compliance risk',
    body: 'Meet customers wherever they are in the disclosure process, with efficient, automated, self-serve tooling.',
  },
  {
    title: 'Increase compliance',
    body: 'Raise adherence to mandatory frameworks, building standards, and regional ordinances.',
  },
  {
    title: 'Be auditable and transparent',
    body: 'Make every disclosure ready for third-party audit and assurance requests.',
  },
];

export const approach = [
  { phase: 'Discover', detail: 'Identify pain points' },
  { phase: 'Define', detail: 'Prioritize problem statements' },
  { phase: 'Develop', detail: 'Ideation and validation' },
  { phase: 'Deliver', detail: 'Improvements and iteration' },
];

export const quote = {
  text: "You shouldn't need to take it offline. You should be able to do it all on the platform, which should be at the heart of everything that's designed. It would be ideal if auditors could even interrogate directly through the platform.",
  source: 'ESG Specialist, Asset Management Division',
};

export type PersonaId = 'asset' | 'property' | 'internal' | 'auditor';

export const personas: { id: PersonaId; name: string; includes: string }[] = [
  {
    id: 'asset',
    name: 'Asset Managers',
    includes:
      'Fund managers, sustainability reporting managers, analysts, ESG controllers, sustainability consultants',
  },
  { id: 'property', name: 'Property Managers', includes: 'Property and site managers' },
  {
    id: 'internal',
    name: 'Measurabl Internal',
    includes: 'Support, customer success, product, engineering, advisory',
  },
  { id: 'auditor', name: 'Third-Party Auditors', includes: 'Auditors and assurers' },
];

export const journey: { text: string; personas: PersonaId[] }[] = [
  { text: 'Tasked with producing a report for disclosure under SFDR', personas: ['asset'] },
  { text: 'Understand the data the disclosure requires', personas: ['asset', 'internal', 'auditor'] },
  { text: 'Log in to Measurabl: Core, Insights, and Disclosure', personas: ['asset', 'property'] },
  { text: 'Identify data gaps and risks', personas: ['asset', 'internal'] },
  { text: 'Collect and enter missing site-level data', personas: ['asset', 'property'] },
  { text: 'Select a group and open the SFDR impact report', personas: ['asset'] },
  { text: 'Review pre-calculated metrics, add inputs', personas: ['asset'] },
  { text: 'Review question guidance and metric methodology', personas: ['asset'] },
  { text: 'Enter explanations, actions taken, custom indicators', personas: ['asset'] },
  { text: 'Preview the report', personas: ['asset'] },
  { text: 'Export as PDF', personas: ['asset'] },
  { text: 'Include settings and methodologies in the export', personas: ['asset', 'auditor'] },
  { text: 'Publicly list the disclosure on the website', personas: ['asset', 'auditor'] },
  { text: 'Submit to the regional market authority', personas: ['asset', 'auditor', 'internal'] },
];

export const brief =
  'Our users need an intuitive, collaborative way to navigate and demonstrate alignment with each reporting requirement, so they stay ahead of their obligations and keep their portfolios competitive.';

// `aside` steps happen off-platform or alongside the main path.
export const flow: { text: string; aside?: string }[] = [
  { text: 'Fund identifies which assets must disclose' },
  { text: 'Create a subgroup of the assets in the report', aside: 'Engage Measurabl support' },
  { text: 'Identify data gaps' },
  {
    text: 'Collect supplementary data',
    aside: 'Bulk upload certs, ratings, meters, projects',
  },
  { text: 'Review regulation onboarding: what is being asked, and how Measurabl helps' },
  { text: 'Opt to provide additional inputs' },
  { text: 'Review pre-calculated metrics and methodology' },
  { text: 'Enter inputs, explanations, actions taken, custom indicators' },
  { text: 'Preview the report' },
  { text: 'Export in the chosen format' },
  { text: 'Share with internal reviewers', aside: 'Third-party auditor reviews the data' },
  { text: 'Publicly list the disclosure' },
  { text: 'Submit to the regional market authority' },
];

// draft: reconstructed from the screens; the reasoning and costs are inferred.
export const decisions = [
  {
    title: 'Organize around obligations, not data',
    body: [
      'The dashboard is a list of reports, not a list of buildings. Each report carries its regulation, disclosure window, due date, and status, and the default sort is nearest due date.',
      'Analysts think in deadlines. Starting from the obligation answers "what do I owe, and when" before asking them to look at a single meter.',
    ],
    tradeoff:
      'Anyone who thinks building-first has to choose a report before they see data. Exploring data stays in Core and Insights.',
  },
  {
    title: 'Show readiness before the survey starts',
    body: [
      'Every report card summarizes majority asset location, meter data completeness, missing inputs, and survey progress, and each one links to where it gets fixed.',
      'Data quality is the foundation of the report, so problems surface on the dashboard rather than halfway through a 30-question survey.',
    ],
    tradeoff:
      'A denser dashboard, and numbers that can alarm people before they have context for them.',
  },
  {
    title: 'Put the methodology next to the question',
    body: [
      'Each survey section opens with question guidance. Pre-calculated metrics show their methodology, and every answer has room for an explanation and the action taken. Methodologies can travel with the export.',
    ],
    tradeoff:
      'A longer, wordier survey. We chose to make people read rather than let them submit something they could not defend.',
  },
  {
    title: 'Treat the audit trail as part of the product',
    body: [
      'The exports log records who exported what, in which format, when, and in what role. It links to the change log for every edit to buildings, meters, and spaces.',
      'That answers the research ask directly: let auditors interrogate the work on the platform instead of in an email thread.',
    ],
    tradeoff:
      'Building for a moment that comes months after onboarding. The value is invisible in a sales demo and obvious during an audit.',
  },
];

export type Callout = { text: string; pins: [number, number][] };

export const screens: {
  id: string;
  title: string;
  summary: string;
  src: ImageMetadata;
  alt: string;
  callouts: Callout[];
}[] = [
  {
    id: 'reports',
    title: 'Reports dashboard',
    summary: 'Every obligation in one place, ranked by what is due next.',
    src: screenReports,
    alt: 'The Disclose dashboard listing an SFDR Principal Adverse Impact report and an annual ESG report. Each card shows the disclosure timeline, due date, status, majority asset location, meter data completeness, missing inputs, and survey progress.',
    callouts: [
      {
        text: 'Sort by nearest due date to stay ahead of disclosures and avoid penalties.',
        pins: [[50.8, 25.2]],
      },
      {
        text: 'See at a glance which reports are not started, in progress, or ready to submit.',
        pins: [[94.5, 42.1]],
      },
      {
        text: 'Track survey progress, including when it was last saved or auto-saved.',
        pins: [[94.5, 80.8]],
      },
      {
        text: 'Understand the data behind each report: fund characteristics, data quality, and completeness.',
        pins: [
          [14.65, 87.3],
          [38.55, 87.3],
          [60.8, 87.3],
        ],
      },
    ],
  },
  {
    id: 'survey',
    title: 'Report survey',
    summary: 'Guided inputs, with the methodology beside every question.',
    src: screenSurvey,
    alt: 'The survey tab of the SFDR report, open to the Energy section. A sidebar lists the survey sections with completion states, and each question shows current- and prior-year impact with fields for an explanation and the action taken.',
    callouts: [
      { text: 'Preview the report before exporting and submitting.', pins: [[9.94, 25.03]] },
      {
        text: "Move between survey sections and see what's complete and what's ahead.",
        pins: [[5.77, 41.87]],
      },
      {
        text: 'Question guidance for each section explains which inputs count, and how.',
        pins: [[93.31, 30.14]],
      },
      {
        text: 'Add input rows for additional metrics, such as quarterly averages or totals.',
        pins: [[44.42, 44.19]],
      },
    ],
  },
  {
    id: 'exports',
    title: 'Exports log',
    summary: 'A record an auditor can follow without asking.',
    src: screenExports,
    alt: 'The exports log for the SFDR report: a filterable table of PDF and CSV exports with the date and time, who exported each one, and their role, above a panel linking to Measurabl\'s change log.',
    callouts: [
      {
        text: 'Filter the log by what matters most: time, user, role, or export type.',
        pins: [[51.65, 38.4]],
      },
      {
        text: 'Every export records who ran it, the file type, and the date and time.',
        pins: [[90.75, 59.3]],
      },
      {
        text: 'The change log covers every edit to buildings, meters, readings, and spaces.',
        pins: [[4.2, 81.5]],
      },
    ],
  },
];

// draft: qualitative until there are numbers to share.
export const outcomes = [
  {
    title: 'In customers’ hands',
    body: 'Launched to an early access program with SFDR Principal Adverse Impact reporting and custom internal ESG reports.',
  },
  {
    title: 'Strong usability scores',
    body: 'Early-access participants rated it highly on the System Usability Scale, and continuous discovery sessions kept going after launch.',
  },
  {
    title: 'One suite, one login',
    body: 'Disclosure sits beside Core and Insights, so gaps found in a report are fixed in the same platform the data lives in.',
  },
];

export const takeaways = [
  {
    title: 'Reporting and compliance are collaborative.',
    body: 'Several personas, some outside the customer’s company, are needed to create and submit a single report.',
  },
  {
    title: 'Data completeness and quality are the foundation.',
    body: 'Good reporting software is mostly good data software.',
  },
  {
    title: 'Cross-discipline working groups are extremely effective.',
    body: 'People from different disciplines, all working on the same problem, made faster and better decisions.',
  },
  {
    title: 'Continuous discovery works.',
    body: 'Testing throughout early access caught problems while they were still cheap to fix.',
  },
];

// draft: the strongest version of this is the one only Shelby can write.
export const reflection = [
  {
    lead: 'I’d bring auditors into research earlier.',
    body: 'They show up across the journey map and drive half the design decisions, but most of what we knew about them came secondhand from asset managers. A few direct sessions would have tested the exports log before we built it.',
  },
  {
    lead: 'I’d agree on success metrics before early access.',
    body: 'SUS told us the product was usable. It did not tell us whether reports were submitted on time or passed assurance, and that is what customers actually bought it for.',
  },
];

// Speaker notes for the slide view, keyed by slide id. Press N to show them.
export const notes: Record<string, string> = {
  title: 'Senior Product Designer at Measurabl. A new product for compliance reporting, from discovery to early access.',
  problem: 'Set up the stakes: regulation is prescriptive, penalties are real, and auditors check the work. Users were doing this offline in spreadsheets.',
  goals: 'Three goals we agreed on as a working group. Keep returning to "auditable and transparent", because it drives the later decisions.',
  approach: 'Double diamond. Research to make sure we were designing the right things, then design and validation to design things right.',
  research: 'The EY stat says the stakes are real. The quote is the line that shaped the product: do it all on the platform, and let auditors look in directly.',
  journey: 'Fourteen steps, four personas. The asset manager owns it, but property managers, our own team, and auditors all have to touch it. That is why this is a collaboration problem.',
  brief: 'This is the problem statement the team designed against.',
  flow: 'The flow we designed to. The tinted steps happen off to the side: support, bulk upload, and the auditor review.',
  decisions: 'Four decisions, each with what it cost. Expect follow-up questions on any of these.',
  'screen-reports': 'The dashboard is organized by obligation and deadline, and readiness is visible before you start.',
  'screen-survey': 'Guidance sits beside every question. Explanations and actions taken travel with the answer.',
  'screen-exports': 'The audit trail as a feature: who exported what and when, linked to the change log.',
  outcomes: 'Early access, strong SUS scores, ongoing discovery. Be honest that hard metrics were still coming in.',
  takeaways: 'Close on what carries forward to the next team.',
  close: 'Thank you. Questions?',
};
