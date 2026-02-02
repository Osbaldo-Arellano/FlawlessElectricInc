import { BusinessCardData, DIMENSIONS, DimensionKey } from "./types";

interface TemplateBoldProps {
  data: BusinessCardData;
  dimensions: DimensionKey;
  side: "front" | "back";
}

export function TemplateBold({ data, dimensions, side }: TemplateBoldProps) {
  const dim = DIMENSIONS[dimensions];

  if (side === "back") {
    return (
      <div
        className="bg-slate-900 flex flex-col items-center justify-center p-4 border border-gray-200"
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
            className="max-h-12 max-w-24 object-contain mb-2 brightness-0 invert"
          />
        )}
        <p className="text-xs text-slate-400 text-center">{data.tagline}</p>
      </div>
    );
  }

  return (
    <div
      className="bg-white flex border border-gray-200 overflow-hidden"
      style={{
        width: dim.widthPx,
        height: dim.heightPx,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Left accent bar */}
      <div className="w-2 bg-slate-900 flex-shrink-0" />

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center px-4 py-3">
        <div className="flex items-center gap-2 mb-2">
          {data.logoUrl && (
            <img
              src={data.logoUrl}
              alt="Logo"
              className="max-h-6 max-w-16 object-contain"
            />
          )}
        </div>
        <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
          {data.name}
        </h2>
        <p className="text-xs text-slate-600 mb-2">{data.title}</p>
        <div className="flex gap-4 text-xs text-slate-500">
          <span>{data.email}</span>
          <span>{data.phone}</span>
        </div>
      </div>
    </div>
  );
}

// Generate standalone HTML for export
export function generateBoldHTML(
  data: BusinessCardData,
  dimensions: DimensionKey,
  side: "front" | "back"
): string {
  const dim = DIMENSIONS[dimensions];

  if (side === "back") {
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, -apple-system, sans-serif; }
    .card {
      width: ${dim.width};
      height: ${dim.height};
      background: #0f172a;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 16px;
    }
    .logo { max-height: 48px; max-width: 96px; object-fit: contain; margin-bottom: 8px; filter: brightness(0) invert(1); }
    .tagline { font-size: 10px; color: #94a3b8; text-align: center; }
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
    body { font-family: system-ui, -apple-system, sans-serif; }
    .card {
      width: ${dim.width};
      height: ${dim.height};
      background: white;
      display: flex;
      overflow: hidden;
    }
    .accent { width: 8px; background: #0f172a; flex-shrink: 0; }
    .content { flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 12px 16px; }
    .logo-row { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; }
    .logo { max-height: 24px; max-width: 64px; object-fit: contain; }
    .name { font-size: 14px; font-weight: 700; color: #0f172a; text-transform: uppercase; letter-spacing: 0.05em; }
    .title { font-size: 11px; color: #475569; margin-bottom: 8px; }
    .contact { display: flex; gap: 16px; font-size: 11px; color: #64748b; }
  </style>
</head>
<body>
  <div class="card">
    <div class="accent"></div>
    <div class="content">
      <div class="logo-row">
        ${data.logoUrl ? `<img src="${data.logoUrl}" alt="Logo" class="logo">` : ""}
      </div>
      <h2 class="name">${data.name}</h2>
      <p class="title">${data.title}</p>
      <div class="contact">
        <span>${data.email}</span>
        <span>${data.phone}</span>
      </div>
    </div>
  </div>
</body>
</html>`;
}
