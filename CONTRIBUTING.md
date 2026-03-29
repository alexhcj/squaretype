# Contributing to SquareType

## Development Workflow

1. **Setup your development environment**
    - Follow installation steps in README.md
    - Ensure MongoDB is running locally or configure Atlas URI

2. **Create a feature branch**
```bash
   git checkout -b feature/your-feature-name
```

3. **Code Standards**
    - Add comments for complex logic
    - Update tests if applicable

4. **Testing**
```bash
   npm test
```

5. **Before submitting PR**
    - Ensure code runs without errors
    - Test both frontend and backend
    - Update documentation if needed

## Code Style

- Use ES6+ features
- Async/await over promises

## Commit Messages

- Use present tense ("add: feature" not "added: feature")
- Be concise, if indeed more description use shift/cmd + enter twice and start message: "Now authentication indeed..."
- Reference issues when applicable

Examples:
- `add: user authentication endpoint`
- `fix: post deletion bug #123`
- `update: styling for mobile responsiveness`
- `chore: edit documentation`