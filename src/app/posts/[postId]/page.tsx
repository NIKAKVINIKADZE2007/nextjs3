'use client';

const myPostId = ({
  params,
}: {
  params: {
    postId: String;
  };
}) => {
  console.log('parrams', params);
  return (
    <div>
      <h2>my post id is: {params.postId}</h2>
    </div>
  );
};

export default myPostId;
