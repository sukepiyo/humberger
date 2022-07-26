/*
ハンバーガーメニュー jQuery版
*/

// $(".gnavBtn").click(function () {
//   $(".gnavBtn__bar").toggleClass("is-open");
//   $(".gnav").toggleClass("is-open");
// });


/*
ハンバーガーメニュー Vanilla.js版
*/

const gnavBtn = document.querySelector('#gnavBtn');
const gnavBar = document.querySelector('.gnavBtn__bar');
const gnav = document.querySelector('.gnav');

gnavBtn.addEventListener('click', function(){
  gnavBtn.classList.toggle('is-open');
  gnavBar.classList.toggle('is-open');
  gnav.classList.toggle('is-open');
});
