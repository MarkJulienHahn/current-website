import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import styles from "../styles/Karte.module.css";

export default function WeatherMap() {
  const mapContainerRef = useRef(null);
  const [isMapTilerSDKLoaded, setIsMapTilerSDKLoaded] = useState(false);
  const [isWeatherSDKLoaded, setIsWeatherSDKLoaded] = useState(false);

  const initializeMap = () => {
    if (
      !mapContainerRef.current ||
      typeof window === "undefined" ||
      !window.maptilersdk ||
      !window.maptilerweather
    ) {
      return;
    }

    // Initialize MapTiler SDK after the script is loaded
    window.maptilersdk.config.apiKey = process.env.NEXT_PUBLIC_WEATHER_KEY;
    const map = new window.maptilersdk.Map({
      container: mapContainerRef.current,
      style: {
        version: 8,
        sources: {},
        layers: [],
      },
      zoom: 1.9,
      center: [40, 40],
      interactive: false,
    });

    const weatherLayer = new window.maptilerweather.WindLayer({
      opacity: 0,
      speedFactor: 1,
      particleCount: 0,
      colorRamp: [
        "interpolate",
        ["linear"],
        ["get", "wind-speed"],
        0,
        "rgba(0,0,255,0.1)",
        10,
        "rgba(0,255,255,0.2)",
        20,
        "rgba(0,255,0,0.3)",
        30,
        "rgba(255,255,0,0.4)",
        40,
        "rgba(255,0,0,0.5)",
      ],
      updateInterval: 0,
    });

    map.on("load", () => {
      map.addLayer(weatherLayer);
      map.addLayer({
        id: "land-black",
        type: "fill",
        source: "composite", // Use composite source for default data
        layout: {},
        paint: {
          "fill-color": "rgba(0, 0, 0, 1)",
          "fill-opacity": 1,
        },
      });
    });
  };

  useEffect(() => {
    // Initialize map only when both SDKs are loaded
    if (isMapTilerSDKLoaded && isWeatherSDKLoaded) {
      initializeMap();
    }
  }, [isMapTilerSDKLoaded, isWeatherSDKLoaded]);

  return (
    <>
      <Head>
        <link
          href="https://cdn.maptiler.com/maptiler-sdk-js/v2.3.0/maptiler-sdk.css"
          rel="stylesheet"
        />
      </Head>

      {/* Load the MapTiler and Weather SDKs */}
      <Script
        src="https://cdn.maptiler.com/maptiler-sdk-js/v2.3.0/maptiler-sdk.umd.min.js"
        onLoad={() => setIsMapTilerSDKLoaded(true)}
      />
      <Script
        src="https://cdn.maptiler.com/maptiler-weather/v2.0.0/maptiler-weather.umd.min.js"
        onLoad={() => setIsWeatherSDKLoaded(true)}
      />

      <div id="map" ref={mapContainerRef} className={styles.map}></div>
    </>
  );
}
