import pymongo
import pandas as pd

client = pymongo.MongoClient("mongodb+srv://pedromaironi:<password>@appcrudclustermongo.tbzzw.mongodb.net/?retryWrites=true&w=majority&appName=AppCrudClusterMongo")
db = client.utesa

collection = db.tu_coleccion
data = list(collection.find())

df = pd.DataFrame(data)

df.to_excel("/backup/backup.xlsx", index=False)