import styled from "styled-components";

interface Props {
  id: number;
  name: string;
  image: string;
  path: string;
}

const Service = ({ name, image }: Props) => {
  return (
    <Article>
      <Image src={`/images/services/${image}`} alt={name} />

      <Description>
        <Name>{name}</Name>
      </Description>
    </Article>
  );
};

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2em;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const Description = styled.div`
  margin-top: 1.6em;

  color: ${({ theme }) => theme.primary};
  transition: all 0.5s ease;

  :hover {
    color: ${({ theme }) => theme.secondary};
    text-shadow: ${({ theme }) => `0 0 25px ${theme.secondary}`};
  }
`;

const Name = styled.h5``;

export default Service;
