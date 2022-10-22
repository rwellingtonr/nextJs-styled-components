import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useAlbum } from "../context/album";
import type { PhotosProps, AlbumsProps } from "../interface";
import { api } from "../service/api";
import { Album } from "../theme/album";
import { Container, TextContainer } from "../theme/container";
import { Image } from "../theme/image";
import { TitleH1, TitleH2, UserName } from "../theme/typography";

export default function Home({ albums }: PhotosProps) {
	const router = useRouter();
	const { setAlbum } = useAlbum();

	const handleClick = (album: AlbumsProps) => {
		setAlbum(album);
		router.push("/details");
	};
	return (
		<>
			<TitleH1>Gallery</TitleH1>
			<Container>
				{albums.map((album) => (
					<Album key={album.id} onClick={() => handleClick(album)}>
						<Image src={album.image} alt={album.title} />
						<TextContainer>
							<TitleH2>{album.title}</TitleH2>
							<UserName>{album.username}</UserName>
						</TextContainer>
					</Album>
				))}
			</Container>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	const id = "0b498b01-c20f-49d9-8ab6-edda571b4d62";
	const res = await api.get<PhotosProps>(id);

	return {
		props: {
			albums: res.data.albums,
		},
	};
};
