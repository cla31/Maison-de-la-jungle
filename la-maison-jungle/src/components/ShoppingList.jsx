import { useState } from 'react'
import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {
	const [activeCategory, setActiveCategory] = useState('')
	//Liste des catégories de plantes
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
  //Fonction qui ajoute un nouvel élément au panier
  //Elle récupère en paramètre le name et le price de la plante.
	function addToCart(name, price) {	
		//La variable cart correspond au panier actuel	
		//vérification si la plante est déjà présente dans le panier. 
		const currentPlantSaved = cart.find((plant) => plant.name === name) //Est-ce que ds notre grosse liste d'objets, la plante est déjà présente?
		//Apparaît que si on a cliqué sur le bouton "ajouter" pour la 2ème fois sur la même plante
		console.log("currentPlantSaved",currentPlantSaved);
		//Si elle existe...
		if (currentPlantSaved) { //Création d'un nouveau tableau sans elle.
			//Si la plante actuelle a déjà été sauvegardée ds le panier
			//On exclue l'élément du panier
			// Comme la plante est déjà présente dans le panier, 
			// nous devons d'abord la supprimer du panier, 
			// puis ajouter la plante avec la nouvelle quantité mise à jour.
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			console.log("cartFilteredCurrentPlant",cartFilteredCurrentPlant);
			//On ajoute ce nouveau tableau sans elle
			//Et on ajoute dans ce tableau un objet, avec la quantité précedente à laquelle on ajoute 1.
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 } //Créé un nouvel objet représentant l'article qui doit être ajouté ou mis à jour dans le panier
				//amount est maj en ajoutant 1 à la quantité actuelle de l'article qui est stockée
				// dans currentPlantSaved.amount
			])
			// En gros, cette fonction ci-dessus met à jour le panier avec un nouvel article
			// ou une mise à jour de la quantité d'un article existant, en ajoutant l'article
			// ou en mettant à jour la quantité dans un nouveau tableau.

			
			// Si la plante n'est pas déjà sauvegardée dans le panier, 
			// le filtrage n'a pas lieu et une nouvelle plante avec 
			// une quantité de 1 est simplement ajoutée au panier.
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}
	    // En gros, la fonction vérifie d'abord si la plante est déjà présente dans le panier
		// Si oui, elle augmente la quantité de cette plante de 1 dans le panier. 
		// Si non, elle ajoute cette plante avec une quantité de 1 dans le panier.
	return (
		<div className='lmj-shopping-list'>
			{/* Liste de catégories pour le composant categorie */}
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='lmj-plant-list'>
				{/* Mapping en fonction des catégories */}
				{plantList.map(({ id, cover, name, water, light, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<button onClick={() => addToCart(name, price)}>Ajouter</button>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList
