"use client";
import { sendNotificationsToAll } from "@/utils/sendNotify";
import { initializeApp } from "firebase/app";
import { getMessaging, onMessage, getToken } from "firebase/messaging";

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
    .then(async (currentToken) => {
      if (currentToken) {
        await fetch("/api/saveToken", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: currentToken }), // 발급받은 토큰
        });
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

const requestNotificationPermission = async () => {
  const permission = await Notification.requestPermission();
  if (permission !== "granted") {
    console.warn("Notification permission not granted.");
    return false;
  }
  return true;
};

export default function Home() {
  const handlePermissionRequest = async () => {
    const granted = await requestNotificationPermission();
    if (granted) {
      await initFCM();
    }
  };

  return (
    <div>
      <p>Hi this is pwa-study home</p>
      <button
        type="button"
        className="rounded-xl bg-orange-400 text-white px-5 py-2"
        onClick={() => sendNotificationsToAll()}
      >
        전체 알림 보내기
      </button>
      <button
        type="button"
        className="rounded-xl bg-orange-400 text-white px-5 py-2"
        onClick={() => handlePermissionRequest()}
      >
        권한 설정
      </button>
    </div>
  );
}
