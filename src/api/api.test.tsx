import { GET, POST, PUT } from './api';

describe("api test fuction", () => {
  it("get should return value", async () => {
    const response = await GET("https://jsonplaceholder.typicode.com/todos/1");
    console.log(response);
    expect(response).toBeDefined();
  })

  it("post should return value", async () => {
    const response = await POST("https://jsonplaceholder.typicode.com/posts", {});
    console.log(response);
    expect(response).toBeDefined();
  })

  it("put should return value", async () => {
    const response = await PUT("https://jsonplaceholder.typicode.com/posts/1", {});
    console.log(response);
    expect(response).toBeDefined();
  })
  it("delete should return value", async () => {
    const response = await PUT("https://jsonplaceholder.typicode.com/posts/1", {});
    console.log(response);
    expect(response).toBeDefined();
  })
})