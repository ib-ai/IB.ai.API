FROM python:3.8

LABEL "repository"="https://github.com/ib-ai/api"
LABEL "homepage"="https://github.com/ib-ai/api/tree/master/api"
LABEL "maintainer"="Jarred Vardy <jarred.vardy@gmail.com>"

WORKDIR /api

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Application entrypoint
CMD [ "python3", "app.py" ]