import React, {Component} from 'react';

class SoundPlayer extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
            <audio controls>
                <source src = {this.props.soundSource} type="audio/mp3"/>
                Your browser does not support this audio tag
            </audio>
            </div>
        );
    }
}

export default SoundPlayer;