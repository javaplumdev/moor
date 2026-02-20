# Moor

A React Native app built with Expo, NativeWind, and TypeScript.

## Tech Stack

- **Expo** - Framework for building React Native apps
- **React Native** - Cross-platform mobile development
- **Expo Router** - File-based routing for React Native
- **NativeWind** - Tailwind CSS for React Native
- **TypeScript** - Type-safe JavaScript

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Expo CLI (optional, can use `npx expo`)

### Installation

```bash
npm install
# or
yarn install
```

### Development

To start the Expo development server:

```bash
npm start
```

Then choose your platform:

- **iOS**: Press `i`
- **Android**: Press `a`
- **Web**: Press `w`

### Available Scripts

- `npm start` - Start Expo development server
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm run web` - Run on web browser
- `npm test` - Run tests
- `npm run lint` - Lint code

## Project Structure

```
moor/
├── app/
│   ├── _layout.tsx       # Root navigation layout
│   ├── index.tsx         # Home screen
│   └── ...               # Additional screens
├── global.css            # Tailwind CSS directives
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
├── babel.config.js       # Babel configuration
├── app.json              # Expo configuration
└── package.json          # Project dependencies
```

## Styling with NativeWind

This project uses NativeWind to apply Tailwind CSS utilities to React Native components:

```tsx
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text className="text-2xl font-bold text-slate-900">Hello, NativeWind!</Text>
    </View>
  );
}
```

## Adding Components

To add UI component libraries (if needed), you can install:

- **react-native-shadcn-ui** - Shadcn UI components
- **rn-components-kit** - UI component library
- **native-base** - Popular UI framework

Example:

```bash
npm install react-native-shadcn-ui
```

## Building for Production

### iOS

```bash
eas build --platform ios
```

### Android

```bash
eas build --platform android
```

## Resources

- [Expo Documentation](https://docs.expo.dev)
- [React Native Docs](https://reactnative.dev)
- [NativeWind](https://www.nativewind.dev)
- [Expo Router](https://expo.dev/router)
- [Tailwind CSS](https://tailwindcss.com)

## License

MIT
