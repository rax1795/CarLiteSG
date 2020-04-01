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


@app.route('/<file_name>', methods=['GET'])
def data(file_name):
    with open(dataFolder/(str(file_name) +'.geojson')) as json_file:
        datas = json.load(json_file)
        return jsonify(datas)




if __name__ == '__main__':
    app.run(debug=True)