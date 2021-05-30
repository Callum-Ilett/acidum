import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children?: ReactNode;
  id: string;
  heading?: string;
  subheading?: string;
  backgroundImage?: string;
  bgColour?: string;
}

const Section = ({
  heading,
  id,
  subheading,
  children,
  backgroundImage,
  bgColour,
}: Props) => {
  return (
    <StyledSection
      id={id}
      backgroundImage={backgroundImage}
      bgColour={bgColour}
    >
      <Container>
        <SectionMeta>
          <Subheading>{subheading}</Subheading>
          <Heading>{heading}</Heading>
        </SectionMeta>

        {children}
      </Container>
    </StyledSection>
  );
};

const StyledSection = styled.section<Props>`
  background: ${({ bgColour }) => bgColour};
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  padding-bottom: 6em;
`;

const Container = styled.div`
  padding: 0em 1.5em;

  ${({ theme }) => theme.mediaQuery("md")`
		max-width: 1200px;
		margin: 0 auto;
	`};
`;

const SectionMeta = styled.div`
  padding-top: 6.4rem;
  padding-bottom: 3.2rem;
`;

const Subheading = styled.h5`
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
`;

const Heading = styled.h2`
  text-transform: uppercase;
  text-align: center;
  font-size: 4rem;

  ${({ theme }) => theme.mediaQuery("md")`font-size: 6rem`};
`;

export default Section;

// const Section = styled.section`
//   background: #171a3b
//     url("http://acidum.like-themes.com/wp-content/uploads/2018/01/events_bg.png?id=2875");
// `;
