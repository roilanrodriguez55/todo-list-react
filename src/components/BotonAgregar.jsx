import React from "react"

const BotonAgregar = ({ items, setItems, listar }) => {
	return (
		<button
			onClick={() => {
				listar(items, setItems)
			}}
		>
			Agregar
		</button>
	)
}

export default BotonAgregar
