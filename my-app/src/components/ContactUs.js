import React, {useEffect} from "react";
import { Button } from "reactstrap";
function ContactUs()
{
    useEffect(()=>
    {
     document.title= "Contact Us";
    },[]);
    return (
    <div>
        <h1>Want to Contact me ?</h1>
        <h2><Button color="success">Click here to connect</Button></h2>
    </div>
    );
}
export default ContactUs;