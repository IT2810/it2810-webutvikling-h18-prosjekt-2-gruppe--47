import React, {Component} from 'react';

class Picture extends Component {
    render(){
        return(
            <div >
            <div className="picture" dangerouslySetInnerHTML={{__html: this.props.picturesrc}} />
            </div>
    );
    }
}

export default Picture;