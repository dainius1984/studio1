export const pricingData = {
    // Page 3: Consultations, Fitness & Wellness Zone, Discounts
    consultations: [
      {
        name: "KONSULTACJA BASIC",
        description: "W TYM 30 MIN FITNESS/WELLNESS",
        price: 69,
        image: "/img/test.jpg",
        longDescription: "Profesjonalna konsultacja z naszym specjalistą, w tym 30 minut na urządzeniach fitness i wellness"
      },
      {
        name: "DIETA TYGODNIOWA",
        description: "Indywidualny plan żywieniowy",
        price: 49,
        image: "/img/test.jpg",
        longDescription: "Spersonalizowany plan żywieniowy na tydzień, dostosowany do Twoich potrzeb i celów"
      },
      {
        name: "DIETA SPECJALISTYCZNA TYGODNIOWA",
        description: "Zaawansowany plan żywieniowy",
        price: 149,
        image: "/img/test.jpg",
        longDescription: "Kompleksowy plan żywieniowy opracowany przez specjalistę, uwzględniający indywidualne potrzeby"
      },
    ],
    fitnessZone: [
      {
        device: "ROLL SHAPER",
        duration: "30 MIN",
        price: "40 zł",
        image: "/img/test.jpg",
        description: "Zaawansowane urządzenie do modelowania sylwetki"
      },
      {
        device: "VACU SHAPER",
        duration: "30 MIN",
        price: "60 zł",
        image: "/img/test.jpg",
        description: "Rewolucyjne urządzenie do redukcji tkanki tłuszczowej"
      },
      {
        device: "SWAN INFRA SHAPER",
        duration: "30 MIN",
        price: "60 zł",
        image: "/img/test.jpg",
        description: "Innowacyjny system z promieniowaniem podczerwonym"
      },
      {
        device: "ROWER POZIOMY",
        duration: "30/60 MIN",
        price: "40/60 zł",
        image: "/img/test.jpg",
        description: "Profesjonalny sprzęt fitness do treningu cardio"
      },
    ],
    wellnessZone: [
      {
        device: "LIMFODRENAŻ SPODNIE",
        duration: "30/60 MIN",
        price: "40/60 zł",
        image: "/img/test.jpg",
        description: "Drenaż limfatyczny z wykorzystaniem presoterapii"
      },
      {
        device: "LIMFODRENAŻ + BODY WRAPPING",
        duration: "30/60 MIN",
        price: "45/70 zł",
        image: "/img/test.jpg",
        description: "Kompleksowy zabieg drenujący z owijaniem ciała"
      },
      {
        device: "ELEKTROSTYMULACJA IR",
        duration: "30 MIN",
        price: "110 zł",
        image: "/img/test.jpg",
        description: "Elektrostymulacja z promieniowaniem podczerwonym"
      },
      {
        device: "ELEKTROSTYMULACJA + IR + SERUM",
        duration: "30 MIN",
        price: "130 zł",
        image: "/img/test.jpg",
        description: "Kompleksowy zabieg z serum aktywnym"
      },
      {
        device: "BODY WRAPPING",
        duration: "usługa",
        price: "40 zł",
        image: "/img/test.jpg",
        description: "Profesjonalne owijanie ciała"
      },
    ],
    fitnessWellnessDiscounts: [
      {
        entries: "8 WEJŚĆ",
        discounts: [
          { station: "1 STACJA", discount: "10%" },
          { station: "2 STACJE", discount: "20%" },
          { station: "3 STACJE LUB WIĘCEJ", discount: "35%" },
        ],
      },
      {
        entries: "12 WEJŚĆ",
        discounts: [
          { station: "1 STACJA", discount: "15%" },
          { station: "2 STACJE", discount: "30%" },
          { station: "3 STACJE LUB WIĘCEJ", discount: "40%" },
        ],
      },
    ],
  
    powerShaperPro: [
      {
        title: "Zabieg na wybrane partie ciała",
        details: "1 KOMPLET GŁOWIC | 30 MIN",
        image: "/img/test.jpg",
        basePrice: 249,
        packages: [
          { entries: "1 WEJŚCIE", originalPrice: 249, discountedPrice: null, pricePer: 249 },
          { entries: "8 WEJŚĆ", originalPrice: 1992, discountedPrice: 1394, discount: 30, pricePer: 174 },
          { entries: "10 WEJŚĆ", originalPrice: 2490, discountedPrice: 1618, discount: 35, pricePer: 161 },
          { entries: "12 WEJŚĆ", originalPrice: 2988, discountedPrice: 1643, discount: 45, pricePer: 136 },
        ],
      },
      {
        title: "Zabieg na wybrane partie ciała",
        details: "2 KOMPLETY GŁOWIC | 30 MIN",
        image: "/img/test.jpg",
        basePrice: 299,
        packages: [
          { entries: "1 WEJŚCIE", originalPrice: 299, discountedPrice: null, pricePer: 299 },
          { entries: "8 WEJŚĆ", originalPrice: 2392, discountedPrice: 1674, discount: 30, pricePer: 209 },
          { entries: "10 WEJŚĆ", originalPrice: 2990, discountedPrice: 1943, discount: 35, pricePer: 194 },
          { entries: "12 WEJŚĆ", originalPrice: 3588, discountedPrice: 1973, discount: 45, pricePer: 164 },
        ],
      },
    ],
    
    liposuction: [
      {
        title: "LIPOSUKCJA MEGA POGROMCA CELLULITU",
        details: "LIPOSUKCJA KAWITACYJNA + ENDOMASAŻ LUB FALA RF | 60 MIN",
        image: "/img/test.jpg",
        basePrice: 490,
        packages: [
          { entries: "1 WEJŚCIE", originalPrice: 490, discountedPrice: null, pricePer: 490 },
          { entries: "8 WEJŚĆ", originalPrice: 3920, discountedPrice: 2744, discount: 30, pricePer: 343 },
          { entries: "10 WEJŚĆ", originalPrice: 4900, discountedPrice: 3185, discount: 35, pricePer: 318 },
          { entries: "12 WEJŚĆ", originalPrice: 5880, discountedPrice: 3234, discount: 45, pricePer: 269 },
        ],
      },
      {
        title: "LIPOSUKCJA KAWITACYJNA",
        details: "1 ZABIEG GŁOWICĄ | 30 MIN",
        image: "/img/test.jpg",
        basePrice: 320,
        packages: [
          { entries: "1 WEJŚCIE", originalPrice: 320, discountedPrice: null, pricePer: 320 },
          { entries: "8 WEJŚĆ", originalPrice: 2560, discountedPrice: 1792, discount: 30, pricePer: 224 },
          { entries: "10 WEJŚĆ", originalPrice: 3200, discountedPrice: 2080, discount: 35, pricePer: 208 },
          { entries: "12 WEJŚĆ", originalPrice: 3840, discountedPrice: 2112, discount: 45, pricePer: 176 },
        ],
      },
    ],
  
    cosmetologyTreatments: {
      endomassage: [
        {
          title: "ENDOMASAŻ | TWARZ",
          details: "1 ZABIEG GŁOWICĄ | 15 MIN",
          image: "/img/test.jpg",
          basePrice: 170,
          packages: [
            { entries: "1 WEJŚCIE", originalPrice: 170, discountedPrice: null, pricePer: 170 },
            { entries: "4 WEJŚCIA", originalPrice: 680, discountedPrice: 544, discount: 20, pricePer: 136 },
            { entries: "6 WEJŚĆ", originalPrice: 1020, discountedPrice: 663, discount: 35, pricePer: 110 },
            { entries: "8 WEJŚĆ", originalPrice: 1360, discountedPrice: 748, discount: 45, pricePer: 93 },
          ],
        },
        {
          title: "ENDOMASAŻ | TWARZ, SZYJA, DEKOLT",
          details: "1 ZABIEG GŁOWICĄ | 30 MIN",
          image: "/img/test.jpg",
          basePrice: 200,
          packages: [
            { entries: "1 WEJŚCIE", originalPrice: 200, discountedPrice: null, pricePer: 200 },
            { entries: "4 WEJŚCIA", originalPrice: 800, discountedPrice: 640, discount: 20, pricePer: 160 },
            { entries: "6 WEJŚĆ", originalPrice: 1200, discountedPrice: 780, discount: 35, pricePer: 130 },
            { entries: "8 WEJŚĆ", originalPrice: 1600, discountedPrice: 880, discount: 45, pricePer: 110 },
          ],
        },
        {
          title: "ENDOMASAŻ | CIAŁO",
          details: "1 ZABIEG GŁOWICĄ | 30 MIN",
          image: "/img/test.jpg",
          basePrice: 320,
          packages: [
              { entries: "1 WEJŚCIE", originalPrice: 320, discountedPrice: null, pricePer: 320 },
              { entries: "8 WEJŚĆ", originalPrice: 2560, discountedPrice: 1792, discount: 30, pricePer: 224 },
              { entries: "10 WEJŚĆ", originalPrice: 3200, discountedPrice: 2080, discount: 35, pricePer: 208 },
              { entries: "12 WEJŚĆ", originalPrice: 3840, discountedPrice: 2112, discount: 45, pricePer: 176 },
          ]
        },
        {
          title: "ENDOMASAŻ | CIAŁO",
          details: "1 ZABIEG GŁOWICĄ | 50 MIN",
          image: "/img/test.jpg",
          basePrice: 460,
          packages: [
              { entries: "1 WEJŚCIE", originalPrice: 460, discountedPrice: null, pricePer: 460 },
              { entries: "8 WEJŚĆ", originalPrice: 3680, discountedPrice: 2576, discount: 30, pricePer: 322 },
              { entries: "10 WEJŚĆ", originalPrice: 4600, discountedPrice: 2990, discount: 35, pricePer: 299 },
              { entries: "12 WEJŚĆ", originalPrice: 5520, discountedPrice: 3036, discount: 45, pricePer: 253 },
          ]
        },
      ],
      note: "STRÓJ DO ENDOMASAŻU 60 ZŁ, PRZY ZAKUPIE KARNETU 12 WEJŚĆ GRATIS."
    },
    
    slim4d: [
      {
        title: "SLIM 4D",
        details: "1 PARTIA | 30 MIN",
        image: "/img/test.jpg",
        basePrice: 199,
        packages: [
          { entries: "1 WEJŚCIE", originalPrice: 199, discountedPrice: null, pricePer: 199 },
          { entries: "8 WEJŚĆ", originalPrice: 1592, discountedPrice: 1114, discount: 30, pricePer: 139 },
          { entries: "10 WEJŚĆ", originalPrice: 1990, discountedPrice: 1293, discount: 35, pricePer: 129 },
          { entries: "12 WEJŚĆ", originalPrice: 2388, discountedPrice: 1313, discount: 45, pricePer: 109 },
        ],
      },
      {
        title: "SLIM 4D",
        details: "2 PARTIE | 30 MIN",
        image: "/img/test.jpg",
        basePrice: 249,
        packages: [
          { entries: "1 WEJŚCIE", originalPrice: 249, discountedPrice: null, pricePer: 249 },
          { entries: "8 WEJŚĆ", originalPrice: 1992, discountedPrice: 1394, discount: 30, pricePer: 174 },
          { entries: "10 WEJŚĆ", originalPrice: 2490, discountedPrice: 1618, discount: 35, pricePer: 161 },
          { entries: "12 WEJŚĆ", originalPrice: 2988, discountedPrice: 1643, discount: 45, pricePer: 136 },
        ],
      },
    ],
  
    hifu4d: {
      title: "UJĘDRNIENIE I REDUKCJA",
      treatments: [
        { area: "OKOLICE OCZU", priceSingle: "999 zł", pricePackage3: "2097 zł", pricePerInPackage: "699 zł" },
        { area: "OKOLICE OCZU + CZOŁO", priceSingle: "1699 zł", pricePackage3: "3567 zł", pricePerInPackage: "1189 zł" },
        { area: "POLICZKI + LINIA ŻUCHWY", priceSingle: "1999 zł", pricePackage3: "4197 zł", pricePerInPackage: "1399 zł" },
        { area: "PODBRÓDEK", priceSingle: "999 zł", pricePackage3: "2097 zł", pricePerInPackage: "699 zł" },
        { area: "PODBRÓDEK + SZYJA", priceSingle: "1699 zł", pricePackage3: "3567 zł", pricePerInPackage: "1189 zł" },
        { area: "CZOŁO", priceSingle: "999 zł", pricePackage3: "2097 zł", pricePerInPackage: "699 zł" },
        { area: "CAŁA TWARZ", priceSingle: "1999 - 3999 zł", pricePackage3: "4197 - 8397 zł", pricePerInPackage: "1399 - 2799 zł" },
        { area: "SZYJA", priceSingle: "1199 - 1499 zł", pricePackage3: "2517 - 3147 zł", pricePerInPackage: "839 - 1049 zł" },
        { area: "DEKOLT", priceSingle: "999 - 1499 zł", pricePackage3: "2097 - 3147 zł", pricePerInPackage: "699 - 1049 zł" },
        { area: "BRZUCH", priceSingle: "2299 - 4999 zł", pricePackage3: "4827 - 10497 zł", pricePerInPackage: "1609 - 3499 zł" },
        { area: "BOKI", priceSingle: "1999 - 3999 zł", pricePackage3: "4197 - 8397 zł", pricePerInPackage: "1399 - 2799 zł" },
        { area: "UDA STRONA WEW.", priceSingle: "1999 - 3999 zł", pricePackage3: "4197 - 8397 zł", pricePerInPackage: "1399 - 2799 zł" },
        { area: "UDA STRONA ZEW.", priceSingle: "1999 - 3999 zł", pricePackage3: "4197 - 8397 zł", pricePerInPackage: "1399 - 2799 zł" },
        { area: "OBSZAR NAD KOLANEM", priceSingle: "999 - 1999 zł", pricePackage3: "2097 - 4197 zł", pricePerInPackage: "699 - 1399 zł" },
        { area: "PELIKANY", priceSingle: "1599 zł", pricePackage3: "3357 zł", pricePerInPackage: "1119 zł" },
        { area: "POŚLADKI", priceSingle: "1999 - 3999 zł", pricePackage3: "4197 - 8397 zł", pricePerInPackage: "1399 - 2799 zł" },
      ],
    },
    
    supplements: {
      individual: [
          { name: "GO CLEAN PRO", description: "60 TABLETEK", price: 69, image: "/img/test.jpg" },
          { name: "GO YOUNG BARLEY PRO", description: "500 ML", price: 69, image: "/img/test.jpg" },
          { name: "GO SLIM PRO", description: "90 TABLETEK", price: 69, image: "/img/test.jpg" },
          { name: "GO SLIM LIQUID PRO", description: "500 ML", price: 69, image: "/img/test.jpg" },
          { name: "GO COLLAGEN LIQUID PRO", description: "500 ML", price: 69, image: "/img/test.jpg" },
          { name: "GO ACTIVE PRO", description: "60 TABLETEK", price: 69, image: "/img/test.jpg" },
          { name: "GO ACTIVE SHOTS", description: "7 AMPUŁEK", price: 59, image: "/img/test.jpg" },
      ]
    },
    cosmetics: {
      products: [
          { name: "GO SCRUB PRO", description: "150 ML", price: 69, image: "/img/test.jpg" },
          { name: "GO SHAPE PRO", description: "150 ML", price: 69, image: "/img/test.jpg" },
          { name: "DOMOWE SPA: ZESTAW KOSMETYKÓW", description: "GO SCRUB PRO + GO SHAPE PRO + GO CELLULITE BUSTER PRO", price: 180, image: "/img/test.jpg" },
          { name: "MY MICELLAR", description: "500 ML", price: 29, image: "/img/test.jpg" },
      ],
    }
};