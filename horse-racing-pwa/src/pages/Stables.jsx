import React from 'react';
import { useGameStore } from '../store/useGameStore';

const Stables = () => {
	const user = useGameStore((state) => state.user);
	const horses = useGameStore((state) => state.horses);

	if (typeof user !== 'object' || !Array.isArray(user.ownedHorses)) {
		return <p>Loading your stables...</p>;
	}

	const ownedHorses = horses.filter((horse) =>
		user.ownedHorses.includes(horse.id)
	);

	console.log('USER:', user);
	console.log('HORSES:', horses);
	console.log('OWNED HORSES:', user?.ownedHorses);

	return (
		<div style={{ padding: '20px' }}>
		<h1>🏇 Your Stables</h1>
		{ownedHorses.length === 0 ? (
			<p>You don't own any horses yet. Go buy one!</p>
		) : (
			<div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
			{ownedHorses.map((horse) => (
				<div
				key={horse.id}
				style={{
					border: '1px solid #ccc',
					padding: '15px',
					borderRadius: '10px',
				}}
				>
				<h2>{horse.name}</h2>
				<p>Breed: {horse.breed}</p>
				<p>Age: {horse.age} years</p>
				<p>Speed: {horse.speed}</p>
				<p>Stamina: {horse.stamina}</p>
				</div>
			))}
			</div>
		)}
		</div>
	);
};

export default Stables;
