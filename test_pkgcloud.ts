import pkgcloud = require('pkgcloud');

let auth_username = 'admin';
let auth_password = 'nomoresecret';
let auth_url = 'http://10.145.64.70/identity';
let region_name = 'RegionOne';
// project_name = 'your_project_name_or_id';

let conn = pkgcloud.network.createClient({
  provider: 'openstack',
  username: auth_username,
  password: auth_password,
  authUrl: auth_url,
  region: region_name
});

// conn.getPorts(function(err, ports) {
//for (let i =0; i<ports.length; i++) {
      //console.log(ports[i]);
      //console.log("id: " + ports[i].id);
      //console.log("name: " + ports[i].name);
      //console.log("created: " + ports[i].created);
      //console.log("updated: " + ports[i].updated);
      //console.log("status: " + ports[i].status + "\n");
      //}
      //      });

interface Port {
  "binding:vnic_type": string;
  name: string;
  network_id: string
}

let port1: Port = {
 "binding:vnic_type":"baremetal",
 name: "javascript_port",
 network_id: "0f0b6333-d33b-460f-995a-dbd78fbfdd36"
}
//conn.createPort(port, function(err, port) {
//      console.log(port);
//});

conn.getPort("99334ec6-cc09-4693-aa01-d9a7a03001e9", function(err, port) {
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
