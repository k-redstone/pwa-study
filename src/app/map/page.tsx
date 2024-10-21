"use client";

import { useSearchParams } from "next/navigation";
import GoogleMap from "@/component/GoogleMap";
import { useState } from "react";

export default function MapPage() {
  const searchParams = useSearchParams();
  const [language] = useState<string>(searchParams.get("lang") || "ko");

  const handleLanguageChange = (newLanguage: string) => {
    if (newLanguage !== language) {
      window.location.href = `/map?lang=${newLanguage}`;
    }
  };

  return (
    <div className="flex flex-col gap-y-4">
      <h1>This page using google map</h1>
      <h2>지도 언어 바꾸기</h2>
      <span>현재언어 {language}</span>

      <button type="button" onClick={() => handleLanguageChange("ja")}>
        일어
      </button>
      <button type="button" onClick={() => handleLanguageChange("zh")}>
        중어
      </button>
      <button type="button" onClick={() => handleLanguageChange("ko")}>
        한국어
      </button>
      <GoogleMap language={language} />
    </div>
  );
}
