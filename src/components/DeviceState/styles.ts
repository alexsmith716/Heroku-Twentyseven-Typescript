import styled from 'styled-components';
import { colors } from '../../styled/Colors';

export const DeviceStateStyled = styled.div`
	background-color: #fffff0;
	border: 2px solid #b0c4de;
	padding: 16px;
`;

export const StoreStateOnline = styled.div`
	color: ${colors.olive};
	font-family: 'Arial', sans-serif;
`;

export const StoreStateUserAgent = styled.div`
	color: ${colors.crimson};
	font-family: 'Arial', sans-serif;
`;

export const StoreStateIsBot = styled.div`
	color: ${colors.orangered};
	font-family: 'Arial', sans-serif;
`;

export const StoreStateBlurb = styled.div`
	color: ${colors.mediumspringgreen};
	font-family: 'Arial', sans-serif;
`;
