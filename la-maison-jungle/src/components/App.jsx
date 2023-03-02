import { useState } from 'react'
import Banner from './Banner'
import logo from '../assets/logo.png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'
// Objectif:
// Updater votre panier directement en cliquant sur un bouton lié à chaque plante. 
// comment faire pour partager un élément d'état entre plusieurs composants ?
// il faudra faire remonter ces données vers le state local du plus proche composant qui est un parent commun.
// faire remonter cart dans  App.js et faire passer updateCart en props.
function App() {
	//Initialisation du state avec un tableau vide, pour faire de cart un tableau d'objets.
	const [cart, updateCart] = useState([])

	const [isFooterShown, updateIsFooterShown] = useState(true)
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				{/* Cart est un tableau avec l'objet plante cliqué */}
				{console.log("cart",cart)};
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<button onClick={()=>updateIsFooterShown(!isFooterShown)}>Cacher !</button>
			{/* Apparition du footer au clic avec le useEffect (apparition/disparition du DOM) */}
			{isFooterShown && <Footer cart={cart} />}

		</div>
	)
}

export default App
