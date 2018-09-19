import React, {Component} from 'react';
import axios from 'axios';

class Picture extends Component {
    state = {
        picture: ''
    }
    
    componentDidMount(){
        axios.get(`../SVGPictures/Animals/Bat.svg`)
            .then(res => {
                this.setState({picture: res.data});
            })
        }

    render(){
        return(
        <img src={this.state.picture} className="picture" alt='toBadBruh' />
        );
    }
}

export default Picture;