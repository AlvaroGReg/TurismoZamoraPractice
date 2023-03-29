/*MENUNAV*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
     

if(navToggle) {
    navToggle.addEventListener('click', () =>  {

        if(navMenu.classList.length == 1){
            openNav()

        }else if(navMenu.classList.length == 2){
            closeNav()
        }
    })
}

function openNav(){
    navMenu.classList.add('show-menu');
}

function closeNav(){
    navMenu.classList.remove('show-menu');
}
/* remove menu mobile*/
const navLink = document.querySelectorAll('.navLink')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n =>  n.addEventListener('click', linkAction))

//LOAD PAGES
function loadPage(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => (document.getElementById('main').innerHTML = data))
}

function loadSubPage(url, listId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {

            document.getElementById('main').innerHTML = data;

            let findElementById = (element) => element.name == listId;
            let listToUse = categories[categories.findIndex(findElementById)].list;

            loadData(listToUse);
        })       
}