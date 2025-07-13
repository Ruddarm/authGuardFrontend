import React from 'react'
import "./components.module.css"

function TitleTwo({id,className,title}){
    return(
        <>
            <h2 id={id} className={className}>
                {title}
            </h2>
        </>
    )
}

export {TitleTwo}