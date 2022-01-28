import "./Modal.css"

const Modal = ({shuffleCards}) => {
  return (
    <div className="popup">
      <div className="modal">
        <h1>Winner!!</h1>
        <div className="start_btn">
          <button onClick={shuffleCards}>New Game</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
