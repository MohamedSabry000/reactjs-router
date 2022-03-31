import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";
import { fetchAllusers } from "../../api/users";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
        console.log("hello");
       fetchAllusers()
        .then(({data}) => {
            console.log(data);
          setUsers(data);
        })
        .catch((err) => {
          setUsers([]);
        });
  }, [setUsers]);

  return (<Container>
      {
          !users.length && <Spinner />
      }
      {users ? 
        <Row>
            {users.map((user, index) => (
                <Col key={index} lg={3} md={4} sm={12}>
                    <Card style={{ width: '95%', marginBottom: "15px" }}>
                        <Card.Img variant="top" src={`https://i.pravatar.cc/150?img=${user.id}`} />
                        <Card.Body>
                            <Card.Title>{user.name}</Card.Title>
                            <Card.Text>{user.email}</Card.Text>
                            <Link className="btn btn-primary" style={{ margin: "3px" }} to={`/profile/${user.id}`}>view</Link>
                            <Button style={{ margin: "3px" }} variant="warning">edit</Button>
                            <Button style={{ margin: "3px" }} variant="danger">remove</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
      </Row>
      : 
        <Alert variant="danger" dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
                Error fetching data.
            </p>
        </Alert>
      }
    </Container>
    );
}

export default Home;


