import pandas as pd
import datetime
import folium
from flask import Flask, request, render_template,make_response,Response
from folium.map import *
import json
import os


app = Flask(__name__)
app.config['TEMPLATES_AUTO_RELOAD'] = True
county_geojson = f'https://raw.githubusercontent.com/rax1795/restaurantcsv/master/national_poly.geojson'
subzone =f'https://raw.githubusercontent.com/rax1795/restaurantcsv/master/subzone.geojson'
# county_path = os.path.join(os.getcwd(), 'national_poly.geojson') 
# county_geojson = json.load(open(county_path))

# subzone_path = os.path.join(os.getcwd(), 'subzone.geojson') 
# subzone = json.load(open(subzone_path))
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/map')
def map():
    start_coords = (1.3521, 103.8198)
    folium_map = folium.Map(location=start_coords, zoom_start=10,prefer_canvas=True)
    folium_map.add_child(folium.GeoJson(county_geojson,name='geojson',tooltip=folium.features.GeoJsonTooltip(fields=['Name','descriptio'],aliases=['name:','description:'],
    )))
    folium_map.add_child(folium.GeoJson(subzone,name='subzone',tooltip=folium.features.GeoJsonTooltip(fields=['SUBZONE_N','PLN_AREA_N'],aliases=['name:','PLN_AREA_N:'],
    )))
    folium_map.add_child(folium.LayerControl())
    folium_map.save(outfile='./templates/map.html')
    return render_template('map.html')


if __name__ == '__main__':
    if os.path.exists("map.html"):
        os.remove("map.html")
    app.run(debug=True)
