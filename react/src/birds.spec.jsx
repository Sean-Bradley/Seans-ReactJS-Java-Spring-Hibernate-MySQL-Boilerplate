import React from 'react';
import { expect } from 'chai';
//import { spy } from 'sinon';
import { shallow, mount } from 'enzyme';
import { Birds } from './birds';
import { Link } from 'react-router-dom';


describe('Birds', () => {
  it('should render <h1>Birds</h1>', () => {
    const wrapper = shallow(<Birds />);
        expect(wrapper.containsAllMatchingElements([
          <h1>Birds</h1>
        ])).to.equal(true);
  });

  it('should contain a link to cats', () => {
    const wrapper = shallow(<Birds />);
        expect(wrapper.containsAllMatchingElements([
          <Link to='/Cats'>Cats</Link>
        ])).to.equal(true);
  });
});


