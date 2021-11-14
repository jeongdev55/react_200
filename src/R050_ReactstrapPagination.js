import React, { Component } from 'react';
import { Pagination,PaginationItem,PaginationLink } from 'reactstrap';

class R050_ReactstrapPagination extends Component{
    Pagination=(type)=>{
        alert('GO'+type);
    }

    render(){
        return(
            <>
            <Pagination size="lg" aria-label='Page navigation example'>
                <PaginationItem>
                    <PaginationLink previous onClick={e=>this.Pagination('previous')}/>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink  onClick={e=>this.Pagination('1')}>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink  onClick={e=>this.Pagination('2')}>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink last onClick={e=>this.Pagination('last')}/>
                </PaginationItem>
            </Pagination>
            </>
        )
    }
}
export default R050_ReactstrapPagination;


