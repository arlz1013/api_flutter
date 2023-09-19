from fastapi import FastAPI; from pydantic import BaseModel
import sql; bd = sql.SQL(); 
#import con; my = con.MYSQL()
import json

app = FastAPI()

@app.post("/SQL/add/")
async def Add(name : str, TpUser : str):
    send = bd._Insert(name, TpUser)
    return send

@app.post("/SQL/Upd")
async def Show(name : str, TpUser: str, ide: str):
    send = (bd._Update(name=name, TpUser=TpUser, ide=ide))
    return json.dumps(send)

@app.post("/SQL/del/")
async def Delete(ide : str):
    send  = bd._Delete(ide)
    return json.dumps(send)