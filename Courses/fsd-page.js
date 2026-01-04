//loader top up scroll
  const scrollBtn = document.getElementById("scrollTopBtn");
  const progressCircle = document.querySelector(".progress-ring-fill");
  const percentText = document.querySelector(".scroll-percent");

  const radius = 22;
  const circumference = 2 * Math.PI * radius;

  progressCircle.style.strokeDasharray = circumference;
  progressCircle.style.strokeDashoffset = circumference;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollPercent = Math.round((scrollTop / docHeight) * 100);

    // Show / hide button
    if (scrollTop > 150) {
      scrollBtn.style.display = "flex";
    } else {
      scrollBtn.style.display = "none";
    }

    // Update circle
    const offset =
      circumference - (scrollPercent / 100) * circumference;

    progressCircle.style.strokeDashoffset = offset;
    percentText.textContent = `${scrollPercent}%`;
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });




  



document.addEventListener("DOMContentLoaded", () => {
    const progressFill = document.getElementById("fsdProgressFill");

    if (progressFill) {
        setTimeout(() => {
            progressFill.style.width = "100%";
        }, 400);
    }
});


const timelineBlocks = document.querySelectorAll(".fsd-timeline-block");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fsd-active");
            }
        });
    },
    {
        threshold: 0.35
    }
);

timelineBlocks.forEach(block => observer.observe(block));

const faqItems = document.querySelectorAll(".fsd-faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".fsd-faq-question");

    question.addEventListener("click", () => {
        // Close others (accordion behavior)
        faqItems.forEach(i => {
            if (i !== item) i.classList.remove("active");
        });

        // Toggle current
        item.classList.toggle("active");
    });
});




const roadmapButtons = document.querySelectorAll(".launchpad-roadmap button");
const progressFill = document.querySelector(".launchpad-progress-fill");
const flowContainer = document.querySelector(".launchpad-flow");
const flowStart = flowContainer.offsetTop;
const flowEnd = flowStart + flowContainer.offsetHeight;
const sections = [];

roadmapButtons.forEach(btn => {
    const target = document.querySelector(btn.dataset.target);
    if (target) sections.push(target);

    // CLICK → SCROLL
    btn.addEventListener("click", () => {
        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

function updateProgress() {

    const flowContainer = document.querySelector(".launchpad-flow");
    if (!flowContainer) return;

    const flowStart = flowContainer.offsetTop;
    const flowEnd = flowStart + flowContainer.offsetHeight;

    /* ================= BEFORE FLOW ================= */
    if (window.scrollY < flowStart) {

        // RESET everything
        roadmapButtons.forEach(btn =>
            btn.classList.remove("active", "completed")
        );

        progressFill.style.width = "0%";
        return;
    }

    /* ================= AFTER FLOW ================= */
    if (window.scrollY > flowEnd) {

        roadmapButtons.forEach((btn, index) => {
            btn.classList.remove("active");
            btn.classList.add("completed");
        });

        progressFill.style.width = "100%";
        return;
    }

    /* ================= INSIDE FLOW ================= */
    let activeIndex = -1;
    let progress = 0;

    for (let i = 0; i < sections.length; i++) {
        const current = sections[i];
        const next = sections[i + 1];

        const start = current.offsetTop - 150;
        const end = next
            ? next.offsetTop - 150
            : flowEnd;

        if (window.scrollY >= start && window.scrollY < end) {
            activeIndex = i;

            const sectionProgress =
                (window.scrollY - start) / (end - start);

            progress =
                ((i + sectionProgress) / roadmapButtons.length) * 100;

            break;
        }
    }

    // RESET STATES
    roadmapButtons.forEach(btn =>
        btn.classList.remove("active", "completed")
    );

    // APPLY STATES
    if (activeIndex >= 0) {
        roadmapButtons.forEach((btn, index) => {
            if (index < activeIndex) {
                btn.classList.add("completed");
            } else if (index === activeIndex) {
                btn.classList.add("active");
            }
        });
    }

    // APPLY PROGRESS
    progressFill.style.width = `${Math.min(progress, 100)}%`;
}


window.addEventListener("scroll", updateProgress);
window.addEventListener("load", updateProgress);
