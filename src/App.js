import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Game from './pages/Game';

export default function App() {
  return (
    <Switch>
      <Route exact path="/"><Login /></Route>
      <Route path="/game"><Game /></Route>
    </Switch>
  );
}
