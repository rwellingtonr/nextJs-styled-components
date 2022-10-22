import * as React from "react";
import type { AlbumsProps } from "../interface";

type AlbumProviderProps = {
	children: React.ReactNode;
};

type AlbumContext = {
	album: AlbumsProps | null;
	setAlbum: (album: AlbumsProps) => void;
};

const Context = React.createContext({} as AlbumContext);

export default function AlbumProvider({ children }: AlbumProviderProps) {
	const [album, setAlbum] = React.useState<AlbumsProps | null>(null);

	return <Context.Provider value={{ album, setAlbum }}>{children}</Context.Provider>;
}

export const useAlbum = () => React.useContext(Context);
