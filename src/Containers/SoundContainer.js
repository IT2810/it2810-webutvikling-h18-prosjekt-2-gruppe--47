import React, {Component} from "react";
import SoundPlayer from '../Components/SoundPlayer';

class SoundContainer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const musicFiles = [["applause0.mp3","applause1.mp3","applause2.mp3","applause3.mp3"],
                    ["horse0.mp3","horse1.mp3","horse2.mp3","horse3.mp3"],
                    ["laughter0.mp3","laughter1.mp3","laughter2.mp3","laughter3.mp3"]];
        return(
        <SoundPlayer soundSource = {musicFiles[this.props.category][this.props.exhibition]}/>
        );
    }
}

export default SoundContainer;