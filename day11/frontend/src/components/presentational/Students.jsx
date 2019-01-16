import React, { Component } from 'react';

class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            tempStudents: []
        }
    }
    
    componentDidMount(){
        fetch('http://localhost:5000/Students')
        .then(res => res.json())
        .then(data => {
            this.setState({ students: data })
        })
    }

    render() {
        const studentList = this.state.students.map(student => (
            <div className="card">
                <img src={student.imageUrl}/>
                <div className="information">
                    <h1> Name: {student.firstName} {student.lastName} </h1>
                    <h2> Email: {student.email} </h2>
                    <h3> GPA: {student.gpa} </h3>
                </div>
            </div>
        ))
        return (
            <div>
                <h3><strong><u>Students</u></strong></h3>
                {studentList}
            </div>
        );
    }
}

export default Students;