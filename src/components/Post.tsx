import {
  Message,
  ScheduleOutlined,
  VisibilityOutlined,
} from "@material-ui/icons";

import styled from "styled-components";

interface Props {
  id: string;
  thumbnail: string;
  category: string;
  title: string;
  content: string;
  timestamp: string;
  views: number;
  comments: number;
}

const Post = (props: Props) => {
  const { thumbnail, category, title, content, timestamp, views, comments } =
    props;

  return (
    <Article>
      <Thumbnail src={thumbnail} alt={title} />
      <Category>{category}</Category>
      <Title>{title}</Title>
      <Description>{content}</Description>

      <Meta>
        <Date>
          <ScheduleOutlined /> {timestamp}
        </Date>

        <Views>
          <VisibilityOutlined />
          {views}
        </Views>

        <Comments>
          <Message />
          {comments}
        </Comments>
      </Meta>
    </Article>
  );
};

const Article = styled.article`
  margin-bottom: 3em;

  ${({ theme }) => theme.mediaQuery("md")`
		margin-right: 3em;
	`};
`;

const Thumbnail = styled.img`
  height: 233px;
`;

const Category = styled.h5`
  color: ${({ theme }) => theme.primary};
  text-transform: uppercase;
`;

const Title = styled.h2`
  font-size: 3.6rem;
`;

const Description = styled.p`
  line-height: 22px;
  font-weight: 400;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin-right: 1em;
  color: ${({ theme }) => theme.secondary};

  & > .MuiSvgIcon-root {
    color: ${({ theme }) => theme.primary};
    margin-right: 0.2em;
  }
`;

const Date = styled(MetaItem)``;

const Views = styled(MetaItem)``;

const Comments = styled(MetaItem)``;

export default Post;
