let CreateBlog = ({name})=>{
    return(
        <form>
            <input type="text" className="title" placeholder="Enter title" required></input>
            <input type="text" className="description" placeholder="Enter Description" required></input>
            <input type="submit" value="submit"></input>
        </form>
    );
}