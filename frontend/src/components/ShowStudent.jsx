import React, { useState } from "react";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import EditOrDeleteModal from "./EditOrDeleteModal";

const ShowStudent = (props) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <tr>
        <td>{props.student.ID}</td>
        <td>{props.student.name}</td>
        <td> {props.student.surname} </td>
        <td>{props.student.email}</td>
        <td>{props.student.date} </td>
        <td className="text-right">
          <div onClick={() => setModalShow(true)} style={{ cursor: "pointer" }}>
            <BorderColorIcon />{" "}
          </div>
        </td>
      </tr>
      <EditOrDeleteModal
        fetchStudents={props.fetchStudents}
        student={props.student}
        modalShow={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ShowStudent;
