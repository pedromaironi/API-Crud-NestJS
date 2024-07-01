import pymongo
import pandas as pd
import boto3
import os

client = pymongo.MongoClient("mongodb+srv://pedromaironi:2171983@appcrudclustermongo.tbzzw.mongodb.net/?retryWrites=true&w=majority&appName=AppCrudClusterMongo")
db = client.utesa

def get_collection_data(collection_name):
    collection = db[collection_name]
    data = list(collection.find())
    df = pd.DataFrame(data)
    return df

products_df = get_collection_data('products')
users_df = get_collection_data('users')

with pd.ExcelWriter("backup.xlsx") as writer:
    products_df.to_excel(writer, sheet_name='Products', index=False)
    users_df.to_excel(writer, sheet_name='Users', index=False)

s3 = boto3.client('s3')
bucket_name = "bucket-react-pedro"
s3_key = "backups/backup.xlsx"
s3.upload_file(backup_file, bucket_name, s3_key)

print("Backup completado y guardado en backup.xlsx")