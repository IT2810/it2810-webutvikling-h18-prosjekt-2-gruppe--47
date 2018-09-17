import React, {Component} from 'react';
import axios from 'axios';

class Picture extends Component {
    state = {
        picture: '',
        animalList: ["SVGPictures/Animals/Animal1.svg","SVGPictures/Animals/Animal2.svg","SVGPictures/Animals/Animal3.svg"],
        carList: ["SVGPictures/Cars/Car1.svg","SVGPictures/Cars/Car2.svg","SVGPictures/Cars/Car3.svg","SVGPictures/Cars/Car4.svg"],
        flowerList: ["SVGPictures/Flowers/Flower1.svg","SVGPictures/Flowers/Flower2.svg","SVGPictures/Flowers/Flower3.svg","SVGPictures/Flowers/Flower4.svg"]
    }
    
    componentDidMount(){
        axios.get(this.state.animalList[0])
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