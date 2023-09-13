import useSWR from "swr";

import ArtPieces from "@/components/ArtPieces";
import Spotlight from "@/components/Spotlight";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  if (!data) {
    return null;
  }

  const max = data.length;

  const random = getRandomInt(max);

  const randomArt = data[random];

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  return (
    <div>
      <h1>Art Gallery</h1>
      <ArtPieces pieces={data} />
      <Spotlight
        image={randomArt.imageSource}
        artist={randomArt.artist}
        name={randomArt.name}
      />
    </div>
  );
}
