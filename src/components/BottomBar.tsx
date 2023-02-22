import React from "react";
import GithubIcon from "../assets/icons/github.svg";
import InstallButton from "../InstallButton";

const BottomBar: React.FC = () => {
  return (
    <footer>
      <ul className="nav gap-2 align-items-center ">
        <li className="nav-item" title="GitHub">
          <a
            className="nav-link glass p-2 h-100 rounded-pill "
            href="https://github.com/nehalahmadkhan"
            target={"_blank"}
          >
            <img src={GithubIcon} alt="Github" />
          </a>
        </li>
        <li className="nav-item" title="Nehal Ahmad">
          <a
            className="nav-link glass p-2 h-100 rounded-pill lh-1 text-primary fw-bold fs-4"
            href="https://nehalahmad.com"
            target={"_blank"}
          >
            NA
          </a>
        </li>
        <li>
          <InstallButton />
        </li>
      </ul>
    </footer>
  );
};

export default BottomBar;
