# Yoga Registration Form

## TECH STACK : React , Django , RESTApi, SQLite3

## Below are commands to run the project

```bash

git clone https://github.com/khalidfarooq/Yoga-Registration-Form.git
cd Yoga-Registration-Form/

#install virtual environment
python3 -m venv myvenv 
```

## Activate the virtual env
```bash 
#LINUX
source myvenv/bin/activate 
OR
#Windows
myvenv\Scripts\activate


pip3 install -r requirements.txt 
```


```bash
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver
```
## open new terminal to run frontend dev server
```bash
cd frontend/
npm install
npm install react
npm run dev
```
# API END POINTS and LINKS
Frontend : 
[http://127.0.0.1:8000/](http://127.0.0.1:8000/)

Base Api : [http://127.0.0.1:8000/api](http://127.0.0.1:8000/api)

Bookings : [http://127.0.0.1:8000/api/bookings](http://127.0.0.1:8000/api/bookings)



## License
[MIT](https://choosealicense.com/licenses/mit/)
