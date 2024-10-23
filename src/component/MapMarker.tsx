import { useCallback, useState } from "react";
import {
  InfoWindow,
  AdvancedMarker,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";

interface MapMarkerProps {
  data: string;
}

export default function MapMarker({ data }: MapMarkerProps) {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [infoWindowShown, setInfoWindowShown] = useState<boolean>(false);

  const handleMarkerClick = useCallback(
    () => setInfoWindowShown((isShown) => !isShown),
    []
  );

  const handleClose = useCallback(() => setInfoWindowShown(false), []);

  return (
    <>
      <AdvancedMarker
        // clickable={true}
        ref={markerRef}
        position={{ lat: 37.55753826, lng: 126.97717909 }}
        onClick={() => handleMarkerClick()}
      />
      {infoWindowShown && (
        <InfoWindow
          anchor={marker}
          onClose={handleClose}
          headerContent={<h3>남산환전</h3>}
        >
          <div className="flex flex-col">
            <span className="py-2">
              주소: 서울특별시 중구 퇴계로 38 1층 (남창동 169-4)
            </span>
            <span>현재 환율 191.50원</span>
            <span>{data}</span>
          </div>
        </InfoWindow>
      )}
    </>
  );
}
