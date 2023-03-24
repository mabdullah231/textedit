import React, { useState } from 'react'
let styleclass = {
    width:"60%",
}
export default function About(props) {
return(

    <div>
    
        <h1 className='text-center'>Welcome To The Materna Text Application</h1>
        <div className='mx-auto my-4' style={styleclass}>

        <p className='text-secondary'>With The Use of This Application Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptatum molestias perferendis deleniti? Ducimus neque, harum explicabo voluptates reprehenderit ipsa rem id adipisci eaque voluptate!</p>
        <p className='text-secondary my-4'>It is made by a group of poepl Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptate earum libero doloribus corrupti cumque quos voluptas quisquam voluptates animi.</p>
        </div>
    </div>
    )
}