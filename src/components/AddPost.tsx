import Image from "next/image"

export default function AddPost() {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm">

            <Image src="/profile.png" className="w-12 h-12 object-cover rounded-full" alt="" width={48} height={48} />

            <div className="flex-1">
                <div className="flex gap-2">
                    <textarea name="" id="" placeholder="What's on your mind?" className="flex-1 bg-slate-100 rounded-lg p-2"></textarea>
                    <Image src="/love.png"
                        className="w-5 h-5 cursor-pointer self-end"
                        alt=""
                        width={10}
                        height={10}
                    />
                </div>

                <div className="flex items-center gap-4 mt-4 text-gray-400">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/add_photo.png" alt="" width={20} height={20} />
                        Photo
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/video.png" alt="" width={20} height={20} />
                        Video
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/calendar.png" alt="" width={20} height={20} />
                        Event
                    </div>

                    <div className="flex items-center gap-2 cursor-pointer">
                        <Image src="/poll.png" alt="" width={20} height={20} />
                        Poll
                    </div>
                </div>
            </div>
        </div>
    );
}