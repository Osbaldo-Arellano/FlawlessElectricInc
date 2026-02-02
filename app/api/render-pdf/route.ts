import { NextRequest } from "next/server";
import puppeteer from "puppeteer";

export const runtime = "nodejs"; // puppeteer needs node runtime

export async function POST(req: NextRequest) {
  const { html, filename } = await req.json();

  if (!html || typeof html !== "string") {
    return new Response("Missing html", { status: 400 });
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();

    // Render
    await page.setContent(html, { waitUntil: "networkidle0" });

    await page.evaluate(() => document.fonts.ready);

    const pdf = await page.pdf({
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: "0in", right: "0in", bottom: "0in", left: "0in" },
    pageRanges: "1",
    });

    const ab: ArrayBuffer = Uint8Array.from(pdf).buffer;

    return new Response(ab, {
    headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename ?? "card"}.pdf"`,
    },
    });

  } finally {
    await browser.close();
  }
}
