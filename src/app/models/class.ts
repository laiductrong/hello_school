export interface Class {
    classId: number;
    className: string;
    yearId: number;
    yearName: string;
    teacherId: number;
    teacherName: string;
}
export interface UpdateClass{
  classId: number;
  className: string;
  yearId: number;
  teacherId: number;
}
export interface AddClass{
  className: string;
  yearId: number;
  teacherId: number;
}