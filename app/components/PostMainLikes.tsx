import { useState } from "react";
import { Comment, Like, PostLikesCompTyes } from "../types";
import { AiFillHeart } from "react-icons/ai";
import { BiLoaderCircle } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { FaCommentDots, FaShare } from "react-icons/fa";

export default function PostMainLikes({post}: PostLikesCompTyes) {

    const router = useRouter();

    const [hasClickedLike, setHasClickedLike] = useState<boolean>(false);

    const [userLiked, setUserLiked] = useState<boolean>(false);

    const [comments, setComments] = useState<Comment[]>([])
    const [likes, setLikes] = useState<Like[]>([]);

    const likedOrUnlike = () => {
        console.log('likeOrUnlike')
    }

  return (
    <>
        <div id={`PostMainLikes-${post?.id}`} className="relative mr-[75px]">
            <div className="absolute bottom-0 pl-2">
                <div className="pb-4 text-center">
                    <button disabled={hasClickedLike} onClick={() => likedOrUnlike()} className="rounded-full bg-gray-200 p-2 cursor-pointer">
                        {!hasClickedLike ? (
                            <AiFillHeart color={likes?.length > 0 && userLiked ? '#ff2626' : ''} size={25} />
                        ) : (
                            <BiLoaderCircle className="animate-spin" size={25} />
                        )}
                    </button>

                    <span className="text-xs text-gray-800 font-semibold">
                        {likes?.length}
                    </span>
                </div>

                <button onClick={() => router.push(`/post/${post?.id}/${post?.profile?.user_id}`)} className="pb-4 text-center">
                    <div className="rounded-full bg-gray-200 p-2 cursor-pointer">
                        <FaCommentDots size={25} />
                    </div>

                    <span className="text-xs text-gray-800 font-semibold">
                        {comments?.length}
                    </span>
                </button>

                <button className="text-center">
                    <div className="rounded-full bg-gray-200 p-2 cursor-pointer">
                        <FaShare size={25} />
                    </div>

                    <span className="text-xs text-gray-800 font-semibold">
                        55
                    </span>
                </button>
            </div>
        </div>
    </>
  )
}
