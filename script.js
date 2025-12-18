// ========================================
// Header Scroll Effect
// ========================================
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ========================================
// Mobile Navigation
// ========================================
const mobileToggle = document.getElementById('mobileToggle');
const navMobile = document.getElementById('navMobile');

mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    navMobile.classList.toggle('active');
});

// Close mobile nav when clicking on a link
document.querySelectorAll('.nav-link-mobile').forEach(link => {
    link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navMobile.classList.remove('active');
    });
});

// ========================================
// About Section Slider
// ========================================
const slides = document.querySelectorAll('#aboutSlider .slide');
const sliderDotsContainer = document.getElementById('sliderDots');
const sliderPrev = document.getElementById('sliderPrev');
const sliderNext = document.getElementById('sliderNext');
let currentSlide = 0;
let slideInterval;

// Create dots
slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.classList.add('slider-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    sliderDotsContainer.appendChild(dot);
});

const sliderDots = document.querySelectorAll('.slider-dot');

function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    sliderDots[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    sliderDots[currentSlide].classList.add('active');
}

function nextSlide() {
    goToSlide((currentSlide + 1) % slides.length);
}

function prevSlide() {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
}

sliderNext.addEventListener('click', () => {
    nextSlide();
    resetSlideInterval();
});

sliderPrev.addEventListener('click', () => {
    prevSlide();
    resetSlideInterval();
});

function startSlideInterval() {
    slideInterval = setInterval(nextSlide, 5000);
}

function resetSlideInterval() {
    clearInterval(slideInterval);
    startSlideInterval();
}

startSlideInterval();

// ========================================
// Pricing Toggle
// ========================================
// const billingBtns = document.querySelectorAll('.billing-btn');
// const priceValues = document.querySelectorAll('.price-value');
// const pricePeriods = document.querySelectorAll('.amc-period');
// let currentPeriod = 'monthly';

// billingBtns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     billingBtns.forEach(b => b.classList.remove('active'));
//     btn.classList.add('active');
//     currentPeriod = btn.dataset.period;

//     priceValues.forEach(value => {
//       value.textContent = value.dataset[currentPeriod];
//     });

//     pricePeriods.forEach(period => {
//       period.textContent = period.dataset[currentPeriod];
//     });
//   });
// });

// ===============================
// Reviews Data
// ===============================
const reviews = [
    {
        name: "Ms. D. Meghana",
        role: "ETL Tester (2+ years) ",
        company: "Accenture",
        companyLogo: "./assets/logos/accenture.png",
        image: "./assets/reviews/meghana.png",
        rating: 5,
        feedback:
            "The training methodology followed by Saredufy Web Plus Academy is well-structured and aligned with current industry standards. The hands-on approach, real-world project exposure, and clear conceptual delivery."
    },
    {
        name: "Mr. S. Reddy",
        role: "Asst. System Engineer (4+ years)",
        company: "TCS",
        companyLogo: "./assets/logos/tcs.png",
        image: "./assets/reviews/reddy.png",
        rating: 5,
        feedback:
            "With over four years of industry experience, I found the training approach at Saredufy Web Plus Academy to be well-structured, practical, and aligned with current industry standards."
    },
    {
        name: "Ms. Nadiya Syed",
        role: "Java Developer (2+ years)",
        company: "Accenture",
        companyLogo: "./assets/logos/accenture.png",
        image: "./assets/reviews/nadiya.png",
        rating: 5,
        feedback:
            "The course design and teaching methodology follow industry-aligned standards. The emphasis on practical learning and clear concept delivery reflects a mature and professional training approach."
    },
    {
        name: "Sreyamsi Vemula ",
        role: "Programme Analyst",
        company: "Cognizant",
        companyLogo: "./assets/logos/cognizant.png",
        image: "./assets/reviews/sreya.jpg",
        rating: 5,
        feedback:
            "As a working professional, I find the training methodology at SWPA to be well-structured and aligned with industry standards. The practical approach reflects real-world development practices."
    },
     {
        name: "Sai Harika Potturu",
        role: "Software Engineer",
        company: "LTIMindtree",
        companyLogo: "./assets/logos/ltim.png",
        image: "./assets/reviews/harika.jpg",
        rating: 5,
        feedback:
            "The training delivery meets professional expectations in terms of structure, clarity, and relevance. The hands-on focus ensures learners are prepared for real industry scenarios."
    },
    {
        name: "Deva Sai Nandini",
        role: "B.Tech CS",
        company: "MITS University",
        companyLogo: "./assets/logos/swpaverified.png",
        image: "./assets/reviews/nandini.png",
        rating: 5,
        feedback:
        "The course content is well-planned and aligned with industry needs. Regular practice sessions and mentor guidance made complex topics much easier to grasp and learn."
    },
    {
        name: "G. Chandana",
        role: "B.Tech AI/ML",
        company: "BITM, Bengaluru",
        companyLogo: "./assets/logos/swpaverified.png",
        image: "./assets/reviews/chandana.png",
        rating: 5,
        feedback:
            "The teaching methodology is systematic and learner-friendly. Hands-on assignments and real-world examples improved my problem-solving and designing skills significantly."
    },
    {
        name: "S. Bhavya Reddy",
        role: "B.Tech CSE",
        company: "MITS University",
        companyLogo: "./assets/logos/swpaverified.png",
        image: "./assets/reviews/bhavya.png",
        rating: 5,
        feedback:
           "The mentors explain concepts with clarity and patience. Continuous guidance and project-based learning helped me gain strong practical exposure and knowledge."
    },
    {
        name: "V. Rishitha",
        role: "B.Tech ECE",
        company: "SVCE, Tirupati",
        companyLogo: "./assets/logos/swpaverified.png",
        image: "./assets/reviews/rishitha.png",
        rating: 5,
        feedback:
            "The course structure is well-organized and focused on real-world development. Practical sessions and timely feedback enhanced my overall learning and development experience."
    },
    {
        name: "B. Megasyam",
        role: "B.Tech ECE",
        company: "Sree Rama College, Tirupati",
        companyLogo: "./assets/logos/swpaverified.png",
        image: "./assets/reviews/shyam.png",
        rating: 5,
        feedback:
            "The training approach emphasizes both fundamentals and practical implementation. Mentor support and real-time projects boosted my confidence as a designer and developer."
    },
    {
        name: "T. Rishikeshav",
        role: "B.Tech ECE",
        company: "SVCE, Tirupati",
        companyLogo: "./assets/logos/swpaverified.png",
        image: "./assets/reviews/rishi.png",
        rating: 5,
        feedback:
            "The sessions are interactive and well-paced. Hands-on exercises and industry-relevant tasks helped me understand how concepts are applied in real scenarios."
    },
    {
        name: "S. Sai Sruthi",
        role: "Bioinformatics",
        company: "Vignan university",
        companyLogo: "./assets/logos/swpaverified.png",
        image: "./assets/reviews/sruthi.png",
        rating: 5,
        feedback:
            "The curriculum is thoughtfully designed with a strong practical focus. Mentor guidance and structured practice sessions made learning effective and engaging."
    },
    {
        name: "Varsha Meti",
        role: "B.Tech CSE-Ai",
        company: "BITM, Bengaluru",
        companyLogo: "./assets/logos/swpaverified.png",
        image: "./assets/reviews/varsha.png",
        rating: 5,
        feedback:
            "The training experience is professional and well-managed. Real-world projects and continuous mentoring helped bridge the gap between theory and practice."
    },
    {
        name: "S. Pallavi",
        role: "B.Tech CSE",
        company: "Vishwam College",
        companyLogo: "./assets/logos/swpaverified.png",
        image: "./assets/reviews/pallavi.png",
        rating: 5,
        feedback:
            "The learning environment encourages clarity and confidence. Practical assignments, mentor support, and structured teaching made the course highly effective."
    },
    {
        name: "K. Vedagna",
        role: "BCA AI/ML",
        company: "VIT, Vellore",
        companyLogo: "./assets/logos/swpaverified.png",
        image: "./assets/reviews/vedha.jpg",
        rating: 5,
        feedback:
            "The curriculum is designed thoughtfully with a strong practical orientation. Regular assignments and guidance improved my learning, overall learning experience is organized and effective."
    },
    {
        name: "Basavana Gouda",
        role: "SWPA Campus Ambassador",
        company: "DBIT, Bengaluru",
        companyLogo: "./assets/logos/dbit.png",
        image: "./assets/reviews/basavana.png",
        rating: 5,
        feedback:
            "As a Campus Ambassador, I’ve closely observed the training methodology at SWPA, mentor-driven guidance make the learning experience engaging, and impactful for students."
    },
];


let currentReview = 0;
let reviewInterval;


const reviewStars = document.getElementById("reviewStars");
const reviewText = document.getElementById("reviewText");
const reviewAvatar = document.getElementById("reviewAvatar");
const reviewName = document.getElementById("reviewName");
const reviewRole = document.getElementById("reviewRole");
const reviewCompanyLogo = document.getElementById("reviewCompanyLogo");

const reviewDotsContainer = document.getElementById("reviewDots");
const reviewMiniGrid = document.getElementById("reviewMiniGrid");

const reviewPrev = document.getElementById("reviewPrev");
const reviewNext = document.getElementById("reviewNext");


reviews.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = "review-dot";
    if (index === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
        goToReview(index);
        resetReviewInterval();
    });

    reviewDotsContainer.appendChild(dot);
});

const reviewDots = document.querySelectorAll(".review-dot");


function renderStars(rating) {
    let stars = "";
    for (let i = 0; i < rating; i++) {
        stars += `
      <svg class="review-star" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12 2 15.09 8.26 22 9.27
          17 14.14 18.18 21.02
          12 17.77 5.82 21.02
          7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    `;
    }
    return stars;
}


function updateMainReview() {
    const review = reviews[currentReview];

    reviewStars.innerHTML = renderStars(review.rating);
    reviewText.textContent = `"${review.feedback}"`;

    reviewAvatar.src = review.image;
    reviewAvatar.alt = review.name;

    reviewName.textContent = review.name;
    reviewRole.textContent = `${review.role} at ${review.company}`;

    // Company logo
    if (review.companyLogo) {
        reviewCompanyLogo.src = review.companyLogo;
        reviewCompanyLogo.alt = review.company;
        reviewCompanyLogo.style.display = "block";
    } else {
        reviewCompanyLogo.style.display = "none";
    }

    reviewDots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentReview);
    });
}


function updateMiniReviews() {
    const total = reviews.length;

    // Calculate indices (with wrap-around)
    const prevIndex = (currentReview - 1 + total) % total;
    const nextIndex1 = (currentReview + 1) % total;
    const nextIndex2 = (currentReview + 2) % total;

    const miniReviews = [
        reviews[prevIndex],
        reviews[nextIndex1],
        reviews[nextIndex2]
    ];

    reviewMiniGrid.innerHTML = miniReviews
        .map((review) => {
            const index = reviews.indexOf(review);

            return `
                <div class="review-mini-card"
                     onclick="goToReview(${index}); resetReviewInterval();">
                     
                    <div class="review-mini-header">
                        <img class="review-mini-avatar"
                             src="${review.image}"
                             alt="${review.name}">

                        <div class="review-mini-info">
                            <p class="review-mini-name">${review.name}</p>
                            <div class="review-mini-stars">
                                ${renderStars(review.rating)}
                            </div>
                        </div>

                        ${
                            review.companyLogo
                                ? `<img class="review-mini-company-logo"
                                         src="${review.companyLogo}"
                                         alt="${review.company}">`
                                : ""
                        }
                    </div>

                    <p class="review-mini-text">"${review.feedback}"</p>
                </div>
            `;
        })
        .join("");
}


// ===============================
// Navigation
// ===============================
function goToReview(index) {
    currentReview = index;
    updateMainReview();
    updateMiniReviews();
}

function nextReview() {
    goToReview((currentReview + 1) % reviews.length);
}

function prevReview() {
    goToReview((currentReview - 1 + reviews.length) % reviews.length);
}

reviewNext.addEventListener("click", () => {
    nextReview();
    resetReviewInterval();
});

reviewPrev.addEventListener("click", () => {
    prevReview();
    resetReviewInterval();
});

// ===============================
// Auto Slide
// ===============================
function startReviewInterval() {
    reviewInterval = setInterval(nextReview, 5000);
}

function resetReviewInterval() {
    clearInterval(reviewInterval);
    startReviewInterval();
}

// ===============================
// Init
// ===============================
updateMainReview();
updateMiniReviews();
startReviewInterval();

// ========================================
// Enrollment Modal
// ========================================
const enrollModal = document.getElementById('enrollModal');
const courseSelect = document.getElementById('courseSelect');
const enrollForm = document.getElementById('enrollForm');

function openEnrollModal(courseName) {
    enrollModal.classList.add('active');
    if (courseName) {
        courseSelect.value = courseName;
    }
    document.body.style.overflow = 'hidden';
}

function closeEnrollModal() {
    enrollModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeEnrollModal();
    }
});

enrollForm.addEventListener('submit', (e) => {
    e.preventDefault();
    closeEnrollModal();
    showToast('Enrollment Submitted!', "We'll contact you within 24 hours to confirm your enrollment.");
    enrollForm.reset();
});

// ========================================
// Contact Form
// ========================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Message Sent!', "Thank you for reaching out. We'll get back to you within 24 hours.");
    contactForm.reset();
});

// ========================================
// Toast Notifications
// ========================================
const toast = document.getElementById('toast');
const toastTitle = document.getElementById('toastTitle');
const toastMessage = document.getElementById('toastMessage');

function showToast(title, message) {
    toastTitle.textContent = title;
    toastMessage.textContent = message;
    toast.classList.add('active');
    toast.classList.add("show");

    //   setTimeout(() => {
    // }, 4000);
}

function closeToast() {
    toast.classList.remove('active');
    toast.classList.remove("show");
}

// ========================================
// Smooth Scroll for Anchor Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Initialize
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Add active class to current nav link based on scroll position
    const sections = document.querySelectorAll('section[id]');

    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - header.offsetHeight;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink();
});

//==========================================
// Courrses & Internship toggle
//=========================================

const programButtons = document.querySelectorAll(".program-btn");
const indicator = document.querySelector(".toggle-indicator");

const coursesGrid = document.getElementById("coursesGrid");
const internshipsGrid = document.getElementById("internshipsGrid");

programButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {

        // Toggle active button
        programButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // Move indicator
        indicator.style.transform = `translateX(${index * 100}%)`;

        // Show / Hide grids
        if (btn.dataset.type === "courses") {
            coursesGrid.style.display = "grid";
            internshipsGrid.style.display = "none";
        } else {
            coursesGrid.style.display = "none";
            internshipsGrid.style.display = "grid";
        }
    });
});


//==========================================
// Frontend & Full Stack Projects Toggle
//==========================================

const projectButtons = document.querySelectorAll(".project-btn");
const projectindicator = document.querySelector(".project-toggle-indicator");

const frontendGrid = document.getElementById("frontendGrid");
const fullstackGrid = document.getElementById("fullstackGrid");

projectButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {

        // Active state
        projectButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // Move projectindicator
        projectindicator.style.transform = `translateX(${index * 100}%)`;

        // Show / Hide grids
        if (btn.dataset.type === "frontend") {
            frontendGrid.style.display = "grid";
            fullstackGrid.style.display = "none";
        } else {
            frontendGrid.style.display = "none";
            fullstackGrid.style.display = "grid";
        }
    });
});


//==========================================
// Billing Toggle (Monthly / Yearly)
//==========================================

const billingButtons = document.querySelectorAll(".billing-btn");
const billingIndicator = document.querySelector(".billing-toggle-indicator");

// Elements that change based on billing
const priceValues = document.querySelectorAll(".price-value");
const pricePeriods = document.querySelectorAll(".amc-period");

billingButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {

        // Active button state
        billingButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // Move indicator
        billingIndicator.style.transform = `translateX(${index * 100}%)`;

        const period = btn.dataset.period; // monthly | yearly

        // Update prices
        priceValues.forEach(price => {
            price.textContent = price.dataset[period];
        });

        // Update period text (/month or /year)
        pricePeriods.forEach(p => {
            p.textContent = p.dataset[period];
        });
    });
});

//==========================
// Whatsapp messeging
//========================
function bookProject(projectName) {
    const phone = "918886200010";
    const message = `Hello Team,\n` +
        `I would like to book a ${projectName}.\n` +
        `Please share the next steps.\n\n` +
        `Thanks.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
}

function subscribeAMC(planName) {
    const phone = "918886200010";

    // Ask customer name
    const customerName = prompt("Please enter your name:");

    // If user cancels or leaves empty
    if (!customerName || !customerName.trim()) {
        return;
    }

    // Detect billing period
    const activeBilling = document.querySelector(".billing-btn.active");
    const period = activeBilling ? activeBilling.dataset.period : "monthly";

    // Get price details
    const priceCard = event.target.closest(".price-card");
    const priceValue = priceCard.querySelector(".price-value").dataset[period];
    const pricePeriod = priceCard.querySelector(".amc-period").dataset[period];

    // WhatsApp message
    const message =
        `Hello Team,\n\n` +
        `My name is ${customerName}.\n\n` +
        `I would like to subscribe to the ${planName}.\n` +
        `Price: ${priceValue} ${pricePeriod}\n` +
        `Billing: ${period === "monthly" ? "Monthly" : "Yearly"}\n\n` +
        `Please share the next steps.\n\n` +
        `Thanks,\n${customerName}`;

    // Redirect to WhatsApp
    window.open(
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
        "_blank"
    );
}


function sendToWhatsApp() {
    const phone = "918886200010";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill all the fields before sending.");
        return;
    }

    const whatsappMessage =
        `Hello SWPA Team,%0A%0A` +
        `Name: ${name}%0A` +
        `Email: ${email}%0A%0A` +
        `Message:%0A${message}`;

    const whatsappURL =
        `https://wa.me/${phone}?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");

    // ✅ Auto-clear form after redirect
    form.reset();

}