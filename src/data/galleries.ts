export type GalleryCategory =
  | "Gambar Peserta"
  | "Tempat Lawatan"
  | "Makanan Halal"
  | "Suasana Trip";

export type GalleryImage = {
  src: string;
  category: GalleryCategory;
  caption?: string;
};

export type GalleryPackage = {
  slug: string;
  code: string;
  title: string;
  description: string;
  coverImage: string;
  pdfUrl?: string;
  tiktokVideoId?: string;
  tiktokUrl?: string;
  whatsappText: string;
  images: GalleryImage[];
  testimonials?: string[];
};

function createPackageImages(
  slug: string,
  destination: string,
): GalleryImage[] {
  return [
    {
      src: `/gallery/${slug}/peserta-01.jpg`,
      category: "Gambar Peserta",
      caption: `Gambar peserta Nusatravel semasa trip ${destination}`,
    },
    {
      src: `/gallery/${slug}/peserta-02.jpg`,
      category: "Gambar Peserta",
      caption: "Suasana peserta sepanjang perjalanan",
    },
    {
      src: `/gallery/${slug}/tempat-lawatan-01.jpg`,
      category: "Tempat Lawatan",
      caption: "Antara tempat lawatan dalam itinerary",
    },
    {
      src: `/gallery/${slug}/tempat-lawatan-02.jpg`,
      category: "Tempat Lawatan",
      caption: "Tempat menarik untuk bergambar",
    },
    {
      src: `/gallery/${slug}/tempat-lawatan-03.jpg`,
      category: "Tempat Lawatan",
      caption: "Suasana lawatan peserta Nusatravel",
    },
    {
      src: `/gallery/${slug}/makanan-01.jpg`,
      category: "Makanan Halal",
      caption: "Makanan disediakan mengikut pakej",
    },
    {
      src: `/gallery/${slug}/suasana-01.jpg`,
      category: "Suasana Trip",
      caption: "Suasana perjalanan bersama peserta",
    },
    {
      src: `/gallery/${slug}/suasana-02.jpg`,
      category: "Suasana Trip",
      caption: "Moment sepanjang trip",
    },
  ];
}

const defaultTestimonials = [
  "Trip tersusun dan team banyak membantu sepanjang perjalanan 👍",
  "Makanan senang, sesuai bawa family. Recommended!",
  "First time travel dgn Nusatravel, urusan memang mudah je 😊",
];

const makassarTestimonials = [
  "Pakej ni paling best! Dapat free naik cruise tengok sunset, makan minum petang sambil dinner. View cantik gila 🌅",
  "Dapat tengok Masjid 99 Kubah, tour leader pun bagus sangat bantu sepanjang trip 👍",
  "Makanan mudah dan sedap, sesuai bawa family. Recommended!",
];




export const galleries: GalleryPackage[] = [
  {
    slug: "id-makassar",
    code: "ID",
    title: "Makassar",
    description:
      "Lihat gambar peserta, tempat lawatan dan suasana trip Makassar bersama Nusatravel.",
    coverImage: "/gallery/id-makassar/cover.jpg",
    tiktokVideoId: "7654483683318975760",
    tiktokUrl: "https://vt.tiktok.com/ZSCVWnTmJ/",
    whatsappText:
      "Hi Nusatravel, saya berminat dengan pakej Makassar. Boleh share tarikh dan harga terkini?",
    images: [
      {
        src: "/gallery/id-makassar/peserta-01.jpg",
        category: "Gambar Peserta",
        caption: "Gambar kumpulan peserta di Rammang-Rammang",
      },

      {
        src: "/gallery/id-makassar/peserta-02.jpg",
        category: "Gambar Peserta",
        caption: "Peserta bergambar di Masjid 99 Kubah",
      },
      {
        src: "/gallery/id-makassar/peserta-03.jpg",
        category: "Gambar Peserta",
        caption: "Peserta di dalam Masjid 99 Kubah",
      },
      {
        src: "/gallery/id-makassar/peserta-04.jpg",
        category: "Gambar Peserta",
        caption: "Peserta menikmati suasana taman berawan",
      },
      {
        src: "/gallery/id-makassar/peserta-06.jpg",
        category: "Gambar Peserta",
        caption: "Gambar kumpulan di Museum Balla Lompoa",
      },
      {
        src: "/gallery/id-makassar/peserta-07.jpg",
        category: "Gambar Peserta",
        caption: "Peserta di Museum Balla Lompoa, Gowa",
      },
      {
        src: "/gallery/id-makassar/peserta-08.jpg",
        category: "Gambar Peserta",
        caption: "Gambar kumpulan di Pantai Losari",
      },
      {
        src: "/gallery/id-makassar/peserta-11.jpg",
        category: "Gambar Peserta",
        caption: "Peserta menaiki bot berwarna-warni",
      },
      {
        src: "/gallery/id-makassar/peserta-12.jpg",
        category: "Gambar Peserta",
        caption: "Peserta bersedia untuk lawatan bot",
      },
      {
        src: "/gallery/id-makassar/peserta-13.jpg",
        category: "Gambar Peserta",
        caption: "Suasana peserta sepanjang perjalanan bot",
      },
      {
        src: "/gallery/id-makassar/peserta-15.jpg",
        category: "Gambar Peserta",
        caption: "Peserta menikmati trip bot Makassar",
      },
      {
        src: "/gallery/id-makassar/peserta-16.jpg",
        category: "Gambar Peserta",
        caption: "Gambar kumpulan di atas bot Phinisi",
      },
      {
        src: "/gallery/id-makassar/tempat-lawatan-01.jpg",
        category: "Tempat Lawatan",
        caption: "Lawatan ke Desa Wisata Rammang-Rammang",
      },
      {
        src: "/gallery/id-makassar/tempat-lawatan-02.jpg",
        category: "Tempat Lawatan",
        caption: "Bot menyusuri kawasan karst Rammang-Rammang",
      },
      {
        src: "/gallery/id-makassar/tempat-lawatan-04.jpg",
        category: "Tempat Lawatan",
        caption: "Lawatan bot di Rammang-Rammang",
      },
      {
        src: "/gallery/id-makassar/tempat-lawatan-06.jpg",
        category: "Tempat Lawatan",
        caption: "Taman Bunga Marlino Highland",
      },
      {
        src: "/gallery/id-makassar/makanan-01.jpg",
        category: "Makanan Halal",
        caption: "Minum petang & makan malam di kapal Phinisi",
      },
      {
        src: "/gallery/id-makassar/makanan-02.jpg",
        category: "Makanan Halal",
        caption: "Minum petang & makan malam di kapal Phinisi",
      },
      {
        src: "/gallery/id-makassar/suasana-01.jpg",
        category: "Suasana Trip",
        caption: "Suasana perjalanan bersama peserta",
      },
      {
        src: "/gallery/id-makassar/suasana-03.jpg",
        category: "Suasana Trip",
        caption: "Suasana trip bersama team Nusatravel",
      },
      {
        src: "/gallery/id-makassar/suasana-04.jpg",
        category: "Suasana Trip",
        caption: "Suasana lawatan peserta",
      },
      {
        src: "/gallery/id-makassar/suasana-05.jpg",
        category: "Suasana Trip",
        caption: "Suasana di Masjid 99 Kubah",
      },
      {
        src: "/gallery/id-makassar/suasana-06.jpg",
        category: "Suasana Trip",
        caption: "Suasana perjalanan sepanjang trip",
      },
      {
        src: "/gallery/id-makassar/suasana-07.jpg",
        category: "Suasana Trip",
        caption: "Moment indah sepanjang perjalanan",
      },
    ],
    testimonials: makassarTestimonials,
  },



  {
    slug: "id-transjava",
    code: "ID",
    title: "TransJava",
    description:
      "Lihat suasana perjalanan TransJava, gambar peserta dan tempat lawatan bersama Nusatravel.",
    coverImage: "/gallery/id-transjava/cover.jpg",
    whatsappText:
      "Hi Nusatravel, saya berminat dengan pakej TransJava. Boleh share tarikh dan harga terkini?",
    images: createPackageImages("id-transjava", "TransJava"),
    testimonials: defaultTestimonials,
  },
  {
    slug: "cn-china-4-wilayah",
    code: "CN",
    title: "China 4 Wilayah",
    description:
      "Lihat gambar peserta dan suasana trip China 4 Wilayah bersama Nusatravel.",
    coverImage: "/gallery/cn-china-4-wilayah/cover.jpg",
    whatsappText:
      "Hi Nusatravel, saya berminat dengan pakej China 4 Wilayah. Boleh share tarikh dan harga terkini?",
    images: createPackageImages("cn-china-4-wilayah", "China 4 Wilayah"),
    testimonials: defaultTestimonials,
  },
  {
    slug: "cn-wilayah-yunnan",
    code: "CN",
    title: "Wilayah Yunnan",
    description:
      "Lihat suasana trip Yunnan, tempat lawatan dan gambar peserta bersama Nusatravel.",
    coverImage: "/gallery/cn-wilayah-yunnan/cover.jpg",
    whatsappText:
      "Hi Nusatravel, saya berminat dengan pakej Wilayah Yunnan. Boleh share tarikh dan harga terkini?",
    images: createPackageImages("cn-wilayah-yunnan", "Yunnan"),
    testimonials: defaultTestimonials,
  },
  {
    slug: "cn-sichuan-chengdu",
    code: "CN",
    title: "Sichuan Chengdu",
    description:
      "Lihat gambar peserta, tempat lawatan dan suasana perjalanan Sichuan Chengdu bersama Nusatravel.",
    coverImage: "/gallery/cn-sichuan-chengdu/cover.jpg",
    whatsappText:
      "Hi Nusatravel, saya berminat dengan pakej Sichuan Chengdu. Boleh share tarikh dan harga terkini?",
    images: createPackageImages("cn-sichuan-chengdu", "Sichuan Chengdu"),
    testimonials: defaultTestimonials,
  },
  {
    slug: "cn-xian-lanzhou",
    code: "CN",
    title: "Xian Lanzhou",
    description:
      "Lihat suasana trip Xian Lanzhou, gambar peserta dan tempat lawatan bersama Nusatravel.",
    coverImage: "/gallery/cn-xian-lanzhou/cover.jpg",
    whatsappText:
      "Hi Nusatravel, saya berminat dengan pakej Xian Lanzhou. Boleh share tarikh dan harga terkini?",
    images: createPackageImages("cn-xian-lanzhou", "Xian Lanzhou"),
    testimonials: defaultTestimonials,
  },
  {
    slug: "vn-trans-vietnam",
    code: "VN",
    title: "Trans Vietnam",
    description:
      "Lihat gambar peserta dan suasana perjalanan Trans Vietnam bersama Nusatravel.",
    coverImage: "/gallery/vn-trans-vietnam/cover.jpg",
    whatsappText:
      "Hi Nusatravel, saya berminat dengan pakej Trans Vietnam. Boleh share tarikh dan harga terkini?",
    images: createPackageImages("vn-trans-vietnam", "Trans Vietnam"),
    testimonials: defaultTestimonials,
  },
  {
    slug: "th-thailand-5-wilayah",
    code: "TH",
    title: "Thailand 5 Wilayah",
    description:
      "Lihat suasana trip Thailand 5 Wilayah, gambar peserta dan tempat lawatan bersama Nusatravel.",
    coverImage: "/gallery/th-thailand-5-wilayah/cover.jpg",
    whatsappText:
      "Hi Nusatravel, saya berminat dengan pakej Thailand 5 Wilayah. Boleh share tarikh dan harga terkini?",
    images: createPackageImages("th-thailand-5-wilayah", "Thailand 5 Wilayah"),
    testimonials: defaultTestimonials,
  },
  {
    slug: "tr-turkey-classic",
    code: "TR",
    title: "Turkey Classic",
    description:
      "Lihat gambar peserta, tempat lawatan dan suasana perjalanan Turkey Classic bersama Nusatravel.",
    coverImage: "/gallery/tr-turkey-classic/cover.jpg",
    whatsappText:
      "Hi Nusatravel, saya berminat dengan pakej Turkey Classic. Boleh share tarikh dan harga terkini?",
    images: createPackageImages("tr-turkey-classic", "Turkey Classic"),
    testimonials: defaultTestimonials,
  },
  {
    slug: "nz-new-zealand-north-south",
    code: "NZ",
    title: "New Zealand North & South",
    description:
      "Lihat suasana perjalanan New Zealand North & South, gambar peserta dan tempat lawatan bersama Nusatravel.",
    coverImage: "/gallery/nz-new-zealand-north-south/cover.jpg",
    whatsappText:
      "Hi Nusatravel, saya berminat dengan pakej New Zealand North & South. Boleh share tarikh dan harga terkini?",
    images: createPackageImages(
      "nz-new-zealand-north-south",
      "New Zealand North & South",
    ),
    testimonials: defaultTestimonials,
  },
  {
    slug: "it-italy",
    code: "IT",
    title: "Italy",
    description:
      "Lihat gambar peserta, tempat lawatan dan suasana trip Italy bersama Nusatravel.",
    coverImage: "/gallery/it-italy/cover.jpg",
    whatsappText:
      "Hi Nusatravel, saya berminat dengan pakej Italy. Boleh share tarikh dan harga terkini?",
    images: createPackageImages("it-italy", "Italy"),
    testimonials: defaultTestimonials,
  },
  {
    slug: "kr-korea",
    code: "KR",
    title: "Korea",
    description:
      "Lihat suasana trip Korea, gambar peserta, makanan dan tempat lawatan bersama Nusatravel.",
    coverImage: "/gallery/kr-korea/cover.jpg",
    whatsappText:
      "Hi Nusatravel, saya berminat dengan pakej Korea. Boleh share tarikh dan harga terkini?",
    images: createPackageImages("kr-korea", "Korea"),
    testimonials: defaultTestimonials,
  },
];
