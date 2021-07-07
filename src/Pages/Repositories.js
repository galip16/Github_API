import React, { useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
// import github from "../images/github.svg";

function Repositories() {
  const [repoArray, setRepoArray] = React.useState([]);
  // const [ repoDetails, setRepoDetails ] = useState({});

  // React.useEffect(() => {
  //   getFavoritesRepo().then(data => {
  //     console.log("asd", data)
  //     setRepoDetails(data);
  //   });
  // }, [])

  useEffect(() => {
    const url =
      "https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&page=5";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setRepoArray(data.items));
  }, []);

  return (
    <div className="container">
      <Row xs={1} sm={3} md={4} xl={5} className="g-4 align-items-center">
        {repoArray.map((item, key) => { return (
          <Col key={key} className="m-3" >
            <Card style={{ "width":"200px"}}>
              <Card.Img variant="top" src={item.owner.avatar_url} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text className="text-right" style={{"fontSize":"12px"}}>
                  {item.watchers}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )
        })}
      </Row>
    </div>
  );
}

export default Repositories;
