import React from "react";
import { Card } from "semantic-ui-react";

export default function Character(props) {
  return (
    <div className="Card">
      <Card.Group>
        <Card>
          <Card.Content>
            <Card.Header as="span">Star Wars Characters</Card.Header>
            <Card.Header as="h2">{props.name}</Card.Header>
            <Card.Meta as="h4">{props.birth_year}</Card.Meta>
            <Card.Description as="p">{props.hair_color}</Card.Description>
            <Card.Description as="p">{props.height}</Card.Description>
            <Card.Description as="p">{props.eye_color}</Card.Description>
            <Card.Description as="p">{props.gender}</Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
