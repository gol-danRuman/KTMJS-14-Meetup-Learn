import React, {useState} from 'react';

import {Container, Row, Col } from 'reactstrap'

export default function Greetings(props){
    
    const [name, setName] = useState('Rumancha using hooks');
    const [surname, setSurname] = useState('Rumancha Surname using hooks');

    function handleNameChange(e){
        setName(e.target.value);
    }

    function handleSurnameChange(e){
        setSurname(e.target.value);
    }

        return (
            <Container>
                <Row label="Name">
                     <input 
                        value={name}
                        onChange={handleNameChange}
                     />
                    
                </Row>

                <Row label="Surname">
                     <input 
                        value={surname}
                        onChange={handleSurnameChange}
                     />
                    
                </Row>

            </Container>
        );
    
}