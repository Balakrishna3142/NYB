import React from "react";

import {
  Link
} from "react-router-dom";

import StudentCard
  from "../components/StudentCard";


class Students extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      showStudents: true
    };

  }


  toggleStudents = () => {

    this.setState({
      showStudents:
        !this.state.showStudents
    });

  };


  render() {

    const students = [

      {
        id: 1,
        name: "Ravi",
        age: 21,
        marks: 80
      },

      {
        id: 2,
        name: "Kiran",
        age: 22,
        marks: 30
      },

      {
        id: 3,
        name: "Sita",
        age: 20,
        marks: 90
      }

    ];


    return (
      <div>

        <h1>
          Students
        </h1>

        <button
          onClick={this.toggleStudents}
        >
          {this.state.showStudents
            ? "Hide Students"
            : "Show Students"}
        </button>


        {this.state.showStudents && (

          <div>

            {students.map(
              (student) => (

                <div key={student.id}>

                  <StudentCard
                    name={student.name}
                    age={student.age}
                    marks={student.marks}
                  />

                  <Link
                    to={`/students/${student.id}`}
                  >
                    View Details
                  </Link>

                </div>

              )
            )}

          </div>

        )}

      </div>
    );
  }
}

export default Students;