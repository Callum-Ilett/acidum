import styled from "styled-components";
import { Section, Service } from "components";

// src = "http://acidum.like-themes.com/wp-content/uploads/2017/10/vinyl.png";

const services = [
  {
    id: 1,
    name: "Vip Zone",
    image: "vip.png",
    path: "/vip-zone",
  },
  {
    id: 2,
    name: "Hooakh",
    image: "hookah.png",
    path: "/hookah",
  },
  { id: 3, name: "Snacks", image: "restaurant_new.png", path: "/snacks" },
  { id: 4, name: "Bar", image: "wine.png", path: "/bar" },
  { id: 5, name: "Lounge Area", image: "armchair.png", path: "/lounge-area" },
  { id: 6, name: "Live DJ", image: "vinyl.png", path: "/live-dj" },
];

const Services = () => {
  return (
    <Section id="services" heading="Services" subheading="What we offer">
      <Grid rows={3} cols={2}>
        {services.map((service) => (
          <Service key={service.id} {...service} />
        ))}
      </Grid>
    </Section>
  );
};

const Grid = styled.div<{ rows: number; cols: number }>`
  display: grid;
  grid-template-columns: ${({ cols }) => `repeat(${cols}, 1fr)`};
  grid-template-rows: ${({ rows }) => `repeat(${rows}, 1fr)`};

  ${({ theme }) => theme.mediaQuery("md")`
		display: flex;
		justify-content: space-between;
	`};
`;

export default Services;
