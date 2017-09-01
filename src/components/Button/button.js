import React, { Component } from 'react';
import classNames from 'classnames';
import style from './style.css';

const factory = () => {
	class Button extends Component{
		constructor(props) {
			super(props);
		}
		render() {
			const {href, primary, secondary, success, warning, ...others} = this.props;
			const element = this.props.href ? 'a' : 'button';

			let className = classNames({
				primary: !secondary && !success && !warning,
				secondary: secondary,
				success: success,
				warning: warning,
				'cy-button': true
			});
			if (this.props.className) className += ` ${this.props.className}`;
			const props = {
				...others,
				href,
				className
			};
			return React.createElement(element, props,
				props.icon? <i/> : null, props.label);
		}
	}
	return Button;
}
export default factory;