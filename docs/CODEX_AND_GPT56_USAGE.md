# Codex and GPT-5.6 Usage

## Codex

Codex was used to create Codex Potential Lab from a blank workspace.

Codex contributed to:

- product framing;
- HTML/CSS/JavaScript implementation;
- responsive interface design;
- local export workflow;
- GPT-5.6 Studio workflow;
- Magic List case study integration;
- generated visual asset integration;
- README and documentation;
- Devpost submission draft;
- video script and checklist.

## GPT-5.6

GPT-5.6 is included as an explicit workflow inside the app.

The app does not store API keys or call the OpenAI API from the browser. Instead, it uses a safer copy/paste loop:

1. Codex Potential Lab generates a structured GPT-5.6 prompt.
2. The builder sends that prompt to GPT-5.6 in an authorized environment.
3. The builder pastes the response back into Codex Potential Lab.
4. The app analyzes the response for product and submission signals.
5. The result is included in the exportable submission pack.

## Evidence to add before final submission

- Paste a real GPT-5.6 response into the Studio.
- Export the Markdown pack.
- Include the Codex `/feedback` session ID.
- Keep dated commits showing the project was created or meaningfully extended during the submission period.
- Use `docs/GPT56_MAGIC_LIST_PROMPT.md` as the ready-to-copy prompt for the Magic List proof case.
