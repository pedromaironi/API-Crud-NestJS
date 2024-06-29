# Usa una imagen base de Python
FROM python:3.9-slim

# Crea el directorio de trabajo
WORKDIR /app

# Copia los scripts al directorio de trabajo
COPY generate_backup.py register_backup.py /app/

# Instala las dependencias necesarias
RUN pip install pandas pymongo

# Comando por defecto para ejecutar
CMD ["bash", "-c", "python generate_backup.py && python register_backup.py"]