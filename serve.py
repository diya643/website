import os, http.server, socketserver

ROOT = "/Users/diyathakur/Documents/Claude"
PORT = 3456

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)
    def log_message(self, fmt, *args):
        pass

os.chdir(ROOT)
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    httpd.serve_forever()
