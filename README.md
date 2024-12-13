# User Directory App

## Purpose
The **User Directory App** is a React Native application designed to manage user information efficiently. It provides features for viewing a list of users and detailed information about individual users. This app is ideal for learning or implementing the basics of React Native navigation, UI components, and API integration.

---

## Working

- Displays a list of users fetched from a remote API.
- Allows users to view detailed information about a selected user.
- Utilizes modern navigation techniques for seamless transitions between screens.
- Built using **Expo** for streamlined development and cross-platform compatibility.

---


## Development Process

1. **Create the Project**:
   - Initialize the React Native project using Expo.
   - Set up folders for components, screens, and utilities for better organization.

2. **Build Navigation**:
   - Implement navigation using `react-navigation` for transitioning between screens.
   - Add `AppNavigator.js` for managing routes.

3. **Design Screens**:
   - Create `UserListScreen.js` for displaying a list of users.
   - Create `UserDetailsScreen.js` for showing detailed user data.

4. **API Integration**:
   - Use a remote API to fetch user data.
   - Display the data dynamically on the screens.

5. **Test Locally**:
   - Test the app on an Android emulator, iOS simulator, or physical devices using Expo Go.

6. **Build**:
   - Use **EAS Build** to generate APK or AAB for Android and IPA for iOS.

---

## Local Setup Using Git Clone

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/user-directory-app.git
   cd user-directory-app
   ```

2. **Install Dependencies**:
   Make sure you have `npm` or `yarn` installed, then run:
   ```bash
   npm install
   # OR
   yarn install
   ```

3. **Run the Project**:
   Start the development server using Expo:
   ```bash
   expo start
   ```
   - Scan the QR code in the terminal with Expo Go (on Android or iOS).
   - Alternatively, press `a` to run on an Android emulator or `i` for an iOS simulator.

4. **Environment Setup** (if required):
   Add any API keys or environment variables needed for the app to function in a `.env` file.

---

## Building the APK

To generate an APK for the app:

1. **Install EAS CLI**:
   ```bash
   npm install -g eas-cli
   ```

2. **Login to Expo**:
   ```bash
   eas login
   ```

3. **Configure the Build**:
   Ensure `eas.json` is properly configured:
   ```json
   {
     "cli": {
       "version": ">= 3.0.0"
     },
     "build": {
       "production": {
         "android": {
           "buildType": "apk"
         }
       }
     }
   }
   ```

4. **Start the Build**:
   ```bash
   eas build -p android --profile production
   ```

5. **Download the APK**:
   Once the build is complete, download the APK from the link provided by Expo or the EAS dashboard.

---

## Contributing
Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Commit your changes.
4. Submit a pull request.

---

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
