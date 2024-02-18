import styled from "styled-components";
import { LogoSvg, MoonSvg, SunSvg } from "./Assets.tsx";
import { Container, whiteColor, blackColor, darkColor } from "../App.tsx";
import { Link } from "react-router-dom";
type HeaderType = {
  lightTheme: boolean;
  setLightTheme: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeaderTag = styled.header<{ $lightTheme: boolean }>`
  position: fixed;
  width: 100%;
  padding: 10px 30px;
  z-index: 1;
  background-color: ${(props) => (props.$lightTheme ? whiteColor : darkColor)};
  border-bottom: 1px solid ${(props) => (props.$lightTheme ? blackColor : whiteColor)};
`;

const HeaderWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
`;

const LogoHeaderWrapper = styled(Link)`
  height: 60px;
  width: 60px;
`;

const LinksHeaderWrapper = styled.div`
  display: flex;
  flex-basis: 61%;
  align-items: center;
  justify-content: end;
  gap: 80px;
`;

const LinkHeader = styled(Link)<{ children: string; to: string; state: { $lightTheme: boolean } }>`
  color: ${(props) => (props.state.$lightTheme ? blackColor : whiteColor)};
  text-decoration: none;
`;

const ButtonsHeaderWrapper = styled.div`
  display: flex;
  flex-basis: 33%;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 100%;
`;

const ButtonHeader = styled.button<{ $lightTheme: boolean }>`
  padding: 10px;
  background: none;
  border: 1px solid ${(props) => (props.$lightTheme ? blackColor : whiteColor)};
  border-radius: 100%;
  height: 60px;
  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.5);
`;

export function Header({ lightTheme, setLightTheme }: HeaderType) {
  return (
    <HeaderTag $lightTheme={lightTheme}>
      <Container>
        <HeaderWrapper>
          <LogoHeaderWrapper to={"/"}>
            <LogoSvg fill={lightTheme ? blackColor : whiteColor} />
          </LogoHeaderWrapper>
          <LinksHeaderWrapper>
            <LinkHeader to={"/"} children={"Обо мне"} state={{ $lightTheme: lightTheme }}></LinkHeader>
            <LinkHeader to={"/Skills"} children={"Мои скиллы"} state={{ $lightTheme: lightTheme }}></LinkHeader>
            <LinkHeader to={"/Works/All"} children={"Мои работы"} state={{ $lightTheme: lightTheme }}></LinkHeader>
          </LinksHeaderWrapper>
          <ButtonsHeaderWrapper>
            <ButtonHeader $lightTheme={lightTheme} onClick={() => setLightTheme(false)}>
              <MoonSvg fill={lightTheme ? blackColor : whiteColor} />
            </ButtonHeader>
            <ButtonHeader $lightTheme={lightTheme} onClick={() => setLightTheme(true)}>
              <SunSvg fill={lightTheme ? blackColor : whiteColor} />
            </ButtonHeader>
          </ButtonsHeaderWrapper>
        </HeaderWrapper>
      </Container>
    </HeaderTag>
  );
}
