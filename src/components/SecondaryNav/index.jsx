import React from 'react'
import "./SecondaryNav.css"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import RightArrowsIcon from '../Icons/RightArrowsIcon'

const SecondaryNav = ({pages = [], titlePage = "undefined"}) => {

    function listPages(pagesArray){
        return pagesArray.map((page, index) => {
            if (page.route.startsWith("/#")){
                return (
                    <li className='SecondaryNav__ul__li' key={index}>
                        <HashLink smooth to={page.route}>
                            { page.title }
                        </HashLink>
                        <RightArrowsIcon />
                    </li>
                )
            } else {
                return (
                    <li className='SecondaryNav__ul__li' key={index}>
                        <Link to={page.route}>
                            { page.title }
                        </Link>
                        <RightArrowsIcon />
                    </li>
                )
            }
        })
    }

  return (
    <nav className='SecondaryNav'>
        <ul className='SecondaryNav__ul'>
            <li className='SecondaryNav__ul__li'>
                <Link to="/">
                    Home
                </Link>
                <RightArrowsIcon />
            </li>
            {pages.length !== 0 && listPages(pages)}
            <li className='SecondaryNav__ul__li SecondaryNav__ul__li--actual'>
                {titlePage}
            </li>
        </ul>
    </nav>
  )
}

export default SecondaryNav