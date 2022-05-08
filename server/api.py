from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
import json

app = FastAPI()

@app.get('Print Data.json')
async def get_data():
    file = open("Data.json", 'r+')
    data = file.read()
    file.close()
    return json.loads(data)
    #res = requests.get(url)
    #f = open("get_request.json", 'r+')
    #f.seek(0)
    #f.write(res.text)
    #f.truncate()
    #f.close()
    #return json.loads(res.text)

@app.get('Get_input')
async def get_input_search():
    url = "http://127.0.0.1:5500/public/"
    res = requests.get(url)
    return res
