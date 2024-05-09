import { ExpoConfig, ConfigContext } from '@expo/config'

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Milvasoft Expo BoilerPalte',
  description: 'Milvasoft Expo BoilerPalte Description',
  slug: 'expo-test',
  owner: 'tanveer465',
  scheme: 'com.expo-test',
  version: '1.0.0',
  sdkVersion: '50.0.0',
  orientation: 'portrait',
  icon: './src/assets/images/icon.png',
  userInterfaceStyle: 'automatic',
  runtimeVersion: {
    policy: "sdkVersion"
  },
  assetBundlePatterns: [
    './src/assets/images/*'
  ],
  locales: {
    tr: './src/assets/languages/turkish.json',
    en: './src/assets/languages/english.json'
  },
  splash: {
    image: './src/assets/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  ios: {
    bundleIdentifier: 'com.expo-test',
    buildNumber: '1.0.0',
    infoPlist: {
      CFBundleAllowMixedLocalizations: true
    }
  },
  web: {
    bundler: "metro"
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './src/assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff'
    },
    package: 'com.expo-test',
    versionCode: 1,
  },
  updates: {
    enabled: true,
    url: "https://u.expo.dev/efcca4bc-70ec-4565-bc82-ea2eaff31a0a"
  },
  
  extra:{
    eas:{
      projectId: "efcca4bc-70ec-4565-bc82-ea2eaff31a0a"
    }
  }

})
