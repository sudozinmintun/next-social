import Image from "next/image";
import Comments from "./Comments";
export default function Post() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/profile.png"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Jack McBride</span>
        </div>

        <Image src="/more.png" alt="" width={16} height={16} />
      </div>

      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="/post.jpeg"
            alt="alt"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa libero
          similique quam beatae. Tempore facere, soluta cum laudantium omnis
          ipsa repudiandae ea provident porro commodi earum veniam distinctio
          cumque? Aliquam?
        </p>
      </div>

      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/like.png"
              alt="alt"
              width={16}
              height={16}
              className="cursor-pointer"
            />

            <span className="text-gray-300">|</span>

            <span className="text-gray-500">
              500
              <span className="hidden md:inline"> Likes</span>
            </span>
          </div>

          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/comment.png"
              alt="alt"
              width={16}
              height={16}
              className="cursor-pointer"
            />

            <span className="text-gray-300">|</span>

            <span className="text-gray-500">
              500
              <span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/share.png"
              alt="alt"
              width={16}
              height={16}
              className="cursor-pointer"
            />

            <span className="text-gray-300">|</span>

            <span className="text-gray-500">
              500
              <span className="hidden md:inline"> Shares</span>
            </span>
          </div>
        </div>
      </div>

      <Comments />
    </div>
  );
}
