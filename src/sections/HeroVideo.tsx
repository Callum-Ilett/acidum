import { Button } from "components";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import styled from "styled-components";

const HeroVideo = () => {
  const router = useRouter();
  const refVideo = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleClick = () => {
    setIsMuted(!isMuted);

    if (!refVideo.current) return;

    if (refVideo.current.muted) {
      refVideo.current.muted = false;
    } else {
      refVideo.current.muted = true;
    }
  };

  return (
    <Section>
      <video ref={refVideo} autoPlay loop muted playsInline>
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <VideoText>
        <ToggleSound muted={isMuted} onClick={handleClick} />
        <Heading>Acidum</Heading>
        <Paragraph>
          Come in to the biggest best <br />
          top rated dance night club in the UK
        </Paragraph>

        <Buttons>
          <Button colour="primary">All Events</Button>
          <Button
            colour="secondary"
            onClick={() => router.push("#reservation")}
          >
            Book a Table
          </Button>
        </Buttons>
      </VideoText>
    </Section>
  );
};

const Section = styled.section`
  padding: 0em 1.5em;

  video {
    display: none;
  }

  ${({ theme }) => theme.mediaQuery("md")`
		padding: 0;
		min-height: 100vh;
		position: relative;

		video {
			display: block;
			object-fit: contain;
			width: 100%;
		}
		
	`};
`;

const ToggleSound = styled.button<{ muted: boolean }>`
  all: unset;
  cursor: pointer;
  width: 100%;
  height: 4em;
  background: ${({ muted }) =>
      `url(/images/${muted ? "s_on.png" : "s_off.png"})`}
    no-repeat 50% 50% !important;
  display: none;

  ${({ theme }) => theme.mediaQuery("md")`display: block;`};
`;

const VideoText = styled.div`
  text-align: center;

  ${({ theme }) => theme.mediaQuery("md")`
		position: absolute;
    top: 50%;
    left: 50%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0em 1em;
    transform: translate(-50%, -50%);
	`};
`;

const Heading = styled.h1`
  color: ${({ theme }) => theme.primary};
  font-size: 8rem;
  text-transform: uppercase;

  ${({ theme }) => theme.mediaQuery("md")`font-size: 35rem;`};
`;

const Paragraph = styled.p`
  color: white;
  font-weight: bold;
  font-size: 2.4rem;
`;

const Buttons = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin-bottom: 2em;
  }

  ${({ theme }) => theme.mediaQuery("md")`
		flex-direction: row;
		justify-content: center;

		button {
    	margin-bottom: 0;
			margin-right: 1em;
  	}
	`};
`;

export default HeroVideo;
