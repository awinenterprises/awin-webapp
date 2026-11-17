import { products } from "../_shared/products.js";

const SITE = "https://awinenterprises.in";
const PHONE = "917828757646";
const UPI_ID = "awin@slc";
const PAYEE = "Awin Enterprises";

const manufacturerImages = {
  "aroplex": "https://altosindia.net/public/product/v1-ayurvedic-medicine/aroplex-capsule.jpg",
  "haldi-with-kesar-drops": "https://altosindia.net/public/product/v1-ayurvedic-medicine/haldi-with-kesar-drops1.jpg",
  "abhinol": "https://altosindia.net/public/product/v1-ayurvedic-medicine/abhinol1.jpg",
  "aloe-vera-moisturising-gel-100g": "https://altosindia.net/public/product/v1-face-care/aloevera-moisturising1.jpg",
  "anti-dandruff-shampoo": "https://altosindia.net/public/product/v1-hair-care/antis-dandruff-shampoo.jpg",
  "chelated-iron": "https://altosindia.net/public/product/v1-nutraceuticals/chilated-iron.jpg",
  "multi-collagen-complex": "https://altosindia.net/public/product/v1-nutraceuticals/multi-collagen.jpg",
  "noni": "https://altosindia.net/public/product/v1-ayurvedic-medicine/noni-capsule1.jpg",
  "aloevera-moisturising-gel": "https://altosindia.net/public/product/v1-face-care/aloevera-moisturising1.jpg",
  "dish-top-gel": "https://altosindia.net/public/product/v1-home-care/dish-top1.jpg",
  "enrich-gold-tea": "https://altosindia.net/public/product/v1-home-care/enrich-gold-tea1.jpg",
  "young-look": "https://altosindia.net/public/product/v1-ayurvedic-medicine/young-look-capsule.jpg",
  "flax-oil": "https://altosindia.net/public/product/v1-ayurvedic-medicine/flax-oil-capsule1.jpg",
  "nutroprash": "https://altosindia.net/public/product/v1-ayurvedic-medicine/nutroprash-capsule1.jpg",
  "garlicplus": "https://altosindia.net/public/product/v1-ayurvedic-medicine/garliplus-capsule1.jpg",
  "hadjod": "https://altosindia.net/public/product/v1-ayurvedic-medicine/hadjod1.jpg",
  "ore-piles": "https://altosindia.net/public/product/v1-ayurvedic-medicine/orepiles-capsule1.jpg",
  "nutroton": "https://altosindia.net/public/product/v1-ayurvedic-medicine/nutroton-capsule1.jpg",
  "vig-r": "https://altosindia.net/public/product/v1-ayurvedic-medicine/vig-r-capsule1.jpg",
  "ganoderma": "https://altosindia.net/public/product/v1-ayurvedic-medicine/ganoderma-capsule1.jpg",
  "vigvit-capsules": "https://altosindia.net/public/product/v1-ayurvedic-medicine/vigvit-capsule1.jpg",
  "rakatchap": "https://altosindia.net/public/product/v1-ayurvedic-medicine/rakatchap-care1.jpg",
  "shatavari": "https://altosindia.net/public/product/v1-ayurvedic-medicine/shatavari-capsule.jpg",
  "papita-giloy": "https://altosindia.net/public/product/v1-ayurvedic-medicine/papita-giloy-tablet1.jpg",
  "musli-pure": "https://altosindia.net/public/product/v1-ayurvedic-medicine/musli-capsule.jpg",
  "slimming-young-look": "https://altosindia.net/public/product/v1-ayurvedic-medicine/young-look-slimming-capsule1.jpg",
  "ore-piles-ointment": "https://altosindia.net/public/product/v1-ayurvedic-medicine/ore-piles-ointment1.jpg",
  "swadisht-powder": "https://altosindia.net/public/product/v1-ayurvedic-medicine/swadisht-churan1.jpg",
  "energize-powder": "https://altosindia.net/public/product/v1-ayurvedic-medicine/herbal-energize1.jpg",
  "ore-amla-gel": "https://altosindia.net/public/product/v1-ayurvedic-medicine/ore-amla1.jpg",
  "abhiliv-liver-syrup": "https://altosindia.net/public/product/v1-ayurvedic-medicine/abhilive-syrup1.jpg",
  "blood-purifier-syrup": "https://altosindia.net/public/product/v1-ayurvedic-medicine/blood-purifier.jpg",
  "anti-wrinkle-cream": "https://altosindia.net/public/product/v1-skin-treatment/anti-ageing-plus-wrinkle-cream2.jpg",
  "to-breen-capsule-altos": "https://altosindia.net/public/product/v1-ayurvedic-medicine/to-brain-capsule1.jpg",
  "lip-balm": "https://altosindia.net/public/product/v1-skin-care/lipbalm1.jpg",
  "jeewan-shakti": "https://altosindia.net/public/product/v1-ayurvedic-medicine/Jeewan-shakti4.jpg",
  "sunscreen-spf-30": "https://altosindia.net/public/product/v1-skin-treatment/spf-30.jpg",
  "ashwagandha": "https://altosindia.net/public/product/v1-ayurvedic-medicine/ashwagandha-capsule1.jpg",
  "brahmi": "https://altosindia.net/public/product/v1-ayurvedic-medicine/brahmi-capsule1.jpg",
  "neem": "https://altosindia.net/public/product/v1-ayurvedic-medicine/neem-capsule1.jpg",
  "korvin-oil": "https://altosindia.net/public/product/v1-ayurvedic-medicine/korvin-oil2.jpg",
  "itch-care-cream": "https://altosindia.net/public/product/v1-ayurvedic-medicine/itch-care-cream.jpg",
  "nutro-dia-powder": "https://altosindia.net/public/product/v1-ayurvedic-medicine/nutro-dia-powder1.jpg",
  "paindon-ointment": "https://altosindia.net/public/product/v1-ayurvedic-medicine/paindon-ointment1.jpg",
  "paindon-oil": "https://altosindia.net/public/product/v1-ayurvedic-medicine/paindon-oil1.jpg",
  "oreslim-powder": "https://altosindia.net/public/product/v1-ayurvedic-medicine/oreslim-powder1.jpg",
  "consoft-powder": "https://altosindia.net/public/product/v1-ayurvedic-medicine/consoft-powder1.jpg",
  "oregel-aloevera": "https://altosindia.net/public/product/v1-ayurvedic-medicine/oregel-aloevera-gel.jpg",
  "noni-juice": "https://altosindia.net/public/product/v1-ayurvedic-medicine/noni-juice1.jpg",
  "abhizyme-syrup": "https://altosindia.net/public/product/v1-ayurvedic-medicine/abhi-zyme3.jpg",
  "breen-syrup": "https://altosindia.net/public/product/v1-ayurvedic-medicine/breen-syrup1.jpg",
  "hridya-care-syrup": "https://altosindia.net/public/product/v1-ayurvedic-medicine/hridya-syrup.jpg",
  "sundri-jiwan": "https://altosindia.net/public/product/v1-ayurvedic-medicine/sundari-jiwan1.jpg",
  "uripure-syrup": "https://altosindia.net/public/product/v1-ayurvedic-medicine/uripure-syrup.jpg",
  "tulsi-syrup": "https://altosindia.net/public/product/v1-ayurvedic-medicine/tulsi-syrup.jpg",
  "giloy-syrup": "https://altosindia.net/public/product/v1-ayurvedic-medicine/giloy-syrup1.jpg",
  "skin-glow-face-wash": "https://altosindia.net/public/product/v1-face-care/skin-glow-face-wash.jpg",
  "gold-face-wash": "https://altosindia.net/public/product/v1-face-care/gold-face-wash.jpg",
  "neem-face-wash-60ml": "https://altosindia.net/public/product/v1-face-care/neem-face-wash1.jpg",
  "honey-and-saffron-body-lotion": "https://altosindia.net/public/product/v1-skin-care/honey-%26-saffron-body-lotion.jpg",
  "anti-blemishing-cream": "https://altosindia.net/public/product/v1-skin-treatment/anti-blemishing-cream2.jpg",
  "onion-black-seed-hair-oil": "https://altosindia.net/public/product/v1-hair-care/onion-black-seed-hair-oil.jpg",
  "bhringraj-hair-oil": "https://altosindia.net/public/product/v1-hair-care/bhringraj-oil.jpg",
  "9-in-1-hair-oil-100ml": "https://altosindia.net/public/product/v1-hair-care/hair-gro-oil.jpg",
  "amla-shikakai-shampoo": "https://altosindia.net/public/product/v1-hair-care/amla-shikakai-shampoo2.jpg",
  "hair-conditioner": "https://altosindia.net/public/product/v1-hair-care/hair-conditionar.jpg",
  "orefresh-gel": "https://altosindia.net/public/product/v1-ayurvedic-medicine/orefresh-gel-1.jpg",
  "shine-bathing-bar": "https://altosindia.net/public/product/v1-home-care/shine-bathing-bar.jpg",
  "rice-bran-oil": "https://altosindia.net/public/product/v1-home-care/rice-bran-0il.jpg",
  "haldi-pure-capsule": "https://altosindia.net/public/product/v1-ayurvedic-medicine/haldi-pure-capsule1.jpg",
  "altocare": "https://altosindia.net/public/product/v1-agriculture-aid/alto-care.jpg",
  "coloston-capsule": "https://altosindia.net/public/product/v1-ayurvedic-medicine/coloston-capsule1.jpg",
  "face-wash-gold": "https://altosindia.net/public/product/v1-face-care/gold-face-wash.jpg",
  "face-wash-skin-glow": "https://altosindia.net/public/product/v1-face-care/skin-glow-face-wash.jpg",
  "jojoba-moisturising-lotion": "https://altosindia.net/public/product/v1-skin-care/jojoba-moisturising-lotion.jpg",
  "hena-hair-pack": "https://altosindia.net/public/product/v1-hair-care/heena-hair-pack.jpg",
  "onion-shampoo": "https://altosindia.net/public/product/v1-hair-care/onion-shampoo1.jpg",
  "hair-serum": "https://altosindia.net/public/product/v1-hair-care/hair-serum.jpg",
  "long-hair-shampoo": "https://altosindia.net/public/product/v1-hair-care/long-hair-shampoo.jpg",
  "kesar-soap": "https://altosindia.net/public/product/v1-home-care/kesar-soap.jpg",
  "oredent-toothpaste-100g": "https://altosindia.net/public/product/v1-ayurvedic-medicine/oredent-toothpaste1.jpg",
  "very-cool-hair-oil": "https://altosindia.net/public/product/v1-hair-care/very-cool-oil.jpg",
  "vitalizer-hair-oil": "https://altosindia.net/public/product/v1-hair-care/hair-vitalizer.jpg",
  "papaya-face-wash-60ml": "https://altosindia.net/public/product/v1-face-care/papaya-face-wash1.jpg",
  "apricot-scrub": "https://altosindia.net/public/product/v1-face-care/apricot-scrub1.jpg",
  "beauty-face-pack": "https://altosindia.net/public/product/v1-face-care/beauty-face-pack1.jpg",
  "face-wash-papaya": "https://altosindia.net/public/product/v1-face-care/papaya-face-wash1.jpg",
  "face-pack-beauty": "https://altosindia.net/public/product/v1-face-care/beauty-face-pack1.jpg",
  "netar-jyoti-eye-drops": "https://shop.altosindia.net/storagecache/product_image/232914560-444dbfa5-b193-457f-8e6d-94198f63da06.jpeg",
  "tulsi-power": "https://shop.altosindia.net/StorageCache/seo_parameter_image/242730877-9393d154-0c4e-4749-88eb-11f2f876d303.jpeg",
  "charcoal-face-wash": "https://altosindia.net/public/product/v1-face-care/charcoal-face-wash1.jpg",
  "face-wash-charcoal": "https://altosindia.net/public/product/v1-face-care/charcoal-face-wash1.jpg"
};

const productDetails = {
  "vitamin-c-serum": {
    "summary": "A facial serum with vitamin C and niacinamide.",
    "ingredients": [
      "Vitamin C",
      "Niacinamide",
      "Aloe vera"
    ],
    "directions": [
      "After cleansing and patting dry, gently smooth onto the face and neck until absorbed."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/vitamin-c-face-serum"
  },
  "hydra-boost-gel": {
    "summary": "A lightweight moisturising gel.",
    "ingredients": [
      "Hyaluronic acid",
      "Niacinamide",
      "Rice extract",
      "Glycerine",
      "Vitamin E acetate"
    ],
    "directions": [
      "Apply according to the directions printed on your pack."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/hydra-boost-gel"
  },
  "sunscreen-spf-50": {
    "summary": "An SPF 50 sunscreen lotion.",
    "ingredients": [
      "Aloe vera",
      "Sandalwood"
    ],
    "directions": [
      "Follow the directions on your pack for application and reapplication."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/spf-50-sunscreen-lotion"
  },
  "alvet-cal-for-animals": {
    "summary": "A liquid feed supplement formulated for animals.",
    "ingredients": [
      "Shatavari",
      "Sarphunkha",
      "Aloe vera",
      "Bhumi amla",
      "Silymarin",
      "Neem"
    ],
    "directions": [
      "Follow the pack directions for the animal's species or ask your veterinarian."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/healthy-alvet-cal"
  },
  "dish-top-gel": {
    "summary": "A concentrated dishwashing gel for cleaning greasy utensils.",
    "ingredients": [],
    "directions": [
      "Use according to the directions on the pack."
    ],
    "source": "https://altosindia.net/products/product/dishtop"
  },
  "enrich-gold-tea": {
    "summary": "Enrich Gold Premier tea blend.",
    "ingredients": [],
    "directions": [
      "Brew according to the directions on your pack."
    ],
    "source": "https://altosindia.net/products/product/enrich-tea"
  },
  "kadak-tea": {
    "summary": "Altos Enrich Kadak tea blend.",
    "ingredients": [],
    "directions": [
      "Brew according to the directions on your pack."
    ],
    "source": "https://altosindia.net/products/product/enrich-tea"
  },
  "bb-cream": {
    "summary": "Zordan BB cream for a light, even-looking makeup finish.",
    "ingredients": [],
    "directions": [
      "Apply according to the directions on the pack."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/bb-cream-zordan"
  },
  "zordan-perfume-bloom": {
    "summary": "Zordan Bloom Eau de Parfum.",
    "ingredients": [],
    "directions": [
      "Use according to the directions and precautions on the pack."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/bloom-perfume"
  },
  "liquid-suhaag-sindoor": {
    "summary": "Liquid sindoor with a matte finish and a sponge-tip applicator.",
    "ingredients": [],
    "directions": [
      "Apply using the sponge-tip applicator as directed on the pack."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/liquid-sindur-red"
  },
  "liquid-sindur-red-red": {
    "summary": "Red liquid sindoor with a sponge-tip applicator.",
    "ingredients": [],
    "directions": [
      "Apply using the sponge-tip applicator as directed on the pack."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/liquid-sindur-red"
  },
  "sunscreen-spf-30": {
    "summary": "An SPF 30 sunscreen lotion for the face and neck.",
    "ingredients": [
      "Aloe vera extract",
      "Honey"
    ],
    "directions": [
      "Apply to the face and neck before going outdoors. Follow the application and reapplication directions on the pack."
    ],
    "source": "https://altosindia.net/products/product/spf-30"
  },
  "curcum-plus": {
    "summary": "An Altos capsule product.",
    "ingredients": [
      "Curcumin Extract",
      "Black Pepper"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/curcum-plus-capsule"
  },
  "young-look": {
    "summary": "An Altos capsule product.",
    "ingredients": [
      "Majith",
      "Rubia cardifolia",
      "Neem",
      "Narangi"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/young-look-capsule"
  },
  "flax-oil": {
    "summary": "An Altos capsule product.",
    "ingredients": [
      "Flax seed Oil"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/flax-oil-capsule"
  },
  "nutroprash": {
    "summary": "An Altos capsule product.",
    "ingredients": [
      "Amla",
      "Haripatri",
      "Arjuna",
      "Karpoor",
      "Haritaki",
      "Badi Elaichi"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/nutroprash-capsule"
  },
  "garlicplus": {
    "summary": "An Altos capsule product.",
    "ingredients": [
      "Garlic"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/garli-plus-capsule"
  },
  "hadjod": {
    "summary": "An Altos capsule product.",
    "ingredients": [
      "Hadjod"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/hadjod-capsule"
  },
  "ore-piles": {
    "summary": "An Altos capsule product.",
    "ingredients": [
      "Mahanimb",
      "Karir",
      "Suran",
      "Chopatiya",
      "Nagkesar",
      "Kakmachi",
      "Ativisha",
      "Harar",
      "Bahera",
      "Amla",
      "Ghritkumari",
      "Amaltas"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/orepiles-capsule"
  },
  "nutroton": {
    "summary": "An Altos capsule product.",
    "ingredients": [
      "Amla",
      "Hritki",
      "Pipli",
      "Draksha"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/nutroton-capsule"
  },
  "vig-r": {
    "summary": "An Altos capsule product.",
    "ingredients": [
      "Ashok",
      "Gawarpatha",
      "Bans",
      "Shatawari",
      "Ashwagandha",
      "Kewanch",
      "Tulsi"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/vig-r-capsule"
  },
  "paindon-plus": {
    "summary": "An Altos capsule product.",
    "ingredients": [
      "Triphla",
      "Sunthi",
      "Kali Mirch",
      "Kal Magha",
      "Nirgundi",
      "Guggal",
      "Gudduchi"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/paindon-plus-capsule"
  },
  "glucosamine-hcl": {
    "summary": "An Altos tablet product.",
    "ingredients": [
      "Glucosamine HCL"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/nutro-glucosamine-hcl"
  },
  "ganoderma": {
    "summary": "An Altos capsule product.",
    "ingredients": [
      "Ganoderma"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/ganoderma-capsule"
  },
  "vigvit-capsules": {
    "summary": "An Altos capsule product.",
    "ingredients": [
      "Latakasturi",
      "Ashwagandha",
      "Gokhru",
      "Mundi",
      "Konch",
      "Shatawari",
      "Safed Musli",
      "laung",
      "Tulsi",
      "Talmakhana",
      "Sonthi",
      "Pippali",
      "Vidarikand",
      "Jaiphal",
      "Shankhpushpi",
      "Kesar",
      "Nardostachys Jatamansi",
      "Akrkara",
      "Piplamool",
      "Dalchini",
      "Jawitri",
      "Malkangni"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/vigvit-capsule"
  },
  "rakatchap": {
    "summary": "An Altos capsule product.",
    "ingredients": [
      "Ashwagandha",
      "Jatamansi",
      "Sarpagandha",
      "Shankspushpi",
      "Giloy",
      "Brahmi",
      "Vacha"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/rakatchaap-capsule"
  },
  "orecal-d": {
    "summary": "An Altos tablet product.",
    "ingredients": [
      "calcium"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/orecal-d-tablet"
  },
  "shatavari": {
    "summary": "An Altos tablet product.",
    "ingredients": [
      "Shatavari",
      "Ashwagandha",
      "Jiwanti"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/shatavari-tablet"
  },
  "papita-giloy": {
    "summary": "An Altos tablet product.",
    "ingredients": [
      "Papita",
      "Giloye"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/papita-giloy-tablet"
  },
  "musli-pure": {
    "summary": "An Altos capsule product.",
    "ingredients": [
      "Safed Musli"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/musli-pure-capsule"
  },
  "slimming-young-look": {
    "summary": "An Altos capsule product.",
    "ingredients": [
      "kokum",
      "Vayvidang",
      "Satva",
      "Chitraka",
      "Methi",
      "Trikuta"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/young-look-slimming-capsule"
  },
  "ore-piles-ointment": {
    "summary": "A topical herbal ointment.",
    "ingredients": [
      "Mahanimb",
      "Karir",
      "Suran",
      "Chopattiya",
      "Nagkesar",
      "kakmachii",
      "Ativisha"
    ],
    "directions": [
      "Follow the application directions on the pack or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/orepiles-ointment"
  },
  "swadisht-powder": {
    "summary": "An Altos powder product.",
    "ingredients": [
      "Saunf",
      "Jeera",
      "Dhania",
      "Kali Mirch",
      "Dalchini",
      "Kapoor",
      "Ajmod",
      "Ela",
      "Sandha Namak",
      "Kala Namak",
      "Hing",
      "Lavang",
      "Mishri"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/swadisht-churan"
  },
  "energize-powder": {
    "summary": "An Altos herbal powder mix.",
    "ingredients": [
      "Brahmi",
      "Shankhpushpi",
      "Gokhru",
      "Ashwagandha",
      "Shtawari"
    ],
    "directions": [
      "Stir into milk or water according to the serving instructions on the pack."
    ],
    "source": "https://altosindia.net/products/product/herbal-energize-powder"
  },
  "vigvit-protein-powder-200g": {
    "summary": "A soy-based protein powder.",
    "ingredients": [
      "Soy protein"
    ],
    "directions": [
      "Mix into a drink or food using the serving instructions on the pack."
    ],
    "source": "https://altosindia.net/products/product/vigvit-protein-powder"
  },
  "jeewan-shakti": {
    "summary": "An Altos formulation product.",
    "ingredients": [
      "Ashwagandha",
      "Shatawari",
      "Gokshru",
      "konch beej",
      "Dalchini",
      "safed musli",
      "Mulethi",
      "Pippli",
      "Vidarikand",
      "Tej patar",
      "Amla",
      "Javitri",
      "Jaiphal",
      "Kesar"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/jeewan-shakti-avaleh"
  },
  "ore-amla-gel": {
    "summary": "An Altos formulation product.",
    "ingredients": [
      "Amla"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/ore-amla"
  },
  "abhiliv-liver-syrup": {
    "summary": "An Altos liquid product.",
    "ingredients": [
      "Sarfooka",
      "Makoi",
      "Katuka",
      "Kasni",
      "Vidang",
      "pippli",
      "Bhringraj"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/abhiliv-syrup"
  },
  "blood-purifier-syrup": {
    "summary": "An Altos liquid product.",
    "ingredients": [
      "Neem",
      "Khus",
      "Chirata",
      "Gulab",
      "Unab",
      "Mundi",
      "Heena",
      "Kasni",
      "Sandal surkh",
      "Nilofar",
      "Sarpunkha",
      "Simsapa",
      "Kharbuza"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/blood-purifier"
  },
  "anti-wrinkle-cream": {
    "summary": "A facial cream with almond and wheat germ oil.",
    "ingredients": [
      "Almond",
      "Wheat germ oil"
    ],
    "directions": [
      "After cleansing, gently massage onto the face and neck. Follow the pack instructions for overnight use."
    ],
    "source": "https://altosindia.net/products/product/anti-ageing-and-wrinkle-cream"
  },
  "to-breen-capsule-altos": {
    "summary": "An Altos formulation product.",
    "ingredients": [
      "shankhpushpi",
      "Brahmi",
      "Malkangani"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/to-brain-capsule"
  },
  "lip-balm": {
    "summary": "A lip moisturiser with shea butter.",
    "ingredients": [
      "Shea Butter"
    ],
    "directions": [
      "Apply a thin layer to the lips."
    ],
    "source": "https://altosindia.net/products/product/lipbalm"
  },
  "zordan-footcare-cream": {
    "summary": "A cream for foot care.",
    "ingredients": [
      "Sal oil",
      "Boswellia",
      "Methi seed",
      "Yashad bhasam",
      "Gandhak"
    ],
    "directions": [
      "Wash and dry your feet, then apply the cream as directed on the pack."
    ],
    "source": "https://altosindia.net/products/product/footcare-cream"
  },
  "ashwagandha": {
    "summary": "An Altos herbal capsule made with ashwagandha.",
    "ingredients": [
      "Ashwagandha"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/ashwagandha-capsule"
  },
  "brahmi": {
    "summary": "An Altos herbal capsule made with brahmi.",
    "ingredients": [
      "Brahmi"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/brahmi-capsule"
  },
  "neem": {
    "summary": "An Altos herbal capsule made with neem.",
    "ingredients": [
      "Neem"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/neem-capsule"
  },
  "noni": {
    "summary": "An Altos herbal capsule made with noni.",
    "ingredients": [
      "Noni"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/noni-capsule"
  },
  "korvin-oil": {
    "summary": "A topical herbal massage oil.",
    "ingredients": [
      "Tila",
      "Akarkara",
      "Laung",
      "Jaiphal",
      "Dalchini"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/korvin-oil"
  },
  "chelated-iron": {
    "summary": "A chelated iron supplement with added vitamins and zinc.",
    "ingredients": [
      "Iron",
      "Zinc",
      "Vitamin b12",
      "Vitamin c"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/chelated-iron"
  },
  "multi-collagen-complex": {
    "summary": "A collagen and piperine supplement.",
    "ingredients": [
      "Collagen",
      "Piperine"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/multi-collagen-complex"
  },
  "itch-care-cream": {
    "summary": "An Altos cream for topical use.",
    "ingredients": [
      "Shudha Gandhak",
      "Safutika Bhasma",
      "Tankan Bhasma",
      "Raal"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/itch-care-cream"
  },
  "nutro-dia-powder": {
    "summary": "An Altos herbal powder blend.",
    "ingredients": [
      "Gurmar",
      "Karela",
      "Jamun Guthli",
      "Neem",
      "Bijasar",
      "Amla",
      "Haritrki"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/nutro-dia-powder"
  },
  "paindon-ointment": {
    "summary": "A topical ointment containing herbal oils.",
    "ingredients": [
      "Mahanarayan Tel",
      "Mahavishagar Tel",
      "Satpudina",
      "Satajwain",
      "Kapoor"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/paindon-ointment"
  },
  "paindon-oil": {
    "summary": "A topical massage oil containing herbal oils.",
    "ingredients": [
      "Gandhpura",
      "Neelgiri",
      "Satpudina",
      "Mushkapoor",
      "Til Oil"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/paindon-oil"
  },
  "oreslim-powder": {
    "summary": "An Altos powder made with kokum and green coffee beans.",
    "ingredients": [
      "Kokum",
      "Green Coffee beans"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/oreslim-powder"
  },
  "consoft-powder": {
    "summary": "An Altos herbal powder with isabgol and fennel.",
    "ingredients": [
      "Sanaya",
      "Isabgol",
      "saunf"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/consoft-powder"
  },
  "oregel-aloevera": {
    "summary": "An aloe vera liquid formulation.",
    "ingredients": [
      "Aloevera"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/oregel-syrup"
  },
  "noni-juice": {
    "summary": "A liquid formulation made with noni.",
    "ingredients": [
      "Noni"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/noni-juice"
  },
  "abhizyme-syrup": {
    "summary": "A liquid herbal formulation from Altos.",
    "ingredients": [
      "Sonth",
      "Khajur",
      "Vidang",
      "Kapurkachri",
      "Ajwain",
      "Chavya",
      "Nagarmotha"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/abhizyme-syrup"
  },
  "breen-syrup": {
    "summary": "An Altos syrup containing a blend of herbs.",
    "ingredients": [
      "Malkangni",
      "Shankhpushpi",
      "Brahmi",
      "Mulethi",
      "Ashwagandha",
      "Jatamansi",
      "Dhaniya",
      "Vidang",
      "Saunf",
      "Sarpgandha",
      "Vacha"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/breen-syrup"
  },
  "hridya-care-syrup": {
    "summary": "An Altos syrup containing arjuna bark and other herbs.",
    "ingredients": [
      "Arjuna Bark",
      "Valerian jatamansi",
      "Alsi",
      "Triphala (Amla, Harar & Bahera)",
      "Uste khadoos",
      "Kakra shringi",
      "Brahmi",
      "Shankhpushpi",
      "Gokhru",
      "Saunf"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/hridya-care-syrup"
  },
  "sundri-jiwan": {
    "summary": "A liquid herbal formulation from Altos.",
    "ingredients": [
      "Nagkesar",
      "Dashmool",
      "Arjuna",
      "Supari",
      "Ashwagandha",
      "Amla",
      "Elaichi",
      "Ashoka",
      "Lodhra",
      "Manjuphal",
      "Mochras",
      "Shatawari",
      "Vasaka"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/sundri-jiwan"
  },
  "uripure-syrup": {
    "summary": "An Altos syrup containing a blend of herbs.",
    "ingredients": [
      "Aloevera",
      "Shilajit",
      "Gokshru",
      "Pashanbhed",
      "Tripushap/kheera",
      "Varun chaal",
      "Kulthi",
      "Ushir",
      "Punarnava",
      "Sheetalchini/kankol",
      "Kush",
      "Bhumi amlaki",
      "Annanas",
      "Palash",
      "Daruharidra",
      "Giloy",
      "Shahad",
      "Navsadar",
      "Pudina"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/uripure-syrup"
  },
  "shilajit-syrup": {
    "summary": "An Altos liquid formulation containing shilajit and herbs.",
    "ingredients": [
      "Shilajit",
      "Vidarikand",
      "Shatavari",
      "Ashwagandha",
      "Gokhru",
      "Arjun Chhal",
      "Amla",
      "Manjishtha",
      "Gorakhmundi",
      "Sunthi",
      "Kaunch Beej"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/shilajit-syrup"
  },
  "tulsi-syrup": {
    "summary": "An Altos syrup containing tulsi extract.",
    "ingredients": [
      "Tulsi Extract"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/tulsi-syrup"
  },
  "giloy-syrup": {
    "summary": "An Altos syrup containing giloy extract.",
    "ingredients": [
      "Giloy Extract"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/giloy-syrup"
  },
  "haldi-pure-capsule": {
    "summary": "An Altos herbal capsule made with turmeric.",
    "ingredients": [
      "Haldi"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/haldi-pure-capsule"
  },
  "coloston-capsule": {
    "summary": "A bovine colostrum supplement in capsule form.",
    "ingredients": [
      "Bovine Colostrum Powder"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/coloston-capsule"
  },
  "coloston-bovine-colostrum": {
    "summary": "A bovine colostrum supplement in capsule form.",
    "ingredients": [
      "Bovine Colostrum Powder"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/coloston-capsule"
  },
  "rose-water": {
    "summary": "A rose-water preparation for facial care.",
    "ingredients": [
      "Rose petals"
    ],
    "directions": [
      "Apply gently to the face with a cotton pad."
    ],
    "source": "https://altosindia.net/products/product/rose-water"
  },
  "honey-and-saffron-body-lotion": {
    "summary": "A body lotion with honey and saffron.",
    "ingredients": [
      "Honey",
      "Saffron"
    ],
    "directions": [
      "Smooth a small amount gently over the body."
    ],
    "source": "https://altosindia.net/products/product/honey-saffron-body-lotion"
  },
  "anti-blemishing-cream": {
    "summary": "A facial cream with papaya and almond oil.",
    "ingredients": [
      "Papaya",
      "Almond oil"
    ],
    "directions": [
      "After cleansing, massage gently onto the face and neck. Follow pack instructions for overnight use."
    ],
    "source": "https://altosindia.net/products/product/anti-blemishing-cream"
  },
  "under-eye-cream": {
    "summary": "A cream for the skin beneath the eyes.",
    "ingredients": [
      "Olive oil",
      "Lemon"
    ],
    "directions": [
      "After cleansing, gently apply beneath the eyes according to the pack directions."
    ],
    "source": "https://altosindia.net/products/product/under-eye-cream"
  },
  "onion-black-seed-hair-oil": {
    "summary": "A hair and scalp oil with onion seed and black seed oils.",
    "ingredients": [
      "Black Seed Oil",
      "Moroccan Argan Oil",
      "Castor oil",
      "Almond Oil",
      "Jojoba Oil",
      "Olive oil",
      "Onion seed Oil"
    ],
    "directions": [
      "Apply to the roots and work through the hair. Massage gently into the scalp."
    ],
    "source": "https://altosindia.net/products/product/onion-black-seed-hair-oil"
  },
  "amla-hair-oil": {
    "summary": "An amla oil for the hair and scalp.",
    "ingredients": [
      "Amla"
    ],
    "directions": [
      "Apply evenly to dry hair and massage gently at the roots."
    ],
    "source": "https://altosindia.net/products/product/amla-hair-oil"
  },
  "hair-conditioner": {
    "summary": "A rinse-off conditioner with aloe vera and cherry.",
    "ingredients": [
      "Aloevera extract",
      "Cherry"
    ],
    "directions": [
      "After shampooing, massage into wet hair. Leave for about two minutes and rinse well."
    ],
    "source": "https://altosindia.net/products/product/hair-conditioner"
  },
  "orefresh-gel": {
    "summary": "A dental gel for daily brushing.",
    "ingredients": [
      "Peppermint oil",
      "Spearmint",
      "Tulsi",
      "Neem"
    ],
    "directions": [
      "Brush gently with a soft-bristled toothbrush, then rinse your mouth."
    ],
    "source": "https://altosindia.net/products/product/orefresh-gel"
  },
  "shine-bathing-bar": {
    "summary": "A cleansing bar containing honey.",
    "ingredients": [
      "Honey"
    ],
    "directions": [
      "Work into a lather on damp skin, then rinse and pat dry."
    ],
    "source": "https://altosindia.net/products/product/shine-bathing-bar"
  },
  "jojoba-moisturising-lotion": {
    "summary": "A body lotion containing jojoba and almond oils.",
    "ingredients": [
      "Jojoba Oil",
      "Almond Oil"
    ],
    "directions": [
      "Smooth a small amount gently over the body."
    ],
    "source": "https://altosindia.net/products/product/jojoba-moisturising-lotion"
  },
  "oredent-toothpaste-100g": {
    "summary": "A toothpaste for daily brushing.",
    "ingredients": [
      "Neem",
      "Clove oil",
      "Tulsi",
      "Menthol"
    ],
    "directions": [
      "Brush gently with a soft-bristled toothbrush, then rinse your mouth."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/oredent-toothpaste"
  },
  "long-hair-shampoo": {
    "summary": "A rinse-off shampoo containing neem and bhringraj.",
    "ingredients": [
      "Neem extract",
      "Bhringraj"
    ],
    "directions": [
      "Apply a small amount to wet hair, then rinse thoroughly."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/long-hair-shampoo"
  },
  "kesar-soap": {
    "summary": "A saffron cleansing bar.",
    "ingredients": [
      "Saffron"
    ],
    "directions": [
      "Lather on damp skin, rinse with water and pat dry."
    ],
    "source": "https://altosindia.net/products/product/kesar-soap"
  },
  "hair-serum": {
    "summary": "A hair serum with olive oil and grapeseed oil.",
    "ingredients": [
      "Olive oil",
      "Grapeseed oil"
    ],
    "directions": [
      "After shampooing, put a small amount in your palms and smooth it gently over your hair."
    ],
    "source": "https://altosindia.net/products/product/hair-serum"
  },
  "very-cool-hair-oil": {
    "summary": "An oil for scalp and hair massage.",
    "ingredients": [
      "Mint",
      "Bhringraj",
      "Amla"
    ],
    "directions": [
      "Apply gently across the scalp, using the amount indicated on the pack."
    ],
    "source": "https://altosindia.net/products/product/very-cool-oil"
  },
  "vitalizer-hair-oil": {
    "summary": "A scalp treatment containing jatamansi and amla extract.",
    "ingredients": [
      "Jatamansi",
      "Amla extract"
    ],
    "directions": [
      "Apply to the scalp and massage gently with your fingertips before bed. Follow the pack directions for overnight use."
    ],
    "source": "https://altosindia.net/products/product/hair-vitalizer"
  },
  "haldi-with-kesar-drops": {
    "summary": "A liquid turmeric and saffron formulation.",
    "ingredients": [
      "Turmeric",
      "Saffron",
      "Curcumin"
    ],
    "directions": [
      "Follow the directions printed on the pack or given by your physician."
    ],
    "source": "https://altosindia.net/eshop/product/info/haldi-drops"
  },
  "netar-jyoti-eye-drops": {
    "summary": "A bottled eye-drop formulation from Altos Ayurveda.",
    "ingredients": [
      "Daruhaldi ark",
      "Bhringraj ark",
      "Punarnava ark",
      "Ghritkumari ark",
      "Tulsi ark"
    ],
    "directions": [
      "Follow the directions printed on the pack or given by your physician."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/netar-jyoti"
  },
  "aroplex-plus-plus": {
    "summary": "An Altos herbal capsule combo containing two packs of 60 capsules.",
    "ingredients": [
      "Musli",
      "Shatavari",
      "Brahmi",
      "Draksh",
      "Amla",
      "Rose flower",
      "Shilajit",
      "Saffron",
      "Ashwagandha"
    ],
    "directions": [
      "Follow the directions printed on the pack or given by your physician."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/aroplex-plus-capsule"
  },
  "amla-shikakai-shampoo": {
    "summary": "A rinse-off hair cleanser with amla, shikakai and reetha.",
    "ingredients": [
      "Amla",
      "Shikakai",
      "Reetha"
    ],
    "directions": [
      "Lather into wet hair with a gentle massage, then rinse thoroughly."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/amla-shikakai-shampoo"
  },
  "apricot-scrub": {
    "summary": "A rinse-off facial scrub for exfoliation.",
    "ingredients": [
      "Apricot",
      "Aloe vera"
    ],
    "directions": [
      "Gently massage a small amount onto your face, then rinse with water. Follow the frequency indicated on the pack."
    ],
    "source": "https://altosindia.net/eshop/product/info/apricot-scrub"
  },
  "beauty-face-pack": {
    "summary": "A facial pack with turmeric, sandalwood and fuller's earth.",
    "ingredients": [
      "Turmeric",
      "Sandalwood",
      "Multani mitti"
    ],
    "directions": [
      "Mix a small amount with a few drops of rose water. Apply evenly to the face, then rinse as directed on the pack."
    ],
    "source": "https://altosindia.net/products/product/beauty-face-pack"
  },
  "face-pack-beauty": {
    "summary": "A facial pack with turmeric, sandalwood and fuller's earth.",
    "ingredients": [
      "Turmeric",
      "Sandalwood",
      "Multani mitti"
    ],
    "directions": [
      "Mix a small amount with a few drops of rose water. Apply evenly to the face, then rinse as directed on the pack."
    ],
    "source": "https://altosindia.net/products/product/beauty-face-pack"
  },
  "rice-water-face-wash": {
    summary: "A rinse-off face cleanser formulated with rice bran, niacinamide and vitamin E.",
    ingredients: ["Rice bran", "Niacinamide", "Vitamin E"],
    directions: ["Apply to wet skin, massage gently with your fingertips, then rinse with water."],
    source: "https://shop.altosindia.net/eshop/product/info/rice-water-face-wash"
  },
  "ubtan-face-wash": {
    summary: "A rinse-off face wash for removing dirt and leaving skin feeling fresh.",
    ingredients: ["Turmeric", "Vitamin E", "Carrot seed", "Walnut", "Orange oil"],
    directions: ["Apply to a wet face and massage gently, then rinse and pat dry."],
    source: "https://shop.altosindia.net/eshop/product/info/ubtan-face-wash"
  },
  "anti-dandruff-shampoo-100ml": {
    summary: "A rinse-off shampoo for dandruff-prone hair and scalp.",
    ingredients: ["Tea tree oil", "Neem extract"],
    directions: ["Apply a small amount to wet hair, leave briefly as directed and rinse thoroughly."],
    source: "https://shop.altosindia.net/eshop/product/info/anti-dandruff-shampoo"
  },
  "skin-glow-face-wash": {
    "summary": "A rinse-off facial cleanser with berry extracts.",
    "ingredients": [
      "Blackberry",
      "Mulberry"
    ],
    "directions": [
      "Massage a small amount gently over your face, then rinse with water."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/skin-glow-face-wash"
  },
  "face-wash-skin-glow": {
    "summary": "A rinse-off facial cleanser with berry extracts.",
    "ingredients": [
      "Blackberry",
      "Mulberry"
    ],
    "directions": [
      "Massage a small amount gently over your face, then rinse with water."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/skin-glow-face-wash"
  },
  "gold-face-wash": {
    "summary": "A rinse-off face cleanser with honey.",
    "ingredients": [
      "Honey"
    ],
    "directions": [
      "Massage a small amount gently over your face, then rinse with water."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/gold-face-wash"
  },
  "face-wash-gold": {
    "summary": "A rinse-off face cleanser with honey.",
    "ingredients": [
      "Honey"
    ],
    "directions": [
      "Massage a small amount gently over your face, then rinse with water."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/gold-face-wash"
  },
  "neem-face-wash-60ml": {
    "summary": "A rinse-off facial cleanser with neem, aloe vera and tea tree oil.",
    "ingredients": [
      "Neem",
      "Aloe vera",
      "Tea tree oil"
    ],
    "directions": [
      "Massage a small amount gently over your face, then rinse with water."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/neem-face-wash"
  },
  "aloe-vera-moisturising-gel-100g": {
    "summary": "A moisturising gel for the face and neck.",
    "ingredients": [
      "Aloe vera",
      "Rose extract"
    ],
    "directions": [
      "Massage gently over the face and neck using upward circular strokes."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/aloevera-moisturising-gel"
  },
  "aloevera-moisturising-gel": {
    "summary": "A moisturising gel for the face and neck.",
    "ingredients": [
      "Aloe vera",
      "Rose extract"
    ],
    "directions": [
      "Massage gently over the face and neck using upward circular strokes."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/aloevera-moisturising-gel"
  },
  "altos-balm": {
    "summary": "A topical balm with aromatic oils.",
    "ingredients": [
      "Camphor oil",
      "Mint",
      "Eucalyptus oil",
      "Clove oil",
      "Wintergreen oil"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your physician."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/altos-balm"
  },
  "bhringraj-hair-oil": {
    "summary": "An oil for massaging the scalp and conditioning the hair.",
    "ingredients": [
      "Bhringraj",
      "Kumari (aloe vera)",
      "Amla",
      "Brahmi"
    ],
    "directions": [
      "Work the oil into the roots and massage the scalp, following the pack directions."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/bhringraj-oil"
  },
  "anti-dandruff-shampoo": {
    "summary": "A rinse-off shampoo for dandruff-prone hair and scalp.",
    "ingredients": [
      "Tea tree oil",
      "Neem extract"
    ],
    "directions": [
      "Apply a small amount to wet hair, leave briefly as directed and rinse thoroughly."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/anti-dandruff-shampoo"
  },
  "onion-shampoo": {
    "summary": "A rinse-off shampoo containing onion and plant keratin.",
    "ingredients": [
      "Onion",
      "Plant keratin"
    ],
    "directions": [
      "Lather into wet hair and scalp with your fingertips, then rinse well."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/onion-shampoo"
  },
  "9-in-1-hair-oil-100ml": {
    "summary": "A blend of nine ingredients for scalp massage.",
    "ingredients": [
      "Sesame",
      "Bhringraj",
      "Manjistha",
      "Amla",
      "Olive",
      "Coconut",
      "Almond",
      "Peanut",
      "Neem"
    ],
    "directions": [
      "Massage into the scalp with your fingertips. Altos suggests leaving it on overnight."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/hair-gro-oil"
  },
  "hena-hair-pack": {
    "summary": "A henna-based pack for the hair and scalp.",
    "ingredients": [
      "Amla",
      "Shikakai",
      "Bhringraj",
      "Henna"
    ],
    "directions": [
      "Spread over the hair and scalp, then rinse thoroughly once it has dried."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/henna-herbal-hair-pack"
  },
  "stevia-drops": {
    "summary": "Liquid stevia for sweetening drinks and dishes.",
    "ingredients": [
      "Stevia"
    ],
    "directions": [
      "Add drops to taste, using the pack's serving guidance."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/stevia-drops"
  },
  "abhinol": {
    "summary": "An Altos herbal capsule formulation in a pack of 60.",
    "ingredients": [
      "Gurmar",
      "Jamun seed",
      "Karela",
      "Guduchi",
      "Bijasar",
      "Shilajit"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your physician."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/abhinol-capsule"
  },
  "aroplex": {
    "summary": "An Altos herbal capsule formulation in a pack of 30.",
    "ingredients": [
      "Shatavari",
      "Brahmi",
      "Draksh",
      "Amla",
      "Rose",
      "Shilajit",
      "Musli",
      "Saffron",
      "Ashwagandha"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your physician."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/aroplex-capsule"
  },
  "oregel-diab": {
    "summary": "An Altos liquid herbal formulation in a 500 ml bottle.",
    "ingredients": [
      "Aloe vera",
      "Giloy",
      "Amla",
      "Karela",
      "Jamun seed"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your physician."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/oregel-diab"
  },
  "tulsi-power": {
    "summary": "A liquid blend of five types of tulsi. This pack contains 30 ml in total.",
    "ingredients": [
      "Ram Tulsi",
      "Sham Tulsi",
      "Van Tulsi",
      "Kapuri Tulsi",
      "Sursa Tulsi"
    ],
    "directions": [
      "Follow the directions on your pack label or those given by your physician."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/tulsi-power"
  },
  "charcoal-face-wash": {
    "summary": "An activated charcoal face wash for rinsing away dirt and excess oil.",
    "ingredients": [
      "Activated charcoal powder"
    ],
    "directions": [
      "Gently massage onto your face in circular motions, then rinse with water."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/charcoal-face-wash"
  },
  "face-wash-charcoal": {
    "summary": "An activated charcoal face wash for rinsing away dirt and excess oil.",
    "ingredients": [
      "Activated charcoal powder"
    ],
    "directions": [
      "Gently massage onto your face in circular motions, then rinse with water."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/charcoal-face-wash"
  },
  "papaya-face-wash-60ml": {
    "summary": "A rinse-off face cleanser with papaya and aloe vera.",
    "ingredients": [
      "Papaya",
      "Aloe vera"
    ],
    "directions": [
      "Gently massage a small amount onto your face, then rinse with water."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/papaya-face-wash"
  },
  "face-wash-papaya": {
    "summary": "A rinse-off face cleanser with papaya and aloe vera.",
    "ingredients": [
      "Papaya",
      "Aloe vera"
    ],
    "directions": [
      "Gently massage a small amount onto your face, then rinse with water."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/papaya-face-wash"
  },
  "face-wash-ubtan": {
    "summary": "A rinse-off face wash for removing dirt and leaving skin feeling fresh.",
    "ingredients": [
      "Turmeric",
      "Vitamin E",
      "Carrot seed",
      "Walnut",
      "Orange oil"
    ],
    "directions": [
      "Apply to a wet face and gently massage with your fingertips.",
      "Rinse with water and pat dry."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/ubtan-face-wash"
  },
  "vitamin-c-face-wash": {
    summary: "A rinse-off face wash for cleansing and exfoliation. It helps remove dead skin cells for brighter-looking skin.",
    ingredients: ["Lemon oil", "Aloe vera"],
    directions: [
      "Wet your face and neck with lukewarm water.",
      "Use a pea-sized amount and gently massage in circular motions.",
      "Rinse with lukewarm water and pat dry."
    ],
    source: "https://shop.altosindia.net/eshop/product/info/vitamin-c-face-wash"
  }
};

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
}

export async function onRequest({ params }) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) {
    return new Response("Product not found", {
      status: 404,
      headers: { "Content-Type": "text/plain; charset=utf-8" }
    });
  }

  const details = Object.hasOwn(productDetails, product.slug) ? productDetails[product.slug] : undefined;
  const image = Object.hasOwn(manufacturerImages, product.slug) ? manufacturerImages[product.slug] : product.image;
  const url = `${SITE}/products/${product.slug}`;
  const inStock = product.inStock ?? true;
  const stockLabel = inStock ? "In stock" : "Out of stock";
  const brand = product.brand ?? (
    product.slug === "tulsi-power" ? "Altos Ayurveda" :
    product.slug === "charcoal-face-wash" || product.name.startsWith("Zordan ") ? "Zordan" :
    undefined
  );
  const returnPolicy = {
    "@type": "MerchantReturnPolicy",
    applicableCountry: "IN",
    returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
    merchantReturnDays: 2,
    itemCondition: "https://schema.org/DamagedCondition",
    merchantReturnLink: `${url}#returns`
  };
  const title = `Buy ${product.name} Online in India | Awin Enterprises`;
  const description = details
    ? `${product.name} (${product.pack}). ${details.summary}`
    : `View ${product.name} by Awin Enterprises. Pack: ${product.pack}. Check current price, availability and ordering details on WhatsApp.`;
  const message = `Hello Awin Enterprises, I want to enquire about ${product.name} (${product.pack}). Please confirm current price and availability.`;
  const whatsapp = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [image],
    description,
    category: product.category,
    ...(brand ? { brand: { "@type": "Brand", name: brand } } : {}),
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "INR",
      price: String(product.price),
      availability: inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      shippingDetails: { "@type": "OfferShippingDetails", hasShippingService: { "@id": `${SITE}/#india-shipping` } },
      hasMerchantReturnPolicy: returnPolicy,
      seller: { "@type": "Organization", name: "Awin Enterprises", url: SITE }
    }
  }).replace(/</g, "\\u003c");

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}">
<meta name="robots" content="index,follow">
<link rel="canonical" href="${url}">
<meta property="og:type" content="product">
<meta property="og:title" content="${escapeHtml(title)}">
<meta property="og:description" content="${escapeHtml(description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${escapeHtml(image)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeHtml(title)}">
<meta name="twitter:description" content="${escapeHtml(description)}">
<meta name="twitter:image" content="${escapeHtml(image)}">
<script type="application/ld+json">${jsonLd}</script>
<style>
:root{font-family:Arial,Helvetica,sans-serif;color:#17211b;background:#f7faf6}*{box-sizing:border-box}body{margin:0;line-height:1.6;overflow-x:hidden;overflow-wrap:anywhere}img{max-width:100%}.top{background:#064e3b;color:#fff;text-align:center;padding:10px}.wrap{max-width:1050px;margin:auto;padding:22px}.brand{color:#064e3b;font-weight:800;text-decoration:none;font-size:20px}.back{float:right;color:#14532d;font-weight:700}.card{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:32px;background:#fff;border:1px solid #e2e9e1;border-radius:20px;padding:26px;margin-top:24px}.photo{background:#f1f6ed;border-radius:16px;display:grid;place-items:center;min-height:320px;padding:16px}.photo img{display:block;width:100%;height:clamp(290px,38vw,440px);object-fit:contain}.tag{color:#166534;font-weight:700;text-transform:uppercase;font-size:12px;letter-spacing:.08em}h1{font-size:clamp(28px,5vw,42px);line-height:1.15;color:#173c29;margin:10px 0}.muted{color:#65736a}.price{font-size:30px;font-weight:800;color:#064e3b}.mrp{text-decoration:line-through;color:#758078;font-size:16px;margin-left:8px}.btn{display:inline-block;background:#15803d;color:white;text-decoration:none;padding:13px 18px;border-radius:10px;font-weight:800;margin:8px 8px 0 0}.btn.alt{background:white;border:1px solid #b9c9bb;color:#064e3b}.note{font-size:13px;color:#65736a;background:#f1f6ed;padding:14px;border-radius:10px;margin-top:20px}footer{text-align:center;padding:28px;color:#65736a;font-size:14px}@media(max-width:700px){.card{grid-template-columns:1fr;padding:16px;gap:18px}.photo{min-height:240px}.wrap{padding:16px}}
.checkout{margin-top:24px;background:white;border:1px solid #e2e9e1;border-radius:20px;padding:clamp(16px,4vw,26px)}.checkout form{display:grid;gap:12px;max-width:420px;min-width:0}.card>div,.checkout,.checkout form>*{min-width:0}.checkout label{display:grid;gap:4px;font-weight:700}.checkout input,.checkout textarea{width:100%;padding:10px;border:1px solid #aabbb0;border-radius:8px;font:inherit}.checkout button{font:inherit;font-weight:800;cursor:pointer;border:0;justify-self:start}.checkout h2{margin-top:0}.checkout output{font-weight:800}.details{margin:24px 0}.details summary{cursor:pointer;font-weight:700}.product-meta{display:flex;gap:12px;flex-wrap:wrap}.stock{color:#166534}
.upi-payment{margin:4px 0;padding:14px;border:1px solid #e2e9e1;border-radius:12px;background:#f7faf6}.upi-payment img{display:block;width:184px;height:184px;margin:8px 0;background:#fff}.upi-payment code{user-select:all;font-size:1rem}.upi-payment .btn{margin-bottom:8px}.upi-payment code{overflow-wrap:anywhere}.upi-help{font-size:13px;color:#425449}.btn{max-width:100%;text-align:center;white-space:normal}@media(max-width:700px){.wrap{padding:12px}.card{margin-top:14px}.top{font-size:13px}.brand{font-size:17px}.back{float:none;display:block;margin-top:6px}.photo{min-height:0;aspect-ratio:1/1;padding:8px}.photo img{width:100%;height:100%;max-height:360px;min-height:0}.checkout{margin-top:14px}.checkout button,.checkout .btn{width:100%;justify-self:stretch}.upi-payment img{max-width:100%;height:auto}}
.product-details{margin-top:24px;background:#fff;border:1px solid #e2e9e1;border-radius:20px;padding:clamp(16px,4vw,26px)}.product-details h2{margin-top:0}.product-details h3{margin-bottom:4px}.product-details p,.product-details ol{margin-top:4px}.product-details a{color:#14532d}
#add-product-to-cart[hidden]{display:none}
</style>
</head>
<body>
<div class="top">Awin Enterprises · Online product enquiries and orders</div>
<div class="wrap">
<header><a class="brand" href="/">Awin Enterprises</a><a class="back" href="/">← Browse catalogue</a></header>
<main class="card">
<div class="photo"><img src="${escapeHtml(image)}" alt="${escapeHtml(product.name)}" loading="eager"></div>
<div>
<div class="tag">${escapeHtml(product.category)}</div>
<h1>${escapeHtml(product.name)}</h1>
<p class="muted">Pack size: ${escapeHtml(product.pack)}</p>
<div class="price">₹${product.price.toLocaleString("en-IN")} <span class="mrp">MRP ₹${product.mrp.toLocaleString("en-IN")}</span></div>
<p class="product-meta"><strong class="stock">${stockLabel}</strong>${brand ? `<span>Brand: ${escapeHtml(brand)}</span>` : ""}</p>
${inStock ? '<a class="btn" href="#checkout">Buy Now</a><button class="btn alt" id="add-product-to-cart" type="button" hidden>Add to Cart</button><a class="btn alt" href="/?cart=open">View Cart</a><p id="add-cart-status" role="status"></p>' : ""}
<a class="btn alt" href="${whatsapp}" rel="noopener noreferrer">Ask on WhatsApp</a>
${details ? `<p class="muted">${escapeHtml(details.summary)} <a href="#product-details">${details.ingredients.length ? "Ingredients &amp; how to use" : "Product details &amp; how to use"}</a></p>` : '<div class="note">Please check the product packaging for ingredients, directions for use, warnings and other product-specific information. Product details and prices may change; confirm before ordering.</div>'}
</div>
</main>
${details ? `
<section class="product-details" id="product-details" aria-labelledby="product-details-title">
<h2 id="product-details-title">Product details</h2>
${details.ingredients.length ? `<h3>Key ingredients</h3>\n<p>${details.ingredients.map(escapeHtml).join(", ")}.</p>` : ""}
<p class="muted">Check the pack label for the full ingredient list and any warnings.</p>
<h3>How to use</h3>
<ol>${details.directions.map(step => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
</section>` : ""}
${inStock ? `
<section class="checkout" id="checkout" aria-labelledby="checkout-title">
<h2 id="checkout-title">Checkout</h2>
<p>${escapeHtml(product.name)} · ${escapeHtml(product.pack)} · ₹${product.price.toLocaleString("en-IN")} each</p>
<form id="order-form" data-product-id="${product.id}" data-product="${escapeHtml(product.name)}" data-pack="${escapeHtml(product.pack)}" data-price="${product.price}" data-whatsapp="${PHONE}" data-upi="${UPI_ID}" data-payee="${PAYEE}">
<label>Quantity <input name="quantity" type="number" min="1" max="99" value="1" required></label>
<label>Your Name <input name="customerName" type="text" autocomplete="name" maxlength="100" required></label>
<label>Your Address <textarea name="address" rows="3" autocomplete="street-address" maxlength="400" required></textarea></label>
<label>Your Area Pincode <input name="pincode" type="text" inputmode="numeric" autocomplete="postal-code" maxlength="6" pattern="[1-9][0-9]{5}" title="Enter a six-digit Indian pincode" required></label>
<p>Product subtotal <output id="order-subtotal" aria-live="polite">₹${product.price.toLocaleString("en-IN")}</output></p>
<p>Delivery <output id="order-shipping" aria-live="polite">${product.price >= 1000 ? "Free" : "₹50"}</output></p>
<p>Total <output id="order-total" aria-live="polite">₹${(product.price + (product.price >= 1000 ? 0 : 50)).toLocaleString("en-IN")}</output></p>
<p class="muted">Delivery across India costs a flat ₹50 on orders below ₹1,000 and is free on orders of ₹1,000 or more.</p>
<div class="upi-payment" id="upi-payment" hidden>
<h3>Pay via UPI</h3>
<p>UPI ID: <code>${UPI_ID}</code></p>
<img id="upi-qr" width="184" height="184" alt="Awin Enterprises UPI payment QR">
<a id="upi-link" class="btn" href="#" rel="external">Open UPI app</a><p id="upi-help" class="upi-help" role="status" aria-live="polite">If your UPI app does not open, enter the UPI ID and total shown above in your payment app, or scan this QR from another device.</p>
<p class="muted">Check the payee and total in your UPI app before paying. After payment, send your UPI transaction reference or receipt and delivery address to Awin for order confirmation.</p>
</div>
<label>UPI transaction reference <input name="reference" type="text" maxlength="64" placeholder="Optional if you share the receipt"></label>
<button class="btn alt" type="submit" id="confirm-payment" disabled>Confirm payment on WhatsApp</button>
</form>
<noscript><p>Enable JavaScript for the UPI payment QR, or <a href="${whatsapp}">contact Awin on WhatsApp</a>.</p></noscript>
</section>
` : ""}
<details class="details">
<summary>Shipping in India</summary>
<p>Orders dispatch within 1–2 working days after payment confirmation. Delivery typically takes 3–7 working days, depending on the pincode. Delivery across India costs a flat ₹50 on orders below ₹1,000 and is free on orders of ₹1,000 or more.</p>
</details>
<section class="details" id="returns" aria-labelledby="returns-title">
<h2 id="returns-title">Returns &amp; refunds</h2>
<p>Contact us on WhatsApp within 48 hours of delivery with your order number and clear photos or an unboxing video if your item is damaged, leaking, defective, expired, or incorrect. Eligible orders qualify for a replacement or refund. Returns on opened or used products are excluded under our policy. Approved refunds go back to the original payment method within 5–7 working days.</p>
</section>
</div>
<footer>© Awin Enterprises · <a href="https://awinenterprises.in/">awinenterprises.in</a></footer>
${inStock ? `<script>
  const form = document.getElementById("order-form");
  const addToCart = document.getElementById("add-product-to-cart");
  addToCart.hidden = false;
  addToCart.addEventListener("click", () => {
    const key = "awin.shoppingCart";
    const status = document.getElementById("add-cart-status");
    try {
      let cart;
      try { cart = JSON.parse(localStorage.getItem(key)); } catch { cart = null; }
      if (!cart || typeof cart !== "object" || Array.isArray(cart)) cart = {};
      const id = form.dataset.productId;
      const quantity = cart[id];
      cart[id] = Number.isSafeInteger(quantity) && quantity > 0 ? quantity + 1 : 1;
      localStorage.setItem(key, JSON.stringify(cart));
      status.textContent = "Added to cart (" + cart[id] + ").";
    } catch {
      status.textContent = "Cart storage is unavailable. You can still use Buy Now.";
    }
  });

  const quantity = form.elements.quantity;
  const subtotal = document.getElementById("order-subtotal");
  const formatPrice = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
  const shipping = document.getElementById("order-shipping");
  const total = document.getElementById("order-total");
  const productSubtotal = () => Number(form.dataset.price) * quantity.valueAsNumber;
  const deliveryCharge = (amount) => amount >= 1000 ? 0 : 50;

  const payment = document.getElementById("upi-payment");
  const qr = document.getElementById("upi-qr");
  const upiLink = document.getElementById("upi-link");
  const confirmPayment = document.getElementById("confirm-payment");

  function updateCheckout() {
    const amount = productSubtotal();
    const charge = deliveryCharge(amount);
    subtotal.value = quantity.validity.valid ? formatPrice.format(amount) : "—";
    shipping.value = quantity.validity.valid ? (charge ? formatPrice.format(charge) : "Free") : "—";
    total.value = quantity.validity.valid ? formatPrice.format(amount + charge) : "—";
    payment.hidden = !quantity.validity.valid;
    confirmPayment.disabled = payment.hidden;
    if (payment.hidden) return;

    const upi = "upi://pay?pa=" + encodeURIComponent(form.dataset.upi) +
      "&pn=" + encodeURIComponent(form.dataset.payee) + "&am=" +
      (amount + charge).toFixed(2) + "&cu=INR";
    const androidChrome = /Android/i.test(navigator.userAgent) &&
      /Chrome\\//i.test(navigator.userAgent) && !/; wv\\)/i.test(navigator.userAgent);
    const fallback = window.location.href.split("#")[0] + "#upi-help";
    upiLink.href = androidChrome
      ? "intent://" + upi.slice("upi://".length) +
        "#Intent;scheme=upi;S.browser_fallback_url=" + encodeURIComponent(fallback) + ";end"
      : upi;
    qr.src = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + encodeURIComponent(upi);
  }

  quantity.addEventListener("input", updateCheckout);
  updateCheckout();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    for (const field of [form.elements.customerName, form.elements.address]) {
      field.value = field.value.trim();
    }
    if (!form.reportValidity()) return;
    const amount = productSubtotal();
    const charge = deliveryCharge(amount);
    const message = [
      "Hello Awin Enterprises, please verify my UPI payment and confirm my order.",
      "Product: " + form.dataset.product + " (" + form.dataset.pack + ")",
      "Quantity: " + quantity.value,
      "Product subtotal: " + formatPrice.format(amount),
      "Delivery: " + (charge ? formatPrice.format(charge) : "Free"),
      "Total: " + formatPrice.format(amount + charge),
      "Delivery pincode: " + form.elements.pincode.value,
      "UPI transaction reference: " + (form.elements.reference.value.trim() || "I will share the receipt."),
      "Customer name: " + form.elements.customerName.value.trim(),
      "Delivery address: " + form.elements.address.value.trim()
    ].join("\\n");
    window.location.assign("https://wa.me/" + form.dataset.whatsapp + "?text=" + encodeURIComponent(message));
  });
</script>` : ""}
</body>
</html>`;

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=300"
    }
  });
}
