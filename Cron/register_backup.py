import pymongo
from datetime import datetime

# Conectar a MongoDB
client = pymongo.MongoClient("mongodb+srv://pedromaironi:<password>@appcrudclustermongo.tbzzw.mongodb.net/?retryWrites=true&w=majority&appName=AppCrudClusterMongo")
db = client.utesa

# Registrar el backup en la base de datos
backup_collection = db.backups
backup_collection.insert_one({
    "timestamp": datetime.now(),
    "status": "successful",
    "path": "/backup/backup.xlsx"
})