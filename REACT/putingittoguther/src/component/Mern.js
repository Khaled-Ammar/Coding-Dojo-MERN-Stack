import React, { Component } from 'react';

    
    export default class Hedar extends Component {
        constructor(props){
            super(props);
            this.state={
                age:this.props.age,
            }
        }
        render() {
            const { firstName, lastName,hairColor } = this.props;
            return (
                <div>
                    <h1>My name is : { firstName}  { lastName }</h1>
                    <p>my age : {this.state.age}</p>
                    <p> my hair Color : {hairColor}</p>
                    <button onClick={ () => { this.setState({age:this.state.age+1}) } }>Add to Age</button>

                </div>
            );
        }
    }
    


