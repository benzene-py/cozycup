const cups = document.querySelectorAll(".cups img");

window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    document.querySelector(".cups").style.transform =
        `translateX(${-scroll * 0.7}px)`;
    cups.forEach((cup, index) => {
        let angle = scroll * 0.15;
        if(index % 2 === 0){
            cup.style.transform = `rotate(${angle}deg)`;
        } else {
            cup.style.transform = `rotate(${-angle}deg)`;
        }
    });
});
const section = document.querySelector('.herosec');
const bg = document.querySelector('.bg');

window.addEventListener('scroll', () => {
    const rect = section.getBoundingClientRect();

    if(rect.top < window.innerHeight && rect.bottom > 0){
        bg.style.transform = `translateY(${-rect.top * 0.4}px)`;
    }
});

const reviews = [

{
    name: "Kartik Gosyne",
    role: "Coffee Lover",
    text: "The caramel latte was one of the best I've had in Delhi. The atmosphere is warm, the staff are welcoming, and every corner of the café feels thoughtfully designed."
},

{
    name: "Tapeshwar",
    role: "Remote Worker",
    text: "I spent nearly four hours working here and loved every minute. Fast Wi-Fi and coffee that actually tastes premium. This has become my favorite workspace."
},

{
    name: "Ritika Singh",
    role: "Food Blogger",
    text: "The pastries are fresh, beautifully presented, and pair perfectly with their signature coffees. The interior design creates a cozy yet elegant experience."
},

{
    name: "Vansh Agarwal",
    role: "Regular Guest",
    text: "What keeps me coming back isn't just the coffee—it's the consistency. Every visit feels special, and the staff always remember my order."
},

{
    name: "Drishti Rao",
    role: "University Student",
    text: "Whether I'm studying, meeting friends, or simply relaxing with a book, Cozy Cup always feels like the perfect place to be."
}

];

let current = 0;

const reviewText = document.getElementById("real");
const reviewerName = document.getElementById("name");
const reviewerRole = document.getElementById("role");

function showReview(index){

    reviewText.textContent = reviews[index].text;
    reviewerName.textContent = reviews[index].name;
    reviewerRole.textContent = reviews[index].role;

}

showReview(current);

document.getElementById("next").addEventListener("click", () => {

    current++;

    if(current >= reviews.length){
        current = 0;
    }

    showReview(current);

});

document.getElementById("prev").addEventListener("click", () => {

    current--;

    if(current < 0){
        current = reviews.length - 1;
    }

    showReview(current);

});

let pak=document.querySelector("#pakka");
let rest=document.querySelector("#resty");
pak.addEventListener("click",function(){
    rest.click();
});

let plus = document.querySelector(".plus1");
let plus1 = document.querySelector(".plus2");
let plus2 = document.querySelector(".plus3");
let plus3 = document.querySelector(".plus4");
let plus4 = document.querySelector(".plus5");
let answer = document.querySelector(".ans");
let answer1 = document.querySelector(".ans2");
let answer2 = document.querySelector(".ans3");
let answer3 = document.querySelector(".ans4");
let answer4 = document.querySelector(".ans5");

plus.addEventListener("click", () => {
    answer.classList.toggle("show");
    plus.classList.toggle("rotate");
});
plus1.addEventListener("click", () => {
    answer1.classList.toggle("show");
    plus1.classList.toggle("rotate");
});
plus2.addEventListener("click", () => {
    answer2.classList.toggle("show");
    plus2.classList.toggle("rotate");
});
plus3.addEventListener("click", () => {
    answer3.classList.toggle("show");
    plus3.classList.toggle("rotate");
});
plus4.addEventListener("click", () => {
    answer4.classList.toggle("show");
    plus4.classList.toggle("rotate");
});



let bu = document.querySelector("#book");
let bu1 = document.querySelector("#viewmenu");
let bhais = document.querySelector("#bhaiss");
bu.addEventListener("click", function(){
    bhais.click();
});
bu1.addEventListener("click", function(){
    bhais.click();
});
