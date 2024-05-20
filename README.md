# React Firebase Chat Application

This project is a Chat Application built using React for the frontend and Firebase for backend services, including authentication, real-time database, and storage.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Project Structure](#project-structure)
- [Firebase Configuration](#firebase-configuration)
- [Available Scripts](#available-scripts)
- [License](#license)

## Features

- User authentication with Firebase Authentication (Google Sign-In)
- Real-time messaging with Firebase Firestore


## Tech Stack

- **Frontend**: React, Redux, CSS
- **Backend**: Firebase (Firestore, Authentication, Storage)

## Setup Instructions

### Prerequisites

- Node.js (v14 or above)
- npm or yarn
- Firebase account

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/shreya-ghimire/chatapp.git
    cd react-firebase-chatapp
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Firebase Setup:**

    - Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
    - Enable Firestore Database.
    - Enable Firebase Authentication (Google Sign-In).
    - Enable Firebase Storage for file uploads.
    - Copy the Firebase config object from your project settings.

4. **Create a `.env` file in the root directory and add your Firebase configuration:**

    ```
    REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_app_id
    ```

5. **Start the development server:**

    ```sh
    npm start
    ```

    The application should now be running and accessible at `http://localhost:3000`.

## Project Structure

