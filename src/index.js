import './styles.css';
import itemsTemplates from './templates/itemsTemplates.hbs';
import menuJSON from './menu.json';
import Theme from "./js/themeClass";
import io from "./js/lazzyLoadImg";

const body = document.querySelector('body');
const menuFood = document.querySelector('.js-menu');
const changeThemeRef = document.querySelector('.js-switch-input');


checkLocalTheme();

menuFood.insertAdjacentHTML('beforeend', itemsTemplates(menuJSON));
lazyLoadImg();


changeThemeRef.addEventListener('change', changeTheme);


function changeTheme(e) {
  if(!e.currentTarget.checked){
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
    localStorage.setItem('setToolBarTheme', e.currentTarget.checked);
    console.log()
  }else{
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
    localStorage.setItem('setToolBarTheme', e.currentTarget.checked);
  }
}
function checkLocalTheme() {
  if (localStorage.getItem('theme')){
    body.classList.add(localStorage.getItem('theme'));

    localStorage.getItem('theme') === Theme.LIGHT ? changeThemeRef.checked = false : changeThemeRef.checked = true

  }
}
function lazyLoadImg() {
  const cardImageRef = document.querySelectorAll('.card__image');
  cardImageRef.forEach(img=> io.observe(img));
}




