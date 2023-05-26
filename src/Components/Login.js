import "./login2.css"

import location from "../Images/location.jpg"
import email from "../Images/email.jpg"
import phone from "../Images/phone.jpg"
import fax from "../Images/Fax.jpg"

let Login = ({name}) => {
    return(<div className="container">
    <div className="up">

    </div>
    <div className="all">
        <div className="contactUs">
            <h1> Contact Us</h1>
        <div><img src={location} alt="location icon"/> <p1 id="description"> KK95ST, kigali city, Rwanda</p1></div>
        <div><img src={email} alt="email icon"/><p2 id="description">aishimwe811@gmail.com</p2></div>
        <div><img src={phone} alt="phone icon"/> <p3 id="description">+250786625150</p3></div>
        <div><img src={fax} alt="fax icon"/> <p4 id="description">0786625150</p4></div>
        </div>
   
    
   <div className="GetinTouch">
    <header>Get in Touch</header>
    <p>feel free to drop us a line</p>
    <input type="text" placeholder="enter your name" id="content" value={name} required ></input>
    <input type="email" placeholder="enter your email" id="content" required></input>
    <input type="text" placeholder="your message" id="content1" required></input>
    <input type="button" value="SEND" id="submit"></input>
    </div> 
</div>

    <div className="bottom">

    </div>
</div>
);
}

export default Login;

{/* <div className="container">
            <div className="up">

            </div>
            <div className="all">
                <div className="contactUs">
                    <h1> Contact Us</h1>
                    <h1> Contact Us</h1>
                <div><img src={location} alt="location icon"/> <p1 id="description"> KK95ST, kigali city, Rwanda</p1></div>
                <div><img src={email} alt="email icon"/><p2 id="description">aishimwe811@gmail.com</p2></div>
                <div><img src={phone} alt="phone icon"/> <p3 id="description">+250786625150</p3></div>
                <div><img src={fax} alt="fax icon"/> <p4 id="description">0786625150</p4></div>
                </div>
            </div>

        </div> */}