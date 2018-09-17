import React, {Component} from 'react';
import axios from 'axios';

class Picture extends Component {
    state = {
        picture: ''
    }
    
    componentDidMount(){
        axios.get(`SVGPictures/Animals/Wolf.svg`)
            .then(res => {
                console.log(res.data);
                //const test = React.createElement(res.data);
                this.setState({picture: res.data});
            })
            .catch( (e) => 
                {
                this.setState( (state) => {
                    return {picture: 'We could not display picture'};
            })
        })
    }


    render(){
        return(
            <div >
            <div className="picture" dangerouslySetInnerHTML={{__html: this.state.picture}} />
            </div>
    );
    }
}

export default Picture;