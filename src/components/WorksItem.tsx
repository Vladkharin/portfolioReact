import { whiteColor, blackColor, darkColor } from "../App.tsx";
import styled from "styled-components";
import { Link } from "react-router-dom";

type WorksItemsType = {
  lightTheme: boolean;
  item: {
    src: string;
    alt: string;
    linkWebSite: string;
    linkGithub: string;
    type: string;
  };
};

const WorksItemLink = styled(Link)<{ children: string; to: string; state: { $lightTheme: boolean } }>`
  margin-bottom: 20px;
  color: ${(props) => (props.state.$lightTheme ? blackColor : whiteColor)};
  text-decoration: none;
  text-align: center;
`;

const WorksItemImg = styled.img`
  margin-bottom: 20px;
  border-radius: 30px;
  height: 280px;
  width: 280px;
`;

const WorksItem = styled.div<{ $lightTheme: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => (props.$lightTheme ? whiteColor : darkColor)};
  border: 1px solid ${(props) => (props.$lightTheme ? blackColor : whiteColor)};
  border-radius: 30px;
`;

export function WorksItemJSX({ lightTheme, item }: WorksItemsType): JSX.Element {
  return (
    <WorksItem $lightTheme={lightTheme}>
      <WorksItemImg src={item.src} alt={item.alt} />
      <WorksItemLink to={item.linkGithub} target="_blank" children="Ссылка на Github" state={{ $lightTheme: lightTheme }} />
      <WorksItemLink to={item.linkWebSite} target="_blank" children="Ссылка на Сайт" state={{ $lightTheme: lightTheme }} />
    </WorksItem>
  );
}

//   <WorksItems $lightTheme={lightTheme} >
//     {worksItems.map((item, index) => {
//       console.log(item, index);
//     }
//     // <WorksItem $lightTheme={lightTheme} key={index}>
//     //   <WorksItemImg src={item.src} alt={item.alt} />

//     // </WorksItem>
// </WorksItems>
