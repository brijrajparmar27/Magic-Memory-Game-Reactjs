import cover from "/src/assets/cover.png";
import "./Card.css";

const Card = ({ card, handleClick, flipped }) => {
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <div className="front_contain">
          <img src={card.src} height="100px" className="front" />
        </div>

        <img
          src={cover}
          height="100px"
          className="back"
          onClick={() => {
            handleClick(card);
          }}
        />
      </div>
    </div>
  );
};

export default Card;
