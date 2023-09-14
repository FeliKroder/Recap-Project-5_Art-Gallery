import FavoriteButton from "../FavoriteButton";
import Image from "next/image";
import styled from "styled-components";

export default function Spotlight({
  image,
  artist,
  name,
  artPiecesInfo,
  onToggleFavorite,
  slug,
}) {
  return (
    <StyledListEntry>
      <Image width={200} height={200} src={image} alt={name} />
      <br />
      <small>{artist}</small>
      <FavoriteButton
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
        slug={slug}
      />
    </StyledListEntry>
  );
}
const StyledListEntry = styled.li`
  list-style: none;
  margin: 2rem;
`;
