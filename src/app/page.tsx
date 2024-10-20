"use client";
import { sendNotificationsToAll } from "@/utils/sendNotify";
import { setTokenHandler } from "@/utils/firebase";

export default function Home() {
  const handlePermissionRequest = async () => {
    Notification.requestPermission().then((permission) => {
      if (permission !== "granted") {
        console.log("푸시 거부됨");
      } else {
        setTokenHandler();
        console.log("푸시 승인됨");
      }
    });
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
