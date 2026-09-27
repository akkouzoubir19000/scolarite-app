# Cahier des charges initial

## Périmètre

La première version cible un établissement pouvant gérer le primaire, le CEM et le lycée. Le produit doit rester configurable par année scolaire et par cycle.

## Modules prioritaires

1. Utilisateurs, rôles et permissions.
2. Établissement, année scolaire et calendrier.
3. Élèves, responsables légaux et inscriptions.
4. Enseignants, matières et classes.
5. Évaluations, notes sur 20 et validation.
6. Absences et retards.
7. Bulletins PDF et publication contrôlée.
8. Annonces et communication parents-école.

## Règles métier

- Les notes acceptées sont comprises entre 0 et 20, avec décimales configurables.
- Une note conserve son auteur, sa date, son statut et son historique de modification.
- Les coefficients et formules de moyenne sont paramétrables ; ils ne doivent pas être codés en dur.
- Un parent ne voit que les élèves qui lui sont associés.
- Les bulletins ne sont visibles par les parents qu'après publication par un utilisateur habilité.
- Les modèles de bulletins doivent supporter le français, l'arabe et l'affichage RTL.
- Toute règle réglementaire doit être vérifiée avec les textes algériens en vigueur avant production.

## Hors périmètre initial

- Connexion automatique à une plateforme ministérielle sans spécification officielle d'intégration.
- Paiement en ligne.
- Application mobile native.

## Critères d'acceptation MVP

- Un administrateur peut créer une année scolaire, une classe, une matière et un utilisateur.
- Un secrétariat peut inscrire un élève et lui associer un responsable légal.
- Un enseignant peut saisir puis soumettre des notes.
- La direction peut valider les notes et publier un bulletin.
- Un parent authentifié peut consulter uniquement les données de son enfant.
- Les actions sensibles sont présentes dans un journal d'audit.
