import { Link, Outlet } from "react-router-dom";
import Header from "../Header";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Root = () => {
  return (
    <>
      <Header
        row={true}
        item1Content={
          <h1 className="header-heading">
            <Link to="/">Twitch Follows</Link>
          </h1>
        }
        item2Content={
          <a
            className="header-git"
            href="https://github.com/Se1roon/TwitchFollows"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        }
      />
      <Outlet />
    </>
  );
};

export default Root;
