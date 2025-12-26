<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>virus — Pairing Code</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <main class="card">
    <img class="avatar" src="https://files.catbox.moe/tihrtk.jpg" alt="virus avatar" />
    <h1 class="name">virus</h1>
    <p class="subtitle">Get a short pairing code to share during pair programming sessions</p>

    <div class="controls">
      <button id="generateBtn">Get Pairing Code</button>
      <button id="copyBtn" disabled>Copy</button>
      <button id="downloadBtn" disabled>Download</button>
    </div>

    <div id="codeArea" class="code-area">
      <div id="pairCode" class="pair-code">—</div>
      <div id="expiry" class="expiry"></div>
    </div>

    <small class="note">Code auto-expires. Reload page to reset if needed.</small>
  </main>

  <script src="script.js"></script>
</body>
</html>