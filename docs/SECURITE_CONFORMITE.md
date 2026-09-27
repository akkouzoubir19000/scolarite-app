# Sécurité et conformité

Cette application traite des données de mineurs et des résultats scolaires. Avant déploiement, l'établissement doit faire valider le traitement, la conservation et les droits d'accès selon la réglementation algérienne applicable.

## Mesures techniques minimales

- HTTPS obligatoire en production.
- Mots de passe hashés avec Argon2id ou bcrypt.
- MFA recommandé pour la direction et les administrateurs.
- Permissions vérifiées côté API sur chaque ressource.
- Cookies sécurisés ou tokens avec durée de vie courte.
- Chiffrement des sauvegardes et des documents sensibles.
- Journal d'audit des connexions, exports, modifications de notes et publications.
- Sauvegarde testée et procédure de restauration documentée.
- Aucun secret dans Git, les logs ou les messages d'erreur.
- Limitation de taille et analyse des fichiers téléversés.

## Gouvernance

- Définir les responsables du traitement et les administrateurs habilités.
- Documenter les finalités et la durée de conservation.
- Restreindre les données médicales et autres données sensibles au besoin strict.
- Prévoir la correction des données et la gestion des demandes des responsables légaux.
- Vérifier séparément les exigences officielles relatives aux bulletins, calendriers, coefficients et échanges avec les plateformes publiques.
