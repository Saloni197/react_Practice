import React from 'react'

const Hello = () => {

    //with JSX
    // return (
    //     <div>
    //         <h1>hii Everyone</h1>
    //     </div>
    // )

    //without JSX
    return React.createElement('div' , null , React.createElement('h1' , null , 'Hello!!!!!!!'))
};

export default Hello