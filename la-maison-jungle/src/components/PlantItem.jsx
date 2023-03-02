import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function PlantItem({ cover, name, water, light, price }) {
	return (
		//Au clic de l'image fonction pour afficher le nom de la plante
		<li className='lmj-plant-item' onClick={() => handleClick(name)}>
			{/* Affichage du prix */}
			<span className='lmj-plant-item-price'>{price}€</span>
			{/* Affichage de l'image */}
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				{/* 2 composants careScale car on a forcément une ligne pour les gouttes et une autre pour les soleils */}
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem
