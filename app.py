from flask import Flask, render_template, make_response
from flask import redirect, request, jsonify, url_for
import json
import glob
from pathlib import Path

dataFolder = Path(r'geojson')

app = Flask(__name__)


@app.route('/', methods=['GET','POST'])
def home():
     return render_template('layouts/matrices.html')

@app.route('/map', methods=['GET','POST'])
def map():
     return render_template('layouts/index.html')


@app.route('/weightage', methods=['GET','POST'])
def weightage():
     return render_template('layouts/weightage.html')

@app.route('/compare', methods=['GET','POST'])
def compare():
     return render_template('layouts/compare.html')

@app.errorhandler(404)
def page_not_found(error):
	app.logger.error('Page not found: %s', (request.path))
	return render_template('layouts/404.html'), 404

@app.errorhandler(500)
def internal_server_error(error):
    app.logger.error('Server Error: %s', (error))
    return render_template('500.htm'), 500

@app.errorhandler(Exception)
def unhandled_exception(e):
    app.logger.error('Unhandled Exception: %s', (e))
    return render_template('500.htm'), 500

@app.route('/data/<file_name>', methods=['GET'])
def data(file_name):
    with open(dataFolder/(str(file_name))) as json_file:
        datas = json.load(json_file)
        return jsonify(datas)




if __name__ == '__main__':
    app.run(debug=True)