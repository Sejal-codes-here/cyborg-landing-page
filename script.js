// LOADER //

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);

});


// FAQ ACCORDION // 

const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqs.forEach(faq => {

            if(faq !== item){
                faq.classList.remove("active");
            }

        });

        item.classList.toggle("active");

    });

});

// ===============================
// SCROLL PROGRESS BAR
// ===============================

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / height) * 100;

    progressBar.style.width = progress + "%";

});

// ===============================
// COUNTER ANIMATION
// ===============================

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = Number(counter.getAttribute("data-target"));

        let count = 0;

        const speed = target / 120;

        const update = () => {

            if(count < target){

                count += speed;

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(update);

            }else{

                counter.innerText = target;

            }

        };

        update();

    });

};

let counterStarted = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".stats");

    if(!stats || counterStarted) return;

    const position = stats.getBoundingClientRect().top;

    if(position < window.innerHeight - 100){

        counterStarted = true;
        startCounter();

    }

});

// ===============================
// FADE IN ON SCROLL
// ===============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(
".card,.feature-box,.stat,.timeline-box,.faq-item,.contact"
).forEach(el=>{

    el.classList.add("fade-up");

    observer.observe(el);

});

// ===============================
// NAVBAR SHADOW
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.boxShadow="0 5px 25px rgba(0,229,255,.18)";

    }else{

        header.style.boxShadow="none";

    }

});

// ===============================
// SMOOTH BUTTON EFFECT
// ===============================

const buttons = document.querySelectorAll(
".btn-primary,.btn-secondary,.btn-nav"
);

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-5px) scale(1.03)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0) scale(1)";

    });

});

// ===============================
// CONSOLE MESSAGE 
// ===============================

console.log("%c🚀 CYBERCORE LOADED SUCCESSFULLY",
"color:#00e5ff;font-size:18px;font-weight:bold;");
