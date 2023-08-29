
// function start(){
//     const table = document.getElementsByTagName("td")
//     var table_no=[]
// console.log(table)
// for (i=0;i<9;i++){
//     table_no.push(i)
//     table[i].addEventListener("click",()=>{
//         table[table_no[0]].innerHTML='<img class="x" src="resources/images/X1.png" alt="x">'
//     })  
// }
// }
function start(){
    const table = document.getElementsByTagName("td")
for (i=0;i<9;i++){
    table[i].onclick = e => {
        console.log(e.target);  // to get the element
        console.log(e.target.tagName);  // to get the element tag name alone
        e.target.innerHTML='<img class="x" src="resources/images/X1.png" alt="x">'
    } 
}
}