"use client";

import { initializeApp } from "firebase/app";
import { getMessaging, onMessage, getToken } from "firebase/messaging";
import { useEffect } from "react";

const initFCM = async () => {
  const permission = await Notification.requestPermission();
  if (permission !== "granted") return;

  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  };
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const messaging = getMessaging(firebaseApp);

  getToken(messaging, { vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPI })
    .then((currentToken) => {
      if (currentToken) {
        console.log(currentToken);
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });

  onMessage(messaging, (payload) => {
    console.log("Message received. ", payload);
  });
};

export default function Home() {
  useEffect(() => {
    initFCM();
  }, []);

  return (
    <div>
      <p>Hi this is pwa-study home</p>
    </div>
  );
}
