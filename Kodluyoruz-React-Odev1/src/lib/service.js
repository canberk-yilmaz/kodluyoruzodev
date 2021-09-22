import axios from "axios";

async function getData(number) {
  const { data } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + number
  );
  const { data: posts } = await axios(
    "https://jsonplaceholder.typicode.com/posts/"
  );

  let filteredPosts = posts.filter((post) => post.userId === number);

  data["posts"] = filteredPosts;
  console.log(data);
}

export default getData;
