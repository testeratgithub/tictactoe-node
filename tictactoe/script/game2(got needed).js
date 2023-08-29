window.onclick = e => {
    console.log(e.target);  // to get the element
    console.log(e.target.tagName);  // to get the element tag name alone
    e.target.innerHTML='<img class="x" src="resources/images/X1.png" alt="x">'
} 