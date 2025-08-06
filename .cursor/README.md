# Cursor Rules Structure

This directory contains role-specific cursor rules for the Restaurant Showcase & Ordering Portal Project. Each file contains guidelines, best practices, and standards for a specific role in the development team.

## File Structure

```
.cursor/
├── README.md                           # This file
├── project-overview.mdc                # Comprehensive project documentation
├── architecture.mdc                    # Technical architecture details
├── main.cursorrules                    # Main cursor rules with general guidelines
├── project-manager.cursorrules         # PM role guidelines
├── product-owner.cursorrules           # PO role guidelines
├── ux-ui-designer.cursorrules          # UX/UI Designer role guidelines
├── frontend-developer.cursorrules      # Frontend Developer role guidelines
├── backend-developer.cursorrules       # Backend Developer role guidelines
├── devops-engineer.cursorrules         # DevOps Engineer role guidelines
├── qa-engineer.cursorrules             # QA Engineer role guidelines
├── content-manager.cursorrules         # Content Manager role guidelines
├── data-analyst.cursorrules            # Data Analyst role guidelines
└── security-specialist.cursorrules     # Security Specialist role guidelines
```

## File Types and Their Purposes

### .cursorrules Files

- **Purpose**: Role-specific coding guidelines and development practices
- **Usage**: Automatically applied by Cursor's AI when providing code suggestions
- **Focus**: Coding standards, file patterns, naming conventions, and best practices
- **Best For**: Development guidelines and role-specific rules

### .mdc Files

- **Purpose**: Comprehensive project documentation with AI assistance
- **Usage**: AI-assisted documentation writing and maintenance
- **Focus**: Project overview, technical architecture, and detailed explanations
- **Best For**: Project documentation, architecture details, and comprehensive guides

## How to Use

### For Individual Team Members

1. **Identify your role** from the list above
2. **Use the corresponding cursor rules file** for your specific tasks
3. **Follow the guidelines** in your role-specific file
4. **Reference the main.cursorrules** for general project guidelines

### For Cross-Role Tasks

1. **Start with main.cursorrules** for general guidelines
2. **Reference relevant role-specific files** based on the task requirements
3. **Consider multiple perspectives** when working across roles
4. **Follow collaboration guidelines** in the main file

### For Code Reviews

1. **Apply role-specific guidelines** for the code being reviewed
2. **Consider cross-role implications** when necessary
3. **Use the main guidelines** for general standards
4. **Provide role-appropriate feedback**

## Role Descriptions

### Project Manager (PM)

- **Focus**: Project coordination, stakeholder communication, timeline management
- **Key Files**: Documentation, project plans, requirements
- **Main Tools**: Markdown, JSON, YAML

### Product Owner (PO)

- **Focus**: Requirements definition, user stories, product vision
- **Key Files**: User stories, requirements, feature specifications
- **Main Tools**: Markdown, JSON, YAML

### UX/UI Designer

- **Focus**: User experience, visual design, accessibility
- **Key Files**: Design files, CSS, prototypes
- **Main Tools**: Figma, Sketch, CSS, SCSS

### Frontend Developer

- **Focus**: React components, user interface, client-side logic
- **Key Files**: JavaScript, TypeScript, React components
- **Main Tools**: React, TypeScript, CSS, HTML

### Backend Developer

- **Focus**: APIs, database, server-side logic
- **Key Files**: Server code, database schemas, API documentation
- **Main Tools**: Node.js, TypeScript, SQL, APIs

### DevOps Engineer

- **Focus**: Infrastructure, deployment, monitoring
- **Key Files**: Configuration files, deployment scripts
- **Main Tools**: YAML, Terraform, Docker, Shell scripts

### QA Engineer

- **Focus**: Testing, quality assurance, bug tracking
- **Key Files**: Test files, test plans, bug reports
- **Main Tools**: Testing frameworks, documentation

### Content Manager

- **Focus**: Content strategy, SEO, brand voice
- **Key Files**: Content files, SEO metadata
- **Main Tools**: Markdown, content management systems

### Data Analyst

- **Focus**: Analytics, reporting, data insights
- **Key Files**: Analysis scripts, reports, data queries
- **Main Tools**: SQL, Python, R, Jupyter notebooks

### Security Specialist

- **Focus**: Security, compliance, vulnerability management
- **Key Files**: Security configurations, policies
- **Main Tools**: Security tools, configuration files

## Best Practices

### When Working on Tasks

1. **Start with your role-specific file** for detailed guidelines
2. **Reference the main file** for general project standards
3. **Consider other roles** when your work impacts them
4. **Document decisions** that affect multiple roles

### When Collaborating

1. **Understand other roles' perspectives** by reading their guidelines
2. **Communicate clearly** about cross-role dependencies
3. **Follow the collaboration guidelines** in the main file
4. **Maintain consistency** across all role implementations

### When Reviewing Code

1. **Apply your role's guidelines** first
2. **Consider the author's role** and their specific guidelines
3. **Check for cross-role implications**
4. **Provide constructive, role-appropriate feedback**

## Maintenance

### Updating Rules

1. **Role-specific changes**: Update the appropriate role file
2. **General changes**: Update main.cursorrules
3. **Cross-role changes**: Update both main and relevant role files
4. **Document changes** in commit messages

### Adding New Roles

1. **Create a new .cursorrules file** for the role
2. **Follow the established format** and structure
3. **Update this README** with the new role
4. **Update main.cursorrules** to reference the new role

### Version Control

- All cursor rules files should be version controlled
- Changes should be reviewed by the team
- Maintain consistency across all role files
- Regular reviews and updates as needed

This modular structure ensures that each team member can focus on their specific domain while maintaining consistency and collaboration across the entire project.
