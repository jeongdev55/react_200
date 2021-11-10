import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class R036_ReactstrapBreadcrumbs extends Component {
  render() {
    return (
      <div id="top">
        <Breadcrumb tag="nav" listTag="div">
          <Breadcrumb tag="a" href="#top">Go_top</Breadcrumb>
          <Breadcrumb tag="a" href="#bottom">Go_bottom</Breadcrumb>
        </Breadcrumb>
        <div id="bottom" style={{margin:"1000px"}}>
          <span>bottom</span>
        </div>
      </div>
      )
  }
}

export default R036_ReactstrapBreadcrumbs;