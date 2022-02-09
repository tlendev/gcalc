export interface CharacterInterface {
	id: string;
	name: string;
	avatarPath: string;
	elementColor: string;
}

export interface CharacterDetailsInterface {
	id: string;
	name: string;
	gatchaArtPath: string;
	avatarPath: string;
	description: string;
	element: string;
	rarity: number;
	weaponType: string;
	constellation: string;
	skillMaterials: {
		bookType: string;
		commonMaterial: string;
		bossDrop: string;
	};
	ascendMaterials: {
		gemType: string;
		bossDrop: string;
		commonMaterial1: string;
		commonMaterial2: string;
	};
}
