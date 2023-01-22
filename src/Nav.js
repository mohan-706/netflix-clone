import React from 'react'
import './Nav.css'

function Nav(){
    return(
        <div className='nav'>
            <a href='/'>
             <img className='nav_Logo' src="/log.png" />
            </a>
            

            <div className='nav_Menu'>
                <a href='/'><span>Home</span></a>
                <a href='/Series'><span>Series</span></a>
                <a href='/Movie'><span>Movies</span></a>
                <a><span>Recently_Added</span></a>
                <a><span>My_List</span></a>

            </div>

                    
            <img className='nav_avatar' src="/avatar.png" />
        </div>
    );
}

export default Nav;