import React from "react"

const Item = ({
	item,
	eliminarItem,
	items,
	setItems,
	input,
	modificarItem,
	i,
}) => {
	return (
		<div className="item">
			<li>{item}</li>
			<button
				onClick={() => {
					input.value = item
				}}
			>
				Seleccionar
			</button>
			<button onClick={() => eliminarItem(i, items, setItems)}>Eliminar</button>
			<button onClick={() => modificarItem(input.value, item, items, setItems)}>
				Modificar
			</button>
		</div>
	)
}

export default Item
