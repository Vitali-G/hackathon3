import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage, PokemonPage, PokemonsPage, MyPokedex, NotFoundPage, Pokemon } from './pages';
import { PageWrapper } from './components';

import './assets/app.css';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<PageWrapper />}>
                <Route index element={<HomePage />} />
                <Route path="all" element={<PokemonsPage />} />
                <Route path="pokemon/:name" element={<PokemonPage />} />
                <Route path="pokemon" element={<Pokemon />} />
                <Route path="myPoke" element={<MyPokedex />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    )
};

export default App;
