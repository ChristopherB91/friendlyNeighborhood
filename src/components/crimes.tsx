import "../App.css";

export const Crime = () => {
  const crimes: {
    description: string;
    name?: string;
    distanceM: number | string;
    report: string;
    id: number | string;
  }[] = [
    {
      description: "Selfie",
      name: "Chris",
      distanceM: 1234,
      report: "can I get a selfie lol",
      id: 0,
    },
    {
      description: "Missing Car",
      name: "Alex",
      report: "my car got stolen can you help me out, it brick out here",
      distanceM: 234,
      id: 1,
    },
    {
      description: "Missing Cat",
      name: "Teo",
      report: "help me find Spider-Man",
      distanceM: 562,
      id: 2,
    },
    {
      description: "Missing Pigeons",
      name: "Howard",
      report: "my birds are missing. I really miss pidgey ",
      distanceM: 361,
      id: 3,
    },
  ];

  return (
    <>
      {crimes.map((crime) => {
        return (
          <ul className="crime" key={crime.id}>
            <li className="aDesc">{crime.description}</li>
            <li className="aDistance"> | {crime.distanceM} M</li>
          </ul>
        );
      })}
    </>
  );
};
