#GIGIH Final Project Fronted

----
1. System Description
```
This system is designed to provide you with an interactive experience in exploring videos and engaging with the community, all while discovering products that can fulfill your needs and interests. We offer an environment where you can discover interesting video content, see perspectives from other users through comments, and find related products that can enhance your experience. This system is built using the React JS library.
```

----
2. Featrues
a. User can open, at least two page
i. Home
ii. Video Detail Page
b. User can see video list with thumbnail from YouTube in home page
c. User can click each video and go to video detail page
d. User can see list products, embed YouTube, list comment, and form submit
comment
e. User just need input name and comment when submit comment in form
f. User can see their comment in list comment section after success submit
comment

----
3. Folder Structure
* **Index.js**
* **App.js**
* **api.js**
* **component/**
  - Home.component.jsx
  - VideoDetail.component.jsx
* **css/**
  - home-style.css
  - videoDetail-style.css
* **hooks/**
  - useComments.jsx
  - useCurrencyFormatter.jsx
* **pages/**
  - Home.page.js
  - VideoDetail.page.js


----
3. Route Structure list


**GET /**
----
  Returns all videos in the database system.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  videos: [
           {<videos_object>},
           {<videos_object>},
           {<videos_object>},
           ...
         ]
}
```
* **Error Response:**  
  * **Code:** 400  
  **Content:** `{ error : error.message }`


**GET /videos/:id**
----
  Returns the specified videos, show related product and all related comment.
* **URL Params**  
  *Required:* `id=ObjectId`
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json
* **Success Response:** 
* **Code:** 201  
  **Content:**  `[
    {<video_object>},
    {<detailProduct_ob>},
    {<comments_object>}
  ]` 
* **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Page Not Found" }`  
  OR  
  * **Code:** 500  
  **Content:** `{ message: "Terjadi kesalahan saat mencari data." }`

**POST /videos/:id/comment**
----
  Creates a new comment for the related video and returns the video detail.
* **URL Params**  
  *Required:* `id=ObjectId`
* **Headers**  
  Content-Type: application/json  
* **Data Params**  
```
  {
    username: string,
    comment: string,
    video: ObjectId
  }
```
* **Success Response:**  
* **Code:** 201  
  **Content:**  `{ <comment_object> }`
  * **Error Response:**  
  * **Code:** 404  
  **Content:** `{ error : "Page Not Found" }`  
  OR  
  * **Code:** 400 
  **Content:** `{ error: error.message }`

----

4. How To Run
 - open terminal and go to directory where you save my project or just use git bash on the folder.
 - run command : "npm run build".
 - run command : "npm start".
 - open "http://localhost:3000/" on your browser.
