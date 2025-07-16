import styled from "styled-components";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  image: string;
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.gray[200]};
  background: ${({ theme }) => theme.white};
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  aspect-ratio: 295 / 224;
  object-fit: cover;
`;

const CardText = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  background: ${({ theme }) => theme.white};
`;

const CardTitle = styled.h3`
  color: ${({ theme }) => theme.gray[950]};
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
`;

const CardDescription = styled.p`
  overflow: hidden;
  color: ${({ theme }) => theme.gray[500]};
  text-overflow: ellipsis;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
`;

export default function Card({
  title,
  description,
  image,
  ...props
}: CardProps) {
  return (
    <CardContainer {...props}>
      <CardImage src={image} alt={title} />
      <CardText>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardText>
    </CardContainer>
  );
}
