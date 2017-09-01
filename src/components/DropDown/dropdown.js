import React, { Component } from 'react';

const factory = () => {
	class Dropdown extends Component{
		constructor(props) {
			super(props);
			this.state = {
				open: false,
				selectedValue:''
			};
			this.handleClick = this.handleClick.bind(this);
			this.onSelectItems.bind(this);
		}
		handleClick(e) {
			e.preventDefault();
			if(this.state.open) {
				this.setState({open: false});
			} else {
				this.setState({open: true});
			}
		}
		onSelectItems(item, value) {
			if(this.state.open) {
				this.setState({open: false});
			} else {
				this.setState({open: true});
			}
			this.setState({selectedValue:item});
		}
		render() {
			const {valueKey} = this.props;
			const selectItemswithKey = this.props.items.map((item, index) => 
			   <li key = {index} onClick={this.onSelectItems.bind(this,item[valueKey])}> {item[valueKey]}</li>
			);
			const selectItems = this.props.items.map((item, index) => 
				 //<li key = {index} onClick={this.onSelectItems.bind(this,item)}>{item}</li>
			   <li key = {index} onClick={this.onSelectItems.bind(this,item)}> {item}</li>
			);
			const className = this.props.className;
			return (
				<div className = {className}>
					<input type = 'text' value = {this.state.selectedValue} onClick={this.handleClick}></input>
					{this.state.open? <ul className='item-list'>{valueKey?selectItemswithKey: selectItems}</ul>: null}
				</div>

				);
		}
	}
	return Dropdown;
}
export default factory;