# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Moor Tracker is a React Native mobile application built with:
- **Expo 52** - Framework for building cross-platform React Native apps
- **Expo Router** - File-based routing (similar to Next.js)
- **NativeWind** - Tailwind CSS styling for React Native
- **TypeScript** - Full type safety
- **React Native 0.76**

This is a **mobile-first application** with web support via Metro web bundler.

## Architecture

### File-Based Routing (Expo Router)
The `app/` directory uses Expo Router's file-based routing convention:
- `app/_layout.tsx` - Root layout/navigation stack
- `app/index.tsx` - Home screen (mounted at `/`)
- `app/profile.tsx` - Profile screen (mounted at `/profile`, etc.)
- Nested folders create route groups and nested navigation

### Styling with NativeWind
- All styling uses Tailwind CSS classes applied directly to React Native components
- `global.css` contains the Tailwind directives (`@tailwind base; @tailwind components; @tailwind utilities;`)
- `babel.config.js` has critical config: `jsxImportSource: 'nativewind'` - this enables JSX className syntax
- `tailwind.config.js` scans `app/**`, `components/**`, and `modules/**` for class names to generate

**Important**: When creating new files with Tailwind classes:
1. Ensure they're in scanned directories (app, components, modules)
2. Use `className` on React Native components (View, Text, Pressable, etc.)
3. The babel config automatically converts these to styles at build time

### Component Structure
- `components/` - Reusable UI components (Button, Card, etc.)
- `app/` - Screen components (pages)
- `modules/` - Feature-specific business logic (optional, prepare for future use)

## Development Commands

```bash
# Start development server (choose platform interactively)
npm start

# Start with clean cache (use if Metro bundler is stuck)
npm run start:clean

# Run directly on specific platform
npm run ios          # iOS Simulator
npm run android      # Android Emulator
npm run web          # Web browser (Metro web)

# Code quality
npm run lint         # Check TypeScript and linting
npm run format       # Format code with Prettier
npm run format:check # Check formatting without modifying

# Testing
npm test            # Run Jest tests in watch mode
```

## Common Development Tasks

### Adding a New Screen
1. Create file in `app/` directory (e.g., `app/about.tsx`)
2. Export default component
3. Use Expo Router Stack.Screen in `_layout.tsx` if you need to customize header/options

```tsx
// app/about.tsx
import { View, Text } from 'react-native';
import '../global.css';

export default function About() {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text className="text-2xl font-bold">About Screen</Text>
    </View>
  );
}
```

### Creating Reusable Components
1. Add component to `components/` with proper TypeScript types
2. Export from `components/index.ts` for convenience imports
3. Use `className` for styling, compose Tailwind utilities

```tsx
// components/MyComponent.tsx
import { View, ViewProps } from 'react-native';

interface MyComponentProps extends ViewProps {
  label: string;
}

export function MyComponent({ label, className, ...props }: MyComponentProps) {
  return (
    <View className={`p-4 rounded-lg bg-slate-100 ${className || ''}`} {...props}>
      {/* content */}
    </View>
  );
}
```

### Debugging Runtime Issues
If encountering Tailwind styling not applying:
1. Verify file is in scanned directories (app, components, modules)
2. Run `npm run start:clean` to rebuild Tailwind classes
3. Check that `global.css` is imported in the component's render tree

## Key Configuration Details

### app.json (Expo Config)
- `sdkVersion: "52.0.0"` - Must match your Expo SDK version
- `orientation: "portrait"` - App orientation (can be changed)
- Minimal config: avoid asset paths that don't exist (causes bundler errors)

### babel.config.js
- Critical: `jsxImportSource: 'nativewind'` enables className syntax
- `babel-preset-expo` provides React Native transpilation
- Both Babel presets must be present and in correct order

### tsconfig.json
- Extends `expo/tsconfig.base`
- Path aliases available (check for `@/*` patterns)

## Dependency Notes

- **Peer dependency conflicts**: Project uses `--legacy-peer-deps` during installation due to version mismatches between React 18 and some testing libraries
- **Important packages**:
  - `expo-router@~4.0.0` (not 3.x) - aligns with Expo 52
  - `babel-preset-expo@~12.0.0` (not 10.x) - aligns with Expo 52
  - `nativewind@^4.0.0` - requires Babel integration
  - `react-native-web@~0.19.13` - enables web support

## Known Issues & Gotchas

1. **SDK Version Error on Start**: If you see "AssertionError: SDK Version is missing":
   - Check `app.json` has valid `sdkVersion` field matching installed Expo
   - Ensure `app.json` doesn't have invalid JSON comments or malformed config
   - Run `npm run start:clean` to clear Metro cache

2. **Tailwind Classes Not Applying**:
   - File must be in content scan path in `tailwind.config.js`
   - Run `npm run start:clean` after adding files to new directories

3. **Metro Bundler Hangs**:
   - Kill existing bundler process
   - Run `npm run start:clean` to force rebuild

## Resources

- [Expo Documentation](https://docs.expo.dev)
- [Expo Router Guide](https://expo.dev/router)
- [React Native Docs](https://reactnative.dev)
- [NativeWind Documentation](https://www.nativewind.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
