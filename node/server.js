/* 
* @Author: anchen
* @Date:   2016-05-17 14:04:51
* @Last Modified by:   anchen
* @Last Modified time: 2016-05-18 13:37:56
*/

'use strict';

var http = require("http");
var url = require("url");
function start(route,handle){
    http.createServer(function(request,response){
        var pathname = url.parse(request.url).pathname;
        console.log("Request for"+ pathname + "received");

        route(handle,pathname,response);

        // response.writeHead(200,{"Content-Type":"text/plain"});
        // response.write("Hello World");
        // response.end();
    }).listen(8888);
    console.log("server has started");
}
exports.start = start;