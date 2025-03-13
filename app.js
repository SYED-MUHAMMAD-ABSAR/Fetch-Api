const cards = document.getElementById("card")

async function fetchpostdata() {
    const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=186194ca0de84181b95cd8b331ea4832')
    const data = await response.json()
    console.log( data, "===response")
    for(const element of data.articles){
        createcard(element.title, element.description  , element.author, element.imageUrl)
    }
}
fetchpostdata()

function createcard(author , title , description ,imageUrl){
    const cardUI =
    `<div class="card">
    <img src="${imageUrl ||  "https://techcrunch.com/wp-content/uploads/2024/05/wildfire_drone_web.jpg?w=900"}" alt="Article Image" />
    <p>${author}</p>
    <p>${title}</p>
    <p>${description}</p>
    </div>` 
    card.innerHTML += cardUI
}
