// Sample blog data
const blogPosts = [
  {
    title: "My First Blog Post",
    date: "April 23, 2025",
    content: "Welcome to my blog! I'm starting this space to share my stories, thoughts, and experiences as a new writer. Stay tuned for more!"
  },
  {
    title: "Writing Journey: How I Started",
    date: "April 21, 2025",
    content: "I've always loved telling stories. This blog marks the beginning of turning that passion into something real."
  }
];

// Display posts
const blogSection = document.getElementById("blog-posts");

blogPosts.forEach(post => {
  const article = document.createElement("article");
  article.innerHTML = `
    <h2>${post.title}</h2>
    <p><em>${post.date}</em></p>
    <p>${post.content}</p>
  `;
  blogSection.appendChild(article);
});