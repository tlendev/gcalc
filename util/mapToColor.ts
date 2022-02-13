export const mapQualityToColor = (quality: number) => {
	switch (quality) {
		case 1:
			return '#4c4c4c';
		case 2:
			return '#3f734d';
		case 3:
			return '#386385';
		case 4:
			return '#995ac7';
		case 5:
			return '#e3a92d';
		default:
			return '#4c4c4c';
	}
};
