import { cm as html2canvas, cn as E } from "./index-CifJr-sK.js";
function markdownToHTML(md) {
  if (!md) return "";
  const lines = md.split("\n");
  const htmlLines = [];
  let inUL = false;
  let inOL = false;
  const closeList = () => {
    if (inUL) {
      htmlLines.push("</ul>");
      inUL = false;
    }
    if (inOL) {
      htmlLines.push("</ol>");
      inOL = false;
    }
  };
  const inlineFormat = (text) => text.replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\*(.+?)\*/g, "<em>$1</em>").replace(/__(.+?)__/g, "<strong>$1</strong>").replace(/_(.+?)_/g, "<em>$1</em>").replace(/`(.+?)`/g, "<code>$1</code>");
  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const line = raw;
    if (/^[-*_]{3,}\s*$/.test(line.trim())) {
      closeList();
      htmlLines.push("<hr/>");
      continue;
    }
    const h3 = line.match(/^###\s+(.*)/);
    const h2 = line.match(/^##\s+(.*)/);
    const h1 = line.match(/^#\s+(.*)/);
    if (h1) {
      closeList();
      htmlLines.push(`<h1>${inlineFormat(h1[1])}</h1>`);
      continue;
    }
    if (h2) {
      closeList();
      htmlLines.push(`<h2>${inlineFormat(h2[1])}</h2>`);
      continue;
    }
    if (h3) {
      closeList();
      htmlLines.push(`<h3>${inlineFormat(h3[1])}</h3>`);
      continue;
    }
    const ulMatch = line.match(/^(\s*)[-*•]\s+(.*)/);
    if (ulMatch) {
      if (!inUL) {
        if (inOL) {
          htmlLines.push("</ol>");
          inOL = false;
        }
        htmlLines.push("<ul>");
        inUL = true;
      }
      htmlLines.push(`<li>${inlineFormat(ulMatch[2])}</li>`);
      continue;
    }
    const olMatch = line.match(/^(\s*)\d+[.)]\s+(.*)/);
    if (olMatch) {
      if (!inOL) {
        if (inUL) {
          htmlLines.push("</ul>");
          inUL = false;
        }
        htmlLines.push("<ol>");
        inOL = true;
      }
      htmlLines.push(`<li>${inlineFormat(olMatch[2])}</li>`);
      continue;
    }
    if (line.trim() === "") {
      closeList();
      htmlLines.push("<br/>");
      continue;
    }
    closeList();
    htmlLines.push(`<p>${inlineFormat(line)}</p>`);
  }
  closeList();
  return htmlLines.join("\n");
}
const RENDER_CSS = `
  @font-face {
    font-family: 'Noto Sans Devanagari';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/NotoSansDevanagari-Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Noto Sans Devanagari';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/NotoSansDevanagari-Bold.ttf') format('truetype');
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body, .pdf-root {
    font-family: 'Noto Sans Devanagari', 'Noto Sans', Arial, sans-serif;
    font-size: 13px;
    line-height: 1.75;
    color: #111;
    background: #fff;
    padding: 40px 48px;
    width: 794px;          /* A4 at 96 dpi */
    word-break: break-word;
  }

  h1 { font-size: 20px; font-weight: 700; margin: 18px 0 10px; border-bottom: 2px solid #222; padding-bottom: 4px; }
  h2 { font-size: 17px; font-weight: 700; margin: 16px 0 8px; }
  h3 { font-size: 15px; font-weight: 700; margin: 14px 0 6px; }
  h4 { font-size: 13px; font-weight: 700; margin: 12px 0 4px; }

  p  { margin: 6px 0; text-align: justify; }
  br { display: block; content: ""; margin: 4px 0; }

  ul { margin: 6px 0 6px 20px; list-style: disc; }
  ol { margin: 6px 0 6px 20px; list-style: decimal; }
  li { margin: 3px 0; }

  blockquote {
    border-left: 3px solid #ccc;
    padding-left: 12px;
    color: #555;
    font-style: italic;
    margin: 8px 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 14px 0;
    font-size: 12px;
  }
  th, td {
    border: 1px solid #ddd;
    padding: 8px 10px;
    text-align: left;
    vertical-align: top;
    line-height: 1.5;
  }
  th {
    background-color: #f7f9fa;
    font-weight: 700;
  }

  hr { border: none; border-top: 1px solid #bbb; margin: 12px 0; }

  code {
    font-family: 'Courier New', Courier, monospace;
    background: #f3f3f3;
    padding: 1px 4px;
    border-radius: 3px;
    font-size: 12px;
  }

  pre {
    background: #f5f5f5;
    padding: 10px;
    border-radius: 4px;
    overflow-x: auto;
    margin: 10px 0;
  }
  pre code {
    background: none;
    padding: 0;
    border-radius: 0;
  }

  strong { font-weight: 700; }
  em     { font-style: italic; }
  a      { color: #1a237e; text-decoration: underline; }

  /* PDF header area */
  .pdf-header {
    border-bottom: 2px solid #1a237e;
    padding-bottom: 10px;
    margin-bottom: 18px;
  }
  .pdf-header h1 {
    border: none;
    padding: 0;
    margin: 0 0 4px;
    color: #1a237e;
    font-size: 16px;
  }
  .pdf-meta {
    font-size: 11px;
    color: #444;
    line-height: 1.6;
  }
`;
function buildRenderFrame(headerHTML, contentHTML) {
  const iframe = document.createElement("iframe");
  iframe.style.cssText = "position:fixed;top:-9999px;left:-9999px;width:794px;height:auto;border:0;visibility:hidden;";
  document.body.appendChild(iframe);
  const doc = iframe.contentDocument || iframe.contentWindow.document;
  doc.open();
  doc.write(`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<style>${RENDER_CSS}</style>
</head>
<body>
<div class="pdf-root">
  <div class="pdf-header">${headerHTML}</div>
  <div class="pdf-content">${contentHTML}</div>
</div>
</body>
</html>`);
  doc.close();
  return iframe;
}
function waitForFonts(iframe) {
  return new Promise((resolve) => {
    const win = iframe.contentWindow;
    if (win.document.fonts && win.document.fonts.ready) {
      win.document.fonts.ready.then(resolve);
    } else {
      setTimeout(resolve, 600);
    }
  });
}
async function exportToPDF({ element, htmlContent, text, title, filename, meta = {}, lang = "en", returnBlob = false }) {
  const metaRows = Object.entries(meta).map(([k, v]) => `<span><strong>${k}:</strong> ${v}</span>`).join("&nbsp;&nbsp;|&nbsp;&nbsp;");
  const headerHTML = `
    <h1>${title}</h1>
    <div class="pdf-meta">${metaRows}</div>
  `;
  let contentHTML = "";
  if (element) {
    contentHTML = element.innerHTML;
  } else if (htmlContent) {
    contentHTML = htmlContent;
  } else {
    contentHTML = markdownToHTML(text || "");
  }
  const iframe = buildRenderFrame(headerHTML, contentHTML);
  await waitForFonts(iframe);
  await new Promise((r) => setTimeout(r, 800));
  const root = iframe.contentDocument.querySelector(".pdf-root");
  let canvas;
  try {
    canvas = await html2canvas(root, {
      scale: 2,
      // 2× for crisp text on retina and print
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#ffffff",
      logging: false,
      windowWidth: 794
    });
  } finally {
    document.body.removeChild(iframe);
  }
  const A4_W_MM = 210;
  const A4_H_MM = 297;
  const DPI = 96;
  const MM_PER_PX = 25.4 / DPI;
  const canvasW = canvas.width;
  const canvasH = canvas.height;
  const pageH_px = Math.round(A4_H_MM / MM_PER_PX * 2);
  const pageW_px = canvasW;
  const imgW_mm = A4_W_MM;
  const doc = new E({ orientation: "portrait", unit: "mm", format: "a4" });
  let yOffset = 0;
  let pageIndex = 0;
  while (yOffset < canvasH) {
    const sliceH = Math.min(pageH_px, canvasH - yOffset);
    const sliceCanvas = document.createElement("canvas");
    sliceCanvas.width = pageW_px;
    sliceCanvas.height = sliceH;
    const ctx = sliceCanvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, pageW_px, sliceH);
    ctx.drawImage(canvas, 0, yOffset, pageW_px, sliceH, 0, 0, pageW_px, sliceH);
    const sliceImgData = sliceCanvas.toDataURL("image/png");
    const sliceH_mm = sliceH / pageH_px * A4_H_MM;
    if (pageIndex > 0) doc.addPage();
    doc.addImage(sliceImgData, "PNG", 0, 0, imgW_mm, sliceH_mm);
    yOffset += sliceH;
    pageIndex++;
  }
  if (returnBlob) {
    return doc.output("blob");
  }
  doc.save(`${filename}_${Date.now()}.pdf`);
}
export {
  exportToPDF as e
};
