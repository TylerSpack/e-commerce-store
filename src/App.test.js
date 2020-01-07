import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme'
import Header from "./components/Header/Header";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

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
    it('should have an `Header` element', function () {
      const actual = wrapper.containsMatchingElement(<Header/>);
      expect(actual).toBe(true);
    });
  });
});
