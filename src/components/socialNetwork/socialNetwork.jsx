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
        <li>
          <Link to="#">
            <FontAwesomeIcon
              icon={faTelegram}
              size="2x"
              title="Telegram"
              className=" hover:text-blue-400 m-3 transition-colors"
            />
          </Link>
        </li>
        <li>
          <Link to="#">
            <FontAwesomeIcon
              icon={faSquareOdnoklassniki}
              size="2x"
              className=" hover:text-orange-400 m-3 transition-colors"
            />
          </Link>
        </li>
        <li>
          <Link to="#">
            <FontAwesomeIcon
              icon={faVk}
              size="2x"
              className=" hover:text-blue-500 m-3 transition-colors"
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