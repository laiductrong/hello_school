export interface Grade {
    gradeId: number;
    studentId: number;
    studentName: string;
    teacherId: number;
    teacherName: string;
    subjectName: string;
    score: number;
    yearId: number;
    yearName: string;
}
export interface AddGrade {
    studentId: number;
    teacherId: number;
    score: number;
    yearId: number;
}
export interface UpdateGrade {
    gradeId: number;
    studentId: number;
    teacherId: number;
    score: number;
    yearId: number;
}