
let names = [
	"Daniel Belle",
	"Jon Lois",
	"Jordin White",
	"Mira Todd",
	"Casey Webb",
	"Alvin Valdez",
	"Corinne Dunn",
	"Malachi Acevedo",
	"Raiden Cisneros",
	"Jonas Velazquez",
	"Ivan Massey",
	"Edgar Schultz",
	"Valentino Lozano",
	"Gianna Brady"

];


function searchName(){

	let nameSearch = document.getElementById('writedName').value;
	let listItem ='';

	for(i in names){
		
		let nameCheck = names[i];

		if(nameSearch == nameCheck){

			listItem += `
		<li class="list-group-item">
			${nameCheck}
		</li>`;
		}
	}

	document.getElementById('listid').innerHTML = listItem;

}

function loadNames(){

	let listItem = '';
	for (i in names) {

		let name = names[i];

		listItem += `
		<li class="list-group-item">
			${name}
		</li>`;

	}
	document.getElementById('listid').innerHTML = listItem;

}