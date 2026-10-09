// Content for the Measures case study. The portfolio page
// (src/pages/work/measures.astro) and the slide view
// (src/pages/work/measures/present.astro) both read from here, so a copy
// change lands in both places at once.
//
// Anything marked `draft` was inferred from the original deck's screens and
// diagrams rather than written from memory. Confirm or rewrite before presenting.

import screenDetail from '../assets/work/measures/screen-measure-detail.png';
import screenList from '../assets/work/measures/screen-measure-list.png';
import screenMobile from '../assets/work/measures/screen-mobile.png';

export const title = 'Measures';
export const tagline = 'Analytic insights that are actionable, timely, and in context';

export const intro =
  'Measures is the part of Hatch Data where insight turns into work. When the platform finds waste in a building, like equipment running through a weekend, it opens a measure: a recommendation with a cost, an owner, and a status. I redesigned how measures are worked and closed, so the record shows what really happened and what it saved.';

export const meta = [
  {
    label: 'My Role',
    lines: ['Product Designer, Hatch Data', 'Research synthesis, journey mapping, flows, and UI'],
  },
  {
    label: 'Context',
    lines: [
      '2021', // draft: confirm dates
      'Partnered with product, engineering, and the advisory team', // draft
    ],
  },
];

export const problem = {
  lead: 'Half of the automated measures marked as implemented hadn’t been.',
  body: [
    'A preliminary analysis of measures resolved by July 2021 showed that 50% of automated measures were being incorrectly marked as implemented.',
    'Status changes didn’t capture the reasoning behind them, and there was no way to verify the impact of the work from inside the workflow. The savings we reported were only as good as a status dropdown.',
  ],
};

export const stat = {
  value: '50%',
  label: 'of automated measures resolved by July 2021 were incorrectly marked as implemented',
};

export const goals = [
  {
    title: 'Close measures correctly',
    body: 'Reduce the number of measures resolved with the wrong status.',
  },
  {
    title: 'Show the work',
    body: 'Make what was done on a measure visible before it is closed.',
  },
  {
    title: 'Verify the impact',
    body: 'Prove what the work achieved at the moment the measure is closed.',
  },
];

export const research = {
  body: [
    'Interviews with customers and internal stakeholders showed that people wanted specific changes to the Measures workflow. Annotations, conversations with teammates, and measurement and verification (M&V) all happened outside the product, so stakeholders drifted out of step.',
    'Mixpanel told the same story. About 45% of the time, users left a comment after closing a measure. They had more to say than the status allowed. But comments were free-form, so our advisory team sorted them by hand to work out what had actually been implemented.',
  ],
  stat: {
    value: '~45%',
    label: 'of closed measures got a comment after closing, which the advisory team sorted by hand',
  },
};

// Pain points from research, mapped onto the measure lifecycle. `focus` marks
// the stage the project took on.
export const painPoints: { stage: string; pain: string; focus?: boolean }[] = [
  { stage: 'Measure creation', pain: 'My feedback doesn’t influence future measures' },
  {
    stage: 'Measure notification',
    pain: 'I’m not always aware of which measures remain open and need work',
  },
  {
    stage: 'Investigate and prioritize',
    pain: 'It’s hard to tell whether a measure is actionable from the information given',
  },
  {
    stage: 'Working on a measure',
    pain: 'It’s hard to talk with others about a measure and where it is in the workflow',
  },
  {
    stage: 'Closing a measure',
    pain: 'My work isn’t accurately reflected when I close a measure',
    focus: true,
  },
  { stage: 'M&V and reporting', pain: 'The impact of my work isn’t represented or verified' },
  { stage: 'Measure feedback', pain: 'I don’t have an easy way to update measure assumptions' },
];

// draft: confirm what the counts measured (requests, votes, or mentions).
export const closingRequests: { feature: string; count: number; detail?: string; inScope?: boolean }[] = [
  {
    feature: 'Revise measure statuses and actions',
    count: 30,
    detail: 'Including descriptions for each status',
    inScope: true,
  },
  { feature: 'Closed reasons', count: 27, inScope: true },
  { feature: 'Schedule updates within a measure', count: 27 },
  { feature: 'Auto implementation verification on close', count: 24 },
  { feature: 'Measure logic feedback mechanism', count: 19 },
  { feature: 'Measure type enablements', count: 18 },
  { feature: 'Measure expiration', count: 15 },
  { feature: 'Measure parameter configuration', count: 15 },
  { feature: 'Self-serve enable and disable', count: 10 },
  { feature: 'Schedule change prompts a status change', count: 9 },
  { feature: 'Custom actions and statuses', count: 2 },
];

// draft: confirm the persona's name and role.
export const persona = {
  name: 'Tom',
  role: 'Building engineer',
  summary: 'Works assigned tasks in the field and reports progress to the chief engineer.',
};

export const journey: { step: string; touchpoints: string[]; opportunity?: string }[] = [
  {
    step: 'Reviews assigned tasks and the preventive maintenance schedule in the work order system',
    touchpoints: ['Measures', 'Notifications', 'Work order integrations'],
    opportunity: 'Deeper integration with work order systems',
  },
  {
    step: 'Investigates the task in the field or through the building automation system',
    touchpoints: ['Measures', 'Explorer', 'Mobile'],
    opportunity:
      'Mobile tools to review a measure, validate the observed issue, and share progress',
  },
  {
    step: 'Resolves the task and completes maintenance, tracking time and steps taken',
    touchpoints: ['Measures', 'Admin'],
    opportunity: 'Mobile tools to work in the field with up-to-date information and track status',
  },
  {
    step: 'Reports progress and work to the chief engineer',
    touchpoints: ['Measures', 'Reporting', 'Email'],
    opportunity: 'One place to track actions taken, like notes, so they tie back to impact',
  },
];

export const brief =
  'Give the people doing the work a transparent, structured way to show it, so every closed measure reflects what really happened and what it saved.';

// draft: reconstructed from the final screens; the reasoning and costs are inferred.
export const decisions = [
  {
    title: 'Split one status into three questions',
    body: [
      'Closing a measure now asks for a status, a resolution (implemented or not implemented), and a reason. Each option comes with a description, so “closed” no longer has to mean “done”.',
      'This took on the two most-requested changes for closing a measure, and it turned the reasoning hidden in free-form comments into data we could analyze.',
    ],
    tradeoff:
      'More clicks at the moment someone wants to be finished. We kept the fields short and the defaults sensible so the extra step felt like a confirmation, not a form.',
  },
  {
    title: 'Let people show their work',
    body: [
      'Every measure keeps an activity log of status changes, comments, and uploads, with who did each one and when.',
      'Task management needs transparency. The log answers the chief engineer’s question, “what happened here?”, without a meeting or an email thread.',
    ],
    tradeoff:
      'A busy measure has a long log. It leads with the latest events and puts the full history behind “View all”.',
  },
  {
    title: 'Keep the evidence with the measure',
    body: [
      'Teams can attach supporting documents, such as an M&V report, straight to the measure. The proof lives next to the claim instead of in someone’s inbox.',
    ],
    tradeoff:
      'Attachments are only as good as what people upload. They support verification, but they don’t replace it.',
  },
  {
    title: 'Put the impact in context',
    body: [
      'Each measure leads with its avoidable impact: cost, emissions, electricity, and gas. Beside the observed issue, a chart compares usage before and after implementation.',
      'Whoever closes the measure can see whether the work moved the line, right where they make the call.',
    ],
    tradeoff:
      'A chart can’t verify every measure on its own. Weather, occupancy, and data gaps all muddy the comparison, so it informs the resolution rather than deciding it.',
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
  tall?: boolean;
}[] = [
  {
    id: 'detail',
    title: 'Measure detail',
    summary: 'Everything needed to close a measure honestly, on one screen.',
    src: screenDetail,
    alt: 'A Replace Boiler measure in Hatch Data. An avoidable impact summary sits above the observed issue, with a chart comparing pre- and post-implementation electricity usage. Below are the recommended action and an attachments list. A side panel sets the owner, status, resolution, and reason, above an activity log.',
    callouts: [
      {
        text: 'High-level metrics show the impact of each measure: the emissions and usage avoided.',
        pins: [[2.4, 12.8]],
      },
      {
        text: 'A transparent, intuitive workflow drives action, so efforts to resolve an issue are clearly reflected.',
        pins: [[66.6, 27.6]],
      },
      {
        text: 'An activity log shows what was done on a measure, by whom, and when.',
        pins: [[66.6, 55.9]],
      },
      {
        text: 'Users upload supporting evidence straight to the measure, so documentation lives in one place.',
        pins: [[2.4, 88.3]],
      },
    ],
  },
  {
    id: 'list',
    title: 'All measures',
    summary: 'The portfolio view: what is open, who owns it, and what it is worth.',
    src: screenList,
    alt: 'The All Measures table in Hatch Data. A summary row shows total measures, total cost, avoidable emissions, electricity, and gas. Below it, each row lists a measure’s status and resolution, date identified, ID, type, location, avoided cost, and owner.',
    // draft: callouts written from the screen.
    callouts: [
      {
        text: 'Totals across every measure: cost, emissions, electricity, and gas that could be avoided.',
        pins: [[6.6, 29.9]],
      },
      {
        text: 'Status and resolution lead each row, color-coded so new and implemented measures stand out.',
        pins: [[6.6, 44.1]],
      },
      {
        text: 'Unassigned measures are called out, so nothing sits without someone responsible.',
        pins: [[83.4, 44.1]],
      },
    ],
  },
  {
    id: 'mobile',
    title: 'Measures on mobile',
    summary: 'For the engineer in the field, where the work actually happens.',
    src: screenMobile,
    alt: 'The Measures list on a phone. A location picker sits above an All and My Measures toggle, an Open filter chip, and a search field. Each card shows a status, date, measure type, ID, building, and owner.',
    tall: true,
    // draft: callouts written from the screen and the journey opportunities.
    callouts: [
      {
        text: '“My Measures” filters the list down to the work assigned to you.',
        pins: [[95, 15.5]],
      },
      {
        text: 'Find a measure by ID or title while standing in front of the equipment.',
        pins: [[5, 27.5]],
      },
      {
        text: 'Status comes first on every card, matching the desktop table.',
        pins: [[57, 34]],
      },
    ],
  },
];

export const outcome = {
  value: '73%',
  label: 'fewer improperly resolved measures in the first six months after release',
};

export const takeaways = [
  {
    title: 'Map feedback onto the journey.',
    body: 'There are always more ideas than capacity. Organizing feedback alongside the user’s journey shows which ideas would have the most impact.',
  },
  {
    title: 'Task management demands transparency.',
    body: 'Let people show their work.',
  },
  {
    title: 'B2B users bring B2C expectations.',
    body: 'People expect the same polish at work as in the apps they use every day. Patterns from outside enterprise software are worth borrowing.',
  },
];
