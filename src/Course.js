import './Course_style.css'
import Header from "./Header"
import Side from "./Side"
import Content from "./Content"
import Footer from "./Footer"


let Course = ()=>{
    return(
        
        <div className="course">
            <Header />
            <Side />
            <Content />
            <Footer />
        </div>
    )
}
export default Course