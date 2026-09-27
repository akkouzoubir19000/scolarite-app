import { CreateStudentDto } from './dto/create-student.dto';

export class StudentsService {
  private students = [
    {
      id: '1',
      firstName: 'Amine',
      lastName: 'Bensaid',
      level: '3AM',
      className: '3AM1',
      status: 'actif',
    },
    {
      id: '2',
      firstName: 'Nadia',
      lastName: 'Khelifi',
      level: '2AS',
      className: '2AS-A',
      status: 'actif',
    },
  ];

  findAll() {
    return this.students;
  }

  findOne(id: string) {
    return this.students.find((student) => student.id === id) ?? null;
  }

  create(dto: CreateStudentDto) {
    const newStudent = {
      id: String(Date.now()),
      ...dto,
      status: 'actif',
    };
    this.students.push(newStudent);
    return newStudent;
  }
}
