import tw from "tailwind-styled-components";

interface ContainerProps {
  content: string;
}
const Container = tw.div<ContainerProps>`
     mx-auto
     w-full
     mobile:px-4
     tablet:px-6
     desktop:px-24
     ${(props) => props.content === "true" && "desktop:px-56"}
     ${(props) => props.content === "false" && "desktop:px-24"}
     `;

export default Container;
