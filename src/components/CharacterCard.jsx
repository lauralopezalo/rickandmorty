import React from "react";
import { Link } from "react-router-dom";
import {
    AliveIcon,
    DeadIcon,
    FemaleIcon,
    GenderUnknownIcon,
    GenderlessIcon,
    MaleIcon,
    SeparatorIcon,
    StatusUnknownIcon
} from "../../public/icons";



const CharacterCard = ({ id, name, status, location, image, gender }) => {

    console.log("gender=>" + gender + "status=>" + status)
    return (
        <div key={id} className="p-4 sm:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto">
            <Link to={`/character/${id}`} state={{ id }}>

                <div className="h-full bg-white border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                    <img className="md:h-80  w-full object-cover object-center" alt={name}
                        src={image} />
                    <div className="p-6">
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{name}</h1>
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Last known location</h2>
                        <p className="leading-relaxed mb-3">{location}</p>
                        <div className="flex justify-end">
                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                {gender === "Female" ? (<FemaleIcon />) : gender === "Male" ? (<MaleIcon />) : gender === "Genderless" ? (<GenderlessIcon />) : (<GenderUnknownIcon />)}
                            </span>
                            <SeparatorIcon />
                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                {status === "Alive" ? (<AliveIcon />) : status === "Dead" ? (<DeadIcon />) : (<StatusUnknownIcon />)}
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>

    )
}

export default CharacterCard


