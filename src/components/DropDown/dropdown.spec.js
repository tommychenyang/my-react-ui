import React from 'react';
import Dropdown from './index';
import {shallow} from 'enzyme';

describe('Dropdown', () => {
	describe('without any properties', () => {
		const options = ['a', 'b', 'c'];
		const dropdown = shallow(<Dropdown items={options}/>);
		it('should contains 0 items at begining', ()=>{
			expect(dropdown.find('li').length).toBe(0);
		});
		it('should contains correct number of items after clicking', () => {
			dropdown.find('input').simulate('click', {preventDefault(){} });
			expect(dropdown.find('li').length).toBe(options.length);
		});
	});
});