import React,{Component} from 'react';

class R017_Props extends Component{
    render(){
        let props_value = this.props.Props_val;
        props_value +=' from App.js'
        return(
            <div>{props_value}</div>
        )
    }
}
export default R017_Props;