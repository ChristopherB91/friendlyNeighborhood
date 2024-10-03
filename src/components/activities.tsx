import "../App.css";

export const Activity = () => {
  const activities: {
    description: string;
    name?: string;
    distanceM: number | string;
    report: string;
    id: number | string;
    spider: string;
  }[] = [
    {
      description: "Selfie",
      name: "Chris",
      distanceM: 1234,
      report: "can I get a selfie lol",
      id: 0,
      spider: "@NYCWallCrawler",
    },
    {
      description: "Missing Car",
      name: "Alex",
      report: "my car got stolen can you help me out, it brick out here",
      distanceM: 234,
      id: 1,
      spider: "@BKLYNSpider42",
    },
    {
      description: "Missing Cat",
      name: "Teo",
      report: "help me find Spider-Man",
      distanceM: 562,
      id: 2,
      spider: "@NYCWallCrawler",
    },
    {
      description: "Missing Pigeons",
      name: "Howard",
      report: "my birds are missing. I really miss pidgey ",
      distanceM: 361,
      id: 3,
      spider: "@NYCWallCrawler",
    },
    {
      description: "Missing Pigeons",
      name: "Howard",
      report: "my birds are missing. I really miss pidgey ",
      distanceM: 361,
      id: 4,
      spider: "@NYCWallCrawler",
    },
    {
      description: "Missing Pigeons",
      name: "Howard",
      report: "my birds are missing. I really miss pidgey ",
      distanceM: 361,
      id: 5,
      spider: "@NYCWallCrawler",
    },
    {
      description: "Missing Pigeons",
      name: "Howard",
      report: "my birds are missing. I really miss pidgey ",
      distanceM: 361,
      id: 6,
      spider: "@NYCWallCrawler",
    },
    {
      description: "Missing Pigeons",
      name: "Howard",
      report: "my birds are missing. I really miss pidgey ",
      distanceM: 361,
      id: 7,
      spider: "@NYCWallCrawler",
    },
  ];

  return (
    <>
      {activities.map((activity) => {
        return (
          <ul className="activities" key={activity.id}>
            <li className="aDesc">{activity.description}</li>
            <li className="aDistance"> | {activity.distanceM} M</li>
          </ul>
        );
      })}
    </>
  );
};
