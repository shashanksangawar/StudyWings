
# API Requests


----------------------------------------------------------------------------------

### Student 

###### 1. Login
http://localhost:3000/api/student/login
`POST`
```json
{
    "username":"student",
    "password":"123"
}
```

###### 2. Register (*To be used one time only*)
http://localhost:3000/api/student/register
`POST`
```json
{
    "username":"Student",
    "email":"student@gmail.com",
    "password":"123",
    "phone":1234567890
}
```

###### 3. Update
http://localhost:3000/api/student/update
`POST`
```json
{
    "username":"Student1",
    "email":"student1@gmail.com",
    "password":"1234",
    "phone":1234567890,
    "userid":1
}
```

###### 4. Student Details Fetch
http://localhost:3000/api/student/account/details/fetch
`POST`
```json
{
    "user":1
}
```

###### 5. Student Details Add (*To be used one time only*)
http://localhost:3000/api/student/account/details/add 
`POST`
```json
{
    "user":1,
    "first_name": "Name",
    "last_name": "Surname",
    "dob": "01/01/2000",
    "address": "Home",
    "image": "http://image.link.in"
}
```


###### 6. Student Details Update
http://localhost:3000/api/student/account/details/update 
`POST`
```json
{
    "registration_id":1,
    "first_name": "Name",
    "last_name": "Surname",
    "dob": "01/01/2000",
    "address": "Home",
    "image": "http://image.link.com"
}
```

###### 7. Student Documents Fetch
http://localhost:3000/api/student/account/document/fetch
`POST`
```json
{
    "user":1
}
```

###### 8. Student Documents Add
http://localhost:3000/api/student/account/document/add 
`POST`
```json
{
    "user":1,
    "doc_name": "Document 1",
    "image": "http://image.link.in"
}
```


###### 9. Student Documents Update
http://localhost:3000/api/student/account/document/delete 
`POST`
```json
{
    "userid":1,
    "doc_id": 1
}
```



----------------------------------------------------------------------------------

### Root

###### 1. Login
http://localhost:3000/api/root/login
`POST`
```json
{
    "username":"admin",
    "password":"123"
}
```

###### 2. Register
http://localhost:3000/api/root/register
`POST`
```json
{
    "username":"admin",
    "password":"123",
    "email":"admin.studywings@gmail.com"
}
```

###### 3. Fetch all Countries
http://localhost:3000/api/root/fetch/country
`GET`

###### 4. Add a Country
http://localhost:3000/api/root/add/country
`POST`
```json
{
    "country":"India",
    "description":"A Country in Asian Contient"
}
```

###### 5. Update a Country
http://localhost:3000/api/root/update/country
`POST`
```json
{
    "country_id":1,
    "country":"India",
    "description":"A Country in Asian Contient"
}
```

###### 6. Fetch all Universities
http://localhost:3000/api/root/fetch/university
`GET`

###### 7. Add a University
http://localhost:3000/api/root/add/university
`POST`
```json
{
    "name":"Harvard University",
    "location":"United States",
    "description":"A Full Fletched University in United States",
    "ranking":20,
    "admission_process":"Visit University"
}
```

###### 8. Update a University
http://localhost:3000/api/root/update/university
`POST`
```json
{
    "university_id":1,
    "name":"Harvard University",
    "location":"United States",
    "description":"A Full Fletched University in United States",
    "ranking":20,
    "admission_process":"Visit University"
}
```

###### 9. Fetch all Universities Courses
http://localhost:3000/api/root/fetch/course
`GET`

###### 10. Add a University Course
http://localhost:3000/api/root/add/course
`POST`
```json
{
    "university_id":1,
    "country_id":1,
    "name":"Computer Engineering 2024-28",
    "description":"Engineering in the field of Computer Science",
    "duration":4,
    "fees":"1000000",
    "start_date":"01/04/2024",
    "end_date":"01/04/2028",
    "status":"Active"
}
```

###### 11. Update a University Course
http://localhost:3000/api/root/update/course
`POST`
```json
{
    "course_id":1,
    "university_id":1,
    "country_id":1,
    "name":"Computer Engineering 2024-28",
    "description":"Engineering in the field of Computer Science",
    "duration":4,
    "fees":"1000000",
    "start_date":"01/04/2024",
    "end_date":"01/04/2028",
    "status":"Active"
}
```

###### 12. Fetch Full Universities Info
http://localhost:3000/api/root/fetch
`GET`

----------------------------------------------------------------------------------

### Application

###### 1. Login
http://localhost:3000/api/application/login
```json
{
    "university_name":"Harvard University",
    "password":"admin"
}
```

###### 2. View Student Side
http://localhost:3000/api/application/fetch
```json
{
    "student_id": 1
}
```

###### 3. View University Side
http://localhost:3000/api/application/fetch/admin
```json
{
    "university_id": 1
}
```

###### 4. Add a Student Application
http://localhost:3000/api/application/add
```json
{
    "course_id": 1,
    "student_id": 1,
    "app_status": "Pending"
}
```


###### 5. Update a Student Application
http://localhost:3000/api/application/update
```json
{
    "app_id": 1,
    "app_status": "Accepted"
}
```