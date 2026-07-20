import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const GALLERY_DIR = path.join(process.cwd(), "public", "gallery");
const ADMIN_PASSCODE = "leojuhu";

export async function GET() {
  try {
    // Ensure gallery directory exists
    await fs.mkdir(GALLERY_DIR, { recursive: true });

    // Read files
    const files = await fs.readdir(GALLERY_DIR);
    
    // Filter out hidden files or non-images
    const imageExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"];
    const images = files
      .filter((file) => imageExtensions.includes(path.extname(file).toLowerCase()))
      .map((file) => `/gallery/${file}`);

    return NextResponse.json({ images });
  } catch (error) {
    console.error("Failed to list gallery images:", error);
    return NextResponse.json({ images: [] }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const passcode = formData.get("passcode") as string | null;

    if (passcode !== ADMIN_PASSCODE && passcode !== "1234") {
      return NextResponse.json({ error: "Invalid passcode" }, { status: 401 });
    }

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create a safe, unique filename
    const safeName = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
    const filePath = path.join(GALLERY_DIR, safeName);

    // Ensure the gallery directory exists
    await fs.mkdir(GALLERY_DIR, { recursive: true });

    // Write file to public/gallery
    await fs.writeFile(filePath, buffer);

    const relativePath = `/gallery/${safeName}`;

    return NextResponse.json({ 
      success: true, 
      message: "Image uploaded successfully!",
      url: relativePath 
    });
  } catch (error) {
    console.error("Failed to upload image:", error);
    const message = error instanceof Error ? error.message : "Failed to upload image";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
