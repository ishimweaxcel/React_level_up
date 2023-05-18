import "../Components/busip.css"
import Discussion from "../Images/jason-goodman-Oalh2MojUuk-unsplash.jpg"
import { BsInstagram , BsFacebook, BsTwitter, BsWhatsapp } from "react-icons/bs"
 
let busip = ()=>{
    return(
        <div className="container">
            <div className="up">
                <nav></nav>
                <div className="left">
                    <header>BUSIP</header>
                </div>
                <div className="right">
                    <ul>
                        <li>Home</li>
                        <li>Event</li>
                        <li>Programs</li>
                        <li>Contact</li>
                        <li><button>Join us</button></li>
                    </ul>
                </div>
                </div>
            
                <div className="all">
                    <div className="part1">
                        <h1>Business</h1>
                        <h2>Confrence Fest</h2>

                        <p1>Do your brainstorming and cultivation what will be your strategy
                            for event. Make sure whatever you decide is aligning with your 
                            business goals and strategies
                        </p1>

                        <input type="submit" value="Register Now" id="button"/>
                    </div>

                    <div className="part2">
                        <img src={Discussion} alt="discussion image" id="discussion1"/>
                    </div>

                </div>
            
                <div className="bottom">
                     
                        <div className="One">
                           <p3>Wednesday, 17 May 2023</p3>
                           <p4>10:00 AM - 12:00 PM</p4>
                        </div>
                        <div className="Two">
                            <BsInstagram /><br /> <br />
                            <BsFacebook /><br /> <br />
                            <BsTwitter /><br /> <br />
                            <BsWhatsapp /><br /> <br />
                        </div>
                        <div className="Three">three</div>
                    
                    </div>   
        </div>
    );
}
export default busip;