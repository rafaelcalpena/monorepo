Create-Express-Server
=====================

An opinionated Express Server stack. Contains WebSockets (ws), cors and body-parser.

Usage
-----

```
import createExpressServer from 'create-express-server'
const app = createExpressServer();
```

Inputs
------

Provide connectors inside the call to enhance it.
Each connector is a function that receives Express's ```app``` as first argument.

Exports
-------

You can also directly ``` import {cors, express, bodyParser} from "@rafaelcalpena/create-express-server"``` 
