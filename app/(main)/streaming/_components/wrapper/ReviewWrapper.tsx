import ReviewCard from "@/components/ui/cards/ReviewCard";
import { getComments } from "@/lib/getComments";

const ReviewWrapper = async () => {
  const { comments } = await getComments();

  return comments.map(({ id, likes, user: { fullName }, body }) => (
    <ReviewCard key={id}>
      <div>
        <ReviewCard.UserName>{fullName}</ReviewCard.UserName>
        <ReviewCard.Content>{body}</ReviewCard.Content>
      </div>

      <ReviewCard.Likes>
        {likes} like{likes > 1 ? "s" : ""}
      </ReviewCard.Likes>
    </ReviewCard>
  ));
};

export default ReviewWrapper;
