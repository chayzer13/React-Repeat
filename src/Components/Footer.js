import bike2 from "../img/background2.svg";

export function Footer() {
    return (
      <footer className="footer">
        <div className="serviceImage">
            <img src={bike2} alt="bike" className="serviceImage" />
        </div>

        <div className="rentalText">
          <h2 className="stylizedHeader">Прокат велосипедов</h2>
          <p className="serviceDescription">У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!</p>
        </div>
      </footer>
    );
}
