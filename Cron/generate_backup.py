import pymongo
import pandas as pd
import subprocess

client = pymongo.MongoClient("mongodb+srv://pedromaironi:2171983@appcrudclustermongo.tbzzw.mongodb.net/?retryWrites=true&w=majority&appName=AppCrudClusterMongo")
db = client.utesa

collections = ['products', 'users']  # Agrega las colecciones que necesitas
backup_files = []

for collection_name in collections:
    collection = db[collection_name]
    data = list(collection.find())
    df = pd.DataFrame(data)
    backup_file = f"{collection_name}_backup.xlsx"
    df.to_excel(backup_file, index=False)
    backup_files.append(backup_file)

# Ejecutar register_backup.py
subprocess.run(["python", "register_backup.py"] + backup_files)