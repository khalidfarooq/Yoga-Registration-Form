# Yoga Registration Form

## TECH STACK : React , Django , RESTApi, SQLite3

### Admin Demo Account Details:
Username : test

password : test123

###

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

Admin Panel : [http://127.0.0.1:8000/admin](http://127.0.0.1:8000/admin)

## Admin Demo Account Details:
Username : test

password : test123


###ER Diagram
![ErDiagram](https://user-images.githubusercontent.com/47777912/141786889-35be2f9b-eae8-458f-b284-d3891ee5213b.jpeg)


## License
[MIT](https://choosealicense.com/licenses/mit/)
