import React, { useEffect, useState } from "react";
import AddStudent from "./AddStudent";
import NavBar from "./NavBar";
import ShowAllStudents from "./ShowAllStudents";

const HomePage = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await fetch("http://localhost:3001/students");
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <>
      <NavBar />
      <AddStudent fetchStudents={fetchStudents} />
      <ShowAllStudents fetchStudents={fetchStudents} students={students} />
    </>
  );
};

export default HomePage;
