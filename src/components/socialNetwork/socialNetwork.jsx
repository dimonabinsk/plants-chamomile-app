import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faVk,
  faSquareOdnoklassniki,
} from "@fortawesome/free-brands-svg-icons";

const SocialNetwork = ({ styles }) => {
  return (
    <div className={styles}>
      <ul>
        <li className="m-3">
          <Link to="#">
            <FontAwesomeIcon
              icon={faTelegram}
              size="2x"
              title="Telegram"
              className=" transition-colors hover:text-blue-400"
            />
          </Link>
        </li>
        <li className="m-3">
          <Link to="#">
            <FontAwesomeIcon
              icon={faSquareOdnoklassniki}
              size="2x"
              className=" transition-colors hover:text-orange-400"
            />
          </Link>
        </li>
        <li className="m-3">
          <Link to="#">
            <FontAwesomeIcon
              icon={faVk}
              size="2x"
              className=" transition-colors hover:text-blue-500"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

SocialNetwork.propTypes = {
  styles: PropTypes.string.isRequired,
};

export default SocialNetwork;
