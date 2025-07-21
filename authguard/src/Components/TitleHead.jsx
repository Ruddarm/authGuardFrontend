import React from 'react'
import Style from "./components.module.css"

function TitleTwo({id,className,title}){
    return(
        <>
            <h2 id={id} className={className}>
                {title}
            </h2>
        </>
    )
}
function TitleThree({id,className,title}){
    return(
        <h2 className={Style.titleThree}>
            {title}
        </h2>
    )
}
export {TitleTwo,TitleThree}