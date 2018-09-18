import React, {Component} from 'react';
import axios from 'axios';
//import Tabs from "./Tabs";
//import Categories from "./Categories";
class Picture extends Component {
    state = {
        picture: '',
        allPictures: [["SVGPictures/Animals/Animal1.svg","SVGPictures/Animals/Animal2.svg","SVGPictures/Animals/Animal3.svg","SVGPictures/Animals/Animal4.svg"],
                    ["SVGPictures/Cars/Car1.svg","SVGPictures/Cars/Car2.svg","SVGPictures/Cars/Car3.svg","SVGPictures/Cars/Car4.svg"],
                    ["SVGPictures/Flowers/Flower1.svg","SVGPictures/Flowers/Flower2.svg","SVGPictures/Flowers/Flower3.svg","SVGPictures/Flowers/Flower4.svg"]]
    }

    choosePicture = (command) =>{
        let category;
        let picture;
        switch(command){
            case 0:
                category = 0;
                picture = 0;
                break;
            case 1:
                category = 0;
                picture = 1;
                break;
            case 2:
                category = 0;
                picture = 2;
                break;
            case 3:
                category = 0;
                picture = 3;
                break;
            case 4:
                category = 1;
                picture = 0;
                break;
            case 5:
                category= 1;
                picture = 1;
                break;
            case 6:
                category = 1;
                picture = 2;
                break;
            case 7:
                category = 1;
                picture = 3;
                break;
            case 8:
                category = 2;
                picture = 0;
                break;
            case 9:
                category = 2;
                picture = 1;
                break;
            case 10:
                category = 2;
                picture = 2;
                break;
            default:
                category = 2;
                picture = 3;
        }
        return [category, picture];
    }

    
    componentDidMount(){
        let list = this.choosePicture(11);
        console.log(list);
        axios.get(this.state.allPictures[list[0]][list[1]])
            .then(res => {
                //console.log(res.data);
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