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
            "email" : "string, unique",
            "username" : "string, unique",
            "password" : "string",
            "createdAt" : "date",
            "updatedAt" : "date"
        },
        {
            "id" : "integer, unique",
            "email" : "string, unique",
            "username" : "string, unique",
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
        "email" : "string, unique",
        "username" : "string, unique",
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


## Article
## Authentication
<!-- All API must use this authentication -->
- others article route get using authentication for login admin

Request :
- Header :
    - Authorization : "your secret token"

### Get Articles

Request :
- Method : GET
- Endpoint : `/articles`
- Header :
    - Accept: application/json

Response :

```json 
{
    "msg" : "string",
    "data" : [
        {
            "id" : "integer, unique",
            "title": "string",
            "paragraph1": "text",
            "paragraph2": "text",
            "paragraph3": "text",
            "paragraph4": "text",
            "paragraph5": "text",
            "paragraph6": "text",
            "paragraph7": "text",
            "paragraph8": "text",
            "paragraph9": "text",
            "paragraph10": "text",
            "poster_img_url": "text",
            "createdAt" : "date",
            "updatedAt" : "date"
        },
        {
            "id" : "integer, unique",
            "title": "string",
            "paragraph1": "text",
            "paragraph2": "text",
            "paragraph3": "text",
            "paragraph4": "text",
            "paragraph5": "text",
            "paragraph6": "text",
            "paragraph7": "text",
            "paragraph8": "text",
            "paragraph9": "text",
            "paragraph10": "text",
            "poster_img_url": "text",
            "createdAt" : "date",
            "updatedAt" : "date"
        }
    ]
}
```

### Get Article

Request :
- Method : GET
- Endpoint : `/articles/{articleId}`
- Header :
    - Accept: application/json

Response :

```json 
{
    "msg" : "string",
    "data" : 
        {
            "id" : "integer, unique",
            "title": "string",
            "paragraph1": "text",
            "paragraph2": "text",
            "paragraph3": "text",
            "paragraph4": "text",
            "paragraph5": "text",
            "paragraph6": "text",
            "paragraph7": "text",
            "paragraph8": "text",
            "paragraph9": "text",
            "paragraph10": "text",
            "poster_img_url": "text",
            "createdAt" : "date",
            "updatedAt" : "date"
        }
}
```

### Create Article

Request :
- Method : POST
- Endpoint : `/articles`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json 
{
    "title": "string",
    "paragraph1": "text",
    "paragraph2": "text",
    "paragraph3": "text",
    "paragraph4": "text",
    "paragraph5": "text",
    "paragraph6": "text",
    "paragraph7": "text",
    "paragraph8": "text",
    "paragraph9": "text",
    "paragraph10": "text",
    "poster_img_url": "text",
}
```

Response :

```json 
{
    "msg" : "string",
    "data" : 
        {
            "id" : "integer, unique",
            "title": "string",
            "paragraph1": "text",
            "paragraph2": "text",
            "paragraph3": "text",
            "paragraph4": "text",
            "paragraph5": "text",
            "paragraph6": "text",
            "paragraph7": "text",
            "paragraph8": "text",
            "paragraph9": "text",
            "paragraph10": "text",
            "poster_img_url": "text",
            "createdAt" : "date",
            "updatedAt" : "date"
        }
}
```

### Update Article

Request :
- Method : PUT
- Endpoint : `/articles/{articleId}`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json 
{
    "title": "string",
    "paragraph1": "text",
    "paragraph2": "text",
    "paragraph3": "text",
    "paragraph4": "text",
    "paragraph5": "text",
    "paragraph6": "text",
    "paragraph7": "text",
    "paragraph8": "text",
    "paragraph9": "text",
    "paragraph10": "text",
    "poster_img_url": "text",
}
```

Response :

```json 
{
    "msg" : "string",
    "data" : 
        {
            "id" : "integer, unique",
            "title": "string",
            "paragraph1": "text",
            "paragraph2": "text",
            "paragraph3": "text",
            "paragraph4": "text",
            "paragraph5": "text",
            "paragraph6": "text",
            "paragraph7": "text",
            "paragraph8": "text",
            "paragraph9": "text",
            "paragraph10": "text",
            "poster_img_url": "text",
            "createdAt" : "date",
            "updatedAt" : "date"
        }
}
```

### Delete Article

Request :
- Method : DELETE
- Endpoint : `/articles/{articleId}`
- Header :
    - Accept: application/json

Response :

```json 
{
    "msg" : "string",

}
```