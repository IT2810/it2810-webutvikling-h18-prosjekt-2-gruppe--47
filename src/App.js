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

        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleTabChange = this.handleTabChange.bind(this);
    }

    handleTabChange(new_value) {
        this.setState({
            exhibition: new_value
        });
    }

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
