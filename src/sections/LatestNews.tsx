import { Post, Section } from "components";
import styled from "styled-components";

const posts = [
  {
    id: "1",
    thumbnail: "/images/blog11-770x520.jpg",
    title: "Friday Selfie Party",
    category: "Party",
    content:
      "As a way to give back to you, take a selfie at any one of our clubs and use #FridaySelfieParty for a free shot on us",
    timestamp: "September 21, 2017",
    views: 994,
    comments: 0,
  },

  {
    id: "2",
    thumbnail: "/images/blog10-770x520.jpg",
    title: "David Guetta",
    category: "Party",
    content:
      "All the way from France, David guetta has come to Southampton for a one time only show. Get your tickets before they sell out.",
    timestamp: "September 14, 2017",
    views: 882,
    comments: 0,
  },

  {
    id: "3",
    thumbnail: "/images/blog1-770x520.jpg",
    title: "Cocktail Night",
    category: "Party",
    content:
      "Join us for cocktail night. One night only cocktails are two for the price of one. Available for certain cocktails only",
    timestamp: "September 13, 2017",
    views: 757,
    comments: 0,
  },
];

const LatestNews = () => {
  return (
    <Section id="latest-news" subheading="Our Blog" heading="Latest News">
      <Posts>
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </Posts>
    </Section>
  );
};

const Posts = styled.div`
  ${({ theme }) => theme.mediaQuery("md")`
		display: flex;
	`};
`;

export default LatestNews;
