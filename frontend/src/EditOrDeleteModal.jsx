import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const EditOrDeleteModal = (props) => {
  const [name, setName] = useState(props.student.name);
  const [surname, setSurname] = useState(props.student.surname);
  const [email, setEmail] = useState(props.student.email);
  const [date, setDate] = useState(props.student.date);
  const [id, setId] = useState(props.student.ID);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const studentObj = {
      name,
      surname,
      email,
      date,
    };
    console.log(studentObj);

    try {
      const response = await fetch("http://localhost:3001/students/", {
        method: "PUT",
        body: JSON.stringify(studentObj),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        console.log("Student Added successfully");
        props.fetchStudents();
        setName("");
        setSurname("");
        setEmail("");
        setDate("");
      } else {
        console.log("Error while adding student");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal>
        <Modal.Header closeButton>
          <Modal.Title>Edit or Delete Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Surname:</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Surname"
                id="surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                required
                placeholder="Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Date of birth:</Form.Label>
              <Form.Control
                type="date"
                placeholder="Date of Birth"
                id="date-of-birth"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <div className="text-center">
              <Button className="btn-lg" type="submit">
                Add
              </Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditOrDeleteModal;
