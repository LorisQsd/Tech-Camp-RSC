import { mockComments } from "@/data/reviews.mock";
import sleep from "@/utils/sleep";

export async function getComments() {
  try {
    //! Simulate response delay !//
    await sleep(3000);

    // *You could fetch real data by uncommenting those lines : *//
    // const commentsRes = await fetch(
    //   "https://dummyjson.com/comments?limit=4&select=body,postId"
    // );
    // const data: Comments = await commentsRes.json();

    return mockComments;
  } catch (e) {
    console.error(e);

    throw new Error(
      "An error has occured while trying to fetch comments / reviews"
    );
  }
}
