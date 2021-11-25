import React, { FC } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/home/HomePage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Navigation from './components/navigation/Navigation';
import routes from './pages/routes';

const App: FC = () => (
    <BrowserRouter>

        <Navigation />

        <Routes>
            <Route caseSensitive path={routes.home} element={<HomePage />} />
            <Route caseSensitive path={routes.login} element={<Login />} />
            <Route caseSensitive path={routes.register} element={<Register />} />
            <Route path={routes.notFound} element={<div />} />
        </Routes>
    </BrowserRouter>
);

export default App;
