export interface Teacher {
    teacherId: number;
    name: string;
    birthDate: string;
    address: string;
    phoneNumber: string;
    email: string;
    subjectId: number;
    subjectName: string;
    
}
export interface AddTeacher {
  name: string;
  birthDate: string;
  address: string;
  phoneNumber: string;
  email: string;
  subjectId: number;
}
export interface UpdateTeacher {
  teacherId: number;
  name: string;
  birthDate: string;
  address: string;
  phoneNumber: string;
  email: string;
  subjectId: number;
}