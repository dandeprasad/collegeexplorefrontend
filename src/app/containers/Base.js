import React from "react";
import ReactDOM from 'react-dom';
import { Breadcrumb, BreadcrumbItem,Container, Row, Col,Card,CardTitle,CardBody,CardText,Button, Collapse,Navbar,NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem  } from 'reactstrap';

import { Switch, Route,BrowserRouter } from 'react-router-dom'
import FestUserRegistration from './FestUserRegistration';
import EventDetails from './FestEventDetails';
import NewsArticles from './NewsArticles';
import NewsDetails from './NewsDetails';

import HeaderContent from './headerContent';
import Events from './Events';
import Exams from './Exams';
import Cutoffs from './Cutoffs';
import Placements from './Placements';
import Newsupload from './Newsupload';
import Aboutus from './Aboutus';
import ExamDetails from './ExamDetails';
import NewsVerify from './NewsVerify';
import FestVerify from './FestVerify';
import UserLogin from './UserLogin';
import Home from './Home';
import App from './App';
import svpcetupload from './svpcetupload';
import svpcetverify from './svpcetverify';

import { connect } from "react-redux";


//export class App extends React.Component {   commenting because below redux will take care of attacting
  class Base extends React.Component {


    constructor(props) {
      super(props);


     this.state = {
      dandepath: ''

    }
    }
    onChangeSetEventData(id){

this.setState({
dandepath: id
})
}
//     changeUsername() {
// this.props.setName("king");
//     }
//basename={'/ReactDev/dist/app/'}
    render() {


        return (



///ReactDev/dist/app/
 <BrowserRouter basename="/">

<div className="container-fluid">
 <HeaderContent />
   <Route  path='/Events'component={Events}/>
    <Route  path='/Newsupload'component={Newsupload}/>
    <Route  path='/NewsVerify'component={NewsVerify}/>
    <Route  path='/UserLogin'component={UserLogin}/>
  <Route  path='/FestRegistration' component={FestUserRegistration}/>
    <Route  path='/NewsArticles' name='NewsArticles' component={NewsArticles}/>
   <Route exact path='/' component={Home}/>
   <Route  path='/Exams' name='Exams' component={Exams}/>
   <Route  path='/Cutoffs' name='Cutoffs' component={Cutoffs}/>
      <Route  path='/Placements' name='Placements' component={Placements}/>
<Route path={`/EventDetails/:collegeId`} component={EventDetails}/>
<Route path={`/NewsDetails/:newsId`} component={NewsDetails}/>
<Route path={`/Aboutus`} component={Aboutus}/>
<Route path={`/FestVerify`} component={FestVerify}/>
<Route path={`/ExamDetails/:ExamId`} name='ExamDetails' component={ExamDetails}/>
<Route path={`/svpcetupload`} component={svpcetupload}/>
<Route path={`/svpcetverify`} component={svpcetverify}/>


{/*<Route path="/network" component={NetworkMetaContainer}>
           <Route path="/:id" component={NetworkContainer}/>
       </Route>*/}

   <Route  path='/Home' component={Home}/>
   </div>
   </BrowserRouter>
        );
    }
}


//state.user is userReducer
//state.math is mathReducer
const mapStateToProps = (state) => {
    return {
        user: state.user,
        math:state.math
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
       setName:(name) => {
           dispatch(setName(name));
       }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Base);
