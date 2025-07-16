import styled from "styled-components";

import Background from "@/components/Background";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Title from "@/components/Title";
import theme from "@/providers/theme/theme";

const ContentContainer = styled.div`
  display: flex;
  padding: 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  align-self: stretch;
`;

const Description = styled.p`
  max-width: 672px;
`;

const MailInputWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`;

export default function Mail() {
  return (
    <Background
      backDropProps={{ style: { padding: "5rem 7rem" } }}
      style={{ display: "flex" }}
    >
      <ContentContainer>
        <Title>Join the JOVANA Journey</Title>
        <Description>
          Stay updated on our latest developments and exciting opportunities in
          the JOVANA ecosystem.
        </Description>
        <MailInputWrapper>
          <Input />
          <Button color="blue" style={{ color: theme.white }}>
            Sign up
          </Button>
        </MailInputWrapper>
        <Button style={{ backgroundColor: theme.white }}>Learn More</Button>
      </ContentContainer>
    </Background>
  );
}
