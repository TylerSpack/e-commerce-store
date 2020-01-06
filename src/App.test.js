import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme'

describe("App component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App/>);
  });
  describe('initial state', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App/>, div);
    });
    it('should have the `th` "Items"', function () {
      expect(wrapper.contains(<th>Items</th>)).toBe(true);
    });
    it('should have a `button` element', function () {
      const actual = wrapper.containsMatchingElement(<button>Add item</button>);
      expect(actual).toBe(true);
    });
    it('should have an `input` element', function () {
      const actual = wrapper.containsMatchingElement(<input/>);
      expect(actual).toBe(true);
    });
    it('`button` should be disabled ', function () {
      const button = wrapper.find('button').first();
      const actual = button.props().disabled;
      expect(actual).toBe(true);
    });
  });
  describe('user interaction', () => {
    const item = 'asdf';
    beforeEach(() => {
      const input = wrapper.find('input').first();
      input.simulate('change', {
        target: {value: item}
      });
    });
    it('should update the state property `item`', function () {
      expect(wrapper.state().item).toEqual(item);
    });
    it('should enable `button`', function () {
      const button = wrapper.find('button').first();
      expect(button.props().disabled).toBe(false);
    });
    describe('and then submits the form', () => {
      beforeEach(() => {
        const form = wrapper.find('form').first();
        form.simulate('submit', {
          preventDefault: () => {
          },
        });
      });
      it('should add the item to state', () => {
        expect(
            wrapper.state().items
        ).toContain(item);
      });
      it('should render the item in the table', () => {
        expect(
            wrapper.containsMatchingElement(
                <td>{item}</td>
            )
        ).toBe(true);
      });
      it('should clear the input field', () => {
        const input = wrapper.find('input').first();
        expect(
            input.props().value
        ).toEqual('');
      });
      it('should disable `button`', () => {
        const button = wrapper.find('button').first();
        expect(
            button.props().disabled
        ).toBe(true);
      });
    });
  });

});

