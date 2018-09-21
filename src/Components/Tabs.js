import React, {Component} from 'react';
import '../CSS/Tabs.css';

class Tabs extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: 0
        }
    }
    handleChange = (selector) => {
        this.setState ({
            selected: selector
        }, () => {
            this.props.callback(this.state.selected)
        });
    };
    render(){
        return(
            <div className='tabs'>
                <button className={this.state.selected === 0 ? "selected" : ""} onClick={() => this.handleChange(0)}>Utstilling 1</button>
                <button className={this.state.selected === 1 ? "selected" : ""} onClick={() => this.handleChange(1)}>Utstilling 2</button>
                <button className={this.state.selected === 2 ? "selected" : ""} onClick={() => this.handleChange(2)}>Utstilling 3</button>
                <button className={this.state.selected === 3 ? "selected" : ""} onClick={() => this.handleChange(3)}>Utstilling 4</button>
            </div>
        );
    }
}

export default Tabs;