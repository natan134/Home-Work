import requests 

response = requests.get("https://api.wheretheiss.at/v1/satellites/25544").json()
latitude = float(response['latitude'])
longitude = float(response['longitude'])
altitude = float(response['altitude'])
print("Координаты МКС на полдень:", latitude, longitude, altitude)
r = altitude + 6371000    
G = 6.67430* (10**-11)
M = 5.972*(10**24)
m = 420000 * 1000
attraction = (G * M * m) / (r ** 2)
print("Притяжение от Земли до МКС на полдень:", attraction)
    
