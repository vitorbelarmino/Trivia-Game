import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Game from './pages/Game';
import Settings from './pages/Settings';
import Feedback from './pages/Feedback';
import Ranking from './pages/Ranking';

export default function App() {
  return (
    <Switch>
      <Route exact path="/"><Login /></Route>
      <Route exact path="/game"><Game /></Route>
      <Route exact path="/settings"><Settings /></Route>
      <Route exact path="/feedback"><Feedback /></Route>
      <Route exact path="/ranking"><Ranking /></Route>
    </Switch>
  );
}
