import { useState, useRef, useEffect } from "react";

import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGL, { Marker } from "react-map-gl";

import styles from "../styles/Karte.module.css";

const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_GL_TOKEN;

const Karte = ({ programm, standortFilter, setFocus, flyToState }) => {
  const [lableIndex, setLableIndex] = useState(null);
  const mapRef = useRef();

  const standorteArray = programm.map((ort) => ort.standort?.name);
  const standorteSingleArray = [...new Set(standorteArray)];

  const standorteMasterArray = standorteSingleArray.map((ort) =>
    programm.filter((orte) => orte.standort?.name == ort)
  );

  const markerFunction = async (long, lat, ref) =>
    mapRef.current.flyTo(
      {
        center: [long, lat],
        zoom: 16,
      },
      standortFilter(),
      setTimeout(setFocus(ref), 200)
    );

  useEffect(() => {
    mapRef.current &&
      mapRef.current.flyTo({
        center: [flyToState[0].longitude, flyToState[0].latitude],
        zoom: 16,
      });
  }, [flyToState]);

  return (
    <div className={styles.karteWrapper}>
      <ReactMapGL
        ref={mapRef}
        initialViewState={{
          latitude: 48.80442744658279,
          longitude: 9.218195301506112,
          zoom: 15,
        }}
        mapboxAccessToken={TOKEN}
        width="100%"
        height="100%"
        touchRotate={false}
        cluster={true}
        clusterRadius={80}
        transitionDuration="200"
        mapStyle="mapbox://styles/markjulienhahn/clilien5800ep01qpemgf4hgq"
        maxBounds={[
          [9.194227354988222, 48.78549216876878],
          [9.243195449730148, 48.81764326669102],
        ]}
        maxZoom={16}
      >
        {standorteMasterArray.map((event, i) => (
          <Marker
            key={i}
            onClick={() =>
              markerFunction(
                event[0].standort.koordinaten.longitude,
                event[0].standort.koordinaten.latitude,
                event[0].standort.slug.current
              )
            }
            latitude={event[0].standort?.koordinaten.latitude}
            longitude={event[0].standort?.koordinaten.longitude}
          >
            <div
              className={
                event.length == 1 ? styles.markerSingle : styles.markerCluster
              }
              onMouseEnter={() => setLableIndex(i)}
              onMouseLeave={() => setLableIndex(null)}
            >
              {event.length == 1 ? "" : event.length}
            </div>
            {lableIndex == i && (
              <div className={styles.fahne}>
                <p>{event[0].standort.name}</p>
              </div>
            )}
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
};

export default Karte;
