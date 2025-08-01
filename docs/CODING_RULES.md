# Coding Rules & Best Practices Guide

## Overview

The Unified Agent System includes a comprehensive coding rules and best practices system that ensures consistent code quality across all development agents. All rules are stored in Basic Memory MCP and automatically applied during code generation and reviews.

## 📋 Quick Start

### Adding New Rules
```bash
# Language-specific rules
"Add rule python:S1500 - Use context managers for file operations"
"Add rule typescript:S5000 - Use strict type checking"
"Add rule go:S2000 - Use descriptive error messages"

# General rules
"Add rule SEC004 - Use HTTPS for all external API calls"
"Add rule PERF006 - Implement database connection pooling"
"Add rule MAINT001 - Keep functions under 20 lines"
```

### Updating Existing Rules
```bash
# Update content
"Update rule python:S1244 to include Django DecimalField examples"
"Add more examples to rule typescript:S3776 for React components"

# Update metadata
"Change severity of rule PERF001 from High to Critical"
"Add integration notes for @rails-expert to rule ruby:S1001"
```

### Listing and Searching Rules
```bash
# List all rules
"List rules"

# Search by category
"Show me all Python rules"
"List security rules"
"Find rules related to database performance"
```

## 🔧 Available Rules

### 🔒 Security Rules (SEC###)

#### SEC001 - Never Hard-Code Secrets
- **Severity**: Critical
- **Description**: Never embed API keys, passwords, tokens, or other sensitive data directly in source code
- **Languages**: All
- **Integration**: All development agents

#### SEC002 - SQL Injection Prevention
- **Severity**: Critical
- **Description**: Use parameterized queries or ORM methods to prevent SQL injection attacks
- **Languages**: All (database-related code)
- **Integration**: Database and backend specialists

#### SEC003 - Input Sanitization Required
- **Severity**: High
- **Description**: All user input must be sanitized before processing or storage
- **Languages**: All
- **Integration**: Backend and API specialists

### ⚡ Performance Rules (PERF###)

#### PERF001 - Avoid N+1 Query Problems
- **Severity**: High
- **Description**: Prevent executing multiple queries in loops when single query with joins would suffice
- **Languages**: All (database-related code)
- **Integration**: ORM specialists, database architects

#### PERF002 - Implement Caching Strategies
- **Severity**: Medium
- **Description**: Cache expensive computations and frequently accessed data
- **Languages**: All
- **Integration**: Backend and infrastructure specialists

#### PERF003 - Optimize Database Queries
- **Severity**: High
- **Description**: Use appropriate indexes, limit result sets, and optimize query structure
- **Languages**: All (database-related code)
- **Integration**: Database administrators, backend specialists

#### PERF004 - Use Connection Pooling
- **Severity**: Medium
- **Description**: Implement database connection pooling for scalable applications
- **Languages**: All (database-related code)
- **Integration**: Backend framework specialists

#### PERF005 - Minimize API Calls
- **Severity**: Medium
- **Description**: Batch API requests and cache responses when possible
- **Languages**: All
- **Integration**: API architects, frontend specialists

## 🐍 Python Rules (python:S####)

### python:S1244 - Floating Point Comparison
- **Severity**: High
- **Description**: Use tolerance-based comparison or Decimal class instead of direct equality checks
- **Integration**: @django-backend-expert, @python-hyx-resilience

**Example:**
```python
# ❌ Incorrect
if price == 19.99:
    apply_discount()

# ✅ Correct
import math
if math.isclose(price, 19.99, rel_tol=1e-09):
    apply_discount()

# ✅ Better for money
from decimal import Decimal
price = Decimal('19.99')
```

### python:S1481 - Unused Local Variables
- **Severity**: Medium
- **Description**: Remove unused variables and imports to improve code clarity
- **Integration**: All Python specialists

### python:S5445 - Insecure Temporary File Creation
- **Severity**: Critical
- **Description**: Use tempfile module for secure temporary file creation
- **Integration**: All Python specialists

## 📘 TypeScript Rules (typescript:S####)

### typescript:S1481 - Unused Variables
- **Severity**: Medium
- **Description**: Remove unused variables, imports, and function parameters
- **Integration**: @typescript-cockatiel-resilience, React specialists

### typescript:S2589 - Boolean Expression Always True/False
- **Severity**: High
- **Description**: Avoid boolean expressions that are always true or false
- **Integration**: All TypeScript specialists

### typescript:S3776 - Cognitive Complexity
- **Severity**: High
- **Description**: Break down complex functions into smaller, manageable pieces
- **Integration**: All TypeScript specialists

**Example:**
```typescript
// ❌ High complexity
function processUserData(users: User[], filters: FilterOptions): ProcessedUser[] {
    // Complex nested logic...
}

// ✅ Broken down
function processUserData(users: User[], filters: FilterOptions): ProcessedUser[] {
    return users
        .filter(user => isEligibleUser(user, filters))
        .map(user => safeTransformUser(user))
        .filter((user): user is ProcessedUser => user !== null);
}
```

### typescript:S4138 - Functions Should Not Have Too Many Parameters
- **Severity**: Medium
- **Description**: Use objects or interfaces instead of many parameters
- **Integration**: All TypeScript specialists

## 🔵 Go Rules (go:S####)

### go:S1005 - Error Handling
- **Severity**: Critical
- **Description**: Always handle errors explicitly, never ignore them
- **Integration**: @go-resilience-engineer, Go specialists

**Example:**
```go
// ❌ Incorrect
file, _ := os.Open("config.json")  // Dangerous

// ✅ Correct
file, err := os.Open("config.json")
if err != nil {
    return fmt.Errorf("failed to open config: %w", err)
}
defer file.Close()
```

### go:S1006 - Package Naming Convention
- **Severity**: Medium
- **Description**: Use lowercase, short, descriptive package names
- **Integration**: All Go specialists

### go:S1021 - Goroutine and Channel Safety
- **Severity**: High
- **Description**: Properly manage goroutine lifecycle and avoid leaks
- **Integration**: @go-resilience-engineer, Go specialists

### go:S1030 - Interface Design
- **Severity**: Medium
- **Description**: Design small, focused interfaces; accept interfaces, return structs
- **Integration**: All Go specialists

## 🟨 JavaScript Rules (javascript:S####)

### javascript:S1481 - Unused Variables
- **Severity**: Medium
- **Description**: Remove unused variables and imports
- **Integration**: Frontend specialists, Node.js specialists

## 🏗️ Rule Integration Architecture

### Agent Integration Levels

#### Level 1: Rule-Aware Agents
All development agents that:
- Query applicable rules before code generation
- Reference rule IDs in code comments
- Apply rule standards during implementation

**Examples**: @django-backend-expert, @react-component-architect, @go-resilience-engineer

#### Level 2: Rule-Contributing Agents
Agents that discover and create new rules:
- Identify common patterns and anti-patterns
- Propose new rules based on real-world usage
- Update existing rules with new examples

**Examples**: @software-engineering-expert, @code-reviewer

#### Level 3: Rule-Enforcing Agents
Agents that validate and enforce rules:
- Check code against all applicable rules
- Flag violations with specific rule references
- Provide correction guidance

**Examples**: @code-reviewer, @quality-system-engineer

### Workflow Integration

#### Pre-Implementation Check
1. **Language Detection**: Agent identifies target language/framework
2. **Rule Discovery**: Search `coding-rules/languages/{language}/` and `coding-rules/general/`
3. **Standard Application**: Apply discovered rules during code generation
4. **Rule Referencing**: Include rule IDs in code comments where applicable

#### Post-Implementation Validation
1. **Code Review**: @code-reviewer validates against all applicable rules
2. **Violation Flagging**: Rule violations flagged with specific rule IDs
3. **Correction Guidance**: Feedback includes rule references and fixes
4. **Knowledge Update**: Successful patterns stored for future reference

#### Knowledge Evolution
1. **Pattern Discovery**: New patterns discovered during development
2. **Rule Updates**: Existing rules enhanced with real-world examples
3. **Agent Integration**: Integration notes maintained for each agent
4. **Cross-Project Sharing**: Patterns shared across different projects

## 🔄 Rule Management Operations

### Adding New Rules

#### Language-Specific Rules
```bash
# Python examples
"Add rule python:S1500 - Use context managers for file operations"
"Add rule python:S1600 - Prefer list comprehensions over loops"

# TypeScript examples
"Add rule typescript:S5000 - Use strict type checking"
"Add rule typescript:S5100 - Prefer const over let for immutable values"

# Go examples
"Add rule go:S2000 - Use descriptive error messages"
"Add rule go:S2100 - Implement proper logging context"
```

#### General Rules
```bash
# Security rules
"Add rule SEC004 - Use HTTPS for all external API calls"
"Add rule SEC005 - Validate all file uploads"

# Performance rules
"Add rule PERF006 - Implement database connection pooling"
"Add rule PERF007 - Use CDN for static assets"

# Maintainability rules
"Add rule MAINT001 - Keep functions under 20 lines"
"Add rule MAINT002 - Use meaningful variable names"
```

### Updating Existing Rules

#### Content Updates
```bash
# Add examples
"Update rule python:S1244 to include Django DecimalField examples"
"Add React component examples to rule typescript:S3776"

# Add framework-specific guidance
"Update rule SEC001 to include Docker secrets management"
"Add FastAPI examples to rule PERF001"
```

#### Metadata Updates
```bash
# Change severity
"Change severity of rule PERF001 from High to Critical"
"Update rule typescript:S1481 severity to High"

# Update integration notes
"Add integration notes for @rails-expert to rule SEC002"
"Update @go-resilience-engineer integration for rule go:S1021"
```

### Rule Discovery and Search

#### List All Rules
```bash
"List rules"
# Returns complete inventory with categories and severity levels
```

#### Category-Specific Searches
```bash
# By language
"Show me all Python rules"
"List TypeScript rules"
"Find Go-specific rules"

# By category
"List security rules"
"Show performance rules"
"Find maintainability rules"

# By severity
"Show critical rules"
"List high-priority rules"
```

#### Pattern-Based Searches
```bash
# By topic
"Find rules related to database performance"
"Show rules about error handling"
"List rules for API security"

# By framework
"Find Django-specific rules"
"Show React component rules"
"List Node.js performance rules"
```

## 🎯 Best Practices for Rule Usage

### For Development Agents
1. **Always Check Rules First**: Query applicable rules before generating code
2. **Reference Rule IDs**: Include rule IDs in code comments when applying fixes
3. **Provide Context**: Explain why specific rules apply to the situation
4. **Update Rules**: Contribute new examples and patterns back to the rule system

### For Users
1. **Use Direct Requests**: Ask for specific rules using the standard format
2. **Provide Context**: Include framework or use case when adding rules
3. **Be Specific**: Specify language and severity when creating new rules
4. **Update Regularly**: Keep rules current with evolving best practices

### For Code Reviews
1. **Reference Specific Rules**: Always cite rule IDs when providing feedback
2. **Explain Violations**: Provide clear examples of rule violations and fixes
3. **Suggest Alternatives**: Offer rule-compliant alternatives to problematic code
4. **Update Knowledge**: Add new patterns discovered during reviews

## 🚀 Future Expansion

### Planned Language Support

#### Priority 1: Ruby Rules
- Rails-specific patterns and security
- ActiveRecord best practices and N+1 prevention
- Ruby idioms and naming conventions
- ERB template security

#### Priority 2: PHP Rules
- Laravel patterns and security
- Eloquent ORM best practices
- PHP-specific vulnerabilities (type juggling, etc.)
- Blade template security

#### Priority 3: Enterprise Languages
- Java enterprise patterns and Spring Boot
- C# .NET best practices and Entity Framework
- Kotlin modern JVM patterns
- Scala functional programming patterns

### Rule Evolution

#### Automatic Rule Discovery
- AI-powered pattern recognition from successful implementations
- Automatic generation of rule candidates from code reviews
- Integration with static analysis tools for rule validation

#### Cross-Project Learning
- Rule effectiveness metrics across different projects
- Success rate tracking for rule-compliant vs non-compliant code
- Automatic rule prioritization based on impact

#### Community Integration
- Public rule sharing and collaboration
- Industry-specific rule sets (fintech, healthcare, etc.)
- Integration with popular linting tools and standards

## 🔗 Integration with Quality Systems

### Trunk.io Integration
- Coding rules complement automated linting and formatting
- Custom rule validation beyond standard linters
- Consistent standards across all supported languages
- Pre-commit hook integration for rule enforcement

### CI/CD Integration
- Automated rule checking in continuous integration
- Rule compliance reporting in pull requests
- Quality gates based on rule adherence
- Historical rule compliance tracking

### IDE Integration
- Real-time rule validation during development
- Inline suggestions based on applicable rules
- Code completion integration with rule patterns
- Quick fixes for common rule violations

---

The coding rules system provides a foundation for consistent, high-quality code across all development agents while remaining flexible and extensible for future needs. All rules integrate seamlessly with existing quality tools and development workflows.