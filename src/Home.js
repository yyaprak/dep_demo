import { useState ,useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([

        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
        { title: 'Embedded dev top tips', body: 'lorem ipsum...', author: 'ibrahim', id: 4 }
    ]);

    const handleDelete= (id) => {
        const newBlogs=blogs.filter(blog => blog.id !==id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect run');
        console.log(blogs);

    });

    return (  
        
        <div className="home">
             <BlogList blogs={blogs} title="All Blogs!!!." handleDelete={handleDelete}/>
             {//<BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title="Mario's  blogs!" handleDelete={handleDelete}/>
             }
        
        </div>
        
       
    );
}
 
export default Home;