import pymongo
import pandas as pd
import datetime
import boto3
from botocore.exceptions import NoCredentialsError

client = pymongo.MongoClient(
    "mongodb+srv://pedromaironi:2171983@appcrudclustermongo.tbzzw.mongodb.net/?retryWrites=true&w=majority&appName=AppCrudClusterMongo")
db = client.utesa

collections = ["products", "users"]

data_frames = {}

for collection_name in collections:
    collection = db[collection_name]
    data = list(collection.find())
    df = pd.DataFrame(data)
    data_frames[collection_name] = df

backup_file = "backup.xlsx"
with pd.ExcelWriter(backup_file) as writer:
    for collection_name, df in data_frames.items():
        df.to_excel(writer, sheet_name=collection_name, index=False)

s3 = boto3.client('s3', aws_access_key_id='<AWS_ACCESS_KEY_ID>',
                  aws_secret_access_key='<AWS_SECRET_ACCESS_KEY>')

bucket_name = 'bucket-react-pedro'
backup_key = f'backups/{datetime.datetime.now().strftime("%Y%m%d%H%M%S")}_backup.xlsx'

try:
    s3.upload_file(backup_file, bucket_name, backup_key)
    print("Backup subido correctamente a S3")
except FileNotFoundError:
    print("El archivo de backup no fue encontrado")
except NoCredentialsError:
    print("Credenciales de AWS no encontradas")

backup_collection = db.backup_logs
backup_log = {
    "timestamp": datetime.datetime.now(),
    "file_path": f's3://{bucket_name}/{backup_key}'
}
backup_collection.insert_one(backup_log)
print("Backup registrado en la base de datos")
