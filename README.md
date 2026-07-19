# Codex Potential Lab

Codex Potential Lab est une application web locale qui montre comment Codex peut transformer une idee brute en projet presentable: brief, architecture, plan d'execution, risques, checklist, script de demo et texte de soumission.

## Lancer le projet

Ouvrir `index.html` dans un navigateur moderne.

Aucune installation n'est necessaire. Le projet utilise seulement HTML, CSS et JavaScript natif.

## Ce que le projet demontre

- Cadrage d'un brief naturel en objectif produit.
- Studio GPT-5.6: generation d'un prompt structure, collage d'une reponse GPT-5.6, analyse locale des signaux et trace exportable.
- Generation interactive de surfaces produit, taches, risques et garde-fous.
- Interface responsive, accessible et utilisable comme cockpit de preparation.
- Export Markdown pour preparer une candidature Devpost ou un dossier interne.
- Asset visuel cree pour le projet et integre localement.
- Cas test Magic List a charger en un clic pour transformer une app existante en plan de croissance, ASO, onboarding et demo.

## Parcours de demo

1. Modifier le brief dans le panneau superieur.
2. Choisir une categorie, un delai et un niveau d'ambition.
3. Ouvrir GPT-5.6 Studio, copier le prompt, puis coller une vraie reponse GPT-5.6 ou charger l'exemple Magic List.
4. Observer la mission, l'architecture, le tableau qualite, les signaux GPT-5.6 et le texte de soumission.
5. Activer le mode demo pour presenter les sections automatiquement.
6. Exporter le dossier Markdown.

## Cas test Magic List

Le bouton `Magic List` charge un brief base sur la fiche publique App Store de Magic List: Simple To-Do:

- app iPhone et iPad de productivite;
- no ads;
- no account;
- no tracking;
- 3 lists free;
- Premium avec achat unique;
- donnees conservees sur l'appareil.

La source publique est documentee dans `data/magic-list-public-facts.json`.

## Structure

- `index.html`: structure de l'application.
- `styles.css`: design responsive.
- `app.js`: logique de generation locale, export et mode demo.
- `assets/codex-workspace.png`: visuel bitmap cree avec la competence imagegen de Codex.
- `data/magic-list-public-facts.json`: faits publics utilises pour le cas test Magic List.
- `docs/DEVPOST_SUBMISSION.md`: texte pret a adapter pour Devpost.
- `docs/VIDEO_SCRIPT.md`: script de demo de moins de 3 minutes.
- `docs/CODEX_AND_GPT56_USAGE.md`: trace narrative de l'usage Codex et GPT-5.6.
- `docs/MAGIC_LIST_BEFORE_AFTER.md`: rapport avant/apres pour le cas test Magic List.
- `docs/FINAL_CHECKLIST.md`: checklist finale avant soumission.

## Notes de soumission

Le projet est volontairement autonome pour faciliter l'evaluation. Pour une soumission Devpost, ajouter:

- lien de depot;
- video demo publique;
- session ID Codex via `/feedback`;
- trace GPT-5.6 reelle: prompt, reponse et decisions integrees;
- capture ou demo en ligne;
- licence si le depot est public.

## Limite volontaire

L'application ne stocke aucune cle API et n'appelle pas directement l'API OpenAI depuis le navigateur. Le studio est concu pour un workflow sur: copier le prompt, interroger GPT-5.6 dans l'environnement autorise, coller la reponse, puis laisser Codex Potential Lab la transformer en decisions et dossier.

## Preparation GitHub

Ce dossier est pret a devenir un depot GitHub. Avant publication, choisir:

- visibilite du depot: public ou prive;
- licence: MIT, Apache-2.0, autre, ou aucune licence publique;
- URL de demo optionnelle si le projet est heberge;
- vraie session ID Codex obtenue avec `/feedback`;
- vraie trace GPT-5.6 a coller dans le Studio.
