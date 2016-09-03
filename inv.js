//List of stickers in inventories
var inv = [
	{
		name: 'Flipsid3 Tactics',
		tournament: 'MLG Columbus 2016',
		url: 'https://steamcommunity.com/market/priceoverview?appid=730&currency=3&market_hash_name=Sticker%20%7C%20Flipsid3%20Tactics%20%7C%20MLG%20Columbus%202016',
		amount: 1
	},
	{
		name: 'FaZe Clan',
		tournament: 'MLG Columbus 2016',
		url: 'https://steamcommunity.com/market/priceoverview?appid=730&currency=3&market_hash_name=Sticker%20%7C%20FaZe%20Clan%20%7C%20MLG%20Columbus%202016',
		amount: 3
	},
	{
		name: 'Natus Vincere',
		tournament: 'MLG Columbus 2016',
		url: 'https://steamcommunity.com/market/priceoverview?appid=730&currency=3&market_hash_name=Sticker%20%7C%20Natus%20Vincere%20%7C%20MLG%20Columbus%202016',
		amount: 2
	},
	{
		name: 'G2 Esports',
		tournament: 'MLG Columbus 2016',
		url: 'https://steamcommunity.com/market/priceoverview?appid=730&currency=3&market_hash_name=Sticker%20%7C%20G2%20Esports%20%7C%20MLG%20Columbus%202016',
		amount: 3
	},
	{
		name: 'Autograph Natus Vincere',
		tournament: 'MLG Columbus 2016',
		url: 'https://steamcommunity.com/market/priceoverview?appid=730&currency=3&market_hash_name=Autograph%20Capsule%20%7C%20Natus%20Vincere%20%7C%20MLG%20Columbus%202016',
		amount: 2
	},
	{
		name: 'Autograph Team EnVyUs',
		tournament: 'MLG Columbus 2016',
		url: 'https://steamcommunity.com/market/priceoverview?appid=730&currency=3&market_hash_name=Autograph%20Capsule%20%7C%20Team%20EnVyUs%20%7C%20MLG%20Columbus%202016',
		amount: 1
	},
	{
		name: 'Autograph Flipsid3 Tactics',
		tournament: 'MLG Columbus 2016',
		url: 'https://steamcommunity.com/market/priceoverview?appid=730&currency=3&market_hash_name=Autograph%20Capsule%20%7C%20Flipsid3%20Tactics%20%7C%20MLG%20Columbus%202016',
		amount: 1
	},
	{
		name: 'Autograph mousesports',
		tournament: 'MLG Columbus 2016',
		url: 'https://steamcommunity.com/market/priceoverview?appid=730&currency=3&market_hash_name=Autograph%20Capsule%20%7C%20mousesports%20%7C%20MLG%20Columbus%202016',
		amount: 1
	},
	{
		name: 'Autograph Gambit Gaming',
		tournament: 'MLG Columbus 2016',
		url: 'https://steamcommunity.com/market/priceoverview?appid=730&currency=3&market_hash_name=Autograph%20Capsule%20%7C%20Gambit%20Gaming%20%7C%20MLG%20Columbus%202016',
		amount: 1
	},
	{
		name: 'Autograph FaZe Clan',
		tournament: 'MLG Columbus 2016',
		url: 'https://steamcommunity.com/market/priceoverview?appid=730&currency=3&market_hash_name=Autograph%20Capsule%20%7C%20FaZe%20Clan%20%7C%20MLG%20Columbus%202016',
		amount: 1
	},
	{
		name: 'Luminosity Gaming',
		tournament: 'MLG Columbus 2016',
		url: 'https://steamcommunity.com/market/priceoverview?appid=730&currency=3&market_hash_name=Sticker%20%7C%20Luminosity%20Gaming%20%7C%20MLG%20Columbus%202016',
		amount: 3
	},
	{
		name: 'Autograph Luminosity Gaming',
		tournament: 'MLG Columbus 2016',
		url: 'https://steamcommunity.com/market/priceoverview?appid=730&currency=3&market_hash_name=Autograph%20Capsule%20%7C%20Luminosity%20Gaming%20%7C%20MLG%20Columbus%202016',
		amount: 3
	},
	{
		name: 'Virtus.Pro',
		tournament: 'MLG Columbus 2016',
		url: 'https://steamcommunity.com/market/priceoverview?appid=730&currency=3&market_hash_name=Sticker%20%7C%20Virtus.Pro%20%7C%20MLG%20Columbus%202016',
		amount: 1
	},
	{
		name: 'Autograph Astralis',
		tournament: 'MLG Columbus 2016',
		url: 'https://steamcommunity.com/market/priceoverview?appid=730&currency=3&market_hash_name=Autograph%20Capsule%20%7C%20Astralis%20%7C%20MLG%20Columbus%202016',
		amount: 1
	},
	{
		name: 'Team EnVyUs',
		tournament: 'MLG Columbus 2016',
		url: 'https://steamcommunity.com/market/priceoverview?appid=730&currency=3&market_hash_name=Sticker%20%7C%20Team%20EnVyUs%20%7C%20MLG%20Columbus%202016',
		amount: 1
	},
	{
		name: 'Astralis',
		tournament: 'MLG Columbus 2016',
		url: 'https://steamcommunity.com/market/priceoverview?appid=730&currency=3&market_hash_name=Sticker%20%7C%20Astralis%20%7C%20MLG%20Columbus%202016',
		amount: 1
	},
	{
		name: 'Team Liquid',
		tournament: 'MLG Columbus 2016',
		url: 'https://steamcommunity.com/market/priceoverview?appid=730&currency=3&market_hash_name=Sticker%20%7C%20Team%20Liquid%20%7C%20MLG%20Columbus%202016',
		amount: 2
	},
	{
		name: 'Autograph Team Liquid',
		tournament: 'MLG Columbus 2016',
		url: 'https://steamcommunity.com/market/priceoverview?appid=730&currency=3&market_hash_name=Autograph%20Capsule%20%7C%20Team%20Liquid%20%7C%20MLG%20Columbus%202016',
		amount: 2
	},
	{
		name: 'Autograph Cloud9',
		tournament: 'MLG Columbus 2016',
		url: 'https://steamcommunity.com/market/priceoverview?appid=730&currency=3&market_hash_name=Autograph%20Capsule%20%7C%20Cloud9%20%7C%20MLG%20Columbus%202016',
		amount: 1
	},
	{
		name: 'Fnatic',
		tournament: 'MLG Columbus 2016',
		url: 'https://steamcommunity.com/market/priceoverview?appid=730&currency=3&market_hash_name=Sticker%20%7C%20Fnatic%20%7C%20MLG%20Columbus%202016',
		amount: 2
	},
	{
		name: 'Autograph Fnatic',
		tournament: 'MLG Columbus 2016',
		url: 'https://steamcommunity.com/market/priceoverview?appid=730&currency=3&market_hash_name=Autograph%20Capsule%20%7C%20Fnatic%20%7C%20MLG%20Columbus%202016',
		amount: 3
	},
	{
		name: 'Autograph Team EnVyUs',
		tournament: 'Cluj-Napoca 2015',
		url: 'https://steamcommunity.com/market/priceoverview?appid=730&currency=3&market_hash_name=Autograph%20Capsule%20%7C%20Team%20EnVyUs%20%7C%20Cluj-Napoca%202015',
		amount: 2
	},
	{
		name: 'Autograph Virtus.Pro',
		tournament: 'Cluj-Napoca 2015',
		url: 'https://steamcommunity.com/market/priceoverview?appid=730&currency=3&market_hash_name=Autograph%20Capsule%20%7C%20Virtus.Pro%20%7C%20Cluj-Napoca%202015',
		amount: 3
	},
	{
		name: 'Autograph Ninjas in Pyjamas',
		tournament: 'Cluj-Napoca 2015',
		url: 'https://steamcommunity.com/market/priceoverview?appid=730&currency=3&market_hash_name=Autograph%20Capsule%20%7C%20Ninjas%20in%20Pyjamas%20%7C%20Cluj-Napoca%202015',
		amount: 3
	},
	{
		name: 'Autograph G2 Esports',
		tournament: 'Cluj-Napoca 2015',
		url: 'https://steamcommunity.com/market/priceoverview?appid=730&currency=3&market_hash_name=Autograph%20Capsule%20%7C%20G2%20Esports%20%7C%20Cluj-Napoca%202015',
		amount: 1
	},
	{
		name: 'Autograph Cloud9',
		tournament: 'Cluj-Napoca 2015',
		url: 'https://steamcommunity.com/market/priceoverview?appid=730&currency=3&market_hash_name=Autograph%20Capsule%20%7C%20Cloud9%20%7C%20Cluj-Napoca%202015',
		amount: 1
	},
	{
		name: 'Autograph Fnatic',
		tournament: 'Cluj-Napoca 2015',
		url: 'https://steamcommunity.com/market/priceoverview?appid=730&currency=3&market_hash_name=Autograph%20Capsule%20%7C%20Fnatic%20%7C%20Cluj-Napoca%202015',
		amount: 2
	},
	{
		name: 'Autograph mousesports',
		tournament: 'Cluj-Napoca 2015',
		url: 'https://steamcommunity.com/market/priceoverview?appid=730&currency=3&market_hash_name=Autograph%20Capsule%20%7C%20mousesports%20%7C%20Cluj-Napoca%202015',
		amount: 1
	},
	{
		name: 'SK Gaming',
		tournament: 'Cologne 2016',
		url: 'https://steamcommunity.com/market/priceoverview?appid=730&currency=3&market_hash_name=Sticker%20%7C%20SK%20Gaming%20%7C%20Cologne%202016',
		amount: 1
	},
	{
		name: 'Team Liquid',
		tournament: 'Cologne 2016',
		url: 'https://steamcommunity.com/market/priceoverview?appid=730&currency=3&market_hash_name=Sticker%20%7C%20Team%20Liquid%20%7C%20Cologne%202016',
		amount: 1
	},
	{
		name: 'FaZe Clan',
		tournament: 'Cologne 2016',
		url: 'https://steamcommunity.com/market/priceoverview?appid=730&currency=3&market_hash_name=Sticker%20%7C%20FaZe%20Clan%20%7C%20Cologne%202016',
		amount: 2
	},
	{
		name: 'Fnatic',
		tournament: 'Cologne 2016',
		url: 'https://steamcommunity.com/market/priceoverview?appid=730&currency=3&market_hash_name=Sticker%20%7C%20Fnatic%20%7C%20Cologne%202016',
		amount: 1
	},
]