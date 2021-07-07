import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";

function AboutUs(props) {
  const [usersInfo, setUsersInfo] = useState({});

  useEffect(() => {
    fetch(`https://api.github.com/users/${props.user}`)
      .then((response) => response.json())
      .then((data) => setUsersInfo(data));
  }, []);

  return (
    <div>
      <Row>
        <Col>
          <Card
            className=" text-center mx-auto my-2 "
            style={{ width: "25rem" }}
          >
            <a href={usersInfo.html_url} target="_blank" rel="noreferrer">
              <Card.Img
                variant="top"
                src={usersInfo.avatar_url}
                className="border rounded-circle mx-auto mt-3"
                style={{ width: "15rem", height: "15rem" }}
              />
            </a>
            <Card.Body>
              <Card.Title className="font-weight-bold ">Username</Card.Title>
              <Card.Text className="text-dark">
                <a
                  style={{
                    color: "black",
                    fontSize: "2rem",
                    textDecoration: "underline",
                  }}
                  href={usersInfo.html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  {usersInfo.login}
                </a>
              </Card.Text>
            </Card.Body>

            <Card.Body>
              <Card.Subtitle className="font-weight-bold">
                Real Name
              </Card.Subtitle>
              <Card.Text>{usersInfo.name}</Card.Text>
            </Card.Body>

            <Card.Body>
              <Card.Subtitle className="font-weight-bold">
                Location
              </Card.Subtitle>
              <Card.Text>{usersInfo.location}</Card.Text>
            </Card.Body>

            <Card.Body>
              <Card.Subtitle className="font-weight-bold">
                Number of public repositories
              </Card.Subtitle>
              <Card.Text>{usersInfo.public_repos}</Card.Text>
            </Card.Body>

            <Card.Body>
              <Card.Subtitle className="font-weight-bold">
                Number of followers
              </Card.Subtitle>
              <Card.Text>{usersInfo.following}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default AboutUs;
