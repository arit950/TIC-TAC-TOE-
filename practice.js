const cells= document.querySelectorAll(".cell")
const status_Text = document.querySelector("#statusText")
const restart_Btn=document.querySelector("#restartBtn")
const winCondition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let option = ["","","","","","","","",""]
let currentPlayer = "X";
let running = false
initializeGame()
function initializeGame(){
    cells.forEach(cell =>cell.addEventListener("click",cellClicked))
    restart_Btn.addEventListener("click",restartGame)
    status_Text.textContent = `${currentPlayer}'s turn`
    running=true

}

function cellClicked(){
   const cell_Index=this.getAttribute("cellIndex")
   if(option[cell_Index]!=""|| !running){
    return;
   }
   updateCell(this,cell_Index)
   
   checkWinner()

}
function updateCell(cells,index){
    option[index]=currentPlayer
    cells.textContent= currentPlayer


}
 function changePlayer(){
    currentPlayer = (currentPlayer=="X")? "O":"X"
    status_Text.textContent = `${currentPlayer}'s turn`


 }
 function checkWinner(){
    let roundWon = false
    for(let i=0;i<winCondition.length;i++){
        const condition= winCondition[i]
        const cellA = option[condition[0]]
        const cellB = option[condition[1]]
        const cellC = option[condition[2]]

        if(cellA==""||cellB==""||cellC==""){
            continue;
        }
        if(cellA==cellB&& cellB==cellC){
            roundWon=true
            break
        }

    }
    if(roundWon){
        status_Text.textContent=`${currentPlayer} wins!!!`
        running=false

    }
    else if(!option.includes("")){
        status_Text.textContent="Draw !!!"
        running=false
    }
    else{
        changePlayer()
    }

 }
 function restartGame(){
    currentPlayer="X"
    option = ["","","","","","","","",""]
    status_Text.textContent = `${currentPlayer}'s turn`
    cells.forEach(cell=>cell.textContent="")
    running=true

 }