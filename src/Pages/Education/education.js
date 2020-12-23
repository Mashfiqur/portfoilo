import React from 'react';
import { Card, Button } from 'react-bootstrap';

const education = () => {
    return (
        <div>
            <Card className="my-3 mx-5">
  <Card.Header>Bachelors in Computer Science & Engineering</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
    );
};

export default education;