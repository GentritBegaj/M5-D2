import React, { useCallback, useEffect, useState } from "react";
import AddStudent from "./AddStudent";
import NavBar from "./NavBar";
import ShowAllStudents from "./ShowAllStudents";

const HomePage = () => {
  const [students, setStudents] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleInput = (e) => {
    setSearchValue(e.target.value);
  };

  const fetchStudentsCallback = async () => {
    try {
      const response = await fetch("http://localhost:3001/students");
      if (response.ok) {
        const data = await response.json();
        setStudents(data);
      } else {
        console.log("Error while fetching users");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchStudents = useCallback(fetchStudentsCallback, [setStudents]);

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <>
      <NavBar searchValue={searchValue} handleInput={handleInput} />
      <AddStudent fetchStudents={fetchStudents} />
      <ShowAllStudents fetchStudents={fetchStudents} students={students} />
    </>
  );
};

export default HomePage;
