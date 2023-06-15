const $gifArea = $("#gif-area")
const $searchInput = $("#search");

// async function getAGif(){
//     const res = await axios.get('http://api.giphy.com/v1/gifs/search', {params:{q:searchTeam, api_key:"7WWiV11Uuv15u23Gg5qMiob9w4tr96rs&tag=&rating=g"}})
//     console.log(res.data)
// }

// async function testGif(){
//     const resp = await axios.get('https://api.giphy.com/v1/gifs/random?api_key=7WWiV11Uuv15u23Gg5qMiob9w4tr96rs&tag=&rating=g')
//     console.log(resp.data)
// }

function addGif(res) {
    let numResults = res.data.length;
    if (numResults) {
        let randomIdx = Math.floor(Math.random()* numResults);
        let $newCol = $("<div>")
        let $newGif = $("<img>", {
            src: res.data[randomIdx].images.original.url,
          });
        $newCol.append($newGif)
        $gifArea.append($newCol)
    }
}

$("form").on("submit", async function(e){
    e.preventDefault();

    let searchParam = $searchInput.val()
    $searchInput.val("")

    const response = await axios.get('http://api.giphy.com/v1/gifs/search', {param:{
        query: searchParam, 
        api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" 
        }
    })
    addGif(response.data)
})

$("#remove").on("click", function(){
    $gifArea.empty()
})
