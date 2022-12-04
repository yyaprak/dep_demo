//import { useState ,useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./usefetch";

const Home = () => {

    //const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
    const { data: blogs, isPending, error} = useFetch('/data/db.json')
    
    return (  
        
        <div className="home">
             {error && <div> { error }</div>}
             {isPending && <div> Loading...</div>}
             {blogs && <BlogList blogs={blogs} title="All Blogs!!!."/>}
       </div>
        
       
    );
}
 
export default Home;