import { faqs } from './FAQs.js';
import { testimonials } from './testimonials.js';

const toggleMenu = document.getElementById('toggleMenu');
const navLinks = document.getElementById('navLinks');

toggleMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const toggleLanguageButton = document.getElementById(
  'inMenuToggleLanguageButton'
);
const navLanguages = document.getElementById('navLanguages');

toggleLanguageButton.addEventListener('click', () => {
  navLanguages.classList.toggle('active');
});

const outOfMenuToggleLanguageButton = document.getElementById(
  'outOfMenuToggleLanguageButton'
);
const outNavLanguages = document.getElementById('outNavLanguages');

outOfMenuToggleLanguageButton.addEventListener('click', () => {
  outNavLanguages.classList.toggle('active');
});

let currentIdx = 0;

function renderTestimonial() {
  const testimonial = testimonials[currentIdx];
  const createTestimonialHtml = `
  <div class="avatar"><img class="avatar-img" src="${testimonial.img}" alt="${testimonial.fullName}" /></div>
  <div class="name">${testimonial.fullName}</div>
  <div class="position">${testimonial.position}</div>
  <img id="commas-element" src="/assets/commas.png" alt="commas" />
  <p id="testimonial ">${testimonial.testimonial}</p>
  `;
  document.getElementById('slides').innerHTML = createTestimonialHtml;
  document.getElementById('counter').innerText = `0${currentIdx + 1} / 0${
    testimonials.length
  }`;
}

document.getElementById('prev-btn').addEventListener('click', () => {
  currentIdx = (currentIdx - 1 + testimonials.length) % testimonials.length;
  renderTestimonial();
});

document.getElementById('next-btn').addEventListener('click', () => {
  currentIdx = (currentIdx + 1) % testimonials.length;
  renderTestimonial();
});

renderTestimonial();

const closeFaqSymbol = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.364 9.63606C22.5515 9.82359 22.6569 10.0779 22.6569 10.3432C22.6569 10.6084 22.5515 10.8627 22.364 11.0503L16.7071 16.7071C16.5196 16.8947 16.2652 17 16 17C15.7348 17 15.4804 16.8947 15.2929 16.7071L9.63604 11.0503C9.4485 10.8627 9.34315 10.6084 9.34315 10.3432C9.34315 10.0779 9.4485 9.82359 9.63604 9.63606C9.82358 9.44852 10.0779 9.34316 10.3431 9.34316C10.6084 9.34316 10.8627 9.44852 11.0503 9.63606L16 14.5858L20.9497 9.63606C21.1373 9.44852 21.3916 9.34316 21.6569 9.34316C21.9221 9.34316 22.1764 9.44852 22.364 9.63606Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2929 15.2929C15.4804 15.1054 15.7348 15 16 15C16.2652 15 16.5196 15.1054 16.7071 15.2929L22.364 20.9498C22.5515 21.1373 22.6569 21.3917 22.6569 21.6569C22.6569 21.9221 22.5515 22.1765 22.364 22.364C22.1764 22.5515 21.9221 22.6569 21.6569 22.6569C21.3916 22.6569 21.1373 22.5515 20.9497 22.364L16 17.4142L11.0503 22.364C10.8627 22.5515 10.6084 22.6569 10.3431 22.6569C10.0779 22.6569 9.82358 22.5515 9.63604 22.364C9.4485 22.1765 9.34315 21.9221 9.34315 21.6569C9.34315 21.3917 9.4485 21.1373 9.63604 20.9498L15.2929 15.2929Z" fill="black"/>
</svg>`;

const openFaqSymbol = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 7C16.2652 7 16.5196 7.10536 16.7071 7.29289C16.8946 7.48043 17 7.73478 17 8V16C17 16.2652 16.8946 16.5196 16.7071 16.7071C16.5196 16.8946 16.2652 17 16 17H8C7.73478 17 7.48043 16.8946 7.29289 16.7071C7.10536 16.5196 7 16.2652 7 16C7 15.7348 7.10536 15.4804 7.29289 15.2929C7.48043 15.1054 7.73478 15 8 15H15V8C15 7.73478 15.1054 7.48043 15.2929 7.29289C15.4804 7.10536 15.7348 7 16 7Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 16C15 15.7348 15.1054 15.4804 15.2929 15.2929C15.4804 15.1054 15.7348 15 16 15H24C24.2652 15 24.5196 15.1054 24.7071 15.2929C24.8946 15.4804 25 15.7348 25 16C25 16.2652 24.8946 16.5196 24.7071 16.7071C24.5196 16.8946 24.2652 17 24 17H17V24C17 24.2652 16.8946 24.5196 16.7071 24.7071C16.5196 24.8946 16.2652 25 16 25C15.7348 25 15.4804 24.8946 15.2929 24.7071C15.1054 24.5196 15 24.2652 15 24V16Z" fill="black"/>
</svg>`;

function createFAQItem(faq) {
  const faqItem = document.createElement('div');
  faqItem.className = 'faq-item';
  faqItem.innerHTML = `
    
    <div class="faq-questions">
      <p class="faq-question">${faq.question}</p>
      <span class="faq-toggle">${openFaqSymbol}</span>
    </div>

    <div class="faq-answer" style="display: none;">
      ${faq.answer}
    </div>
    
    `;

  return faqItem;
}

function appendFAQItems(faqs, container) {
  faqs.forEach(faq => {
    container.appendChild(createFAQItem(faq));
  });
}

function toggleFAQItem(clickedItem) {
  const wasActive = clickedItem.classList.contains('active');
  closeAllFAQItems();

  if (!wasActive) {
    openFAQItem(clickedItem);
  }
}

function closeAllFAQItems() {
  document.querySelectorAll('.faq-item').forEach(item => {
    item.classList.remove('active');
    item.querySelector('.faq-toggle').innerHTML = openFaqSymbol;
    item.querySelector('.faq-answer').style.display = 'none';
  });
}

function openFAQItem(item) {
  item.classList.add('active');
  item.querySelector('.faq-toggle').innerHTML = closeFaqSymbol;
  item.querySelector('.faq-answer').style.display = 'block';
}

function setupEventListeners(container) {
  container.addEventListener('click', function (event) {
    const faqItem = event.target.closest('.faq-item');
    if (faqItem) {
      toggleFAQItem(faqItem);
    }
  });
}

function initializeFAQs() {
  const faqContainer = document.getElementById('faq-container');
  appendFAQItems(faqs, faqContainer);
  setupEventListeners(faqContainer);
}

document.addEventListener('DOMContentLoaded', initializeFAQs);

let form = document.getElementById('form');
const validateEmail = email => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

form.addEventListener('submit', e => {
  e.preventDefault();

  const emailInput = document.getElementById('email-input');
  const emailError = document.getElementById('email-error');

  if (emailInput.value == '' || !validateEmail(emailInput.value)) {
    emailError.innerHTML = 'Invalid email';
  }

  console.log(e.target);
});
