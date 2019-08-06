
// * [*] `mouseover`
// * [*] `keydown`
// * [*] `wheel`
// * [ ] `drag / drop`
// * [ ] `load`
// * [*] `focus`
// * [*] `resize`
// * [ ] `scroll`
// * [*] `select`
// * [*] `dblclick`




//CLICK NavBar
const navLinks = document.querySelectorAll('.nav-link');
console.log(navLinks);
navLinks.forEach(function (navLink){
    navLink.addEventListener('click', event => {
        //console logs click
        console.log(event)
        //turns atags red on click
        event.target.style.color = "red";
    })
});

//DBLCLICK + BUBBLING
const nav = document.querySelector('header nav');
nav.addEventListener('dblclick', e => {
    console.log(e);
    //changes background color of a tags to red with bubbling
    e.target.style.backgroundColor = "blue";
});

//MOUSEOVER ON h1 TURNS PINK
let mouseOver = document.querySelector(".main-navigation h1");
mouseOver.addEventListener("mouseover", (e) =>  {   
  // highlight the mouseover target
  e.target.style.color = "pink";
  setTimeout(() => {
    e.target.style.color = "";
  }, 600);
}, false);

//KEY DOWN 
//THAT RE WRITES OVER NAV
//WHEN KEY GOES DOWN
document.addEventListener('keydown', logKey);
function logKey(e) {
nav.textContent += ` ${e.code}`;
}

//KEY UP
//ADDS ANOTHER KEY WHEN RELEASED
document.addEventListener('keyup', logKey);
function logKey(e) {
  nav.textContent += ` ${e.code}`;
}

//SELECT 
//top paragraph and increases text size
document.addEventListener('selectionchange', event => {
    const p = document.querySelector('p');
    if (window.getSelection().containsNode(p, true)){
        p.style.fontSize = "4rem"
    }
});

//RESIZE 
//changes opacity of BUS PICTURE when resizing browswer window
window.addEventListener('resize', event => {
    document.querySelectorAll('img').forEach(img => {
        img.style.opacity = "0.5";
    })
});

//WHEEL
//increases and decreases size of top Paragraph
function zoom(event) {
  event.preventDefault();
  scale += event.deltaY * -0.01;
  // Restrict scale
  scale = Math.min(Math.max(.125, scale), 4);
  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}
let scale = 1;
const el = document.querySelector('p');
el.onwheel = zoom;

//FOCUS added form above footer
const form = document.getElementById('form');

//FOCUS
form.addEventListener('focus', (event) =>{
  event.target.style.background = 'pink'; }, true);
//BLUR
form.addEventListener('blur', (event) => {
  event.target.style.background = '';    
}, true);

//ONLINE **Not Working**
window.ononline = (event) => {
  console.log("You are connected to the internet!.");
};

//POPSTATE
window.addEventListener('popstate', (event) => {
    console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
  });
  history.pushState({page: 1}, "title 1", "?page=1");
  history.pushState({page: 2}, "title 2", "?page=2");
  history.replaceState({page: 3}, "title 3", "?page=3");
  history.back(); // Logs "location: http://example.com/example.html?page=1, state: {"page":1}"
  history.back(); // Logs "location: http://example.com/example.html, state: null
  history.go(2); 

