function Card({ title, buttonText, img }) {
  return (
    <div className="h-120 w-90 border-2 overflow-hidden rounded-2xl m-9.5 bg-white">
      <img
        className="w-full h-75 object-cover object-top-right p-2 pb-0 rounded-4xl"
        src={img}
        alt="images"
      />

      <div className="p-2 ">
        <h2 className="text-center text-2xl text-shadow-gray-950 text-black font-bold ">
          {title}
        </h2>

        <p className="text-base w-full pl-5 text-black">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          dicta minus, ea tempora ad deleniti!
        </p>
        <button className="h-12 w-30  mt-3 border ml-25 cursor-pointer !bg-indigo-700 rounded-3xl">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
export default Card;
