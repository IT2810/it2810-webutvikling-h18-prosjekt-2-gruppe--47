import React, { Component } from 'react';
import './Categories.css';

class Categories extends Component {
    state = {
        mediaType: '-1',
        categories: [
            {name: '0', source: ''},
            {name: '1', source: ''},
            {name: '2', source: ''},
        ],
        selectedOption: '0'
    };

    handleOptionChange = (event) => {
        this.setState( {
            selectedOption: event.target.value
        })
    };

    render() {

        return (
            <div className="Categories">
                <form>
                    <p>{this.state.mediaType}</p>
                    <div className="radio">
                        <input type="radio" value={this.state.categories[0].name}
                               checked={this.state.selectedOption===this.state.categories[0].name}
                               onChange={this.handleOptionChange}/>
                        <p>{this.state.categories[0].name}</p>
                        <input type="radio" value={this.state.categories[1].name}
                               checked={this.state.selectedOption===this.state.categories[1].name}
                               onChange={this.handleOptionChange}/>
                        <p>{this.state.categories[1].name}</p>
                        <input type="radio" value={this.state.categories[2].name}
                               checked={this.state.selectedOption===this.state.categories[2].name}
                               onChange={this.handleOptionChange}/>
                        <p>{this.state.categories[2].name}</p>
                    </div>
                </form>
            </div>
        );
    }
}

export default Categories;