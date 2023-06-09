import React, { useEffect, useRef } from 'react';

function KakaoClickMap({ onMapClick }) {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const { kakao } = window;

    const mapOption = {
      center: new kakao.maps.LatLng(37.56665, 126.9785),
      level: 8,
    };

    const map = new kakao.maps.Map(mapContainerRef.current, mapOption);

    const markerImage = new kakao.maps.MarkerImage(
      './images/points.png',
      new kakao.maps.Size(22, 32),
    );

    const marker = new kakao.maps.Marker({
      position: map.getCenter(),
      image: markerImage, // 새로운 마커 이미지 적용
    });
    marker.setMap(map);

    const onClick = mouseEvent => {
      const latlng = mouseEvent.latLng;
      marker.setPosition(latlng);
      onMapClick(latlng);
      const message = '';
      const resultDiv = document.getElementById('clickLatlng');
      resultDiv.innerHTML = message;
    };

    kakao.maps.event.addListener(map, 'click', onClick);

    return () => {
      kakao.maps.event.removeListener(map, 'click', onClick);
    };
  }, []);

  return (
    <div>
      <div
        id='map'
        ref={mapContainerRef}
        style={{ width: '95%', height: '300px' }}
      />
      <div id='clickLatlng' />
    </div>
  );
}

export default KakaoClickMap;
