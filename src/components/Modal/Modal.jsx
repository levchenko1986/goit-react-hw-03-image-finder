import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./Modal.module.css";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.closeByEsc);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeByEsc);
  }

  closeByEsc = (e) => {
    if (e.code === "Escape") {
      this.props.toClose();
    }
  };
  closeByClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.toClose();
    }
  };
  render() {
    const { source, closeByClick } = this.props;
    return (
      <div onClick={this.closeByClick} className={style.Overlay}>
        <div className={style.Modal}>
          <img src={source} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default Modal;
