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
	skillsPath: {
		skill: string;
		burst: string;
	};
	description: string;
	element: string;
	rarity: number;
	weaponType: string;
	constellation: string;
	skillMaterials: {
		book: {
			type: string;
			href: string;
			origin: {
				name: string;
				href: string;
			};
		};
		commonMaterial: {
			title: string;
			href: string;
			iconPath: string;
			origin: {
				name: string;
				iconPath: string;
			};
		};
		bossDrop: {
			title: string;
			href: string;
			iconPath: string;
			quality: number;
			origin: {
				name: string;
				iconPath: string;
				href: string;
			};
		};
	};
	ascendMaterials: {
		gemType: {
			type: string;
			href: string;
			origin: {
				name: string;
			};
		};
		bossDrop: {
			title: string;
			href: string;
			iconPath: string;
			quality: number;
			origin: {
				name: string;
				iconPath: string;
				href: string;
			};
		};
		commonMaterial1: {
			title: string;
			href: string;
			iconPath: string;
			quality: number;
			origin: {
				name: string;
			};
		};
		commonMaterial2: {
			title: string;
			href: string;
			iconPath: string;
			origin: {
				name: string;
				iconPath: string;
			};
		};
	};
}
