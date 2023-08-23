# Facial recognition and fingerprint attendance system
UI design
https://www.figma.com/file/1ly0ehvFwLP0GWJdmYn7Bv/Final-year-projects?type=design&node-id=0%3A1&t=8xryCZi69VxNZNIs-1

# directories
# app-
contains the mobile app
this app was built with react native,


# to run type in terminal
npm install
expo start

# api-
# to run  follow procedure in api/process.txt

contains the api that uterlizes powerfull python libraries  perform facial and fingerprint detection 

# steps carried out to perform facial recognition
OpenCV (Open Source Computer Vision Library) is an open-source computer vision and machine learning software library. It provides a wide range of tools and functions for image and video processing, computer vision tasks, and machine learning applications. OpenCV is written in C++ and has Python bindings, making it a popular choice for developers working with visual data.

In your project, you used the OpenCV library to perform facial recognition for your attendance system. Here's a short note on how OpenCV was utilized:

**Facial Recognition with OpenCV:**

OpenCV includes a comprehensive set of tools for face detection and recognition, making it an ideal choice for implementing facial recognition systems. In your project, you utilized OpenCV to achieve the following:

1. **Face Detection:** OpenCV provides pre-trained cascades (like `haarcascade_frontalface_default.xml`) that allow you to perform face detection in images and video streams. These cascades use machine learning techniques to identify regions in an image that likely contain faces.

2. **Image Loading and Manipulation:** OpenCV enables you to load, manipulate, and process images efficiently. You used OpenCV to load images, convert them to grayscale for easier processing, and resize them if necessary.

3. **Face Recognition:** While OpenCV itself doesn't provide built-in face recognition algorithms, it offers the necessary tools for processing and comparing face features. You implemented the facial recognition process by calculating face descriptors (encodings) and comparing them to registered user encodings.

4. **Image Display:** OpenCV also facilitates displaying images, which can be helpful for debugging and user interfaces. However, in your project, you focused on backend processing and didn't display images in the user interface.

Overall, OpenCV's capabilities allowed you to integrate facial recognition into your attendance system efficiently. Keep in mind that while OpenCV provides face detection and some preprocessing, more advanced face recognition models (such as deep learning-based approaches) might provide even better accuracy, albeit at a potentially higher complexity.

# Steps carried out for fingerprint recognition

here are some few things we considered during the process of building



1. **Secure and Convenient:** Fingerprint authentication leverages the device's biometric capabilities, providing a secure and convenient way for users to access the app without entering passwords.

2. **Native Integration:** React Native's fingerprint module allows you to utilize the device's native fingerprint APIs, ensuring compatibility with various devices and operating systems.

3. **User Experience:** Fingerprint authentication enhances the user experience by reducing the need for manual input of sensitive information and making the app more user-friendly.

4. **Error Handling:** The module includes error handling to gracefully manage cases where fingerprint authentication fails or is unavailable on the device.

5. **Integration:** Integrating the fingerprint module into your React Native app is straightforward. You'll typically use a combination of native modules and React Native components to interact with the device's biometric system.

6. **Security:** Fingerprint data is stored securely in the device's secure enclave, ensuring that the biometric information remains safe and cannot be accessed by unauthorized parties.

**Implementation:**

To implement fingerprint authentication in your React Native app:

1. **Install Module:** Use the `react-native-fingerprint-scanner` package or similar packages available on npm to install the fingerprint module.

2. **Import and Use:** Import the fingerprint module in your app's codebase. Typically, you'll use it in combination with other React Native components to provide a seamless authentication flow.

3. **Request Fingerprint:** Use the module to request fingerprint authentication when required, such as during app login or specific sensitive actions.

4. **Error Handling:** Handle authentication successes and failures appropriately. Display user-friendly messages when authentication fails or when the device doesn't support fingerprint authentication.

5. **User Feedback:** Provide feedback to users during the authentication process, such as showing loading indicators or instructions.

**Considerations that brought about making it multifactor(face and fingers):**

- handling cases where devices do not support fingerprint authentication or when the user hasn't set up fingerprints on their device.
- prioritizing user privacy and data security when implementing biometric authentication.


# In Summary

# Attendance System with Facial Recognition

This project is a simple attendance system that uses facial recognition technology to mark attendance for registered users. It provides APIs for user registration, login, marking attendance, and viewing attendance reports.

## Features

- User Registration: Register new users with their matriculation number, name, department, and facial image.
- User Login: Recognize users using facial recognition during login.
- Mark Attendance: Mark attendance for recognized users and update their status.
- View Attendance Reports: Retrieve attendance data and view reports.

## Setup Instructions

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/attendance-system.git
   ```
 # setup api
2. Install the required dependencies:

   ```
   pip install flask openpyxl opencv-python-headless numpy
   ```

3. Run the Flask application:

   ```
   python app.py
   ```

4. Access the APIs using a tool like Postman or by integrating with your application.

## Endpoints

- `POST /register`: Register a new user by providing matriculation number, name, department, and facial image.

- `POST /login`: Perform user login using facial recognition. Provide matriculation number, name, and facial image.

- `POST /mark`: Mark attendance for a recognized user by providing matriculation number, name, and department.

- `POST /recognize`: Recognize a user's face and mark attendance if recognized.

- `GET /attendance`: View attendance reports.
# Setup app
1 Install dependencies
```
npm install
```
2 start app
```
expo start
```
3 run in web or scan qr code with expo app on your connected mobile device
before scanning ensure the mobile phone and system is connected to the same device
 to run in web.. 
 type
 ```
w
```
it will automatically open your browser

## File Structure

- `app.py`: The main Flask application.
- `attendance_report.xlsx`: Excel file containing attendance data.
- `users.xlsx`: Excel file containing user registration data.
- `haarcascade_frontalface_default.xml`: Haarcascade file for face detection.


