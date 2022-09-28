import { Link } from "react-router-dom";
import Header from "../Header";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Root = () => {
  return (
    <>
      {/* <Header />
      <Hero /> */}
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
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        }
      />
      <div>Hero component</div>
    </>
  );
};

export default Root;
