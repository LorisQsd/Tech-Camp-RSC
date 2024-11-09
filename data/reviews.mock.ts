import { Comments } from "@/types/dummy_comments";

export const mockComments: Comments = {
  comments: [
    {
      id: 1,
      body: "This is some awesome thinking!",
      postId: 242,
      likes: 3,
      user: { id: 105, username: "emmac", fullName: "Emma Wilson" },
    },
    {
      id: 2,
      body: "What terrific math skills you're showing!",
      postId: 46,
      likes: 4,
      user: { id: 183, username: "cameronp", fullName: "Cameron Perez" },
    },
    {
      id: 3,
      body: "You are an amazing writer!",
      postId: 235,
      likes: 2,
      user: { id: 1, username: "emilys", fullName: "Emily Johnson" },
    },
    {
      id: 4,
      body: "Wow! You have improved so much!",
      postId: 31,
      likes: 1,
      user: { id: 89, username: "braydenf", fullName: "Brayden Fleming" },
    },
  ],
};
