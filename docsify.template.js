module.exports = options => {
  return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <title>Beagle C4 Model</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="description" content="Description">
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

      <meta name="description" content="Beagle is...">
      
      <!-- OG tags-->
      <meta property="og:title" content="Beagle" />
      <meta property="og:url" content="https://docs-beta.usebeagle.io/c4model />
      <meta property="og:type" content="website"
      <meta property="og:description" content="Beagle is..." />
      <meta property="og:locale" content="en-US" />
      <meta property="og:site_name" content="Beagle" />
      <meta property="og:titleTemplate" content="Beagle" />
      <meta property="og:locale:alternate" content="pt-BR" />
      <!-- OG tags-->

      <link rel="icon" href="https://usebeagle.io/public/icon.png" alt="favicon-32x32"/>
      <link rel="stylesheet" href="../theme/theme.css"/>
      <link rel="stylesheet" href="${options.stylesheet}">
    </head>
    
    <body>
      <div id="app"></div>

      <nav class="language-nav">
        <div class="language-nav-head">
          <div class="language-nav-head-text">Português</div>

          <div class="language-nav-head-icon"></div>
        </div>

        <div class="language-nav-main">
          <ul class="language-nav-main-list">
            <li class="language-nav-main-list-item" data-value="c4model/pt-br">Português</li>
            <li class="language-nav-main-list-item" data-value="c4model/en">English</li>
          </ul>
        </div>
      </nav>

      <script>
        window.$docsify = ${JSON.stringify(options, null, 2)};
      </script>
      <script src="//unpkg.com/docsify/lib/docsify.min.js"></script>
      <script src="//unpkg.com/docsify-plantuml/dist/docsify-plantuml.min.js"></script>
      <script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/zoom-image.min.js"></script>
      <script src="../theme/theme.js"></script>
    </body>
    
    </html>`
}
