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

## Update todo status

1. Open Postman.
2. Set the method to `PATCH`.
3. Set the URL to `http://localhost:3000/api/todos/:id/status` (replace `:id` with the todo's id).
4. Go to the **Body** tab, select **raw**, and choose **JSON**.
5. Enter the following JSON:
   ```json
   {
     "done": true
   }
   ```
   - Set `"done"` to `true` or `false` as needed.
6. Click **Send**.
7. You should receive a response with the updated todo object.

## Update todo title

1. Open Postman.
2. Set the method to `PATCH`.
3. Set the URL to `http://localhost:3000/api/todos/:id/title` (replace `:id` with the todo's id).
4. Go to the **Body** tab, select **raw**, and choose **JSON**.
5. Enter the following JSON:
   ```json
   {
     "title": "New Todo Title"
   }
   ```
6. Click **Send**.
7. You should receive a response with the updated todo object.

## Get all todos

1. Open Postman.
2. Set the method to `GET`.
3. Set the URL to `http://localhost:3000/api/todos`.
4. Click **Send**.
5. You should receive a response with an array of all todo objects.

## Example Todo Object

```json
{
  "id": 1,
  "title": "Associate Full Stack Developer Exam",
  "done": false,
  "createdAt": "2025-09-13T19:44:23.325Z"
}
```