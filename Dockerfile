FROM python:3

COPY . .

RUN pip install -r requirements.txt

# RUN python manage.py makemigrations
RUN python manage.py migrate
RUN Extra_stuff/execute.py

CMD ["python","manage.py","runserver","0.0.0.0:5001"]

##check up