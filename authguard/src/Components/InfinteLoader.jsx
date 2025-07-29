import React from 'react'
import Styles from "./components.module.css"
function InfiniteLoader(){
    return(
        <div className={Styles.loadingContainer}>
            <div className={Styles.loadingBar}>

            </div>
        </div>
    )
}

export default InfiniteLoader;