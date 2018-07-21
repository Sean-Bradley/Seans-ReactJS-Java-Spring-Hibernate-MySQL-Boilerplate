import React from 'react';
import { expect } from 'chai';
//import { spy } from 'sinon';
import { shallow, mount } from 'enzyme';
import { Home } from './home';
import { Link } from 'react-router-dom';

describe('Home', () => {
  it('should render a really long h1 tag', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.containsAllMatchingElements([
      <h1>seans reactjs java spring hibernate mysql boilerplate</h1>
    ])).to.equal(true);
  });

  it('should contain a link to cats', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.containsAllMatchingElements([
      <Link to='/Cats'>Cats</Link>
    ])).to.equal(true);
  });

  // it('adds items to the list', () => {
  //   const wrapper = shallow(<BeerListContainer/>);
  //   wrapper.instance().addItem('Sam Adams');
  //   expect(wrapper.state('beers')).to.eql(['Sam Adams']);
  // });

  // it('passes addItem to InputArea', () => {
  //   const wrapper = shallow(<BeerListContainer/>);
  //   const inputArea = wrapper.find(InputArea);
  //   const addItem = wrapper.instance().addItem;
  //   expect(inputArea.prop('onSubmit')).to.eql(addItem);
  // });

  // it('passes a bound addItem function to InputArea', () => {
  //   const wrapper = shallow(<BeerListContainer/>);
  //   const inputArea = wrapper.find(InputArea);
  //   inputArea.prop('onSubmit')('Sam Adams');
  //   expect(wrapper.state('beers')).to.eql(['Sam Adams']);
  // });

  // it('renders the items', () => {
  //   const wrapper = mount(<BeerListContainer/>);
  //   wrapper.instance().addItem('Sam Adams');
  //   wrapper.instance().addItem('Resin');
  //   expect(wrapper.find('li').length).to.equal(2);
  // });
});

// describe('InputArea', () => {
//    it('should contain an input and a button', () => {
//      const wrapper = shallow(<InputArea/>);
//      expect(wrapper.containsAllMatchingElements([
//        <input/>,
//        <button>Add</button>
//      ])).to.equal(true);
//    });

//   it('should accept input', () => {
//     const wrapper = mount(<InputArea/>);
//     const input = wrapper.find('input');
//     input.simulate('change', {target: { value: 'Resin' }});
//     expect(wrapper.state('text')).to.equal('Resin');
//     expect(input.prop('value')).to.equal('Resin');
//   });

//   it('should call onSubmit when Add is clicked', () => {
//     const addItemSpy = spy();
//     const wrapper = shallow(<InputArea onSubmit={addItemSpy}/>);
//     wrapper.setState({text: 'Octoberfest'});
//     const addButton = wrapper.find('button');
//     addButton.simulate('click');
//     expect(addItemSpy.calledOnce).to.equal(true);
//     expect(addItemSpy.calledWith('Octoberfest')).to.equal(true);
//   });
// });

// describe('BeerList', () => {
//   it('should render zero items', () => {
//     const wrapper = shallow(<BeerList items={[]}/>);
//     expect(wrapper.find('li')).to.have.length(0);
//   });

//   it('should render undefined items', () => {
//     const wrapper = shallow(<BeerList items={undefined}/>);
//     expect(wrapper.find('li')).to.have.length(0);
//   });

//   it('should render the items', () => {
//     const items = ['Sam Adams', 'Resin', 'Octoberfest'];
//     const wrapper = shallow(<BeerList items={items}/>);
//     expect(wrapper.find('li')).to.have.length(3);
//   });
// });
