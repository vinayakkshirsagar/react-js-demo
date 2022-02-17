import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Counter extends Component {
state = {
count:1,
tags: ['tag1','tag2','tag3']
};

render(){
    let classes = "badge m2 badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
    return (
        <div>
            <span className={classes}>{this.formatCount()}</span>
            <button className='btn btn-primary btn-sm'>Increment</button>
            <ul>
                {this.state.tags.map(tag =><li key={tag}>{tag}</li>)}
            </ul>
        </div>
    );
}
formatCount(){

}
}

export default Counter;