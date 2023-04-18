'use strict';

const trigger = document.getElementById('trigger');
const target = document.getElementById('target');
const originalSrc = target.src;
const newSrc = 'img/picB.jpg';

trigger.addEventListener('mouseover', () => {
  target.src = newSrc;
});

trigger.addEventListener('mouseout', () => {
  target.src = originalSrc;
});