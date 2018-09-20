import React, {Component} from "react";
import SoundPlayer from '../Presentational/SoundPlayer';

class SoundContainer extends Component{
    render(){
        const musicFiles = [["Sounds/Applause/applause0.mp3","Sounds/Applause/applause1.mp3","Sounds/Applause/applause2.mp3","Sounds/Applause/applause3.mp3"],
                    ["Sounds/Horse/horse0.mp3","Sounds/Horse/horse1.mp3","Sounds/Horse/horse2.mp3","Sounds/Horse/horse3.mp3"],
                    ["Sounds/Laughter/laughter0.mp3","Sounds/Laughter/laughter1.mp3","Sounds/Laughter/laughter2.mp3","Sounds/Laughter/laughter3.mp3"]];
        return(
        <SoundPlayer soundSource = {musicFiles[this.props.category][this.props.exhibition]}/>
        );
    }
}

export default SoundContainer;