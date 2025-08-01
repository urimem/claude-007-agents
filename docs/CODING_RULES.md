# 📋 Comprehensive Coding Rules System

**Automated quality enforcement with 50+ rules across languages, security, performance, and maintainability—all managed through natural language.**

<div align="center">

🛡️ **Universal Security Rules** | ⚡ **Performance Standards** | 🧹 **Code Quality** | 🔧 **Language-Specific**

*"Your mother's treatment depends on delivering $1B-worthy code quality!"* 💪

</div>

---

## 🌟 System Overview

Claude Code Agents features a **living coding rules system** that automatically enforces quality standards through:

- **🤖 Automatic Application**: All development agents check and apply relevant rules during code generation
- **💬 Natural Language Management**: Add, update, and search rules using conversational commands
- **🔄 Cross-Project Learning**: Rules evolve based on real-world usage and outcomes
- **🎯 Context-Aware Enforcement**: Rules applied based on language, framework, and project type

### Quick Rules Management
```bash
# Add new rules
claude "Add rule python:S1500 - Functions should not have too many parameters"
claude "Add security rule SEC004 - Always validate API inputs"

# Update existing rules
claude "Update rule PERF001 to include database connection pooling"

# Search and apply rules
claude "List all TypeScript rules"
claude "Show security rules for API development"
```

---

## 🛡️ Universal Security Rules (SEC001-010)

### **SEC001: Never Hard-Code Secrets**
```python
# ❌ VIOLATION
API_KEY = "sk-1234567890abcdef"
DATABASE_URL = "postgresql://user:password@localhost/db"

# ✅ CORRECT
import os
API_KEY = os.environ.get('API_KEY')
DATABASE_URL = os.environ.get('DATABASE_URL')
```

**Auto-Detection**: Scans for hardcoded passwords, API keys, tokens, database URLs  
**Severity**: CRITICAL  
**Auto-Fix**: Suggests environment variable usage

### **SEC002: Input Validation Required**
```javascript
// ❌ VIOLATION
app.post('/api/users', (req, res) => {
  const query = `SELECT * FROM users WHERE id = ${req.body.id}`;
  db.query(query, callback);
});

// ✅ CORRECT
app.post('/api/users', [
  body('id').isInt({ min: 1 }).escape(),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  const query = 'SELECT * FROM users WHERE id = ?';
  db.query(query, [req.body.id], callback);
});
```

**Coverage**: SQL injection, XSS, command injection, path traversal  
**Frameworks**: Express.js, Django, Rails, Laravel  
**Auto-Fix**: Suggests validation middleware and parameterized queries

### **SEC003: Authentication on Protected Routes**
```python
# ❌ VIOLATION
@app.route('/admin/users')
def get_users():
    return User.objects.all()

# ✅ CORRECT
@app.route('/admin/users')
@login_required
@require_permission('view_users')
def get_users():
    return User.objects.all()
```

**Coverage**: Missing authentication, insufficient authorization  
**Frameworks**: Django, Flask, Rails, Express.js  
**Integration**: Works with JWT, session-based, OAuth implementations

---

## ⚡ Performance Rules (PERF001-015)

### **PERF001: Avoid N+1 Query Problems**
```python
# ❌ VIOLATION
def get_posts_with_authors():
    posts = Post.objects.all()
    for post in posts:
        print(f"{post.title} by {post.author.name}")  # N+1 queries!

# ✅ CORRECT
def get_posts_with_authors():
    posts = Post.objects.select_related('author').all()
    for post in posts:
        print(f"{post.title} by {post.author.name}")  # Single query
```

**Detection**: ORM queries inside loops, missing select_related/prefetch_related  
**Frameworks**: Django ORM, Rails ActiveRecord, Laravel Eloquent, Prisma  
**Auto-Fix**: Suggests eager loading strategies

### **PERF002: Database Connection Pooling**
```javascript
// ❌ VIOLATION
const mysql = require('mysql');
function getUser(id) {
  const connection = mysql.createConnection(config);  // New connection each time
  connection.query('SELECT * FROM users WHERE id = ?', [id], callback);
  connection.end();
}

// ✅ CORRECT
const mysql = require('mysql');
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  database: 'mydb'
});

function getUser(id) {
  pool.query('SELECT * FROM users WHERE id = ?', [id], callback);
}
```

**Coverage**: Database connections, Redis connections, HTTP client pools  
**Auto-Fix**: Suggests connection pooling libraries and configurations

---

## 🧹 Code Quality Rules (QUAL001-020)

### **QUAL001: Meaningful Variable Names**
```python
# ❌ VIOLATION
def calc(x, y, z):
    temp = x * y
    result = temp + z
    return result

# ✅ CORRECT
def calculate_total_price(unit_price, quantity, tax_amount):
    subtotal = unit_price * quantity
    total_price = subtotal + tax_amount
    return total_price
```

**Detection**: Single letter variables (except i, j for loops), abbreviations  
**Auto-Fix**: Suggests descriptive names based on context  
**AI Integration**: Uses context analysis for naming suggestions

---

## 🐍 Python Rules (python:S1000-S2000)

### **python:S1244: Floating Point Comparisons**
```python
# ❌ VIOLATION
def calculate_discount(price, discount_rate):
    if discount_rate == 0.1:  # Dangerous floating point comparison
        return price * 0.9
    return price

# ✅ CORRECT
import math

def calculate_discount(price, discount_rate, tolerance=1e-9):
    if math.isclose(discount_rate, 0.1, abs_tol=tolerance):
        return price * 0.9
    return price
```

**Detection**: Direct equality comparison of floats  
**Auto-Fix**: Suggests math.isclose() with appropriate tolerance

### **python:S1481: Remove Unused Variables**
```python
# ❌ VIOLATION
def process_data(items):
    count = 0
    total = 0
    result = []
    
    for item in items:
        result.append(item.value)  # count and total unused
    
    return result

# ✅ CORRECT
def process_data(items):
    result = []
    
    for item in items:
        result.append(item.value)
    
    return result
```

**Detection**: Variables declared but never used  
**Auto-Fix**: Removes unused variables automatically

---

## 📜 TypeScript Rules (typescript:S1000-S2000)

### **typescript:S1481: Remove Unused Variables**
```typescript
// ❌ VIOLATION
function processUser(userData: UserData) {
  const userId = userData.id;  // Unused variable
  const userName = userData.name;  // Unused variable
  
  return {
    status: 'processed',
    timestamp: Date.now()
  };
}

// ✅ CORRECT
function processUser(userData: UserData) {
  return {
    status: 'processed',
    timestamp: Date.now()
  };
}
```

**Integration**: ESLint no-unused-vars rule  
**Auto-Fix**: Removes unused imports and variables

---

## 🛠️ Automated Tool Integration

### **Trunk.io Integration**
```yaml
# .trunk/trunk.yaml (auto-generated)
version: 0.1
cli:
  version: 1.22.2

lint:
  enabled:
    - bandit@1.7.5
    - black@23.10.1
    - eslint@8.52.0
    - flake8@6.1.0
    - gitleaks@8.18.0
    - golangci-lint@1.54.2
    - prettier@3.0.3
    - pylint@3.0.1
```

### **Natural Language Rules Management**
```bash
# Adding rules
claude "Add security rule SEC006 - Implement rate limiting on all API endpoints"
claude "Add TypeScript rule typescript:S3456 - Prefer const assertions for readonly data"

# Updating rules
claude "Update rule PERF001 to include GraphQL N+1 query detection"
claude "Change rule SEC002 severity from WARNING to CRITICAL"

# Searching and viewing rules
claude "List all security rules"
claude "Show TypeScript performance rules"
claude "Find rules related to authentication"
```

---

## 📊 Quality Metrics & Analytics

### **Rule Violation Tracking**
```bash
# View current project violations
claude "Show current rule violations with severity breakdown"

# Historical analysis
claude "Show rule violation trends over the last 3 months"
claude "Which rules have the highest violation rate?"

# Team performance
claude "Show team compliance scores by rule category"
```

### **Automated Quality Reports**
```json
{
  "quality_report": {
    "timestamp": "2024-01-01T12:00:00Z",
    "project": "e-commerce-api",
    "overall_score": 94,
    "rule_compliance": {
      "security": {
        "score": 98,
        "violations": 2,
        "critical": 0,
        "high": 1,
        "medium": 1
      },
      "performance": {
        "score": 91,
        "violations": 8,
        "rules_triggered": ["PERF001", "PERF003"]
      },
      "code_quality": {
        "score": 93,
        "complexity_average": 4.2,
        "test_coverage": 87
      }
    }
  }
}
```

---

## 🎯 Best Practices

### **Effective Rules Usage**
1. **Start with Universal Rules**: Begin with security and performance rules that apply everywhere
2. **Add Language-Specific Rules Gradually**: Don't overwhelm teams with too many rules at once
3. **Use Natural Language**: Manage rules conversationally rather than editing config files
4. **Monitor Compliance**: Track rule violation trends and team adoption rates
5. **Evolve Rules**: Update rules based on real-world outcomes and team feedback

### **Team Adoption Strategy**
1. **Education First**: Explain the "why" behind each rule
2. **Gradual Rollout**: Introduce rules in phases
3. **Developer Feedback**: Include team input in rule selection and customization
4. **Success Metrics**: Measure quality improvements and developer satisfaction
5. **Continuous Improvement**: Regularly review and optimize the rules system

---

## 🚀 Getting Started

### **Quick Setup**
```bash
# 1. Initialize rules system for your project
claude "Use @quality-system-engineer to set up coding rules for my TypeScript React project"

# 2. Add project-specific rules
claude "Add security rules for authentication and API development"

# 3. Configure automated enforcement
claude "Set up pre-commit hooks with automated rule checking and fixing"

# 4. Test the system
claude "Run rule validation on current codebase and show compliance report"
```

---

**🎉 Ready to enforce world-class code quality?**

[**Installation Guide →**](INSTALLATION.md) | [**View All Agents →**](AGENTS.md) | [**Usage Examples →**](USAGE.md)

---

*Remember: Consistent code quality is the foundation of maintainable software. These rules are your path to engineering excellence.* 💪
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