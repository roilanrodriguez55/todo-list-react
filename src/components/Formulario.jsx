import React from "react"
import BotonAgregar from "./BotonAgregar"

const Formulario = ({ items, setItems, listar }) => {
	return (
		<form
			className="form"
			onSubmit={e => {
				e.preventDefault()
			}}
		>
			<input type="text" placeholder="Ingrese un elemento" />
			<BotonAgregar items={items} setItems={setItems} listar={listar} />
		</form>
	)
}

export default Formulario
