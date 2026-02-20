# Setup Guide

## Project Setup Completed ✅

Your Moor Tracker project is now configured with:

- ✅ **Expo** - Framework for building React Native apps
- ✅ **React Native** - Cross-platform mobile development
- ✅ **NativeWind** - Tailwind CSS for React Native styling
- ✅ **Expo Router** - File-based routing
- ✅ **TypeScript** - Type-safe development

## Quick Start

### 1. Start the Development Server

```bash
npm start
```

This will start the Expo development server. You'll see:
```
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█ Local:   exp://192.168.x.x:8081
█ LAN:     exp://192.168.x.x:8081
█ Tunnel:  exp://xxxx-xxxx.ngrok.io
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
```

### 2. Choose Your Platform

Once the server is running, press:
- **`i`** - Run on iOS Simulator
- **`a`** - Run on Android Emulator
- **`w`** - Run on Web Browser
- **`j`** - Run on web in debug mode

## Project Structure

```
app/
├── _layout.tsx          Root navigation layout
├── index.tsx            Home screen
└── (screens)/          Future app screens here

components/
├── Button.tsx           Example button component
├── Card.tsx             Example card component
└── index.ts            Component exports

global.css              Tailwind directives
tailwind.config.js      Tailwind configuration
babel.config.js         Babel transpilation config
tsconfig.json           TypeScript configuration
app.json                Expo configuration
package.json            Dependencies
```

## Development Tips

### Adding New Screens

Create files in the `app/` directory using Expo Router conventions:

```tsx
// app/profile.tsx
import { View, Text } from 'react-native';

export default function Profile() {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Text className="text-2xl font-bold">Profile Screen</Text>
    </View>
  );
}
```

Access it at `/profile` automatically!

### Using NativeWind Styles

```tsx
import { View, Text } from 'react-native';

export default function Component() {
  return (
    <View className="flex-1 bg-slate-100 p-4">
      <Text className="text-xl font-bold text-slate-900">
        Styled with Tailwind!
      </Text>
    </View>
  );
}
```

### Creating Reusable Components

Extend the component library in `components/`:

```tsx
// components/Badge.tsx
import { View, Text, ViewProps } from 'react-native';

interface BadgeProps extends ViewProps {
  label: string;
  variant?: 'primary' | 'secondary';
}

export function Badge({ label, variant = 'primary' }: BadgeProps) {
  return (
    <View className={`px-3 py-1 rounded-full ${
      variant === 'primary' ? 'bg-blue-500' : 'bg-slate-200'
    }`}>
      <Text className={variant === 'primary' ? 'text-white' : 'text-slate-900'}>
        {label}
      </Text>
    </View>
  );
}
```

## Installing Additional Packages

```bash
npm install package-name
```

## Building for Production

### Generate APK/AAB (Android)
```bash
eas build --platform android
```

### Generate IPA (iOS)
```bash
eas build --platform ios
```

Requires Expo account and setup. See [EAS Build Docs](https://docs.expo.dev/eas-build/introduction/)

## Useful Commands

| Command | Description |
|---------|------------|
| `npm start` | Start dev server |
| `npm run ios` | Run on iOS simulator |
| `npm run android` | Run on Android emulator |
| `npm run web` | Run on web browser |
| `npm test` | Run tests |
| `npm run lint` | Lint code |

## Troubleshooting

### Port Already in Use
```bash
npm start -- --port 8082
```

### Clear Cache
```bash
npm start -- --clear
```

### Reinstall Dependencies
```bash
rm -rf node_modules
npm install --legacy-peer-deps
```

## Next Steps

1. **Design your app screens** - Add more screens in `app/`
2. **Create components** - Build reusable UI components in `components/`
3. **Add navigation** - Set up app navigation structure
4. **Connect to API** - Integrate with your backend
5. **Test on devices** - Use Expo Go app to test on real devices

## Resources

- 📚 [Expo Documentation](https://docs.expo.dev)
- 📱 [React Native Docs](https://reactnative.dev)
- 🎨 [NativeWind Docs](https://www.nativewind.dev)
- 🧭 [Expo Router Docs](https://expo.dev/router)
- 🎯 [Tailwind CSS Docs](https://tailwindcss.com)

Happy coding! 🚀
