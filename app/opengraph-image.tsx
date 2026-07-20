import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

export const alt = "Leo Club of Juhu";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  let logoSrc = "";
  try {
    const logoData = await readFile(join(process.cwd(), "public/logo.png"), "base64");
    logoSrc = `data:image/png;base64,${logoData}`;
  } catch (error) {
    console.error("Failed to read logo for OG image:", error);
  }

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A192F",
          width: "100%",
          height: "100%",
          padding: "40px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Subtle decorative gold borders */}
        <div
          style={{
            position: "absolute",
            inset: "20px",
            border: "2px solid rgba(242, 183, 5, 0.3)",
            borderRadius: "16px",
            pointerEvents: "none",
          }}
        />

        {logoSrc && (
          <img
            src={logoSrc}
            alt="Leo Club of Juhu logo emblem"
            width={180}
            height={180}
            style={{
              marginBottom: "30px",
              borderRadius: "50%",
              border: "4px solid #F2B705",
              backgroundColor: "white",
            }}
          />
        )}
        
        <h1
          style={{
            fontSize: "72px",
            fontWeight: 800,
            color: "#ffffff",
            margin: "0 0 10px 0",
            textTransform: "uppercase",
            letterSpacing: "-1px",
          }}
        >
          Leo Club <span style={{ color: "#F2B705" }}>Juhu</span>
        </h1>

        <p
          style={{
            fontSize: "28px",
            fontWeight: 600,
            color: "#8892b0",
            margin: "0 0 20px 0",
            textTransform: "uppercase",
            letterSpacing: "4px",
          }}
        >
          Lift • Love • Lead
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "rgba(255, 255, 255, 0.6)",
            margin: 0,
            letterSpacing: "1px",
          }}
        >
          Youth wing of Lions Clubs International • Mumbai, India
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
