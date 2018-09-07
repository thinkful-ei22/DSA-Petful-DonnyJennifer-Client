import React from 'react';
import Pets from './Pets';

export default class Dashboard extends React.Component {
    render(){
        console.log(this.props.catToAdopt);
        return (
            <div>
                <Pets 
                adoptee={this.props.catToAdopt}
                onAdoptPet={()=>console.log('adopted!')}
                ></Pets>
                <Pets 
                adoptee={this.props.dogToAdopt}
                onAdoptPet={() => console.log('adopted!')}
                ></Pets>
            </div>
        )
    }
}