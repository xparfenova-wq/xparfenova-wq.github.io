import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Антон Орешкин, визитка";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadOnest(weight: 400 | 500 | 600) {
  const url = `https://fonts.googleapis.com/css2?family=Onest:wght@${weight}&subset=cyrillic&display=swap`;
  const css = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    },
  }).then((r) => r.text());
  const match = css.match(
    /src: url\((https:\/\/[^)]+\.(?:woff2|ttf))\)/
  );
  if (!match) throw new Error("Onest font URL not found");
  const buf = await fetch(match[1]).then((r) => r.arrayBuffer());
  return buf;
}

export default async function Image() {
  const [w500, w600] = await Promise.all([loadOnest(500), loadOnest(600)]);

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
          fontFamily: "Onest",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,64,0,0.18) 0%, transparent 70%)",
          }}
        />
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
          <div
            style={{
              fontSize: "20px",
              color: "#1c1c1c",
              fontWeight: 500,
            }}
          >
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
              letterSpacing: "-0.015em",
            }}
          >
            Продакшн, IT-разработка, наставничество, AI. Соединяю людей,
            продюсирую идеи в результат.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "16px",
            color: "#6e6e6e",
            fontWeight: 500,
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
    {
      ...size,
      fonts: [
        { name: "Onest", data: w500, style: "normal", weight: 500 },
        { name: "Onest", data: w600, style: "normal", weight: 600 },
      ],
    }
  );
}
