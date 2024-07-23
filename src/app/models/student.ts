export interface Student {
    studentId: number;
    name: string;
    birthDate: string;
    address: string;
    phoneNumber: string;
    email: string;
    classId: number;
    className: string;
  }
  export interface AddStudent {
    name: string;
    birthDate: string;
    address: string;
    phoneNumber: string;
    email: string;
    classId: number;
  }
  export interface UpdateStudent {
    studentId: number;
    name: string;
    birthDate: string;
    address: string;
    phoneNumber: string;
    email: string;
    classId: number;
  }
  