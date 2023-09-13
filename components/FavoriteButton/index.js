import Image from "next/image";
// import FavIcon from "@/assets/heart.svg";

export default function FavoriteButton({ artPiecesInfo, onToggleFavorite }) {
  const { isFavorite, slug } = artPiecesInfo;
  return (
    <button onClick={() => onToggleFavorite(slug)}>
      {isFavorite ? "Remove from favorites" : "Add to favorites"}
    </button>
  );
}
