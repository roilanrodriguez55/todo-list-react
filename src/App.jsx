import React, { useState } from "react"
import Formulario from "./components/Formulario"
import Item from "./components/Item"
import "../public/style.css"

const listar = (items, setItems) => {
	const input = document.querySelector("input")
	if (!input.value.trim()) {
		input.value = ""
		alert("Campos vacios")
		return
	}
	setItems([...items, input.value])
	input.value = ""
}

const eliminarItem = (pos, items, setItems) => {
	const restantes = items.filter((item, i) => i !== pos)
	setItems(restantes)
}

const modificarItem = (newItem, oldItem, items, setItems) => {
	const pos = items.findIndex(item => oldItem === item)
	const nuevoArray = items.map((item, i) => (i === pos ? newItem : item))
	setItems(nuevoArray)
}

const App = () => {
	const [items, setItems] = useState([])

	return (
		<>
			<h1>Lista de Items</h1>
			<Formulario items={items} setItems={setItems} listar={listar} />

			<ul>
				{items.map((item, i) => (
					<Item
						key={i}
						i={i}
						item={item}
						eliminarItem={eliminarItem}
						items={items}
						setItems={setItems}
						input={document.querySelector("input")}
						modificarItem={modificarItem}
					/>
				))}
			</ul>
		</>
	)
}

export default App
