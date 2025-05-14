# yano

# Running the Backend Server

## Prerequisites
- Node.js (https://nodejs.org/)

## Steps to Run the Server

1. Open a terminal and navigate to the project directory:
    ```sh
    cd /d:/yano/backend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Start the server:
    ```sh
    node server.js
    ```

4. The server should now be running on port 3002. You can access it by navigating to `http://localhost:3002` in your web browser.

## Viewing the Website

1. Open a web browser.
2. Navigate to `http://localhost:3002`.
3. You should see your website.


## article.json object structure
{
    "id": Integer,
    "title": String,
    "linkUrl": String,
    "date": date,
    "imageSrc": fileDir,
    "contentType":String, 
    "timeOfCreation": date,
    "content": [
      {
        "sectionTitle": String,
        "text": String,
      }
    ]
}

## Content color
#0a8a34