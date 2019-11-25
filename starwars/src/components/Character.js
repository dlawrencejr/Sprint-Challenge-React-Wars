import React from "react";
import { Card } from "semantic-ui-react";

export default function Character(props) {
  return (
    <div className="Card">
      <Card.Group>
        <Card>
          <Card.Content>
            <Card.Header as="span">Star Wars Characters</Card.Header>
            <Card.Header as="h2">Name: <br></br>{props.name}</Card.Header>
            <Card.Meta as="h4">Birth Year: <br/><br/>{props.birth_year}</Card.Meta>
            <Card.Description as="p">Hair Color: <br/><br/>{props.hair_color}</Card.Description>
            <Card.Description as="p">Height: <br/><br/>{props.height}</Card.Description>
            <Card.Description as="p">Eye Color: <br/><br/>{props.eye_color}</Card.Description>
            <Card.Description as="p">Gender: <br/><br/> {props.gender}</Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
