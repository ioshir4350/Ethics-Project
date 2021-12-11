import React from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import story from './story.json'
import Button1 from './Button1';
import Button2 from './Button2';
import Button3 from './Button3';
import NavBar from './NavBar.js';


const Decision = () => {
    // var currPage = 0;
    // var currTime = 9;

    const {task} = useParams()
    
    //console.log(story[task])
    const content = story[task].content
    const decisions = story[task].decisions
    const links = story[task].links
    console.log(content, decisions, links);

    return (
        <div>
            <NavBar/>
            <h1 className='player-name'>Player: {localStorage.getItem('username')}</h1>
            <h3 className="content">
                {content}
            </h3>
            
            {links.map((link, i) => {
                return(
                <Link to={"/page/" + link}>
                    <Button3>{decisions[i]}</Button3> 
                </Link>
                )
            })}


        </div>              
    )
}

export default Decision