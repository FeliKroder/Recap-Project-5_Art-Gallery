import FavoriteButton from "@/components/FavoriteButton";
import Spotlight from "@/components/Spotlight";

export default function SpotlightPage({
  data,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const randomArt = data[Math.floor(Math.random() * data.length)];

  console.log("artPiecesInfo: ", artPiecesInfo);

  return (
    <div>
      <h1>Art Gallery</h1>
      <Spotlight
        image={randomArt.imageSource}
        artist={randomArt.artist}
        name={randomArt.name}
      />
      <FavoriteButton
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
        slug={randomArt.slug}
      />
    </div>
  );
}
