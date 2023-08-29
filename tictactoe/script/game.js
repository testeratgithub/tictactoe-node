//init
function init_game(inp){
     var game_p1=inp
    
    document.getElementById('start').style.display="none"
    document.getElementById('gv').style.display="block"

//var game_p1=1



//Game
//function start(){     //not needed
    const table = document.getElementsByTagName("td")
    table[0]
for (i=0;i<9;i++){
    table[i].onclick = e => {
        if (game_p1==1){
            e.target.innerHTML='<img class="x" src="resources/images/X1.png" alt="x">'
            e.target.className="entered"
            e.target.dataset.value='x'
            game_p1=0
            check_winner()
            //console.log(e.target.dataset.value)
        }
        else{
            e.target.innerHTML='<img class="o" src="resources/images/O1.png" alt="o">'
            e.target.className="entered"
            e.target.dataset.value='o'
            game_p1=1
            check_winner()
            //console.log(e.target.dataset.value)
        }
    } 
}

//continue game
document.getElementById("continue").addEventListener("click",()=>{
    console.log("done")
    newgame()
    document.getElementById("result").style.display="none"
    document.getElementById("gv").style.opacity="1"
    document.getElementById("strike_progress").style.opacity="1"
    document.getElementById("strike").style.display="none"
    document.getElementById("strike").style.translate="0"
    document.getElementById("strike").style.rotate="0deg"
    document.getElementById("strike_progress").animationPlayState="paused"
    document.getElementById("result_text").innerHTML='<p id="winner"><img class="o" src="resources/images/O1.png" alt="o"></p> Wins'
    document.getElementById("result_text").style.justifyContent="space-between"
    init_game(inp)
})

//Result final
document.getElementById("strike_progress").addEventListener("animationend",()=>{
    let result=document.getElementById("result1").innerHTML
    result=result[0]
    console.log(result)
    console.log("Done")    
    //result=result.replace("Wins","")
    if (result=='x'){
        document.getElementById("gv").style.opacity="0.3"
        document.getElementById("strike_progress").style.opacity="0.3"
        document.getElementById("winner").innerHTML='<img class="x" src="resources/images/X1.png" alt="x">'
        document.getElementById("result").style.display="flex"
    }
    else if (result=='o'){
        document.getElementById("gv").style.opacity="0.3"
        document.getElementById("strike_progress").style.opacity="0.3"
        document.getElementById("winner").innerHTML='<img class="o" src="resources/images/O1.png" alt="o">'
        document.getElementById("result").style.display="flex"
    }
}
)
}
//}//init ends here

//End Game
function endgame(){
    const table = document.getElementsByTagName("td")
    table[0]
    for (i=0;i<9;i++){
        table[i].className="entered"
    }
}

//check Winner
function check_winner(){
    const table = document.getElementsByTagName("td")
    var r=[]
    let is_draw=0
    for (i=0;i<9;i++){
        r.push(table[i].dataset.value)
        if (table[i].className=="entered"){
            is_draw+=1
        }
    }
    console.log(r)

    if(r[0]==r[1] && r[1]==r[2] && (r[0]=='x'|| r[0]=='o')){
        endgame()
        document.getElementById("result1").innerHTML=(r[0] + 'Wins')
        //strike animation
        document.getElementById('strike').style.display="block"
        document.getElementById('strike').style.translate="0 -100px"
        document.getElementById('strike_progress').style.animationPlayState="running"
    }
    else if(r[3]==r[4] && r[4]==r[5] && (r[3]=='x'|| r[3]=='o')){
        endgame()
        document.getElementById("result1").innerHTML=(r[3] + 'Wins') 
        //strike animation
        document.getElementById('strike').style.display="block"
        document.getElementById('strike_progress').style.animationPlayState="running"
    }
    else if(r[6]==r[7] && r[7]==r[8] && (r[6]=='x'|| r[6]=='o')){
        endgame()
        document.getElementById("result1").innerHTML=(r[6] + 'Wins')
        //strike animation
        document.getElementById('strike').style.display="block"
        document.getElementById('strike').style.translate="0 100px"
        document.getElementById('strike_progress').style.animationPlayState="running"    
    }
    else if(r[0]==r[3] && r[3]==r[6] && (r[6]=='x'|| r[6]=='o')){
        endgame()
        document.getElementById("result1").innerHTML=(r[6] + 'Wins')
        //strike animation
        document.getElementById('strike').style.display="block"
        document.getElementById('strike').style.rotate="90deg"
        document.getElementById('strike').style.translate="-100px 0"
        document.getElementById('strike_progress').style.animationPlayState="running"      
    }
    else if(r[1]==r[4] && r[4]==r[7] && (r[7]=='x'|| r[7]=='o')){
        endgame()
        document.getElementById("result1").innerHTML=(r[7] + 'Wins')
        //strike animation
        document.getElementById('strike').style.display="block"
        document.getElementById('strike').style.rotate="90deg"
        document.getElementById('strike_progress').style.animationPlayState="running"        
    }
    else if(r[2]==r[5] && r[5]==r[8] && (r[8]=='x'|| r[8]=='o')){
        endgame()
        document.getElementById("result1").innerHTML=(r[8] + 'Wins')
        //strike animation
        document.getElementById('strike').style.display="block"
        document.getElementById('strike').style.rotate="90deg"
        document.getElementById('strike').style.translate="100px 0"
        document.getElementById('strike_progress').style.animationPlayState="running"          
    }
    else if(r[0]==r[4] && r[4]==r[8] && (r[4]=='x'|| r[4]=='o')){
        endgame()
        document.getElementById("result1").innerHTML=(r[4] + 'Wins')
        //strike animation
        document.getElementById('strike').style.display="block"
        document.getElementById('strike').style.rotate="45deg"
        document.getElementById('strike_progress').style.animationPlayState="running"          
    }
    else if(r[2]==r[4] && r[4]==r[6] && (r[4]=='x'|| r[4]=='o')){
        endgame()
        document.getElementById("result1").innerHTML=(r[4] + 'Wins')
        //strike animation
        document.getElementById('strike').style.display="block"
        document.getElementById('strike').style.rotate="135deg"
        document.getElementById('strike_progress').style.animationPlayState="running"        
    }
    else{
        if (is_draw==9){
            endgame()
            document.getElementById("gv").style.opacity="0.3"   
            document.getElementById("result_text").innerHTML="Draw"
            document.getElementById("result_text").style.justifyContent="center"
            document.getElementById("result").style.display="flex"
        }
    }
    
}

//reset table
function newgame(){
    const table = document.getElementsByTagName("td")
    table[0]
for (i=0;i<9;i++){
    table[i].innerHTML=""
    table[i].dataset.value=undefined
    table[i].className=""
}
}