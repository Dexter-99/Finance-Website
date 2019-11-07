$("#navbar a, .read").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});
function scrollApppear() {
  var target = document.querySelectorAll(".visual");
  console.log(target);
  target.forEach(target => {
    var targetPosition = target.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.5;
    console.log(targetPosition);
    console.log(screenPosition);
    if (targetPosition < screenPosition) {
      target.classList.add("bg-active");
    }
  });
}
window.addEventListener("scroll", scrollApppear);
