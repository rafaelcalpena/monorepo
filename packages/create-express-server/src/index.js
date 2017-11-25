import express from 'express';
import expressWs from 'express-ws'

export {default as cors} from 'cors'
export {default as express} from 'express'
export {default as bodyParser} from 'body-parser'

export default (...connectors) => {

	const app = express();

	expressWs(app)

	/* Sets port to 3001 if there's no environment variable */
	app.set('port', (process.env.PORT || 3001));

	/* Express only serves static assets in production */
	if (process.env.NODE_ENV === 'production') {
	  app.use(express.static('client/build'));
	}

	if (connectors.length > 0) {
		connectors.forEach((connector) => connector(app))
	}

	return app
}
