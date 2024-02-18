import { ArrowSvg, HtmlSvg, CssSvg, JsSvg, ReactSvg, ReactHookSvg } from "./Assets";
import styled from "styled-components";
import { AboutType } from "./About";
import { NamePageDown, Container, ArrowDown, whiteColor, blackColor, darkColor, NamePageUp, ArrowUp } from "../App.tsx";

const SkillsSection = styled.section<{ $lightTheme: boolean; $height: number }>`
  height: ${(props) => props.$height}px;
  padding: 130px 0 50px 0;
  background-color: ${(props) => (props.$lightTheme ? whiteColor : darkColor)};
  position: relative;
`;

const SkillsWpapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SkillsH2 = styled.h2<{ $lightTheme: boolean }>`
  color: ${(props) => (props.$lightTheme ? blackColor : whiteColor)};
  font-weight: 500;
  text-align: center;
`;

const SkillsWrapper = styled.div`
  display: flex;
  gap: 100px;
  justify-content: center;
  flex-wrap: wrap;
  margin: 30px 0;
`;

const SkillItem = styled.div`
  width: 200px;
  height: 200px;
`;

export function Skills({ lightTheme, height }: AboutType) {
  return (
    <SkillsSection $lightTheme={lightTheme} $height={height}>
      <Container>
        <SkillsWpapper>
          <NamePageUp $lightTheme={lightTheme}>Обо мне</NamePageUp>
          <ArrowUp to={"/"}>
            <ArrowSvg fill={lightTheme ? blackColor : whiteColor} />
          </ArrowUp>
          <SkillsH2 $lightTheme={lightTheme}>Мои скиллы</SkillsH2>
          <SkillsWrapper>
            <SkillItem>
              <HtmlSvg />
            </SkillItem>
            <SkillItem>
              <CssSvg />
            </SkillItem>
            <SkillItem>
              <JsSvg />
            </SkillItem>
            <SkillItem>
              <ReactSvg />
            </SkillItem>
            <SkillItem>
              <ReactHookSvg />
            </SkillItem>
          </SkillsWrapper>
          <ArrowDown to={"/Works/All"}>
            <ArrowSvg fill={lightTheme ? blackColor : whiteColor} />
          </ArrowDown>
          <NamePageDown $lightTheme={lightTheme}>Мои работы</NamePageDown>
        </SkillsWpapper>
      </Container>
    </SkillsSection>
  );
}
