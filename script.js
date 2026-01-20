/* ═══════════════════════════════════════════════════════════════
   Talha Tariq PORTFOLIO - JAVASCRIPT
   
   📁 FILE STRUCTURE:
   - index.html: HTML structure
   - style.css: All styles
   - script.js: This file (all functionality)
   
   🎯 FEATURES:
   1. Theme Toggle (Dark/Light mode)
   2. Custom Cursor Effect (Star glow in dark, soft in light)
   3. Smooth Scroll Navigation
   4. Interactive Logo Animation
   
   📝 HOW IT WORKS:
   - Theme preference is saved in localStorage
   - Cursor follows mouse movements with smooth animation
   - Scroll effects trigger on page scroll
   ═══════════════════════════════════════════════════════════════ */

// ═══════════════════════════════════════════════════════════════
// THEME TOGGLE FUNCTIONALITY
// Switches between dark and light mode
// ═══════════════════════════════════════════════════════════════

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

function toggleTheme() {
    const theme = document.documentElement.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// ═══════════════════════════════════════════════════════════════
// CUSTOM CURSOR EFFECT
// Creates a glowing cursor effect that follows mouse movement
// Light mode: Soft blue shadow
// Dark mode: Star-like glow effect
// ═══════════════════════════════════════════════════════════════

const cursorGlow = document.querySelector('.cursor-glow');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

// Track mouse position
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Show cursor on first movement
    if (cursorGlow.style.opacity === '0' || cursorGlow.style.opacity === '') {
        cursorGlow.style.opacity = '1';
    }
});

// Smooth cursor follow animation
function animateCursor() {
    // Smooth easing effect
    const ease = 0.15;
    cursorX += (mouseX - cursorX) * ease;
    cursorY += (mouseY - cursorY) * ease;
    
    // Update cursor position
    cursorGlow.style.left = cursorX + 'px';
    cursorGlow.style.top = cursorY + 'px';
    
    requestAnimationFrame(animateCursor);
}

// Start cursor animation
animateCursor();

// Hide cursor when mouse leaves window
document.addEventListener('mouseleave', () => {
    cursorGlow.style.opacity = '0';
});

// Show cursor when mouse enters window
document.addEventListener('mouseenter', () => {
    cursorGlow.style.opacity = '1';
});

// ═══════════════════════════════════════════════════════════════
// SMOOTH SCROLL NAVIGATION
// Makes navigation links scroll smoothly instead of jumping
// ═══════════════════════════════════════════════════════════════

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        
        // Handle home link (scroll to top)
        if (targetId === '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }
        
        // Scroll to target section
        const target = document.querySelector(targetId);
        if (target) {
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ═══════════════════════════════════════════════════════════════
// SCROLL EFFECTS
// Add effects when scrolling (like fade-in animations)
// ═══════════════════════════════════════════════════════════════

// Observe elements and add animations when they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// ═══════════════════════════════════════════════════════════════
// INTERACTIVE CURSOR EFFECTS ON HOVER
// Cursor transforms to "grabbing" mode on interactive elements
// Shows sparkle effect and grows
// ═══════════════════════════════════════════════════════════════

const interactiveElements = document.querySelectorAll('a, button, .skill-card, .project-card, .logo-circle');

interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursorGlow.classList.add('grabbing');
    });
    
    element.addEventListener('mouseleave', () => {
        cursorGlow.classList.remove('grabbing');
    });
});

// ═══════════════════════════════════════════════════════════════
// NAVBAR SCROLL EFFECT
// Add shadow to navbar when scrolling down
// ═══════════════════════════════════════════════════════════════

let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.boxShadow = '0 2px 10px var(--shadow)';
    } else {
        nav.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ═══════════════════════════════════════════════════════════════
// CONSOLE EASTER EGG
// Fun message for developers who check the console
// ═══════════════════════════════════════════════════════════════

console.log('%c👋 Hey there, developer!', 'font-size: 20px; font-weight: bold; color: #3b82f6;');
console.log('%cLooking at the code? I like your style!', 'font-size: 14px; color: #6b7280;');
console.log('%cFeel free to reach out: rozlanwayu@email.com', 'font-size: 14px; color: #3b82f6;');