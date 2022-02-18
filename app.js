window.onload = function () {
    const inp = document.getElementById('inp')
    const namelist = document.getElementById('name-list)'
    const display = document.getElementById('display')
    const giveATry = document.getElementById('give-a-try')
    const firstPosition = document.getElementById('first-position')
    const secondPosition = document.getElementById('second-position')
    const thirdPosition = document.getElementById('third-position')


    const participantNames = []

    inp.addEventListener('keypress' , function(event) {
        if(event.key == 'Enter') {
            let newNames = event.target.value.split(', ')
            if(newNames[0] != ''){
                newNames.forEach(name ==> {
                    participantNames.push(name)
                    let item = createListItem(name)
                    namelist.appendchild(item)
                })
            }
        }

    })
}

function createListItem(name) {
    let li = document.createElement('li')
    li.className = 'List-group-item'
    li.innerHTML = name
    return li 
}
function shuffle(arr){
    let shuffledArr = [...arr]

     for(let i = shuffledArr.length -1; i>0; i--){
         let rand = Math.floor(Math.random() * (i + 1))
         let temp = shuffledArr[rand]
         shuffledArr[rand] = shuffledArr[i]
         shuffledArr[i] = temp
     }
     return shuffledArr
}
    console.log(shuffle[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,]))

