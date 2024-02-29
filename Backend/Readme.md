# RUNNING PROGRAM

```
git clone https://github.com/shashanksangawar/StudyWings
cd StudyWings/Frontend
npm install
npm run dev
cd ../Backend
npm install
npm test

```
----------------------------------------------------------------------------------


# API CALLS


----------------------------------------------------------------------------------

### Root

| Function                      | API Call                                              | Method            |
| :------------------------     | :-----------------------------------------------      |:------------------|
| `Login`                       |     http:localhost:3000/api/root/login                |   `POST`          |
| `Register`                    |     http:localhost:3000/api/root/register             |   `POST`          |
| `Insert Country`              |     http:localhost:3000/api/root/add/country          |   `POST`          |
| `Update Country`              |     http:localhost:3000/api/root/update/country       |   `POST`          |
| `Fetch Country`               |     http:localhost:3000/api/root/fetch/country        |   `GET`           |
| `Insert University`           |     http:localhost:3000/api/root/add/university       |   `POST`          |
| `Update University`           |     http:localhost:3000/api/root/update/university    |   `POST`          |
| `Fetch University`            |     http:localhost:3000/api/root/fetch/university     |   `GET`           |
| `Insert University Course`    |     http:localhost:3000/api/root/add/course           |   `POST`          |
| `Update University Course`    |     http:localhost:3000/api/root/update/course        |   `POST`          |
| `Fetch University Course`     |     http:localhost:3000/api/root/fetch/course         |   `GET`           |

----------------------------------------------------------------------------------
 

### Student

| Function                     | API Call                                                  | Method          |
| :------------------------    | :-----------------------------------------------          |:----------------|
| `Login`                      |   http:localhost:3000/api/student/login                   |   `POST`        |
| `Register`                   |   http:localhost:3000/api/student/register                |   `POST`        |
| `Update`                     |   http:localhost:3000/api/student/update                  |   `POST`        |
| `Insert User Profile`        |   http:localhost:3000/api/student/account/details/add     |   `POST`        |
| `Update User Profile`        |   http:localhost:3000/api/student/account/details/update  |   `POST`        |
| `Fetch User Profile`         |   http:localhost:3000/api/student/account/details/fetch   |   `POST`        |
| `Insert User Documents`      |   http:localhost:3000/api/student/account/document/add    |   `POST`        |
| `Update User Documents`      |   http:localhost:3000/api/student/account/document/delete |   `POST`        |
| `Fetch User Documents`       |   http:localhost:3000/api/student/account/document/fetch  |   `POST`        |


----------------------------------------------------------------------------------


### Application

| Function                       | API Call                                          | Method    |
| :------------------------      | :-----------------------------------------------  |:----------|
| `Login`                        |   http:localhost:3000/api/application/login       |   `POST`  |
| `View Student Info`            |   http:localhost:3000/api/application/fetch       |   `POST`  |
| `Student will apply`           |   http:localhost:3000/api/application/register    |   `POST`  |
| `University total applications`|   http:localhost:3000/api/application/fetch/admin |   `POST`  |
| `Accept or Reject`             |   http:localhost:3000/api/application/update      |   `POST`  |