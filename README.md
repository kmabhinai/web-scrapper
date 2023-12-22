
# Website Scrapper

This fetches the siteName, description, images, videos, favicons of the given url




## Run Locally

Clone the project

```bash
  git clone https://github.com/kmabhinai/web-scrapper
```

Go to the project directory

```bash
  cd web-scrapper
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Test

- For Curl Request 
```bash
  curl --location --request GET 'localhost:3000/' \
--header 'Content-Type: application/json' \
--data '{
    "url":"https://www.github.com/kmabhinai/"
}'
```