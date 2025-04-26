import PropTypes from "prop-types";
import React from "react";

function ButtonLink(props) {
  return (
    <a href={props.href} className={props.className}>
      {props.children}
    </a>
  )
}

ButtonLink.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default ButtonLink;