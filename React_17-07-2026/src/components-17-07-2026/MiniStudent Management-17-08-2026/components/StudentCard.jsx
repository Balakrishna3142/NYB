import React from "react";

class StudentCard extends React.Component {

  render() {

    const {
      name,
      age,
      marks
    } = this.props;

    return (
      <div
        style={{
          border: "1px solid gray",
          padding: "15px",
          margin: "10px"
        }}
      >

        <h3>{name}</h3>

        <p>
          Age: {age}
        </p>

        <p>
          Marks: {marks}
        </p>

        {marks >= 35 ? (
          <p>Passed</p>
        ) : (
          <p> Failed</p>
        )}

      </div>
    );
  }
}

export default StudentCard;