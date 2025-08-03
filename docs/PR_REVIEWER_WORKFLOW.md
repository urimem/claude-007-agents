# 🔍 PR Reviewer Specialist - Interactive Approval Workflow

## Overview

The `@pr-reviewer-specialist` agent provides comprehensive pull request analysis with **mandatory human approval workflow**. This agent NEVER posts to GitHub automatically - it always requires explicit user approval through a structured visual interface.

## 🚨 Critical System Override

**The agent operates under CRITICAL SYSTEM OVERRIDE with these absolute requirements:**

- ❌ **NEVER** posts to GitHub without explicit human approval
- ❌ **NEVER** skips the visual approval interface
- ❌ **NEVER** assumes what the user wants to post
- ✅ **ALWAYS** shows human-readable comment previews
- ✅ **ALWAYS** includes `@pr-reviewer-specialist` attribution
- ✅ **ALWAYS** waits for user input before GitHub operations

## 📋 Complete Workflow Process

### Step 1: Analysis Phase (Read-Only)
The agent performs comprehensive PR analysis:
- Fetches PR data using GitHub MCP
- Analyzes code across 4 dimensions: Security, Performance, Architecture, Code Quality
- Classifies findings by severity (Critical, High Priority, Suggestions, Positive)
- **Does NOT post anything to GitHub**

### Step 2: Visual Preview Interface
Presents ALL findings in structured ASCII boxes:

```
╔═══════════════════════════════════════════════════════════════╗
║                    PR REVIEW ANALYSIS                        ║
║ PR #123: Feature implementation                              ║
║ Files: 5 changed │ +127 │ -15                               ║
║ Recommendation: REQUEST_CHANGES                               ║
╚═══════════════════════════════════════════════════════════════╝

🚨 CRITICAL ISSUES (1 found)
┌─────────────────────────────────────────────────────────────┐
│ [1] SECURITY: SQL injection vulnerability                  │
│     File: auth.js:67                                       │
│     Impact: High - allows unauthorized data access        │
│                                                             │
│ PROPOSED COMMENT:                                           │
│ 🔒 **Security Concern**                                    │
│ [Full comment with code examples and recommendations]      │
│                                                             │
│ Attribution: @pr-reviewer-specialist                       │
│ ☐ INCLUDE IN REVIEW                                        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                     APPROVAL OPTIONS                       │
├─────────────────────────────────────────────────────────────┤
│ [A] ☑️ Post ALL comments as GitHub review                  │
│ [B] ☐ Let me select individual comments                    │
│ [C] ☐ Let me edit comments before posting                  │
│ [D] ☐ Post summary comment only                            │
│ [E] ☐ Cancel - do not post anything                        │
└─────────────────────────────────────────────────────────────┘

Please respond with A, B, C, D, or E:
```

### Step 3: User Selection Processing
Based on user choice:

**Option A**: Proceed to final confirmation with all comments
**Option B**: Show individual comment selection interface
**Option C**: Allow editing of specific comments
**Option D**: Generate summary-only comment
**Option E**: Cancel completely

### Step 4: Final Confirmation
Before any GitHub posting, shows exactly what will be posted:

```
╔═══════════════════════════════════════════════════════════════╗
║                    FINAL CONFIRMATION                        ║
║ Ready to post 3 comments to GitHub PR #123                  ║
║ • 1 Critical security issue                                  ║
║ • 1 High priority performance issue                          ║
║ • 1 Positive highlight                                       ║
║                                                             ║
║ Review Type: REQUEST_CHANGES                                ║
║ All comments include @pr-reviewer-specialist attribution    ║
╚═══════════════════════════════════════════════════════════════╝

Proceed with posting to GitHub? [Y/N]:
```

### Step 5: GitHub Operations (Only After Y Confirmation)
- Creates pending review using GitHub MCP
- Adds all approved comments with proper attribution
- Submits review with appropriate classification
- Confirms successful posting

## 🎯 Agent Attribution Requirements

Every comment posted to GitHub includes this attribution:

```markdown
---
*Review by @pr-reviewer-specialist via [Claude Code](https://claude.ai/code)*
```

This ensures:
- Clear traceability of which agent created the comment
- Consistency with project agent attribution requirements
- Professional presentation in GitHub interface

## 📊 Analysis Dimensions

The agent analyzes PRs across four key dimensions:

### 🔒 Security Analysis
- Vulnerability scanning (SQL injection, XSS, CSRF)
- Data protection and encryption practices
- Dependency security and version updates
- Infrastructure and secrets management

### ⚡ Performance Analysis
- Database query optimization and N+1 problems
- Runtime efficiency and algorithm complexity
- Network optimization and caching strategies
- Resource management and memory usage

### 🏗️ Architecture Review
- Design pattern appropriateness
- System boundaries and data flow
- Scalability considerations
- Integration quality and error handling

### 🧹 Code Quality Assessment
- Readability and maintainability
- DRY principles and SOLID design
- Testing strategy and coverage
- Documentation quality

## 💬 Comment Templates

All comments follow structured templates with:
- Clear issue identification
- Risk/impact assessment
- Specific location references
- Actionable recommendations with code examples
- Proper agent attribution

Example Security Comment:
```markdown
🔒 **Security Concern**

**Issue**: Unparameterized SQL query vulnerable to injection attacks
**Risk Level**: Critical
**Location**: `auth.js:67`

**Details**: The query concatenates user input directly:
```javascript
const query = "SELECT * FROM users WHERE id = " + userId;
```

**Recommendation**: Use parameterized queries:
```javascript
const query = "SELECT * FROM users WHERE id = ?";
const result = await db.query(query, [userId]);
```

---
*Review by @pr-reviewer-specialist via [Claude Code](https://claude.ai/code)*
```

## 🚫 Tool Usage Restrictions

### Analysis Phase - Allowed Tools:
- `mcp__github__get_pull_request` - Fetch PR data
- `mcp__github__get_pull_request_diff` - Analyze changes
- `mcp__github__get_pull_request_files` - Review files
- `Read`, `Grep`, `Glob` - Code analysis

### Submission Phase - Blocked Until Approval:
- `mcp__github__create_and_submit_pull_request_review` - **BLOCKED**
- `mcp__github__add_comment_to_pending_review` - **BLOCKED**

## 🎮 Usage Examples

### Basic PR Review
```bash
"Use @pr-reviewer-specialist to review PR #456"
```

### Security-Focused Review
```bash
"Use @pr-reviewer-specialist to analyze PR #789 focusing on security vulnerabilities"
```

### Architecture Review
```bash
"Use @pr-reviewer-specialist to review PR #321 with emphasis on architectural concerns"
```

### Performance Analysis
```bash
"Use @pr-reviewer-specialist to analyze PR #654 for performance implications"
```

## 🔄 Integration with Other Systems

### GitHub MCP Integration
- Live repository operations after approval
- Real-time PR data fetching
- Direct comment posting with attribution

### Basic Memory MCP Integration
- Stores review patterns and organizational standards
- Builds context from previous reviews
- Maintains quality insights and team preferences

## ✅ Success Indicators

The workflow is successful when:
- All critical issues are identified and communicated clearly
- User has full control over what gets posted to GitHub
- Comments are helpful, actionable, and properly attributed
- Review process improves code quality and team learning
- No surprises - user always knows exactly what will be posted

## 🛡️ Behavioral Constraints

The agent is absolutely prohibited from:
- Posting to GitHub without explicit user approval
- Skipping the visual preview interface
- Making assumptions about user preferences
- Posting comments without proper attribution
- Using GitHub MCP tools before completing approval workflow

## 🎯 Quality Standards

The agent maintains these quality standards:
- Zero tolerance for bypassing human approval
- 100% attribution compliance
- Clear, actionable feedback with code examples
- Respectful, constructive communication tone
- Comprehensive analysis across all dimensions

This documentation ensures the @pr-reviewer-specialist operates with complete transparency, user control, and proper attribution while delivering high-quality PR analysis and feedback.