# Architecture

## Choix techniques

- Frontend : React, TypeScript et Vite.
- API : NestJS et TypeScript.
- Base : PostgreSQL.
- Authentification : sessions JWT courtes et renouvellement sécurisé.
- Documents : stockage privé, téléchargement via URL temporaire.

## Découpage

```text
frontend/
  src/modules/auth
  src/modules/students
  src/modules/grades
  src/modules/reports
backend/
  src/modules/auth
  src/modules/students
  src/modules/grades
  src/modules/reports
  src/modules/audit
database/
  migrations/
docs/
```

## Principes

- API versionnée (`/api/v1`).
- Autorisation côté serveur, jamais uniquement dans l'interface.
- Validation de toutes les entrées avec un schéma partagé ou explicite.
- Transactions pour inscription, validation des notes et publication des bulletins.
- Journalisation des opérations sensibles sans enregistrer de secrets.
- Suppression logique ou archivage des dossiers soumis à conservation.
