
// execute script after page load
window.onload = function exampleFunction() {
    
    // toggle button
    let toggle = document.querySelector("#nav .toggle-btn");
    let collapse = document.querySelector("#nav .collapse")

    toggle.addEventListener('click', function(event){
        collapse.classList.toggle('active');
        console.log(toggle)
    });

    // #site-main .recent-work-area .images-flex
    var grid = document.querySelector('#site-main .recent-work-area .images-flex');

    var msnry = new Masonry( grid, {
        itemSelector: '.grid-item',
        // columnWidth: 210,
        gutter: 100
    });

    // // init with selector
    // var msnry = new Masonry( '.grid', {
    // // options...
    // });
    
}

// helper function for css properties
function css(element, style) {
    for (const property in style)
        element.style[property] = style[property];
}