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
