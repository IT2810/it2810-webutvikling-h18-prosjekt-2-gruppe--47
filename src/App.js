import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ResourceComponent from './ResourceComponent'

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
        })
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
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <ResourceComponent imageCategory={this.state.imageCategory} textCategory={this.state.textCategory} exhibition={this.state.exhibition}></ResourceComponent>
            </div>
        );
    }
}

export default App;
