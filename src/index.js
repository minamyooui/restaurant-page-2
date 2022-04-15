import './style.css';
import {loadHome, loadInfo, loadMenu} from './dom';

const autorun = (() => {
  loadHome();
  const home = document.getElementById('navHome');
  home.onclick = loadHome;
  const menu = document.getElementById('navMenu');
  menu.onclick = loadMenu;
  const info = document.getElementById('navInfo');
  info.onclick = loadInfo;
})();