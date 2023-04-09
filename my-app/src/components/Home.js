import {React,useEffect} from "react";
import { Container,Button } from "reactstrap";

const Home = () =>
{
    useEffect(()=>
    {
     document.title= "Home";
    },[]);
    return (
        <div className="home1">
          
               <h1>Welcome to the Project</h1>
               <p>Spring boot + React</p>
           
           <Container>
            <Button color="primary" outline>Start Using</Button>
           </Container>
        </div>
    );
};
export default Home;