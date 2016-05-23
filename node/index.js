/* 
* @Author: anchen
* @Date:   2016-05-17 16:05:26
* @Last Modified by:   anchen
* @Last Modified time: 2016-05-18 10:04:17
*/

'use strict';
var server = require("./server.js");
var router = require("./router.js");
var requestHandlers = require("./requestHandlers.js");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route,handle);