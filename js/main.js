// PowerZone Gym 
// Minimal vanilla JS - no frameworks

// FAQ accordion toggle
document.addEventListener('DOMContentLoaded', function () {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(function (question) {
    question.addEventListener('click', function () {
      const answer = this.nextElementSibling;
      const isOpen = answer.style.display === 'block';

      // Close all answers first
      document.querySelectorAll('.faq-answer').forEach(function (a) {
        a.style.display = 'none';
      });

      // Toggle the clicked one
      answer.style.display = isOpen ? 'none' : 'block';
    });
  });
});
