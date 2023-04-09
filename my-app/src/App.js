import React from "react";
import logo from './logo.svg';
import './App.css';
import { Button, Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Home from './components/Home';
import Course from './components/Course'
import Allcourses from './components/Allcourses'
import AddCourse from "./components/AddCourse";
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import Menus from "./components/Menus";
import { BrowserRouter as Router , Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  const btnHandle = ()=>
  {
    toast.success("done",
    {
      position : "top-center",
    });
  };
  return (
  <div className="main">
   <Router>
   <ToastContainer/>
        <Container>
          <Header/>
          <Row>
            <Col md={4}>
              <Menus/>
            </Col>
            <Col md={8}>
              <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/add-course" element={<AddCourse/>} exact />
             <Route path="/view-course" element={<Allcourses/>} exact />
             <Route path="/contact-us" element={<ContactUs/>} exact />
             <Route path="/about-us" element={<AboutUs/>} exact />
             </Routes>
            </Col>
          </Row>
        </Container>


   {/* <Home/>
   <AddCourse/>
   <Allcourses/>
  <AboutUs/>
  <ContactUs/> */}
   </Router>
  </div>
 ) ;
}

export default App;
