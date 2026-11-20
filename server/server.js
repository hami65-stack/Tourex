// Node.js & Express Backend Server for Tourex Himalayas
// Provides REST APIs for tour destinations, dynamic bookings, inquiries, and reviews

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory + JSON persistence for bookings and inquiries
const BOOKINGS_FILE = path.join(__dirname, 'bookings.json');
const INQUIRIES_FILE = path.join(__dirname, 'inquiries.json');

// Helper to read JSON safely
function readDataFile(filePath, defaultData = []) {
  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(content);
    }
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err.message);
  }
  return defaultData;
}

// Helper to write JSON safely
function writeDataFile(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error(`Error writing ${filePath}:`, err.message);
  }
}

// Initial bookings sample
let bookings = readDataFile(BOOKINGS_FILE, [
  {
    bookingId: "HEX-HP-8942",
    tourTitle: "Manali, Solang Valley & Atal Tunnel Adventure",
    state: "Himachal Pradesh",
    clientName: "Rahul Sharma",
    phone: "+91 98160 12345",
    email: "rahul.sharma@example.com",
    guests: 2,
    checkIn: "2026-03-12",
    checkOut: "2026-03-16",
    pickupCity: "Delhi NCR (Airport / Railway Station)",
    hotelTier: "DELUXE 4-STAR RESORT",
    transportType: "TOYOTA INNOVA CRYSTA",
    totalPrice: "₹42,498",
    status: "Confirmed & Driver Assigned",
    driver: "Sunil Thakur (+91 98160 55219) - Innova Crysta (HP 01 A 4920)",
    dateBooked: "18 Feb 2026"
  }
]);

// Initial inquiries sample
let inquiries = readDataFile(INQUIRIES_FILE, []);

// Comprehensive Sample Data for Himachal & Uttarakhand
const destinations = [
  {
    id: "manali-solang-atal-tunnel",
    title: "Manali, Solang Valley & Atal Tunnel Adventure",
    location: "Manali & Kullu, Himachal Pradesh",
    state: "Himachal Pradesh",
    country: "India",
    category: "Snow & Mountains",
    price: 14999,
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
    ]
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
    overview: "Traverse the cold desert kingdom known as 'The Middle Land'. Witness the thousand-year-old Key Monastery perched on cliffs, send a postcard from Hikkim (world's highest post office), cross Asia's highest suspension bridge at Chicham, and camp beside the celestial crescent of Chandratal Lake."
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
    overview: "Immerse in the magical bohemian vibes of Parvati Valley. Stroll through the deodar woods along the roaring turquoise Parvati River in Kasol, stay in wooden homestays in Tosh overlooking waterfalls, and hike to Kheerganga's open-air hot sulphur springs."
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
    overview: "Relive the charm of the British Raj in the summer capital of India. Stroll on the iconic Ridge and Mall Road, see the neo-Gothic Christ Church, visit Jakhoo Temple via ropeway, enjoy yak rides at Kufri, and wander through lush apple orchards in Narkanda."
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
    overview: "Discover 'Little Lhasa' nestled under the towering Dhauladhar mountains. Visit the sacred Tsuglagkhang Complex (residence of HH the Dalai Lama), Bhagsu Waterfall, Norbulingka Tibetan art preserve, and summit the breathtaking Triund ridge for a starry night camp."
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
    overview: "Escape into the untouched pine wilderness of Tirthan Valley (gateway to Great Himalayan National Park). Stay in handcrafted wooden treehouses, enjoy trout angling in pristine rivers, and trek from Jalori Pass (10,800 ft) to the mystical Serolsar Lake."
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
    overview: "Known as the Mini Switzerland of India, Khajjiar features a picture-perfect saucer-shaped meadow surrounded by dense cedar woods and snow-clad mountains."
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
    overview: "Experience dramatic cliff-hanging roads, the roaring Baspa River, and ancient Buddhist-Hindu syncretism in Kinnaur. Stand at Chitkul (the last village before the Tibetan border)."
  },
  // Uttarakhand
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
    overview: "The world's yoga capital and spiritual heartland. Experience pulse-pounding Grade III/IV white water river rafting on the emerald Ganges, cliff jumping, luxury riverside glamping with swimming pool, and the divine evening Ganga Aarti at Triveni Ghat and Har Ki Pauri."
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
    overview: "The most sacred pilgrimage in the Garhwal Himalayas. Visit the majestic stone shrine of Lord Kedarnath at 11,755 ft surrounded by snow-clad peaks, and the colorful gateway of Lord Badrinath beside the Alaknanda River."
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
    overview: "Discover the enchanting Lake District of India. Enjoy romantic yacht boating on the eye-shaped Naini Lake, take the aerial ropeway to Snow View Point, explore serene lakes of Bhimtal, Sattal and Naukuchiatal."
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
    overview: "Perched on a ridge overlooking the Doon Valley, Mussoorie offers British colonial architecture, cascading waterfalls, and spectacular Himalayan vistas."
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
    overview: "India's premier winter skiing destination. Board the famous 4 KM Auli Ropeway (cable car) soaring high above pine forests. Experience breathtaking 360-degree views of India's second-highest peak Mt. Nanda Devi (7,816 m)."
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
    overview: "Trek to the highest Shiva temple in the world - Tungnath (12,073 ft) and summit Chandrashila Peak (13,123 ft) for an unforgettable sunrise over Chaukhamba, Nanda Devi, and Kedarnath peaks."
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
    overview: "India's oldest national park and legendary tiger land. Stay at a 5-star riverfront resort on the banks of Kosi River and embark on thrilling open-top 4x4 Gypsy jungle safaris."
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
    overview: "Step into an ethereal botanical wonderland. Over 500 species of rare sub-alpine wildflowers, Himalayan orchids, and blue poppies transform the Pushpawati river valley into a riot of colors."
  }
];

// --- REST API ENDPOINTS ---

// 1. Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Tourex Himalayas API',
    region: 'Himachal Pradesh & Uttarakhand',
    time: new Date().toISOString()
  });
});

// 2. Get all destinations with query filters (?state=Himachal+Pradesh, ?category=..., ?search=...)
app.get('/api/destinations', (req, res) => {
  const { state, category, search } = req.query;
  let results = [...destinations];

  if (state && state !== 'All') {
    results = results.filter(d => d.state.toLowerCase() === state.toLowerCase());
  }

  if (category && category !== 'All') {
    results = results.filter(d => d.category.toLowerCase() === category.toLowerCase());
  }

  if (search) {
    const q = search.toLowerCase();
    results = results.filter(d => 
      d.title.toLowerCase().includes(q) ||
      d.location.toLowerCase().includes(q) ||
      d.state.toLowerCase().includes(q) ||
      d.overview.toLowerCase().includes(q)
    );
  }

  res.json({
    count: results.length,
    data: results
  });
});

// 3. Get single destination by ID
app.get('/api/destinations/:id', (req, res) => {
  const dest = destinations.find(d => d.id === req.params.id);
  if (!dest) {
    return res.status(404).json({ error: 'Destination not found' });
  }
  res.json(dest);
});

// 4. Create new booking reservation
app.post('/api/bookings', (req, res) => {
  const {
    tourTitle,
    state,
    clientName,
    phone,
    email,
    guests,
    checkIn,
    checkOut,
    pickupCity,
    hotelTier,
    transportType,
    totalPrice
  } = req.body;

  if (!clientName || !phone) {
    return res.status(400).json({ error: 'Client Name and Phone are required.' });
  }

  const stateCode = state && state.includes('Himachal') ? 'HP' : 'UK';
  const bookingId = `HEX-${stateCode}-${Math.floor(1000 + Math.random() * 9000)}`;

  const newBooking = {
    bookingId,
    tourTitle: tourTitle || 'Custom Himalayan Tour',
    state: state || 'Himachal Pradesh',
    clientName,
    phone,
    email: email || 'Not provided',
    guests: guests || 2,
    checkIn: checkIn || '2026-03-15',
    checkOut: checkOut || '2026-03-20',
    pickupCity: pickupCity || 'Delhi NCR',
    hotelTier: hotelTier || 'DELUXE 4-STAR RESORT',
    transportType: transportType || 'TOYOTA INNOVA CRYSTA',
    totalPrice: totalPrice || '₹29,998',
    status: 'Confirmed & Operations Desk Assigned',
    driver: 'Assigned 24h prior to journey',
    dateBooked: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
  };

  bookings.unshift(newBooking);
  writeDataFile(BOOKINGS_FILE, bookings);

  res.status(201).json({
    success: true,
    message: 'Booking reservation confirmed successfully',
    booking: newBooking
  });
});

// 5. Look up booking by reference code or phone
app.get('/api/bookings/:id', (req, res) => {
  const query = req.params.id.trim().toUpperCase();
  const found = bookings.find(b => b.bookingId === query || b.phone.includes(query));

  if (!found) {
    return res.status(404).json({ error: 'Booking reference not found. Please check reference ID or call 1800-123-HIMALAYA.' });
  }

  res.json(found);
});

// 6. Submit consultation inquiry
app.post('/api/inquiries', (req, res) => {
  const { name, phone, email, destinationState, service, message } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and Phone are required.' });
  }

  const inquiry = {
    id: `INQ-${Date.now()}`,
    name,
    phone,
    email: email || '',
    destinationState: destinationState || 'Himachal Pradesh',
    service: service || 'Custom Tour',
    message: message || '',
    createdAt: new Date().toISOString()
  };

  inquiries.unshift(inquiry);
  writeDataFile(INQUIRIES_FILE, inquiries);

  res.status(201).json({
    success: true,
    message: 'Inquiry received. Local desk will contact you within 15 minutes.',
    inquiry
  });
});

// 7. Get reviews
app.get('/api/reviews', (req, res) => {
  res.json({
    satisfaction: '98%',
    totalReviews: 12400,
    topReviews: [
      {
        name: "Aman & Neha Sharma",
        role: "Honeymooners from New Delhi",
        tour: "Manali & Solang Luxury Chalet",
        comment: "Our Manali & Atal Tunnel luxury chalet tour was beyond magical! Handled every detail with 5-star perfection."
      },
      {
        name: "Dr. Rajesh & Shobha Kulkarni",
        role: "Family Travelers from Pune",
        tour: "Kedarnath & Badrinath Do Dham",
        comment: "Clean sanitized hill cabs, caring native Pahadi guides who treated our parents like family. Truly Devbhoomi blessings!"
      }
    ]
  });
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(` Tourex Himalayas Backend API Server Running on port ${PORT}`);
  console.log(` Endpoints:`);
  console.log(` - GET  /api/health`);
  console.log(` - GET  /api/destinations`);
  console.log(` - POST /api/bookings`);
  console.log(` - GET  /api/bookings/:id`);
  console.log(` - POST /api/inquiries`);
  console.log(`====================================================`);
});
