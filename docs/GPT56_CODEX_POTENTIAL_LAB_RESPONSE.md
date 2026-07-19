# Analyse du projet (sur la seule base du brief fourni)

## Faits vérifiés

- **Nom du projet** : Projet
- **Catégorie Build Week** : Developer tools
- **Audience** : makers, équipes produit et développeurs
- **Brief** : créer un assistant de candidature qui aide les fondateurs, étudiants et makers à transformer une idée en prototype, dossier de soumission et démo.
- **Aucun autre fait n'est vérifié.**

---

# Positioning

## Faits vérifiés

Le produit aide à transformer une idée en :
- un prototype,
- un dossier de soumission,
- une démo.

## Hypothèses

Le principal problème n'est probablement pas de générer du texte, mais de guider l'utilisateur jusqu'à une candidature suffisamment solide pour être déposée.

Le marché contient vraisemblablement déjà de nombreux assistants généralistes capables de rédiger une candidature. (Cette affirmation n'est **pas** utilisée comme fait, car aucune comparaison externe n'est fournie.)

## Recommandation

Le positionnement le plus distinctif serait :

> **"Du concept à une candidature réellement soumettable."**

Autrement dit :

Le produit ne rédige pas seulement.

Il :

- transforme une idée floue,
- identifie les éléments manquants,
- construit le prototype,
- prépare la démonstration,
- vérifie que le dossier est cohérent avant soumission.

Le différenciateur devient alors :

> **un copilote de soumission**, pas un générateur de texte.

---

# Feature bets

## 1. Submission Readiness Score (effort : faible — impact : très élevé)

Avant toute génération :

Le système répond :

- Prototype suffisant ?
- Démo convaincante ?
- Histoire claire ?
- Problème identifié ?
- Différenciation visible ?
- Risques expliqués ?

Puis affiche :

> Ready: 72 %

avec les raisons.

---

## 2. Build Gap Finder (effort : faible à moyen — impact : très élevé)

Le système compare :

Idée

↓

Critères implicites d'une bonne candidature

↓

Liste des éléments manquants.

Exemple :

- pas de métriques
- pas de capture
- pas de GIF
- pas de scénario utilisateur
- pas de preuve de valeur

L'utilisateur sait immédiatement quoi construire.

---

## 3. Demo Generator (effort : moyen — impact : élevé)

À partir du prototype :

production automatique de :

- script de démonstration
- plan vidéo
- ordre des écrans
- narration

Cela réduit énormément le temps de préparation.

---

## 4. Multi-output Submission Pack (effort : moyen — impact : élevé)

En une action :

générer :

- résumé court
- résumé long
- pitch
- README
- landing page
- FAQ
- changelog
- script vidéo

Le même contenu est adapté à chaque support.

---

## 5. Judge Simulation (effort : élevé — impact : très élevé)

L'IA joue le rôle d'un jury.

Elle attribue une note :

- Originalité
- Exécution
- Clarté
- Impact
- Démo
- Faisabilité

Puis explique pourquoi.

C'est probablement la fonctionnalité la plus mémorable.

---

# App Store and onboarding

## Faits vérifiés

Le produit cible :

- fondateurs
- étudiants
- makers

## Hypothèses

Ces profils arrivent généralement avec une idée incomplète.

## Recommandations

L'onboarding devrait commencer par une seule question :

> "Quelle est ton idée ?"

Ensuite le produit construit progressivement :

```
Idée

↓

Utilisateurs

↓

Problème

↓

Solution

↓

Prototype

↓

Démo

↓

Soumission
```

Éviter un formulaire long.

À la fin, afficher une vue unique :

```
✅ Prototype

⚠ Démo

⚠ Screenshots

✅ Pitch

⚠ FAQ

✅ Description

Ready: 78%
```

Cette vue devient le tableau de bord principal.

---

# Demo story

Durée cible : environ 2 min 30 s.

### 0:00

"J'ai une idée."

Une phrase suffit.

---

### 0:15

L'assistant pose quelques questions.

En moins d'une minute, il produit :

- pitch
- structure
- prototype proposé

---

### 0:50

Le produit indique :

> Il manque encore trois éléments avant de pouvoir soumettre.

Il liste précisément :

- captures
- scénario utilisateur
- démonstration

---

### 1:30

Après validation :

génération automatique de :

- dossier
- README
- page de présentation
- script vidéo
- checklist

---

### 2:10

Simulation d'un jury.

Résultat :

```
Innovation

8.7

Execution

7.8

Story

9.1

Demo

6.4

```

Le produit explique :

> "Votre démo ne montre jamais clairement le problème initial."

L'utilisateur corrige.

---

### 2:45

Le score passe à :

```
Ready

94%
```

Puis le produit affiche :

> Ready to submit.

Fin.

---

# Risks

## Faits vérifiés

Aucun risque spécifique ne peut être déduit du brief seul.

## Hypothèses

Les risques suivants sont plausibles pour un produit de ce type.

### Risque produit

Le produit peut devenir un simple générateur de texte si l'accent est mis principalement sur la rédaction.

### Recommandation

Faire de la **validation** la proposition de valeur principale, et non de la génération.

---

### Risque de différenciation

Le produit peut sembler interchangeable avec un assistant conversationnel généraliste.

### Recommandation

Concentrer la valeur sur :

- l'évaluation,
- les lacunes détectées,
- la préparation à la soumission,
- la simulation d'un jury.

---

### Risque d'expérience utilisateur

Le produit pourrait demander trop d'informations dès le départ.

### Recommandation

Construire la candidature de façon incrémentale, avec une progression visible et des gains rapides.

---

### Risque de crédibilité

Si les évaluations ("score", "prêt à soumettre") paraissent arbitraires, les utilisateurs risquent de ne pas leur faire confiance.

### Recommandation

Rendre chaque score explicable : chaque note doit être accompagnée des critères utilisés et des éléments observés dans le projet.

---

### Risque de périmètre

Le brief couvre plusieurs livrables (prototype, dossier, démo), ce qui peut conduire à un produit très large.

### Recommandation

Pour une première version, viser une promesse simple :

> **Transformer une idée en une candidature complète et cohérente**, avec un tableau de progression et une validation finale, plutôt que chercher à couvrir tous les besoins liés au développement du produit.