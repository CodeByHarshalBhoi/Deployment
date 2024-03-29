import { data } from "../restApi.json";

export default function Qualities() {
  return (
    <section className="qualities" id="qualities">
      <div className="container">
        {data[0].ourQualities.map(ele => (
          <div className="card" key={ele.id}>
            <img src={ele.image} alt={ele.title} />
            <p className="title">{ele.title}</p>
            <p className="description">{ele.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
