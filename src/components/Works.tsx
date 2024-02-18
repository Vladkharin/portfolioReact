import { ArrowSvg } from "./Assets.tsx";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import { Container, whiteColor, blackColor, darkColor, NamePageUp, ArrowUp } from "../App.tsx";

type WorksType = {
  lightTheme: boolean;
  height: number;
};

const WorksSection = styled.section<{ $lightTheme: boolean; $height: number }>`
  min-height: ${(props) => props.$height}px;
  height: 100%;
  padding: 130px 0 50px 0;
  background-color: ${(props) => (props.$lightTheme ? whiteColor : darkColor)};
  position: relative;
`;

const WorksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WorksLinks = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
`;

const WorksLink = styled(Link)<{ children: string; to: string; state: { $lightTheme: boolean } }>`
  padding-top: 10px;
  width: 160px;
  height: 40px;
  text-align: center;
  border: 1px solid black;
  border-radius: 30%;
  color: ${(props) => (props.state.$lightTheme ? blackColor : whiteColor)};
  text-decoration: none;
`;

export function Works({ lightTheme, height }: WorksType) {
  return (
    <WorksSection $lightTheme={lightTheme} $height={height}>
      <Container>
        <WorksWrapper>
          <NamePageUp $lightTheme={lightTheme}>Мои скиллы</NamePageUp>
          <ArrowUp to={"/Skills"}>
            <ArrowSvg fill={lightTheme ? blackColor : whiteColor} />
          </ArrowUp>
          <WorksLinks>
            <WorksLink to={"All"} children={"Все работы"} state={{ $lightTheme: lightTheme }} />
            <WorksLink to={"Commercial"} children={"Коммерческие"} state={{ $lightTheme: lightTheme }} />
            <WorksLink to={"NotCommercial"} children={"Не Коммерческие"} state={{ $lightTheme: lightTheme }} />
          </WorksLinks>
          <Outlet />
        </WorksWrapper>
      </Container>
    </WorksSection>
  );
}
