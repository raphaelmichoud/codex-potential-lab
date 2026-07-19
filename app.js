const state = {
  brief: "",
  category: "Developer tools",
  deadline: 48,
  ambition: 4,
  gptResponse: "",
  demoTimer: null,
  demoIndex: 0
};

const presets = {
  "Developer tools": {
    title: "Codex Submission Forge",
    audience: "makers, equipes produit et developpeurs",
    scoreBoost: 4,
    surfaces: ["Brief engine", "Architecture map", "Quality cockpit", "Submission pack"]
  },
  "Work and productivity": {
    title: "Codex Workbench",
    audience: "fondateurs, responsables operationnels et createurs independants",
    scoreBoost: 2,
    surfaces: ["Capture", "Priorisation", "Execution", "Compte rendu"]
  },
  Education: {
    title: "Codex Learning Studio",
    audience: "enseignants, etudiants et mentors",
    scoreBoost: 1,
    surfaces: ["Diagnostic", "Parcours", "Exercices", "Evaluation"]
  },
  "Apps for your life": {
    title: "Codex Life Kit",
    audience: "personnes qui veulent transformer une idee personnelle en outil concret",
    scoreBoost: 3,
    surfaces: ["Intentions", "Routine", "Assistant", "Memoire locale"]
  }
};

const magicListCase = {
  title: "Magic List: Simple To-Do",
  sourceUrl: "https://apps.apple.com/ch/app/magic-list-simple-to-do/id6759790577?l=fr-FR",
  brief:
    "Magic List: Simple To-Do est une app iPhone et iPad de productivite simple et privee. Elle met en avant: no ads, no account, no tracking, 3 lists free, Premium avec achat unique, et donnees qui restent sur l'appareil. Objectif: utiliser Codex Potential Lab pour trouver le positionnement, la roadmap, l'ASO, l'onboarding, la retention et une demo narrative qui tire le plein potentiel de Magic List.",
  sampleGptResponse: `Positioning
Magic List should own a calm, privacy-first niche: the to-do list for people who are tired of accounts, feeds, subscriptions and overbuilt productivity systems. The promise is simple: open, write, check, done. No ads, no account, no tracking, and data that stays on device.

Feature bets
- Add a first-run checklist that creates three useful lists instantly: Today, Groceries, and Ideas.
- Add a privacy proof screen that explains local data, no tracking, and one-time Premium in plain language.
- Add lightweight templates for repeatable lists without turning the app into a complex project manager.
- Add import/export so privacy-conscious users trust that they are not locked in.

App Store and onboarding
Lead with "Private by default. Simple by design." The screenshots should show speed, clean lists, local privacy, and the one-time Premium upgrade. The first 30 seconds should make the user feel safe and productive before asking for anything.

Demo story
Show a person creating a weekend list, a groceries list and a packing list in under one minute. Then show that there is no account wall, no tracking prompt, and no advertising surface. Finish with Premium as a calm unlock for unlimited lists.

Risks
The category is crowded, so the project needs a sharper wedge than "simple to-do". The winning wedge is trust: privacy, speed, and no subscription pressure. Avoid adding features that make Magic List feel like every other productivity app.`
};

const templates = {
  timeline: [
    ["00:00", "Cadrage", "Transformer le brief en objectif, audience, criteres de succes et perimetre realiste."],
    ["00:12", "GPT-5.6", "Generer un prompt d'analyse, coller la reponse du modele et convertir ses signaux en decisions."],
    ["00:28", "Architecture", "Identifier les surfaces, l'etat applicatif, les donnees et les points de verification."],
    ["00:44", "Qualite", "Passer sur accessibilite, robustesse mobile, coherence visuelle et scenarios de demonstration."],
    ["00:56", "Soumission", "Assembler pitch, README, video demo, checklist et preuves de creation avec Codex."]
  ],
  risks: [
    ["high", "Demo trop abstraite", "Inclure un parcours utilisateur concret et un resultat exportable."],
    ["medium", "Perimetre trop large", "Limiter la version jury a un flux fort et complet de bout en bout."],
    ["medium", "Preuves insuffisantes", "Ajouter README, captures, video publique et session ID Codex."],
    ["low", "Dependances externes", "Garder une version locale autonome pour que les juges puissent tester vite."]
  ],
  checklist: [
    "Video YouTube publique de moins de 3 minutes",
    "Depot public ou depot prive partage avec les juges",
    "README avec lancement, decisions techniques et limites",
    "Session ID Codex obtenu via /feedback",
    "Trace GPT-5.6: prompt, reponse et decisions integrees",
    "Texte de soumission relu et coherent avec la categorie",
    "Demo testee sur mobile et desktop"
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
    return "un projet Codex transforme en experience testable";
  }

  const firstSentence = clean.split(/[.!?]/).find(Boolean) || clean;
  return firstSentence.length > 148 ? `${firstSentence.slice(0, 145)}...` : firstSentence;
}

function extractKeywords(brief) {
  const stop = new Set(["avec", "pour", "dans", "une", "des", "les", "qui", "que", "sur", "est", "aux", "plus", "leur", "leurs", "cette", "creer", "projet"]);
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
  if (clean.includes("magic list") || clean.includes("no tracking") || clean.includes("premium avec achat unique")) {
    return {
      kind: "magic-list",
      label: "Magic List",
      facts: [
        "iPhone et iPad",
        "productivite",
        "no ads",
        "no account",
        "no tracking",
        "3 lists free",
        "Premium avec achat unique",
        "donnees sur l'appareil"
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
  const scope = state.deadline <= 24 ? "compact" : state.deadline <= 48 ? "soutenu" : "etendu";
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
  const scopePenalty = scope === "compact" ? 4 : scope === "etendu" ? -1 : 0;
  const magicBoost = profile.kind === "magic-list" ? 2 : 0;

  const dimensions = [
    {
      label: "Prototype",
      value: clampScore(62 + ambitionBoost + modelBoost + magicBoost),
      note: "Flux testable, interface locale et parcours demo."
    },
    {
      label: "Story",
      value: clampScore(66 + ambitionBoost + modelBoost),
      note: "Pitch, positionnement et narration de soumission."
    },
    {
      label: "Demo",
      value: clampScore(56 + ambitionBoost + modelBoost - scopePenalty),
      note: "Script video, sequence ecran et export Markdown."
    },
    {
      label: "Evidence",
      value: clampScore(52 + modelBoost * 2 + magicBoost),
      note: "Trace GPT-5.6, faits verifies et decisions explicites."
    }
  ];

  const total = clampScore(dimensions.reduce((sum, item) => sum + item.value, 0) / dimensions.length);
  const gaps = createBuildGaps(dimensions, gptAnalysis, profile);
  const judge = createJudgeSimulation(dimensions, gptAnalysis, total);

  return { total, dimensions, gaps, judge };
}

function createBuildGaps(dimensions, gptAnalysis, profile) {
  const gaps = [
    {
      status: dimensions[2].value >= 82 ? "ready" : "warning",
      title: "Demo convaincante",
      body: dimensions[2].value >= 82 ? "La sequence est proche d'un parcours jury complet." : "Ajouter une video courte montrant probleme, action, resultat et export."
    },
    {
      status: gptAnalysis.score >= 5 ? "ready" : "warning",
      title: "Trace GPT-5.6",
      body: gptAnalysis.score >= 5 ? "La reponse modele couvre assez de signaux pour etre citee." : "Coller une vraie reponse GPT-5.6 et verifier les signaux detectes."
    },
    {
      status: profile.kind === "magic-list" ? "ready" : "warning",
      title: "Cas reel",
      body: profile.kind === "magic-list" ? "Magic List ancre la demo dans un produit public." : "Charger Magic List pour montrer un cas d'usage concret."
    },
    {
      status: dimensions[3].value >= 80 ? "ready" : "warning",
      title: "Preuves jugeables",
      body: dimensions[3].value >= 80 ? "Les faits, hypotheses et recommandations sont separes." : "Expliciter ce qui est verifie, suppose et recommande."
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
      note: "Meta-outil qui rend visible tout le cycle Codex."
    },
    {
      label: "Execution",
      value: clampScore((byLabel.Prototype + byLabel.Evidence) / 2),
      note: "App locale, docs, repo, demo et export."
    },
    {
      label: "Story",
      value: byLabel.Story,
      note: "Promesse: du concept a une candidature soumettable."
    },
    {
      label: "Demo",
      value: byLabel.Demo,
      note: total >= 86 && gptAnalysis.score >= 5 ? "Ready to submit." : "Montrer clairement le probleme initial et la correction."
    }
  ];
}

function createTasks(scope, preset, profile, gptAnalysis) {
  const build = [
    ["Experience principale", `Creer le flux ${preset.surfaces[0].toLowerCase()} vers ${preset.surfaces[2].toLowerCase()}.`],
    ["Etat local", "Sauvegarder les parametres, le brief, la trace GPT-5.6 et les exports pour une demo reproductible."],
    ["Responsive", "Verifier que les panneaux critiques restent lisibles sur mobile et desktop."]
  ];
  const validate = [
    ["Parcours jury", "Tester une sequence complete de 90 secondes avec resultat exporte."],
    ["Accessibilite", "Verifier labels, focus visible, contraste et navigation clavier de base."],
    ["Robustesse", "Prevoir le brief vide, les textes longs, les categories changeantes et les reponses GPT incompletes."]
  ];
  const submit = [
    ["README", "Documenter l'objectif, le lancement local et les choix d'implementation."],
    ["Video demo", "Structurer le script autour du probleme, de la magie Codex, de GPT-5.6 et du resultat."],
    ["Devpost", "Preparer pitch, categorie, depot, session ID, trace GPT-5.6 et checklist finale."]
  ];

  if (profile.kind === "magic-list") {
    build.push(["Positionnement Magic List", "Transformer privacy, simplicite et achat unique en promesse produit nette."]);
    validate.push(["Verite App Store", "Ne garder que les faits publics verifies et isoler les hypotheses produit."]);
    submit.push(["Plan croissance", "Exporter ASO, onboarding, demo et roadmap en dossier actionnable."]);
  }

  if (gptAnalysis.score >= 4) {
    build.push(["Synthese modele", "Convertir les meilleurs signaux GPT-5.6 en decisions de scope."]);
  }

  if (scope === "etendu") {
    build.push(["Mode demo", "Ajouter une navigation automatique pour presenter le projet sans friction."]);
    validate.push(["Audit visuel", "Comparer les etats principaux apres generation et export."]);
    submit.push(["Dossier de presse", "Ajouter une version courte du pitch et une image de couverture."]);
  }

  return { build, validate, submit };
}

function createArchitecture(preset, keywords, profile) {
  const tags = keywords.length ? keywords.join(", ") : "brief, plan, qualite";
  const inputBody =
    profile.kind === "magic-list"
      ? `Capture le brief et les faits publics Magic List: ${profile.facts.join(", ")}.`
      : `Capture le brief, la categorie, le delai et l'ambition. Signaux detectes: ${tags}.`;

  return [
    {
      chip: "Input",
      title: preset.surfaces[0],
      body: inputBody
    },
    {
      chip: "GPT-5.6",
      title: "Model studio",
      body: "Prepare un prompt structure, recoit la reponse GPT-5.6 et transforme les signaux du modele en choix produit."
    },
    {
      chip: "Execution",
      title: preset.surfaces[2],
      body: "Convertit le plan en taches, risques, garde-fous et criteres de verification."
    },
    {
      chip: "Output",
      title: preset.surfaces[3],
      body: "Produit le pitch, le script demo, la checklist, la trace GPT-5.6 et un export Markdown partageable."
    }
  ];
}

function createGptPrompt(preset, summary, scope, profile) {
  const facts = profile.facts.length ? profile.facts.map((fact) => `- ${fact}`).join("\n") : "- Aucun fait externe verifie. Base-toi seulement sur le brief.";

  return `Tu es GPT-5.6. Analyse ce projet comme un jury produit, design et implementation.

Contexte
- Projet: ${profile.label}
- Categorie Build Week: ${state.category}
- Audience: ${preset.audience}
- Perimetre: ${scope}
- Brief: ${summary}

Faits publics verifies
${facts}

Ta mission
1. Trouver le positionnement le plus distinctif.
2. Proposer 5 ameliorations a fort impact, classees par effort.
3. Ecrire un script de demo de moins de 3 minutes.
4. Identifier les risques de soumission et de produit.
5. Separar clairement les faits verifies, les hypotheses et les recommandations.

Format attendu
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
      title: "Positionnement",
      terms: ["positioning", "positionnement", "promise", "promesse", "niche"],
      ready: "La reponse formule une promesse distinctive.",
      missing: "Demander une phrase de positionnement plus nette."
    },
    {
      title: "Vie privee",
      terms: ["privacy", "private", "prive", "no tracking", "sans tracking", "on device", "local"],
      ready: "La promesse de confidentialite est exploitable.",
      missing: "Faire expliciter l'avantage no account, no tracking, donnees locales."
    },
    {
      title: "Roadmap",
      terms: ["feature", "roadmap", "amelioration", "template", "import", "export"],
      ready: "La reponse contient des pistes produit concretes.",
      missing: "Demander des ameliorations classees par effort et impact."
    },
    {
      title: "App Store",
      terms: ["app store", "aso", "screenshot", "screenshots", "onboarding"],
      ready: "La reponse peut nourrir la fiche App Store et l'onboarding.",
      missing: "Demander une strategie ASO et des idees de captures."
    },
    {
      title: "Demo",
      terms: ["demo", "story", "script", "minute", "30 seconds"],
      ready: "La reponse donne une histoire de demo filmable.",
      missing: "Demander un script de demo de moins de 3 minutes."
    },
    {
      title: "Risques",
      terms: ["risk", "risque", "avoid", "crowded", "subscription", "complex"],
      ready: "Les risques sont identifies et actionnables.",
      missing: "Demander les objections probables d'un jury."
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
    return "Trace GPT-5.6\nA completer: coller une reponse GPT-5.6 dans le studio pour documenter les decisions issues du modele.";
  }

  return `Trace GPT-5.6
Signaux detectes: ${ready.join(", ") || "a verifier"}.
La reponse GPT-5.6 a ete utilisee comme materiau de decision, puis Codex Potential Lab l'a convertie en taches, risques, architecture et texte de soumission.`;
}

function createSubmission(preset, summary, scope, score, profile, gptAnalysis) {
  const magicContext =
    profile.kind === "magic-list"
      ? `
Cas Magic List
Magic List est utilise comme app test: une to-do list iPhone/iPad simple et privee, sans publicite, sans compte, sans tracking, avec 3 listes gratuites, Premium en achat unique et donnees conservees sur l'appareil. L'objectif est de transformer ces faits en positionnement, roadmap, onboarding et demo.`
      : "";

  return `Titre
${preset.title}

Categorie
${state.category}

Pitch
${preset.title} aide ${preset.audience} a transformer un brief en prototype demonstrable, plan de construction, preuves de qualite et dossier de soumission.

Description
Le projet part d'une idee brute: ${summary}. L'application montre comment Codex peut cadrer le probleme, decomposer l'architecture, organiser l'execution, anticiper les risques, exploiter une reponse GPT-5.6 et produire une candidature claire dans un temps court. Le resultat est local, testable et exportable.${magicContext}

Ce qui montre le potentiel de Codex
- Passage d'un brief naturel a un plan operationnel.
- Interface complete creee comme produit, pas seulement comme maquette.
- Studio GPT-5.6: prompt structure, reponse collee, analyse des signaux et trace exportable.
- Generation de taches, risques, architecture et texte de soumission.
- Documentation et dossier jury directement inclus.
- Version autonome qui fonctionne sans compte ni installation complexe.

${createGptEvidenceSection(gptAnalysis)}

Plan demo
1. Entrer un brief ou charger le cas Magic List.
2. Choisir la categorie et l'ambition.
3. Ouvrir GPT-5.6 Studio, copier le prompt, coller une reponse GPT-5.6 et l'analyser.
4. Montrer architecture, qualite, checklist et trace GPT-5.6.
5. Exporter le dossier Markdown.

Niveau de preparation
Score interne: ${score}/99
Perimetre: ${scope}

Liens a completer
Depot:
Video YouTube:
Demo en ligne:
Session ID Codex:`;
}

function render() {
  const model = buildModel();
  const { preset, summary, score } = model;

  elements.title.textContent = preset.title;
  elements.pitch.textContent = `${summary} Un systeme local transforme l'intention en actions, risques, architecture, trace GPT-5.6 et dossier jury.`;
  elements.outcome.textContent = `En ${state.deadline} heures, ${preset.title} vise une preuve de valeur complete pour ${preset.audience}: un flux utile, une implementation claire, une demo fluide, une trace GPT-5.6 et une soumission credible.`;
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
    ["Construire", tasks.build],
    ["Verifier", tasks.validate],
    ["Soumettre", tasks.submit]
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

## Reponse GPT-5.6

${state.gptResponse.trim() || "A completer avec une vraie reponse GPT-5.6."}

## Analyse GPT-5.6

${model.gptAnalysis.cards.map((card) => `- ${card.title}: ${card.body}`).join("\n")}

## Submission Readiness Score

Score total: ${model.readiness.total}/99

${model.readiness.dimensions.map((item) => `- ${item.label}: ${item.value}/99 - ${item.note}`).join("\n")}

## Build Gap Finder

${model.readiness.gaps.map((item) => `- ${item.title}: ${item.body}`).join("\n")}

## Judge Simulation

${model.readiness.judge.map((item) => `- ${item.label}: ${item.value}/99 - ${item.note}`).join("\n")}

## Architecture

${model.architecture.map((node) => `### ${node.title}\n${node.body}`).join("\n\n")}

## Taches

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
  showToast("Export Markdown genere.");
}

async function copyPrompt() {
  const prompt = elements.gptPrompt.value;
  try {
    await navigator.clipboard.writeText(prompt);
  } catch {
    elements.gptPrompt.select();
    document.execCommand("copy");
  }
  showToast("Prompt GPT-5.6 copie.");
}

function loadMagicListCase() {
  elements.brief.value = magicListCase.brief;
  elements.category.value = "Apps for your life";
  elements.deadline.value = "48";
  elements.ambition.value = "5";
  elements.gptResponse.value = magicListCase.sampleGptResponse;
  render();
  activateView("gpt");
  showToast("Cas Magic List charge.");
}

function loadSampleGptResponse() {
  elements.gptResponse.value = magicListCase.sampleGptResponse;
  render();
  showToast("Exemple GPT-5.6 charge.");
}

function startDemoMode() {
  const ids = elements.views.map((view) => view.id);
  stopDemoMode();
  state.demoIndex = 0;
  activateView(ids[0]);
  elements.demo.textContent = "Arreter demo";
  state.demoTimer = window.setInterval(() => {
    state.demoIndex = (state.demoIndex + 1) % ids.length;
    activateView(ids[state.demoIndex]);
  }, 2200);
  showToast("Mode demo actif.");
}

function stopDemoMode() {
  if (state.demoTimer) {
    window.clearInterval(state.demoTimer);
    state.demoTimer = null;
    elements.demo.innerHTML = '<span aria-hidden="true">▶</span> Mode demo';
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
  localStorage.setItem("codexPotentialLab", JSON.stringify(snapshot));
}

function restoreState() {
  const raw = localStorage.getItem("codexPotentialLab");
  if (!raw) return;

  try {
    const saved = JSON.parse(raw);
    elements.brief.value = saved.brief || elements.brief.value;
    elements.category.value = saved.category || elements.category.value;
    elements.deadline.value = saved.deadline || elements.deadline.value;
    elements.ambition.value = saved.ambition || elements.ambition.value;
    elements.gptResponse.value = saved.gptResponse || elements.gptResponse.value;
  } catch {
    localStorage.removeItem("codexPotentialLab");
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
  showToast("Plan regenere.");
});

elements.demo.addEventListener("click", () => {
  if (state.demoTimer) {
    stopDemoMode();
    showToast("Mode demo arrete.");
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
  showToast("Reponse GPT-5.6 analysee.");
});

[elements.brief, elements.category, elements.deadline, elements.ambition].forEach((element) => {
  element.addEventListener("input", render);
});

restoreState();
render();
