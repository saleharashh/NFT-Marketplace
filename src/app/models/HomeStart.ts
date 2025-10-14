import { Artist } from "./Artist";
import { Collection } from "./Collection";
import { NFT } from "./NFT";

export type HomeStart = {
  topNft: NFT;
  collections: Collection[];
  artists: Artist[];
  nfts: NFT[];
  topThreeNft: NFT[];
};
