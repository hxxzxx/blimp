
window.onscroll = () => {

    const btn = document.querySelector("#floating-button");

   if(window.scrollY >= 300)
      {
          btn.classList.remove("hidden");
      }
    
    else{
        btn.classList.add("hidden");
    }

}