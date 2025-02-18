import bike from "../img/background.svg";

export function Service() {
    return (
      <section className="servicesSection">
        <div className="offer">
          <h2 className="stylizedHeader">Что мы предлагаем</h2>
          <p className="serviceDescription">В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта. Все работы выполняем качественно и с душой.</p>
        </div>
                
        <div className="serviceImage">
          <img src={bike} alt="bike" className="serviceImage" />
        </div>
      </section>
    );
}
