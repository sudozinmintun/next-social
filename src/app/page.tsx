import AddPost from "@/components/AddPost";
import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import Stories from "@/components/Stories";

export default function Home() {
  return (
    <div className="flex gap-6 p-5">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu />
      </div>

      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Stories />
          <AddPost />
          <Feed />
        </div>
      </div>

      <div className="hidden lg:block w-[30%]">
        <LeftMenu />
      </div>
    </div>
  );
}
