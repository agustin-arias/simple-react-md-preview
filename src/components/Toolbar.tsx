import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface ToolbarProps {
  name: string;
}

export const Toolbar: React.FC<ToolbarProps> = ({ name }) => {
  return (
    <div className="d-flex justify-content-between border-bottom border-dark px-2">
      <div className="d-flex justify-content-between">
        <FontAwesomeIcon icon={faCode} style={{ marginTop: "3px" }} />
        <div className="ml-2 font-weight-bold text-capitalize">{name}</div>
      </div>
      <FontAwesomeIcon icon={faExpandArrowsAlt} style={{ marginTop: "3px" }} />
    </div>
  );
};
