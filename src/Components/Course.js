import { BrowserRouter as Router,Route , Switch } from 'react-router-dom/cjs/react-router-dom.min'



import './Course_style.css'
import Header from "./Header"
import Side from "./Side"
import Content from "./Content"
import Footer from "./Footer"


let Course = ()=>{
    return(
        
        <div className="course">
            <Router>
            <Header />
            <Switch>
            <Side />
            <Content />
            </Switch>
            <Footer />
            </Router>
        </div>
    )
}
export default Course