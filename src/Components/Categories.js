import React, { Component } from 'react';
import '../CSS/Categories.css';

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

    /**
     * Called by onclick events whenever one of the radio options are selected. The onclick event is used to evaluate
     * which option was selected. The state is updated, and then the new state is sent to the parent component
     * trough the callback
     * @param event <object> The onclick event that is fired when a option is selected.
     */
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
                <span className="form-title">{this.state.mediaType}:</span>
                <form>
                    <label>
                        <input type="radio"
                               value={0}
                               checked={this.state.selectedOption === 0}
                               onChange={this.handleOptionChange}
                        />
                        {this.state.categories[0].name}
                    </label>

                    <label>
                        <input type="radio"
                               value={1}
                               checked={this.state.selectedOption === 1}
                               onChange={this.handleOptionChange}
                        />
                        {this.state.categories[1].name}
                    </label>

                    <label>
                        <input type="radio"
                               value={2}
                               checked={this.state.selectedOption === 2}
                               onChange={this.handleOptionChange}
                        />
                        {this.state.categories[2].name}
                    </label>
                   
                </form>                
            </div>
        );
    }

}

export default Categories;
