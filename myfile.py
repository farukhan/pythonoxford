#!/usr/bin/env python
import BaseHTTPServer
from SimpleHTTPServer import SimpleHTTPRequestHandler

addr = ("0.0.0.0", 8002) #host to everyone

serv = BaseHTTPServer.HTTPServer(addr, SimpleHTTPRequestHandler)

serv.serve_forever()
