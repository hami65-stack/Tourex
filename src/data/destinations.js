// Curated Tour Packages & Destinations across Himachal Pradesh & Uttarakhand
// Tailored for Indian travelers and tourists with INR pricing, day-by-day itineraries, and inclusions

export const heroDetails = {
  headline: "Let's find your next adventure",
  subheadline: "Handcrafted journeys across snow-clad Himachal Pradesh & sacred Uttarakhand. Discover hidden pine valleys, high-altitude desert circuits, ancient temples, and luxury alpine chalets with native Pahadi guides.",
  ctaText: "Take a tour",
  bgImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85",
  cutoutImage1: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80", // Himalayan mountain panorama
  cutoutImage2: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"  // Emerald alpine lake
};

export const destinationsData = [
  // --- HIMACHAL PRADESH DESTINATIONS ---
  {
    id: "manali-solang-atal-tunnel",
    title: "Manali, Solang Valley & Atal Tunnel Adventure",
    location: "Manali & Kullu, Himachal Pradesh",
    state: "Himachal Pradesh",
    country: "India",
    category: "Snow & Mountains",
    price: 14999, // INR
    duration: "5 Days / 4 Nights",
    rating: 4.96,
    reviewsCount: 384,
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    badge: "Bestseller",
    featured: true,
    pickupLocations: ["Delhi Airport / Kashmiri Gate", "Chandigarh ISBT / Airport", "Direct Manali"],
    overview: "Experience the ultimate Himalayan escape in Manali. From thrilling snow adventure at Solang Valley and crossing the engineering marvel Atal Tunnel to Sissu's frozen waterfalls, Old Manali's cedar-scented cafes, and sacred Hadimba Temple.",
    highlights: [
      "Drive through world's longest highway tunnel (Atal Tunnel) to Sissu Valley",
      "Snow adventures at Solang: Paragliding, Zorbing, Cable Car & Snowmobiles",
      "Heritage walk to 500-year-old Hadimba Devi Temple & Jogini Waterfall trek",
      "Stay in luxury cedar-wood alpine chalets with private mountain-facing balconies",
      "Complimentary Himachali Siddu & Apple cider tasting experience"
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Manali & Old Manali Heritage", desc: "Pickup from Delhi/Chandigarh via Volvo or private cab. Check-in at luxury wooden chalet. Afternoon walk to Hadimba Temple, Club House, and cozy cafes of Old Manali." },
      { day: "Day 2", title: "Solang Valley Adventures & Sissu (Lahaul)", desc: "Morning drive through the magnificent Atal Tunnel (9.02 km). Explore the snow-swept landscape of Sissu in Lahaul Valley. Return to Solang Valley for paragliding and zip-lining." },
      { day: "Day 3", title: "Rohtang Pass Snow Excursion (Optional / Permit)", desc: "Excursion towards the snow-covered Rohtang Pass (13,058 ft) with snow scooter and tube rides. Evening shopping for authentic Kullu shawls and dry fruits at Mall Road." },
      { day: "Day 4", title: "Naggar Castle & Vashisht Hot Springs", desc: "Visit historic Naggar Castle (former royal seat) and Nicholas Roerich Art Gallery. Rejuvenating dip in the natural hot sulphur springs at Vashisht Village, followed by Jogini Waterfall hike." },
      { day: "Day 5", title: "Kullu Rafting & Departure", desc: "River rafting in the roaring Beas River at Kullu, visit Vaishno Devi Temple cave, and return transfer to Chandigarh or Delhi." }
    ],
    included: [
      "4 Nights in 4-Star Mountain Chalet with Breakfast & Dinner",
      "Private AC Sedan/Innova for local sightseeing & transfers",
      "Atal Tunnel & Sissu Green Tax / Hill Tolls",
      "English & Hindi speaking native Pahadi tour driver",
      "Complimentary Bonfire night with light music"
    ],
    excluded: ["Personal paragliding / adventure gear fees", "Rohtang Pass NGT permit fee (if opted)"]
  },
  {
    id: "spiti-valley-chandratal",
    title: "Spiti Valley High-Altitude 4x4 Odyssey & Chandratal",
    location: "Kaza, Spiti Valley, Himachal Pradesh",
    state: "Himachal Pradesh",
    country: "India",
    category: "High-Altitude Treks",
    price: 24500,
    duration: "8 Days / 7 Nights",
    rating: 4.98,
    reviewsCount: 220,
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80",
    badge: "Bucket List",
    featured: true,
    pickupLocations: ["Shimla", "Chandigarh", "Delhi"],
    overview: "Traverse the cold desert kingdom known as 'The Middle Land'. Witness the thousand-year-old Key Monastery perched on cliffs, send a postcard from Hikkim (world's highest post office), cross Asia's highest suspension bridge at Chicham, and camp beside the celestial crescent of Chandratal Lake.",
    highlights: [
      "Camp beside the crystal blue waters of Chandratal Lake under the Milky Way",
      "Visit 1,000-year-old Tabo Monastery ('Ajanta of the Himalayas') & Key Gompa",
      "Post a letter at Hikkim (14,567 ft) - World's Highest Post Office",
      "Drive across Chicham Bridge at 13,596 ft overlooking a 1,000 ft gorge",
      "4x4 High-clearance vehicle with oxygen cylinders and acclimatization halts"
    ],
    itinerary: [
      { day: "Day 1", title: "Shimla to Sangla Valley / Chitkul", desc: "Scenic hill drive past Kufri and Narkanda into the gateway of Kinnaur. Stay at riverside luxury camp in Sangla." },
      { day: "Day 2", title: "Chitkul to Kalpa", desc: "Visit Chitkul, the last inhabited village on the Indo-Tibet border. Drive to Kalpa with mesmerizing golden hour view of sacred Kinner Kailash." },
      { day: "Day 3", title: "Kalpa to Nako & Tabo Monastery", desc: "Enter Spiti desert terrain. Visit Nako sacred lake and 1000-year-old UNESCO recognized Tabo Monastery." },
      { day: "Day 4", title: "Tabo to Dhankar & Kaza", desc: "Explore the dramatic cliff-hanging Dhankar Monastery. Arrive in Kaza, the administrative heart of Spiti Valley." },
      { day: "Day 5", title: "Highest Villages: Hikkim, Komic & Langza", desc: "Visit Hikkim post office, Komic (highest motorable village), and the gigantic golden Buddha statue in Langza." },
      { day: "Day 6", title: "Key Gompa, Kibber & Chicham Bridge", desc: "Ascend to Key Gompa for butter tea with Tibetan lamas. Drive over the dizzying Chicham Bridge to Kibber sanctuary." },
      { day: "Day 7", title: "Kaza to Chandratal Lake via Kunzum Pass", desc: "Ascend over Kunzum Pass (14,931 ft) with temple prayers. Trek to the crescent-shaped Chandratal Lake. Stargazing camp night." },
      { day: "Day 8", title: "Chandratal to Atal Tunnel & Manali Drop", desc: "Off-road drive through Batal and Rohtang foothills, crossing Atal Tunnel to drop at Manali." }
    ],
    included: [
      "7 Nights handpicked boutique homestays and Swiss alpine tents",
      "Dedicated 4x4 Mahindra Scorpio/Innova with expert mountain driver",
      "Breakfast and authentic organic Pahadi dinners",
      "Inner-Line permits and green cess fees",
      "Portable medical oxygen cylinder & oximeter support"
    ],
    excluded: ["Personal laundry & beverages", "Travel insurance"]
  },
  {
    id: "kasol-tosh-kheerganga",
    title: "Kasol, Tosh & Kheerganga Hot Springs Trek",
    location: "Parvati Valley, Himachal Pradesh",
    state: "Himachal Pradesh",
    country: "India",
    category: "Treks & Adventure",
    price: 10999,
    duration: "4 Days / 3 Nights",
    rating: 4.93,
    reviewsCount: 310,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    badge: "Youth & Solo Favorite",
    featured: true,
    pickupLocations: ["Delhi (Majnu Ka Tilla / ISBT)", "Chandigarh", "Bhuntar Airport"],
    overview: "Immerse in the magical bohemian vibes of Parvati Valley. Stroll through the deodar woods along the roaring turquoise Parvati River in Kasol, stay in wooden homestays in Tosh overlooking waterfalls, and hike to Kheerganga's open-air hot sulphur springs.",
    highlights: [
      "Scenic trek through pine forests and gushing waterfalls to Kheerganga",
      "Relax in natural hot sulphur springs with panoramic snow peaks all around",
      "Riverside cafe hopping in Kasol with authentic Israeli, Italian & Tibetan food",
      "Stargazing and bonfire camping at Kheerganga ridge",
      "Visit holy Manikaran Sahib Gurudwara and its sacred boiling geysers"
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Kasol & Chalal Village Trek", desc: "Arrive in Kasol via luxury Volvo. Riverside walk across suspension bridge to quaint Chalal village. Evening cafe culture & music." },
      { day: "Day 2", title: "Drive to Barshaini & Tosh Village Stay", desc: "Short drive to Barshaini. Hike up to the picturesque village of Tosh. Enjoy traditional Himachali food and epic sunset over snow peaks." },
      { day: "Day 3", title: "Trek to Kheerganga (12 KM)", desc: "Trek through deodar woods, wooden bridges, and Rudra Nag waterfall to the Kheerganga meadow. Soak in the hot water spring pool under the stars." },
      { day: "Day 4", title: "Descent, Manikaran Gurudwara & Return", desc: "Morning sunrise over Parvati Range. Trek down to Barshaini. Visit sacred Manikaran Sahib Gurudwara for langar, then board return Volvo." }
    ],
    included: [
      "Delhi-Kasol-Delhi round-trip Luxury AC Volvo tickets",
      "3 Nights stay (Kasol riverside hotel, Tosh wooden lodge, Kheerganga dome camp)",
      "Daily breakfast and mountain dinners",
      "Certified mountain trek guide with safety equipment",
      "Campfire with music at Kheerganga"
    ],
    excluded: ["Pony/porter charges if required for personal bags", "Personal cafe food"]
  },
  {
    id: "shimla-kufri-narkanda",
    title: "Shimla, Kufri & Narkanda Heritage Apple Belt",
    location: "Shimla, Himachal Pradesh",
    state: "Himachal Pradesh",
    country: "India",
    category: "Honeymoon & Leisure",
    price: 12800,
    duration: "4 Days / 3 Nights",
    rating: 4.89,
    reviewsCount: 425,
    image: "https://images.unsplash.com/photo-1562016600-ece13e8ba570?auto=format&fit=crop&w=1200&q=80",
    badge: "Family Classic",
    featured: true,
    pickupLocations: ["Kalka Railway Station", "Chandigarh Airport", "Delhi NCR"],
    overview: "Relive the charm of the British Raj in the summer capital of India. Stroll on the iconic Ridge and Mall Road, see the neo-Gothic Christ Church, visit Jakhoo Temple via ropeway, enjoy yak rides at Kufri, and wander through lush apple orchards in Narkanda.",
    highlights: [
      "UNESCO Heritage Kalka-Shimla Toy Train scenic mountain ride experience",
      "Panoramic Himalayan views from Jakhoo Temple (Lord Hanuman's 108-ft statue)",
      "Horse riding and fun snow games at Kufri Fun World",
      "Day excursion to Narkanda & Hatu Peak (11,152 ft) overlooking deep valleys",
      "Shopping for Lakkar Bazaar wooden handicrafts and authentic fruit jams"
    ],
    itinerary: [
      { day: "Day 1", title: "Delhi/Kalka to Shimla & The Ridge", desc: "Scenic hill ascent via Kalka highway or Toy Train. Check-in at heritage hotel. Evening leisure on The Mall Road, Scandal Point, and Christ Church." },
      { day: "Day 2", title: "Kufri Adventure & Jakhoo Hill Ropeway", desc: "Drive to Kufri for amusement activities, Mahasu Peak horse ride, and Himalayan Nature Park. Return to take the ropeway up to Jakhoo Temple." },
      { day: "Day 3", title: "Excursion to Narkanda & Hatu Peak", desc: "Day tour to pristine Narkanda. Climb up to Hatu Peak for a 360-degree view of the Greater Himalayas. Walk through dense pine & apple belts." },
      { day: "Day 4", title: "Viceregal Lodge & Departure", desc: "Visit the grand British Viceregal Lodge (Indian Institute of Advanced Study) with manicured gardens. Return transfer to Chandigarh / Delhi." }
    ],
    included: [
      "3 Nights stay in premium 4-Star colonial boutique hotel",
      "Private sanitized AC Sedan/Innova for all 4 days",
      "Daily breakfast and chef-crafted buffet dinner",
      "Toy train ticket assistance & parking/toll fees"
    ],
    excluded: ["Amusement park rides in Kufri", "Monument entrance tickets"]
  },
  {
    id: "dharamshala-mcleodganj-triund",
    title: "Dharamshala, McLeodganj & Triund Sunset Trek",
    location: "Kangra Valley, Himachal Pradesh",
    state: "Himachal Pradesh",
    country: "India",
    category: "Treks & Adventure",
    price: 13499,
    duration: "4 Days / 3 Nights",
    rating: 4.94,
    reviewsCount: 260,
    image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1200&q=80",
    badge: "Spiritual & Scenic",
    featured: false,
    pickupLocations: ["Gaggal Airport (Dharamshala)", "Pathankot Railway Station", "Delhi / Chandigarh"],
    overview: "Discover 'Little Lhasa' nestled under the towering Dhauladhar mountains. Visit the sacred Tsuglagkhang Complex (residence of HH the Dalai Lama), Bhagsu Waterfall, Norbulingka Tibetan art preserve, and summit the breathtaking Triund ridge for a starry night camp.",
    highlights: [
      "Camp at 9,350 ft on Triund Ridge right beneath the sheer Dhauladhar snowline",
      "Audience and visit to Dalai Lama Temple Complex & Tibetan Library",
      "Bhagsunag ancient temple, Bhagsu Waterfall & Shiva Cafe",
      "Norbulingka Institute preserving traditional Tibetan thangka paintings and woodwork",
      "Sunset viewpoints overlooking the vast expanse of Kangra Valley"
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in McLeodganj & Tibetan Culture", desc: "Arrive in McLeodganj. Visit Tsuglagkhang Dalai Lama temple, spin prayer wheels at Kalachakra temple, and explore Tibetan market." },
      { day: "Day 2", title: "Bhagsu Waterfall, St. John Church & Dal Lake", desc: "Visit the historic neo-Gothic St. John in the Wilderness Church tucked in deodar woods. Hike to Bhagsu Waterfall and Dal Lake." },
      { day: "Day 3", title: "Trek to Triund (9 KM) & Ridge Camping", desc: "Commence guided hike from Gallu Devi temple through oak and rhododendron forests to Triund ridge. Jaw-dropping sunset over snow peaks. Starlight bonfire camp." },
      { day: "Day 4", title: "Kangra Tea Gardens, Norbulingka & Departure", desc: "Sunrise over Kangra valley. Descent to McLeodganj. Visit Dharamshala International Cricket Stadium & Kangra tea gardens before departure." }
    ],
    included: [
      "2 Nights hotel in McLeodganj + 1 Night Triund ridge dome camping",
      "All meals during Triund trek (Dinner, Breakfast, High-tea)",
      "Private cab for sightseeing in Dharamshala and McLeodganj",
      "Certified trek guide and sleeping bags/tents"
    ],
    excluded: ["Forest department camping permit fee (₹100)", "Personal shopping"]
  },
  {
    id: "jibhi-tirthan-jalori-pass",
    title: "Jibhi, Jalori Pass & Serolsar Lake (Tirthan Valley)",
    location: "Tirthan & Banjar Valley, Himachal Pradesh",
    state: "Himachal Pradesh",
    country: "India",
    category: "Offbeat & Nature",
    price: 15200,
    duration: "4 Days / 3 Nights",
    rating: 4.97,
    reviewsCount: 195,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    badge: "Hidden Gem",
    featured: true,
    pickupLocations: ["Aut Tunnel / Mandi", "Chandigarh", "Delhi"],
    overview: "Escape into the untouched pine wilderness of Tirthan Valley (gateway to Great Himalayan National Park). Stay in handcrafted wooden treehouses, enjoy trout angling in pristine rivers, and trek from Jalori Pass (10,800 ft) to the mystical Serolsar Lake.",
    highlights: [
      "Stay in an authentic wooden treehouse cottage perched among deodars",
      "Trek across Jalori Pass to sacred Serolsar Lake and Mata Budhi Nagin temple",
      "Explore hidden Jibhi Waterfall and historic Victorian wooden bridge",
      "Visit the majestic multi-storey Chehni Kothi tower (indigenous Pahadi architecture)",
      "Relax beside the crystal-clear trout-rich waters of Tirthan River"
    ],
    itinerary: [
      { day: "Day 1", title: "Delhi/Chandigarh to Jibhi", desc: "Scenic drive entering the Seraj Valley. Check-in to handcrafted wooden treehouse or riverside cottage in Jibhi. Evening bonfire with local folk stories." },
      { day: "Day 2", title: "Jalori Pass & Serolsar Lake Trek (5 KM)", desc: "Ascend to Jalori Pass at 10,800 ft with 360-degree mountain views. Hike through dense oak forests to the sacred Serolsar Lake." },
      { day: "Day 3", title: "Chehni Kothi & Hidden Waterfalls", desc: "Hike to Chehni Kothi, an impressive 1,500-year-old wooden castle tower. Afternoon walk to hidden Jibhi waterfall and Kulhi Katandi stone bridge." },
      { day: "Day 4", title: "Tirthan Riverfront & Departure", desc: "Morning riverside stroll, trout fishing experience or walk in Great Himalayan National Park ecozone. Return drive to Chandigarh/Delhi." }
    ],
    included: [
      "3 Nights in premium wooden chalet / treehouse cottage",
      "All breakfasts and traditional wood-fired Pahadi dinners",
      "Private dedicated vehicle for Jalori Pass and local travel",
      "Local village guide for Chehni Kothi and Serolsar Lake"
    ],
    excluded: ["Trout fishing permit (available on spot)", "Personal cafe visits"]
  },
  {
    id: "dalhousie-khajjiar",
    title: "Dalhousie & Khajjiar (Mini Switzerland of India)",
    location: "Chamba District, Himachal Pradesh",
    state: "Himachal Pradesh",
    country: "India",
    category: "Honeymoon & Leisure",
    price: 13999,
    duration: "4 Days / 3 Nights",
    rating: 4.88,
    reviewsCount: 235,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    badge: "Romantic Escape",
    featured: false,
    pickupLocations: ["Pathankot Cantt Station", "Amritsar Airport", "Chandigarh"],
    overview: "Known as the Mini Switzerland of India, Khajjiar features a picture-perfect saucer-shaped meadow surrounded by dense cedar woods and snow-clad mountains. Paired with Dalhousie's Scottish colonial mansions and quiet pine ridges.",
    highlights: [
      "Horse riding and zorbing on the emerald meadows of Khajjiar",
      "Visit 12th-century Khajji Nag Temple with ancient wood carvings",
      "Panoramic views of Pir Panjal mountain range from Dainkund Peak",
      "Picturesque walks at Subhash Baoli, Panchpula, and St. John's Church",
      "Excursion to Kalatop Wildlife Sanctuary home to Himalayan black bears"
    ],
    itinerary: [
      { day: "Day 1", title: "Pathankot to Dalhousie Colonial Walk", desc: "Arrival from Pathankot or Amritsar. Check-in at heritage hotel. Stroll along Garam Sadak and Gandhi Chowk." },
      { day: "Day 2", title: "Full Day Khajjiar 'Mini Switzerland' Tour", desc: "Drive through thick deodar groves to Khajjiar. Walk around the lake, try paragliding, and visit Khajji Nag temple." },
      { day: "Day 3", title: "Dainkund Peak, Bakrota Hills & Kalatop", desc: "Hike to singing hill Dainkund Peak (highest point in Dalhousie) and Pholani Devi temple. Scenic drive through Kalatop sanctuary." },
      { day: "Day 4", title: "Panchpula & Departure", desc: "Visit scenic Panchpula memorial and waterfalls. Souvenir shopping for Tibetan carpets and return drive to Pathankot / Amritsar." }
    ],
    included: [
      "3 Nights in 4-Star colonial resort with valley-facing room",
      "Private AC Sedan/Innova for local sightseeing",
      "Daily breakfast and multi-cuisine dinner",
      "Tolls, state tax, and hill driver charges"
    ],
    excluded: ["Adventure rides at Khajjiar", "Personal entry tickets"]
  },
  {
    id: "kinnaur-chitkul-kalpa",
    title: "Kinnaur & Chitkul (The Last Indian Village Circuit)",
    location: "Kinnaur, Himachal Pradesh",
    state: "Himachal Pradesh",
    country: "India",
    category: "Offbeat & Nature",
    price: 21500,
    duration: "7 Days / 6 Nights",
    rating: 4.97,
    reviewsCount: 160,
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
    badge: "Epic Road Trip",
    featured: false,
    pickupLocations: ["Shimla", "Chandigarh", "Delhi"],
    overview: "Experience dramatic cliff-hanging roads, the roaring Baspa River, and ancient Buddhist-Hindu syncretism in Kinnaur. Stand at Chitkul (the last village before the Tibetan border) and watch Kinner Kailash change colors at sunset from Kalpa.",
    highlights: [
      "Visit 'Hindustan Ka Aakhri Dhaba' at Chitkul border village",
      "Golden hour views of sacred 6,050m Kinner Kailash Shivling from Kalpa",
      "Drive through the famous cliff-carved Taranda Dhank rock-cut road",
      "Taste world-famous Kinnauri sweet apples directly from orchards",
      "Kamru Fort in Sangla with ornate wooden deity shrine"
    ],
    itinerary: [
      { day: "Day 1", title: "Shimla to Sarahan via Rampur", desc: "Drive along the Sutlej River to Sarahan. Visit the historic multi-tiered Bhimakali Temple (51 Shaktipeeths)." },
      { day: "Day 2", title: "Sarahan to Sangla Valley", desc: "Cross the magnificent Kinnaur gate into Sangla Valley. Stay beside the turquoise Baspa River." },
      { day: "Day 3", title: "Chitkul - Last Village on Indo-Tibet Border", desc: "Day trip to picturesque Chitkul village. Stroll through wooden houses and eat at the iconic last Indian dhaba." },
      { day: "Day 4", title: "Sangla to Kalpa & Roghi Suicide Point", desc: "Ascend to Kalpa. Marvel at the jaw-dropping view of Kinner Kailash peak. Visit dramatic Roghi cliff viewpoint." },
      { day: "Day 5", title: "Kalpa Orchards & Buddhist Gompas", desc: "Explore ancient Hu-Bu-Lan-Kar monastery, apple storage centers, and quiet pine forest paths." },
      { day: "Day 6", title: "Kalpa to Narkanda Return Route", desc: "Scenic return drive to Narkanda. Relax in quiet mountain resort surrounded by pine trees." },
      { day: "Day 7", title: "Narkanda to Chandigarh / Delhi Drop", desc: "Descent through Shimla bypass to Chandigarh airport or Delhi." }
    ],
    included: [
      "6 Nights in premium wooden cottages and riverside camps",
      "Private high-clearance SUV (Innova / Scorpio) with hill driver",
      "All breakfasts and freshly cooked local dinners",
      "Inner-line documentation assistance and all tolls"
    ],
    excluded: ["Personal drinks & telephone calls", "Tips for driver and guides"]
  },

  // --- UTTARAKHAND (DEVBHOOMI) DESTINATIONS ---
  {
    id: "rishikesh-haridwar-adventure",
    title: "Rishikesh & Haridwar (Ganga Aarti & White Water Rafting)",
    location: "Rishikesh & Haridwar, Uttarakhand",
    state: "Uttarakhand",
    country: "India",
    category: "Treks & Adventure",
    price: 8999,
    duration: "3 Days / 2 Nights",
    rating: 4.95,
    reviewsCount: 540,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    badge: "Top Rated",
    featured: true,
    pickupLocations: ["Dehradun Airport (Jolly Grant)", "Haridwar Railway Station", "Delhi NCR (Doorstep)"],
    overview: "The world's yoga capital and spiritual heartland. Experience pulse-pounding Grade III/IV white water river rafting on the emerald Ganges, cliff jumping, luxury riverside glamping with swimming pool, and the divine evening Ganga Aarti at Triveni Ghat and Har Ki Pauri.",
    highlights: [
      "16 KM thrilling white water rafting from Shivpuri to Rishikesh with cliff jumping",
      "Spiritual evening Ganga Aarti with floating lamps at Triveni Ghat & Har Ki Pauri",
      "Stay in luxury riverside glamping resort with AC swiss tents & swimming pool",
      "Walk across iconic Ram Jhula, Laxman Jhula & visit the Beatles Ashram",
      "Morning sunrise Yoga & Pranayama session on the white sand river beach"
    ],
    itinerary: [
      { day: "Day 1", title: "Delhi/Dehradun to Rishikesh & Ganga Aarti", desc: "Pickup and transfer to luxury riverside resort. Afternoon visit to Ram Jhula, Gita Bhawan, and soulful evening Ganga Aarti at Triveni Ghat." },
      { day: "Day 2", title: "White Water Rafting, Cliff Jumping & Beatles Ashram", desc: "Experience the ultimate 16 km Ganga rafting passing rapids like Roller Coaster, Golf Course, and Club House. Cliff jumping from 25 ft rock. Afternoon tour of Beatles Ashram." },
      { day: "Day 3", title: "Sunrise Yoga, Haridwar Darshan & Departure", desc: "Peaceful morning yoga session on sandy banks. Transfer to Haridwar to witness sacred Har Ki Pauri and Mansa Devi ropeway before return." }
    ],
    included: [
      "2 Nights in Luxury Swiss AC Glamping Camp with Swimming Pool",
      "All 3 meals (Breakfast, Lunch, Dinner with evening BBQ snacks)",
      "16 KM White Water Rafting with certified river instructors and safety kayakers",
      "All transfers between Haridwar, Rishikesh, and adventure points in private AC cab",
      "Campfire with live acoustic music"
    ],
    excluded: ["Bungee jumping at Jumpin Heights (optional add-on ₹3,550)", "Mansa Devi cable car ticket"]
  },
  {
    id: "kedarnath-badrinath-do-dham",
    title: "Kedarnath & Badrinath (Sacred Do Dham Pilgrimage)",
    location: "Rudraprayag & Chamoli, Uttarakhand",
    state: "Uttarakhand",
    country: "India",
    category: "Spiritual & Char Dham",
    price: 27500,
    duration: "6 Days / 5 Nights",
    rating: 4.99,
    reviewsCount: 680,
    image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1200&q=80",
    badge: "Divine Moksha Yatra",
    featured: true,
    pickupLocations: ["Haridwar Railway Station", "Dehradun Airport", "Rishikesh"],
    overview: "The most sacred pilgrimage in the Garhwal Himalayas. Visit the majestic stone shrine of Lord Kedarnath at 11,755 ft surrounded by snow-clad peaks, and the colorful gateway of Lord Badrinath beside the Alaknanda River. Comprehensive support with permits, VIP slots, and helicopter options.",
    highlights: [
      "Sacred Darshan at Kedarnath Jyotirlinga and evening Aarti in the Himalayas",
      "Holy dip in Tapt Kund and Darshan at colorful Badrinath Temple",
      "Visit Mana Village - The Last Indian Village, Vyas Gufa, and Bhim Pul",
      "Witness sacred Panch Prayag river confluences (Devprayag, Rudraprayag, Karnaprayag)",
      "Helicopter slot booking assistance (Phata/Guptkashi/Sersi) or Pony/Palki coordination"
    ],
    itinerary: [
      { day: "Day 1", title: "Haridwar/Rishikesh to Guptkashi / Phata", desc: "Drive along the holy river passing Devprayag (confluence of Bhagirathi & Alaknanda). Check-in at Guptkashi." },
      { day: "Day 2", title: "Guptkashi to Kedarnath (Helicopter / Trek)", desc: "Transfer to Sonprayag/Gaurikund. Trek (16 km) or take helicopter to Kedarnath. Check-in at GMVN/private lodge near the temple. Evening Maha Aarti." },
      { day: "Day 3", title: "Morning Kedarnath Darshan & Return to Guptkashi", desc: "Early morning Abhishek Darshan at Kedarnath. Witness glowing sunrise on Kedardome. Trek or fly down to Guptkashi for night rest." },
      { day: "Day 4", title: "Guptkashi to Badrinath via Joshimath", desc: "Scenic Himalayan drive along Alaknanda river via Joshimath. Arrive in Badrinath. Evening Darshan and Aarti." },
      { day: "Day 5", title: "Badrinath, Mana Village & Rudraprayag", desc: "Morning Tapt Kund holy bath and Badrinath Darshan. Explore Mana village, Saraswati river origin, and Bhim Pul. Drive to Rudraprayag." },
      { day: "Day 6", title: "Rudraprayag to Rishikesh / Haridwar Drop", desc: "Visit Dhari Devi temple (protector deity of Char Dham). Drop at Haridwar or Dehradun." }
    ],
    included: [
      "5 Nights comfortable accommodation in verified clean hotels and Kedarnath stay",
      "Dedicated commercial AC hill vehicle (Innova/Ertiga/Tempo Traveller) for all days",
      "Pure vegetarian hygienic breakfasts and dinners",
      "Char Dham biometric Yatra registration card & bio-token assistance",
      "24/7 dedicated local pilgrimage coordinator on ground"
    ],
    excluded: ["Helicopter ticket / Pony / Doli charges", "Special temple puja charges"]
  },
  {
    id: "nainital-bhimtal-mukteshwar",
    title: "Nainital, Bhimtal & Mukteshwar (Kumaon Lake Tour)",
    location: "Nainital & Mukteshwar, Uttarakhand",
    state: "Uttarakhand",
    country: "India",
    category: "Honeymoon & Leisure",
    price: 12999,
    duration: "4 Days / 3 Nights",
    rating: 4.91,
    reviewsCount: 340,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    badge: "Family & Honeymoon",
    featured: true,
    pickupLocations: ["Kathgodam Railway Station", "Pantnagar Airport", "Delhi NCR"],
    overview: "Discover the enchanting Lake District of India. Enjoy romantic yacht boating on the eye-shaped Naini Lake, take the aerial ropeway to Snow View Point, explore serene lakes of Bhimtal, Sattal and Naukuchiatal, and enjoy 180-degree Himalayan snow views from Mukteshwar.",
    highlights: [
      "Yacht boating and pedal boating on emerald Naini Lake",
      "Scenic cable car ride to Snow View Point with views of Nanda Devi",
      "Island cafe in the middle of Bhimtal Lake & kayaking in Sattal",
      "Stunning 180-degree snow peaks from Mukteshwar Dham & Chauli Ki Jali cliff",
      "Visit Naina Devi Temple and shop at Mallital Tibetan market"
    ],
    itinerary: [
      { day: "Day 1", title: "Kathgodam/Delhi to Nainital & Mall Road", desc: "Ascent through the Kumaon hills. Check-in at lake-view hotel. Evening boating on Naini Lake and sunset walk on Mall Road." },
      { day: "Day 2", title: "Nainital Local: Snow View, Cave Garden & Naina Peak", desc: "Aerial ropeway to Snow View Point. Explore Eco Cave Garden, High Altitude Nainital Zoo, and Naina Devi temple." },
      { day: "Day 3", title: "Lakes Tour: Bhimtal, Sattal & Naukuchiatal", desc: "Day tour to pristine sister lakes. Visit Bhimtal island aquarium, water sports at Naukuchiatal (9-cornered lake), and pine trails of Sattal." },
      { day: "Day 4", title: "Mukteshwar Himalayan Views & Departure", desc: "Drive to apple-orchard town of Mukteshwar. Visit Chauli Ki Jali for breathtaking valley views. Drop at Kathgodam or Delhi." }
    ],
    included: [
      "3 Nights in premium 4-Star hotel with lake or valley view",
      "Private sanitized AC Sedan / Innova for full duration",
      "Daily breakfast and multi-cuisine dinner",
      "1 Complimentary Naini Lake boating session",
      "All driver allowances, parking, and toll taxes"
    ],
    excluded: ["Ropeway and Zoo entry tickets", "Adventure water sports at Naukuchiatal"]
  },
  {
    id: "mussoorie-dhanaulti-george-everest",
    title: "Mussoorie & Dhanaulti (Queen of the Hills)",
    location: "Dehradun & Mussoorie, Uttarakhand",
    state: "Uttarakhand",
    country: "India",
    category: "Honeymoon & Leisure",
    price: 11500,
    duration: "4 Days / 3 Nights",
    rating: 4.88,
    reviewsCount: 290,
    image: "https://images.unsplash.com/photo-1562016600-ece13e8ba570?auto=format&fit=crop&w=1200&q=80",
    badge: "Weekend Getaway",
    featured: false,
    pickupLocations: ["Dehradun Railway Station", "Jolly Grant Airport", "Delhi NCR"],
    overview: "Perched on a ridge overlooking the Doon Valley, Mussoorie offers British colonial architecture, cascading waterfalls, and spectacular Himalayan vistas. Visit Sir George Everest's estate, Kempty Falls, Lal Tibba, and the tranquil deodar forests of Dhanaulti Eco Park.",
    highlights: [
      "Sunset views over Doon Valley from Sir George Everest House",
      "Highest viewpoint of Lal Tibba with telescope viewing of snow peaks",
      "Take a refreshing splash at the multi-tiered Kempty Falls",
      "Walk among towering cedar trees at Dhanaulti Eco Park & Surkanda Devi ropeway",
      "Stroll on bustling Mall Road, Kulri Bazaar & taste authentic Tibetan momos"
    ],
    itinerary: [
      { day: "Day 1", title: "Dehradun to Mussoorie & Mall Road", desc: "Scenic hill climb from Dehradun. Check-in at resort. Evening walk on Camel's Back Road and lively Mall Road." },
      { day: "Day 2", title: "Kempty Falls, Company Garden & George Everest", desc: "Morning visit to Kempty Falls. Afternoon at floral Company Garden and sunset hike to Sir George Everest estate." },
      { day: "Day 3", title: "Excursion to Dhanaulti & Surkanda Devi", desc: "Drive through mist-clad pine forests to Dhanaulti. Explore Eco Park, deodar woods, and take ropeway to Surkanda Devi Temple." },
      { day: "Day 4", title: "Lal Tibba, Robber's Cave (Dehradun) & Departure", desc: "Visit Lal Tibba in Landour for morning Himalayan views. Descend to Dehradun for Robber's Cave and Sahastradhara before departure." }
    ],
    included: [
      "3 Nights stay in mountain view 4-Star resort in Mussoorie",
      "Private AC cab for pick-up, drop, and all sightseeing",
      "Daily breakfast and chef's special dinner",
      "Hill taxes and driver accommodation"
    ],
    excluded: ["Cable car / ropeway charges", "Adventure sports entry"]
  },
  {
    id: "auli-joshimath-skiing",
    title: "Auli & Joshimath (India's Premier Skiing Wonderland)",
    location: "Chamoli, Uttarakhand",
    state: "Uttarakhand",
    country: "India",
    category: "Snow & Mountains",
    price: 18999,
    duration: "5 Days / 4 Nights",
    rating: 4.96,
    reviewsCount: 210,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    badge: "Skiing Paradise",
    featured: true,
    pickupLocations: ["Rishikesh", "Haridwar", "Dehradun Airport"],
    overview: "India's premier winter skiing destination. Board the famous 4 KM Auli Ropeway (cable car) soaring high above pine forests. Experience breathtaking 360-degree views of India's second-highest peak Mt. Nanda Devi (7,816 m), Trishul, and Hathi Parvat alongside an artificial high-altitude lake.",
    highlights: [
      "Ride the 4 KM long Auli Ropeway cable car from Joshimath to Auli slopes",
      "Skiing and snowboarding with professional instructors on powdery snow slopes",
      "Mesmerizing unobstructed views of sacred Mt. Nanda Devi & Mt. Trishul",
      "Visit highest artificial man-made lake at Auli",
      "Short snow trek to Gorson Bugyal (alpine meadows) at 10,000 ft"
    ],
    itinerary: [
      { day: "Day 1", title: "Rishikesh/Haridwar to Joshimath", desc: "Scenic Garhwal drive passing Devprayag, Rudraprayag, and Karnaprayag. Arrive in Joshimath." },
      { day: "Day 2", title: "Auli Cable Car & Skiing Slopes", desc: "Take the ropeway up to Auli. Check-in to alpine ski resort. Afternoon beginner skiing lessons with equipment." },
      { day: "Day 3", title: "Gorson Bugyal Snow Trek", desc: "Guided 3 km trek from Auli to Gorson Bugyal through oak forests. Stunning close-up views of Nanda Devi. Stargazing at night." },
      { day: "Day 4", title: "Auli Lake, Joshimath Shankaracharya Math", desc: "Visit the sparkling Auli artificial lake. Afternoon descent to Joshimath to visit Shankaracharya Math and Kalpavriksha (2,500-year-old tree)." },
      { day: "Day 5", title: "Joshimath to Rishikesh / Haridwar Drop", desc: "Morning breakfast with mountain views. Return scenic drive down to Rishikesh/Haridwar for onward journey." }
    ],
    included: [
      "4 Nights accommodation (2 Nights Joshimath + 2 Nights Auli Alpine Resort)",
      "Dedicated commercial hill vehicle for all days",
      "Daily breakfast and warm buffet dinners",
      "1-Day Skiing equipment and certified instructor guidance",
      "Trek guide for Gorson Bugyal meadow hike"
    ],
    excluded: ["Auli Ropeway / Chairlift ticket (₹1,000)", "Personal winter jackets/boots hire"]
  },
  {
    id: "chopta-tungnath-chandrashila",
    title: "Chopta, Tungnath & Chandrashila Peak Trek",
    location: "Rudraprayag, Uttarakhand",
    state: "Uttarakhand",
    country: "India",
    category: "High-Altitude Treks",
    price: 14200,
    duration: "4 Days / 3 Nights",
    rating: 4.97,
    reviewsCount: 245,
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
    badge: "Mini Switzerland of UK",
    featured: false,
    pickupLocations: ["Rishikesh", "Haridwar", "Dehradun"],
    overview: "Trek to the highest Shiva temple in the world - Tungnath (12,073 ft) and summit Chandrashila Peak (13,123 ft) for an unforgettable sunrise over Chaukhamba, Nanda Devi, and Kedarnath peaks. Includes peaceful camping at the emerald waters of Deoriatal Lake.",
    highlights: [
      "Trek to 1,000-year-old Tungnath Temple - The highest Shiva temple on Earth",
      "360-degree panoramic Himalayan sunrise from Chandrashila Peak (13,123 ft)",
      "Camp beside the crystal clear reflective lake of Deoriatal",
      "Walk through lush green velvet meadows (Bugyals) and rhododendron forests",
      "Cozy glamping Swiss tents in Chopta under millions of stars"
    ],
    itinerary: [
      { day: "Day 1", title: "Rishikesh to Sari Village & Deoriatal Trek", desc: "Drive to Sari village. Easy 2.5 km hike to Deoriatal Lake. Camp beside the lake with Chaukhamba reflection." },
      { day: "Day 2", title: "Deoriatal to Chopta Alpine Meadow", desc: "Trek down to Sari. Short drive to Chopta ('Mini Switzerland of Uttarakhand'). Check-in at luxury Swiss tents." },
      { day: "Day 3", title: "Tungnath & Chandrashila Summit (5 KM)", desc: "Early morning hike to Tungnath temple. Continue steep climb to Chandrashila summit for spectacular 360-degree Himalayan view. Return to Chopta." },
      { day: "Day 4", title: "Chopta to Rishikesh / Haridwar Return", desc: "Descent along the Mandakini and Alaknanda rivers back to Rishikesh for departure." }
    ],
    included: [
      "3 Nights stay (1 Night Deoriatal camping + 2 Nights Chopta Swiss tent)",
      "All meals during trek (Breakfast, Lunch, Dinner with hot soup)",
      "Certified wilderness trek leader and microspikes/gaiters if snow",
      "Private vehicle from Rishikesh to Rishikesh"
    ],
    excluded: ["Forest camping and entry permits (₹150)", "Pony charges"]
  },
  {
    id: "jim-corbett-tiger-safari",
    title: "Jim Corbett National Park (Wild Bengal Tiger Safari)",
    location: "Ramnagar, Nainital, Uttarakhand",
    state: "Uttarakhand",
    country: "India",
    category: "Wildlife & Nature",
    price: 15999,
    duration: "3 Days / 2 Nights",
    rating: 4.93,
    reviewsCount: 360,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
    badge: "Wildlife Adventure",
    featured: false,
    pickupLocations: ["Ramnagar Railway Station", "Delhi NCR (Doorstep pickup)", "Pantnagar"],
    overview: "India's oldest national park and legendary tiger land. Stay at a 5-star riverfront resort on the banks of Kosi River and embark on thrilling open-top 4x4 Gypsy jungle safaris into Bijrani, Jhirna, or Dhela zones to spot Royal Bengal Tigers, wild elephants, leopards, and over 600 bird species.",
    highlights: [
      "2 Exclusive open-top 4x4 Gypsy Jeep safaris with authorized forest naturalists",
      "Luxury 5-Star riverfront resort with swimming pool, spa & Kosi river views",
      "High probability tiger spotting zones (Bijrani / Jhirna / Dhela / Garjiya)",
      "Visit Garjiya Devi Temple perched on a huge rock in Kosi River",
      "Corbett Waterfall and historic Jim Corbett Heritage Museum"
    ],
    itinerary: [
      { day: "Day 1", title: "Delhi to Corbett & Riverfront Resort", desc: "Smooth highway drive from Delhi. Check-in at riverfront resort. Evening stroll along Kosi river and wildlife movie screening." },
      { day: "Day 2", title: "Morning & Afternoon Open Gypsy Jungle Safaris", desc: "Dawn safari in core tiger zone with tracking of fresh pugmarks and alarm calls. Afternoon second safari in picturesque buffer grasslands." },
      { day: "Day 3", title: "Garjiya Devi Temple, Corbett Falls & Return", desc: "Visit Garjiya Devi Temple and Corbett Falls. Return journey to Delhi." }
    ],
    included: [
      "2 Nights in Luxury Riverfront Jungle Resort with all meals included",
      "2 Open-top 4x4 Gypsy Safaris with park entry permits and guide fees",
      "Delhi-Corbett-Delhi round trip in private AC vehicle",
      "Resort recreational facilities (pool, indoor games, bonfire)"
    ],
    excluded: ["Elephant safari charges", "Camera fees (if applicable by forest dept)"]
  },
  {
    id: "valley-of-flowers-hemkund",
    title: "Valley of Flowers & Hemkund Sahib Trek",
    location: "Chamoli, Uttarakhand",
    state: "Uttarakhand",
    country: "India",
    category: "High-Altitude Treks",
    price: 22999,
    duration: "6 Days / 5 Nights",
    rating: 4.98,
    reviewsCount: 205,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    badge: "UNESCO World Heritage",
    featured: false,
    pickupLocations: ["Rishikesh", "Haridwar", "Dehradun"],
    overview: "Step into an ethereal botanical wonderland. Over 500 species of rare sub-alpine wildflowers, Himalayan orchids, and blue poppies transform the Pushpawati river valley into a riot of colors between July and September. Paired with a visit to the holy glacial lake of Hemkund Sahib at 14,200 ft.",
    highlights: [
      "UNESCO World Heritage Valley of Flowers with rare Himalayan blue poppies",
      "Glacial holy lake of Hemkund Sahib (14,200 ft) surrounded by 7 snow peaks",
      "Trek along rushing mountain streams, wooden bridges, and misty waterfalls",
      "Stay in cozy mountain lodges in Ghangaria pine village",
      "Witness sacred Brahma Kamal - the state flower of Uttarakhand"
    ],
    itinerary: [
      { day: "Day 1", title: "Rishikesh to Govindghat / Joshimath", desc: "Scenic mountain drive along Alaknanda river. Night stay in Govindghat." },
      { day: "Day 2", title: "Govindghat to Pulna & Trek to Ghangaria (10 KM)", desc: "Short drive to Pulna. Trek along Pushpawati river to base camp village Ghangaria (9,800 ft)." },
      { day: "Day 3", title: "Trek into the Valley of Flowers (8 KM round)", desc: "Enter the UNESCO National Park. Walk amidst carpets of blooming flora, visit Joan Margaret Legge memorial grave, and return to Ghangaria." },
      { day: "Day 4", title: "Trek to Holy Hemkund Sahib Lake (12 KM round)", desc: "Steep ascent to sacred Hemkund Sahib at 14,200 ft. Hot tea and langar khichdi at gurudwara beside emerald glacial lake. Descent to Ghangaria." },
      { day: "Day 5", title: "Trek down to Govindghat & Drive to Rudraprayag", desc: "Trek back down to Pulna. Vehicle transfer to Rudraprayag. Relax at hotel." },
      { day: "Day 6", title: "Rudraprayag to Rishikesh / Haridwar Drop", desc: "Morning visit to Devprayag Sangam. Drop at Rishikesh / Haridwar." }
    ],
    included: [
      "5 Nights accommodation in verified mountain guest houses & hotels",
      "Certified wilderness trek leader with high altitude first aid & oxygen kit",
      "All meals during trek (Breakfast, Packed Lunch for valley, Dinner)",
      "National Park entry permits for Valley of Flowers",
      "Private transport from Rishikesh to Rishikesh"
    ],
    excluded: ["Pony/Helicopter charges between Govindghat & Ghangaria", "Personal porter"]
  }
];

export const reviewsData = [
  {
    id: "rev-1",
    name: "Aman & Neha Sharma",
    role: "Honeymooners from New Delhi",
    date: "February 2026",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    comment: "Our Manali & Atal Tunnel luxury chalet tour was beyond magical! From the doorstep Innova pickup in Delhi to the private snow excursions in Sissu and the candlelit chalet dinners, Tourex Himalayas handled every detail with 5-star perfection. Worth every single rupee!"
  },
  {
    id: "rev-2",
    name: "Dr. Rajesh & Shobha Kulkarni",
    role: "Family Travelers from Pune, Maharashtra",
    date: "January 2026",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    comment: "Undertaking the Kedarnath & Badrinath Do Dham Yatra with elderly parents was a big concern for us, but the Tourex team made it completely seamless. Priority biometric slips, clean sanitized hill cabs, and caring native Pahadi guides who treated our parents like family. Truly Devbhoomi blessings!"
  },
  {
    id: "rev-3",
    name: "Karan Singhania & Friends",
    role: "Adventure Group from Bengaluru",
    date: "February 2026",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    comment: "The 8-Day Spiti Valley 4x4 circuit with Tourex was the best road trip of our lives. Tenzin, our driver and guide, is an absolute master on mountain curves. Camping at Chandratal under the Milky Way with portable oxygen in the vehicle gave us immense peace of mind. Outstanding execution!"
  },
  {
    id: "rev-4",
    name: "Priyanka & Rohit Mehta",
    role: "Travelers from Ahmedabad, Gujarat",
    date: "December 2025",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    comment: "We booked the Rishikesh River Rafting and Nainital Lake Tour. The luxury swiss tents right on the riverbank in Rishikesh and the private yacht on Naini Lake were exceptional. Transparent pricing with no hidden charges, and quick replies on WhatsApp 24/7."
  }
];
