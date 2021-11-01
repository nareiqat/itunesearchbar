const list = document.getElementById('list')
const searchBar = document.getElementById('searchBar')
const form = document.querySelector(".search__form")
const info = document.getElementById("info")


searchBar.addEventListener('keyup', (e) => {
    e.preventDefault()
    const searchString = e.target.value.toLowerCase() ;
    console.log(e.target.value)
    // const tracks;
    fetchJsonp(`https://itunes.apple.com/search?term=${searchString}&media=music&entity=album&attribute=artistTerm&limit=50`)
    .then(resp => resp.json())
    .then(res => {
        const newtitle = `${res.resultCount} reults were ${searchString}` 
        if(info !== newtitle){
            info.innerHTML = newtitle 
        }
        console.log(res)
        const htmlString = res.results.map(track => {
            return `

                <div class="card">
                    <img class="card__img" src="${track.artworkUrl100}"/>
                    <div class="card__content">${track.collectionName}</div>

                </div>
            `
        }).join('')
        list.innerHTML = htmlString
        console.log(htmlString);
    })
    .catch(error => console.log(error))

    
})





{/* <div>${mus.resultCount} results were found</div> */}

// const displayTracks = (musicTracks) => {
//     const htmlString = musicTracks.map(track => {
//         return `
//             <div class="card">
//                 <img class="card__img" src="${track.artworkUrl100}"/>
//                 <div class="card__content"> Name: ${track.collectionName}</div>
//                 <div>1</div>
//             </div>
//         `
//     }).join('')
//     list.innerHTML = htmlString
// }