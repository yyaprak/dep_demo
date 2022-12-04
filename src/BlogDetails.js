import { useHistory, useParams } from "react-router-dom";
import useFetch from './usefetch';

const BlogDetails = () => {

    const { id } = useParams();
    //const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const { data: blog, error, isPending } = useFetch('https://github.com/yyaprak/dep_demo/blob/main/data/db.json' + id);
    const history = useHistory();

    const handleClick=() => {
        //fetch('http://localhost:8000/blogs/' + blog.id, {
        fetch('https://github.com/yyaprak/dep_demo/blob/main/data/db.json' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        });
    }

    return (  
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
            
            
        </div>

    );
}

 
export default BlogDetails;