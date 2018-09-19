import React, {Component} from 'react';
//import Tabs from "./Tabs";
//import Categories from "./Categories";
class Picture extends Component {
    constructor(props){
        super(props);
    }
    /*
    state = {
        picture: '',
        allPictures: [["SVGPictures/Animals/Animal1.svg","SVGPictures/Animals/Animal2.svg","SVGPictures/Animals/Animal3.svg","SVGPictures/Animals/Animal4.svg"],
                    ["SVGPictures/Cars/Car1.svg","SVGPictures/Cars/Car2.svg","SVGPictures/Cars/Car3.svg","SVGPictures/Cars/Car4.svg"],
                    ["SVGPictures/Flowers/Flower1.svg","SVGPictures/Flowers/Flower2.svg","SVGPictures/Flowers/Flower3.svg","SVGPictures/Flowers/Flower4.svg"]]
    }*/


    render(){
        return(
            <div >
            <div className="picture" dangerouslySetInnerHTML={{__html: this.props.picturesrc}} />
            </div>
    );
    }
}

export default Picture;