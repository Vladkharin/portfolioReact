import React, { useState } from "react";
import styled from "styled-components";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Works } from "./components/Works";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { WorksItemJSX } from "./components/WorksItem.tsx";

export type DataType = {
  worksItems: {
    src: string;
    alt: string;
    linkWebSite: string;
    linkGithub: string;
    type: string;
  }[];
};

const data: DataType = {
  worksItems: [
    {
      src: "../assets/uber-min.jpg",
      alt: "uber",
      linkGithub: "https://github.com/Vladkharin/Uber",
      linkWebSite: "https://vladkharin.github.io/Uber/",
      type: "NotCommercial",
    },

    {
      src: "../assets/glopt.png",
      alt: "glopt",
      linkGithub: "https://github.com/Vladkharin/Glopt",
      linkWebSite: "https://vladkharin.github.io/Glopt/dist/",
      type: "NotCommercial",
    },
    {
      src: "../assets/irfas.png",
      alt: "irfas",
      linkGithub: "https://github.com/Vladkharin/Irfas",
      linkWebSite: "https://vladkharin.github.io/Irfas/dist/",
      type: "NotCommercial",
    },
    {
      src: "../assets/legoCar.jpg",
      alt: "legoCar",
      linkGithub: "https://github.com/Vladkharin/LegoCar",
      linkWebSite: "https://vladkharin.github.io/LegoCar/dist/",
      type: "NotCommercial",
    },
    {
      src: "../assets/loan.jpg",
      alt: "loan",
      linkGithub: "https://github.com/Vladkharin/Loan",
      linkWebSite: "https://vladkharin.github.io/Loan/dist/",
      type: "NotCommercial",
    },
    {
      src: "../assets/mainbg-min.png",
      alt: "mainbg-min",
      linkGithub: "https://github.com/Vladkharin/Wordpress",
      linkWebSite: "https://vladkharin.github.io/Wordpress/FirstBigProject/src/",
      type: "NotCommercial",
    },
    {
      src: "../assets/picture.jpg",
      alt: "picture",
      linkGithub: "https://github.com/Vladkharin/Picture",
      linkWebSite: "https://vladkharin.github.io/Picture/",
      type: "NotCommercial",
    },
    {
      src: "../assets/pulse-min.jpg",
      alt: "pulse-min",
      linkGithub: "https://github.com/Vladkharin/Pulse",
      linkWebSite: "https://vladkharin.github.io/Pulse/dist/",
      type: "NotCommercial",
    },
    {
      src: "../assets/BackGround_firstBlock.jpg",
      alt: "likehouse",
      linkGithub: "https://github.com/Vladkharin/Glopt",
      linkWebSite: "https://vladkharin.github.io/Glopt/dist/",
      type: "Commercial",
    },
  ],
};

export const darkColor = "#808080";
export const blackColor = "#000";
export const whiteColor = "#fff";

export type ChangeSlideType = {
  operator: string;
  changeNumber: number;
  positionSlide: number;
  setScroll: React.Dispatch<React.SetStateAction<number>>;
};

export const Container = styled.div`
  margin: 0 auto;
  width: 1280px;
`;

export const ArrowUp = styled(Link)`
  width: 60px;
  height: 60px;
  rotate: 270deg;
`;

export const ArrowDown = styled(Link)`
  width: 60px;
  height: 60px;
  rotate: 90deg;
  display: block;
`;

export const NamePageUp = styled.div<{ $lightTheme: boolean }>`
  color: ${(props) => (props.$lightTheme ? blackColor : whiteColor)};
  width: 100px;
  display: block;
  text-align: center;
`;

export const NamePageDown = styled.div<{ $lightTheme: boolean }>`
  color: ${(props) => (props.$lightTheme ? blackColor : whiteColor)};
  width: 100px;
  display: block;
  text-align: center;
`;

const WorksItems = styled.div<{ $lightTheme: boolean; key: string }>`
  margin-top: 30px;
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
`;

function App() {
  const [lightTheme, setLightTheme] = useState(false);
  const [height] = useState(window.innerHeight);

  return (
    <>
      <Router>
        <React.Fragment>
          <Header lightTheme={lightTheme} setLightTheme={setLightTheme} />
          <Routes>
            <Route path="/" element={<About lightTheme={lightTheme} height={height} />}></Route>
            <Route path="/Skills" element={<Skills lightTheme={lightTheme} height={height} />}></Route>
            <Route path="/Works/*" element={<Works lightTheme={lightTheme} height={height} />}>
              <Route
                path={"All"}
                element={
                  <WorksItems $lightTheme={lightTheme} key={"all"}>
                    {data.worksItems.map((item, index) => (
                      <WorksItemJSX item={item} key={index} lightTheme={lightTheme} />
                    ))}
                  </WorksItems>
                }
              />
              <Route
                path={"NotCommercial"}
                element={
                  <WorksItems $lightTheme={lightTheme} key={"all"}>
                    {data.worksItems.map((item, index) => {
                      if (item.type == "NotCommercial") {
                        return <WorksItemJSX item={item} key={index} lightTheme={lightTheme} />;
                      }
                    })}
                  </WorksItems>
                }></Route>
              <Route
                path={"Commercial"}
                element={
                  <WorksItems $lightTheme={lightTheme} key={"all"}>
                    {data.worksItems.map((item, index) => {
                      if (item.type == "Commercial") {
                        return <WorksItemJSX item={item} key={index} lightTheme={lightTheme} />;
                      }
                    })}
                  </WorksItems>
                }></Route>
            </Route>
          </Routes>
        </React.Fragment>
      </Router>
    </>
  );
}

export default App;
