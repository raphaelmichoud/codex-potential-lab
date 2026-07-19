# Codex Potential Lab

Codex Potential Lab is a Codex-built project cockpit for turning a rough idea or existing product into a clearer product plan, architecture, quality checklist, GPT-5.6 trace, demo story, and submission package.

It is intentionally simple to run: open `index.html` in a browser. No install, no account, no server, no API key in the browser.

## Demo

Open `index.html`, then:

1. Edit the brief.
2. Pick a category, deadline, and ambition level.
3. Open **GPT-5.6 Studio**.
4. Copy the generated prompt to GPT-5.6.
5. Paste the GPT-5.6 response back into the app.
6. Review the mission, architecture, quality plan, risks, and submission copy.
7. Export the Markdown submission pack.

The **Magic List** button loads a real-world proof case based on public App Store facts for Magic List: Simple To-Do.

## Why It Exists

Many builders can create a prototype, but struggle to explain it clearly. Codex Potential Lab focuses on the missing layer between building and submitting:

- What is the product?
- Why does it matter?
- How does it work?
- What should be built next?
- What risks should be named?
- How did Codex and GPT-5.6 contribute?
- What should go into the final submission?

## What It Demonstrates

- Natural-language brief to product framing.
- Generated mission, timeline, architecture, task board, and risk register.
- GPT-5.6 Studio with prompt generation, pasted response analysis, and exportable evidence.
- Submission Readiness Score, Build Gap Finder, and Judge Simulation added after a real GPT-5.6 critique.
- Real-world case study with Magic List.
- Markdown export for Devpost or internal project reviews.
- Local-first execution with no hidden cloud dependency.
- A complete submission pack, not just a prototype.

## Magic List Case Study

Magic List was not built with Codex Potential Lab. It already existed before this project.

It is used as a realistic test case to show how Codex Potential Lab can analyze an existing product and produce:

- sharper positioning;
- roadmap ideas;
- App Store and onboarding recommendations;
- a short demo story;
- product and submission risks.

Public facts used by the app live in `data/magic-list-public-facts.json`.

## Project Structure

- `index.html`: app structure.
- `styles.css`: responsive UI.
- `app.js`: local generation, GPT-5.6 Studio, Magic List case, export, and demo mode.
- `assets/codex-workspace.png`: generated visual asset integrated into the app.
- `data/magic-list-public-facts.json`: public facts used for the Magic List case.
- `SUBMISSION.md`: compact submission summary.
- `docs/DEVPOST_SUBMISSION.md`: Devpost draft.
- `docs/DEVPOST_FIELDS.md`: copy/paste Devpost fields.
- `docs/VIDEO_SCRIPT.md`: under-3-minute video script.
- `docs/DEMO_WALKTHROUGH.md`: screen-by-screen demo instructions.
- `docs/CODEX_AND_GPT56_USAGE.md`: Codex and GPT-5.6 usage narrative.
- `docs/GPT56_CODEX_POTENTIAL_LAB_RESPONSE.md`: real GPT-5.6 critique used to improve the project.
- `docs/MAGIC_LIST_BEFORE_AFTER.md`: before/after report for Magic List.
- `docs/FINAL_CHECKLIST.md`: final submission checklist.

## How Codex And GPT-5.6 Are Used

Codex created the project structure, interface, local app logic, documentation, Magic List case study, generated asset integration, GitHub-ready repository, and submission materials.

GPT-5.6 is represented through an explicit copy/paste workflow:

1. Codex Potential Lab generates a structured GPT-5.6 prompt.
2. The builder sends that prompt to GPT-5.6 in an authorized environment.
3. The builder pastes the response back into the app.
4. Codex Potential Lab analyzes the response for product and submission signals.
5. The result becomes part of the exportable submission pack.

The app does not store API keys and does not call the OpenAI API directly from the browser.

The real GPT-5.6 response in `docs/GPT56_CODEX_POTENTIAL_LAB_RESPONSE.md` recommended shifting the product away from simple text generation and toward validation. That directly informed three added features:

- Submission Readiness Score;
- Build Gap Finder;
- Judge Simulation.

## Recommended Devpost Category

Developer Tools.

The project helps builders create better product plans, demos, and submissions.

## Final Items Before Submission

- Paste the real GPT-5.6 response in the Studio during the demo.
- Export the Markdown pack.
- Record a public YouTube demo under 3 minutes.
- Add the Codex `/feedback` session ID.
- Submit the GitHub repo, demo link, video link, and submission text on Devpost.
