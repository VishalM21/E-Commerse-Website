
var shownimage = $('.shown-image').attr('src');


document.querySelectorAll(".shoe1")[1].addEventListener("click",function(){
  console.log(this.innerHTML);
  document.querySelector(".shown-image").setAttribute("src","image/shoe2.png");
  console.log(this.innerHTML);
     console.log("clicked");
});

window.addEventListener('load',()=>{
  const params = (new URL(document.location)).searchParams;
  const name = params.get('nam');
 console.log(name);
})





var mobile =$("#title");

var ismobile = mobile.css("fontSize");

if(ismobile==='40px'){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1.3,
        spaceBetween: 100,
        slidesPerGroup: 2,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 1.3,
        spaceBetween: 50,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}else{
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 100,
        slidesPerGroup: 2,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 3,
        spaceBetween: 50,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}





var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {

  var i;
  var x = document.getElementsByClassName("container");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}




