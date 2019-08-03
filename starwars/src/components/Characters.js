import React from 'react';


export default function Character(props){

    return (

        <div>
            
    <h2>{props.name}</h2>

    <h3>{props.birth_year}</h3>

    <h3>{props.hair_color}</h3>

    <h3>{props.height}</h3>

    <h3>{props.eye_color}</h3>

    <h3>{props.gender}</h3>



        </div>
    )
};