# Dual-Project Repository

This repository contains two distinct projects:

1. **Portfolio Website** - A modern, responsive portfolio website for a Python developer
2. **SES Data Engineering Project** - A comprehensive data engineering and ETL project for Brazilian health statistics

## 📁 Project Structure

```
repository/
├── README.md                    # This file - Main entry point
├── README-PORTFOLIO.md         # Portfolio website documentation
├── README-SES.md               # SES data engineering project documentation
├── index.html                  # Portfolio website main page
├── css/                        # Portfolio website styles
├── js/                         # Portfolio website scripts
├── docker-compose.yml          # SES project Docker configuration
├── init-scripts/               # SES project initialization scripts
├── csv_data/                   # SES project data processing scripts
└── reports/                    # SES project generated reports
```

## 🌐 Portfolio Website

A modern, responsive portfolio website built with HTML5, CSS3, and JavaScript, featuring:

- Responsive design for all devices
- Dark mode toggle
- Interactive elements and animations
- Project showcase with filtering
- Skills visualization
- Contact form with validation
- Performance optimization
- Accessibility compliance (WCAG 2.1 AA)
- SEO optimization

**Live Website**: [https://fabioeloi.github.io/portfolio-website/](https://fabioeloi.github.io/portfolio-website/)

### Documentation

For detailed information about the portfolio website, see [README-PORTFOLIO.md](README-PORTFOLIO.md).

### Quick Start

1. Open `index.html` in your web browser, or
2. Use a local development server:
   ```bash
   python -m http.server 8000
   ```
3. Navigate to `http://localhost:8000`

## 🗄 SES Data Engineering Project

A comprehensive data engineering and ETL project for the Brazilian Health Statistics System (SES) that:

- Processes 40+ CSV files with different structures and encodings
- Ingests data into a structured PostgreSQL database
- Handles data validation, cleaning, and transformation
- Provides Docker containerization for reproducible environments
- Includes robust error handling and logging

### Key Features

- Automated data ingestion from multiple CSV sources
- Data validation and cleaning
- PostgreSQL integration
- Docker containerization
- Memory optimization for large files
- Error handling and recovery mechanisms

### Documentation

For detailed information about the SES data engineering project, see [README-SES.md](README-SES.md).

### Quick Start

1. Ensure Docker and Docker Compose are installed
2. Run the setup script:
   ```bash
   chmod +x start.sh
   ./start.sh
   ```
3. Monitor progress:
   ```bash
   docker-compose logs -f
   ```

## 🔄 Repository Management

This repository uses a dual-project structure with separate documentation to maintain clarity between the two distinct projects:

- **Portfolio Website**: Pushed to the portfolio-website repository
- **SES Project**: Documentation maintained locally for reference

### File Organization

- Portfolio website files are tracked in Git and pushed to the repository
- SES project files are ignored via `.gitignore` but documented for local reference
- README files provide clear separation and navigation between projects

## 🛠 Technology Stack

### Portfolio Website
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Tools**: Git, GitHub, VS Code
- **Performance**: Lazy loading, asset optimization, caching

### SES Data Engineering Project
- **Backend**: Python 3.11, PostgreSQL 15
- **Processing**: pandas, psycopg2
- **Containerization**: Docker, Docker Compose
- **Monitoring**: pgAdmin 4

## 📝 Development Notes

### Portfolio Website Development
The portfolio website was created using the Kilo Code process with Z-ai GLM 4.5 LLM, demonstrating AI-assisted development capabilities.

### SES Project Development
The SES project implements a comprehensive ETL pipeline for Brazilian health statistics data, with robust error handling and multiple processing modes for different scenarios.

## 🤝 Contributing

Contributions are welcome for both projects. Please refer to the respective README files for project-specific contribution guidelines:

- [Portfolio Website Contribution Guidelines](README-PORTFOLIO.md#contributing)
- [SES Project Development Notes](README-SES.md#development-notes)

## 📄 License

Both projects are licensed under the MIT License. See the respective README files for detailed license information.

## 📞 Contact

For questions or collaboration opportunities:

- **Email**: your.email@example.com
- **GitHub**: [github.com/yourusername](https://github.com/yourusername)
- **LinkedIn**: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)

---

*This README serves as the main entry point for the repository. For detailed project documentation, please refer to the respective README files:*
- *[README-PORTFOLIO.md](README-PORTFOLIO.md) for the portfolio website*
- *[README-SES.md](README-SES.md) for the SES data engineering project*
