import React from 'react';
import {connect} from 'react-redux';
import {adoptCat, fetchCat} from '../actions/cat';
import {adoptDog, fetchDog} from '../actions/dog';
import Pets from './Pets';
import './dashboard.css';

export class Dashboard extends React.Component {

    componentDidMount(){
         this.props.dispatch(fetchCat());
         this.props.dispatch(fetchDog());
    }
    render(){
        console.log('MY PROPS',this.props);
        return (
            <div className="container">
                <Pets 
                adoptee={this.props.catToAdopt}
            
                onAdoptPet={()=>this.props.dispatch(adoptCat())}
                ></Pets>
                <Pets 
                adoptee={this.props.dogToAdopt}
              
                onAdoptPet={()=>this.props.dispatch(adoptDog())}
                ></Pets>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    dogToAdopt:state.dogReducer.dog,
    catToAdopt:state.catReducer.cat

});

export default connect(mapStateToProps)(Dashboard);