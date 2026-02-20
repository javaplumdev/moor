# Contributing to Moor

Thank you for your interest in contributing to Moor! This document provides guidelines and instructions for contributing to the project.

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Xcode (for iOS development)
- Android Studio (for Android development)
- Familiarity with React Native and TypeScript

### Setting Up Your Development Environment

1. Fork the repository and clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/moor.git
   cd moor
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

   > Note: This project uses `--legacy-peer-deps` due to version mismatches between React 18 and some testing libraries.

3. Start the development server:
   ```bash
   npm start
   ```

   Choose your platform (iOS, Android, or Web) when prompted.

## Development Workflow

### Commands

```bash
# Start development server (interactive platform selection)
npm start

# Start with clean cache (use if Metro bundler is stuck)
npm run start:clean

# Run on specific platform
npm run ios          # iOS Simulator
npm run android      # Android Emulator
npm run web          # Web browser

# Code quality
npm run lint         # Check TypeScript and linting
npm run format       # Format code with Prettier
npm run format:check # Check formatting without modifying
npm test             # Run Jest tests in watch mode
```

### Before Submitting a PR

1. **Format your code**:
   ```bash
   npm run format
   ```

2. **Check for linting issues**:
   ```bash
   npm run lint
   ```

3. **Run tests**:
   ```bash
   npm test
   ```

4. **Test on the platform** you're targeting (iOS, Android, or Web)

## Code Style Guidelines

### TypeScript

- Use TypeScript for all new code (no plain JavaScript)
- Always include proper type annotations for function parameters and return types
- Avoid `any` types; use `unknown` if the type is truly unknown

### React Native Components

- Use functional components with hooks
- Prefix custom hooks with `use` (e.g., `useAuth`)
- Import from `react-native` for platform components (View, Text, Pressable, etc.)
- Use `className` for styling with NativeWind/Tailwind

### Styling with NativeWind

- All styling uses Tailwind CSS classes
- Apply classes directly to React Native components via `className` prop
- Keep component styles composable and reusable
- New files with Tailwind classes must be in: `app/`, `components/`, or `modules/` directories (scanned by tailwind.config.js)

Example:
```tsx
import { View, Text } from 'react-native';

export function Card({ children }) {
  return (
    <View className="bg-white rounded-lg p-4 shadow-sm">
      <Text className="text-lg font-semibold">{children}</Text>
    </View>
  );
}
```

### File Organization

- **`app/`** - Screen components (pages), using Expo Router file-based routing
- **`components/`** - Reusable UI components
- **`modules/`** - Feature-specific business logic (prepare for future use)
- **`global.css`** - Contains Tailwind directives

## Project Architecture

This project uses **Expo 52** with the following stack:

- **Expo Router** - File-based routing (similar to Next.js)
- **React Native 0.76** - Mobile framework
- **TypeScript** - Type safety
- **NativeWind** - Tailwind CSS for React Native
- **Babel + Metro** - JavaScript bundler

For more details, see [CLAUDE.md](./CLAUDE.md).

## Submitting Changes

### Commit Messages

Use clear, descriptive commit messages:
- `feat: add new feature description`
- `fix: resolve issue with xyz`
- `docs: update documentation`
- `refactor: improve code structure`
- `test: add test coverage`
- `chore: update dependencies`

### Pull Request Process

1. Create a feature branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit them with clear messages

3. Ensure all checks pass:
   ```bash
   npm run lint
   npm run format:check
   npm test
   ```

4. Push your branch and create a pull request

5. In your PR description, include:
   - What problem does this solve?
   - How did you test it?
   - Any breaking changes?

### Review Process

- All PRs require review before merging
- Address feedback and requested changes
- Keep commits clean and organized

## Common Development Tasks

### Adding a New Screen

1. Create a file in `app/` (e.g., `app/settings.tsx`)
2. Export a default component
3. Use Expo Router for navigation and screen options if needed

```tsx
// app/settings.tsx
import { View, Text } from 'react-native';
import '../global.css';

export default function Settings() {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text className="text-2xl font-bold">Settings</Text>
    </View>
  );
}
```

### Creating a Reusable Component

1. Add to `components/` with TypeScript types
2. Export from `components/index.ts` for convenience imports

```tsx
// components/Button.tsx
import { Pressable, PressableProps, Text } from 'react-native';

interface ButtonProps extends PressableProps {
  label: string;
  variant?: 'primary' | 'secondary';
}

export function Button({ label, variant = 'primary', className, ...props }: ButtonProps) {
  const baseStyles = variant === 'primary' ? 'bg-blue-500' : 'bg-gray-300';
  return (
    <Pressable className={`px-4 py-2 rounded-lg ${baseStyles} ${className || ''}`} {...props}>
      <Text className="text-white font-semibold">{label}</Text>
    </Pressable>
  );
}
```

## Troubleshooting

### Tailwind Styles Not Applying

1. Ensure your file is in a scanned directory (app, components, modules)
2. Run `npm run start:clean` to rebuild Tailwind classes
3. Verify `global.css` is imported in your component's render tree

### Metro Bundler Issues

- Kill any existing bundler processes
- Run `npm run start:clean` to force a rebuild
- Check that `app.json` has valid configuration

### Dependency Issues

Some dependencies may have peer dependency conflicts. The project uses `--legacy-peer-deps` to handle these. If you encounter issues:

1. Delete `node_modules/` and `package-lock.json`
2. Run `npm install` again

## Resources

- [Expo Documentation](https://docs.expo.dev)
- [Expo Router Guide](https://expo.dev/router)
- [React Native Docs](https://reactnative.dev)
- [NativeWind Documentation](https://www.nativewind.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)

## Questions?

If you have questions, feel free to:
- Open an issue on GitHub
- Check existing issues for similar questions
- Review the [CLAUDE.md](./CLAUDE.md) file for technical details

## License

By contributing to Moor, you agree that your contributions will be licensed under the same license as the project. See LICENSE file for details.

Thank you for contributing to Moor! 🚀
