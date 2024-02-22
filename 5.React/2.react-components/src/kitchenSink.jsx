import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function KitchenSinkExample({ details }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={details.imageSrc} />
      <Card.Body>
        <Card.Title>{details.title}</Card.Title>
        <Card.Text>{details.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush card-body">
        {details.listItems.map((item, index) => (
          <ListGroup.Item key={index}>{item}</ListGroup.Item>
        ))}
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default KitchenSinkExample;
