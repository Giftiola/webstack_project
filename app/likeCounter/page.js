"use client";
import React from "react";
import { useReducer } from "react";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";

const initialState = {
  likeCount: 50,
  dislikeCount: 25,
  activeBtn: "none",
};

const LIKE_ACTION = "LIKE_ACTION";
const DISLIKE_ACTION = "DISLIKE_ACTION";

function reducer(state, action) {
  switch (action.type) {
    case LIKE_ACTION:
      return {
        ...state,
        likeCount: state.likeCount + 1,
        activeBtn: "like",
      };
    case DISLIKE_ACTION:
      return {
        ...state,
        dislikeCount: state.dislikeCount + 1,
        activeBtn: "dislike",
      };
    default:
      throw new Error("Invalid action type");
  }
}

function LikeCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleLikeClick = () => {
    dispatch({ type: LIKE_ACTION });
  };

  const handleDislikeClick = () => {
    dispatch({ type: DISLIKE_ACTION });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white mt-20 pt-10">
          Like and Dislike Counter
        </h1>
        <div className="mx-auto max-w-4xl p-10">
          <p className="text-lg text-white mb-4">
            The <span className="font-semibold">Like and Dislike Counter</span>{" "}
            is an interactive web application built using React. It showcases a
            simple yet effective way to engage users in expressing their
            opinions on content through a familiar 'like' and 'dislike' system.
          </p>
          <p className="text-lg text-white mb-4">
            At the heart of this application lies a state management system
            powered by React's <span className="font-semibold">useReducer</span>{" "}
            hook. This setup ensures a smooth and efficient handling of state
            changes, providing a seamless user experience.
          </p>
          <p className="text-lg text-white mb-4">
            The interface features two buttons, each representing 'like' and
            'dislike'. Users can click on these buttons to increase the count of
            likes or dislikes. The application's state updates in real-time,
            reflecting the current count of likes and dislikes.
          </p>
          <p className="text-lg text-white mb-4">
            Styling is elegantly handled using{" "}
            <span className="font-semibold">Tailwind CSS</span>, a utility-first
            CSS framework. The design is responsive, ensuring that the
            application looks great on devices of all sizes. The use of Tailwind
            CSS also allows for rapid UI development with its utility
            classNamees.
          </p>
          <p className="text-lg text-white mb-4">
            This Like and Dislike Counter serves as a perfect example of modern
            web development practices, combining React's powerful state
            management with the stylistic flexibility of Tailwind CSS.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mb-20 bg-[#B0B3C4]  text-white rounded-3xl shadow-lg p-10 w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        <h2 className="text-2xl text-[#262626] mb-4">Like and Dislike Counter</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            className={`btn ${
              state.activeBtn === "like" ? "bg-green-500" : "bg-gray-800"
            } text-white font-medium py-2 rounded-xl flex items-center justify-center`}
            style={{ width: "150px" }}
            onClick={handleLikeClick}
          >
            <BiSolidLike className="mr-2" />
            Like {state.likeCount}
          </button>

          <button
            className={`btn ${
              state.activeBtn === "dislike" ? "bg-red-500" : "bg-gray-800"
            } text-white font-medium py-2 rounded-xl flex items-center justify-center`}
            style={{ width: "150px" }}
            onClick={handleDislikeClick}
          >
            <BiSolidDislike className="mr-2" />
            Dislike {state.dislikeCount}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LikeCounter;
