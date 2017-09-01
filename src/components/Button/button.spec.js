import React, { Component } from 'react';
import Button from './index';
import {shallow} from 'enzyme';

describe('Button', () => {
	describe('without any properties', () => {
		it('should render a button element', ()=>{
			const button = shallow(<Button>text</Button>);
			expect(button.contains(<button class='primary cy-button'></button>)).toBe(true);
		});
	});
	describe('with attibutes', () => {
		it('should render an anchor element with href', ()=>{
			const button = shallow(<Button href='*'/>);
			expect(button.contains(<a href='*'></a>));
		});
		if('should render correct classes', ()=> {
			const button = shallow(<Button className='a b c d e f'/>);
			expect(button.prop('class')).toContains('a');
		});
	});
});