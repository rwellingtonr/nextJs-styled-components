export type PhotosProps = {
	albums: AlbumsProps[];
};

export type AlbumsProps = {
	id: number;
	title: string;
	username: string;
	image: string;
	comments: Comment[];
};

type Comment = {
	username: string;
	comment: string;
};
