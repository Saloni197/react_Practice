import React from "react";

function Column(){
    const items = []
    return(
       <React.Fragment>
       {/* { */}
         {/* items.map(item =>(
             <React.Fragment key = {item.id}>
             <h1>Title</h1>
             <p>{item.Title}</p>

             </React.Fragment>

            
         ))
       } */}
            <td>column 1</td>
            <td>column 2</td>
        </React.Fragment>
    )
}

export default Column