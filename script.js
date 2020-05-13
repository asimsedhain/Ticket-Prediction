document.getElementById("formLogin").addEventListener("submit", login);
console.log("hello");
async function login(e) {
	e.preventDefault();
	console.log("hello");
	let shortDescription = document.getElementById("Short Description");
	let additionalComment = document.getElementById("Additional Commment");
	let category = document.getElementById("Category");
	let url = "http://127.0.0.1:9000/";
	data = await postData(url, { text: `${shortDescription.innerText} ${additionalComment.innerText}` })
	console.log("hello")
	category.innerText = `Category: ${data.result}`;
}

async function postData(url = '', data = {}) {
	// Default options are marked with *
	const response = await fetch(url, {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		headers: {
			'Content-Type': 'application/json'
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: JSON.stringify(data) // body data type must match "Content-Type" header
	});
	return await response.json(); // parses JSON response into native JavaScript objects
}
