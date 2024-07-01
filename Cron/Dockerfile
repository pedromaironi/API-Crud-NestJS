FROM python:3.11-slim

WORKDIR /app

COPY generate_backup.py .
COPY register_backup.py .
COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt
RUN pip install pymongo pandas boto3

CMD ["python", "generate_backup.py && python register_backup.py"]

