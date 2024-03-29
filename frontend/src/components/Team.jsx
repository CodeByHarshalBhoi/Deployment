import { data } from "../restApi.json";

export default function Team() {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            eum, facere impedit animi asperiores minus commodi sint unde sed ut.
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((ele) => {
            return (
              <div className="card" key={ele.id}>
                <img src={ele.image} alt={ele.name} />
                <h3>{ele.name}</h3>
                <p>{ele.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
