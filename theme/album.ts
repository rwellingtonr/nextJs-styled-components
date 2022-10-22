import styled from "styled-components";

export const Album = styled.button`
	background-color: #292929;

	border: 1px solid #292929;
	border-radius: 8px;

	width: 100%;
	height: 350px;
	padding: 5px 0;

	text-align: start;
	color: ${(props) => props.theme.colors.primary};

	&:hover {
		cursor: pointer;
	}
`;

export const AlbumDetail = styled(Album)`
	width: 30vw;
	height: auto;
`;
