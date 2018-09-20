import React, {Component} from 'react';

class Picture extends Component {
    render(){
        return(
            <div className="picture" dangerouslySetInnerHTML={{__html: this.props.picturesrc}} />
        );
    }
}

export default Picture;