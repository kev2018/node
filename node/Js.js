
const doc=document.getElementById('floaty')
doc.addEventListener("mouseover",border)
doc.addEventListener("mouseout",borderout)
function border(){
  doc.style.border = "10px solid #008000";
}
function borderout(){
  doc.style.border = 'none';
}





/* I tried to do these but they wouldnt overlap on the same line and messed everthing up I tried for way longer then I should trying to fix it
<section>
  <nav>
    <a class="un-underlinefont" href="https://nodejs.org/en/download/">Other Downloads | ></a>
    <a class="un-underlinefont" href="https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V6.md#6.10.2">Changelog | </a>
    <a class="un-underlinefont"href="https://nodejs.org/dist/latest-v6.x/docs/api/">API Docs</a>
  </nav>
  <nav id="floatything">
    <a class="un-underlinefont" href="https://nodejs.org/en/download/current/">Other Downloads | ></a>
    <a class="un-underlinefont" href="https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V7.md#7.9.0">Changelog | </a>
    <a class="un-underlinefont"href="https://nodejs.org/dist/latest-v7.x/docs/api/">API Docs</a>
  </nav>
</section>*/
