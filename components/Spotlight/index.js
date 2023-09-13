import Image from "next/image";
import styled from "styled-components";

export default function Spotlight({ image, artist, name }) {
  return (
    <StyledListEntry>
      <Image width={200} height={200} src={image} alt={name} />
      <br />
      <small>{artist}</small>
    </StyledListEntry>
  );
}
const StyledListEntry = styled.li`
  list-style: none;
  margin: 2rem;
`;
