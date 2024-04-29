const Box = (props) => {
  return (
    <div className="box">
      <h2>Name: {props.name}</h2>
      <p>Title: {props.title}</p>
      <p>Location: {props.location}</p>
    </div>
  );
};

export default Box;
