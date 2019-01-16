import React, { Component } from "react";
import Input from "../presentational/Input.jsx";
import Students from '../presentational/Students.jsx'
import Campuses from '../presentational/Campuses.jsx'

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      isStudents: true,
      seo_title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleStudent = this.handleStudent.bind(this);
    this.handleCampus = this.handleCampus.bind(this);
  }
  componentDidMount(){
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleStudent() {
    this.setState({ isStudents: true });
    console.log(this.state);
  }
  handleCampus() {
    this.setState({ isStudents: false });
    console.log(this.state);
  }
  render() {
    const { seo_title } = this.state;

    return (
      <div id="article-form">
        <Input
          text="Name"
          label="seo_title"
          type="text"
          id="seo_title"
          value={seo_title}
          handleChange={this.handleChange}
        />
        <button onClick={this.handleStudent}> Show Students </button>
        <button onClick={this.handleCampus}> Show Campuses </button>
        {/* <Students/> */}
        {this.state.isStudents ? <Students/> : <Campuses/>}
      </div>
    );
  }
}

export default FormContainer;
