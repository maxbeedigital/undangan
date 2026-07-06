const btn=document.getElementById("openInvitation");
const cover=document.getElementById("cover");

btn.addEventListener("click",()=>{

cover.style.opacity="0";

cover.style.transition=".8s";

setTimeout(()=>{

cover.style.display="none";

},800);

});
