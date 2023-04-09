import React from "react";
import { Container,Button,CardFooter,CardText,
    CardSubtitle,CardTitle, CardBody, Card } 
    from "reactstrap";
import axios from "axios";
import {toast} from "react-toastify";
import base_url from "../api/bootapi";

const Course = ({course , update}) =>
{
    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/deletecourse/${id}`).then(
            (response)=>{
toast.success("Courses Deleted");
update(id);
            },
            (error)=>{
                toast.error("Courses not Deleted");
            }
        )
    }
    return (
       <Card className="text-center">
        <CardBody>
            <CardSubtitle className="font-weight-bold">
                {course.title}
            </CardSubtitle>
            <CardText>
                {course.description}
            </CardText>
            <Container className="text-center">
                <Button color="danger" onClick={()=>{
                    deleteCourse(course.id);
                }}>Delete</Button>
                <Button color="warning ml-3">Update</Button>
            </Container>
        </CardBody>
       </Card>

    );
};
export default Course;