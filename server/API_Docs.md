# KabarHaji API Documentation

## Endpoints :

List of available endpoints:

- `POST /users`
- `GET /users`
- `POST /login`
- `GET /users/:id`
- `PUT /users/:id`
- `DELETE /users/:id`

- `GET /destinations`
- `GET /destinations/:slug`

&nbsp;

## 1. POST /users

Request:

- body:

```json
{
  {
    "email": "string",
    "password": "string",
    "name": "string"
  }
}
```

_Response (201 - Created)_

```json
{
  "message": "User created",
  "newUser": {
    "acknowledged": true,
    "insertedId": "string"
  }
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Please enter a valid email"
}
OR
  {
    "message": "Email already taken"
  }
OR
{
  "message": "Password is required"
}
OR
  {
    "message": "password must be at least 5 characters"
  }
OR
{
  "message": "name is required"
}
OR
{
  "message": "name must be at least 3 characters"
}
OR
{
  "message": "name must be at most 50 characters"
}
```

&nbsp;

## 4. GET /users

_Response (200 - OK)_

```json
[
  {
    "_id": "string",
    "email": "string",
    "password": "string",
    "name": "string"
  },
  {
    "_id": "66a60b3bac72ba788eba11f5",
    "email": "string",
    "password": "string",
    "name": "string"
  },
  ...,
]
```

&nbsp;

## 3. POST /login

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string",
  "name": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Invalid Email/Password"
}
```

&nbsp;

## 4. GET /users/:id

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "string"
}
```

_Response (200 - OK)_

```json
{
  "_id": "string",
  "email": "string",
  "password": "string",
  "name": "string"
}
```

&nbsp;

## 5. PUT /users/:id

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "string"
}
```

_Response (200 - OK)_

```json
{
  "_id": "string",
  "email": "string",
  "password": "string",
  "name": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Please enter a valid email"
}
OR
  {
    "message": "Email already taken"
  }
OR
{
  "message": "Password is required"
}
OR
  {
    "message": "password must be at least 5 characters"
  }
OR
{
  "message": "name is required"
}
OR
{
  "message": "name must be at least 3 characters"
}
OR
{
  "message": "name must be at most 50 characters"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "You are not authorized"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Data not found."
}
```

&nbsp;

## 6. DELETE /users/:id

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "string"
}
```

_Response (200 - OK)_

```json
{
  "message": "User deleted",
  "user": {
    "_id": "string",
    "email": "string",
    "password": "string",
    "name": "string"
  }
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "You are not authorized"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Data not found."
}
```

&nbsp;

## 7. GET /destinations

_Response (200 - OK)_

```json
[
    {
        "_id": "66a625700224bc16d6680326",
        "name": "Niladri Reservoir",
        "rating": 4.7,
        "reviews": 2498,
        "location": "Tekergat, Sunamganj",
        "price_per_person": 59,
        "currency": "USD",
        "image_url": "https://example.com/images/niladri_reservoir.jpg",
        "description": "You will get a complete travel package on the beaches. Packages in the form of airline tickets, recommended hotel rooms, transportation. Have you been on a holiday to the Greek ETC.",
        "favorite": true,
        "tags": [
            "reservoir",
            "scenic",
            "relaxing"
        ],
        "additional_images": [
            "https://example.com/images/niladri_reservoir_1.jpg",
            "https://example.com/images/niladri_reservoir_2.jpg",
            "https://example.com/images/niladri_reservoir_3.jpg",
            "https://example.com/images/niladri_reservoir_4.jpg",
            "https://example.com/images/niladri_reservoir_5.jpg"
        ]
    },
    {
        "_id": "66a625700224bc16d6680327",
        "name": "Damdim Tea Estate",
        "rating": 4.5,
        "reviews": 95,
        "location": "Darjeeling, West Bengal",
        "price_per_person": 45,
        "currency": "USD",
        "image_url": "https://example.com/images/damdim_tea_estate.jpg",
        "description": "A famous tea estate known for its lush green landscapes.",
        "favorite": false,
        "tags": [
            "tea estate",
            "green",
            "relaxing"
        ],
        "additional_images": [
            "https://example.com/images/damdim_tea_estate_1.jpg",
            "https://example.com/images/damdim_tea_estate_2.jpg",
            "https://example.com/images/damdim_tea_estate_3.jpg"
        ]
    },
    ...,
]
```

&nbsp;

## 8. GET /destinations/:slug

- params:

```json
{
  "slug": "string"
}
```

_Response (200 - OK)_

```json
{
  "_id": "66a627340224bc16d6680330",
  "name": "Niladri Reservoir",
  "slug": "niladri-reservoir",
  "rating": 4.7,
  "reviews": 2498,
  "location": "Tekergat, Sunamganj",
  "price_per_person": 59,
  "currency": "USD",
  "image_url": "https://example.com/images/niladri_reservoir.jpg",
  "description": "You will get a complete travel package on the beaches. Packages in the form of airline tickets, recommended hotel rooms, transportation. Have you been on a holiday to the Greek ETC.",
  "favorite": true,
  "tags": ["reservoir", "scenic", "relaxing"],
  "additional_images": [
    "https://example.com/images/niladri_reservoir_1.jpg",
    "https://example.com/images/niladri_reservoir_2.jpg",
    "https://example.com/images/niladri_reservoir_3.jpg",
    "https://example.com/images/niladri_reservoir_4.jpg",
    "https://example.com/images/niladri_reservoir_5.jpg"
  ]
}
```

&nbsp;

## Global Error

_Response (401 - Unauthorized)_

```json
{
  "message": "Unauthenticated"
}
OR
{
  "message": "Invalid Email/Password"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```
