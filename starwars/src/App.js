import React, {useState, useEffect} from "react";
//import React from "react";
import './App.css';
import axios from "axios";
import { Container, Row } from "reactstrap";

import CharacterCard from "./components/CharacterCard";
// import CharInfo from "./components/CharacterInfo";


const App = () => {
    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.

    // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.

    const [chars, setChars] = useState([]);

    useEffect(() => {
        axios.get(`https://swapi.co/api/people/`)
            .then(res => {
                //console.log(res.data.results[0].name);
                //console.log(res.data);
                const characterInfo = res.data.results;
                //setChars(res.data.results);
                //console.log("star wars characters", characterInfo);
                setChars(characterInfo);
                //console.log(chars);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <Container>
            <Row>
                {chars.map(item => {
                        return (
                            <CharacterCard 
                                charInfo={item}
                            />
                        );
                    }
                )}
            </Row>
        </Container>
    );
}

export default App;
