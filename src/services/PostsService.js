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

  editPost(post) {
    return axios.put(`posts/${post.id}`, post);
  }

  deletePost(id) {
    return axios.delete(`posts/${id}`);
  }
}

export const posts = new Posts();
