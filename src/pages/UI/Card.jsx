import '../../assets/Portfolio.css';

function Card(props) {
  return (
    <div className="card text-center portfolio_card">
      <div className="card-body ">{props.children}</div>
    </div>
  );
}

export default Card;
