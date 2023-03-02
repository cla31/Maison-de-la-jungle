import { useState, useEffect  } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
	//Ouvrir et fermer le panier
	const [isOpen, setIsOpen] = useState(true)
	// Cette fonction calcule le total de la commande d'un panier d'achats en ligne. 
	// Elle utilise la méthode reduce() sur un tableau d'objets représentant les différents 
	// types de plantes et les quantités commandées pour chaque type, avec leur prix unitaire respectif.
	// Le premier argument de reduce() est une fonction qui sera appliquée à chaque élément du tableau. 
	// Cette fonction prend deux arguments: l'accumulateur (acc dans ce cas) et 
	// l'élément en cours de traitement (plantType). 
	// Elle calcule la somme partielle 
	// du montant total de la commande pour chaque type de plante en multipliant la quantité
	// commandée (plantType.amount) par le prix unitaire (plantType.price), et l'ajoute à l'accumulateur.
    // Le deuxième argument de reduce() est la valeur initiale de l'accumulateur, qui est 0 dans ce cas.
    // Ainsi, à la fin de l'exécution de la fonction, la variable total contiendra le montant total 
	// de la commande de toutes les plantes dans le panier.
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price, // Récupération du total avec l'accumulateur de reduce
		0
	)
	// useEffect nous permet d'effectuer notre effet une fois le rendu du composant terminé.
	// useEffect(() => {
    //     alert(`J'aurai ${total}€ à payer 💸`)
    // })
	//Pour mettre à jour le total dans le titre de l'onglet du navigateur
	useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`
	}, [total])

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{/* Itération sur cart pour afficher le name, le prix et la quantité */}
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					{/* State passé en props */}
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
					
		</div>

	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart
