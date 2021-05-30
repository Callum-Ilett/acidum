import { Section, Set } from "components";

const sets = [
  {
    id: "01",
    name: "DJ Paul Freeman feat. Ariana",
    author: "Summer Progressive Trance 2017",
    audioSrc: "",
  },
  {
    id: "02",
    name: "DJ Barbara Light",
    author: "Summer Progressive Trance 2017",
    audioSrc: "",
  },
  {
    id: "03",
    name: "Acid Club Productions",
    author: "Summer Progressive Trance 2017",
    audioSrc: "",
  },
  {
    id: "04",
    name: "DJ Barbara Light",
    author: "Summer Progressive Trance 2017",
    audioSrc: "",
  },
  {
    id: "05",
    name: "Acid Club Productions",
    author: "Summer Progressive Trance 2017",
    audioSrc: "",
  },
];

const RecentDJ = () => {
  return (
    <Section
      id="recent-dj-sets"
      subheading="Acid Playlist"
      heading="Recent DJ's Sets"
      backgroundImage="/images/music-bg.jpg"
    >
      {sets.map((set) => (
        <Set key={set.id} {...set} />
      ))}
    </Section>
  );
};

export default RecentDJ;
