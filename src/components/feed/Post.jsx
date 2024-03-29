import {
  FaUserCircle,
} from "react-icons/fa";
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineCalendar } from "react-icons/ai";

const Post = ({ username, content }) => {
  return (
    <div className="border border-zinc-700 p-5 rounded-xl bg-zinc-900/10 hover:bg-zinc-800/20 hover:cursor-pointer">
      <div className="flex items-center mb-4 space-x-2">
        <FaUserCircle className="w-8 h-8" />
        <span className="text-md">{username}</span>
      </div>
      <p>{content}</p>
      <div className="flex items-center mt-4 space-x-2">
        <button className="flex text-sm items-center rounded bg-neutral-900/25 hover:bg-neutral-700/40 text-white font-bold py-1 px-2 space-x-1">
          <span>100</span><AiOutlineArrowUp className="w-4 h-4" />
        </button>
        <button className="flex text-sm items-center rounded bg-neutral-900/25 hover:bg-neutral-700/40 text-white font-bold py-1 px-2 space-x-1">
          <span>10</span>
          <AiOutlineArrowDown className="w-4 h-4" />
        </button>
        <button className="flex text-sm items-center rounded bg-neutral-900/25 cursor-auto text-white font-bold py-1 px-2 space-x-1">

          <AiOutlineCalendar className="w-4 h-4" />
          <span>18/5/23</span>
        </button>
      </div>
    </div>
  );
};

export default Post;
