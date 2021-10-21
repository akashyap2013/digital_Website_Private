
// execute script after page load
window.onload = function exampleFunction() {
    
    // toggle button
    let toggle = document.querySelector("#nav .toggle-btn");
    let collapse = document.querySelector("#nav .collapse")

    toggle.addEventListener('click', function(event){
        collapse.classList.toggle('active');
        console.log(toggle)
    })
    
}

// helper function for css properties
function css(element, style) {
    for (const property in style)
        element.style[property] = style[property];
}