import { BrowserRouter as Router,Route , Switch } from 'react-router-dom/cjs/react-router-dom.min'



// import './App.css'
// import Header from "../src/Components/Header"
// import Home from "../src/Components/Home"
// import About from './Components/About'
// import Contact from "./Components/Contact"
// import Side from "../src/Components/Side"
// import Content from "../src/Components/Content"
// import Footer from "../src/Components/Footer"
import Busip from "../src/Components/busip"
import Login from "../src/Components/Login"
import Wallet from "../src/Components/Wallet"



let App = ()=>{
    let name="axcel"
    // const alerts = ()=>{
    //     alert("button clicked");
    
    return(
        
        <div className="course-react">
            {/* <Router> */}
             
            <Login name={name} />
             
            {/* <Route exact path="/" element={<Busip />}/>
                    <Route path="/login" element={<Login name={name} />}/>
                    <Route path="/wallet" element={<Wallet />}/> */}
                    {/* <Route path="/Side" render={() => <Side name={name} alerts = {alerts}/>}/> */}
                
            
            {/* </Router> */}
        </div>
    );
}
export default App;