import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home';
import Soundboard from "./Soundboard";
import SoundboardForm from "./SoundboardForm";
import UserSoundboard from "./UserSoundboard"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/soundboard" element={ <Soundboard /> } />
        <Route path="/soundboard-creation" element={ <SoundboardForm /> } />
        <Route path="/user-soundboard" element={ <UserSoundboard /> } />
      </Routes>
    </BrowserRouter>
  );
}