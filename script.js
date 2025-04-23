// Blog posts array
const blogPosts = [
  {
    title: "Unmasked",
    date: "April 23, 2025",
    content: "In the bustling city of Mumbai, journalist Arjun stumbles upon a dark underworld where criminals move freely, untouched by justice. Determined to bring them to light, he and his friends embark on a dangerous journey, exposing the truth one revelation at a time. But in a world where power protects the guilty, will they be able to stay in the shadows, or will the truth cost them everything?"
  },
  {
    title: "Bloody Grid",
    date: "April 22, 2025",
    content: "A ruthless killer is eliminating those who escaped justice, uploading their name and coordinates only after the deed is done. As the police race to uncover his identity, they realize the murders aren't random—each victim fits into a chilling pattern. Unless they crack the grid, the body count will only rise."
  }
];

// Insert posts into blog section
const blogSection = document.getElementById("blog-posts");

blogPosts.forEach(post => {
  const article = document.createElement("article");
  article.innerHTML = `
    <h3>${post.title}</h3>
    <p><em>${post.date}</em></p>
    <p>${post.content}</p>
  `;
  blogSection.appendChild(article);
});