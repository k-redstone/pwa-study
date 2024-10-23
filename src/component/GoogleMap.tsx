"use client";

import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
  AdvancedMarker,
  useApiIsLoaded,
  useApiLoadingStatus,
} from "@vis.gl/react-google-maps";

import { useEffect, useState } from "react";
import MapMarker from "./MapMarker";
import { useSearchParams } from "next/navigation";
import MapSearchBox from "./MapSearchBox";

export default function GoogleMap() {
  const searchParams = useSearchParams();
  const mapAPIisLoaded = useApiIsLoaded();
  const status = useApiLoadingStatus();
  const [language] = useState<string>(searchParams.get("lang") || "ko");

  useEffect(() => {
    console.log(status);
    console.log(mapAPIisLoaded);
  });

  return (
    <APIProvider
      apiKey={process.env.NEXT_PUBLIC_GOOGLEMAP_API_KEY as string}
      region="KR"
      language={language}
    >
      <>
        <MapSearchBox />
        <Map
          colorScheme={"DARK"}
          mapId={"baae3adccbf5d8d"}
          defaultZoom={10}
          disableDefaultUI={true}
          defaultCenter={{ lat: 37.558005440695396, lng: 127.00869391175185 }}
          onCameraChanged={(ev: MapCameraChangedEvent) =>
            console.log(
              "camera changed:",
              ev.detail.center,
              "zoom:",
              ev.detail.zoom
            )
          }
        >
          <AdvancedMarker position={{ lat: 37.56284098, lng: 126.985037 }} />
          <MapMarker data="asd" />
        </Map>
      </>
    </APIProvider>
  );
}
