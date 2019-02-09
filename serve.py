from flask import Flask, request, send_from_directory
import os

HOST_NAME = 'localhost'
PORT = 8081
BUILD_FOLDER = 'dist'

cwd = os.path.dirname(__file__)
app = Flask(__name__, static_url_path=cwd)

print(f'Go to: http://{HOST_NAME}:{PORT}/daily-records')

@app.route('/daily-records')
def send_root():
    response = send_from_directory(BUILD_FOLDER, 'index.html', cache_timeout=0)
    response.headers['Service-Worker-Allowed'] = '/'
    return response

@app.route('/daily-records/<path:path>')
def send_dist(path):
    response = send_from_directory(BUILD_FOLDER, path, cache_timeout=0)
    response.headers['Service-Worker-Allowed'] = '/'
    return response

if __name__ == '__main__':
    app.run(host=HOST_NAME, port=PORT)
