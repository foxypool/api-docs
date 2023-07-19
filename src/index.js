import { SwaggerUIBundle, SwaggerUIStandalonePreset } from 'swagger-ui-dist'
import 'swagger-ui-dist/swagger-ui.css'

import './styles.css'

SwaggerUIBundle({
  urls: [{
    url: 'specs/post/swagger.yaml',
    name: 'Proof-of-Spacetime (PoSt)',
  }],
  presets: [
    SwaggerUIBundle.presets.apis,
    SwaggerUIStandalonePreset,
  ],
  plugins: [
    SwaggerUIBundle.plugins.DownloadUrl,
  ],
  dom_id: '#swagger',
  deepLinking: true,
  tryItOutEnabled: true,
  layout: 'StandaloneLayout',
})

const links = document.getElementsByClassName('link')
const link = links[0]
const img = link.children[0]
img.alt = 'Foxy'
img.src = 'assets/fox.png'
const title = document.createElement('span')
title.innerHTML = 'Foxy-Pool'
link.appendChild(title)
