FROM ubuntu:20.04
RUN apt-get update && apt-get install -y python3 python3-pip
COPY . .
RUN pip install -r requirements2.txt
EXPOSE 3000
CMD ["python3", "app.py"]