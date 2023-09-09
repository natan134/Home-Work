import urllib.request as urllib2
import urllib
import json
import math 
url = "http://api.open-notify.org/iss-now.json"
response = urllib.request.urlopen(url)
result = json.loads(response.read())
location = result["iss_position"]
lat = location['latitude']
lon = location['longitude']
lat = float(lat)
lon = float(lon)
print("\nLatitude: " + str(lat))
print("\nLongitude: " + str(lon))
altitude= 253.3204968444*1000
m2= 5.97600 * math.pow(10,24) 
m1= 420*1000
g= 6.6743 * math.pow(10, -11)
formul = g * (m1 * m2) / math.pow(altitude,2)
print(formul)
#Я правда не смог использовать API с чтением высоты(((
    
