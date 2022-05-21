const Random = (props) => {
  return (
    <div>
      Random value between {props.min} and {props.max}:
      {Math.floor(Math.random() * props.max)}
    </div>
  );
};

export default Random;
