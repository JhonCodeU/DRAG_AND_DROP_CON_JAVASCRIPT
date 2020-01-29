const lista = document.getElementById('lista');

Sortable.create(lista,{
	animation: 150,
	chosenClass: "seleccionado",
	//ghostClass: "fantasma"
	dragClass: "drag",
	onEnd: ()=>{
		//console.log('se inserto un elemeto')

	},
	group: "lista-personas",
	store:{
		//guardamos el orden de la lista 
		set: (Sortable) => {
			const orden = Sortable.toArray();
			console.log(orden)
			localStorage.setItem(Sortable.options.group.name, orden.join(' | '))//.join separa un arreglo por cada elemento en una cadena de texto
		},

		//Obtenemos el orden de la lista
		get: (Sortable) => {
			const orden = localStorage.getItem(Sortable.options.group.name);
			return orden ? orden.split(' | ') : [];//convertir a array
		}
	}
});