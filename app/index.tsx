import { View, Text } from 'react-native';
import { Button } from '../components';
import '../global.css';

export default function Home() {
  return (
    <View className="flex-1 bg-white dark:bg-slate-950 items-center justify-center px-4">
      <View className="max-w-md">
        <Text className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-4">
          Moor Tracker
        </Text>
        <Text className="text-lg text-center text-slate-600 dark:text-slate-400 mb-8">
          Track your moorland adventures with style
        </Text>
        <Button size="large" className="mb-4">
          Get Started
        </Button>
        <Button variant="outline" size="large">
          Learn More
        </Button>
      </View>
    </View>
  );
}
