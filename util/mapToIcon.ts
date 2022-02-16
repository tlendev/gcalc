export const mapWeaponToIcon = (weapon: string) => {
	switch (weapon) {
		case 'sword':
			return 'normal_sword.png';
		case 'claymore':
			return 'normal_claymore.png';
		case 'bow':
			return 'normal_bow.png';
		case 'polearm':
			return 'normal_polearm.png';
		case 'catalyst':
			return 'normal_catalyst.png';
		default:
			return 'normal_sword.png';
	}
};
