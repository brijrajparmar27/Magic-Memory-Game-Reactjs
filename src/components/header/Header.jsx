import "./Header.css";

const Header = ({shuffleCards}) => {
  return (
    <div className="header">
      <h2 className="title">Magic Memory</h2>
      <div className="start_btn">
        <button onClick={shuffleCards}>New Game</button>
      </div>
    </div>
  );
};

export default Header;
