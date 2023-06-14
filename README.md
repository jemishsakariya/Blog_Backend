# Blog Web Application Backend

This is the backend code repository for a blog web application. The application provides functionalities to create posts, like posts, and add comments to posts. It serves as the server-side component that handles data storage and retrieval for the blog.

## Features

- **Post Creation**: Users can create new blog posts by providing a title, content, and any additional metadata.
- **Post Retrieval**: The backend provides APIs to fetch a list of all posts or retrieve a specific post by its unique identifier.
- **Post Likes**: Users can like a post, and the backend keeps track of the number of likes for each post.
- **Commenting**: Users can leave comments on posts, allowing for discussions and engagement.

## Installation

Follow these steps to set up the project locally:

1. Clone the repository: `git clone [repository URL]`
2. Install the necessary dependencies: `npm install`
3. Configure the MongoDB connection & PORT in the `.env` file.
4. Start the backend server: `npm start` or `npm run dev`