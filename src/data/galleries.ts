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
      src: `/gallery/${slug}/peserta-01.webp`,
      category: "Gambar Peserta",
      caption: `Gambar peserta Nusatravel semasa trip ${destination}`,
    },
    {
      src: `/gallery/${slug}/peserta-02.webp`,
      category: "Gambar Peserta",
      caption: "Suasana peserta sepanjang perjalanan",
    },
    {
      src: `/gallery/${slug}/tempat-lawatan-01.webp`,
      category: "Tempat Lawatan",
      caption: "Antara tempat lawatan dalam itinerary",
    },
    {
      src: `/gallery/${slug}/tempat-lawatan-02.webp`,
      category: "Tempat Lawatan",
      caption: "Tempat menarik untuk bergambar",
    },
    {
      src: `/gallery/${slug}/tempat-lawatan-03.webp`,
      category: "Tempat Lawatan",
      caption: "Suasana lawatan peserta Nusatravel",
    },
    {
      src: `/gallery/${slug}/makanan-01.webp`,
      category: "Makanan Halal",
      caption: "Makanan disediakan mengikut pakej",
    },
    {
      src: `/gallery/${slug}/suasana-01.webp`,
      category: "Suasana Trip",
      caption: "Suasana perjalanan bersama peserta",
    },
    {
      src: `/gallery/${slug}/suasana-02.webp`,
      category: "Suasana Trip",
      caption: "Moment sepanjang trip",
    },
  ];
}

const defaultTestimonials = [
  "Trip tersusun dan team banyak membantu sepanjang perjalanan.",
  "Makanan mudah dan perjalanan sesuai untuk bawa family.",
  "Pertama kali travel bersama Nusatravel, urusan terasa lebih mudah.",
];

export const galleries: GalleryPackage[] = [
  {
    slug: "id-makassar",
    code: "ID",
    title: "ID Makassar",
    description:
      "Lihat gambar peserta, tempat lawatan dan suasana trip Makassar bersama Nusatravel.",
    coverImage: "/gallery/id-makassar/cover.jpg",
    whatsappText:
      "Hi Nusatravel, saya berminat dengan pakej ID Makassar. Boleh share tarikh dan harga terkini?",
    images: [
      {
        src: "/gallery/id-makassar/peserta-01.jpg",
        category: "Gambar Peserta",
        caption: "Gambar kumpulan peserta Nusatravel di Masjid 99 Kubah",
      },
      {
        src: "/gallery/id-makassar/peserta-02.jpg",
        category: "Gambar Peserta",
        caption: "Peserta bergambar di hadapan Masjid 99 Kubah",
      },
      {
        src: "/gallery/id-makassar/peserta-03.jpg",
        category: "Gambar Peserta",
        caption: "Peserta di dalam Masjid 99 Kubah",
      },
      {
        src: "/gallery/id-makassar/peserta-04.jpg",
        category: "Gambar Peserta",
        caption: "Peserta menikmati pemandangan sepanjang trip",
      },
      {
        src: "/gallery/id-makassar/peserta-05.jpg",
        category: "Gambar Peserta",
        caption: "Peserta menaiki bot di Rammang-Rammang",
      },
      {
        src: "/gallery/id-makassar/peserta-06.jpg",
        category: "Gambar Peserta",
        caption: "Gambar kumpulan peserta semasa trip bot malam",
      },
      {
        src: "/gallery/id-makassar/peserta-07.jpg",
        category: "Gambar Peserta",
        caption: "Peserta menikmati sunset di atas bot",
      },
      {
        src: "/gallery/id-makassar/peserta-08.jpg",
        category: "Gambar Peserta",
        caption: "Peserta semasa cruise di Makassar",
      },
      {
        src: "/gallery/id-makassar/tempat-lawatan-01.jpg",
        category: "Tempat Lawatan",
        caption: "Lawatan ke Kampoeng Karst Rammang-Rammang, Maros",
      },
      {
        src: "/gallery/id-makassar/tempat-lawatan-02.jpg",
        category: "Tempat Lawatan",
        caption: "Bot menyusuri kawasan karst Rammang-Rammang",
      },
      {
        src: "/gallery/id-makassar/tempat-lawatan-03.jpg",
        category: "Tempat Lawatan",
        caption: "Lawatan bot di kawasan hijau Makassar",
      },
      {
        src: "/gallery/id-makassar/makanan-01.jpg",
        category: "Makanan Halal",
        caption: "Jamuan bersama peserta di atas bot",
      },
      {
        src: "/gallery/id-makassar/makanan-02.jpg",
        category: "Makanan Halal",
        caption: "Makanan disediakan semasa trip bot Makassar",
      },
      {
        src: "/gallery/id-makassar/suasana-01.jpg",
        category: "Suasana Trip",
        caption: "Suasana cruise di atas bot Phinisi",
      },
      {
        src: "/gallery/id-makassar/suasana-02.jpg",
        category: "Suasana Trip",
        caption: "Suasana golden hour semasa trip bot",
      },
      {
        src: "/gallery/id-makassar/suasana-03.jpg",
        category: "Suasana Trip",
        caption: "Suasana perjalanan bersama peserta Nusatravel",
      },
    ],
    testimonials: defaultTestimonials,
  },

  {
    slug: "id-transjava",
    code: "ID",
    title: "ID TransJava",
    description:
      "Lihat suasana perjalanan TransJava, gambar peserta dan tempat lawatan bersama Nusatravel.",
    coverImage: "/gallery/id-transjava/cover.webp",
    whatsappText:
      "Hi Nusatravel, saya berminat dengan pakej ID TransJava. Boleh share tarikh dan harga terkini?",
    images: createPackageImages("id-transjava", "TransJava"),
    testimonials: defaultTestimonials,
  },
  {
    slug: "cn-china-4-wilayah",
    code: "CN",
    title: "CN China 4 Wilayah",
    description:
      "Lihat gambar peserta dan suasana trip China 4 Wilayah bersama Nusatravel.",
    coverImage: "/gallery/cn-china-4-wilayah/cover.webp",
    whatsappText:
      "Hi Nusatravel, saya berminat dengan pakej CN China 4 Wilayah. Boleh share tarikh dan harga terkini?",
    images: createPackageImages("cn-china-4-wilayah", "China 4 Wilayah"),
    testimonials: defaultTestimonials,
  },
  {
    slug: "cn-wilayah-yunnan",
    code: "CN",
    title: "CN Wilayah Yunnan",
    description:
      "Lihat suasana trip Yunnan, tempat lawatan dan gambar peserta bersama Nusatravel.",
    coverImage: "/gallery/cn-wilayah-yunnan/cover.webp",
    whatsappText:
      "Hi Nusatravel, saya berminat dengan pakej CN Wilayah Yunnan. Boleh share tarikh dan harga terkini?",
    images: createPackageImages("cn-wilayah-yunnan", "Yunnan"),
    testimonials: defaultTestimonials,
  },
  {
    slug: "cn-sichuan-chengdu",
    code: "CN",
    title: "CN Sichuan Chengdu",
    description:
      "Lihat gambar peserta, tempat lawatan dan suasana perjalanan Sichuan Chengdu bersama Nusatravel.",
    coverImage: "/gallery/cn-sichuan-chengdu/cover.webp",
    whatsappText:
      "Hi Nusatravel, saya berminat dengan pakej CN Sichuan Chengdu. Boleh share tarikh dan harga terkini?",
    images: createPackageImages("cn-sichuan-chengdu", "Sichuan Chengdu"),
    testimonials: defaultTestimonials,
  },
  {
    slug: "cn-xian-lanzhou",
    code: "CN",
    title: "CN Xian Lanzhou",
    description:
      "Lihat suasana trip Xian Lanzhou, gambar peserta dan tempat lawatan bersama Nusatravel.",
    coverImage: "/gallery/cn-xian-lanzhou/cover.webp",
    whatsappText:
      "Hi Nusatravel, saya berminat dengan pakej CN Xian Lanzhou. Boleh share tarikh dan harga terkini?",
    images: createPackageImages("cn-xian-lanzhou", "Xian Lanzhou"),
    testimonials: defaultTestimonials,
  },
  {
    slug: "vn-trans-vietnam",
    code: "VN",
    title: "VN Trans Vietnam",
    description:
      "Lihat gambar peserta dan suasana perjalanan Trans Vietnam bersama Nusatravel.",
    coverImage: "/gallery/vn-trans-vietnam/cover.webp",
    whatsappText:
      "Hi Nusatravel, saya berminat dengan pakej VN Trans Vietnam. Boleh share tarikh dan harga terkini?",
    images: createPackageImages("vn-trans-vietnam", "Trans Vietnam"),
    testimonials: defaultTestimonials,
  },
  {
    slug: "th-thailand-5-wilayah",
    code: "TH",
    title: "TH Thailand 5 Wilayah",
    description:
      "Lihat suasana trip Thailand 5 Wilayah, gambar peserta dan tempat lawatan bersama Nusatravel.",
    coverImage: "/gallery/th-thailand-5-wilayah/cover.webp",
    whatsappText:
      "Hi Nusatravel, saya berminat dengan pakej TH Thailand 5 Wilayah. Boleh share tarikh dan harga terkini?",
    images: createPackageImages("th-thailand-5-wilayah", "Thailand 5 Wilayah"),
    testimonials: defaultTestimonials,
  },
  {
    slug: "tr-turkey-classic",
    code: "TR",
    title: "TR Turkey Classic",
    description:
      "Lihat gambar peserta, tempat lawatan dan suasana perjalanan Turkey Classic bersama Nusatravel.",
    coverImage: "/gallery/tr-turkey-classic/cover.webp",
    whatsappText:
      "Hi Nusatravel, saya berminat dengan pakej TR Turkey Classic. Boleh share tarikh dan harga terkini?",
    images: createPackageImages("tr-turkey-classic", "Turkey Classic"),
    testimonials: defaultTestimonials,
  },
  {
    slug: "nz-new-zealand-north-south",
    code: "NZ",
    title: "NZ New Zealand North & South",
    description:
      "Lihat suasana perjalanan New Zealand North & South, gambar peserta dan tempat lawatan bersama Nusatravel.",
    coverImage: "/gallery/nz-new-zealand-north-south/cover.webp",
    whatsappText:
      "Hi Nusatravel, saya berminat dengan pakej NZ New Zealand North & South. Boleh share tarikh dan harga terkini?",
    images: createPackageImages(
      "nz-new-zealand-north-south",
      "New Zealand North & South",
    ),
    testimonials: defaultTestimonials,
  },
  {
    slug: "it-italy",
    code: "IT",
    title: "IT Italy",
    description:
      "Lihat gambar peserta, tempat lawatan dan suasana trip Italy bersama Nusatravel.",
    coverImage: "/gallery/it-italy/cover.webp",
    whatsappText:
      "Hi Nusatravel, saya berminat dengan pakej IT Italy. Boleh share tarikh dan harga terkini?",
    images: createPackageImages("it-italy", "Italy"),
    testimonials: defaultTestimonials,
  },
  {
    slug: "kr-korea",
    code: "KR",
    title: "KR Korea",
    description:
      "Lihat suasana trip Korea, gambar peserta, makanan dan tempat lawatan bersama Nusatravel.",
    coverImage: "/gallery/kr-korea/cover.webp",
    whatsappText:
      "Hi Nusatravel, saya berminat dengan pakej KR Korea. Boleh share tarikh dan harga terkini?",
    images: createPackageImages("kr-korea", "Korea"),
    testimonials: defaultTestimonials,
  },
];
