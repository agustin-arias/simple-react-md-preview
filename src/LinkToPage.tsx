import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface LinkToPageProps {
  url: string;
}

export const LinkToPage: React.FC<LinkToPageProps> = ({ url }) => {
  return (
    <div id="footer" className="containter-fluid bg-dark">
      <a href={url}>
        <div className="d-flex justify-content-center p-1 text-white">
          <FontAwesomeIcon icon={faGithub} />
        </div>
      </a>
    </div>
  );
};
