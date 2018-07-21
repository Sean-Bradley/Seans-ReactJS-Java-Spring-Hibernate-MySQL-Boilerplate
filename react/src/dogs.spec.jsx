import React from 'react';
import { expect } from 'chai';
//import { spy } from 'sinon';
import { shallow, mount } from 'enzyme';
import { Dogs } from './dogs';
import { Link } from 'react-router-dom';


describe('Dogs', () => {
  it('should render <h1>Dogs</h1>', () => {
    const wrapper = shallow(<Dogs />);
        expect(wrapper.containsAllMatchingElements([
          <h1>Dogs</h1>
        ])).to.equal(true);
  });

  it('should contain a link to cats', () => {
    const wrapper = shallow(<Dogs />);
        expect(wrapper.containsAllMatchingElements([
          <Link to='/Cats'>Cats</Link>
        ])).to.equal(true);
  });
});


