import React, { Component } from 'react'
import SideBar from '../../SideBar'
import GalleryCard from '../../GalleryCard'



export default class Dashboard extends Component {
 constructor(props) {
  super(props);
  this.state = {};
 }

 render() {
  return (
   <div>
      <div className=' container-fluid'>
        <div className='row'>
          <div className=' col-xs-12  col-sm-12  col-md-4  col-lg-4  col-xl-4'><SideBar/></div>
          <div className=' col-xs-12  col-sm-12  col-md-8  col-lg-8  col-xl-8'><GalleryCard/></div>
        </div>
      </div>  
  </div>
  );
 }
}
