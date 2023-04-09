import React,{useEffect} from "react";

function AboutUs()
{
    useEffect(()=>
    {
     document.title= "About Us";
    },[]);

    return (
    <div>
        <h1>Welcome to the About Us</h1>
        <br></br>
        <h2>My Name is Ishika Jain.</h2>
        <h3>I am a full stack Developer.</h3>
    </div>
    );
}
export default AboutUs;