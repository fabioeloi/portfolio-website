# Python Developer Portfolio Website

![Portfolio Website](https://img.shields.io/badge/Status-Active-brightgreen) ![License](https://img.shields.io/badge/License-MIT-blue) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

A modern, responsive portfolio website for a Python developer, showcasing projects, skills, and professional experience. Built with HTML5, CSS3, and JavaScript, featuring a clean design with Python-themed aesthetics and full accessibility compliance.

## 🌐 Live Website

[https://fabioeloi.github.io/portfolio-website/](https://fabioeloi.github.io/portfolio-website/)

## 📸 Screenshot

![Portfolio Website Screenshot](https://via.placeholder.com/1200x800?text=Portfolio+Website+Screenshot)

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Kilo Code Process](#kilo-code-process)
- [Project Structure](#project-structure)
- [Installation and Setup](#installation-and-setup)
- [Customization Guide](#customization-guide)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Contact](#contact)

## 📖 About

This portfolio website is designed to showcase the skills, projects, and experience of a Python developer. The website features a modern, clean design with Python-themed aesthetics, responsive layout for all devices, and comprehensive sections for projects, skills, experience, and contact information.

The project was created using the Kilo Code process with Z-ai GLM 4.5 LLM, demonstrating the capabilities of AI-assisted development in creating professional, high-quality web applications.

### Project Goals

- Create a visually appealing portfolio that highlights the developer's skills and projects
- Implement responsive design that works seamlessly across all device sizes
- Ensure accessibility compliance with WCAG 2.1 AA standards
- Optimize for performance with fast loading times and smooth interactions
- Include sections for projects, skills, experience, and contact information

## ✨ Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablets, desktops, and large desktops
- **Dark Mode Toggle**: Option for users to switch between light and dark themes
- **Interactive Elements**: Smooth animations, hover effects, and micro-interactions
- **Project Showcase**: Filtering system and detailed project views
- **Skills Visualization**: Progress bars and categorized skill displays
- **Contact Form**: Validated form with proper error handling
- **Performance Optimization**: Lazy loading, optimized assets, and efficient caching
- **Accessibility Compliance**: WCAG 2.1 AA compliant design
- **SEO Optimized**: Meta tags, semantic HTML, and structured data

## 🛠 Technology Stack

### Frontend

- **HTML5**: Semantic markup for structure and accessibility
- **CSS3**: Modern styling with CSS variables, flexbox, and grid
- **JavaScript (ES6+)**: Interactive functionality and dynamic content
- **Font Awesome**: Icon library for visual elements
- **Google Fonts**: Inter and JetBrains Mono for typography

### Development Tools

- **Git**: Version control
- **GitHub**: Repository hosting and deployment
- **VS Code**: Code editor
- **Minification**: Optimized CSS and JavaScript files

### Performance & Optimization

- **Lazy Loading**: Images and content loaded as needed
- **Asset Optimization**: Minified CSS and JavaScript
- **Responsive Images**: Optimized for different screen sizes
- **Caching Strategy**: Efficient browser caching

## 🤖 Kilo Code Process

This portfolio website was created using the Kilo Code process with Z-ai GLM 4.5 LLM, an advanced AI-powered development assistant that orchestrates complex software development projects.

### What is Kilo Code?

Kilo Code is an AI development system that leverages specialized modes for different aspects of the development process:

- **Multi-Modal Task Management**: Seamlessly switching between different specialized modes (Architect, Code, Debug, etc.)
- **Intelligent Planning**: Creating comprehensive project plans with detailed breakdowns
- **Code Generation**: Producing high-quality, well-structured code
- **Documentation**: Generating detailed documentation throughout the process
- **Quality Assurance**: Implementing best practices and optimization techniques

### Development Process

The project was developed through a systematic process:

1. **Planning Phase**: Comprehensive research and planning using Architect mode
2. **Design Phase**: Creating design systems, wireframes, and user experience specifications
3. **Implementation Phase**: Building the website with HTML, CSS, and JavaScript
4. **Optimization Phase**: Performance tuning, accessibility testing, and cross-browser compatibility
5. **Documentation Phase**: Creating comprehensive documentation for the project

### Benefits of Kilo Code

- **Rapid Development**: The project was completed in a fraction of traditional development time
- **Comprehensive Planning**: Detailed planning prevented rework and ensured smooth execution
- **Automated Documentation**: Documentation was generated automatically throughout the process
- **Consistent Quality**: Maintained high quality standards across all aspects of the project

For more details about the Kilo Code process used in this project, see the [KILO_CODE_PROCESS.md](KILO_CODE_PROCESS.md) file.

## 📁 Project Structure

```
portfolio-website/
├── index.html              # Main HTML file
├── css/
│   ├── styles.css         # Main stylesheet
│   └── styles.min.css     # Minified stylesheet
├── js/
│   ├── script.js          # Main JavaScript file
│   └── script.min.js      # Minified JavaScript file
├── images/                # Images and assets
├── docs/                  # Documentation
│   ├── KILO_CODE_PROCESS.md
│   └── comprehensive_portfolio_plan.md
├── .gitignore             # Git ignore file
└── README.md              # This file
```

### File Descriptions

- **[`index.html`](index.html)**: The main HTML file containing the structure and content of the portfolio website. Includes semantic HTML5 markup, meta tags for SEO, and all website sections.

- **[`css/styles.css`](css/styles.css)**: The main stylesheet with all visual styling, responsive design, dark mode implementation, and animations.

- **[`css/styles.min.css`](css/styles.min.css)**: Minified version of the main stylesheet for production deployment.

- **[`js/script.js`](js/script.js)**: JavaScript file containing all interactive functionality, including mobile menu toggle, dark mode switch, smooth scrolling, and form validation.

- **[`js/script.min.js`](js/script.min.js)**: Minified version of the JavaScript file for production deployment.

- **[`KILO_CODE_PROCESS.md`](KILO_CODE_PROCESS.md)**: Detailed documentation of the Kilo Code process used to create the website.

- **[`comprehensive_portfolio_plan.md`](comprehensive_portfolio_plan.md)**: Comprehensive project plan covering website structure, design system, and implementation guidelines.

## 🚀 Installation and Setup

### Prerequisites

- A web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, etc.) - for customization
- Git (for version control and deployment)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/fabioeloi/portfolio-website.git
   cd portfolio-website
   ```

2. **Open the project**
   - Open `index.html` in your web browser to view the website
   - Or use a local development server:
     ```bash
     # Using Python
     python -m http.server 8000
     # Or using Node.js
     npx http-server
     ```
   - Navigate to `http://localhost:8000` in your browser

### Deployment to GitHub Pages

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings"
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Choose the main branch and `/ (root)` directory
   - Click "Save"

3. **Access your site**
   - Your site will be available at `https://username.github.io/portfolio-website`

## 🎨 Customization Guide

### Personal Information

1. **Update Personal Details**
   - Open `index.html`
   - Replace "Your Name" with your actual name throughout the file
   - Update the meta tags with your information:
     ```html
     <meta name="author" content="Your Name">
     <meta property="og:url" content="https://yourwebsite.com">
     ```

2. **Update Hero Section**
   - Modify the hero title and subtitle:
     ```html
     <h1 class="hero-title">Your Professional Title</h1>
     <p class="hero-subtitle">Your professional tagline or mission statement</p>
     ```

3. **Update About Section**
   - Personalize the introduction and professional summary
   - Update education background with your actual education
   - Modify personal interests to reflect your own

### Projects Section

1. **Add Your Projects**
   - Replace the placeholder project cards with your actual projects
   - Update project titles, descriptions, and technology stacks
   - Replace demo and code links with your actual project links

2. **Project Categories**
   - Modify the filter buttons to match your project categories:
     ```html
     <button class="filter-btn" data-filter="your-category">Your Category</button>
     ```

### Skills Section

1. **Update Your Skills**
   - Modify the skill categories to match your expertise
   - Update skill names and proficiency levels
   - Adjust the progress bar widths to reflect your actual skill levels

### Contact Section

1. **Update Contact Information**
   - Replace placeholder email and social media links
   - Update the form submission handling if using a backend service

### Styling Customization

1. **Color Scheme**
   - Open `css/styles.css`
   - Modify the CSS variables in the `:root` selector:
     ```css
     :root {
         --primary-blue: #3776AB;  /* Change to your preferred primary color */
         --secondary-blue: #4B8BBE;  /* Change to your preferred secondary color */
         /* ... other color variables */
     }
     ```

2. **Typography**
   - Update font families in the CSS variables
   - Adjust font sizes and weights as needed

3. **Layout**
   - Modify container widths, spacing, and breakpoints
   - Adjust component layouts and grid systems

### Adding New Sections

1. **HTML Structure**
   - Add a new section in `index.html` with appropriate semantic HTML
   - Include the section in the navigation menu

2. **CSS Styling**
   - Add styles for the new section in `css/styles.css`
   - Ensure responsive design for all breakpoints

3. **JavaScript Functionality**
   - Add any interactive functionality in `js/script.js`
   - Update navigation and smooth scrolling if needed

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements or want to add features, please follow these steps:

1. **Fork the repository**
   - Click the "Fork" button at the top right of the repository page

2. **Clone your fork**
   ```bash
   git clone https://github.com/your-username/portfolio-website.git
   cd portfolio-website
   ```

3. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes**
   - Edit the necessary files
   - Test your changes thoroughly
   - Ensure the website remains responsive and accessible

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add your feature description"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch and create the pull request
   - Provide a clear description of your changes

### Development Guidelines

- Follow the existing code style and structure
- Ensure all changes are responsive across all breakpoints
- Test changes in multiple browsers (Chrome, Firefox, Safari, Edge)
- Maintain accessibility compliance (WCAG 2.1 AA)
- Keep performance in mind when adding new features

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### MIT License Summary

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## 🙏 Acknowledgments

This project was made possible by:

- **Kilo Code with Z-ai GLM 4.5 LLM**: For the AI-assisted development process that made this project possible
- **Python Software Foundation**: For the Python branding and color scheme inspiration
- **Font Awesome**: For the comprehensive icon library used throughout the website
- **Google Fonts**: For the Inter and JetBrains Mono typefaces
- **Open Source Community**: For the tools, libraries, and resources that made this project possible

### Special Thanks

- The developers and maintainers of the web technologies used in this project
- The design community for inspiration and best practices
- The accessibility community for guidelines and tools to ensure inclusive design

## 📞 Contact

For questions, suggestions, or collaboration opportunities:

- **Email**: your.email@example.com
- **GitHub**: [github.com/yourusername](https://github.com/yourusername)
- **LinkedIn**: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- **Twitter**: [@yourusername](https://twitter.com/yourusername)

Feel free to reach out if you have any questions about the project or would like to discuss potential opportunities!