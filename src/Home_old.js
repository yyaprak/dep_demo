import { useState } from "react";

const Home = () => {
    //let name='maria'
    const [name,setName]=useState('maria');
    const [age,setAge]=useState(25);
    const handleClick = (e)=>{
        console.log('Hello Wordl!!',e);
        //name = 'luici';
        //console.log('luici');
        setName('luigi');
        setAge(15);
     }
     const handleClickAgain = (name,e)=>{
        console.log('Hello '+name,e);
     }
     const handleClickAgain2 = (name,e)=>{
        console.log('Hello '+name,e.target);
     }
    return (  

        <div className="home">
            <h2>HomePage</h2>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e)=>{
                //console.log('hello');
                handleClickAgain('maria',e);
            }}>Click me Again</button>
            <button onClick={(e)=>handleClickAgain2('maria', e)}>Click me Again2</button> 

        </div>
    );
}
 
export default Home;