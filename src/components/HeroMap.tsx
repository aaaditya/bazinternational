import { heroLanes, heroOrigin } from "@/content/site";
import { MAP, MAP_DOTS_PATH } from "@/content/worldDots";

type Point = { x: number; y: number };

function project(lat: number, lon: number): Point {
  return {
    x: (lon - MAP.lonMin) * MAP.scale,
    y: (MAP.latMax - lat) * MAP.scale,
  };
}

function arc(from: Point, to: Point) {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;
  const dist = Math.hypot(to.x - from.x, to.y - from.y);
  const cy = my - dist * 0.28;
  return `M${from.x.toFixed(1)} ${from.y.toFixed(1)} Q${mx.toFixed(1)} ${cy.toFixed(1)} ${to.x.toFixed(1)} ${to.y.toFixed(1)}`;
}

export function HeroMap() {
  const origin = project(heroOrigin.lat, heroOrigin.lon);
  const lanes = heroLanes.map((lane, index) => {
    const point = project(lane.lat, lane.lon);
    return { ...lane, point, d: arc(origin, point), delay: 0.4 + index * 0.25, dur: 5 + index * 0.7 };
  });

  return (
    <svg
      viewBox={`0 0 ${MAP.width} ${MAP.height}`}
      className="h-auto w-full"
      role="img"
      aria-label="Global freight routes connecting major trade hubs"
    >
      <defs>
        <linearGradient id="arc-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#f59e0b" stopOpacity="1" />
          <stop offset="1" stopColor="#d97706" stopOpacity="0.7" />
        </linearGradient>
        <radialGradient id="map-fade" cx="50%" cy="50%" r="65%">
          <stop offset="0.55" stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id="map-mask">
          <rect width={MAP.width} height={MAP.height} fill="url(#map-fade)" />
        </mask>
      </defs>

      <g mask="url(#map-mask)">
        <path
          d={MAP_DOTS_PATH}
          fill="none"
          stroke="#1a6b7a"
          strokeOpacity="0.4"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
      </g>

      {lanes.map((lane) => (
        <g key={lane.name}>
          <path d={lane.d} fill="none" stroke="#d97706" strokeOpacity="0.15" strokeWidth="1" />
          <path
            d={lane.d}
            pathLength={1}
            fill="none"
            stroke="url(#arc-grad)"
            strokeWidth="1.6"
            strokeLinecap="round"
            className="arc-draw"
            style={{ animationDelay: `${lane.delay}s` }}
          />
          <circle r="2.8" fill="#082047">
            <animateMotion
              dur={`${lane.dur}s`}
              begin={`${lane.delay + 1.2}s`}
              repeatCount="indefinite"
              path={lane.d}
              keyPoints="0;1"
              keyTimes="0;1"
              calcMode="linear"
            />
          </circle>

          <circle cx={lane.point.x} cy={lane.point.y} r="3" fill="#d97706" />
          <text
            x={lane.point.x}
            y={lane.point.y - 8}
            textAnchor="middle"
            className="hidden fill-sea-deep/85 text-[10px] font-medium tracking-wide sm:block"
          >
            {lane.name}
          </text>
        </g>
      ))}

      <g>
        <circle cx={origin.x} cy={origin.y} r="6" fill="#f59e0b" className="pulse-ring" />
        <circle cx={origin.x} cy={origin.y} r="6" fill="#f59e0b" className="pulse-ring" style={{ animationDelay: "1.3s" }} />
        <circle cx={origin.x} cy={origin.y} r="5" fill="#fff" stroke="#d97706" strokeWidth="2.5" />
      </g>
    </svg>
  );
}
