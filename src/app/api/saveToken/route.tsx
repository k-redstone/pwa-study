import admin from "@/utils/fcmAdmin";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { token }: { token: string } = await request.json();

  try {
    const userId = "temp_user";
    await admin.firestore().collection("users").doc(userId).set(
      {
        fcmToken: token,
      },
      { merge: true }
    ); // 기존 데이터에 병합하여 저장

    return NextResponse.json(
      { message: "Token saved successfully." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
