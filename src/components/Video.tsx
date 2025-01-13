import ReactPlayer from "react-player";
import { next, useCurrentLesson } from "../store/slices/playerSlice";
import { useAppDispatch, useAppSelector } from "../store";
import { Loader } from "lucide-react";

export default function Video() {
  const dispatch = useAppDispatch();
  const { currentLesson } = useCurrentLesson();
  const isCourseLoading = useAppSelector(
    (state) => state.playerSlice.isLoading
  );

  function handlePlayNext() {
    dispatch(next());
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {isCourseLoading ? (
        <div className="flex h-full items-center justify-center">
          <Loader className="w-7 h-7 text-violet-500 animate-spin" />
        </div>
      ) : (
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          onEnded={handlePlayNext}
          playing
          url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
        />
      )}
    </div>
  );
}
