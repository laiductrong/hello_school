export interface Grade {
    gradeId: number;
    studentId: number;
    studentName: string;
    teacherId: number;
    teacherName: string;
    subjectName: string;
    score: number;
}
export interface AddGrade {
    studentId: number;
    teacherId: number;
    score: number;
    yearId: number;
}