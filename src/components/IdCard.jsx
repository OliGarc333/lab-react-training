const IdCard = (props) => {
  console.log(props);
  return (
    <div>
      <img src={props.picture} alt="User" />
      <h3> Last name: {props.lastName} </h3>
      <h3> First name: {props.firstName} </h3>
      <h3> Gender: {props.gender} </h3>
      <h3> Height: {props.height} </h3>
      <h3> Birth date: {props.birth.toLocaleDateString()} </h3>
    </div>
  );
};

export default IdCard;
