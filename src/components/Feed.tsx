import Post from "./Post";

export default function Feed() {
    return (
        <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-12">
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
}