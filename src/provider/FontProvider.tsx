"use client";

import { useEffect, useState } from "react";

export default function FontProvider({ children }: React.PropsWithChildren) {
  // console.log(navigator.language);
  const [language, setLanguage] = useState<string>("pretendard");

  useEffect(() => {
    console.log(navigator.language);
    if (navigator.language === "en") {
      return setLanguage("geistSans");
    }
  }, [language]);

  return (
    <>
      <div>
        <div className={`font-${language}`}>
          <p>asdf</p>
          {children}
        </div>
      </div>
    </>
  );
}
