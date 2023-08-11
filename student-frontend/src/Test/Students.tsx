import React, { useState, useEffect } from "react";
import StudentService, { Student } from "./StudentService";
import { AxiosResponse } from "axios";

const Students: React.FC = () => {

    const [students, setStudents] = useState<Student[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
       getData();

    }, [loading]);

    const getData = async () => {
        await StudentService.getStudents().then((response: AxiosResponse<Student[]>) => {
            setStudents(response.data);
            console.log(response.data);
        })
        setLoading(true);
    }

    if(!loading) {
        return <div>Loading</div>
    } else {
        return(
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Studentnummer</th>
                        </tr>
                </thead>
                <tbody>
                    {
                        students.map((stud: Student) => {
                            return(
                                <tr key={stud.studentnr}>
                                    <td>{stud.name}</td>
                                    <td>{stud.studentnr}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                </table>
            
            </>
        );
    }
}

export default Students;