import os
from http.server import SimpleHTTPRequestHandler, HTTPServer

os.chdir('./public');
server_address = ('', 9000);
httpd = HTTPServer(server_address, SimpleHTTPRequestHandler);
print('Listening on port 9000')
httpd.serve_forever()
