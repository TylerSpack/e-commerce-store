import React from 'react';
import ReactDOM from 'react-dom';
import WrappedApp from "./App";
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header/Header";


Enzyme.configure({ adapter: new Adapter() });

describe("App component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<WrappedApp/>);
  });
  describe('initial state', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<WrappedApp/>, div);
    });
    it('should have an `Header` element', function () {
      console.log(wrapper.debug());
      const actual = wrapper.containsMatchingElement(<Header/>);
      expect(actual).toBe(true);
    });
  });
});
