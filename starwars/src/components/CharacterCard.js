import React from "react";
import { Card, CardBody, CardTitle, CardText} from "reactstrap";

export const CharacterCard = (props) => {
    return (
        <Card className="">
            <CardBody>
                <CardTitle>Name: {props.charInfo.name}</CardTitle>
                <CardText>Height: {props.charInfo.height}</CardText>
                <CardText>Mass: {props.charInfo.mass}</CardText>
                <CardText>Hair color: {props.charInfo.hair_color}</CardText>
                <CardText>Skin color: {props.charInfo.skin_color}</CardText>
            </CardBody>
        </Card>
    );
};
export default CharacterCard;