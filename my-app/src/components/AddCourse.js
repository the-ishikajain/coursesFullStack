import React,{Fragment,useState,useEffect} from "react";
import { Form, FormGroup, Input } from "reactstrap";
import { Container,Button } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import {toast} from "react-toastify"
const AddCourse=()=>{
    useEffect(()=>
    {
     document.title= "Add Course";
    },[]);

    //for handler function
    const handleForm=(e)=>
    {
        console.log(course);
         postDatatoServer(course);
        e.preventDefault();
    }

    const[course,setCourse]=useState({});

    const postDatatoServer=(data)=>{
    axios.post(`${base_url}/addcourse`,data).then(
        (response)=>{
           console.log(response);
           console.log("success");
           toast.success("Course Added Successfully");
           setCourse({id: "",title : "",description: ""});
        },(error)=>{
            console.log(error);
            console.log("error");
            toast.error("Something went wrong");
        }
    )
    }
    return (
        <Fragment>
            <h1 className="text-center my-3">Fill Course Detail :</h1>
    <Form onSubmit={handleForm}>
     <FormGroup>
        <label for="userId">Course Id</label>
        <Input type="text" placeholder="Enter here" name="userId" id="userId"
     onChange={(e)=>{
        setCourse({...course,id: e.target.value});
     }}/>

     </FormGroup>
     
     <FormGroup>
        <label for="title">Course Title</label>
        <Input type="text" placeholder="Enter title here" id="title"
        onChange={(e)=>{
        setCourse({...course,title: e.target.value});
     }}/>

    
     </FormGroup>


     <FormGroup>
        <label for="desc">Course Description</label>
        <Input type="textarea" placeholder="Enter Description here" id="desc"
        style={{height : 150}}

onChange={(e)=>{
        setCourse({...course,description : e.target.value});
     }}/>

     </FormGroup>

    <Container className="text-center">
     <Button type="submit" color="success">Add Course</Button>
     <Button type="reset" color="warning" onClick={()=>{
        setCourse({id: "",title : "",description: ""});
     }}>Clear</Button>
    </Container>

    </Form>
        </Fragment>
    );
    
};
export default AddCourse;