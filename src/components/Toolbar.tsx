import {
  faCode,
  faCompressAlt,
  faExpandArrowsAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface ToolbarProps {
  name: string;
  hideOther: boolean;
  handleHideOther:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  name,
  hideOther,
  handleHideOther,
}) => {
  return (
    <div
      className="d-flex justify-content-between border-bottom border-dark px-2"
      key={`toolbar-${name}`}
    >
      <div className="d-flex justify-content-between">
        <FontAwesomeIcon icon={faCode} style={{ marginTop: "5px" }} />
        <div className="ml-2 font-weight-bold text-capitalize">{name}</div>
      </div>
      <button className="btn p-0" onClick={handleHideOther}>
        <FontAwesomeIcon
          icon={hideOther ? faCompressAlt : faExpandArrowsAlt}
          style={{ marginTop: "3px" }}
        />
      </button>
    </div>
  );
};
