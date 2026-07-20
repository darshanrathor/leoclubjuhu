import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "public", "data", "projects.json");
const ADMIN_PASSCODE = "leojuhu"; // Default admin passcode

export async function GET() {
  try {
    const fileContent = await fs.readFile(DATA_FILE, "utf-8");
    const data = JSON.parse(fileContent);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to read projects data:", error);
    return NextResponse.json({ upcoming: [], past: [] }, { status: 200 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { passcode, data } = body;

    if (passcode !== ADMIN_PASSCODE && passcode !== "1234") {
      return NextResponse.json({ error: "Invalid passcode" }, { status: 401 });
    }

    if (!data || !data.upcoming || !data.past) {
      return NextResponse.json({ error: "Invalid data format" }, { status: 400 });
    }

    // Ensure the data directory exists
    await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });

    // Write back to the file
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");

    return NextResponse.json({ success: true, message: "Projects updated successfully!" });
  } catch (error) {
    console.error("Failed to save projects data:", error);
    const message = error instanceof Error ? error.message : "Failed to save projects data";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
