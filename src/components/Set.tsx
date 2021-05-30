import { PlayArrowRounded } from "@material-ui/icons";
import styled from "styled-components";

interface Props {
  id: string;
  name: string;
  author: string;
  audioSrc: string;
}

const Set = ({ id, name, author }: Props) => {
  return (
    <Track>
      <TrackNumber>
        <h5>{id}</h5>
      </TrackNumber>

      <TrackMeta>
        <Info>
          <DJ>{name}</DJ>
          <Author>{author}</Author>
        </Info>

        <Media>
          <Media.Time>00:55</Media.Time>
          <Media.Playback></Media.Playback>
          <Media.Button>
            <PlayArrowRounded />
          </Media.Button>
        </Media>
      </TrackMeta>
    </Track>
  );
};

const Track = styled.div`
  max-width: 970px;
  margin: 0 auto 1.3em;
  background: #fff;
  transition: all 0.3s ease;

  ${({ theme }) => theme.mediaQuery("md")`
		display: flex;
	`};
`;

const TrackNumber = styled.div`
  background: #171a3b;
  color: #fff;
  text-align: center;
  line-height: 8em;
  min-width: 8em;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h5 {
    font-size: 2.4rem;
  }
`;

const TrackMeta = styled.div`
  min-height: 8em;
  padding: 0em 1.25em;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ theme }) => theme.mediaQuery("md")`
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		flex: 1;
		  min-height: 3em;
	`};
`;

const Info = styled.div`
  flex: 1;
`;

const DJ = styled.h5`
  margin-top: 0.5em;
  margin-bottom: -0.5em;
  color: ${({ theme }) => theme.primary};
`;

const Author = styled.span`
  color: #03051a;
  font-weight: 700;
  font-size: 1.4rem;
`;

const Media: any = styled.div`
  margin: 2em 0em;
  display: flex;
  align-items: center;
  justify-content: space-between;

  display: none;
`;

const Time = styled.span`
  color: black;

  ${({ theme }) => theme.mediaQuery("md")`
		margin: 0em 0.5em;
	`};
`;

const Playback = styled.div``;

const Button = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  height: 30px;
  width: 30px;

  & > .MuiSvgIcon-root {
    font-size: 2rem;
  }
`;

Media.Time = Time;
Media.Playback = Playback;
Media.Button = Button;

export default Set;
