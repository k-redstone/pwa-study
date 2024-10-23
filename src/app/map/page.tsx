"use client";

import GoogleMap from "@/component/GoogleMap";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/component/ErrorFallback";
export default function MapPage() {
  const handleLanguageChange = (newLanguage: string) => {
    window.location.href = `/map?lang=${newLanguage}`;
  };

  return (
    <div className="flex flex-col gap-y-4">
      <h1>This page using google map</h1>
      <h2>지도 언어 바꾸기</h2>

      <button type="button" onClick={() => handleLanguageChange("ja")}>
        일어
      </button>
      <button type="button" onClick={() => handleLanguageChange("zh")}>
        중어
      </button>
      <button type="button" onClick={() => handleLanguageChange("ko")}>
        한국어
      </button>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<p>asdf</p>}>
          <div className="w-[22.5rem] h-[22.5rem]">
            <GoogleMap />
          </div>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
