import React from 'react';

import {Container, Row, Col } from 'reactstrap'

export default class Greetings extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            name: 'Rumancha using no hooks',
            surname: 'Rumancha Surname using no hooks',
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSurnameChange = this.handleSurnameChange.bind(this);
    }   

    handleNameChange(e){
        this.setState({
            name: e.target.value
        });
    }


    handleSurnameChange(e){
        this.setState({
            surname: e.target.value
        });
    }

    render(){
        return (
            <Container>
                <Row label="Name">
                     <input 
                        value={this.state.name}
                        onChange={this.handleNameChange}
                     />
                    
                </Row>
                <Row label="Surname">
                     <input 
                        value={this.state.surname}
                        onChange={this.handleSurnameChange}
                     />
                    
                </Row>

            </Container>
        );
    }
}