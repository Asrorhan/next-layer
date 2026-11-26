# Next Layer

Agency website built to present web development, booking system, and restaurant SaaS solutions for small and medium businesses in Latvia.

Live demo: [next-layeer.netlify.app](https://next-layeer.netlify.app)

## Tech Stack

- **Frontend:** React, TypeScript, Vite, Tailwind CSS
- **Routing & Localization:** React Router, i18next (English, Latvian, Russian)
- **Backend & Storage:** Supabase (database for projects & client inquiries, storage for portfolio assets)
- **Notifications & Hosting:** Web3Forms, Netlify

## Main Features

- **Multi-language support:** Instant switching between EN, LV, and RU across all pages.
- **Dynamic Portfolio:** Fetches case studies and project images directly from Supabase.
- **Contact & Inquiry Flow:** Saves client requests to a Supabase `inquiries` table and sends instant email notifications via Web3Forms, plus a direct WhatsApp contact button.
- **Responsive UI:** Built mobile-first with Tailwind CSS and Lucide icons.

## Getting Started

1. Clone the repository:

   ```bash
   git clone [https://github.com/Asrorhan/next-layer.git](https://github.com/Asrorhan/next-layer.git)
   cd next-layer


   ```

2. npm install
3. Create a .env file in the root directory and add your keys:
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   VITE_WEB3FORMS_KEY=your_web3forms_access_key
4. npm run dev
