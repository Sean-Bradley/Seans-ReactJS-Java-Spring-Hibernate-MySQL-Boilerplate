import React from 'react';
import { expect } from 'chai';
//import { spy } from 'sinon';
import { shallow, mount } from 'enzyme';
import { App } from './index';
//import { Link } from 'react-router-dom';

describe('App', () => {
  it('should render a really long title in an a tag', () => {
    const wrapper = shallow(<App />);
        expect(wrapper.containsAllMatchingElements([
          <a>seans-reactjs-java-spring-hibernate-mysql-boilerplate</a>
        ])).to.equal(true);
  });

  // it('should contain a link to cats', () => {
  //   const wrapper = shallow(<Dogs />);
  //       expect(wrapper.containsAllMatchingElements([
  //         <Link to='/Cats'>Cats</Link>
  //       ])).to.equal(true);
  // });
});


