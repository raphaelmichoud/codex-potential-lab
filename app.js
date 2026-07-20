const state = {
  brief: "",
  category: "Developer tools",
  deadline: 48,
  ambition: 4,
  gptResponse: "",
  demoTimer: null,
  demoIndex: 0
};

const storageKey = "codexPotentialLabEn";

const presets = {
  "Developer tools": {
    title: "Codex Submission Forge",
    audience: "makers, product teams, and developers",
    scoreBoost: 4,
    surfaces: ["Brief engine", "Architecture map", "Quality cockpit", "Submission pack"]
  },
  "Work and productivity": {
    title: "Codex Workbench",
    audience: "founders, operators, and independent builders",
    scoreBoost: 2,
    surfaces: ["Capture", "Prioritization", "Execution", "Report"]
  },
  Education: {
    title: "Codex Learning Studio",
    audience: "teachers, students, and mentors",
    scoreBoost: 1,
    surfaces: ["Diagnostic", "Learning path", "Exercises", "Assessment"]
  },
  "Apps for your life": {
    title: "Codex Life Kit",
    audience: "people who want to turn a personal idea into a concrete tool",
    scoreBoost: 3,
    surfaces: ["Intentions", "Routine", "Assistant", "Local memory"]
  }
};

const magicListCase = {
  title: "Magic List: Simple To-Do",
  sourceUrl: "https://apps.apple.com/ch/app/magic-list-simple-to-do/id6759790577?l=en",
  brief:
    "Magic List: Simple To-Do is a simple and private productivity app for iPhone and iPad. It highlights: no ads, no account, no tracking, 3 free lists, Premium with a one-time purchase, and data that stays on device. Goal: use Codex Potential Lab to find the positioning, roadmap, ASO, onboarding, retention, and demo narrative that unlock the full potential of Magic List.",
  sampleGptResponse: "# Positioning\n\n## Most distinctive positioning\n\n### Verified facts\nMagic List is:\n- an iPhone and iPad productivity app,\n- a simple private to-do list,\n- with no ads,\n- no account,\n- no tracking,\n- data stored on device,\n- App Store privacy summary indicates that no data is collected,\n- three lists are free,\n- Premium unlocks unlimited lists with a one-time purchase.\n\n### Recommendation\n\nThe strongest positioning is **not** \"another minimalist to-do app.\"\n\nIt is:\n\n> **The private to-do list that lets you think before you organize.**\n\nOr even more simply:\n\n> **Capture. Forget. Continue.**\n\nThe differentiation comes from removing friction and preserving privacy rather than adding productivity features.\n\nThe core promise becomes:\n\n- no signup\n- no cloud dependency\n- no algorithm\n- no surveillance\n- no subscriptions\n- no unnecessary complexity\n\nThat creates a very clear contrast with feature-heavy productivity tools without needing to compare directly to any specific competitor.\n\n---\n\n# Feature bets\n\n## 1. Brain Dump Mode\n**Impact:** Very High  \n**Effort:** Low\n\nA dedicated screen for rapidly entering many items without switching context.\n\nExample:\n\n```\nBuy milk\nCall Emma\nFinish prototype\nRenew passport\n```\n\nTap Done → automatically creates separate tasks.\n\nThis reinforces the product's \"empty your head\" philosophy.\n\n---\n\n## 2. Daily Focus\n**Impact:** High  \n**Effort:** Medium\n\nInstead of showing every task, Magic List offers one optional daily focus list.\n\nExample:\n\n> Today:\n>\n> ✓ Finish proposal\n>\n> ✓ Dentist\n>\n> ✓ Buy batteries\n\nKeeps the app intentionally simple.\n\n---\n\n## 3. Completion History\n**Impact:** Medium-High  \n**Effort:** Medium\n\nCompleted tasks remain accessible in a lightweight archive.\n\nBenefits:\n\n- feeling of progress\n- accidental recovery\n- no complicated reporting\n\n---\n\n## 4. Natural-language Quick Add\n**Impact:** Medium  \n**Effort:** Medium\n\nExample:\n\n> \"Call Sarah tomorrow\"\n\ncreates:\n\n- task\n- optional due date\n\nwithout exposing users to complex scheduling interfaces.\n\n---\n\n## 5. Magic Capture Widget\n**Impact:** High  \n**Effort:** High\n\nOne tap from the Home Screen:\n\n→ type\n\n→ saved\n\n→ back to life.\n\nFast capture is consistent with the product philosophy.\n\n---\n\n# App Store and onboarding\n\n## Screenshot recommendations\n\nCurrent screenshots should answer one question:\n\n**Why this app instead of any other to-do app?**\n\nSuggested sequence:\n\n### Screenshot 1\n\nLarge headline:\n\n> **Simple by design.**\n\nSmall text:\n\n> Capture tasks in seconds.\n\n---\n\n### Screenshot 2\n\n> **Private.**\n\nIcons:\n\n✓ No account\n\n✓ No tracking\n\n✓ No ads\n\n---\n\n### Screenshot 3\n\n> **Your data stays on your device.**\n\nSimple illustration of local storage.\n\n---\n\n### Screenshot 4\n\n> **Buy once. Keep forever.**\n\nClearly explain:\n\n- three lists free\n- unlimited lists with Premium\n- one-time purchase\n\n---\n\n### Screenshot 5\n\nShow real usage.\n\nMorning.\n\nAfternoon.\n\nShopping.\n\nIdeas.\n\nPacking.\n\nDemonstrate versatility instead of features.\n\n---\n\n## Onboarding recommendations\n\nCurrent onboarding should be extremely short.\n\nSuggested flow:\n\n### Screen 1\n\n> Welcome.\n\nOne sentence:\n\n> Magic List helps you empty your mind.\n\n---\n\n### Screen 2\n\nType your first task immediately.\n\nNo tutorial.\n\nNo permissions.\n\nNo account.\n\n---\n\n### Screen 3\n\nExplain only after first success:\n\n> Your tasks stay on your device.\n\nDone.\n\n---\n\n# Demo story\n\n**Duration:** ~2 minutes 30 seconds\n\n---\n\n### 0:00\n\n\"I have five things in my head.\"\n\nOpen Magic List.\n\nRapidly enter:\n\n- Dentist\n- Call Alex\n- Buy coffee\n- Finish prototype\n- Book train\n\nDone.\n\n---\n\n### 0:30\n\nEverything is captured.\n\nMind is clear.\n\nNo login.\n\nNo loading.\n\nNo sync.\n\nNo distractions.\n\n---\n\n### 0:50\n\nCreate:\n\n- Shopping\n- Work\n- Weekend\n\nShow how naturally lists separate different contexts.\n\n---\n\n### 1:20\n\nShow Privacy.\n\nExplain:\n\n- no account\n- no tracking\n- data remains on device\n\nMention that the App Store privacy summary indicates no data is collected.\n\n---\n\n### 1:50\n\nUpgrade.\n\nExplain:\n\n- three lists free\n- unlimited lists\n- one-time purchase\n\nNo subscription.\n\n---\n\n### 2:15\n\nClose with:\n\n> \"Sometimes productivity isn't about doing more.\n>\n> It's about carrying less.\"\n\n---\n\n# Risks\n\n## Product risks\n\n### 1. Minimalism can appear \"too simple\"\n\nA potential user may conclude:\n\n> \"It doesn't do enough.\"\n\n### Recommendation\n\nMarket simplicity as a deliberate product philosophy rather than a lack of features.\n\n---\n\n### 2. Privacy may not feel tangible\n\nAlthough privacy is a major strength, users may not immediately perceive its value.\n\n### Recommendation\n\nMake privacy visible throughout the App Store page and onboarding.\n\n---\n\n### 3. Weak emotional differentiation\n\n\"Simple to-do list\" is descriptive but not memorable.\n\n### Recommendation\n\nLead with the emotional outcome:\n\n> Peace of mind.\n\nNot:\n\n> Task management.\n\n---\n\n## Submission risks (Codex Potential Lab)\n\n### Verified fact\n\nMagic List existed before Codex Potential Lab.\n\n### Recommendation\n\nNever imply that Codex Potential Lab created Magic List.\n\nInstead present Magic List as:\n\n> the real-world product used to validate Codex Potential Lab.\n\nThe story becomes:\n\n> \"Here is an existing application.\n>\n> We used Codex Potential Lab to improve its positioning, product strategy, roadmap, narrative, and submission quality.\"\n\nThat is a stronger and more credible proof case than claiming authorship.\n\n---\n\n# Verified facts\n\n- Magic List is an iPhone and iPad productivity app.\n- It is a simple private to-do list.\n- It has no ads.\n- It requires no account.\n- It performs no tracking.\n- Three lists are available for free.\n- Premium unlocks unlimited lists.\n- Premium is a one-time purchase.\n- Data stays on the device.\n- The App Store privacy summary states that data is not collected.\n- Magic List existed before Codex Potential Lab.\n- In this submission, Magic List serves as a proof case for Codex Potential Lab.\n- The Build Week category for Codex Potential Lab is Developer Tools.\n\n---\n\n# Assumptions\n\n- Magic List aims to compete primarily on simplicity and privacy rather than feature breadth.\n- The current onboarding can be redesigned.\n- The App Store assets can be updated.\n- Codex Potential Lab is intended to demonstrate how developer tooling can improve an existing product's product strategy, narrative, and execution rather than generate the original application.\n\n---\n\n# Recommendations\n\n1. Position Magic List around **mental clarity and privacy**, not feature count.\n2. Add lightweight capabilities that reinforce fast capture rather than expanding into a full productivity suite.\n3. Redesign the App Store page to communicate privacy, ownership (one-time purchase), and simplicity before features.\n4. Build the demo around a relatable human problem (\"too many things in my head\") instead of the interface.\n5. Present Magic List as **evidence** of Codex Potential Lab's value: a real application whose positioning, roadmap, product narrative, and submission materials became stronger through the developer tool, without suggesting that the tool originally built the app."
};

const templates = {
  timeline: [
    ["00:00", "Framing", "Turn the brief into a goal, audience, success criteria, and realistic scope."],
    ["00:12", "GPT-5.6", "Generate an analysis prompt, paste the model response, and convert its signals into decisions."],
    ["00:28", "Architecture", "Identify product surfaces, app state, data, and verification points."],
    ["00:44", "Quality", "Check accessibility, mobile robustness, visual coherence, and demo scenarios."],
    ["00:56", "Submission", "Assemble the pitch, README, demo video, checklist, and Codex evidence."]
  ],
  risks: [
    ["high", "Demo too abstract", "Include a concrete user journey and an exportable result."],
    ["medium", "Scope too broad", "Limit the judging version to one strong end-to-end workflow."],
    ["medium", "Insufficient evidence", "Add a README, screenshots, public video, and Codex session ID."],
    ["low", "External dependencies", "Keep a standalone local version so judges can test quickly."]
  ],
  checklist: [
    "Public YouTube video under 3 minutes",
    "Public repo or private repo shared with the judges",
    "README with launch steps, technical decisions, and limits",
    "Codex Session ID obtained through /feedback",
    "GPT-5.6 trace: prompt, response, and integrated decisions",
    "Submission text reviewed and aligned with the category",
    "Demo tested on mobile and desktop"
  ]
};

const elements = {
  brief: document.querySelector("#projectBrief"),
  category: document.querySelector("#categorySelect"),
  deadline: document.querySelector("#deadlineSelect"),
  ambition: document.querySelector("#ambitionRange"),
  generate: document.querySelector("#generateBtn"),
  demo: document.querySelector("#demoBtn"),
  export: document.querySelector("#exportBtn"),
  magic: document.querySelector("#magicBtn"),
  title: document.querySelector("#projectTitle"),
  pitch: document.querySelector("#projectPitch"),
  outcome: document.querySelector("#outcomeText"),
  timeline: document.querySelector("#timelineList"),
  architecture: document.querySelector("#architectureMap"),
  tasks: document.querySelector("#taskBoard"),
  risks: document.querySelector("#riskList"),
  readiness: document.querySelector("#readinessPanel"),
  gaps: document.querySelector("#gapList"),
  judge: document.querySelector("#judgePanel"),
  decision: document.querySelector("#decisionPanel"),
  checklist: document.querySelector("#checklist"),
  submission: document.querySelector("#submissionText"),
  gptPrompt: document.querySelector("#gptPrompt"),
  gptResponse: document.querySelector("#gptResponse"),
  gptInsights: document.querySelector("#gptInsights"),
  gptEvidenceScore: document.querySelector("#gptEvidenceScore"),
  copyPrompt: document.querySelector("#copyPromptBtn"),
  sampleGpt: document.querySelector("#sampleGptBtn"),
  analyzeGpt: document.querySelector("#analyzeGptBtn"),
  score: document.querySelector("#scoreValue"),
  taskCount: document.querySelector("#taskValue"),
  riskCount: document.querySelector("#riskValue"),
  toast: document.querySelector("#toast"),
  tabs: Array.from(document.querySelectorAll(".tab-button")),
  views: Array.from(document.querySelectorAll(".view-section"))
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function summarizeBrief(brief) {
  const clean = brief.trim().replace(/\s+/g, " ");
  if (!clean) {
    return "a Codex project turned into a testable experience";
  }

  const firstSentence = clean.split(/[.!?]/).find(Boolean) || clean;
  return firstSentence.length > 148 ? `${firstSentence.slice(0, 145)}...` : firstSentence;
}

function extractKeywords(brief) {
  const stop = new Set(["with", "for", "into", "from", "that", "this", "your", "their", "project", "create", "turn", "helps"]);
  return brief
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(/[^a-z0-9]+/)
    .filter((word) => word.length > 3 && !stop.has(word))
    .slice(0, 6);
}

function detectProfile(brief) {
  const clean = brief.toLowerCase();
  if (clean.includes("magic list") || clean.includes("no tracking") || clean.includes("one-time purchase")) {
    return {
      kind: "magic-list",
      label: "Magic List",
      facts: [
        "iPhone and iPad",
        "productivity",
        "no ads",
        "no account",
        "no tracking",
        "3 lists free",
        "Premium with a one-time purchase",
        "data stored on device"
      ]
    };
  }

  return {
    kind: "general",
    label: "Projet",
    facts: []
  };
}

function buildModel() {
  state.brief = elements.brief.value;
  state.category = elements.category.value;
  state.deadline = Number(elements.deadline.value);
  state.ambition = Number(elements.ambition.value);
  state.gptResponse = elements.gptResponse.value;

  const preset = presets[state.category];
  const profile = detectProfile(state.brief);
  const summary = summarizeBrief(state.brief);
  const keywords = extractKeywords(state.brief);
  const scope = state.deadline <= 24 ? "focused" : state.deadline <= 48 ? "standard" : "extended";
  const gptAnalysis = analyzeGptResponse(state.gptResponse);
  const readiness = createReadinessSystem(profile, gptAnalysis, state.ambition, scope);
  const score = readiness.total;

  return {
    preset,
    profile,
    summary,
    keywords,
    scope,
    score,
    gptAnalysis,
    readiness,
    tasks: createTasks(scope, preset, profile, gptAnalysis),
    architecture: createArchitecture(preset, keywords, profile),
    submission: createSubmission(preset, summary, scope, score, profile, gptAnalysis),
    gptPrompt: createGptPrompt(preset, summary, scope, profile)
  };
}

function clampScore(value) {
  return Math.max(0, Math.min(99, Math.round(value)));
}

function createReadinessSystem(profile, gptAnalysis, ambition, scope) {
  const modelBoost = Math.min(gptAnalysis.score, 6) * 3;
  const ambitionBoost = ambition * 3;
  const scopePenalty = scope === "focused" ? 4 : scope === "extended" ? -1 : 0;
  const magicBoost = profile.kind === "magic-list" ? 2 : 0;

  const dimensions = [
    {
      label: "Prototype",
      value: clampScore(62 + ambitionBoost + modelBoost + magicBoost),
      note: "Testable flow, local interface, and demo path."
    },
    {
      label: "Story",
      value: clampScore(66 + ambitionBoost + modelBoost),
      note: "Pitch, positioning, and submission narrative."
    },
    {
      label: "Demo",
      value: clampScore(56 + ambitionBoost + modelBoost - scopePenalty),
      note: "Video script, screen sequence, and Markdown export."
    },
    {
      label: "Evidence",
      value: clampScore(52 + modelBoost * 2 + magicBoost),
      note: "GPT-5.6 trace, verified facts, and explicit decisions."
    }
  ];

  const total = clampScore(dimensions.reduce((sum, item) => sum + item.value, 0) / dimensions.length);
  const gaps = createBuildGaps(dimensions, gptAnalysis, profile);
  const judge = createJudgeSimulation(dimensions, gptAnalysis, total);
  const decisions = createScopeDecisions(profile);

  return { total, dimensions, gaps, judge, decisions };
}

function createScopeDecisions(profile) {
  if (profile.kind === "magic-list") {
    return [
      {
        status: "keep",
        title: "Keep: positioning",
        body: "Use 'Capture. Forget. Continue.' and the private-to-do-list angle for ASO and future copy."
      },
      {
        status: "keep",
        title: "Keep: App Store polish",
        body: "Prioritize screenshots around privacy, no account, no tracking, one-time purchase and data on device."
      },
      {
        status: "park",
        title: "Park: feature roadmap",
        body: "Brain Dump already maps to the current 'empty my head' flow. Daily Focus, History, NLP and Widget stay out of scope for now."
      },
      {
        status: "skip",
        title: "Avoid: scope creep",
        body: "Do not add product features before higher-priority work is complete."
      }
    ];
  }

  return [
    {
      status: "keep",
      title: "Keep: validation",
      body: "Use GPT suggestions to improve readiness, gaps and judge simulation before adding more outputs."
    },
    {
      status: "park",
      title: "Park: extra deliverables",
      body: "Landing pages, FAQs and changelogs are useful only after the core submission flow is clear."
    }
  ];
}

function createBuildGaps(dimensions, gptAnalysis, profile) {
  const gaps = [
    {
      status: dimensions[2].value >= 82 ? "ready" : "warning",
      title: "Convincing demo",
      body: dimensions[2].value >= 82 ? "The sequence is close to a complete judge-ready walkthrough." : "Add a short video showing problem, action, result, and export."
    },
    {
      status: gptAnalysis.score >= 5 ? "ready" : "warning",
      title: "Trace GPT-5.6",
      body: gptAnalysis.score >= 5 ? "The model response covers enough signals to be cited." : "Paste a real GPT-5.6 response and verify the detected signals."
    },
    {
      status: profile.kind === "magic-list" ? "ready" : "warning",
      title: "Real product case",
      body: profile.kind === "magic-list" ? "Magic List grounds the demo in a public product." : "Load Magic List to show a concrete use case."
    },
    {
      status: dimensions[3].value >= 80 ? "ready" : "warning",
      title: "Judgeable evidence",
      body: dimensions[3].value >= 80 ? "Facts, assumptions, and recommendations are separated." : "Clarify what is verified, assumed, and recommended."
    }
  ];

  return gaps;
}

function createJudgeSimulation(dimensions, gptAnalysis, total) {
  const byLabel = Object.fromEntries(dimensions.map((item) => [item.label, item.value]));
  return [
    {
      label: "Innovation",
      value: clampScore((byLabel.Story + byLabel.Evidence) / 2 + 2),
      note: "A meta-tool that makes the full Codex cycle visible."
    },
    {
      label: "Execution",
      value: clampScore((byLabel.Prototype + byLabel.Evidence) / 2),
      note: "Local app, docs, repo, demo, and export."
    },
    {
      label: "Story",
      value: byLabel.Story,
      note: "Promise: from concept to submit-ready project."
    },
    {
      label: "Demo",
      value: byLabel.Demo,
      note: total >= 86 && gptAnalysis.score >= 5 ? "Ready to submit." : "Clearly show the initial problem and the improvement."
    }
  ];
}

function createTasks(scope, preset, profile, gptAnalysis) {
  const build = [
    ["Core experience", `Create the flow from ${preset.surfaces[0].toLowerCase()} to ${preset.surfaces[2].toLowerCase()}.`],
    ["Local state", "Save settings, brief, GPT-5.6 trace, and exports for a reproducible demo."],
    ["Responsive", "Verify that critical panels stay readable on mobile and desktop."]
  ];
  const validate = [
    ["Judge path", "Test a complete 90-second sequence with an exported result."],
    ["Accessibility", "Verify labels, visible focus, contrast, and basic keyboard navigation."],
    ["Robustness", "Handle empty briefs, long text, changing categories, and incomplete GPT responses."]
  ];
  const submit = [
    ["README", "Document the goal, local launch steps, and implementation choices."],
    ["Demo video", "Structure the script around the problem, the Codex workflow, GPT-5.6, and the result."],
    ["Devpost", "Prepare pitch, category, repo, session ID, GPT-5.6 trace, and final checklist."]
  ];

  if (profile.kind === "magic-list") {
    build.push(["Magic List positioning", "Turn privacy, simplicity, and one-time purchase into a clear product promise."]);
    validate.push(["App Store truth", "Keep only verified public facts and isolate product assumptions."]);
    submit.push(["Growth plan", "Export ASO, onboarding, demo, and roadmap into an actionable package."]);
  }

  if (gptAnalysis.score >= 4) {
    build.push(["Model synthesis", "Convert the strongest GPT-5.6 signals into scope decisions."]);
  }

  if (scope === "extended") {
    build.push(["Demo mode", "Add automatic navigation to present the project with less friction."]);
    validate.push(["Visual audit", "Compare the main states after generation and export."]);
    submit.push(["Press kit", "Add a short pitch and a cover image."]);
  }

  return { build, validate, submit };
}

function createArchitecture(preset, keywords, profile) {
  const tags = keywords.length ? keywords.join(", ") : "brief, plan, quality";
  const inputBody =
    profile.kind === "magic-list"
      ? `Captures the brief and public Magic List facts: ${profile.facts.join(", ")}.`
      : `Captures the brief, category, deadline, and ambition. Detected signals: ${tags}.`;

  return [
    {
      chip: "Input",
      title: preset.surfaces[0],
      body: inputBody
    },
    {
      chip: "GPT-5.6",
      title: "Model studio",
      body: "Prepares a structured prompt, receives the GPT-5.6 response, and turns model signals into product choices."
    },
    {
      chip: "Execution",
      title: preset.surfaces[2],
      body: "Converts the plan into tasks, risks, guardrails, and verification criteria."
    },
    {
      chip: "Output",
      title: preset.surfaces[3],
      body: "Produces the pitch, demo script, checklist, GPT-5.6 trace, and shareable Markdown export."
    }
  ];
}

function createGptPrompt(preset, summary, scope, profile) {
  const facts = profile.facts.length ? profile.facts.map((fact) => `- ${fact}`).join("\n") : "- No external facts verified. Use only the brief.";

  return `You are GPT-5.6. Analyze this project like a product, design, and implementation judge.

Context
- Project: ${profile.label}
- Build Week category: ${state.category}
- Audience: ${preset.audience}
- Scope: ${scope}
- Brief: ${summary}

Verified public facts
${facts}

Your mission
1. Find the most distinctive positioning.
2. Propose 5 high-impact improvements, ranked by effort.
3. Write a demo script under 3 minutes.
4. Identify submission and product risks.
5. Clearly separate verified facts, assumptions, and recommendations.

Expected format
Positioning
Feature bets
App Store and onboarding
Demo story
Risks`;
}

function analyzeGptResponse(text) {
  const lower = text.toLowerCase();
  const checks = [
    {
      title: "Positioning",
      terms: ["positioning", "positionnement", "promise", "promesse", "niche"],
      ready: "The response creates a distinctive promise.",
      missing: "Ask for a sharper positioning sentence."
    },
    {
      title: "Privacy",
      terms: ["privacy", "private", "prive", "no tracking", "sans tracking", "on device", "local"],
      ready: "The privacy promise is usable.",
      missing: "Ask the model to clarify no account, no tracking, and local data."
    },
    {
      title: "Roadmap",
      terms: ["feature", "roadmap", "amelioration", "template", "import", "export"],
      ready: "The response includes concrete product directions.",
      missing: "Ask for improvements ranked by effort and impact."
    },
    {
      title: "App Store",
      terms: ["app store", "aso", "screenshot", "screenshots", "onboarding"],
      ready: "The response can inform the App Store page and onboarding.",
      missing: "Ask for ASO strategy and screenshot ideas."
    },
    {
      title: "Demo",
      terms: ["demo", "story", "script", "minute", "30 seconds"],
      ready: "The response gives a demo story that can be filmed.",
      missing: "Ask for a demo script under 3 minutes."
    },
    {
      title: "Risks",
      terms: ["risk", "risque", "avoid", "crowded", "subscription", "complex"],
      ready: "Risks are identified and actionable.",
      missing: "Ask for likely judge objections."
    }
  ];

  const cards = checks.map((check) => {
    const found = check.terms.some((term) => lower.includes(term));
    return {
      title: check.title,
      status: found ? "ready" : "gap",
      body: found ? check.ready : check.missing
    };
  });

  const score = cards.filter((card) => card.status === "ready").length;
  return { score, cards };
}

function createGptEvidenceSection(gptAnalysis) {
  const ready = gptAnalysis.cards.filter((card) => card.status === "ready").map((card) => card.title);
  if (!state.gptResponse.trim()) {
    return "GPT-5.6 Trace\nTo complete: paste a GPT-5.6 response into the Studio to document model-informed decisions.";
  }

  return `GPT-5.6 Trace
Detected signals: ${ready.join(", ") || "to verify"}.
The GPT-5.6 response was used as decision material, then Codex Potential Lab converted it into tasks, risks, architecture, and submission text.`;
}

function createSubmission(preset, summary, scope, score, profile, gptAnalysis) {
  const magicContext =
    profile.kind === "magic-list"
      ? `
Magic List case
Magic List is used as a proof case: a simple and private iPhone/iPad to-do list with no ads, no account, no tracking, 3 free lists, Premium as a one-time purchase, and data stored on device. The goal is to turn those facts into positioning, roadmap, onboarding, and demo evidence.`
      : "";

  return `Title
${preset.title}

Category
${state.category}

Pitch
${preset.title} helps ${preset.audience} turn a brief into a demonstrable prototype, build plan, quality evidence, and submission package.

Description
The project starts from a rough idea: ${summary}. The app shows how Codex can frame the problem, break down the architecture, organize execution, anticipate risks, use a GPT-5.6 response, and produce a clear submission in a short time. The result is local, testable, and exportable.${magicContext}

What shows the potential of Codex
- Turns a natural-language brief into an operational plan.
- Complete interface built as a product, not just a mockup.
- GPT-5.6 Studio: structured prompt, pasted response, signal analysis, and exportable trace.
- Generates tasks, risks, architecture, and submission text.
- Documentation and judging package are included directly.
- Standalone version that works without an account or complex install.

${createGptEvidenceSection(gptAnalysis)}

Demo plan
1. Enter a brief or load the Magic List case.
2. Choose the category and ambition.
3. Open GPT-5.6 Studio, copy the prompt, paste a GPT-5.6 response, and analyze it.
4. Show architecture, quality, checklist, and GPT-5.6 trace.
5. Export the Markdown package.

Readiness
Internal score: ${score}/99
Scope: ${scope}

Links to complete
Repository:
Video YouTube:
Live demo:
Session ID Codex:`;
}

function render() {
  const model = buildModel();
  const { preset, summary, score } = model;

  elements.title.textContent = preset.title;
  elements.pitch.textContent = `${summary} A local system turns intent into actions, risks, architecture, GPT-5.6 trace, and judging package.`;
  elements.outcome.textContent = `In ${state.deadline} hours, ${preset.title} aims to deliver a complete proof of value for ${preset.audience}: a useful flow, clear implementation, smooth demo, GPT-5.6 trace, and credible submission.`;
  elements.score.textContent = score;
  elements.taskCount.textContent = Object.values(model.tasks).flat().length;
  elements.riskCount.textContent = templates.risks.length;
  elements.submission.value = model.submission;
  elements.gptPrompt.value = model.gptPrompt;

  renderTimeline();
  renderArchitecture(model.architecture);
  renderTasks(model.tasks);
  renderRisks();
  renderReadiness(model.readiness);
  renderChecklist();
  renderGptInsights(model.gptAnalysis);
  saveState();
}

function renderReadiness(readiness) {
  elements.readiness.innerHTML = readiness.dimensions
    .map((item) => `
      <div class="score-row">
        <span>${escapeHtml(item.label)}</span>
        <div class="score-track" aria-hidden="true">
          <div class="score-fill" style="width: ${item.value}%"></div>
        </div>
        <strong>${item.value}</strong>
      </div>
    `)
    .join("");

  elements.gaps.innerHTML = readiness.gaps
    .map((item) => `
      <div class="gap-item ${escapeHtml(item.status)}">
        <strong>${escapeHtml(item.title)}</strong>
        <p>${escapeHtml(item.body)}</p>
      </div>
    `)
    .join("");

  elements.judge.innerHTML = readiness.judge
    .map((item) => `
      <div class="judge-item">
        <strong>${escapeHtml(item.label)} ${item.value}/99</strong>
        <p>${escapeHtml(item.note)}</p>
      </div>
    `)
    .join("");

  elements.decision.innerHTML = readiness.decisions
    .map((item) => `
      <div class="decision-item ${escapeHtml(item.status)}">
        <strong>${escapeHtml(item.title)}</strong>
        <p>${escapeHtml(item.body)}</p>
      </div>
    `)
    .join("");
}

function renderTimeline() {
  elements.timeline.innerHTML = templates.timeline
    .map(([phase, title, body]) => `
      <div class="timeline-item">
        <span class="timeline-phase">${escapeHtml(phase)}</span>
        <div>
          <strong>${escapeHtml(title)}</strong>
          <p>${escapeHtml(body)}</p>
        </div>
      </div>
    `)
    .join("");
}

function renderArchitecture(nodes) {
  elements.architecture.innerHTML = nodes
    .map((node) => `
      <section class="arch-node">
        <span class="node-chip">${escapeHtml(node.chip)}</span>
        <h3>${escapeHtml(node.title)}</h3>
        <p>${escapeHtml(node.body)}</p>
      </section>
    `)
    .join("");
}

function renderTasks(tasks) {
  const columns = [
    ["Build", tasks.build],
    ["Verify", tasks.validate],
    ["Submit", tasks.submit]
  ];

  elements.tasks.innerHTML = columns
    .map(([label, items]) => `
      <section class="task-column">
        <h4>${escapeHtml(label)}</h4>
        ${items
          .map(([title, body]) => `
            <div class="task-item">
              <strong>${escapeHtml(title)}</strong>
              <p>${escapeHtml(body)}</p>
            </div>
          `)
          .join("")}
      </section>
    `)
    .join("");
}

function renderRisks() {
  elements.risks.innerHTML = templates.risks
    .map(([level, title, body]) => `
      <div class="risk-item ${escapeHtml(level)}">
        <strong>${escapeHtml(title)}</strong>
        <p>${escapeHtml(body)}</p>
      </div>
    `)
    .join("");
}

function renderChecklist() {
  elements.checklist.innerHTML = templates.checklist.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function renderGptInsights(analysis) {
  elements.gptEvidenceScore.textContent = `${analysis.score}/6`;
  elements.gptInsights.innerHTML = analysis.cards
    .map((card) => `
      <section class="insight-card ${card.status}">
        <strong>${escapeHtml(card.title)}</strong>
        <p>${escapeHtml(card.body)}</p>
      </section>
    `)
    .join("");
}

function activateView(id) {
  elements.tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.target === id);
  });
  elements.views.forEach((view) => {
    view.classList.toggle("active", view.id === id);
  });
}

function exportMarkdown() {
  const model = buildModel();
  const markdown = `# ${model.preset.title}

${model.submission}

## Prompt GPT-5.6

${model.gptPrompt}

## GPT-5.6 Response

${state.gptResponse.trim() || "To complete with a real GPT-5.6 response."}

## GPT-5.6 Analysis

${model.gptAnalysis.cards.map((card) => `- ${card.title}: ${card.body}`).join("\n")}

## Submission Readiness Score

Score total: ${model.readiness.total}/99

${model.readiness.dimensions.map((item) => `- ${item.label}: ${item.value}/99 - ${item.note}`).join("\n")}

## Build Gap Finder

${model.readiness.gaps.map((item) => `- ${item.title}: ${item.body}`).join("\n")}

## Judge Simulation

${model.readiness.judge.map((item) => `- ${item.label}: ${item.value}/99 - ${item.note}`).join("\n")}

## Scope Decision

${model.readiness.decisions.map((item) => `- ${item.title}: ${item.body}`).join("\n")}

## Architecture

${model.architecture.map((node) => `### ${node.title}\n${node.body}`).join("\n\n")}

## Tasks

${Object.entries(model.tasks)
  .map(([group, items]) => `### ${group}\n${items.map(([title, body]) => `- ${title}: ${body}`).join("\n")}`)
  .join("\n\n")}

## Checklist

${templates.checklist.map((item) => `- [ ] ${item}`).join("\n")}
`;

  const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "codex-potential-lab-submission.md";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("Markdown export generated.");
}

async function copyPrompt() {
  const prompt = elements.gptPrompt.value;
  try {
    await navigator.clipboard.writeText(prompt);
  } catch {
    elements.gptPrompt.select();
    document.execCommand("copy");
  }
  showToast("GPT-5.6 prompt copied.");
}

function loadMagicListCase() {
  elements.brief.value = magicListCase.brief;
  elements.category.value = "Apps for your life";
  elements.deadline.value = "48";
  elements.ambition.value = "5";
  elements.gptResponse.value = magicListCase.sampleGptResponse;
  render();
  activateView("gpt");
  showToast("Magic List case loaded.");
}

function loadSampleGptResponse() {
  elements.gptResponse.value = magicListCase.sampleGptResponse;
  render();
  showToast("GPT-5.6 example loaded.");
}

function startDemoMode() {
  const ids = elements.views.map((view) => view.id);
  stopDemoMode();
  state.demoIndex = 0;
  activateView(ids[0]);
  elements.demo.textContent = "Stop demo";
  state.demoTimer = window.setInterval(() => {
    state.demoIndex = (state.demoIndex + 1) % ids.length;
    activateView(ids[state.demoIndex]);
  }, 2200);
  showToast("Demo mode active.");
}

function stopDemoMode() {
  if (state.demoTimer) {
    window.clearInterval(state.demoTimer);
    state.demoTimer = null;
    elements.demo.innerHTML = '<span aria-hidden="true">▶</span> Demo mode';
  }
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("visible");
  window.setTimeout(() => elements.toast.classList.remove("visible"), 2200);
}

function saveState() {
  const snapshot = {
    brief: elements.brief.value,
    category: elements.category.value,
    deadline: elements.deadline.value,
    ambition: elements.ambition.value,
    gptResponse: elements.gptResponse.value
  };
  localStorage.setItem(storageKey, JSON.stringify(snapshot));
}

function restoreState() {
  const raw = localStorage.getItem(storageKey);
  if (!raw) return;

  try {
    const saved = JSON.parse(raw);
    elements.brief.value = saved.brief || elements.brief.value;
    elements.category.value = saved.category || elements.category.value;
    elements.deadline.value = saved.deadline || elements.deadline.value;
    elements.ambition.value = saved.ambition || elements.ambition.value;
    elements.gptResponse.value = saved.gptResponse || elements.gptResponse.value;
  } catch {
    localStorage.removeItem(storageKey);
  }
}

elements.tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    stopDemoMode();
    activateView(tab.dataset.target);
  });
});

elements.generate.addEventListener("click", () => {
  render();
  showToast("Plan regenerated.");
});

elements.demo.addEventListener("click", () => {
  if (state.demoTimer) {
    stopDemoMode();
    showToast("Demo mode stopped.");
  } else {
    startDemoMode();
  }
});

elements.export.addEventListener("click", exportMarkdown);
elements.magic.addEventListener("click", loadMagicListCase);
elements.copyPrompt.addEventListener("click", copyPrompt);
elements.sampleGpt.addEventListener("click", loadSampleGptResponse);
elements.analyzeGpt.addEventListener("click", () => {
  render();
  showToast("GPT-5.6 response analyzed.");
});

[elements.brief, elements.category, elements.deadline, elements.ambition].forEach((element) => {
  element.addEventListener("input", render);
});

restoreState();
render();
