from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
import json

app = FastAPI()

#origins = [
#]

#app.add_middleware(
#    CORSMiddleware,
#    allow_origins=origins,
#    allow_credentials=True,
#    allow_methods=["*"],
#    allow_headers=["*"],
#)

@app.get('/v1/repositories')
async def Get_all_repository():
    url = "https://box.iiep.unesco.org/s/LjHcoC7D7L5rAsn"
    res = requests.get(url)
    f = open("get_request.json", 'r+')
    f.seek(0)
    f.write(res.text)
    f.truncate()
    f.close()
    return json.loads(res.text)

#@app.get('/v1/omega')
#async def omega_loader():
#    with open('omega.json') as f:
#        data = json.load(f)
#    return data
