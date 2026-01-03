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
    let activeIndex = -1; // IMPORTANT: start from -1 (means 0%)

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop - 150;

      if (window.scrollY >= sectionTop) {
        activeIndex = index;
      }
    });

    // RESET STATES
    roadmapButtons.forEach(btn =>
      btn.classList.remove("active", "completed")
    );

    // APPLY STATES ONLY IF STEP IS REACHED
    if (activeIndex >= 0) {
      roadmapButtons.forEach((btn, index) => {
        if (index < activeIndex) {
          btn.classList.add("completed");
        } else if (index === activeIndex) {
          btn.classList.add("active");
        }
      });
    }

    // UPDATE PROGRESS BAR
    const progressPercent =
      activeIndex >= 0
        ? ((activeIndex + 1) / roadmapButtons.length) * 100
        : 0;

    progressFill.style.width = progressPercent + "%";
  }

  window.addEventListener("scroll", updateProgress);
  window.addEventListener("load", updateProgress);


