import React, { Component } from 'react';
import './../CSS/Categories.css';                                                                                                                                                           

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mediaType: this.props.mediaType,
            categories: [
                {name: this.props.name[0]},
                {name: this.props.name[1]},
                {name: this.props.name[2]},
            ],
            selectedOption: 0
        }
    }
    //Method that changes the state of the component and the parent to
    handleOptionChange = (event) => {
        this.setState({
            selectedOption: Number(event.target.value)
        }, () => {
            this.props.callback(this.state);
        });
    };

    render()
    {

        return (
            <div className="categories">
                <label className="radioLabel">{this.state.mediaType}:</label>
                <form>
                <br/><input type="radio" value={0}
                    checked={this.state.selectedOption === 0}
                    onChange={this.handleOptionChange}/>
                    <span>{this.state.categories[0].name}</span>           
                        
                    <input type="radio" value={1}
                    checked={this.state.selectedOption === 1}
                    onChange={this.handleOptionChange}/>
                    <span>{this.state.categories[1].name}</span>

                    <input type="radio" value={2}
                    checked={this.state.selectedOption === 2}
                    onChange={this.handleOptionChange}/>
                    <span>{this.state.categories[2].name}</span>
                   
                </form>                
            </div>
        );
    }

}


export default Categories;