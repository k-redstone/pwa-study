import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
  InfoWindow,
  AdvancedMarker,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";

import { useCallback, useState } from "react";
interface GoogleMapInterface {
  language: string;
}

// 객체로 변환

export default function GoogleMap({ language }: GoogleMapInterface) {
  const [markerRef, marker] = useAdvancedMarkerRef();

  const [infoWindowShown, setInfoWindowShown] = useState(false);

  // clicking the marker will toggle the infowindow
  const handleMarkerClick = useCallback(
    () => setInfoWindowShown((isShown) => !isShown),
    []
  );

  const handleClose = useCallback(() => setInfoWindowShown(false), []);

  const encodedHTML =
    "%0A%09%3Cdiv%20class%3D%22map_pop_dummy%22%3E%0A%09%09%3Cdiv%20class%3D%22map_pop_header%22%3E%0A%09%09%09%0A%09%09%09%3Cdiv%20class%3D%22map_pop_branch%22%3E%EB%AA%85%EB%8F%99%EB%A1%9C%EC%82%AC%ED%99%98%EC%A0%84%EC%86%8C%3C%2Fdiv%3E%0A%09%09%09%3Cdiv%20class%3D%22map_pop_close_bt%22%3E%0A%09%09%09%09%3Ca%20href%3D%22%23none%22%20onclick%3D%22setOverlayView%2815%29%22%3E%3Cdiv%20class%3D%22close%20icon%22%3E%3C%2Fdiv%3E%3C%2Fa%3E%0A%09%09%09%3C%2Fdiv%3E%0A%09%09%3C%2Fdiv%3E%0A%09%09%09%09%09%09%0A%09%09%3Cdiv%20class%3D%22map_pop_contents%22%3E%0A%09%09%09%3Cdiv%20class%3D%22map_pop_detail%22%3E%0A%09%09%09%09%3Cdiv%20class%3D%22map_pop_address%22%3E%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%A4%91%EA%B5%AC%20%EC%82%BC%EC%9D%BC%EB%8C%80%EB%A1%9C%20305%20%28%EC%B6%A9%EB%AC%B4%EB%A1%9C2%EA%B0%80%2C%20%EB%8F%99%EB%B6%81%EB%B9%8C%EB%94%A9%29%3C%2Fdiv%3E%0A%09%09%09%09%3Cdiv%20class%3D%22map_pop_phone%22%3E02-3789-5051%3C%2Fdiv%3E%0A%09%09%09%3C%2Fdiv%3E%0A%09%09%09%3Cdiv%20class%3D%22map_pop_currency%22%3E%0A%09%09%09%09%0A%09%09%3Cdiv%20class%3D%22map_pop_update%22%3E%EC%9D%B4%20%EC%A7%80%EC%A0%90%EC%9D%98%20%ED%99%98%EC%A0%84%EA%B0%80%EB%8A%A5%20%EC%97%AC%EB%B6%80%EB%8A%94%20%ED%99%95%EC%9D%B8%EB%90%98%EC%A7%80%20%EC%95%8A%EC%8A%B5%EB%8B%88%EB%8B%A4.%3Cbr%20%2F%3E%ED%99%98%EC%A0%84%EA%B0%80%EB%8A%A5%EC%97%AC%EB%B6%80%EB%A5%BC%20%EC%82%AC%EC%A0%84%EC%97%90%20%EC%A0%84%ED%99%94%EB%A1%9C%20%ED%99%95%EC%9D%B8%ED%95%98%EC%84%B8%EC%9A%94.%3C%2Fdiv%3E%0A%09%09%0A%09%09%09%3C%2Fdiv%3E%0A%09%09%09%3Cdiv%20class%3D%22map_pop_info%22%3E%0A%09%09%09%09%0A%09%09%3Cdiv%20class%3D%22map_pop_info_top%22%3E%0A%09%09%09%3Cdiv%20class%3D%22map_pop_t_hour%22%3E%EC%98%81%EC%97%85%EC%8B%9C%EA%B0%84%3C%2Fdiv%3E%0A%09%09%09%3Cdiv%20class%3D%22map_pop_hour%22%3E%3Cspan%20class%3D%22map_pop_weekday%22%3E%ED%8F%89%EC%9D%BC%3A%2008%3A30~19%3A00%3C%2Fspan%3E%3Cspan%20class%3D%22map_pop_bar2%22%3E%7C%3C%2Fspan%3E%3Cspan%20class%3D%22map_pop_sat%22%3E%ED%86%A0%EC%9A%94%EC%9D%BC%3A%2009%3A00~18%3A00%3C%2Fspan%3E%3Cspan%20class%3D%22map_pop_bar2%22%3E%7C%3C%2Fspan%3E%3Cspan%20class%3D%22map_pop_break%22%3E%ED%9C%B4%EC%9D%BC%3A%2010%3A00~18%3A00%3C%2Fspan%3E%3C%2Fdiv%3E%0A%09%09%3C%2Fdiv%3E%0A%09%09%0A%09%09%09%09%0A%09%09%3Cdiv%20class%3D%22map_pop_info_bottom%22%3E%0A%09%09%09%3Cdiv%20class%3D%22map_pop_t_message%22%3E%ED%99%98%EC%A0%84%EC%86%8C%20%EC%86%8C%EA%B0%9C%3C%2Fdiv%3E%0A%09%09%09%3Cdiv%20class%3D%22map_pop_message%22%3E%EC%B9%B4%ED%86%A1%EC%B9%9C%EA%B5%AC%EC%B6%94%EA%B0%80%3A%20rosa0034%0D%0A%EC%84%B8%EC%A2%85%ED%98%B8%ED%85%94%ED%9B%84%EB%AC%B8%20%EB%8C%80%EB%A1%9C%EB%B3%80.%20%EA%B0%80%EA%B2%8C%EC%95%9E%EC%A3%BC%EC%B0%A8%EA%B0%80%EB%8A%A5.%0D%0A%EA%B3%A0%EA%B0%9D%EC%97%90%EA%B2%8C%20%EC%A0%95%EC%A7%81%ED%95%9C%20%ED%99%98%EC%A0%84%EC%86%8C%EB%A5%BC%20%EC%A7%80%ED%96%A5%ED%95%A9%EB%8B%88%EB%8B%A4.%20%0D%0A%EC%8B%A4%EC%8B%9C%EA%B0%84%ED%99%98%EC%9C%A8%EC%9D%84%20%EC%A0%81%EC%9A%A9%ED%95%9C%20%ED%99%98%EC%A0%84%EC%86%8C%EB%A1%9C%20%EB%B3%80%EB%8C%80%ED%95%9C%20%EC%8B%9C%EA%B0%84%EB%90%9C%EC%9D%80%20%EC%A0%9C%ED%9A%8C%ED%95%99%EB%9D%BC%EB%9D%BC%EB%8A%94%20%EA%B0%80%EA%B2%8C%EC%95%9A%20%ED%99%88%EA%B0%81%EC%97%90%EB%8C%80%EC%9A%A9%ED%95%9C%20%EB%AA%85%EB%8F%99%EC%9D%98%20%ED%99%98%EC%A0%84%EC%9A%A9%ED%95%9C%20%EA%B3%B5%EB%B0%98%20%EC%9E%85%EB%8B%98%EC%9D%80%20%EC%A7%80%EC%83%81%EC%9D%98%20%EA%B0%80%EA%B2%8C%EC%95%9A%EC%9D%B4%EC%9A%A9%EC%9E%90%EC%9D%98%20%ED%99%98%EC%A0%84%EC%86%8C%EA%B0%9C%20%EB%90%9C%20%EC%9D%B8%ED%99%98%EC%A0%84%EC%9A%A9%ED%95%9C%20%EA%B3%B5%EB%B0%98%20%EA%B0%9C%EB%93%A4%EB%B9%84%EB%8A%94%20%EC%A0%9C%ED%9A%8C%EC%9D%80%20%EC%A0%80%EA%B0%9C%20%EC%9A%A9%EB%8B%A8%EC%9D%98%20%ED%9A%8D%EB%8F%99%EA%B0%9D%EC%9D%84%20%EC%9C%84%ED%95%9C%20%ED%99%98%EC%A0%84%EC%86%8C%EB%8A%94%20%EB%B6%80%ED%99%94%ED%95%9C%20%EB%B0%98%EB%B3%B5%EB%A5%BC%20%EB%B0%98%EB%B3%B5%EB%8B%A4.%20%0D%0A%EC%A3%BC%EC%8B%A4%EC%9E%90%EB%A5%BC%20%EC%97%AC%EB%B6%80%ED%95%9C%20%ED%99%98%EC%A0%84%EC%86%8C%EA%B0%9C%EB%AC%B4%EC%97%90%20%EB%8C%80%ED%99%94%ED%95%9C%20%ED%99%98%EC%A0%84%EC%86%8C%EB%8A%94%20%EC%9E%98%EB%9D%BC%20%EB%B0%98%EB%B3%B5%EC%9D%84%20%EB%B3%B5%EB%B0%98%EB%B0%98%EB%B3%B5%EC%9D%84%20%EC%97%86%EC%9D%B8%20%ED%95%A0%EC%9D%80%20%EA%B3%B5%EB%B0%98%EB%8A%94%20%EB%8F%99%EB%93%9C%ED%9B%84%EB%AC%B8%EC%8B%9D%20%ED%95%9C%EB%8F%99%EB%B3%B5%EB%A5%BC%20%EB%B0%98%EB%B3%B5%EB%8B%A4.%20%EC%9A%A9%EB%B0%98%ED%98%B8%EC%9A%A9%EC%9D%98%20%EC%A3%BC%EC%8B%A4%ED%95%9C%20%ED%99%98%EC%A0%84%EA%B0%80%EB%8A%A5%20%ED%99%95%EC%9D%B8%EB%90%98%EC%9A%94.%20%0D%0A%EC%9E%90%ED%95%99%ED%95%9C%20%ED%9B%84%EB%AC%B8%EC%9D%98%20%ED%99%98%EC%A0%84%EC%86%8C%EA%B0%9C%EB%8A%94%20%EB%8F%99%EB%93%9C%ED%9B%84%EB%AC%B8%EC%8B%9D%20%ED%99%98%EC%A0%84%EC%86%8C%EB%8A%94%20%EC%97%91%ED%9A%8C%EB%A7%88%EA%B0%80%20%ED%95%9C%EB%8F%99%EB%93%9C%ED%9B%84%EB%AC%B8%EC%8B%9D%EC%9D%84%20%ED%9A%A8%EB%8C%80%EC%84%B8%EB%8B%A4.%3C%2Fdiv%3E%0A%09%09%09%3C%2Fdiv%3E%0A%09%09%09%3C%2Fdiv%3E%0A%09%09%3C%2Fdiv%3E%0A%09%3C%2Fdiv%3E%0A";

  const htmlString: string = decodeURIComponent(encodedHTML);

  // HTML을 DOM 객체로 변환
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");

  // 필요한 데이터 추출

  const address = doc.querySelector(".map_pop_address") as HTMLElement;
  const phone = doc.querySelector(".map_pop_phone") as HTMLElement;
  const openingHours = doc.querySelector(".map_pop_hour") as HTMLElement;
  const message = doc.querySelector(".map_pop_message") as HTMLElement;

  const result = {
    address: address.innerText,
    phone: phone.innerText,
    openingHours: openingHours.innerText,
    message: message.innerText,
  };
  console.log(result);

  return (
    <APIProvider
      apiKey={process.env.NEXT_PUBLIC_GOOGLEMAP_API_KEY as string}
      region="KR"
      language={language}
    >
      <Map
        mapId={"DEMO_MAP_ID"}
        className="w-[360px] h-[360px]"
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
        <AdvancedMarker
          ref={markerRef}
          position={{ lat: 37.55753826, lng: 126.97717909 }}
          onClick={handleMarkerClick}
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
              <span>{result.phone}</span>
            </div>
          </InfoWindow>
        )}
      </Map>
    </APIProvider>
  );
}
