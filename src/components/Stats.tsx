
export default function Stats() {
  let stats = [
    {
      number: 10000,
      text: "Orders delivered"
    },
    {
      number: 4.9,
      symbol: <i className="fa-solid fa-star"></i>,
      text: "Rating"
    },
    {
      number: 10,
      text: "Locations worldwide"
    },
    {
      number: "100%",
      text: "Authentic Nigerian ingredients"
    }
  ];

  const record = stats.map((stat, index) => (
    <div key={index} className="stat">
      <h1>{stat.number}{stat.symbol && <span>{stat.symbol}</span>}</h1>
      <p>{stat.text}</p>
    </div>
  ));

  return (
    <div id="stats">
      {record}
    </div>
  );
}
