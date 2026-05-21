import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export function Map() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Координаты: ул. Крещатик, 34, Киев
    const position: L.LatLngTuple = [50.4473, 30.5204];

    // Инициализация карты
    const map = L.map(mapRef.current, {
      center: position,
      zoom: 16,
      zoomControl: false, // Отключаем стандартный зум для кастомного положения
      scrollWheelZoom: false, // Отключаем зум скроллом, чтобы не мешать прокрутке страницы
    });

    mapInstanceRef.current = map;

    // Добавляем кастомные кнопки зума в правый нижний угол
    L.control
      .zoom({
        position: "bottomright",
      })
      .addTo(map);

    // Добавляем стильный темный слой CartoDB Dark Matter
    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 20,
    }).addTo(map);

    // Кастомный золотой маркер (SVG)
    const customIcon = L.divIcon({
      html: `
        <div class="custom-map-marker">
          <div class="marker-pulse"></div>
          <div class="marker-pin">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="#c99350" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
        </div>
      `,
      className: "custom-div-icon",
      iconSize: [40, 40],
      iconAnchor: [20, 36],
    });

    // Добавляем маркер на карту с красивым бабблом информации
    const marker = L.marker(position, { icon: customIcon }).addTo(map);
    
    marker.bindPopup(`
      <div class="map-popup-content">
        <h3>КОРТ РАЙДЕР</h3>
        <p>вул. Хрещатик, 34, БЦ «Преміум»</p>
        <a href="https://google.com/maps/dir/?api=1&destination=50.4473,30.5204" target="_blank" rel="noopener noreferrer">
          Прокласти маршрут
        </a>
      </div>
    `, {
      closeButton: false,
      offset: [0, -24],
    });

    // Открываем баббл по умолчанию через небольшой таймаут
    setTimeout(() => {
      marker.openPopup();
    }, 500);

    return () => {
      // Очистка при размонтировании
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return <div ref={mapRef} className="leaflet-map-element" />;
}
