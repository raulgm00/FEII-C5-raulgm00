
window.addEventListener('load', () => {
    // const url = 'https://api.sampleapis.com/cartoons/cartoons2D'
    const url = 'https://rickandmortyapi.com/api/character'
    // Trabajamos con fetch, then() y forEach
    // fetch(url)
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data)
    //     if(data.length > 0){
    //         const loader = document.querySelector('.loader')
    //         loader.remove()
    //         const section = document.querySelector('#list-container')
    //         data.forEach((item) => {
    //             section.innerHTML += `
    //                 <div class='card'>
    //                     <h3>${item.title}</h3>
    //                     <img class='card-img' src=${item.image} alt=${item.title}>
    //                 </div>
    //             `
    //         })
    //     }
    // })
    // .catch(err => console.log(err))

    //Ejemplo de fetch con async/await y forEach
    // const fetchCartoons = async () => {} // Como sería con arrow function
    // async function fetchCartoons(){
    //     try {
    //         const res = await fetch(url)
    //         const data = await res.json()   
    //         console.log(data)
    //         if(data.length > 0){
    //             const loader = document.querySelector('.loader')
    //             loader.remove()
    //             const section = document.querySelector('#list-container')
    //             data.forEach((item) => {
    //                 section.innerHTML += `
    //                     <div class='card'>
    //                         <h3>${item.title}</h3>
    //                         <img class='card-img' src=${item.image} alt=${item.title}>
    //                     </div>
    //                 `
    //             })
    //         }
    //     } catch (err) {
    //         console.log(err)
    //     }        
    // }
    // fetchCartoons()

    //Ejemplo de fetch con async/await y map(). De paso le sumamos sweetalert2
    // async function fetchCartoons(){
    //     try{
    //         const res = await fetch(url)
    //         const data = await res.json()   
    //         console.log(data)
    //         if(data.length > 0){
    //             const loader = document.querySelector('.loader')
    //             loader.remove()
    //             const section = document.querySelector('#list-container')
    //             const newArr = data.map((item) => {
    //                     return `
    //                         <div class='card'>
    //                             <h3>${item.title}</h3>
    //                             <img class='card-img' src=${item.image} alt=${item.title}>
    //                         </div>
    //                     `
    //             }).join('')
    //             console.log(newArr)
    //             section.innerHTML = newArr
    //         }
    //     } catch (err){
    //         Swal.fire({
    //             title: "Oops...",
    //             text: "Error al obtener los dibujos animados",
    //             icon: "error",
    //             footer: err
    //           })
    //     }
    // }
    // fetchCartoons()

    //TRabajamos con otra API
    fetch(url)
    .then(res => res.json())
    .then(data => {
        const lista = data.results
        if(lista.length > 0){
            const loader = document.querySelector('.loader')
            loader.remove()
            const section = document.querySelector('#list-container')
            lista.forEach((item) => {
                section.innerHTML += `
                    <div class='card'>
                        <h3>${item.name}</h3>
                        <img class='card-img' src=${item.image} alt=${item.title}>
                    </div>
                `
            })
        }
    })
    .catch(err => console.log(err))
})


