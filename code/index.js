function fetchImages() {

    for (let i = 0; i < 9; i++) {
         fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => addImagesToScreen(data,i))
            .catch(err => console.error(err))
    }
}

function populateIds() {
    return [
        "picture",
        "picture1",
        "picture2",
        "picture3",
        "picture4",
        "picture5",
        "picture6",
        "picture7",
        "picture8"
    ];
}

function addImagesToScreen(data,index) {

    let ids = populateIds();
    let element = document.getElementById(ids[index]);
    element.setAttribute("src",data.message);
    element.style.height = '249px';
    element.style.width = '399px';
    element.style.borderRadius = "5px";
}