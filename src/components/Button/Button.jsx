import React from "react";
import PropTypes from "prop-types";
import style from "./Button.module.css";

const Button = function ({ toAdd }) {
  return (
    <div className={style.btnWrapper}>
      <button className={style.Button} onClick={toAdd} type="button">
        {" "}
        Load more..{" "}
      </button>
    </div>
  );
};
Button.propTypes = {
  toAdd: PropTypes.func.isRequired,
};

export default Button;
