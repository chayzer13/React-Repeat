import dino from "../img/dino.svg";

export function Dino() {
    return (
      <section className="heroSection">
        <div className="ride">
          <h2 className="stylizedText">Веломастерская “Велозар”</h2>
          <p className="description">Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим, чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.</p>
        </div>
        
        <div className="rideContainer">
          <img src={dino} alt="Velozar" className="rideImage" />
        </div>
      </section>
    );
}
