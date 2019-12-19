import React from 'react';

import './Dropdown.css';

class Dropdown extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: 'hide'
        };
    }
    handleDropdownClick = () => {
        this.setState({
            show: this.state.show === 'hide' ? '' : 'hide'
        });
    };
    handleOptionClick = (option) => {
        console.log(option);
        this.props.dataReciever(option);
        this.setState({
            show: 'hide'
        });
    };
    renderOptions(){
        return this.props.options.map((opt, idx) => (
            <span key={idx} onClick={() => this.handleOptionClick(opt)}>{opt}</span>
        ));
    }
    render() {
        return (
            <div className='dropdownContainer'>
                <div className='dropdownBar'>
                    <button onClick={this.handleDropdownClick} className='dropdownButton'>Dropdown</button>
                    <div className={this.state.show + ' options'}>{this.renderOptions()}</div>
                </div>
            </div>
        );
    }
}

export default Dropdown;