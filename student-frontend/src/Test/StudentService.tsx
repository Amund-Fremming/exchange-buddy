import axios from 'axios';

const STUDENT_REST_API_URL: string = 'http://localhost:8080/api/student';

export interface Student {
    name: string;
    studentnr: number;
}

class StudentService {

    getStudents() {
        return axios.get(STUDENT_REST_API_URL);
    };

    postStudent(stud: Student) {
        return axios.post(STUDENT_REST_API_URL, stud);
    }

};
 
// eslint-disable-next-line
export default new StudentService();