import React from "react"
function List({list}){
    
    const names = list
    const nameList = names.map(name => <p>{name}</p>)
    return(
        
        <div id="list">
           {nameList}
        </div>
    )
}
export default List

