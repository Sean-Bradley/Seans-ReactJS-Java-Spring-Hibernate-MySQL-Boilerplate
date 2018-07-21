import React from 'react';
import { expect } from 'chai';
//import { sinon } from 'sinon';
import { shallow, mount } from 'enzyme';
import { Cats } from './cats';
//import ReactTable from "react-table";

describe('Cats', () => {
  it('should render <h1>Cats</h1>', () => {
    const wrapper = shallow(<Cats />);
    expect(wrapper.containsAllMatchingElements([
      <h1>Cats</h1>
    ])).to.equal(true);
  });
});
