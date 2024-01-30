import { getUser } from "@/data";
import Image from "next/image";

const PostUser = async ({ userId }) => {
  const user = await getUser(userId);
  return (
    <>
      <div className="name flex items-center gap-5">
        <Image
          src={user.img ? user.img : "/images/noavatar.png"}
          width="45"
          height="45"
          className="objec-cover rounded-full"
        />
        <div className="flex flex-col">
          <h4 className="font-semibold opacity-60 text-lg">Author</h4>
          <p className="text-[.8rem]">{user.username}</p>
        </div>
      </div>
    </>
  );
};

export default PostUser;
