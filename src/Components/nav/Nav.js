import React, { useState } from "react";
import styles from "./nav.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faWonSign } from '@fortawesome/free-solid-svg-icons';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { Link ,useParams} from "react-router-dom";
const Nav = (props) => {
  return (
    <>
      <nav>
        <div className={`${styles.container}`}>
          <div className={`${styles.logo} ${styles.philosopher}`}>
           <Link to={"/home/"+props.name.uname}><h2>Word<span>Wise.</span></h2></Link> 
          </div>
          <ul className={`${styles.links}`}>
           <Link to={"/home/"+props.name.uname}><li>Home</li></Link> 
           <Link to={"/bookshelf/"+props.name.uname}><li>Book Shelf</li></Link>
           <Link to={"/history/"+props.name.uname}><li>History</li></Link>
           <li><FontAwesomeIcon icon={faUser} /> {props.name.uname}</li> 
          </ul>
          <div className={`${styles.cart}`}>
            <span></span>
            {/* <button><FontAwesomeIcon icon={faBookOpen} /></button>   */}
            <button> <FontAwesomeIcon icon={faWonSign} /></button>  
          </div>
        </div>
        
      </nav>
    </>
  );
};

export default Nav;
