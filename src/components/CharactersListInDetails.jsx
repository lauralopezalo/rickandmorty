// This component displays a list of characters in Detail View Interfaces (Episode Details and Location Details)


import React, { useEffect, useState } from "react";
import getListsInDetails from "../services/getListsInDetails";
import ProfileCard from "./ProfileCard/ProfileCard";



const CharactersListInDetails = (props) => {

    const [characters, setCharacters] = useState([]);

      useEffect(() => {
        getListsInDetails(props.urlsOfCharacters)
            .then((response) => { setCharacters(response) })
            .catch((error) => { console.log(error) });
    }, [props.urlsOfCharacters]);



    return (
        <div className="mx-auto max-w-screen-xl ">       
            <h1 className="text-lg lg:text-3xl font-bold mt-16 mb-2">Characters</h1>
            <hr className="border border-black border-t-1 mb-12" />
            <div className="flex flex-wrap gap-4 justify-center md:justify-between ">
                {characters.map((character, id) => (
                     <ProfileCard
                     key={`character-${character.id}`}
                     id={character.id}
                     name={character.name}
                     image={character.image}
                 />
                ))}
            </div>
        </div>
    );
}

export default CharactersListInDetails;
