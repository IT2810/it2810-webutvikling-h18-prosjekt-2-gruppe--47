import React, {Component} from 'react';
import '../CSS/Tabs.css';
import Picture from 'Picture';
//import Text from 'Text';
//import Sound from 'Sound';
class Tabs extends Component {
    render(){
        return(
            <div className='tabs'>
                <button className="btn" onClick={utstilling1()}>Utstilling 1</button>
                <button className="btn" onClick={utstilling2()}>Utstilling 2</button>
                <button className="btn" onClick={utstilling3()}>Utstilling 3</button>
                <button className="btn" onClick={utstilling4()}>Utstilling 4</button>
            </div>
        );
    }
}

export default Tabs;