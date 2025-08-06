# Food Website Project - Roles and Responsibilities

## Project Overview

This document defines the roles, responsibilities, and cursor rules for developing a comprehensive food website. The project involves multiple stakeholders with distinct responsibilities to ensure successful delivery.

## 1. Project Manager (PM)

### Responsibilities

- **Project Planning & Coordination**: Define project scope, timeline, and milestones
- **Stakeholder Communication**: Liaise between business stakeholders and development team
- **Resource Management**: Allocate team members and manage project budget
- **Risk Management**: Identify and mitigate project risks
- **Quality Assurance**: Ensure deliverables meet business requirements
- **Progress Tracking**: Monitor project status and report to stakeholders

### Cursor Rules

```
# Project Manager Cursor Rules

## File Patterns
- Focus on: *.md, *.txt, *.json, *.yaml, *.yml
- Avoid: *.js, *.ts, *.css, *.html (unless reviewing documentation)

## Code Review Guidelines
- Review project documentation for clarity and completeness
- Ensure requirements are properly documented
- Verify that project structure follows established conventions
- Check that README files are comprehensive and up-to-date

## Naming Conventions
- Use descriptive names for project files and directories
- Follow kebab-case for file names: project-plan.md, requirements.md
- Use clear, professional language in documentation

## Best Practices
- Always include project context in documentation
- Maintain consistent formatting across all project documents
- Include version numbers and dates in important documents
- Create clear task breakdowns and acceptance criteria
```

## 2. Product Owner (PO)

### Responsibilities

- **Requirements Definition**: Define user stories and acceptance criteria
- **Feature Prioritization**: Maintain and prioritize product backlog
- **User Experience**: Ensure features meet user needs and business goals
- **Stakeholder Alignment**: Align product vision with business objectives
- **Market Research**: Understand user needs and competitive landscape
- **Release Planning**: Plan feature releases and iterations

### Cursor Rules

```
# Product Owner Cursor Rules

## File Patterns
- Focus on: *.md, *.json, *.yaml, *.yml, *.txt
- Avoid: Implementation files unless reviewing requirements

## Code Review Guidelines
- Ensure user stories are clear and actionable
- Verify acceptance criteria are testable
- Check that requirements align with business objectives
- Review feature specifications for completeness

## Naming Conventions
- Use descriptive names: user-stories.md, requirements.md
- Follow consistent formatting for user stories
- Use clear, user-focused language

## Best Practices
- Write user stories from user perspective
- Include acceptance criteria for each story
- Maintain traceability between requirements and features
- Document business rules and constraints clearly
```

## 3. UX/UI Designer

### Responsibilities

- **User Research**: Conduct user interviews, surveys, and usability testing
- **Information Architecture**: Design site structure and navigation
- **Wireframing & Prototyping**: Create low and high-fidelity prototypes
- **Visual Design**: Design UI components, color schemes, and typography
- **Design System**: Create and maintain design system and component library
- **Accessibility**: Ensure designs meet accessibility standards

### Cursor Rules

```
# UX/UI Designer Cursor Rules

## File Patterns
- Focus on: *.fig, *.sketch, *.xd, *.ai, *.psd, *.svg, *.png, *.jpg, *.css, *.scss
- Avoid: Backend implementation files

## Code Review Guidelines
- Ensure CSS follows design system guidelines
- Verify responsive design implementation
- Check accessibility compliance in CSS
- Review component consistency across pages

## Naming Conventions
- Use semantic class names: .header, .navigation, .button-primary
- Follow BEM methodology for CSS classes
- Use descriptive names for design assets
- Organize files by component or page

## Best Practices
- Maintain consistent spacing and typography
- Use CSS custom properties for theming
- Ensure mobile-first responsive design
- Follow accessibility guidelines (WCAG 2.1)
- Document design decisions and rationale
```

## 4. Frontend Developer

### Responsibilities

- **Component Development**: Build reusable UI components
- **Page Implementation**: Create responsive web pages
- **State Management**: Implement client-side state management
- **API Integration**: Connect frontend with backend APIs
- **Performance Optimization**: Optimize loading times and user experience
- **Cross-browser Compatibility**: Ensure functionality across browsers

### Cursor Rules

```
# Frontend Developer Cursor Rules

## File Patterns
- Focus on: *.js, *.jsx, *.ts, *.tsx, *.html, *.css, *.scss, *.json
- Avoid: Backend implementation files unless integrating APIs

## Code Review Guidelines
- Ensure components are reusable and well-documented
- Verify responsive design implementation
- Check for accessibility compliance
- Review performance optimizations
- Ensure proper error handling

## Naming Conventions
- Use PascalCase for React components: UserProfile, NavigationBar
- Use camelCase for functions and variables: getUserData, handleSubmit
- Use kebab-case for CSS classes: .user-profile, .nav-bar
- Use descriptive names for files and folders

## Best Practices
- Write clean, readable, and maintainable code
- Use TypeScript for type safety
- Implement proper error boundaries
- Follow React best practices and hooks
- Ensure proper SEO implementation
- Write unit tests for components
```

## 5. Backend Developer

### Responsibilities

- **API Development**: Design and implement RESTful APIs
- **Database Design**: Design and optimize database schema
- **Authentication & Authorization**: Implement security measures
- **Business Logic**: Implement core application logic
- **Data Validation**: Ensure data integrity and validation
- **Performance Optimization**: Optimize database queries and API responses

### Cursor Rules

```
# Backend Developer Cursor Rules

## File Patterns
- Focus on: *.js, *.ts, *.json, *.sql, *.yaml, *.yml
- Avoid: Frontend files unless integrating with APIs

## Code Review Guidelines
- Ensure proper error handling and logging
- Verify API security and authentication
- Check database query optimization
- Review input validation and sanitization
- Ensure proper API documentation

## Naming Conventions
- Use camelCase for functions and variables: getUserById, createOrder
- Use PascalCase for classes: UserService, OrderController
- Use snake_case for database tables and columns
- Use descriptive names for API endpoints

## Best Practices
- Write clean, testable, and maintainable code
- Implement proper logging and monitoring
- Use environment variables for configuration
- Follow RESTful API design principles
- Write comprehensive unit and integration tests
- Document API endpoints and data models
```

## 6. DevOps Engineer

### Responsibilities

- **Infrastructure Management**: Set up and maintain cloud infrastructure
- **CI/CD Pipeline**: Implement automated build and deployment processes
- **Monitoring & Logging**: Set up application monitoring and alerting
- **Security**: Implement security best practices and compliance
- **Performance Optimization**: Optimize infrastructure for performance
- **Disaster Recovery**: Implement backup and recovery procedures

### Cursor Rules

```
# DevOps Engineer Cursor Rules

## File Patterns
- Focus on: *.yaml, *.yml, *.json, *.sh, *.tf, *.dockerfile, *.md
- Avoid: Application code unless configuring deployment

## Code Review Guidelines
- Ensure infrastructure as code follows best practices
- Verify security configurations
- Check for proper resource allocation
- Review monitoring and alerting setup
- Ensure disaster recovery procedures

## Naming Conventions
- Use kebab-case for infrastructure resources: web-server, database-cluster
- Use descriptive names for services and components
- Follow consistent tagging conventions
- Use clear, descriptive names for scripts

## Best Practices
- Use infrastructure as code (IaC) principles
- Implement proper security measures
- Set up comprehensive monitoring
- Follow the principle of least privilege
- Document all infrastructure decisions
- Implement automated testing for infrastructure
```

## 7. QA Engineer

### Responsibilities

- **Test Planning**: Create comprehensive test plans and strategies
- **Manual Testing**: Perform exploratory and user acceptance testing
- **Automated Testing**: Develop and maintain automated test suites
- **Bug Reporting**: Document and track defects
- **Quality Metrics**: Monitor and report on quality metrics
- **Regression Testing**: Ensure new features don't break existing functionality

### Cursor Rules

```
# QA Engineer Cursor Rules

## File Patterns
- Focus on: *.js, *.ts, *.json, *.md, *.yaml, *.yml
- Avoid: Production code unless writing tests

## Code Review Guidelines
- Ensure test coverage is comprehensive
- Verify test data is properly managed
- Check for proper test isolation
- Review test naming and organization
- Ensure tests are maintainable and readable

## Naming Conventions
- Use descriptive test names: shouldDisplayUserProfileWhenLoggedIn
- Use clear, descriptive names for test files
- Follow consistent test structure
- Use meaningful test data names

## Best Practices
- Write clear, maintainable test code
- Use proper test isolation and cleanup
- Implement comprehensive test coverage
- Follow testing best practices (AAA pattern)
- Document test scenarios and edge cases
- Maintain test data and fixtures properly
```

## 8. Content Manager

### Responsibilities

- **Content Strategy**: Develop content strategy and editorial calendar
- **Content Creation**: Write and edit website content
- **SEO Optimization**: Optimize content for search engines
- **Content Management**: Manage content updates and publishing
- **Brand Voice**: Maintain consistent brand voice and messaging
- **Content Analytics**: Monitor content performance and engagement

### Cursor Rules

```
# Content Manager Cursor Rules

## File Patterns
- Focus on: *.md, *.txt, *.json, *.yaml, *.yml
- Avoid: Code files unless managing content structure

## Code Review Guidelines
- Ensure content is clear and engaging
- Verify SEO optimization
- Check for brand voice consistency
- Review content structure and organization
- Ensure proper metadata and descriptions

## Naming Conventions
- Use descriptive names for content files
- Follow consistent content structure
- Use clear, SEO-friendly URLs
- Organize content by categories and topics

## Best Practices
- Write clear, engaging, and accessible content
- Optimize content for search engines
- Maintain consistent brand voice
- Use proper heading structure
- Include relevant keywords naturally
- Regular content updates and maintenance
```

## 9. Data Analyst

### Responsibilities

- **Data Collection**: Set up and maintain data collection systems
- **Data Analysis**: Analyze user behavior and business metrics
- **Reporting**: Create regular reports and dashboards
- **A/B Testing**: Design and analyze A/B tests
- **Performance Monitoring**: Monitor key performance indicators
- **Insights Generation**: Provide actionable insights to stakeholders

### Cursor Rules

```
# Data Analyst Cursor Rules

## File Patterns
- Focus on: *.sql, *.py, *.r, *.json, *.csv, *.md, *.ipynb
- Avoid: Application code unless implementing analytics

## Code Review Guidelines
- Ensure data queries are optimized
- Verify data accuracy and integrity
- Check for proper data handling
- Review analysis methodology
- Ensure reproducible results

## Naming Conventions
- Use descriptive names for queries and analyses
- Follow consistent naming for metrics and dimensions
- Use clear, descriptive names for reports
- Organize analyses by topic or business area

## Best Practices
- Write clear, documented analysis code
- Ensure data privacy and security
- Use version control for analysis code
- Document data sources and transformations
- Create reproducible analyses
- Validate results and assumptions
```

## 10. Security Specialist

### Responsibilities

- **Security Assessment**: Conduct security audits and assessments
- **Vulnerability Management**: Identify and remediate security vulnerabilities
- **Security Monitoring**: Monitor for security threats and incidents
- **Compliance**: Ensure compliance with security standards and regulations
- **Security Training**: Provide security awareness training
- **Incident Response**: Lead security incident response efforts

### Cursor Rules

```
# Security Specialist Cursor Rules

## File Patterns
- Focus on: *.yaml, *.yml, *.json, *.md, *.sh, *.conf
- Avoid: Application code unless reviewing security

## Code Review Guidelines
- Ensure proper authentication and authorization
- Verify input validation and sanitization
- Check for secure configuration
- Review encryption and data protection
- Ensure compliance with security standards

## Naming Conventions
- Use descriptive names for security configurations
- Follow consistent naming for security policies
- Use clear, descriptive names for security tools
- Organize security documentation by category

## Best Practices
- Follow security best practices and standards
- Implement defense in depth
- Regular security assessments and updates
- Document security policies and procedures
- Maintain security monitoring and alerting
- Ensure proper access controls and permissions
```

## Collaboration Guidelines

### Cross-Role Communication

- Regular stand-ups and status updates
- Clear documentation of decisions and changes
- Use of project management tools for task tracking
- Regular code reviews across roles
- Shared understanding of project goals and constraints

### Quality Assurance

- Each role is responsible for quality within their domain
- Cross-functional testing and validation
- Regular feedback loops between roles
- Continuous improvement processes
- Documentation of lessons learned

### Version Control

- All code and documentation should be version controlled
- Clear commit messages and pull request descriptions
- Branch naming conventions for different roles
- Regular code reviews and approvals
- Proper merge strategies and conflict resolution

This role structure ensures comprehensive coverage of all aspects of the food website project while maintaining clear boundaries and responsibilities for each team member.
