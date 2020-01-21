import pandas as pd
import datetime
import folium
from flask import Flask
from folium.map import *


app = Flask(__name__)


@app.route('/')
def index():
    start_coords = (1.3521, 103.8198)
    folium_map = folium.Map(location=start_coords, zoom_start=14)
    return folium_map._repr_html_()


if __name__ == '__main__':
    app.run(debug=True)
