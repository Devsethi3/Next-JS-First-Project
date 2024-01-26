import { getUser } from "@/data";

const PostUser = async ({ userId }) => {
  const user = await getUser(userId);
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
