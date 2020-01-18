import React from "react";
import { Container, Row, Col,Button,Table ,NavLink} from 'reactstrap';
import { connect } from "react-redux";
import '../css/cutoffs.scss';
import {paramsToHeader } from "../actions/HeaderParams";
import {Helmet} from "react-helmet";

import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom'
class UserLogin extends React.Component {



constructor(props) {
  super(props);

}

componentWillMount() {

  if(  this.props.match.url === "/Cutoffs")
  {
     this.props.paramsHeader(this.props);
this.serverRequest();
  }
//if(this.props.ExamsReduce.result.length <=0){



}



    render() {




        return (


<Row>
<Helmet>
                <meta charSet="utf-8" />
                <title>College cutoffs</title>
                <meta name="description" content="Cutoffs of colleges" />
                <meta name="keywords" content="list of colleges in India, top colleges in India, best colleges in India.Exams,Fests,Cutoffs,Placements  "/>

                <meta property="og:image" content="https://elasticbeanstalk-us-east-2-083183914236.s3.us-east-2.amazonaws.com/collegeexplore_logo.png"/>
                <meta property="og:site_name" content="Collegeexplore"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="http://collegeexplore.in"/>
                <meta property="og:title" content="College Cutoffs"/>
                <meta property="og:description" content="Cutoffs of colleges"/>

            </Helmet>



                <div>
              <div className="card-body">
            <div className="card-title"><h3>User Login</h3></div>
            <div className="row">


                <div className=" col-xs-12 col-sm-12 col-md-12" >
                <div className="form-group ">
            <label forname="UR_NAME" className="bmd-label-floating">User Email<span className="req-ind">*</span></label>
            <input type="text" className="form-control" id="UR_NAME" required={true} value={this.props.UR_NAME} onChange={this.props.HandleChange}/>
            <span className="bmd-help">You need to enter your emailid</span> <br/>
            <span style={{color: "red"}}>{this.props.ErrorMsg }</span>
            </div>
                </div>

            
                <div className=" col-xs-12 col-sm-12 col-md-12">
                  <div className="form-group">
            <label forname="YOUR_PH_NUMBER" className="bmd-label-floating">PASSWORD<span className="req-ind">*</span></label>
            <input type="password" className="form-control" id="YOUR_PH_NUMBER" required={true} value={this.props.YOUR_PH_NUMBER} onChange={this.props.HandlephChange}/>
            <span className="bmd-help">You need to enter your phone number.</span><br/>
            <span style={{color: "red"}}>{this.props.ErrorMsgph }</span>
            </div>
                </div>
                            </div>
                            <hr/>





            </div>
                </div>

</Row>
        );
    }
}


//state.user is userReducer
//state.math is mathReducer
const mapStateToProps = (state,ownProps) => {

    return {

        CutoffsReduce:state.CutoffsReduce,
          Pathparamsreduce:state.Pathparamsreduce

    };
};
const mapDispatchToProps = (dispatch) => {
    return {


    };
};
export default connect(mapStateToProps,mapDispatchToProps)(UserLogin);
