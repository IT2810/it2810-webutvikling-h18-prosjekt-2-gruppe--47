import React, { Component } from 'react';
import logo from './logo.svg';
import './CSS/App.css';
import ResourceComponent from './ResourceComponent'
import Categories from './Categories/Categories';
import Tabs from './Components/Tabs';

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
            <div className="App">
                {/*
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                */}

                <Tabs callback={this.handleTabChange}/>
                <Categories mediaType='picture' name={['Animals', 'Cars', 'Flowers']} callback={this.handleCategoryChange}/>
                <Categories mediaType='text' name={['Epistles', 'Odes', 'Sonnets']} callback={this.handleCategoryChange}/>
                <Categories mediaType='sound' name={['Applause', 'Horse', 'Laughter']} callback={this.handleCategoryChange}/>
                <ResourceComponent imageCategory={this.state.pictureCategory} textCategory={this.state.textCategory} exhibition={this.state.exhibition}/>
            </div>
        );
    }
}

export default App;
