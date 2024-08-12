import Image from "next/image";

const Comments = () => {
  return (
    <div className="">
      <div className="flex items-center gap-4">
        <Image
          src="/profile.png"
          alt=""
          className="w-8 h-10 rounded-full"
          width={32}
          height={32}
        />

        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment.."
            className="bg-transparent outline-none flex-1"
          />

          <Image
            src="/love.png"
            alt=""
            className="cursor-pointer"
            width={16}
            height={16}
          />
        </div>
      </div>

      <div className="flex gap-4 justify-between mt-6">
        <Image
          src="/profile.png"
          alt=""
          className="w-10 h-10 rounded-full"
          width={40}
          height={40}
        />

        <div className="flex flex-col gap-2">
          <span className="font-medium ">Mg Mg</span>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
            aspernatur libero iusto error labore suscipit rem vero dolorum quo
            atque in, nesciunt fugiat perferendis voluptatum accusantium ipsum
            qui repellat architecto?
          </p>

          <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
            <div className="flex items-center gap-4">
              <Image
                src="/like.png"
                alt="alt"
                width={12}
                height={12}
                className="cursor-pointer w-4 h-4"
              />
              <span className="text-gray-300">|</span>
              <span className="text-gray-500">123 Likes</span>
            </div>

            <div>Reply</div>
          </div>
        </div>

        <Image
          src="/more.png"
          alt="alt"
          width={16}
          height={16}
          className="cursor-pointer w-4 h-4"
        />
      </div>္
    </div>
  );
};

export default Comments;
