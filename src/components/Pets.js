import React from 'react';

export default class Pets extends React.Component {
render(){
    return(
<div>
    <header>
        <h1>{this.props.adoptee.name}</h1>
        <img src={this.props.adoptee.imageURL} alt={this.props.adoptee.description}></img>
    </header>
    <main>
        <dl>
            <dt>Sex:</dt>
            <dd>{this.props.adoptee.sex}</dd>
            <dt>Age:</dt>
            <dd>{this.props.adoptee.age}</dd>
            <dt>Breed:</dt>
            <dd>{this.props.adoptee.breed}</dd>
            <dt>Story:</dt>
            <dd>{this.props.adoptee.story}</dd>
        </dl>
        <button onClick={e=> {
            e.preventDefault();
            this.props.onAdoptPet()}}>Adopt!</button>
    </main>
</div>
    );
}
}