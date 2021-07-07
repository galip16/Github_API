import React from 'react';
import { Card, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
 import 'bootstrap/dist/css/bootstrap.min.css';
 function Repo({repositories, repoVisibility}) {
  

   
    return (
        <div>
       
            <Col> 

            <Card className=" text-left mx-auto my-2 "  
            style={{ width: '25rem',
                    visibility: repoVisibility}} >
                <Card.Body>
                    <Card.Title className="text-center font-weight-bold">REPOSITORIES</Card.Title>
                </Card.Body>
                {repositories.map((repo,key)=>(
                  
                    <ListGroup className="list-group-flush" key={repo.name} style={{cursor:"pointer"}}>
                        <ListGroupItem>
                           <Card.Link className="text-dark"  target="_blank" href={repo.html_url}>
                               {key+1}. {repo.name} 
                            </Card.Link>    
                        </ListGroupItem>
                    </ListGroup>
        

                ))}
                </Card>
                </Col>
        </div>
    )
}

export default Repo
