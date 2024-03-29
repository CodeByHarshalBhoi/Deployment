import { data } from "../restApi.json";

export default function Menu() {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">POPULAR DISHES</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae, ipsum tenetur? Temporibus ducimus sapiente sunt quaerat
            iure repellat excepturi eum?
          </p>
        </div>
        <div className="dishes_container">
          {data[0].dishes.map((ele) => {
            return (
              <div className="card" key={ele.id}>
                <img src={ele.image} alt={ele.title} />
                <h3>{ele.title}</h3>
                <button>{ele.category}</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
