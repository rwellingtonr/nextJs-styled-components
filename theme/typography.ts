import styled from "styled-components";

export const TitleH1 = styled.h1`
	padding: 40px 60px 0 60px;
	text-decoration: underline #414141;
`;

export const TitleH2 = styled.h2<{ marginBottom?: number }>`
	margin-bottom: ${(props) => props.marginBottom || 8}px;
	color: ${(props) => props.theme.color};
`;

export const UserName = styled.p`
	color: #ccc;
`;

export const Comment = styled(TitleH2)`
	font-size: 18px;
	font-weight: 600;
`;
