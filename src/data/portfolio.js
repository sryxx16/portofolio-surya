export const portfolioData = {
  name: "SURYA DAFFA FAUZI KHOERUDIN",
  title: "Frontend Specialist & Web Developer",
  description:
    "Mahasiswa S1 Teknologi Informasi Semester 7 (UBSI) dengan spesialisasi pengembangan web modern dan arsitektur antarmuka pengguna (Frontend). Berpengalaman membangun aplikasi fullstack scalable (Next.js, React, NestJS, Laravel) dengan komitmen pada clean code, performa tinggi, dan estetika minimalis.",
  about:
    "Saya adalah mahasiswa S1 Teknologi Informasi Semester 7 di Universitas Bina Sarana Informatika (UBSI) yang berfokus mendalam pada Modern Web Development dan arsitektur Frontend. Berpengalaman memimpin implementasi UI responsif, arsitektur microservice (NestJS & Next.js), serta perancangan database relasional (PostgreSQL & MySQL). Memiliki rekam jejak nyata mulai dari platform e-commerce klien live hingga platform peraih Juara 3 IT Bootcamp & HKI.",

  profileImage1: "/assets/images/fotoprojects/fotoprofile3_cutout.png",
  profileImage: "/assets/images/fotoprojects/fotoprofile2.png",
  avatarArt: "/assets/images/fotoprojects/fotoprofile3.png",
  resumeUrl: "/CV Surya Daffa Fauzi Khoerudin.pdf",

  skills: [
    {
      name: "Next.js",
      category: "Frontend",
      logo: "https://cdn.simpleicons.org/nextdotjs/white",
    },
    {
      name: "React",
      category: "Frontend",
      logo: "https://cdn.simpleicons.org/react/white",
    },
    {
      name: "TypeScript",
      category: "Language",
      logo: "https://cdn.simpleicons.org/typescript/white",
    },
    {
      name: "JavaScript",
      category: "Language",
      logo: "https://cdn.simpleicons.org/javascript/white",
    },
    {
      name: "Tailwind CSS",
      category: "Styling",
      logo: "https://cdn.simpleicons.org/tailwindcss/white",
    },
    {
      name: "NestJS",
      category: "Backend",
      logo: "https://cdn.simpleicons.org/nestjs/white",
    },
    {
      name: "Laravel",
      category: "Backend",
      logo: "https://cdn.simpleicons.org/laravel/white",
    },
    {
      name: "PostgreSQL",
      category: "Database",
      logo: "https://cdn.simpleicons.org/postgresql/white",
    },
    {
      name: "Prisma ORM",
      category: "Database",
      logo: "https://cdn.simpleicons.org/prisma/white",
    },
    {
      name: "Flutter",
      category: "Mobile",
      logo: "https://cdn.simpleicons.org/flutter/white",
    },
    {
      name: "Docker",
      category: "DevOps",
      logo: "https://cdn.simpleicons.org/docker/white",
    },
    {
      name: "Git & GitHub",
      category: "Tools",
      logo: "https://cdn.simpleicons.org/git/white",
    },
  ],

  projects: [
    {
      id: 1,
      title: "KodeKiri Tech — Web & Motion Studio",
      client: "KODEKIRI STUDIO (TEAM PROJECT)",
      year: "2025 - 2026",
      type: "Studio & Digital Agency Web",
      description:
        "Platform web studio independen yang berspesialisasi dalam bespoke web development dan fluid interaction design dengan performa tinggi & sub-second load times.",
      metrics: "Next.js 15 App Router, View Transitions API, Inertial Smooth Scrolling (Lenis), Lighthouse 98+ Performance.",
      detailedDescription: {
        overview:
          "Website resmi untuk tim agensi digital KodeKiri (https://www.kodekiri.tech/). Dirancang dari nol memadukan estetika editorial high-end dengan standar web engineering modern. Mengimplementasikan Next.js 15 App Router, TypeScript, Tailwind CSS v4, Motion 12, dan Lenis smooth scrolling untuk pengalaman pengguna yang sangat halus dan responsif.",
        role: "Co-founder & Core Frontend Specialist",
        responsibilities: [
          "Membangun arsitektur frontend modular menggunakan Next.js 15 & React 19",
          "Merancang sistem animasi interaktif menggunakan Motion 12 & Lenis Smooth Scroll",
          "Menerapkan View Transitions API untuk navigasi antar halaman tanpa jeda",
          "Optimasi Core Web Vitals hingga mencapai skor Lighthouse 98+ di desktop dan mobile",
        ],
        techStack: {
          frontend: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS v4"],
          animation: ["Motion 12", "Lenis Smooth Scroll"],
          deployment: ["Vercel Edge Network"],
        },
      },
      technologies: [
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Tailwind CSS v4",
        "Motion",
        "Lenis",
      ],
      image: "/assets/images/fotoprojects/kodekiri/kodekiri-desktop.jpg",
      desktopImage: "/assets/images/fotoprojects/kodekiri/kodekiri-desktop.jpg",
      mobileImage: "/assets/images/fotoprojects/kodekiri/kodekiri-mobile-screen.jpg",
      images: [
        "/assets/images/fotoprojects/kodekiri/kodekiri-desktop.jpg",
        "/assets/images/fotoprojects/kodekiri/kodekiri-mobile-screen.jpg",
      ],
      link: "https://www.kodekiri.tech/",
      github: "https://github.com/sryxx16",
    },
    {
      id: 2,
      title: "Jakarta Scooter Shop",
      client: "JAKARTA SCOOTER SHOP",
      year: "2025",
      type: "Web App - E-Commerce",
      description:
        "Platform E-Commerce Full-Stack untuk suku cadang Vespa klasik dengan integrasi pembayaran real-time, katalog suku cadang lengkap, dan pagination responsif.",
      metrics: "30+ catalog items, real-time cart & checkout, dynamic pagination, and deployed live with real customer usage.",
      detailedDescription: {
        overview:
          "A full-stack ecommerce web application developed using Next.js for the frontend and NestJS for the backend API. The system supports product management, shopping cart, order processing, and payment integration. This project was developed in a team of three developers, where I was responsible for the frontend development, implementing the user interface, managing client-side state, and integrating the frontend with the backend API. The application uses PostgreSQL with Prisma ORM for database management, while Redis is used to handle background jobs and queue processing. Tech Stack: Next.js, NestJS, TypeScript, PostgreSQL, Prisma, Redis, Tailwind CSS.",
        responsibilities: [
          "Implementing the user interface with Next.js & Tailwind CSS",
          "Managing client-side state using Zustand",
          "Integrating frontend with NestJS API using TanStack Query",
          "Ensuring responsive design for mobile and desktop",
        ],
        techStack: {
          frontend: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Zustand",
            "TanStack Query",
          ],
          backend: ["NestJS", "TypeScript", "Prisma ORM"],
          infrastructure: ["PostgreSQL", "Redis", "Docker"],
        },
      },
      technologies: [
        "Next.js 15",
        "NestJS 11",
        "PostgreSQL",
        "Prisma ORM",
        "Tailwind CSS",
      ],
      image: "/assets/images/fotoprojects/jss/jss-hero.webp",
      desktopImage: "/assets/images/fotoprojects/jss/jss-hero.webp",
      mobileImage: "/assets/images/fotoprojects/jss/jss-phone-screen.jpg",
      images: [
        "/assets/images/fotoprojects/jss/jss-hero.webp",
        "/assets/images/fotoprojects/jss/jss-phone-screen.jpg",
      ],
      link: "https://jakartascootershop.com/",
      github: null,
    },
    {
      id: 3,
      title: "Aplikasi Jastip Web (Jastipku)",
      client: "IT BOOTCAMP UBSI & HKI",
      year: "2025",
      type: "Web App - SaaS Platform",
      description:
        "Platform penghubung antara pembeli dan traveler untuk layanan jasa titip barang antar kota/negara dengan multi-role dan dashboard manajemen terpadu.",
      metrics: "3rd Place Winner IT Bootcamp, HKI Certified, 3 Roles (Customer/Traveler/Admin), Filament & Livewire Admin.",
      detailedDescription: {
        overview:
          "A web platform built using Laravel that connects customers who want to buy items from other cities or countries with travelers who provide personal shopping services. The system manages order requests, service fees, payment tracking, and withdrawal processes for travelers. The platform includes three main roles: Customer, Traveler, and Admin. Customers can create orders and upload item details, travelers can accept requests and earn service fees, while admins manage platform operations through an admin dashboard built with Filament. The application uses Tailwind CSS and Blade templating for the frontend interface, while Livewire enables dynamic interactions in the admin panel without heavy JavaScript. This project was developed as part of a bootcamp team project, where our team successfully achieved 3rd place among dozens of participating teams.",
        role: "Fullstack Developer (Team Project)",
        achievement:
          "3rd Place Winner among dozens of teams in the IT Bootcamp Competition & Hak Kekayaan Intelektual (HKI).",
        responsibilities: [
          "Developing core features for Customer and Traveler roles using Laravel",
          "Implementing order request systems and payment tracking logic",
          "Building a comprehensive admin dashboard using Filament PHP",
          "Designing responsive frontend interfaces with Tailwind CSS and Blade",
        ],
        techStack: {
          frontend: ["Tailwind CSS", "Blade Templating", "Livewire"],
          backend: ["Laravel", "PHP", "MySQL"],
          admin_panel: ["Filament PHP"],
        },
      },
      technologies: [
        "Laravel",
        "Filament",
        "Livewire",
        "MySQL",
        "Tailwind CSS",
      ],
      image: "/assets/images/fotoprojects/jastip1.png",
      desktopImage: "/assets/images/fotoprojects/jastip1.png",
      mobileImage: "/assets/images/fotoprojects/jastip-mobile-screen.jpg",
      images: [
        "/assets/images/fotoprojects/jastip1.png",
        "/assets/images/fotoprojects/jastip-mobile-screen.jpg",
        "/assets/images/fotoprojects/jastip2.png",
        "/assets/images/fotoprojects/jastip3.png",
        "/assets/images/fotoprojects/jastip4.png",
      ],
      link: null,
      github: "https://github.com/sryxx16/project-jasa-titip.git",
    },
    {
      id: 4,
      title: "SM Sport Center Reservation (FUTSAL-BNSP)",
      client: "SERTIFIKASI BNSP OKUPASI ANALIS PROGRAM",
      year: "2025",
      type: "Web App - Sports Booking Platform",
      description:
        "Sistem reservasi lapangan olahraga (Futsal & Badminton) berbasis web dengan algoritma validasi bentrok jadwal real-time, integrasi database cloud PostgreSQL, dan analitik pendapatan.",
      metrics: "Uji Kompetensi BNSP, Anti-Double Booking Logic, Neon Cloud PostgreSQL, Multi-court management (Futsal & Badminton).",
      detailedDescription: {
        overview:
          "Sistem manajemen reservasi lapangan olahraga yang dibangun untuk memenuhi standar Uji Kompetensi Sertifikasi BNSP Okupasi Analis Program. Aplikasi ini mengatasi masalah double-booking melalui validasi slot waktu yang ketat, visualisasi jadwal interaktif, dan integrasi cloud database serverless Neon PostgreSQL.",
        role: "Frontend & Fullstack Developer",
        responsibilities: [
          "Membangun arsitektur frontend interaktif menggunakan React dan TypeScript",
          "Merancang logika validasi bentrok jadwal transaksi pemesanan secara presisi",
          "Mendesain skema database relasional lapangan, slot waktu, dan pelanggan pada Neon PostgreSQL",
          "Mengimplementasikan UI responsif berkinerja tinggi dengan Tailwind CSS",
        ],
        techStack: {
          frontend: ["React.js", "TypeScript", "Tailwind CSS", "Vite"],
          backend_cloud: ["Neon Cloud PostgreSQL", "Serverless SQL"],
          deployment: ["Vercel"],
        },
      },
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Vite"],
      image: "/assets/images/fotoprojects/bnsp/sm-sport-hero.jpg",
      desktopImage: "/assets/images/fotoprojects/bnsp/sm-sport-hero.jpg",
      mobileImage: "/assets/images/fotoprojects/bnsp/futsal_new.jpg",
      images: [
        "/assets/images/fotoprojects/bnsp/sm-sport-hero.jpg",
        "/assets/images/fotoprojects/bnsp/futsal_new.jpg",
        "/assets/images/fotoprojects/bnsp/badminton_new.jpg",
        "/assets/images/fotoprojects/bnsp/qris-demo.png",
      ],
      link: null,
      github: "https://github.com/sryxx16",
    },
    {
      id: 5,
      title: "Aplikasi Money Tracking",
      client: "PERSONAL FINANCE MOBILE",
      year: "2025",
      type: "Mobile App - Flutter",
      description:
        "Aplikasi mobile pelacak keuangan pribadi untuk mencatat pemasukan dan pengeluaran harian secara digital dengan sinkronisasi Firebase & database lokal SQLite.",
      metrics: "Firebase Auth, Drift SQLite offline-first database, filter kategori cerdas, dan visualisasi grafik pengeluaran.",
      detailedDescription: {
        overview:
          "A personal finance tracking mobile application built using Flutter and Firebase to help users manage their daily income and expenses digitally. The application allows users to record financial transactions, categorize expenses, and monitor their financial activity through simple reports and summaries.",
        role: "Mobile Developer",
        responsibilities: [
          "Building mobile UI components using Flutter and Material Design 3",
          "Implementing user authentication (Register & Login) with Firebase Auth",
          "Developing local database schema and logic using Drift (SQLite)",
          "Managing transaction records and category filtering systems",
          "Creating financial summary reports and data visualization",
        ],
        techStack: {
          mobile_framework: ["Flutter", "Dart"],
          backend_auth: ["Firebase Authentication"],
          local_storage: ["Drift (SQLite)", "Shared Preferences"],
          design_system: ["Material Design 3"],
        },
      },
      technologies: ["Flutter", "Firebase Auth", "SQLite", "Drift", "Dart"],
      image: "/assets/images/fotoprojects/money-tracking/mt1.jpeg",
      desktopImage: "/assets/images/fotoprojects/money-tracking/mt1.jpeg",
      mobileImage: "/assets/images/fotoprojects/money-tracking/mt2.jpeg",
      images: [
        "/assets/images/fotoprojects/money-tracking/mt1.jpeg",
        "/assets/images/fotoprojects/money-tracking/mt2.jpeg",
        "/assets/images/fotoprojects/money-tracking/mt3.jpeg",
        "/assets/images/fotoprojects/money-tracking/mt4.jpeg",
        "/assets/images/fotoprojects/money-tracking/mt5.jpeg",
        "/assets/images/fotoprojects/money-tracking/mt6.jpeg",
        "/assets/images/fotoprojects/money-tracking/mt7.jpeg",
        "/assets/images/fotoprojects/money-tracking/mt8.jpeg",
      ],
      link: null,
      github: "https://github.com/sryxx16/money-tracking.git",
    },
  ],

  certificates: [
    {
      id: 1,
      title: "Sertifikat HKI Web Jasa Titip",
      issuer: "IT Bootcamp UBSI",
      year: "2025",
      description:
        "Penghargaan Hak Kekayaan Intelektual (HKI) atas pengembangan Sistem Informasi Layanan Jasa Titip berbasis Web. Mengamankan hak cipta dari arsitektur perangkat lunak dan desain UI/UX yang telah dibangun.",
      image:
        "/assets/images/sertif/EC002025106321_sertifikat_2025-08-07-1_page-0001.jpg",
      images: [
        "/assets/images/sertif/EC002025106321_sertifikat_2025-08-07-1_page-0001.jpg",
        "/assets/images/sertif/EC002025106321_sertifikat_2025-08-07-1_page-0002.jpg",
      ],
      type: "carousel",
    },
    {
      id: 2,
      title: "PCAP : Programing Essentials in Python",
      issuer: "CISCO",
      year: "2024",
      description:
        "Sertifikasi resmi dari CISCO yang memvalidasi pemahaman mendalam tentang konsep pemrograman dasar hingga menengah menggunakan bahasa Python, termasuk struktur data, algoritma, dan OOP.",
      image: "/assets/images/sertif/17230348_page-0001.jpg",
      type: "single",
    },
    {
      id: 3,
      title: "Fundamental Front-End Web",
      issuer: "Coding Studio",
      year: "2024",
      description:
        "Sertifikat kelulusan dalam membangun antarmuka web interaktif. Menguasai fundamental HTML5, CSS3, JavaScript modern, serta prinsip desain responsif untuk berbagai ukuran layar.",
      image: "/assets/images/sertif/codingstudio.png",
      type: "single",
    },
    {
      id: 4,
      title: "IT Bootcamp Software Dev",
      issuer: "IT Bootcamp UBSI",
      year: "2025",
      description:
        "Menyelesaikan program intensif Software Development. Fokus pada praktik pembuatan aplikasi nyata dari tahap perencanaan, coding, hingga deployment menggunakan teknologi web masa kini.",
      image:
        "/assets/images/sertif/SertifikatDigitalmhs_20251110_002358_page-0001.jpg",
      images: [
        "/assets/images/sertif/SertifikatDigitalmhs_20251110_002358_page-0001.jpg",
      ],
      type: "carousel",
    },
  ],

  contacts: {
    email: "suryadaffaf@gmail.com",
    whatsapp: "+62 857 1587 9337",
    location: "Cibinong, Indonesia",
    github: "https://github.com/sryxx16",
    linkedin: "https://www.linkedin.com/in/surya-daffa-fauzi-khoerudin",
    instagram: "https://www.instagram.com/_sur.16/",
  },
};

