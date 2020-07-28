import React from 'react';
import Logo from '../../assets/images/GolemGames.png';
import './Menu.css'
import ButtonLink from './components/ButtonLink';

function Menu(){
	return (
		<nav className="Menu">
			<a href="/">
				<img className="Logo" src={Logo} alt="GolemGamesLogo"/>
			</a>
			<a className="ButtonLink" href="/">
				Novo Video
			</a>
		</nav>
	);
}
export default Menu;
