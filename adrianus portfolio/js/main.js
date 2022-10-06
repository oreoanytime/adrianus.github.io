var typing = new Typed(".text", {
  strings: [
    "Student",
    "Programmer",
    "Photographer"
    ],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
  loopCount: Infinity,
});

window.addEventListener('scroll', function() {
    const introContainerHeight = document.querySelector("#intro-bg-container").clientHeight - document.querySelector(".nav-bg").clientHeight
    if(this.scrollY > introContainerHeight){
        document.querySelector(".nav-bg").classList.add('nav-bg-active')
    } else{
        document.querySelector(".nav-bg").classList.remove('nav-bg-active')
    }
});

