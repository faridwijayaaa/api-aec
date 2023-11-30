# API Spec

## Users
## Authentication
<!-- All API must use this authentication -->
- Users must use authentication from Admin for get Users & get User
- Users must use authentication from Admin or Users for update Account, Change Password, and Delete Account 
- Register & Login users without authentication

Request :
- Header :
    - Authorization : "your secret token"

### Register User

Request :
- Method : POST
- Endpoint : `/users/register`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json 
{
    "email" : "string",
    "username" : "string",
    "password" : "integer"
}
```

Response :

```json 
{
    "username" : "string",
    "email" : "string"
}
```

### Login User

Request :
- Method : POST
- Endpoint : `/users/login/`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :
```json
{
    "email": "string",
    "password": "string"
}

```

Response :

```json 
{
    "token": "generate token"
}
```

### Get Users

Request :
- Method : GET
- Endpoint : `/users`
- Header :
    - Accept: application/json

Response :

```json 
{
    "msg" : "string",
    "data" : [
        {
            "id" : "integer, unique",
            "email" : "string",
            "username" : "string",
            "password" : "string",
            "createdAt" : "date",
            "updatedAt" : "date"
        },
        {
            "id" : "integer, unique",
            "email" : "string",
            "username" : "string",
            "password" : "string",
            "createdAt" : "date",
            "updatedAt" : "date"
        }
    ]
}
```

### Get User

Request :
- Method : GET
- Endpoint : `/users/{userId}`
- Header :
    - Accept: application/json

Response :

```json 
{
    "msg" : "string",
    "data" : {
        "id" : "integer, unique",
        "email" : "string",
        "username" : "string",
        "password" : "string",
        "createdAt" : "date",
        "updatedAt" : "date"
    }
}
```

### Update User

Request :
- Method : PUT
- Endpoint : `/users/{userId}`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body : 

```json
{
    "email" : "string",
    "username": "string"
}
```

Response :

```json 
{
    "msg" : "string",
    "data" : {
        "email" : "string",
        "username" : "string"
    }
}
```

### Change Password User

Request :
- Method : PUT
- Endpoint : `/users/change-password/{userId}`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body : 

```json
{
    "oldPassword" : "string",
    "newPassword": "string"
}
```

Response :

```json 
{
    "msg" : "string",
}
```

### Delete User

Request :
- Method : DELETE
- Endpoint : `/users/{userId}`
- Header :
    - Accept: application/json

Response :

```json 
{
    "msg" : "string",

}
```
