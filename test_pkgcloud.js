"use strict";
exports.__esModule = true;
var pkgcloud = require("pkgcloud");
var auth_username = 'admin';
var auth_password = 'nomoresecret';
var auth_url = 'http://10.145.64.70/identity';
var region_name = 'RegionOne';
// project_name = 'your_project_name_or_id';
var conn = pkgcloud.network.createClient({
    provider: 'openstack',
    username: auth_username,
    password: auth_password,
    authUrl: auth_url,
    region: region_name
});
var port1 = {
    "binding:vnic_type": "baremetal",
    name: "javascript_port",
    network_id: "0f0b6333-d33b-460f-995a-dbd78fbfdd36"
};
//conn.createPort(port, function(err, port) {
//      console.log(port);
//});
conn.getPort("99334ec6-cc09-4693-aa01-d9a7a03001e9", function (err, port) {
    console.log(port);
});
//conn.getPort('289519b3-a185-441c-b1c3-b12f528d8c22', function(err, port) {
//console.log(port);
//console.log("id: " + ports[i].id);
//console.log("name: " + ports[i].name);
//console.log("created: " + ports[i].created);
//console.log("updated: " + ports[i].updated);
//console.log("status: " + ports[i].status + "\n");
//});
