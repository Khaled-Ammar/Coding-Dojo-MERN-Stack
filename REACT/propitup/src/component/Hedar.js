import React, { Component } from 'react';

    
    export default class Hedar extends Component {
        render() {
            const { firstName, lastName,age,hairColor } = this.props;
            return (
                <div>
                    <h1>My name is : { firstName}  { lastName }</h1>
                    <p>my age : {age}</p>
                    <p> my hair Color : {hairColor}</p>
                </div>
            );
        }
    }
    


