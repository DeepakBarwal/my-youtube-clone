import Comment from "./Comment";

const CommentsList = ({ commentsData }) => {
  return (
    <>
      {commentsData.map((comment, idx) => {
        return (
          <div key={idx}>
            <Comment data={comment} />
            <div className="pl-5 ml-5 border border-l-black">
              <CommentsList commentsData={comment.replies} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CommentsList;
