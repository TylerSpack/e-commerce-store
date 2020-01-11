import React from 'react';

import './Dropdown.css';

class Dropdown extends React.Component {

    handleOptionChange = (e) => {
        this.props.dataReciever(e.target.value);
    };
    renderOptions(){
        return this.props.options.map((opt, idx) => (
            <option key={idx} value={opt}>{opt[0].toUpperCase() + opt.substr(1)}</option>
        ));
    }
    render() {
        return (
            <div className='dropdownContainer'>
                <form>
                    <select className="options" value={this.props.selected} onChange={this.handleOptionChange}>
                        <option key="-1">All</option>
                        {this.renderOptions()}
                    </select>
                </form>
            </div>
        );
    }
}

export default Dropdown;