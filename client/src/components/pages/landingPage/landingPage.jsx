import React, { Component } from 'react';
import Contact from '../Contact/Contact'
import Vision from '../../../components/VisionCard'
import Services from '../../Services';
import Slider  from '../../Slider'
import CommentBox from '../../CommentBox';




export default class LandingPage extends Component {
 constructor(props) {
  super(props);
  this.state = {
       vision: true,
  };
  this.handleVision = this.handleVision.bind(this)
} 
 handleVision = ()=>{ const {vision}= this.state; this.setState({vision:!vision})}
 

 render(){
    
  return (

   <div>
        <div className='row text-center bg-light'>
            <div className=' col-sm-4 col-md-4 col-lg-4 col-xl-4 '>
               <button className='btn btn-info mt-2 text-center btn-outline-primary text-white' onClick={this.handleVision}>Contact Admin
               </button>
           {this.state.vision?<Vision/> : <Contact/>}
            </div>
            <div className='col-sm-8 col-md-8 col-lg-8 col-xl-8'>
            <Slider/>
            </div> 
        </div>
       
        <div className='row text-center bg-light border-top'>
            <div className=' col-sm-4 col-md-4 col-lg-4 col-xl-4 text-center p-4'><div><CommentBox/></div></div>
            <div className='col-sm-8 col-md-8 col-lg-8 col-xl-8 p-4'> <Services/></div> 
        </div>
        
   </div>
  );
 }
}
