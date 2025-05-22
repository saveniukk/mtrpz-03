FROM python:3.10-slim

WORKDIR /app

COPY . .

RUN apt-get update && apt-get install -y python3-pip

RUN pip install --no-cache-dir -r requirements/backend.txt

CMD pip install --no-cache-dir -r requirements/backend.txt && uvicorn spaceship.main:app --host 0.0.0.0 --port 8000
