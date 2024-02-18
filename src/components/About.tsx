import styled from "styled-components";
import { NamePageDown, Container, ArrowDown, whiteColor, blackColor, darkColor } from "../App.tsx";
import { ArrowSvg } from "./Assets";

export type AboutType = {
  lightTheme: boolean;
  height: number;
};

const AboutSection = styled.section<{ $lightTheme: boolean; $height: number }>`
  padding: 130px 0 0 0;
  background-color: ${(props) => (props.$lightTheme ? whiteColor : darkColor)};
  height: ${(props) => props.$height}px;
`;

export const AboutH1 = styled.h1<{ $lightTheme: boolean }>`
  color: ${(props) => (props.$lightTheme ? blackColor : whiteColor)};
  font-weight: 500;
  text-align: center;
`;

const AboutH2 = styled.h2<{ $lightTheme: boolean }>`
  color: ${(props) => (props.$lightTheme ? blackColor : whiteColor)};
  font-weight: 500;
  text-align: center;
`;

const AboutP = styled.p<{ $lightTheme: boolean }>`
  color: ${(props) => (props.$lightTheme ? blackColor : whiteColor)};
  font-weight: 300;
  line-height: 30px;
`;

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AboutContent = styled.div`
  display: flex;
  padding: 50px 0 50px 0;
  align-items: center;
  height: 700px;
  gap: 20px;
`;

const AboutLeftSide = styled.div`
  display: flex;
  flex-basis: 50%;
  flex-direction: column;
`;
const AboutRightSide = styled.div`
  display: flex;
  flex-basis: 50%;
  flex-direction: column;
  align-items: center;
  width: 30%;
`;

const AboutImg = styled.img`
  width: 450px;
`;

export function About({ lightTheme, height }: AboutType) {
  return (
    <AboutSection $lightTheme={lightTheme} $height={height}>
      <Container>
        <AboutH1 $lightTheme={lightTheme}>Информация обо мне</AboutH1>
        <AboutWrapper>
          <AboutContent>
            <AboutLeftSide>
              <AboutH2 $lightTheme={lightTheme}> Меня зовут Владислав!</AboutH2>
              <AboutP $lightTheme={lightTheme}>
                Я начинающий Frontend-разработчик. Занимаюсь web-разработкой 4 года. Есть коммерческий опыт 4 месяца. Амбициозный,
                целеустремленный и коммуникабельный. Всегда нахожу общий язык с людьми. Стараюсь развиваться и никогда не стою на
                месте. Очень хочется поработать с людьми в команде. . Активно ищу работу. Хочу найти своё место в компание,
                которая нуждается во мне. Знаю, что сейчас бешеная конкуренция, я готов доказывать.
              </AboutP>
            </AboutLeftSide>
            <AboutRightSide>
              <AboutImg src="./assets/about1.jpg" alt="about" />
            </AboutRightSide>
          </AboutContent>
          <ArrowDown to={"Skills"}>
            <ArrowSvg fill={lightTheme ? blackColor : whiteColor} />
          </ArrowDown>
          <NamePageDown $lightTheme={lightTheme}>Мои скиллы</NamePageDown>
        </AboutWrapper>
      </Container>
    </AboutSection>
  );
}
