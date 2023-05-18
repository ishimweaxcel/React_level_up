import { BrowserRouter as Router,Route , Switch } from 'react-router-dom/cjs/react-router-dom.min'



import './App.css'
// import Header from "../src/Components/Header"
// import Home from "../src/Components/Home"
// import About from './Components/About'
// import Contact from "./Components/Contact"
// import Side from "../src/Components/Side"
// import Content from "../src/Components/Content"
// import Footer from "../src/Components/Footer"
 
import Login from './Components/Login'



let App = ()=>{
    // let name="Kanyana"
    // const alerts = ()=>{
    //     alert("button clicked");
    
    return(
        
        <div className="course">
            {/* <Router>
            <Header />
            
            <Side />
            <Content />
            <Switch><Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/Side" render={() => <Side name={name} alerts = {alerts}/>}/>
                    </Switch>
            <Footer />
            </Router> */}
        </div>
    );
}
export default App;