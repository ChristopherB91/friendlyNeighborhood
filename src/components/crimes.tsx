import "../App.css";

export const Crime = () => {
  const crimes: {
    ID: number;
    Title: string;
    Report: string;
    Name?: string;
    Distance: number;
  }[] = [
    {
      Title: "Selfie",
      Name: "Chris",
      Distance: 1234,
      Report: "can I get a selfie lol",
      ID: 0,
    },
    {
      Title: "Missing Car",
      Name: "Alex",
      Report: "my car got stolen can you help me out, it brick out here",
      Distance: 234,
      ID: 1,
    },
    {
      Title: "Missing Cat",
      Name: "Teo",
      Report: "help me find SpIDer-Man",
      Distance: 562,
      ID: 2,
    },
    {
      Title: "Missing Pigeons",
      Name: "Howard",
      Report: "my birds are missing. I really miss pIDgey ",
      Distance: 361,
      ID: 3,
    },
  ];

  return (
    <>
      {crimes.map((crime) => {
        return (
          <ul className="crime" key={crime.ID}>
            <li className="aDesc">{crime.Title}</li>
            <li className="aDistance"> | {crime.Distance} M</li>
          </ul>
        );
      })}
    </>
  );
};
