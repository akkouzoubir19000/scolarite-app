# 📚 Scolarité Algérie

Application web de gestion scolaire pour les écoles primaires, CEM et lycées algériens.

> Le projet est conçu pour être configurable : niveaux, matières, coefficients, calendrier et modèles de bulletins ne sont pas codés en dur. Toute règle officielle doit être vérifiée avec les textes et circulaires en vigueur avant mise en production.

## Objectifs

- Gestion des élèves, parents, enseignants et inscriptions
- Classes, matières, affectations et emplois du temps
- Absences, retards et justificatifs
- Évaluations et notes sur 20
- Calcul configurable des moyennes
- Bulletins PDF bilingues français/arabe
- Communication établissement–parents
- Contrôle d'accès et journal d'audit

## Architecture prévue

```text
frontend/   React + TypeScript + Vite
backend/    NestJS + TypeScript
 database/  PostgreSQL et migrations
 docs/       spécifications et règles métier
```

## Démarrage prévu

Les premiers modules seront ajoutés progressivement. Une fois l'ossature installée :

```bash
npm install
npm run dev
```

## Principes importants

1. **Configuration par année scolaire** : les coefficients, calendriers, niveaux et modèles de bulletins doivent pouvoir évoluer.
2. **Validation des notes** : une note possède un état brouillon, soumise, validée ou publiée ; chaque modification est auditée.
3. **Confidentialité** : un parent ne consulte que les élèves qui lui sont associés ; les données des mineurs sont protégées par rôle et permissions.
4. **Bilinguisme** : français et arabe, avec support RTL.
5. **Conformité à vérifier** : les bulletins, formules, calendriers et obligations relatives aux données personnelles doivent être validés auprès des autorités et textes algériens applicables.

## Modules du MVP

- Authentification et rôles : administrateur, direction, secrétariat, enseignant, surveillant, parent, élève
- Années scolaires et établissements
- Élèves, responsables légaux et inscriptions
- Classes et matières
- Saisie des évaluations et notes
- Présences et absences
- Génération et publication des bulletins

## Documentation

- [Cahier des charges](docs/CAHIER_DES_CHARGES.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Modèle de données](docs/DATABASE.md)
- [Sécurité et conformité](docs/SECURITE_CONFORMITE.md)

## Licence

MIT
