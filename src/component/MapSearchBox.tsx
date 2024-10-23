import { useMapsLibrary, useMap } from "@vis.gl/react-google-maps";
import { useEffect, useRef } from "react";

export default function MapSearchBox() {
  const places = useMapsLibrary("places");
  const input = useRef<HTMLInputElement>(null);
  const map = useMap();
  useEffect(() => {
    if (!places || !input.current || !map) return;

    const newSearchBox = new google.maps.places.SearchBox(input.current);
    newSearchBox.addListener("places_changed", () => {
      const places = newSearchBox.getPlaces();
      if (places && places.length > 0) {
        const place = places[0];
        console.log("Selected place:", place);

        // 선택된 장소로 맵의 중심 이동
        if (place.geometry?.location) {
          map.setCenter(place.geometry.location);
          map.setZoom(15);
        }
      }
    });

    return () => {
      // 컴포넌트가 언마운트될 때 리스너 제거
      google.maps.event.clearInstanceListeners(newSearchBox);
    };
  }, [map, places]);

  return <input type="text" ref={input} placeholder="test" />;
}
