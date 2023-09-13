import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  function handleToggleFavorite(slug) {
    setArtPiecesInfo((artPiecesInfo) => {
      // find the art piece in the state
      const info = artPiecesInfo.find((info) => info.slug === slug);
      // if the art piece is already in the state, toggle the isFavorite property
      if (info) {
        return artPiecesInfo.map((info) =>
          info.slug === slug ? { ...info, isFavorite: !info.isFavorite } : info
        );
      }
      // if the art piece is not in the state, add it with isFavorite set to true
      return [...artPiecesInfo, { slug, isFavorite: true }];
    });
  }

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <SWRConfig>
      <GlobalStyle />
      <Component
        {...pageProps}
        data={data}
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={handleToggleFavorite}
      />
      <Layout />
    </SWRConfig>
  );
}
