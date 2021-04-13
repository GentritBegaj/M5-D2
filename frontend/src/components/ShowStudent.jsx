import React from "react";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import EditOrDeleteModal from "../EditOrDeleteModal";

const ShowStudent = (props) => {
  return (
    <>
      <tr>
        <td>{props.student.ID}</td>
        <td>{props.student.name}</td>
        <td> {props.student.surname} </td>
        <td>{props.student.email}</td>
        <td>{props.student.date} </td>
        <td>
          <div>
            <BorderColorIcon />{" "}
          </div>
        </td>
      </tr>
      <EditOrDeleteModal student={props.student} />
    </>
  );
};

export default ShowStudent;
