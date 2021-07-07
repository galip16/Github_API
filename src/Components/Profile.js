import React, {useState} from 'react'
import Repo from '../Components/Repo'
import {InputGroup, FormControl, Button, Row, Col, Card,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Profile() {
    const [data, setData] = useState({});
    const [username, setUsername] = useState("");
    const [repositories, setRepositories] =useState([]);
    const [repoVisibility, setRepoVisibility] = useState("hidden");

  
    const submitHandler = async (e) =>{
        e.preventDefault();
        // setUsername(""); calismiyor neden?
        setRepoVisibility('visible');
       

        const profile = await fetch(`https://api.github.com/users/${username}`);
        const profileJson = await profile.json();
        // console.log(profileJson);

        const repository = await fetch(profileJson.repos_url);
        const repositoriesJson = await repository.json();
        // console.log(repositoriesJson);


        if(profileJson){
            setData(profileJson);
            setRepositories(repositoriesJson)
        }
        // console.log(repositories)
        
    };

    return (
        <div className=" mt-5">
            <Container >
            <Row className="justify-content-md-center">
                <Col xs lg="8">
            <InputGroup  onChange={e => setUsername(e.target.value)} value={username} className="mb-3 mt-5">
                <FormControl
                    placeholder="type username"
                />
                <InputGroup.Append>
                    <Button type="submit" onClick ={submitHandler} variant="primary" >
                Search 
                    </Button>
                </InputGroup.Append>
            </InputGroup>
            </Col>
            </Row>

            <Row xs={1} lg={2} className=" bg-light" style={{visibility:repoVisibility}}>
                <Col >
                    <Card className=" text-center mx-auto my-2 " style={{ width: '25rem' }} >
                        <a href={data.html_url} target="_blank" rel="noreferrer"><Card.Img variant="top" src={data.avatar_url} className="border rounded-circle mx-auto mt-3" style={{width:"15rem",height:"15rem"
                    }}/></a>
                        <Card.Body>
                            <Card.Title className="font-weight-bold ">
                               Username
                            </Card.Title>
                            <Card.Text className="text-dark">
                                
                           <a style={{color:"black", fontSize:"2rem", textDecoration:"underline"}} href={data.html_url} target="_blank" rel="noreferrer"> {data.login}</a>
                            </Card.Text>
                        </Card.Body>

                        <Card.Body>
                            <Card.Subtitle className="font-weight-bold">
                               Real Name
                            </Card.Subtitle>
                            <Card.Text>
                           {data.name}
                            </Card.Text>
                        </Card.Body>

                        <Card.Body>
                            <Card.Subtitle className="font-weight-bold">
                               Location
                            </Card.Subtitle>
                            <Card.Text>
                          {data.location}
                            </Card.Text>
                        </Card.Body>

                        <Card.Body>
                            <Card.Subtitle className="font-weight-bold">
                              Number of public repositories
                            </Card.Subtitle>
                            <Card.Text>
                          {data.public_repos}
                            </Card.Text>
                        </Card.Body>

                        <Card.Body>
                            <Card.Subtitle className="font-weight-bold">
                               Number of followers
                            </Card.Subtitle>
                            <Card.Text>
                           {data.following}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            {/* </Row>
            <Row className="justify-content-center bg-primary mt-5 "> */}
               
                <Repo data={data} repositories={repositories} repoVisibility={repoVisibility}/>
            </Row>
            </Container>   
        </div>
    )
}

export default Profile