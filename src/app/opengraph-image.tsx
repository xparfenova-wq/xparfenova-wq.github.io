import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Антон Орешкин, визитка";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#fafafa",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "999px",
              background: "#000",
              color: "#fafafa",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 600,
              fontSize: "22px",
            }}
          >
            АО
          </div>
          <div style={{ fontSize: "20px", color: "#1c1c1c", fontWeight: 500 }}>
            Антон Орешкин · визитка
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <div
            style={{
              fontSize: "76px",
              fontWeight: 600,
              color: "#1c1c1c",
              letterSpacing: "-0.045em",
              lineHeight: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Антон Орешкин</span>
            <span style={{ color: "#6e6e6e", fontSize: "44px", marginTop: "12px" }}>
              21 год · МФТИ × Сколково
            </span>
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "#6e6e6e",
              fontWeight: 500,
              maxWidth: "880px",
              lineHeight: 1.35,
            }}
          >
            Продакшн, IT-разработка, наставничество, AI
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "16px",
            color: "#6e6e6e",
          }}
        >
          <div>antonoreshkin.ru</div>
          <div style={{ display: "flex", gap: "20px" }}>
            <span>Oreshkin Media Lab</span>
            <span>Synapt</span>
            <span>Automy AI</span>
            <span>АССИСТ+</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
