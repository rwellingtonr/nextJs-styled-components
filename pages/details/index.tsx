import Link from "next/link";
import { useAlbum } from "../../context/album";
import { Album, AlbumDetail } from "../../theme/album";
import { ContainerDetails, CommentsContainer, TextContainer } from "../../theme/container";
import { Image } from "../../theme/image";
import { Comment, TitleH1, TitleH2, UserName } from "../../theme/typography";

type Props = {};

export default function Details({}: Props) {
	const { album } = useAlbum();
	console.log(album);
	return (
		<>
			<TitleH1>Gallery/{album?.title}</TitleH1>
			<ContainerDetails>
				<Link href="/">
					<AlbumDetail key={album?.id}>
						<Image src={album?.image} alt={album?.title} />
						<TextContainer>
							<TitleH2>{album?.title}</TitleH2>
							<UserName>{album?.username}</UserName>
						</TextContainer>
						<CommentsContainer>
							<TitleH2 marginBottom={20}>Comentário</TitleH2>
							{album?.comments.map(({ comment, username }, index) => (
								<div key={index}>
									<Comment>{comment}</Comment>
									<UserName>{username}</UserName>
								</div>
							))}
						</CommentsContainer>
					</AlbumDetail>
				</Link>
			</ContainerDetails>
		</>
	);
}
