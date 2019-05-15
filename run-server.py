import os
from http.server import SimpleHTTPRequestHandler, HTTPServer

os.chdir('./public')
PORT = os.getenv('PORT') or 9000;
server_address = ('', PORT);
httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
print('Listening on port {}'.format(PORT))
httpd.serve_forever()
