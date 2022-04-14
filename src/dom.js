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
  const main = document.createElement('div');
  main.id = 'main';
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
  main.appendChild(headline);
  main.appendChild(copy);
  content.appendChild(main);
}

export default pageLoad;