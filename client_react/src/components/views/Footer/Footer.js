import React from 'react'
import { InstagramOutlined,LinkedinOutlined } from '@ant-design/icons';


function Footer() {
    return (
        <footer>
           <p> copyright © Narae. all rights reserved </p>
           <div class="sns-wrap">
            <ul>
                <li>
                    <a href="https://www.instagram.com/alas0213/" target="_blank"><InstagramOutlined /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/naraejang/" target="_blank"><LinkedinOutlined /></a>    
                </li> 
            </ul>
           </div>
        </footer>
    )
}

export default Footer
