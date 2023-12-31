import React from "react";
import { Link } from "react-router-dom";
import { Button1 } from "../GlobalStyle";

const NotFound = () => {
    return (
        <div className="flex">
            <div className="grid h-screen w-1/3 px-4 bg-mydark place-content-center">
                <div className="text-center">
                    <h1 className="font-black text-lime text-9xl">404</h1>
                    <p className="text-2xl font-bold tracking-tight text-mylight sm:text-4xl">
                        Uh-oh!
                    </p>
                    <Button1 className="mt-8"><Link to='/'>Go back home</Link></Button1>
                </div>
            </div>

            < div className="bg-[url(../../public/notfound-img.png)] bg-cover bg-top bg-no-repeat h-screen  w-2/3">
            </div>
        </div>
    )
}

export default NotFound;