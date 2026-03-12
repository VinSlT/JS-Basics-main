# JavaScript Basics Lesson - Project Structure

## Overview
This project follows the same testing philosophy as the HTML/CSS Basics lesson:
- **10 separate test suites** (one per task)
- **Strict requirements** defined in README.md
- **Automated testing** with Jest
- **GitHub Actions** ready for GitHub Classroom

## Project Files

```
js-basics-lesson/
├── .github/
│   └── workflows/
│       └── ci.yml              # GitHub Actions workflow for auto-grading
├── __tests__/                  # Test files (one per task)
│   ├── task.1.1.studentName.test.js
│   ├── task.1.2.studentAge.test.js
│   ├── task.1.3.isEnrolled.test.js
│   ├── task.2.1.greet.test.js
│   ├── task.2.2.add.test.js
│   ├── task.2.3.isEven.test.js
│   ├── task.3.1.colors.test.js
│   ├── task.3.2.getFirstElement.test.js
│   ├── task.4.1.car.test.js
│   └── task.4.2.getFullName.test.js
├── script.js                   # Main JavaScript file (students work here)
├── package.json                # Node.js dependencies
├── jest.config.js              # Jest configuration
├── .gitignore                  # Git ignore rules
└── README.md                   # Student instructions

```

## Topics Covered

### 1. Variables and Data Types (3 tasks)
- String variables
- Number variables
- Boolean variables

### 2. Functions (3 tasks)
- String interpolation/concatenation
- Mathematical operations
- Conditional logic (even/odd)

### 3. Arrays (2 tasks)
- Array creation and initialization
- Array access and manipulation

### 4. Objects (2 tasks)
- Object creation with properties
- Object property access

## Testing Strategy

Each task has its own test suite file, ensuring:
- Clear, granular feedback (10 test suites)
- Fast test execution (pure JavaScript, no browser needed)
- Precise validation against README requirements

## Current Status

✅ All 10 test suites are failing (as expected)
✅ Students can run `npm test` to check progress
✅ GitHub Actions workflow is configured
✅ Ready for GitHub Classroom deployment

## Usage

1. Students clone the repository
2. Run `npm install` to install dependencies
3. Complete tasks in `script.js`
4. Run `npm test` to verify their work
5. Push to GitHub for automated grading
