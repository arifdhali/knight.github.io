"use strict";

// go up
let btn = document.getElementById("scrollUp");
let hero = document.getElementById("hero").clientHeight;
function scrollTo() {
  if (
    document.body.scrollTop > hero ||
    document.documentElement.scrollTop > hero
  ) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

let goTop = document
  .getElementById("scrollUp")
  .addEventListener("click", () => {
    document.body.scrollTop = 0; // apple
    document.documentElement.scrollTop = 0;
    console.log("hello");
  });


// mobile nav

let openBtn = document.getElementById("openNav");
let menuBar = document.getElementById("menuBar");
let closeBtn = document.getElementById("closeNav");

openBtn.addEventListener("click", () => {
  menuBar.classList.add('navActive');
  setTimeout(() => {
    closeBtn.style.display = 'block';
  }, 900)
})

closeBtn.addEventListener("click", () => {
  menuBar.classList.remove('navActive');
  closeBtn.style.display = 'none';
})

// PROFILE STYLE START
function profileFilter() {
  let profileBtn = document.querySelectorAll(".gallery-btn");
  let profileList = document.querySelectorAll(".gallery-list");

  profileBtn.forEach((re) => {
    re.addEventListener('click', (event) => {
      event.preventDefault();

      // filtering the picture

      const filterImg = event.target.dataset.filter;
      profileList.forEach((list) => {
        if (filterImg === 'all') {
          list.style.display = 'block';
        } else if (list.classList.contains(filterImg)) {
          list.style.display = 'block';
        } else {
          list.style.display = 'none';
        }
      })

      // active the current btn
      profileBtn.forEach((z) => {
        z.classList.remove('active');
        re.classList.add('active');
      })
    })

  })

}
profileFilter();

// Testimonials

function test() {
setInterval(() => {
  let parent = document.querySelector(".testi-item-parent")
  let testiItem = document.querySelectorAll(".testimonials-item");
  testiItem.forEach(x=>{
    x.classList.add('testimonials-item')
    parent.appendChild(testiItem[0]);
  })
}, 1000);
}
test()

// FAQ / FREQUENTLY ASKED QUESTIONS  START
let faqList = document.getElementsByClassName("faq-list");
let carotDown = document.getElementsByClassName("carotDown");
let carotUp = document.getElementsByClassName("carotUp");

for (let i = 0; i < faqList.length; i++) {
  faqList[i].addEventListener("click", () => {
    let store = faqList[i].classList.toggle("activeFaq");
    if (store) {

      carotDown[i].style.display = 'none'
      carotUp[i].style.display = 'block'
    } else {
      carotDown[i].style.display = 'block'
      carotUp[i].style.display = 'none'
    }
  })
}

// WINDOW SCROLL ANIMATION
// left animation
let fadeLeftStore = document.querySelectorAll(".leftAnimation");
let fadeLeft = () => {
  fadeLeftStore.forEach(x => {
    let clientHeight = document.documentElement.clientHeight;
    let itemTop = x.getBoundingClientRect().top;
    let itemHeight = x.getBoundingClientRect().height;
    if (clientHeight > itemTop + itemHeight * 2 / 3) {
      x.classList.add("fadeLeft")
    }
  })
}

// right animation
let fadeRightStore = document.querySelectorAll(".rightAnimation");
let fadeRight = () => {
  fadeRightStore.forEach(y => {
    let clientHeight = document.documentElement.clientHeight;
    let itemTop = y.getBoundingClientRect().top;
    let itemHeight = y.getBoundingClientRect().height;
    if (clientHeight > itemTop + itemHeight * 2 / 3) {
      y.classList.add("fadeRight")
    }
  })
}

// fadeUp animation

let fadeUpStore = document.querySelectorAll(".fadeUpAnimation");

let fadeUp = () => {
  fadeUpStore.forEach(z => {
    let clientHeight = document.documentElement.clientHeight;   
    let itemTop = z.getBoundingClientRect().top;    
    let itemHeight = z.getBoundingClientRect().height;
    if (clientHeight > itemTop + itemHeight * 2 / 3) {
      z.classList.add("fadeUp")      
    }
  })
}
// fadeIn animation
let fadeInStore = document.querySelectorAll(".fadeInAnimation");
let fadeIn = () => {
  fadeInStore.forEach(event => {
    let clientHeight = document.documentElement.clientHeight;
    let itemTop = event.getBoundingClientRect().top;
    let itemHeight = event.getBoundingClientRect().height;
    if (clientHeight > itemTop + itemHeight * 2 / 3) {
      event.classList.add("fadeIn")
    } else {
      event.classList.remove("fadeIn")
    }

  })
}
// windows scroll
document.addEventListener("scroll", () => {
  fadeUp();
  fadeIn();
  fadeLeft();
  fadeRight();
  scrollTo();
})

