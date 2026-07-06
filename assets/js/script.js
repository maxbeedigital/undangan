document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("openInvitation");
    const cover = document.getElementById("cover");

    if(btn){

        btn.addEventListener("click", function(){

            cover.style.opacity="0";
            cover.style.transition="all .8s ease";

            setTimeout(function(){

                cover.style.display="none";

            },800);

        });

    }

});
