import { useState, useEffect } from 'react'
import '../styles/Footer.css'


function Footer({cart}) {
	const [inputValue, setInputValue] = useState('')

// useEffect(()=>{
// 	console.log("1. Cette alerte s'affiche à chaque rendu");
// })
// useEffect(()=>{
// 	console.log("2. Cette alerte s'affiche au premier render");
// },[])
//Ici cela s'affiche dès que cart sera mis à jour (lorsque j'ajoute une plante à mon panier)
// useEffect(()=>{
// 	console.log("3. Cette alerte s'affiche au premier render et lorsque le panier est mis à jour");
// },[cart])
//Déclencher l'effet lorsque l'élément est retiré du DOM
useEffect(()=>{
	return ()=>{console.log("4. Cette alerte s'affiche quand Footer est retiré du DOM.");}
	
})

//Déclencher un effet lorsque l'élément est retiré du dom: appeler une fonction qui déclenche l'effet.
	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
		</footer>
	)
}

export default Footer
