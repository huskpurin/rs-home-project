import React from "react";
import PropTypes from "prop-types";

export default function withValidation(Component) {
  return class WrappedComponent extends React.Component {
    static propTypes = {
      value: PropTypes.any,
      validation: PropTypes.func
    };

    static defaultProps = {
      value: undefined,
      validation: undefined
    };

    state = {
      value: this.props.value
    };

    setValue = value => {
      this.setState({ value });
    };

    getValue = () => this.state.value;

    isValid = () => {
      if (this.props.validation) {
        return this.props.validation(this.state.value);
      }

      return true;
    };

    render() {
      const { validation, ...rest } = this.props;

      return (
        <Component
          {...rest}
          setValue={this.setValue}
          getValue={this.getValue}
          isValid={this.isValid()}
        />
      );
    }
  };
}
