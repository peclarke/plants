FROM ubuntu:20.04
RUN apt-get update && apt-get install -y python3 python3-pip

WORKDIR /app

COPY requirements2.txt requirements.txt
RUN pip install -r requirements.txt

COPY app.py .

EXPOSE 3000
CMD ["python3", "app.py"]