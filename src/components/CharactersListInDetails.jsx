// This component displays a list of characters in Detail View Interfaces (Episode Details and Location Details)


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getListsInDetails from "../services/getListsInDetails";
import SmallProfileCard from "./SmallProfileCard/SmallProfileCard";



const CharactersListInDetails = (props) => {

    const [characters, setCharacters] = useState([]);

      useEffect(() => {
        getListsInDetails(props.urlsOfCharacters)
            .then((response) => { setCharacters(response) })
            .catch((error) => { console.log(error) });
    }, [props.urlsOfCharacters]);



    return (
        <div className="bg-blue-300 mx-auto max-w-screen-xl">
            <h2 className="font-bold text-xl">Characters</h2>
            <hr className="border-black" />
            <div className="flex flex-wrap justify-center gap-4 ">
                {characters.map((character, id) => (
                     <SmallProfileCard
                     key={`character-${character.id}`}
                     id={character.id}
                     name={character.name}
                     image={character.image}
                    //  status={character.status}
                    //  location={character.location.name}
                    //  gender={character.gender}
                 />
                    // <div key={id} className="border">
                    //     <Link
                    //         to={`/character/${character.id}`}
                    //         state={{ id: character.id }}>
                    //         <img
                    //             alt={`${character.name}`}
                    //             src={character.image}
                    //             className="h-36 w-36 md:w-full md:h-64 object-cover"
                    //         />
                    //         <div>
                    //             <p>{character.name}</p>
                    //         </div>
                    //     </Link>
                    // </div>
                ))}
            </div>
        </div>
    );
}

export default CharactersListInDetails;
