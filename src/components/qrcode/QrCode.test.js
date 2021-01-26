import React from 'react';
import { configure, shallow, mount, act } from 'enzyme';
import ReactSeventeenAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import QrCode from './QrCode';
import QrGenerator from './QrGenerator';

configure({ adapter: new ReactSeventeenAdapter() }); //connects enzyme

//JEST describe(): function that takes two arguments:/*  */
//1. description of the element that bundles the test
//2. testing function (ES6 arrow funct) with it function (with two arguments: description of the test, arrow function with the actual test)
describe('<QrCode /> UNIT TESTS - initial state display', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<QrCode />);
		console.log('<QrCode /> CONSOLE LOG', wrapper.debug());
	});
	//INITIAL STATE - QR CODE SCAN ACTIVE
	it('unit test - initial state, QR CODE scanning area displayed', () => {
		const paragraph = wrapper.find('p');
		expect(paragraph.text()).toBe(
			'Please use your scan device to scan the QR code on the package for identifying.'
		);
	});
	it('unit test - initial state, paraghraph with instructions displayed', () => {
		expect(wrapper.find('Reader')).toBeDefined();
	});
});

describe('<QrGenerator /> integration tests: display image of QR code after QR scanning', () => {
	let wrapper;
	let codeScanWrapper;
	const mockScanningCode = '123456789012345';

	it('integration test - generate QR after simulating scanning', () => {
		// const mockSetState = jest.spyOn(React, 'useState');
		codeScanWrapper = mount(<QrGenerator qrCode={mockScanningCode} />);
		// const paragraph = codeScanWrapper.find('p');
		expect(codeScanWrapper.find('img')).toBeDefined();
		expect(codeScanWrapper.find('img').prop('src')).toEqual(mockScanningCode);
		// console.log(codeScanWrapper.debug());
	});

	// it('integration test - render paragraph after simulating scanning', () => {
	// 	wrapper = shallow(<QrCode />);
	// 	console.log(wrapper.debug());
	// });
});
