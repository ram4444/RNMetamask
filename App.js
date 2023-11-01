import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import './shim'
import { Platform } from 'react-native';
import { lightColors, createTheme, ThemeProvider } from '@rneui/themed';
import Component from "./components/MyComponent";


const theme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios,
    }),
  },
});


export default function App() {

  return (
    <ThemeProvider theme={theme}>
	    <Component />
    </ThemeProvider>
  );
}
