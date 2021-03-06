#!/usr/bin/env node

//
// ScimGateway plugin startup
// One or more plugin could be started (must be listening on unique ports)
//
// Could use forman module for running in separate environments
// PM2 module for vertical clustering/loadbalancing among cpu's'
// node-http-proxy for horizontal loadbalancing among hosts (or use nginx)
//

var testmode = require('./lib/plugin-testmode');
var restful  = require('./lib/plugin-restful');
// var forwardinc  = require('./lib/plugin-forwardinc');
// var mssql = require('./lib/plugin-mssql');
// var saphana   = require('./lib/plugin-saphana');
