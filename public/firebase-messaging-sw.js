importScripts(
  "https://www.gstatic.com/firebasejs/9.0.2/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.2/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyCJByqDK3ezbM9VhgBxEFyeEiJn82cdo38",
  authDomain: "pwa-study-470e0.firebaseapp.com",
  projectId: "pwa-study-470e0",
  storageBucket: "pwa-study-470e0.appspot.com",
  messagingSenderId: "49616028156",
  appId: "1:49616028156:web:066a5dcaec635f01547279",
  measurementId: "G-D84RY4V2RR",
});

const messaging = firebase.messaging();

// background
messaging.onBackgroundMessage((payload) => {
  console.log("Received background message:", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/icons/icon512_rounded.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// foreground
messaging.onMessage((payload) => {
  console.log("Message received in foreground:", payload);
  alert(`New Message: ${payload.notification.title}`);
});

// 클릭시
self.addEventListener("notificationclick", (event) => {
  console.log("Notification clicked:", event.notification);
  event.notification.close();

  event.waitUntil(clients.openWindow("https://pwa-study-xi.vercel.app/fcm"));
});
