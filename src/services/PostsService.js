import axios from "axios";

export default class Posts {
  constructor() {
    axios.defaults.baseURL = "http://localhost:3000/api/";
  }

  getAll() {
    return axios.get("posts");
  }

  addPost(newPosts) {
    return axios.post("posts", newPosts);
  }
}

export const posts = new Posts();
