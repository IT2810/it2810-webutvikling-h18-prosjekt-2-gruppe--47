import React, {Component} from 'react';
import '../CSS/Sound.css';

class SoundPlayer extends Component {
    constructor(props){
        super(props);
        this.audioRef = React.createRef();
    }

    /**
     * Called when the component is updated. Checks to see if the soundSource prop has been changed. If it has been,
     * the current sound is paused, the new one is loaded, and the new sound is played.
     * @param prevProps <object> The previous properties of the component
     */
    componentDidUpdate(prevProps) {
        if(prevProps.soundSource !== this.props.soundSource) {
            this.audioRef.current.pause();
            this.audioRef.current.load();
            this.audioRef.current.play();
        }
    }

    render(){
        return(
            <audio controls ref={this.audioRef}>
                <source src = {this.props.soundSource} type="audio/mp3"/>
                Your browser does not support this audio tag
            </audio>
        );
    }
}

export default SoundPlayer;
