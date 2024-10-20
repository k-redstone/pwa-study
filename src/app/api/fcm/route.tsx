import admin from "@/utils/fcmAdmin";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { title, body }: { title: string; body: string } = await request.json();

  try {
    // Firestore에서 모든 사용자 토큰 가져오기
    const snapshot = await admin.firestore().collection("users").get();
    const tokens: string[] = [];
    snapshot.forEach((doc) => {
      const userData = doc.data();
      if (userData.fcmToken) {
        tokens.push(userData.fcmToken); // 사용자 토큰 저장
      }
    });

    const promises = tokens.map((token) => {
      const message = {
        notification: {
          title,
          body,
        },
        token, // 각 사용자에 대한 토큰
      };

      return admin.messaging().send(message); // 각 메시지 전송
    });

    const response = await Promise.all(promises);

    return NextResponse.json(
      { message: "Notifications sent", response },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
