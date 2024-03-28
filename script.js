const barButton = document.querySelector('.bar');
const rightSec = document.querySelector('.right-sec');
const buttonsDiv = document.querySelector('.buttons');
const line_1 = document.querySelector('.line-1');
const line_2 = document.querySelector('.line-2');
const line_3 = document.querySelector('.line-3');

let isCross = false;
rightSec.style.display = 'none';
barButton.addEventListener('click', () => {
    // Toggle the display of right-sec and buttonsDiv simultaneously
    if (rightSec.style.display === 'none') {
        rightSec.style.display = 'flex';
        buttonsDiv.style.display = 'flex';
        // Change bar to cross
        line_1.style.transform = 'rotate(45deg) translate(10px, 8px)';
        line_2.style.opacity = '0';
        line_3.style.transform = 'rotate(-45deg) translate(10px, -7px)';
        isCross = true;
    } else {
        rightSec.style.display = 'none';
        buttonsDiv.style.display = 'none';
        // Change cross to bar
        line_1.style.transform = 'none';
        line_2.style.opacity = '1';
        line_3.style.transform = 'none';
        isCross = false;
    }
});

// JavaScript for tab switching
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.right-sec > p');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const tabId = btn.getAttribute('data-tab');

    tabContents.forEach(content => {
      if (content.id === tabId) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });
  });
});