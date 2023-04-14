import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage, SnackPage, SnacksPage, BestSnackPage, AddSnackPage, NotFoundPage } from './pages';
import { PageWrapper } from './components';

import './assets/app.css';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<PageWrapper />}>
                <Route index element={<HomePage />} />
                <Route path="snacks" element={<SnacksPage />} />
                <Route path="snacks/:id" element={<SnackPage />} />
                <Route path="best" element={<BestSnackPage />} />
                <Route path="add" element={<AddSnackPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    )
};

export default App;
