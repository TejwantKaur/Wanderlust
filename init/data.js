const sampleListings = [
    {
        title: "Historic Villa in Tuscany",
        description: "Experience charm in a historic Italian villa surrounded by vineyards.",
        image: "https://images.unsplash.com/photo-1619070849223-c02f450670ed",
        price: 1200,
        location: "Florence",
        country: "Italy"
    },
    {
        title: "Beachside Bungalow",
        description: "Wake up to ocean waves and golden sand.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        price: 900,
        location: "Goa",
        country: "India"
    },
    {
        title: "Modern Apartment in New York",
        description: "Luxury apartment in the heart of Manhattan.",
        image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
        price: 2500,
        location: "New York",
        country: "USA"
    },
    {
        title: "Mountain Cabin Retreat",
        description: "Peaceful cabin surrounded by mountains and forests.",
        image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
        price: 800,
        location: "Aspen",
        country: "USA"
    },
    {
        title: "Parisian Studio",
        description: "Romantic studio apartment with Eiffel Tower views.",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
        price: 1500,
        location: "Paris",
        country: "France"
    },
    {
        title: "Santorini Cliff House",
        description: "Beautiful white house overlooking the Aegean Sea.",
        image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21",
        price: 1800,
        location: "Santorini",
        country: "Greece"
    },
    {
        title: "Desert Luxury Camp",
        description: "Stay under the stars in a luxury desert tent.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        price: 600,
        location: "Dubai",
        country: "UAE"
    },
    {
        title: "Tokyo Capsule Apartment",
        description: "Minimalist modern capsule living in Tokyo.",
        image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc",
        price: 700,
        location: "Tokyo",
        country: "Japan"
    },
    {
        title: "Swiss Alps Chalet",
        description: "Snowy mountain chalet with breathtaking views.",
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
        price: 2000,
        location: "Zermatt",
        country: "Switzerland"
    },
    {
        title: "Lake House Escape",
        description: "Relax by the lake with a peaceful sunset view.",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        price: 950,
        location: "Lake Tahoe",
        country: "USA"
    },
    {
        title: "London City Apartment",
        description: "Stylish apartment in central London.",
        image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
        price: 1700,
        location: "London",
        country: "UK"
    },
    {
        title: "Bali Jungle Villa",
        description: "Private villa surrounded by lush jungle.",
        image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb2104c",
        price: 1100,
        location: "Bali",
        country: "Indonesia"
    },
    {
        title: "Iceland Glass Cabin",
        description: "Watch the northern lights from your bed.",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        price: 1400,
        location: "Reykjavik",
        country: "Iceland"
    },
    {
        title: "Spanish Beach House",
        description: "Sunny beach house with Mediterranean vibes.",
        image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
        price: 1000,
        location: "Barcelona",
        country: "Spain"
    },
    {
        title: "Countryside Farmhouse",
        description: "Rustic farmhouse surrounded by green fields.",
        image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e",
        price: 750,
        location: "Tuscany",
        country: "Italy"
    },
    {
        title: "Canadian Log Cabin",
        description: "Cozy wooden cabin in snowy forests.",
        image: "https://images.unsplash.com/photo-1472220625704-91e1462799b2",
        price: 850,
        location: "Banff",
        country: "Canada"
    },
    {
        title: "Maldives Overwater Villa",
        description: "Luxury villa above turquoise water.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        price: 3000,
        location: "Malé",
        country: "Maldives"
    },
    {
        title: "Amsterdam Canal House",
        description: "Classic canal house in the historic district.",
        image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
        price: 1300,
        location: "Amsterdam",
        country: "Netherlands"
    },
    {
        title: "Sydney Harbour Apartment",
        description: "Apartment with Opera House views.",
        image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03",
        price: 2100,
        location: "Sydney",
        country: "Australia"
    },
    {
        title: "Treehouse Stay",
        description: "Unique treehouse experience in the forest.",
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
        price: 650,
        location: "Oregon",
        country: "USA"
    },
    {
        title: "Greek Island Cottage",
        description: "Cozy white cottage with blue sea views and peaceful surroundings.",
        image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21",
        price: 950,
        location: "Mykonos",
        country: "Greece"
    },
    {
        title: "New Zealand Lake Cabin",
        description: "Beautiful wooden cabin beside a crystal clear lake.",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        price: 1100,
        location: "Queenstown",
        country: "New Zealand"
    },
    {
        title: "Dubai Skyline Apartment",
        description: "Modern luxury apartment with breathtaking skyline views.",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
        price: 2000,
        location: "Dubai",
        country: "UAE"
    },
    {
        title: "Kyoto Traditional House",
        description: "Stay in a traditional Japanese wooden machiya house.",
        image: "https://images.unsplash.com/photo-1526481280690-9064e3d63a0c",
        price: 1000,
        location: "Kyoto",
        country: "Japan"
    },
    {
        title: "Norwegian Fjord Cabin",
        description: "Cabin surrounded by stunning fjords and waterfalls.",
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
        price: 1400,
        location: "Bergen",
        country: "Norway"
    },
    {
        title: "California Beach Villa",
        description: "Luxury villa just steps away from the Pacific Ocean.",
        image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
        price: 2300,
        location: "Malibu",
        country: "USA"
    },
    {
        title: "Scottish Highland Cottage",
        description: "Charming stone cottage in the misty Scottish Highlands.",
        image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
        price: 900,
        location: "Inverness",
        country: "Scotland"
    },
    {
        title: "Moroccan Riad",
        description: "Traditional riad with beautiful courtyard and mosaics.",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada",
        price: 850,
        location: "Marrakech",
        country: "Morocco"
    },
    {
        title: "Thai Beach Hut",
        description: "Relax in a tropical hut surrounded by palm trees.",
        image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
        price: 700,
        location: "Phuket",
        country: "Thailand"
    },
    {
        title: "Alaskan Wilderness Lodge",
        description: "Adventure lodge surrounded by snowy mountains and forests.",
        image: "https://images.unsplash.com/photo-1482192505345-5655af888cc4",
        price: 1200,
        location: "Anchorage",
        country: "USA"
    }
];

module.exports = {
    data: sampleListings
};