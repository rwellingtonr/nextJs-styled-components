import styled from "styled-components";

export const Container = styled.div`
	height: 100vh;
	padding: 64px;

	display: grid;

	grid-gap: 16px;
	column-gap: 16px;

	grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));

	align-items: start;
`;

export const ContainerDetails = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	height: 100vh;
`;

export const TextContainer = styled.div`
	padding: 16px;
	border-bottom: 1px solid #414141;
`;

export const CommentsContainer = styled.div`
	padding: 16px;
`;
