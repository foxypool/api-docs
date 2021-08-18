import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css'
import './styles.css'

const spec = require('./foxypool.yaml');

const ui = SwaggerUI({
  spec,
  dom_id: '#swagger',
  deepLinking: true,
  tryItOutEnabled: true,
});
