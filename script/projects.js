let pai = document.querySelector(".clone")
let row = document.querySelector(".row")
let projetos = [
    {
    title: "Musical Vivace",
    src: "../img/vivace.jpg",
    habilidade: [{   
        item: "HTML",
        src: "../img/html.png",
    },
    {
        item: "CSS",
        src: "../img/css.png",
    },
    {
        
        item: "JavaScript",
        src: "../img/js.png",

    }

    ],
    progress: 100
    }, 

    {
        title: "TARS Bot",
        src: "../img/tars.jpg",
        habilidade: [{
            item: "Python",
            src: "../img/py.png",

            
        }],
        progress: 75
        
        
    }]

window.addEventListener("load", () => {
    for(let i in projetos) {
        let clone = pai.cloneNode(true)

        //mudar o progress
        clone.childNodes[1].childNodes[1].childNodes[1].style.width = `${projetos[i].progress}%`
        clone.childNodes[1].childNodes[1].childNodes[1].childNodes[0].data = `${projetos[i].progress}%`

        //img hero
        
        clone.childNodes[1].childNodes[3].src = projetos[i].src


        //titulo
        clone.childNodes[1].childNodes[5].children[0].innerText = projetos[i].title

        //habilidade img e habillidade txt
        switch(projetos[i].habilidade.length) {
            case 1: 
                clone.childNodes[1].childNodes[5].children[1].children[1].innerText = projetos[i].habilidade[0].item

                clone.childNodes[1].childNodes[5].children[1].children[0].src = projetos[i].habilidade[0].src
                break
            case 2:
                clone.childNodes[1].childNodes[5].children[1].children[1].innerText = projetos[i].habilidade[0].item
                clone.childNodes[1].childNodes[5].children[1].children[3].innerText = projetos[i].habilidade[1].item

                clone.childNodes[1].childNodes[5].children[1].children[2].src = projetos[i].habilidade[1].src
                clone.childNodes[1].childNodes[5].children[1].children[4].src = projetos[i].habilidade[2].src
                break
            case 3:
                clone.childNodes[1].childNodes[5].children[1].children[1].innerText = projetos[i].habilidade[0].item
                clone.childNodes[1].childNodes[5].children[1].children[3].innerText = projetos[i].habilidade[1].item
                clone.childNodes[1].childNodes[5].children[1].children[5].innerText = projetos[i].habilidade[2].item

                clone.childNodes[1].childNodes[5].children[1].children[0].src = projetos[i].habilidade[0].src
                clone.childNodes[1].childNodes[5].children[1].children[2].src = projetos[i].habilidade[1].src
                clone.childNodes[1].childNodes[5].children[1].children[4].src = projetos[i].habilidade[2].src
                break

        }
        


        
        

        row.appendChild(clone)

    }
    


    
})