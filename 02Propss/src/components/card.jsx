function Card({ title, img }) {
  return (
    <>
    
        <div className="card">
          <img
            src={img}
            alt="pic"
          />
          <h1>{title}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            rerum!
          </p>
          <button>view profile</button>
        </div>
    </>
  );
}

export default Card;
