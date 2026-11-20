# Tourex Himalayas | Himachal & Uttarakhand Luxury Tours Website

A complete, responsive, interactive, and production-ready travel business website built with **React**, **Node.js & Express**, **Tailwind CSS**, and **Lucide Icons**. 

Tailored specifically for a **Himachal Pradesh-based travel business** offering curated tour packages across **Himachal Pradesh** and **Devbhoomi Uttarakhand** for Indian travelers and families. Inspired by modern luxury travel design trends with floating reservation engines, typographic image cutouts, category filters, and instant WhatsApp booking.

---

## 🏔️ Popular Destinations Covered

### 1. Himachal Pradesh Circuits
* **Manali, Solang Valley & Atal Tunnel**: Rohtang snow point, Sissu Valley, paragliding, Hadimba temple, Old Manali cedar chalets.
* **Spiti Valley & Chandratal 4x4 Circuit**: High-altitude cold desert, 1000-year-old Key Gompa, Tabo, Hikkim (world's highest post office), Chicham Bridge, and camping under the Milky Way at Chandratal.
* **Kasol, Tosh & Kheerganga (Parvati Valley)**: Bohemian riverside cafes, pine trails, Kheerganga natural hot sulphur springs, and holy Manikaran Sahib.
* **Shimla, Kufri & Narkanda Heritage**: British summer capital, Kalka-Shimla UNESCO Toy Train, The Ridge, Jakhoo ropeway, and Narkanda apple orchards.
* **Dharamshala, McLeodganj & Triund**: Dalai Lama temple, Tibetan monasteries, Bhagsu waterfall, and Dhauladhar snowline trek to Triund ridge.
* **Jibhi, Jalori Pass & Tirthan Valley**: Handcrafted wooden treehouses, trout streams, Serolsar Lake, and Great Himalayan National Park.
* **Dalhousie & Khajjiar**: "Mini Switzerland of India", emerald meadows, colonial mansions, and Dainkund Peak.
* **Kinnaur & Chitkul**: The Last Indian Village on Indo-Tibetan border, Sangla Baspa River, and golden sunset views of Kinner Kailash.

### 2. Uttarakhand (Devbhoomi) Circuits
* **Rishikesh & Haridwar**: 16 KM Ganga white water river rafting, cliff jumping, luxury riverside glamping, and divine evening Ganga Aarti at Triveni Ghat and Har Ki Pauri.
* **Kedarnath & Badrinath (Sacred Do Dham Pilgrimage)**: Lord Shiva Kedarnath Jyotirlinga at 11,755 ft, Lord Badrinath, Mana Village, helicopter slot assistance, and VIP Darshan coordination.
* **Nainital, Bhimtal & Mukteshwar**: Emerald Naini Lake yacht boating, Snow View ropeway, Sattal lakes, and 180° Himalayan panoramic views from Mukteshwar.
* **Mussoorie & Dhanaulti (Queen of the Hills)**: Kempty Falls, George Everest estate sunset, and misty deodar woods at Dhanaulti Eco Park.
* **Auli & Joshimath**: India's premier skiing and snowboarding wonderland, 4 KM Auli Ropeway, and 360° views of Mt. Nanda Devi (7,816 m).
* **Chopta, Tungnath & Chandrashila Trek**: "Mini Switzerland of Uttarakhand", highest Shiva temple on Earth (Tungnath at 12,073 ft), and sunrise at Chandrashila Peak.
* **Jim Corbett National Park**: Open-top 4x4 Gypsy tiger safaris in Bijrani/Jhirna zones and 5-star Kosi riverfront jungle resort.
* **Valley of Flowers & Hemkund Sahib**: UNESCO World Heritage alpine flower carpets (over 500 species) and sacred holy glacial lake of Hemkund Sahib (14,200 ft).

---

## 🌟 Key Interactive Features (Reference Design Replication)

1. **Exact Visual Reproduction of Reference Mockup**:
   - **Hero Section**: High-resolution mountain lake wooden chalet in warm twilight, bold typography (*"Let's find your next adventure"*), pill button with circular diagonal arrow badge (*"Take a tour ↗"*), and progress slider indicator.
   - **Floating Reservation Engine**: Tabs (*Tour*, *Cab / Volvo*, *Hotels*), interactive destination dropdown with INR prices, pickup gateway selector (*Delhi NCR*, *Chandigarh*, *Dehradun*, *Direct*), dual-column Check In & Check Out date pickers, interactive guest counter (+ / -), and rounded-full black *"Reserve"* button.
   - **Signature Typographic Cutout**:
     `Take the step and explore [Himalayan-panorama] the world [Alpine-lake] waiting for you.`
     Embedded panoramic landscape photos inside pill shapes verbatim from the reference design.
   - **Stats & Philosophy Section**: High portrait emerald alpine lake card with wooden boat alongside verified metrics:
     `98% Customer Satisfaction`, `85+ Popular Destinations`, `240+ Experienced Local Guides`.
   - **Destination Grid ("Experience Our Destination")**: Instant search autocomplete, state filter tabs (*All*, *Himachal Pradesh 🏔️*, *Uttarakhand 🕉️*), category pills (*Snow & Mountains*, *Treks*, *Spiritual & Char Dham*, *Honeymoon*), bookmark/wishlist toggle, and price display in INR (₹) with currency converter (USD $, EUR €, GBP £).
   - **3 Core Pillars (Verbatim from Reference Mockup)**:
     - *"Ease of travel"* (Doorstep pickups from Delhi/NCR & Chandigarh in luxury Innova Crysta or Volvo Sleeper)
     - *"Local Staff Help"* (Born-and-raised native Pahadi guides for hidden viewpoints)
     - *"Safe and reliable"* (Certified mountain drivers, all-weather road monitoring, portable oxygen cylinders)
   - **"Get a good travel experience"**: Verbatim narrative header and interactive traveler review slider featuring verified Indian families, couples, and trekkers.
   - **Interactive Tour Detail & Booking Modal**:
     - Complete day-by-day itinerary timeline
     - Inclusions & exclusions
     - Live customizer with hotel tier upgrades (*Standard*, *Deluxe 4-Star*, *Alpine Cedar Chalet*)
     - Vehicle fleet choice (*Luxury Volvo*, *Private Sedan*, *Toyota Innova Crysta*, *4x4 SUV*)
     - Optional experiences (Rohtang snow permit, river rafting, riverside bonfire, photographer drone reel)
     - Instant booking reference code generation (e.g. `HEX-HP-8942`)
     - Printable & downloadable reservation voucher
     - 1-Click WhatsApp booking confirmation link
   - **Track Booking / Sign In Modal**: Travelers can enter their booking reference or phone number to look up assigned driver and hotel details.
   - **Floating WhatsApp Concierge**: Instant live chat with pre-filled inquiries for Manali, Spiti, Kedarnath, and cab quotes.

---

## ⚡ Instant 1-Click Browser Preview (Zero Setup Needed)

You can run and test the complete website immediately in any modern browser without needing to install anything:
* **Option A**: Double-click `start-preview.bat` in the project root folder.
* **Option B**: Double-click or open `preview.html` in Google Chrome, Microsoft Edge, Brave, or Safari.

Everything is 100% interactive, responsive, animated, and fully styled!

---

## 🛠️ Full-Stack React + Node.js Setup

### Running the Node.js Express Backend
The project includes a dedicated Node.js backend server (`server/server.js`) providing REST APIs:

```bash
# 1. Navigate to project root
cd "business website"

# 2. Run the Node.js API server
npm run server
# or
node server/server.js
```

Backend endpoints:
- `GET  /api/health` — API health check
- `GET  /api/destinations` — List all packages (supports `?state=Himachal+Pradesh`, `?category=...`, `?search=...`)
- `GET  /api/destinations/:id` — Full details and day-by-day itinerary
- `POST /api/bookings` — Create reservation, calculate total, generate `HEX-HP-XXXX` voucher, and save
- `GET  /api/bookings/:id` — Look up confirmed booking and assigned driver
- `POST /api/inquiries` — Submit consultation inquiry

### Running the React Frontend
```bash
# 1. Install frontend dependencies
npm install

# 2. Start Vite development server
npm run dev

# 3. Build for production deployment
npm run build
```

---

## 📁 Project Architecture

```
business-website/
├── preview.html               # Complete zero-dependency standalone application (instant preview)
├── start-preview.bat          # 1-Click Windows launcher for preview.html
├── index.html                 # Vite HTML entry point
├── package.json               # Full-stack dependencies & scripts (React, Vite, Node, Express)
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind theme & tokens
├── postcss.config.js          # PostCSS configuration
├── server/
│   ├── server.js              # Node.js + Express REST API backend
│   └── package.json           # Backend dependencies (express, cors)
├── src/
│   ├── main.jsx               # React entry point
│   ├── App.jsx                # Main application state, toasts & orchestration
│   ├── index.css              # Global styles & scrollbars
│   ├── data/
│   │   ├── businessConfig.js  # Tourex Himalayas contact, offices, license & team
│   │   └── destinations.js    # Curated tour packages, itineraries & reviews
│   └── components/
│       ├── Navbar.jsx         # Header with currency selector & mobile drawer
│       ├── Hero.jsx           # Reference hero & floating reservation card
│       ├── TypographicCutout.jsx # Signature embedded pill photo banner
│       ├── StatsSection.jsx   # 98%, 85+, 240+ metrics & emerald lake card
│       ├── DestinationGrid.jsx# Searchable, category & state-filtered cards
│       ├── ValueProps.jsx     # Ease of travel, Local Help, Safe & Reliable
│       ├── Testimonials.jsx   # Review carousel with quotes & ratings
│       ├── ContactSection.jsx # Inquiry form, offices in Manali/Dehradun & WhatsApp
│       ├── TourDetailModal.jsx# Customizer, price calculator & printable voucher
│       ├── SignInModal.jsx    # User login & track booking by reference ID
│       ├── Footer.jsx         # Site map, circuits, licensing & legal links
│       └── WhatsAppWidget.jsx # Floating live concierge chat widget
```

---

## ⚡ Supabase Live Backend Integration

A dedicated Supabase project has been created and fully configured for this website via the Supabase MCP:

* **Project Name**: `tourex-luxury-travel`
* **Project Reference**: `ektajyhffgndgnnogbtz`
* **Region**: `ap-south-1` (Mumbai, India - ultra-fast low latency)
* **Organization**: `Hamira Org` (`etvbuixijmgjvxuwjaen`)
* **Project URL**: `https://ektajyhffgndgnnogbtz.supabase.co`

### Database Tables Configured:
1. **`inquiries`**:
   - Stores all custom itinerary requests, consultation forms, and traveler contact inquiries.
   - Fields: `id`, `created_at`, `name`, `email`, `phone`, `service`, `message`, `status`.
2. **`bookings`**:
   - Stores tour reservation details with customizable dates, guest counts, hotel/cab tier, and add-ons.
   - Fields: `id`, `created_at`, `tour_title`, `location`, `check_in`, `check_out`, `guests`, `total_price`, `client_name`, `email`, `phone`, `notes`, `addons`, `status`.
3. **`newsletter_subscribers`**:
   - Stores email subscriptions for the Himalayan Gazette updates.
   - Fields: `id`, `created_at`, `email`.

### Security & Row Level Security (RLS):
- RLS is **enabled** on all tables.
- Public anonymous users can safely insert inquiries, bookings, and newsletter subscriptions via public policies.
- Direct read access is secured to protect traveler privacy.

---

## 💼 Customizing Business Details

All business details, phone numbers, addresses, and licenses are centralized in:
📂 `src/data/businessConfig.js`

You can customize:
- Head Office & Branch addresses (Manali, Shimla, Dehradun, Delhi)
- Direct phone lines & 1800 Toll-Free numbers
- WhatsApp concierge number
- Team members & guides
- Licensing & registration details
