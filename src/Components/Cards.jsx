import React from "react";
import {Row, Col,  CardGroup, Card } from "react-bootstrap";

function Cards() {


  const cssStyle = {
    margin : "20px auto", 
    width: "400px",
    height : "250px"
  }






  return (
    <div >
      <Row xs={1} lg={2} xl={3}  >
       
   

      <Col>
        <Card >
          <Card.Img
          style={cssStyle}
            variant="top"
            src="https://troymcconaghy.files.wordpress.com/2020/03/codepen.png"
          />
          <Card.Body>
            <Card.Title>Simple Github API Webapp</Card.Title>
            <Card.Text>
              Enter a single Github username below and click the button to
              display profile info via JSON.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <a href="https://codepen.io/xus/pen/Hwoih">
                https://codepen.io/xus/pen/Hwoih
              </a>
            </small>
          </Card.Footer>
        </Card>
        </Col>


        <Col>
        <Card  >
          <Card.Img
          style={cssStyle}
            variant="top"
            src="https://www.pcgames.de/screenshots/original/2011/03/Youtube-Logo1.jpg"
          />
          <Card.Body>
            <Card.Title>Fetch Data from the Github API with React
</Card.Title>
            <Card.Text>
            In this tutorial, you are creating an App using the Github API to fetch data and Some Application.

            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <a href="https://www.youtube.com/watch?v=aGiPMygfMM4">
              https://www.youtube.com/watch?v=aGiPMygfMM4
              </a>
            </small>
          </Card.Footer>
        </Card>
        </Col>

        <Col>
        <Card >
          <Card.Img
          style={cssStyle}
            variant="top"
            src="https://jessehouwing.net/content/images/size/w2000/2018/07/stackoverflow-1.png"
          />
          <Card.Body>
            <Card.Title>Questions tagged "github-api"</Card.Title>
            <Card.Text>
            You can find the most asked questions about github api on Stackoverflow here
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <a href="https://stackoverflow.com/questions/tagged/github-api">
              https://stackoverflow.com/questions/tagged/github-api
              </a>
            </small>
          </Card.Footer>
        </Card>
        </Col>


   
    
      </Row>
    </div>
  );
}

export default Cards;
