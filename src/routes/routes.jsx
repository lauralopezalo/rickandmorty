import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from '../components/NavBar';

import Home from '../pages/Home';
import CharactersList from '../pages/CharactersList';
import CharacterDetails from '../pages/CharacterDetails/CharacterDetails';
import LocationsList from '../pages/LocationsList';
import LocationDetails from '../pages/LocationDetails/LocationDetails';
import EpisodesList from '../pages/EpisodesList';
import EpisodeDetails from '../pages/EpisodeDetails/EpisodeDetails';
import NotFound from '../pages/NotFound';


const Router = () => (

    <BrowserRouter>
        <Routes>

            <Route path="/" element={
                <div>
                    <NavBar />
                    <Home />
                </div>
            } />

            <Route path="/characters-list" element={
                <div>
                    <NavBar />
                    <CharactersList />
                </div>
            } />

            <Route path="/character/:id" element={
                <div>
                    <NavBar />
                    <CharacterDetails />
                </div>
            } />

            <Route path="/locations-list" element={
                <div>
                    <NavBar />
                    <LocationsList />
                </div>
            } />

            <Route path="/location/:id" element={
                <div>
                    <NavBar />
                    <LocationDetails />
                </div>
            } />

            <Route path="/episodes-list" element={
                <div>
                    <NavBar />
                    <EpisodesList />
                </div>
            } />

            <Route path="/episode/:id" element={
                <div>
                    <NavBar />
                    <EpisodeDetails />
                </div>
            } />

            <Route path="*" element={<NotFound />} />

        </Routes>
    </BrowserRouter >
);

export default Router;