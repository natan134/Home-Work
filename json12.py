import requests
import json

url = 'https://jsonplaceholder.typicode.com/posts/'
r = requests.get(url)
data = r.json()

titles = [post['title'] for post in data]

with open('titles.txt', 'w') as file:
    for title in titles:
        file.write(title + '\n')