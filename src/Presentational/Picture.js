import React, {Component} from 'react';

class Picture extends Component {
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div >
            <div className="picture" dangerouslySetInnerHTML={{__html: this.props.picturesrc}} />
            </div>
    );
    }
}

export default Picture;