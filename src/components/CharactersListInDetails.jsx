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
        <div className="mx-auto max-w-screen-xl">
            <h2 className="font-bold text-xl">Characters</h2>
            <hr className="border-black" />
            <div className="flex flex-wrap justify-center gap-4 ">
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
