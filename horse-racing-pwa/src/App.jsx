import React, { useEffect } from 'react';
import { useGameStore } from './store/useGameStore';
import Stables from './pages/Stables';

import horsesData from './data/horses.json';
import usersData from './data/users.json';
import racesData from './data/races.json';
import leaguesData from './data/leagues.json';

const App = () => {
  const initializeGame = useGameStore((state) => state.initializeGame);

  useEffect(() => {
    console.log('USERS:', usersData); // ← debug ici
    initializeGame({
      users: usersData,
      horses: horsesData,
      races: racesData,
      leagues: leaguesData,
    });
  }, [initializeGame]);

  const user = useGameStore((state) => state.user);

  return user ? <Stables /> : <p>Loading...</p>;
};

export default App;
