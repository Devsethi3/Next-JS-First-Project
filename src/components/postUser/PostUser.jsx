const getData = async (userId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};
const PostUser = async ({ userId }) => {
  const user = await getData(userId);
  return (
    <>
      <div className="name">
        <h4 className="font-semibold opacity-60 text-lg">Author</h4>
        <p className="text-[.8rem]">{user.username}</p>
      </div>
    </>
  );
};

export default PostUser;
