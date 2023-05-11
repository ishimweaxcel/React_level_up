 let CreateBlog = ({ name, alerts })=>{
    return(
        <main className="side">
        <form onSubmit={(e) => {
        e.preventDefault();
        console.log("my name is:", name);
        alerts();
        }}>
            <header>Welcome Mr/Ms</header>
            <input type="text" className="title" placeholder="Enter title" required></input>
            <input type="text" className="description" placeholder="Enter Description" required></input>
            <button>Submit</button>
        </form>
        </main> 
    );
}
export default CreateBlog;