import React from "react";

const ResultCard = ({ elem }) => {
  const addToCollection = (elem) => {
    let oldData = JSON.parse(localStorage.getItem("collection")) || []; // this will store old data if available on localStorage if not it return empty array
    let newData = [...oldData, elem]; // this will add new data to old with spread operator
    localStorage.setItem("collection", JSON.stringify(newData));
  };
  return (
    <div
      id="hover"
      className="h-140 w-90 rounded-xl relative [content-visibility:auto] [contain-intrinsic-size:280px]"
    >
      <a
        className="h-full w-full rounded-xl "
        href={elem.src}
        target="_blank"
        rel="noreferrer"
      >
        {elem.type == "images" ? (
          <img
            className="object-cover object-top rounded-xl h-full w-full"
            src={elem.thumbnail}
            alt={elem.title || ""}
            loading="lazy"
            decoding="async"
          />
        ) : elem.type == "video" ? (
          <video
            className="h-full w-full rounded-xl object-cover"
            poster={elem.thumbnail}
            preload="metadata"
            muted
            loop
            src={elem.src}
            onMouseEnter={(e) => e.currentTarget.play()}
            onMouseLeave={(e) => {
              e.currentTarget.pause();
              e.currentTarget.currentTime = 0;
            }}
          ></video>
        ) : elem.type == "GIF" ? (
          <img
            className="object-cover rounded-xl h-full w-full"
            src={elem.thumbnail}
            alt={elem.title || ""}
            loading="lazy"
            decoding="async"
          />
        ) : (
          " "
        )}
      </a>
      <div className="title hidden items-center justify-between absolute  bottom-3 font-bold bg-transparent w-full px-5 py-1">
        <h1 className=" font-bold  text-black capitalize text-md w-[75%] ">
          {elem.title}
        </h1>
        <button
          className="rounded-md cursor-pointer active:scale-90 px-4 py-1 bg-blue-700 text-white text-lg"
          onClick={() => {
            addToCollection(elem);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
