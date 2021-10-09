import React from "react";
import styles from './landing.module.css'

const Landing =()=>{
    return (<div className={styles.container} id="home">

      
      <img src="/images/Landing.png" className={styles.image}/>
        <img src="/images/Tag.svg" className={styles.tag}/>
 
    </div>)
}

export default Landing