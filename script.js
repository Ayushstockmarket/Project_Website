function ScrollTopBottom(){document.getElementById("scrollTop").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth",});});document.getElementById("scrollBottom").addEventListener("click",function(){window.scrollTo({top:document.body.scrollHeight,behavior:"smooth",});});}
window.addEventListener("load",()=>{ScrollTopBottom();});document.addEventListener("scroll", function () {const progressBar = document.getElementById("scroll-progress-bar");const scrollPosition = window.scrollY;const documentHeight =document.documentElement.scrollHeight - document.documentElement.clientHeight; const scrollPercentage = (scrollPosition / documentHeight) * 100;progressBar.style.width = scrollPercentage + "%";});
