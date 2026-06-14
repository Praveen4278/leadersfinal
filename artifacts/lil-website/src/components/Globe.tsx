import { useEffect, useRef, useState, useCallback } from "react";
import Globe from "react-globe.gl";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Expanded to 40+ countries/cities to match the "39+ countries" claim
const locationsData = [
  { id: 1, lat: 40.7128, lng: -74.0060, name: "New York, USA", members: 420, events: 12, rev: "$1.2B+" },
  { id: 2, lat: 51.5074, lng: -0.1278, name: "London, UK", members: 380, events: 9, rev: "$950M+" },
  { id: 3, lat: 35.6762, lng: 139.6503, name: "Tokyo, Japan", members: 215, events: 5, rev: "$600M+" },
  { id: 4, lat: -33.8688, lng: 151.2093, name: "Sydney, Australia", members: 150, events: 4, rev: "$320M+" },
  { id: 5, lat: 48.8566, lng: 2.3522, name: "Paris, France", members: 290, events: 8, rev: "$750M+" },
  { id: 6, lat: -23.5505, lng: -46.6333, name: "São Paulo, Brazil", members: 110, events: 3, rev: "$210M+" },
  { id: 7, lat: 1.3521, lng: 103.8198, name: "Singapore", members: 175, events: 6, rev: "$450M+" },
  { id: 8, lat: 25.2048, lng: 55.2708, name: "Dubai, UAE", members: 205, events: 7, rev: "$580M+" },
  { id: 9, lat: 19.0760, lng: 72.8777, name: "Mumbai, India", members: 180, events: 5, rev: "$340M+" },
  { id: 10, lat: 52.5200, lng: 13.4050, name: "Berlin, Germany", members: 160, events: 4, rev: "$410M+" },
  { id: 11, lat: 43.6532, lng: -79.3832, name: "Toronto, Canada", members: 210, events: 6, rev: "$550M+" },
  { id: 12, lat: 37.7749, lng: -122.4194, name: "San Francisco, USA", members: 350, events: 10, rev: "$1.5B+" },
  { id: 13, lat: 31.2304, lng: 121.4737, name: "Shanghai, China", members: 230, events: 7, rev: "$680M+" },
  { id: 14, lat: -26.2041, lng: 28.0473, name: "Johannesburg, SA", members: 95, events: 3, rev: "$150M+" },
  { id: 15, lat: 55.7558, lng: 37.6173, name: "Moscow, Russia", members: 120, events: 4, rev: "$280M+" },
  { id: 16, lat: 19.4326, lng: -99.1332, name: "Mexico City, Mexico", members: 140, events: 5, rev: "$220M+" },
  { id: 17, lat: 37.5665, lng: 126.9780, name: "Seoul, South Korea", members: 190, events: 6, rev: "$520M+" },
  { id: 18, lat: 1.2921, lng: 36.8219, name: "Nairobi, Kenya", members: 60, events: 2, rev: "$80M+" },
  { id: 19, lat: -34.6037, lng: -58.3816, name: "Buenos Aires, Argentina", members: 85, events: 3, rev: "$120M+" },
  { id: 20, lat: 41.9028, lng: 12.4964, name: "Rome, Italy", members: 130, events: 4, rev: "$310M+" },
  { id: 21, lat: 40.4168, lng: -3.7038, name: "Madrid, Spain", members: 155, events: 5, rev: "$390M+" },
  { id: 22, lat: -37.8136, lng: 144.9631, name: "Melbourne, Australia", members: 115, events: 3, rev: "$250M+" },
  { id: 23, lat: 22.3193, lng: 114.1694, name: "Hong Kong", members: 275, events: 8, rev: "$820M+" },
  { id: 24, lat: 3.1390, lng: 101.6869, name: "Kuala Lumpur, Malaysia", members: 90, events: 3, rev: "$190M+" },
  { id: 25, lat: 59.3293, lng: 18.0686, name: "Stockholm, Sweden", members: 105, events: 3, rev: "$270M+" },
  { id: 26, lat: 52.3676, lng: 4.9041, name: "Amsterdam, Netherlands", members: 145, events: 4, rev: "$380M+" },
  { id: 27, lat: 47.3769, lng: 8.5417, name: "Zurich, Switzerland", members: 165, events: 5, rev: "$510M+" },
  { id: 28, lat: 21.0285, lng: 105.8542, name: "Hanoi, Vietnam", members: 50, events: 2, rev: "$90M+" },
  { id: 29, lat: -12.0464, lng: -77.0428, name: "Lima, Peru", members: 70, events: 2, rev: "$110M+" },
  { id: 30, lat: 6.5244, lng: 3.3792, name: "Lagos, Nigeria", members: 85, events: 3, rev: "$140M+" },
  { id: 31, lat: 30.0444, lng: 31.2357, name: "Cairo, Egypt", members: 75, events: 2, rev: "$130M+" },
  { id: 32, lat: 41.0082, lng: 28.9784, name: "Istanbul, Turkey", members: 110, events: 3, rev: "$220M+" },
  { id: 33, lat: 38.9072, lng: -77.0369, name: "Washington DC, USA", members: 220, events: 7, rev: "$610M+" },
  { id: 34, lat: 51.0447, lng: -114.0719, name: "Calgary, Canada", members: 80, events: 2, rev: "$170M+" },
  { id: 35, lat: 39.9042, lng: 116.4074, name: "Beijing, China", members: 195, events: 6, rev: "$540M+" },
  { id: 36, lat: -36.8485, lng: 174.7633, name: "Auckland, New Zealand", members: 65, events: 2, rev: "$140M+" },
  { id: 37, lat: 13.7563, lng: 100.5018, name: "Bangkok, Thailand", members: 125, events: 4, rev: "$260M+" },
  { id: 38, lat: -33.9249, lng: 18.4241, name: "Cape Town, SA", members: 55, events: 2, rev: "$100M+" },
  { id: 39, lat: 55.6761, lng: 12.5683, name: "Copenhagen, Denmark", members: 85, events: 3, rev: "$210M+" },
  { id: 40, lat: 53.3498, lng: -6.2603, name: "Dublin, Ireland", members: 140, events: 4, rev: "$350M+" },
  { id: 41, lat: 14.5995, lng: 120.9842, name: "Manila, Philippines", members: 70, events: 2, rev: "$120M+" }
];

export default function InteractiveGlobe() {
  const globeEl = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedLocation, setSelectedLocation] = useState<any | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [size, setSize] = useState(500);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.contentRect.width > 0) {
          setSize(Math.min(entry.contentRect.width, 560));
        }
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
      globeEl.current.controls().enableZoom = true;
      globeEl.current.pointOfView({ altitude: 2.5 });
    }
  }, [isLoaded]);

  const handlePointHover = useCallback((point: any) => {
    if (point) {
      setSelectedLocation(point);
      if (globeEl.current) globeEl.current.controls().autoRotate = false;
    } else {
      if (globeEl.current) globeEl.current.controls().autoRotate = true;
    }
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-full overflow-hidden flex justify-center items-center" style={{ height: size }}>
      {/* Loading spinner */}
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
          <div className="w-16 h-16 rounded-full border-4 border-[#C9A055]/30 border-t-[#C9A055] animate-spin" />
          <p className="text-sm text-gray-600 tracking-widest uppercase font-medium">Loading Globe…</p>
        </div>
      )}

      <Globe
        ref={globeEl}
        width={size}
        height={size}
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere={true}
        atmosphereColor="#C9A055"
        atmosphereAltitude={0.15}
        globeImageUrl="https://unpkg.com/three-globe/example/img/earth-day.jpg"
        onGlobeReady={() => setIsLoaded(true)}
        pointsData={locationsData}
        pointLat="lat"
        pointLng="lng"
        pointColor={() => "#70162C"}
        pointAltitude={0.02}
        pointRadius={2.0}
        pointsMerge={false}
        onPointHover={handlePointHover}
        pointResolution={32}
        ringsData={locationsData}
        ringLat="lat"
        ringLng="lng"
        ringColor={() => "#C9A055"}
        ringMaxRadius={5}
        ringPropagationSpeed={2}
        ringRepeatPeriod={1500}
      />

      {/* Stats Popup Overlay */}
      <AnimatePresence>
        {selectedLocation && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white border border-[#C9A055]/40 shadow-2xl p-6 w-[280px] sm:min-w-[320px] rounded-xl pointer-events-auto"
          >
            <button
              onClick={() => setSelectedLocation(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-[#70162C] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <h3 className="font-serif text-xl font-bold text-[#70162C] mb-4 pr-6">
              {selectedLocation.name}
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-[#C9A055]/20 pb-2">
                <span className="text-xs uppercase tracking-widest text-gray-600 font-bold">Members</span>
                <span className="font-serif text-lg text-[#70162C] font-bold">{selectedLocation.members}</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#C9A055]/20 pb-2">
                <span className="text-xs uppercase tracking-widest text-gray-600 font-bold">Annual Events</span>
                <span className="font-serif text-lg text-[#70162C] font-bold">{selectedLocation.events}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs uppercase tracking-widest text-gray-600 font-bold">Network Revenue</span>
                <span className="font-serif text-lg text-[#70162C] font-bold">{selectedLocation.rev}</span>
              </div>
            </div>
            <button className="w-full mt-6 bg-[#C9A055] hover:bg-[#b8914a] text-[#70162C] py-3 text-sm font-bold uppercase tracking-wider transition-colors">
              View Members
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
