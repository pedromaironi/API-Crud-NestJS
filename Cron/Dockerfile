FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY generate_backup.py generate_backup.py
COPY register_backup.py register_backup.py

CMD ["python", "generate_backup.py"]

