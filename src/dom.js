function pageLoad() {
  const content = document.getElementById('content');
  const nav = document.createElement('div');
  nav.id = 'nav';
  const navDiv = document.createElement('div');
  navDiv.id = 'navDiv';
  const navHome = document.createElement('button');
  navHome.textContent = 'Home';
  navHome.classList.add('navBtn');
  const navMenu = document.createElement('button');
  navMenu.textContent = 'Menu';
  navMenu.classList.add('navBtn');
  const navInfo = document.createElement('button');
  navInfo.textContent = 'Info';
  navInfo.classList.add('navBtn');
  navDiv.appendChild(navHome);
  navDiv.appendChild(navMenu);
  navDiv.appendChild(navInfo);
  nav.appendChild(navDiv);
  content.appendChild(nav);
  loadInfo();
}

function loadHome() {
  const content = document.getElementById('content');
  const home = document.createElement('div');
  home.id = 'home';
  const headline = document.createElement('div');
  headline.id = 'headline';
  const h1 = document.createElement('h1');
  h1.textContent = 'Sushi Shiro';
  headline.appendChild(h1);
  const copy = document.createElement('div');
  copy.id = 'copy';
  const p = document.createElement('p');
  p.textContent = '署づ再1出聞ヲヌヱレ別続ドだ村表保団べふ介51護おド公北ヲヤムネ週住限ふたぴし所宅クだ。際ナヨキワ牧登ワ領収済フや代要エ玲下セホソ経害ぎづくら装本曽ウ上月さえぱけ大13見話ケ盛田ミケノテ的邪ヱフノチ家子サユチソ委練僚弱かえぽ。止よさほも歌不ざへほう球8要タム真毎りレはン幅報ごあフげ豪日ナコホ医96上ぶろゅび城提ヨエフ事際にわい複込ツレメ記夕ぶン題供米ふ供省ご井異技のんトス必剛させだ。';
  copy.appendChild(p);
  home.appendChild(headline);
  home.appendChild(copy);
  content.appendChild(home);
}

function loadMenu() {
  const content = document.getElementById('content');
  const menu = document.createElement('div');
  menu.id = 'menu';
  const head = document.createElement('div');
  const headH1 = document.createElement('h1');
  headH1.textContent = 'Menu';
  head.id = 'menuHead';
  head.appendChild(headH1);
  const i1 = document.createElement('div');
  i1.classList.add('menuItem');
  const i1H2 = document.createElement('h2');
  i1H2.textContent = 'Sushi Set A';
  const i1p = document.createElement('p');
  i1p.textContent = '新ーゃすぞ念地リ月祭コ柏力どスろ及両ッ問選ひ両見べのほト';
  i1.appendChild(i1H2);
  i1.appendChild(i1p);
  const i2 = document.createElement('div');
  i2.classList.add('menuItem');
  const i2H2 = document.createElement('h2');
  i2H2.textContent = 'Sushi Set B';
  const i2p = document.createElement('p');
  i2p.textContent = '新ーゃすぞ念地リ月祭コ柏力どスろ及両ッ問選ひ両見べのほト';
  i2.appendChild(i2H2);
  i2.appendChild(i2p);
  menu.appendChild(head);
  menu.appendChild(i1);
  menu.appendChild(i2);
  content.appendChild(menu);
}

function loadInfo() {
  const content = document.getElementById('content');
  const info = document.createElement('div');
  info.id = 'info';
  const location = document.createElement('div');
  location.id = 'location';
  const locH1 = document.createElement('h1');
  locH1.textContent = 'Location';
  const locP = document.createElement('p');
  locP.textContent = 'セブン西麻布 B1F 4 Chome-1-15 Nishiazabu, Minato City, Tokyo 106-0031, Japan';
  location.appendChild(locH1);
  location.appendChild(locP);
  const hours = document.createElement('div');
  hours.id = 'hours';
  const hrsHead = document.createElement('div');
  hrsHead.id = 'hoursHead';
  const hrsH1 = document.createElement('h1');
  hrsH1.textContent = 'Hours';
  hrsHead.appendChild(hrsH1);
  const hrsDiv = document.createElement('div');
  hrsDiv.id = 'hrsDiv';
  const ul = document.createElement('ul');
  const li0 = createLi('Tuesday - Thursday: 5pm - 10pm');
  const li1 = createLi('Friday - Saturday: 5pm - 12am');
  const li2 = createLi('Sunday - Monday: closed');
  ul.appendChild(li0);
  ul.appendChild(li1);
  ul.appendChild(li2);
  hrsDiv.appendChild(ul);
  hours.appendChild(hrsHead);
  hours.appendChild(hrsDiv);
  const contact = document.createElement('div');
  contact.id = 'contact';
  const contactH1 = document.createElement('h1');
  contactH1.textContent = 'Contact';
  const phone = document.createElement('p');
  phone.textContent = '+81 50-5263-6863';
  contact.appendChild(contactH1);
  contact.appendChild(phone);
  info.appendChild(location);
  info.appendChild(hours);
  info.appendChild(contact);
  content.appendChild(info);
}

function createLi(text) {
  const li = document.createElement('li');
  const p = document.createElement('p');
  p.textContent = text;
  li.appendChild(p);
  return li;
}

function clear() {

}

export default pageLoad;