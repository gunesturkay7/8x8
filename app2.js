const area =document.querySelector(`.area`)
const add = document.querySelector(".add")
const restart = document.querySelector(".restart")


function createBoard(){
    for(let i=1; i<=64;i++){
        const square = document.createElement(`div`)
        square.classList.add('square')
        square.setAttribute('data-id',i)
        area.appendChild(square)
        
       
    

    }
}
createBoard()
const squares = document.querySelectorAll('.square')
let dataIds = []
let randomLetters = []




function createLetter() {
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const randomNum = Math.floor(Math.random() * alphabet.length)
    const randomLetter =  alphabet[randomNum]
    const randomSqaure = squares[Math.floor(Math.random() * squares.length )]
    randomSqaure.innerText = randomLetter
    
    
    randomLetters.push(randomLetter)
 
    dataIds.push(randomSqaure.getAttribute('data-id'))

    for (let i = 0; i < dataIds.length; i++) {
        for (let j = i +1; j < dataIds.length; j++)
        if (dataIds[i] === dataIds[j]) {
            randomSqaure.innerText = randomLetters[i]
            console.log('SAME POINT')
            dataIds.pop()
            
        }
    }
    let coords = []
    let coord = []
    dataIds.forEach(dataId => {
        const colm = dataId % 8
        const row = Math.ceil(dataId / 8)
        let coord = {row, colm} 
        coords.unshift(coord)
     
    
       

    })
    
    let tutucu = []
    for (let i = 0; i < coords.length; i++) {
        for (let j = i +1; j < coords.length; j++)
        if (coords[i].row === coords[j].row) {
            tutucu.push(coords[i].row)
            
            let counts = {}

            for(let i =0; i < tutucu.length; i++){ 
                if (counts[tutucu[i]]){
                counts[tutucu[i]] += 1
                } else {
                counts[tutucu[i]] = 1
                }
               }  
               for (let prop in counts){
                   if (counts[prop] > 3){
                       console.log(prop + " counted: " + counts[prop] + " times.")
                       if(coords[i].row == prop) {
                        randomSqaure.innerText = ''
                        console.log('Basmaz')
                       }
                   }
               }
             console.log(counts)
        }
    }
    
    if(dataIds.length >= 15)  {
        add.disabled = true
    }
   
}
add.addEventListener('click',createLetter)

restart.addEventListener('click',function() {
    squares.forEach(square => square.innerText = ' ')
    dataIds = []
   
    add.disabled = false
    counts = {}
    randomLetters = []
    tutucu = []
})

// > <