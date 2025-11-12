// Scroll Animations
$(window).on('scroll', function() {
  $('.fade-in').each(function() {
    const elementTop = $(this).offset().top;
    const windowBottom = $(window).scrollTop() + $(window).height();
    if (windowBottom > elementTop + 50) {
      $(this).addClass('active');
    }
  });

  if ($(window).scrollTop() > 300) $('#backToTop').fadeIn();
  else $('#backToTop').fadeOut();
});

$('#backToTop').click(() => $('html, body').animate({ scrollTop: 0 }, 800));

// Theme Toggle Logic
const toggleSwitch = document.getElementById('theme-checkbox');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
  toggleSwitch.checked = true;
}

toggleSwitch.addEventListener('change', () => {
  if (toggleSwitch.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
});

// Scroll animation for timeline items
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".timeline-item").forEach(item => {
  observer.observe(item);
});

 // Image preview hover effect
  const items = document.querySelectorAll(".timeline-item");
  const preview = document.getElementById("experiencePreview");

  items.forEach(item => {
    item.addEventListener("mouseenter", () => {
      const imgSrc = item.getAttribute("data-image");
      preview.src = imgSrc;
      preview.classList.add("show");
    });
    item.addEventListener("mouseleave", () => {
      preview.classList.remove("show");
    });
  });