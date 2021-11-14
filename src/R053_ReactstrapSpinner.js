import React, { Component } from 'react';
import { Spinner } from 'reactstrap';

class R053_ReactstrapSpinner extends Component{
    render(){
        return(
            <>
            <Spinner color="secodary"> </Spinner>
            <Spinner color="success"> </Spinner>
            <Spinner type="grow" color="dark"> </Spinner> 
            <Spinner type="grow" color="info"> </Spinner> 
            <Spinner size="sm" color="dark"> </Spinner> 
            <Spinner style={{width:'10rem',height:'0.5rem'}} color="dark"> </Spinner> <br/>
            <Spinner style={{width:'10rem',height:'10rem'}} color="secodary"> </Spinner> 
            <Spinner style={{width:'3rem',height:'10rem'}} type="grow" color="primary"> </Spinner> 
            </>
        )

    }
}

export default R053_ReactstrapSpinner;