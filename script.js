
document.getElementById("searchButton").addEventListener("click", () => {

    let input = document.getElementById("search").value;

    let moveOne = (Math.floor(Math.random() * 40) + 1);
    let moveTwo = (Math.floor(Math.random() * 40) + 1);
    let moveThree = (Math.floor(Math.random() * 40) + 1);
    let moveFour = (Math.floor(Math.random() * 40) + 1);


    fetch("https://pokeapi.co/api/v2/pokemon/" + input)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById("id").innerHTML = `#${data.id}`;
            document.getElementById("image").setAttribute("src", `${data.sprites.front_default}`);
            document.getElementById("pokemonName").innerHTML = `${data.name}`;
            document.getElementById("moveOne").innerHTML = data.moves[moveOne].move.name;
            document.getElementById("moveTwo").innerHTML = data.moves[moveTwo].move.name;
            document.getElementById("moveThree").innerHTML = data.moves[moveThree].move.name;
            document.getElementById("moveFour").innerHTML = data.moves[moveFour].move.name;
        })
});



