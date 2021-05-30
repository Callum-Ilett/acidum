import { Section } from "components";
import { useState } from "react";
import styled from "styled-components";
import NextImage from "next/image";

const initialGallery = {
  images: [
    { src: "/images/blog1-370x370.jpg", date: "Friday 25.10" },
    { src: "/images/blog2-370x370.jpg", date: "Friday 25.10" },
    { src: "/images/blog3-370x370.jpg", date: "Friday 25.10" },
    { src: "/images/blog4-370x370.jpg", date: "Friday 25.10" },

    { src: "/images/blog5-370x370.jpg", date: "Monday 28.10" },
    { src: "/images/blog6-370x370.jpg", date: "Monday 28.10" },
    { src: "/images/blog7-370x370.jpg", date: "Monday 28.10" },
    { src: "/images/blog8-370x370.jpg", date: "Monday 28.10" },

    { src: "/images/blog9-370x370.jpg", date: "Saturday 26.10" },
    { src: "/images/blog10-370x370.jpg", date: "Saturday 26.10" },
    { src: "/images/blog11-370x370.jpg", date: "Saturday 26.10" },
    { src: "/images/blog12-370x370.jpg", date: "Saturday 26.10" },

    { src: "/images/blog6-370x370.jpg", date: "Sunday 27.10" },
    { src: "/images/blog4-370x370.jpg", date: "Sunday 27.10" },
    { src: "/images/blog10-370x370.jpg", date: "Sunday 27.10" },
    { src: "/images/blog1-370x370.jpg", date: "Sunday 27.10" },
  ],
  filters: ["Friday 25.10", "Monday 28.10", "Saturday 26.10", "Sunday 27.10"],
  activeFilter: "Friday 25.10",
};

const Gallery = () => {
  const [gallery, setGallery] = useState(initialGallery);

  return (
    <Section
      id="gallery"
      subheading="Gallery"
      heading="Latest Photos"
      bgColour="#171a3b"
    >
      <Filters>
        {gallery.filters.map((filter) => (
          <Filter
            key={filter}
            active={filter === gallery.activeFilter}
            onClick={() => setGallery({ ...gallery, activeFilter: filter })}
          >
            {filter}
          </Filter>
        ))}
      </Filters>

      <Images>
        {gallery.images.map(
          ({ src, date }) =>
            date == gallery.activeFilter && (
              <Image key={src} src={src} width="333" height="333" />
            )
        )}
      </Images>
    </Section>
  );
};

const Filters = styled.div`
  display: grid;
  cursor: pointer;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin-bottom: 2em;

  ${({ theme }) => theme.mediaQuery("md")`
		display: flex;
		justify-content: center;
	`};
`;

const Filter = styled.div<{ active: boolean }>`
  border: ${({ theme, active }) =>
    active ? `2px solid ${theme.secondary}` : "2px solid transparent"};

  color: ${({ theme, active }) => (active ? theme.secondary : theme.primary)};

  font-weight: 700;
  text-align: center;
  padding: 8px 0px;

  ${({ theme }) => theme.mediaQuery("md")`
		margin-right: 1em;
		padding: 8px;
	`};
`;

const Images = styled.div`
  & > div {
    margin-bottom: 2em !important;
  }

  ${({ theme }) => theme.mediaQuery("md")`
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 1em;
	`};
`;

const Image = styled(NextImage)``;

export default Gallery;
