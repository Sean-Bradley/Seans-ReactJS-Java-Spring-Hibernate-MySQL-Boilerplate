import React from 'react';
import { expect } from 'chai';
//import { spy } from 'sinon';
import { shallow, mount } from 'enzyme';
import { Cats } from './cats';
import ReactTable from "react-table";
//import { Link } from 'react-router-dom';


describe('Cats', () => {
  it('should render <h1>Cats</h1>', () => {
    const wrapper = shallow(<Cats />);
        expect(wrapper.containsAllMatchingElements([
          <h1>Cats</h1>
        ])).to.equal(true);
  });

  // it('should contain a link to cats', () => {
  //   const wrapper = shallow(<Dogs />);
  //       expect(wrapper.containsAllMatchingElements([
  //         <Link to='/Cats'>Cats</Link>
  //       ])).to.equal(true);
  // });
});


