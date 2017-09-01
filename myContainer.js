import React, { Component } from 'react';
import {Button, Dropdown} from './src/components';
class MyContainer extends Component {
  constructor() {
  	super();
  	this.str = "learning react";
  	this.array = [];
  	this.dropDownOptions = [{id:1, name:'option A'}, {id:2, name:'option B'}, {id:3, name:'option C'}];
  	this.dropDownOptions2 = ['A', 'B', 'C'];
  	this.state = {date: new Date()};
  	this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  handleClick(e) {
  	e.preventDefault();
  	this.array.push(this.state.date.toLocaleTimeString());
  }
  render() {
  	const listItems = this.array.map((item, index) =>
  		<li key={index}>{item}</li>
  	);
  	const dropDownOptions = this.dropDownOptions;
    return (
      <div className="my-container">
        <p>{this.str}</p>
        <p> {this.state.date.toLocaleTimeString()} </p>
        <Dropdown items= {dropDownOptions} valueKey='name'></Dropdown>
        <Dropdown items= {this.dropDownOptions2}></Dropdown>

        <Button label={this.state.date.toLocaleTimeString()} onClick = {this.handleClick}></Button>
        <div className='item-grid'>
        	<ul>{listItems}</ul>
        </div>
      </div>
    );
  }
}

export default MyContainer;
