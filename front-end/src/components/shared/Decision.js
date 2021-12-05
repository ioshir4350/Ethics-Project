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
    const links = story[task].links
    return (
        <div>
            <h3>
                {content}
            </h3>
            {links.map((link) => {
                <Link to={"/page/" + link}/>
            })}


        </div>              
    )
}

export default Decision