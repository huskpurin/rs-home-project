import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import withValidation from "./withValidation";
import "./PasswordInput.scss";

class PasswordInput extends React.Component {
  static propTypes = {
    setValue: PropTypes.func.isRequired,
    getValue: PropTypes.func.isRequired,
    isValid: PropTypes.bool.isRequired,
    onChange: PropTypes.func
  };

  handleInputChange = e => {
    this.props.setValue(e.target.value);

    if (this.props.onChange) {
      this.props.onChange(e);
    }
  };

  getValue = () => this.props.getValue();

  getInputProps = props => {
    const {
      setValue,
      getValue,
      isValid,
      className,
      value,
      onChange,
      ...rest
    } = this.props;

    return rest;
  };

  render() {
    const { isValid } = this.props;
    const className = cx("input", { "is-invalid": !isValid });
    const value = this.getValue() || "";
    const restProps = this.getInputProps(this.props);

    return (
      <input
        className={className}
        type="text"
        value={value}
        onChange={this.handleInputChange}
        {...restProps}
      />
    );
  }
}

export default withValidation(PasswordInput);
