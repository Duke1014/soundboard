import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home';
import Soundboard from "./Soundboard";
import SoundboardForm from "./SoundboardForm";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/soundboard" element={ <Soundboard /> } />
        <Route path="/soundboard-creation" element={ <SoundboardForm /> } />
      </Routes>
    </BrowserRouter>
  );
}