const maintext = "Hello! I'm Arcell.";
const speed = 50;
let i = 0;

function type(){
    if (i < maintext.length){
        document.getElementById("home-text").innerHTML += maintext.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}
type();
// type effect


window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".fade-in-section");

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      section.classList.add("is-visible");
    }
  })
})
//scroll effect