const CardKu = (props) => {
  const { textku, tagline, imgsrc, imgalt } = props;
  return (
    // <div className="hover:drop-shadow-[0_10px_10px_#ffffff40]">
    // <div className="flex gap-10">
      <div className="card w-96 bg-[#00000000] hover:shadow-lg hover:shadow-slate-700/50 outline-[#a8b3cf33] outline outline-1">
        <figure className="px-10 pt-10">
          <img
            src={`${imgsrc}`}
            alt={`${imgalt}`}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{textku}</h2>
          <p>{tagline}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Visit Now</button>
          </div>
        </div>
      </div>
      /* <div className="card w-96 bg-[#00000000] hover:shadow-lg hover:shadow-slate-700/50 outline-[#a8b3cf33] outline outline-1">
        <figure className="px-10 pt-10">
          <img
            src="https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Chat App</h2>
          <p>Prototype Message</p>
          <div className="card-actions">
            <button className="btn btn-primary">Visit Now</button>
          </div>
        </div>
      </div> */
    // </div>
  );
};

export default CardKu;
