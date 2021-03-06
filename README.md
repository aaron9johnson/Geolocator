# Geolocator
Find your location and IP address using the web or your phone!!

## Quickstart
```yarn install && yarn web:start```

## Environment Setup
- ```brew install node ``` - make sure it is Node 10 or newer.
- ```brew install watchman```
- ```brew install yarn```

iOS:
- install Xcode via the Mac App Store (This includes the simulator)
- install Xcode Command Line Tools

## Running Application

### Web
```yarn install```
```yarn web:start```

### iOS
1) Bundle iOs: ```react-native bundle --dev false --entry-file index.js --bundle-output ios/main.jsbundle --platform ios```
2) Open Geolocator.xcodeproj in Xcode and run.

### Development
To start Metro(JavaScript bundler): ```npx react-native start```

## iOS Troubleshooting:
Build failed:
1) Open Xcode.
2) File > Project Settings > Build System > switch dropdown to Legacy Build System.

Missing config.h file:
1) Close Xcode.
2) Open Terminal, go to your project's root folder and do:
```cd node_modules/react-native/third-party/glog-{X}.{X}.{X}/```
3) Run the configure script:
```./configure```

Missing main.jsbundle:
1) Open XCode
2) Project in the Navigator -> apps target -> Build Phases -> Copy Bundle Resources -> add main.jsbundle

iOS "Could not find iPhone 6 simulator":
1) go to: node_modules/react-native/local-cli/runIOS/findMatchingSimulator.js
2) replace: ```if (version.indexOf('iOS') !== 0 )``` with ```if (!version.includes("iOS" ))```
3) replace: ```if (simulator.availability !== '(available)')``` with ```if (simulator.isAvailable !== true)```

Unknown argument type ‘attribute’ in method:
1) go to /node_modules/react-native/React/Base/RCTModuleMethod.mm
2) search for ```static BOOL RCTParseUnused(const char **input)``` (about line 100)
3) after this line
 ```return RCTReadString(input, “__attribute__((unused))”) ||```
add
```RCTReadString(input, “__attribute__((__unused__))”) ||```

## Screenshots

### Web
![Alt text](/screenshots/web-start.png "Web Start")
---
![Alt text](/screenshots/web-end.png "Web End")

### iOs
![Alt text](/screenshots/iOS-load.PNG "iOS Load")
---
![Alt text](/screenshots/iOS-start.PNG "iOS Start")
---
![Alt text](/screenshots/iOS-end.PNG "iOS End")

# Project Setup (https://github.com/ReyHaynes/react-redux-web-native)

```git clone git@github.com:ReyHaynes/react-redux-web-native.git Geolocator```

## react-redux-web-native README

React + Redux Web Native App
--------------------

The goal of this build is to create a react web and native app using a shared codebase while keeping the integrity of the `create-react-app` and `react-native` build structure...because, who want's to waste time creating the build process or updating custom functionality each version. 🤔

![App Preview](https://i.imgur.com/vyLoIxd.png)

### Quick Start
```
git clone git@github.com:ReyHaynes/react-redux-web-native.git
cd react-redux-web-native
yarn install
yarn app:eject
```

```
# Run Web App
yarn web:start

# Run iOS App
yarn ios:start

# Run Android App
yarn android:start
```

### A More Detailed Start

1. Clone this repo:  
`git clone git@github.com:ReyHaynes/react-redux-web-native.git <AppNameHere>`

2. `cd` into project and remove the `.git` folder and create your own repo with `git init`.
```
cd <AppNameHee>
rm -rf .git
git init
```

3. Rename your app in the `app.json` file.

4. Install dependencies with `yarn install` or `npm install`.

5. Build the `/ios` and `/android` native files with `yarn app:eject`

6. Run web and native apps.
```
yarn web:start
yarn ios:start
yarn android:start
```

7. Code the greatest app of all time. 🤔

### Requirements

This is a `node` based build app so having node installed is an obvious requirement!

`node` version 8+ highly recommended.

`react-native` requires you to have the proper emulators installed for your targeted operating system. Check out the [React Native docs at Facebook](https://facebook.github.io/react-native/docs/getting-started.html) to get the install instructions. Make sure to use the instructions under the "Building Projects with Native Code" tab.

(Optional) `npm` is installed with node but I recommend `yarn` package management. Instruction to install Yarn [can be found here](https://yarnpkg.com/en/docs/install).

### Workflow
```
Index (entry files)
    -> App <- (Storage & Routing)  
        -> Screens -> Components  
        -> Actions -> Reducers
```
`index.js (entry files)`: The index entry files shouldn't need editing.

`App.js`: The highest level component. Should be clean and contain the main routes for the app.

`storage/ & routing/`: Manages the storage and routing for web and native. Shouldn't need editing unless necessary.

`screens/<ScreenName>.js`: The highest level component for each screen in your app. Should contain all of the pure logic to be passed down to components. Screens should also contain connection to the redux store through `connect()`.

`components/<ComponentName>/`: Pure, stacked or presentational components that will be used in *Screens*. Presentational components should include `.js`, `.ios.js` & `.android.js` files to work across native and web builds.

### Issues / Gotchas

###### Testing
Unfortunately, since the testing environments are different for native and web, and there's no real way for jest to interpret the difference from web and native renders. Any testing you would like to do must be done within `__tests__/<native/web>` directories.

###### File Naming
You will want to separate presentational containers (anything with `render()` for the most part). Since there is no graceful way to determine native and web platform and there is no `.web.js` file extension without hacking into react itself, presentational containers for the Web should be under the main `.js` file while Native should be under `.ios.js` and `.android.js`.

Please note, that if you are targeting both platforms, you will be **required** to use both file name extensions since it will default to the main file if the extension does not exist.

###### Native Code Sharing
In the case of having React-Native code that work on both platforms, if you don't want to duplicate the code in 2 files, just import the code from the main targeted platform file.

```javascript
// src/App.android.js imports the iOS version so there is no need to duplicate code.
import App from './App.ios'
export { App as default }
```

### FAQ

###### How do I rename the app?
If you already have the `/ios` & `/android` directories installed, in order to rename the app, delete these directories and run `react-native eject`.

To do this in one command, use `yarn app:eject` or `npm run app:eject`.

###### How to link native code?
Linking code is similar to doing it with the `react-native`. You can run `yarn app:link`, `npm run app:link` or `react-native link`.

If you *eject* your app, please remember to re-link your native code again.

###### Shouldn't I commit the `/ios` & `/android` directories?
You absolutely should. It's a good idea to remove the `.gitignore` for

###### Why is Expo not included?
[Expo](https://expo.io) is a great tool and I highly suggest you take a look at it, or even [integrate](https://github.com/expo/xde#converting-an-existing-project-to-work-with-expo) if it suits your project, but...unfortunately some of Expo's deficiencies were deal breakers (https://docs.expo.io/versions/latest/introduction/why-not-expo.html).

### Additional Options

Commands can be executed with `yarn <options>` or `npm run <options>`

| Options | Description |
| --------- | ----------- |
| install | Install project dependencies. |
| test | Run tests in `/__tests__` directory. |
| | |
| web:start | Start React Web |
| web:build | Generate build for React Web |
| web:test | Run test watcher for React Web from `/__tests__/web` directory. |
| web:eject | Eject `create-react-app` for custom React Web |
| | |
| app:start | Start background process for React Native |
| app:test | Run test watcher for React Native from `/__tests__/native` directory. |
| app:eject | (Re)Build `/ios` & `/android` directories. |
| app:link | Link native libraries. |
| | |
| ios:start | Run iOS emulator. Similar to `react-native run-ios` |
| ios:bundle | Bundle with entry file index.js |
| ios:build | Run iOS emulator with a "Release" configuration. |
| | |
| android:start | Run Android emulator. Similar to `react-native run-android` |
| android:clean | Fix building android if preDexDebug error |
| android:bundle | Bundle with entry file index.js |
| android:build | Build with a "Release" configuration. |
| android:signkey | Generate keystore android |
| android:signer | To sign app-release-unsigned.apk with random keystore |

### Progress:
- [x] Merge `create-react-app` & `react-native`
- [x] Create Sample App (Web & Native)
- [x] Implement Redux sample Action and Reducer
- [x] Data Storage via `redux-persist`
- [ ] Add Electron (Desktop App Build)
- [ ] Create sample testing suite
- [ ] Create web/native compatible components
- [ ] Themify web/native components
- [ ] Better clone process

### Contribute

Please...if you find any issues or improvements needed, feel free to submit your improvements!

Sharing is caring! 😇
