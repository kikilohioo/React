import { shallow } from 'enzyme';
import React from 'react'
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {
	test('deberia de incrementar en click +1', () => { 
		const wrapper = shallow(<CounterApp />);
		expect(wrapper).toMatchSnapshot();
	 })
})