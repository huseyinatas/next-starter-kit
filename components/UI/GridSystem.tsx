import tw from "tailwind-styled-components";

interface ColumnProps {
  size: string;
}

export const Row = tw.div`
     grid
     gap-6
     mobile:grid-cols-4
     mobile:justify-center
     tablet:grid-cols-8
     desktop:grid-cols-12
     `;

export const Col = tw.div<ColumnProps>`
     ${(props) => props.size === "1" && "col-span-1"}
     ${(props) => props.size === "2" && "col-span-2"}
     ${(props) => props.size === "3" && "col-span-3"}
     ${(props) => props.size === "4" && "col-span-4"}
     ${(props) =>
       props.size === "5" &&
       "mobile:col-span-12 tablet:col-span-12 desktop:col-span-5"}
     ${(props) =>
       props.size === "6" &&
       "mobile:col-span-12 tablet:col-span-12 desktop:col-span-6"}
     ${(props) =>
       props.size === "7" &&
       "mobile:col-span-12 tablet:col-span-12 desktop:col-span-7"}
     ${(props) =>
       props.size === "8" &&
       "mobile:col-span-12 tablet:col-span-12 desktop:col-span-8"}
     ${(props) =>
       props.size === "9" &&
       "mobile:col-span-12 tablet:col-span-12 desktop:col-span-9"}
     ${(props) =>
       props.size === "10" &&
       "mobile:col-span-12 tablet:col-span-12 desktop:col-span-10"}
     ${(props) =>
       props.size === "11" &&
       "mobile:col-span-12 tablet:col-span-12 desktop:col-span-11"}
     ${(props) => props.size === "12" && "col-span-12"}
     ${(props) => !props.size && "col-span-12"}
     `;
