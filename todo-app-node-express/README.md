# Todo App Node Express

A simple Todo API built with Node.js and Express.

## To test this project
Run `node index.js` in terminal.

## Create a new todo

1. Open Postman.
2. Set the method to `POST`.
3. Set the URL to `http://localhost:3000/api/todos`.
4. Go to the **Body** tab, select **raw**, and choose **JSON**.
5. Enter the following JSON:
   ```json
   {
     "title": "Associate Full Stack Developer Exam"
   }
   ```
6. Click **Send**.
7. You should receive a response with the created todo object.