import React, { Component } from 'react';
import './CSS/App.css';
import ResourceComponent from './Components/ResourceComponent'
import Categories from './Components/Categories';
import './CSS/Picture.css';
import Tabs from './Components/Tabs';
import SoundContainer from './Components/SoundContainer';

class App extends Component {
    constructor() {
        super();
        this.state = {
            pictureCategory: 0,
            textCategory: 0,
            soundCategory: 0,
            exhibition: 0
        };

        // Binding the _this_ scope since these functions will be provided as callback functions to other components
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleTabChange = this.handleTabChange.bind(this);
    }

    /**
     * callback for TabComponent, called whenever the current tab ("exhibition") is changed
     * @param new_value <number>
     */
    handleTabChange(new_value) {
        this.setState({
            exhibition: new_value
        });
    }

    /**
     * callback for Categories, called whenever a category is changed.
     * Same callback function for all categories, need to check which category the "Categories" Component is tied to.
     * @param categoryState <object> The entire state of the "Categories" Component that is calling back.
     */
    handleCategoryChange(categoryState){
        switch (categoryState.mediaType) {
            case 'picture':
                this.setState({
                    pictureCategory: categoryState.selectedOption,
                });
                break;
            case 'text':
                this.setState({
                    textCategory: categoryState.selectedOption,
                });
                break;
            case 'sound':
                this.setState({
                    soundCategory: categoryState.selectedOption,
                });
                break;
            default:
                console.error('Received invalid mediaType:', categoryState.mediaType);
        }
    }

    render() {
        return (
            <div className="app">
                <h1 className="title">En legendarisk utstilling</h1>
                <div className="category-container">
                    <Categories mediaType='sound' name={['Applause', 'Horse', 'Laughter']} callback={this.handleCategoryChange}/>
                    <Categories mediaType='picture' name={['Animals', 'Cars', 'Flowers']} callback={this.handleCategoryChange}/>
                    <Categories mediaType='text' name={['Epistles', 'Odes', 'Sonnets']} callback={this.handleCategoryChange}/>
                </div>
                <Tabs callback={this.handleTabChange}/>
                <div className='main-content'>
                    <SoundContainer category={this.state.soundCategory} exhibition={this.state.exhibition}/>
                    <ResourceComponent imageCategory={this.state.pictureCategory} textCategory={this.state.textCategory} exhibition={this.state.exhibition}/>
                </div>
            </div>
        );
    }

}

export default App;
