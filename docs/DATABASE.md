# Modèle de données initial

Les noms sont indicatifs et pourront être adaptés à l'ORM retenu.

```text
schools
  id, name, address, wilaya, logo_url
academic_years
  id, school_id, label, starts_on, ends_on, status
users
  id, school_id, email, password_hash, role, status
students
  id, school_id, student_number, first_name, last_name, first_name_ar, last_name_ar, birth_date
guardians
  id, user_id, first_name, last_name, phone
student_guardians
  student_id, guardian_id, relationship, is_legal_representative
school_classes
  id, academic_year_id, level, section, room, capacity
enrollments
  id, student_id, class_id, enrolled_on, status
teachers
  id, user_id, employee_number, first_name, last_name
subjects
  id, school_id, code, name, name_ar
subject_coefficients
  id, academic_year_id, subject_id, level, coefficient
assessments
  id, class_id, subject_id, term, title, assessment_date, max_score
grades
  id, assessment_id, student_id, score, status, submitted_by, validated_by
attendance_records
  id, student_id, class_id, occurred_at, kind, justified, reason
report_cards
  id, student_id, academic_year_id, term, status, published_at, published_by
audit_logs
  id, actor_id, action, entity_type, entity_id, created_at, metadata
```

## Contraintes importantes

- Un `score` doit être compris entre 0 et 20 pour le barème standard.
- Un élève ne doit avoir qu'une inscription active par année scolaire.
- Une note validée ne peut être modifiée que par un rôle autorisé, avec audit obligatoire.
- Les identifiants et index doivent être ajoutés sur les clés étrangères et les recherches fréquentes.
