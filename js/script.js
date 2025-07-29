/**
 * Python Developer Portfolio - Interactive JavaScript
 * 
 * This script implements interactive features for the portfolio website including:
 * - Mobile navigation toggle
 * - Smooth scrolling for navigation links
 * - Active navigation state highlighting
 * - Project filtering system
 * - Contact form validation
 * - Scroll animations
 * - Dark/light mode toggle
 * - Accessibility enhancements
 */

// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive components
    initMobileNavigation();
    initSmoothScrolling();
    initActiveNavigation();
    initProjectFiltering();
    initContactForm();
    initScrollAnimations();
    initDarkModeToggle();
    initAccessibility();
});

/**
 * Mobile Navigation Toggle
 * Handles the mobile menu toggle functionality
 */
function initMobileNavigation() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const primaryNav = document.querySelector('.primary-nav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu when hamburger button is clicked
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            // Toggle active class on mobile menu toggle button
            this.classList.toggle('active');
            
            // Toggle active class on primary navigation
            primaryNav.classList.toggle('active');
            
            // Update aria-expanded attribute for accessibility
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
        });
    }
    
    // Close mobile menu when a navigation link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from mobile menu toggle button
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
            
            // Remove active class from primary navigation
            primaryNav.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside the navigation
    document.addEventListener('click', function(event) {
        const isClickInsideNav = primaryNav.contains(event.target);
        const isClickOnToggle = mobileMenuToggle && mobileMenuToggle.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle && primaryNav.classList.contains('active')) {
            // Remove active class from mobile menu toggle button
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
            
            // Remove active class from primary navigation
            primaryNav.classList.remove('active');
        }
    });
}

/**
 * Smooth Scrolling
 * Implements smooth scrolling for navigation links
 */
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor behavior
            e.preventDefault();
            
            // Get the target element ID
            const targetId = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (targetId === '#') return;
            
            // Find the target element
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calculate the offset for the fixed header
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                // Scroll to the target element
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without causing a page jump
                history.pushState(null, null, targetId);
            }
        });
    });
}

/**
 * Active Navigation State
 * Highlights the current section in view in the navigation
 */
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Function to update active navigation link
    function updateActiveNav() {
        // Get current scroll position
        const scrollPosition = window.scrollY + 100;
        
        // Loop through sections to find which one is in view
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            // Check if section is in view
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all navigation links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    
                    // Add active class to current section's navigation link
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Update active navigation on scroll
    window.addEventListener('scroll', updateActiveNav);
    
    // Update active navigation on load
    updateActiveNav();
}

/**
 * Project Filtering System
 * Implements filtering functionality for the projects section
 */
function initProjectFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card[data-category]');
    
    // Add click event to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all filter buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    // Show project card with animation
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    // Hide project card with animation
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Set initial styles for project cards
    projectCards.forEach(card => {
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
    });
}


/**
 * Scroll Animations
 * Animates elements when they come into view
 */
function initScrollAnimations() {
    // Elements to animate
    const animatedElements = document.querySelectorAll('.section-title, .hero-content, .hero-image, .project-card, .skill-category, .interest-item, .tool-item, .soft-skill-item, .certification-card, .timeline-item, .education-item');
    
    // Set initial state for animated elements
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Function to check if element is in viewport
    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Function to animate elements in viewport
    function animateElements() {
        animatedElements.forEach(element => {
            if (isElementInViewport(element) && element.style.opacity === '0') {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Animate elements on scroll
    window.addEventListener('scroll', animateElements);
    
    // Animate elements on load
    animateElements();
    
    // Animate skill bars when in viewport
    const skillBars = document.querySelectorAll('.skill-progress');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            if (isElementInViewport(bar) && !bar.classList.contains('animated')) {
                // Get width from style attribute
                const width = bar.style.width;
                
                // Set initial width to 0
                bar.style.width = '0';
                
                // Add animated class
                bar.classList.add('animated');
                
                // Animate to target width
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            }
        });
    }
    
    // Animate skill bars on scroll
    window.addEventListener('scroll', animateSkillBars);
    
    // Animate skill bars on load
    animateSkillBars();
}

/**
 * Dark Mode Toggle
 * Implements dark/light mode toggle functionality
 */
function initDarkModeToggle() {
    // Create dark mode toggle button
    const header = document.querySelector('.header-content');
    const darkModeToggle = document.createElement('button');
    darkModeToggle.className = 'dark-mode-toggle';
    darkModeToggle.setAttribute('aria-label', 'Toggle dark mode');
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    
    // Add toggle button to header
    if (header) {
        header.appendChild(darkModeToggle);
    }
    
    // Check for saved dark mode preference or default to light mode
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    // Apply dark mode if preference is set
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Toggle dark mode on button click
    darkModeToggle.addEventListener('click', function() {
        // Toggle dark mode class on body
        document.body.classList.toggle('dark-mode');
        
        // Update icon
        if (document.body.classList.contains('dark-mode')) {
            this.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('darkMode', 'true');
        } else {
            this.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('darkMode', 'false');
        }
    });
}

/**
 * Accessibility Enhancements
 * Improves accessibility of interactive elements
 */
function initAccessibility() {
    // Add keyboard navigation support for dropdown menus
    const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
    
    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('keydown', function(e) {
            // If Enter or Space key is pressed
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Add focus management for modal dialogs
    const modals = document.querySelectorAll('.modal');
    
    modals.forEach(modal => {
        // Get focusable elements within modal
        const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const firstFocusableElement = focusableElements[0];
        const lastFocusableElement = focusableElements[focusableElements.length - 1];
        
        // Trap focus within modal
        modal.addEventListener('keydown', function(e) {
            // If Tab key is pressed
            if (e.key === 'Tab') {
                // If Shift + Tab
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusableElement) {
                        e.preventDefault();
                        lastFocusableElement.focus();
                    }
                } else {
                    // If Tab
                    if (document.activeElement === lastFocusableElement) {
                        e.preventDefault();
                        firstFocusableElement.focus();
                    }
                }
            }
            
            // If Escape key is pressed
            if (e.key === 'Escape') {
                // Close modal
                modal.classList.remove('active');
                
                // Return focus to trigger
                const trigger = document.querySelector(`[aria-controls="${modal.id}"]`);
                if (trigger) {
                    trigger.focus();
                }
            }
        });
    });
    
    // Add skip to content link functionality
    const skipLink = document.querySelector('.skip-link');
    
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.setAttribute('tabindex', '-1');
                targetElement.focus();
            }
        });
    }
    
    // Add ARIA attributes to elements that need them
    const accordions = document.querySelectorAll('.accordion');
    
    accordions.forEach(accordion => {
        const headers = accordion.querySelectorAll('.accordion-header');
        
        headers.forEach(header => {
            const button = header.querySelector('button');
            const content = header.nextElementSibling;
            
            if (button && content) {
                const accordionId = `accordion-${Math.random().toString(36).substr(2, 9)}`;
                
                // Set ARIA attributes
                button.setAttribute('aria-expanded', 'false');
                button.setAttribute('aria-controls', accordionId);
                content.setAttribute('id', accordionId);
                content.setAttribute('role', 'region');
                content.setAttribute('aria-labelledby', button.id || `${accordionId}-header`);
                
                // Toggle accordion on button click
                button.addEventListener('click', function() {
                    const isExpanded = this.getAttribute('aria-expanded') === 'true';
                    
                    // Update ARIA attributes
                    this.setAttribute('aria-expanded', !isExpanded);
                    
                    // Toggle content visibility
                    if (isExpanded) {
                        content.style.display = 'none';
                    } else {
                        content.style.display = 'block';
                    }
                });
            }
        });
    });
}

/**
 * Contact Form Validation and Submission
 * Handles form validation, error display, and submission
 */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formMessage = document.getElementById('formMessage');
    
    if (!contactForm) return;
    
    // Form field elements
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const subjectField = document.getElementById('subject');
    const messageField = document.getElementById('message');
    
    // Error message elements
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const subjectError = document.getElementById('subject-error');
    const messageError = document.getElementById('message-error');
    
    // Validation rules
    const validationRules = {
        name: {
            required: true,
            minLength: 2,
            pattern: /^[a-zA-Z\s]+$/,
            message: 'Please enter a valid name (letters only, at least 2 characters)'
        },
        email: {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Please enter a valid email address'
        },
        subject: {
            required: true,
            minLength: 5,
            message: 'Subject must be at least 5 characters long'
        },
        message: {
            required: true,
            minLength: 10,
            message: 'Message must be at least 10 characters long'
        }
    };
    
    // Validate a single field
    function validateField(field, rules, errorElement) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';
        
        // Check if required and empty
        if (rules.required && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        }
        // Check minimum length
        else if (rules.minLength && value.length < rules.minLength) {
            isValid = false;
            errorMessage = rules.message;
        }
        // Check pattern
        else if (rules.pattern && !rules.pattern.test(value)) {
            isValid = false;
            errorMessage = rules.message;
        }
        
        // Update field appearance and error message
        if (isValid) {
            field.classList.remove('error');
            errorElement.textContent = '';
            errorElement.classList.remove('visible');
        } else {
            field.classList.add('error');
            errorElement.textContent = errorMessage;
            errorElement.classList.add('visible');
        }
        
        return isValid;
    }
    
    // Validate all fields
    function validateForm() {
        const isNameValid = validateField(nameField, validationRules.name, nameError);
        const isEmailValid = validateField(emailField, validationRules.email, emailError);
        const isSubjectValid = validateField(subjectField, validationRules.subject, subjectError);
        const isMessageValid = validateField(messageField, validationRules.message, messageError);
        
        return isNameValid && isEmailValid && isSubjectValid && isMessageValid;
    }
    
    // Show form message
    function showFormMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = 'form-message ' + type;
        formMessage.classList.add('visible');
        
        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    // Hide form message
    function hideFormMessage() {
        formMessage.classList.remove('visible');
    }
    
    // Simulate form submission
    function simulateFormSubmission(formData) {
        return new Promise((resolve, reject) => {
            // Simulate network delay
            setTimeout(() => {
                // Simulate random success/failure (90% success rate)
                if (Math.random() < 0.9) {
                    resolve({
                        success: true,
                        message: 'Thank you for your message! I\'ll get back to you soon.'
                    });
                } else {
                    reject({
                        success: false,
                        message: 'Something went wrong. Please try again later.'
                    });
                }
            }, 1500);
        });
    }
    
    // Reset form
    function resetForm() {
        contactForm.reset();
        nameField.classList.remove('error');
        emailField.classList.remove('error');
        subjectField.classList.remove('error');
        messageField.classList.remove('error');
        nameError.classList.remove('visible');
        emailError.classList.remove('visible');
        subjectError.classList.remove('visible');
        messageError.classList.remove('visible');
    }
    
    // Add input event listeners for real-time validation
    nameField.addEventListener('input', () => {
        if (nameField.value.trim()) {
            validateField(nameField, validationRules.name, nameError);
        }
    });
    
    emailField.addEventListener('input', () => {
        if (emailField.value.trim()) {
            validateField(emailField, validationRules.email, emailError);
        }
    });
    
    subjectField.addEventListener('input', () => {
        if (subjectField.value.trim()) {
            validateField(subjectField, validationRules.subject, subjectError);
        }
    });
    
    messageField.addEventListener('input', () => {
        if (messageField.value.trim()) {
            validateField(messageField, validationRules.message, messageError);
        }
    });
    
    // Add blur event listeners for validation when leaving field
    [nameField, emailField, subjectField, messageField].forEach(field => {
        field.addEventListener('blur', () => {
            const rules = validationRules[field.id];
            const errorElement = document.getElementById(field.id + '-error');
            if (field.value.trim()) {
                validateField(field, rules, errorElement);
            }
        });
    });
    
    // Handle form submission
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Hide any existing messages
        hideFormMessage();
        
        // Validate form
        if (!validateForm()) {
            showFormMessage('Please fix the errors above and try again.', 'error');
            return;
        }
        
        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        try {
            // Collect form data
            const formData = {
                name: nameField.value.trim(),
                email: emailField.value.trim(),
                subject: subjectField.value.trim(),
                message: messageField.value.trim()
            };
            
            // Simulate form submission
            const result = await simulateFormSubmission(formData);
            
            // Show success message
            showFormMessage(result.message, 'success');
            
            // Reset form
            resetForm();
        } catch (error) {
            // Show error message
            showFormMessage(error.message, 'error');
        } finally {
            // Remove loading state
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    });
}