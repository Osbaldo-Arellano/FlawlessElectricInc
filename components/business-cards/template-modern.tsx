import { BusinessCardData, DIMENSIONS, DimensionKey } from "./types";

interface TemplateModernProps {
  data: BusinessCardData;
  dimensions: DimensionKey;
  side: "front" | "back";
}

export function TemplateModern({ data, dimensions, side }: TemplateModernProps) {
  const dim = DIMENSIONS[dimensions];

  if (side === "back") {
    return (
      <div
        className="bg-white flex flex-col items-center justify-center p-4 border border-gray-200"
        style={{
          width: dim.widthPx,
          height: dim.heightPx,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {data.logoUrl && (
          <img
            src={data.logoUrl}
            alt="Logo"
            className="max-h-12 max-w-24 object-contain mb-2"
          />
        )}
        <p className="text-xs text-gray-500 text-center">{data.tagline}</p>
      </div>
    );
  }

  return (
    <div
      className="bg-white flex flex-col justify-between p-4 border border-gray-200"
      style={{
        width: dim.widthPx,
        height: dim.heightPx,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Top section with logo */}
      <div className="flex items-start justify-between">
        {data.logoUrl && (
          <img
            src={data.logoUrl}
            alt="Logo"
            className="max-h-8 max-w-20 object-contain"
          />
        )}
        <div className="w-8 h-1 bg-blue-600 mt-2" />
      </div>

      {/* Bottom section with info */}
      <div>
        <h2 className="text-sm font-semibold text-gray-900 mb-0.5">{data.name}</h2>
        <p className="text-xs text-gray-500 mb-2">{data.title}</p>
        <div className="space-y-0.5">
          <p className="text-xs text-gray-600">{data.email}</p>
          <p className="text-xs text-gray-600">{data.phone}</p>
        </div>
      </div>
    </div>
  );
}

// Generate standalone HTML for export
export function generateModernHTML(
  data: BusinessCardData,
  dimensions: DimensionKey,
  side: "front" | "back"
): string {
  const dim = DIMENSIONS[dimensions];

  const pdfPageCss = `
    @page { size: ${dim.width} ${dim.height}; margin: 0; }
    html, body { width: ${dim.width}; height: ${dim.height}; margin: 0; padding: 0; background: white; }
  `;

  if (side === "back") {
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    ${pdfPageCss}
    body { font-family: system-ui, -apple-system, sans-serif; }
    .card {
      width: ${dim.width};
      height: ${dim.height};
      background: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 16px;
    }
    .logo { max-height: 48px; max-width: 96px; object-fit: contain; margin-bottom: 8px; }
    .tagline { font-size: 10px; color: #6b7280; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    ${data.logoUrl ? `<img src="${data.logoUrl}" alt="Logo" class="logo">` : ""}
    <p class="tagline">${data.tagline}</p>
  </div>
</body>
</html>`;
  }

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    ${pdfPageCss}
    body { font-family: system-ui, -apple-system, sans-serif; }
    .card {
      width: ${dim.width};
      height: ${dim.height};
      background: white;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 16px;
    }
    .top { display: flex; align-items: flex-start; justify-content: space-between; }
    .logo { max-height: 32px; max-width: 80px; object-fit: contain; }
    .accent { width: 32px; height: 4px; background: #2563eb; margin-top: 8px; }
    .name { font-size: 14px; font-weight: 600; color: #111827; margin-bottom: 2px; }
    .title { font-size: 11px; color: #6b7280; margin-bottom: 8px; }
    .contact { font-size: 11px; color: #4b5563; line-height: 1.4; }
  </style>
</head>
<body>
  <div class="card">
    <div class="top">
      ${data.logoUrl ? `<img src="${data.logoUrl}" alt="Logo" class="logo">` : "<div></div>"}
      <div class="accent"></div>
    </div>
    <div>
      <h2 class="name">${data.name}</h2>
      <p class="title">${data.title}</p>
      <div class="contact">
        <p>${data.email}</p>
        <p>${data.phone}</p>
      </div>
    </div>
  </div>
</body>
</html>`;
}

