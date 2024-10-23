import {
  useMapsLibrary,
  useMap,
  useApiIsLoaded,
} from "@vis.gl/react-google-maps";
import { useEffect, useRef, useState } from "react";

export default function MapSearchBox() {
  const places = useMapsLibrary("places");
  const input = useRef<HTMLInputElement>(null);
  const [apiError, setApiError] = useState<boolean>(false);
  const map = useMap();

  const mapAPIisLoaded = useApiIsLoaded();

  useEffect(() => {
    if (!places || !input.current || !map || !mapAPIisLoaded) return;

    try {
      const searchBox = new google.maps.places.SearchBox(input.current);

      searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();
        if (places && places.length > 0) {
          const place = places[0];

          if (place.geometry?.location) {
            map.setCenter(place.geometry.location);
            map.setZoom(15);
          }
        }
      });

      return () => {
        google.maps.event.clearInstanceListeners(searchBox);
      };
    } catch (error) {
      console.error("Google Maps API 로딩 중 오류가 발생했습니다:", error);
      setApiError(true);
    }
  }, [map, places]);

  if (apiError) {
    return (
      <div style={{ color: "red", textAlign: "center", marginTop: "20px" }}>
        Google Maps API를 불러오지 못했습니다. <br />
        API 키가 유효한지 확인해주세요.
      </div>
    );
  }

  return <input type="text" ref={input} placeholder="test" />;
}
