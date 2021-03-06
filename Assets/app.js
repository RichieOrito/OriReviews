// local reviews data
const reviews = [
    {
      id: 1,
      name: "Richie Orito",
      job: "Software Developer",
      img:
       "Assets/images/me.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "Kairetu Shan",
      job: "UX/UI",
      img:
        "Assets/Images/jackson-david-I-mRsT0FVUw-unsplash.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "Wajakoya the v",
      job: "Web developer",
      img:
        "Assets/Images/hans-eiskonen-JuMrIE10_5c-unsplash.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "Karis Mwangi",
      job: "the boss",
      img:
        "Assets/Images/huston-wilson-nJHvhXS4C0U-unsplash.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
// we will not be using a for Each so no querySelectorAll, we'll just select them one by one using querySelector
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')
// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded',function(){
   showPerson();
});

// show person based on item
function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
});
// show prev prevBtn
prevBtn.addEventListener("click", function(){
    currentItem--;
   if(currentItem < 0){
    currentItem = reviews.length -1;
   }
    showPerson();
});

// show random person
randomBtn.addEventListener("click", function() {
   currentItem = Math.floor(Math.random() * reviews.length);
   console.log(currentItem);
   showPerson();
});