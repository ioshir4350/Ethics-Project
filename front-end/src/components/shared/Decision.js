import React from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import story from './story.json'

const Decision = () => {
    var currPage = 0;
    var currTime = 9;
    const {task} = useParams()
    
    //console.log(story[task])
    const content = story[task].content
    const decisions = story[task].decisions
    const links = story[task].links
    console.log(content, decisions, links);
    return (
        <div>
            <h3>
                {content}
            </h3>
            {links.map((link, i) => {
                return(
                <Link to={"/page/" + link}>
                    <button>{decisions[i]}</button>    
                </Link>
                )
            })}


        </div>              
    )
}

export default Decision