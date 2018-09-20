import React, {Component} from 'react';

class SoundPlayer extends Component {
    constructor(props){
        super(props);
        this.audioRef = React.createRef();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.soundSource !== this.props.soundSource) {
            this.audioRef.current.pause();
            this.audioRef.current.load();
            this.audioRef.current.play();
        }
    }

    render(){
        return(
            <div>
            <audio controls ref={this.audioRef}>
                <source src = {this.props.soundSource} type="audio/mp3"/>
                Your browser does not support this audio tag
            </audio>
            </div>
        );
    }
}

export default SoundPlayer;