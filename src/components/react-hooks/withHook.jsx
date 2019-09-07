import React, {useState, useEffect } from 'react';

import {Container, Row, Col } from 'reactstrap'

export default function Greetings(props){
    
    const [name, setName] = useState('Ruman');
    const [surname, setSurname] = useState('Dangol');


    //use for replace of componentdidmount and didupdate. NO need of React Class component to use for state and lifycle
    // we can useState and useEffect in fuction for using state and lifecycle
    useEffect(()=>{
        document.title = name + ' '+ surname+'[H]';
    })

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