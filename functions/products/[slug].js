import { products } from "../_shared/products.js";
import { buildCareKits, kitDefinitions } from "../_shared/kits.js";

const SITE = "https://awinenterprises.in";
const PHONE = "917828757646";
const UPI_ID = "awin@slc";
const PAYEE = "Awin Enterprises";

const manufacturerImages = {
  "papaya-face-wash-120ml": "https://shop.altosindia.net/storagecache/product_image/230350314-66882881-e413-4ac5-ac76-a0ced8d0afda.jpeg",
  "complete-health-pack": "https://shop.altosindia.net/storagecache/product_image/254504735-ad8e690e-ff61-4f52-95e9-10ce146f3052.jpeg",
  "advance-hair-serum": "https://shop.altosindia.net/storagecache/product_image/255224542-e97fedc0-abc9-4a19-8e56-163f5e19c211.jpeg",
  "almond-hair-oil": "https://shop.altosindia.net/storagecache/product_image/230602976-9d6b7739-da72-4cb0-8858-89a6b3c6d1db.jpeg",
  "herbal-hair-oil": "https://shop.altosindia.net/storagecache/product_image/240528692-d368ee86-69ea-43f3-9877-5605147308bd.jpeg",
  "liquid-cream-soap": "https://shop.altosindia.net/storagecache/product_image/230735462-36297fb0-45a1-4d8c-ba90-5922862dce9e.jpeg",
  "nabhi-oil": "https://shop.altosindia.net/storagecache/product_image/262113958-803d29e6-fdf2-414d-b625-632461683aeb.jpeg",
  "sea-buckthorn-juice": "https://shop.altosindia.net/storagecache/product_image/261436414-9488d618-c2f0-4fbb-8cba-7000868d54c0.jpeg",
  "body-oil-100ml": "https://shop.altosindia.net/storagecache/product_image/230557323-4221b806-e811-4aa2-bca3-9e24dca6f1dc.jpeg",
  "winter-care-cream": "https://shop.altosindia.net/storagecache/product_image/230928721-6d5245e1-70d8-4426-82aa-4661faecfdda.jpeg",
  "sanjeevani-granules": "https://shop.altosindia.net/storagecache/product_image/250801316-94dab141-9ead-4e1a-8321-4b214240adf6.jpeg",
  "triphala-churna": "https://shop.altosindia.net/storagecache/product_image/260842967-01a6eb26-8160-4a54-bd98-503a126d2394.jpeg",
  "hair-removal-cream": "https://shop.altosindia.net/storagecache/product_image/233405743-7bef575e-0691-48e3-940a-252a9f8c596b.jpeg",
  "herbal-antiseptic-cream": "https://shop.altosindia.net/storagecache/product_image/242852076-8d93ee65-263e-4747-a2cf-993e6ff8d6f1.jpeg",
  "skin-glow-cream": "https://shop.altosindia.net/storagecache/product_image/234957239-111cbfed-ca89-43f9-bf96-5a897d939403.jpeg",
  "whitening-and-glow-cream": "https://shop.altosindia.net/storagecache/product_image/233039951-7914e662-ff9b-4691-961a-3ae5575aa9bc.jpeg",
  "prakruti-punch": "https://shop.altosindia.net/storagecache/product_image/260126377-2b6f2575-8ef6-4a2b-9a72-710ebac005a0.jpeg",
  "moringa-tablets": "https://shop.altosindia.net/storagecache/product_image/251041772-4d2f81bd-c20e-465b-98de-62be9d8c9350.jpeg",
  "hair-revitalizer-tablets": "https://shop.altosindia.net/storagecache/product_image/262339898-369f8437-f81a-4e44-b9b2-6bb4ba3fff94.jpeg",
  "oreslim-advance-fat-burner-tablets": "https://shop.altosindia.net/storagecache/product_image/261957689-5130b5bb-b5af-4150-83bf-904f3ddbf358.jpeg",
  "vitamin-c-tablets": "https://shop.altosindia.net/storagecache/product_image/231121721-df2d5aca-0e2c-46c3-b8b3-cc55c6214da0.jpeg",
  "oreslim-tea": "https://shop.altosindia.net/storagecache/product_image/262942547-0e8217bf-ba0a-49ad-a710-b836a6095fb9.jpeg",
  "cleansing-milk": "https://shop.altosindia.net/storagecache/product_image/234154658-0b1bb702-1c22-4b61-a36b-ec7e7bf4109d.jpeg",
  "facial-skin-toner": "https://shop.altosindia.net/storagecache/product_image/234356718-44c2a4b5-6153-4156-ab4d-62d07a38fbd8.jpeg",
  "orefresh-toothpaste": "https://shop.altosindia.net/storagecache/product_image/231707695-5ad400e5-1043-4c01-a758-ffdef9b6d570.jpeg",

  "aroplex-plus-plus": "https://shop.altosindia.net/storagecache/product_image/234343202-78115e94-6b7f-4b39-8257-9b787470967f.jpeg",
  "curcum-plus": "https://shop.altosindia.net/storagecache/product_image/233255132-10eec8c6-b6b1-4fa0-8959-24966fda3eda.jpeg",
  "wheatgrass": "https://shop.altosindia.net/storagecache/product_image/231604413-9e4f6dfe-b1c1-4625-a77d-1a10a0f7cfe2.jpeg",
  "vigvit-ultra-k-10": "https://shop.altosindia.net/storagecache/product_image/234520920-4da2aef7-beab-49a8-9dbd-b79137c93627.jpeg",
  "choco-kidz-powder": "https://shop.altosindia.net/storagecache/product_image/253540935-0311fa63-3a37-42b0-95f0-65a17483a0fd.jpeg",
  "multivitamin-gummies": "https://shop.altosindia.net/storagecache/product_image/243600819-7c65b2ab-6b50-4c0c-b76f-a268c69c555f.jpeg",
  "baby-oil": "https://shop.altosindia.net/storagecache/product_image/242819619-74e5efe4-f0a7-403e-b9de-84e11a22fa0f.jpeg",
  "heal-cough-syrup-sugar-free": "https://shop.altosindia.net/storagecache/product_image/263709682-5f256df3-6047-421e-99d8-303085b88698.jpeg",
  "shilajit-syrup": "https://shop.altosindia.net/storagecache/product_image/231507282-ccad2dfc-fa7a-4fd4-aa03-e979f457b6f3.jpeg",
  "rice-water-face-wash": "https://shop.altosindia.net/storagecache/product_image/240216850-56c1af2f-aaf1-48fd-b17f-072edd9ede45.jpeg",
  "facial-kit-papaya-or-gold": "https://shop.altosindia.net/storagecache/product_image/241253639-3b943f07-f7c8-4efc-9ef6-9bb1ca1c0b05.jpeg",
  "gold-bleach-cream-339g": "https://shop.altosindia.net/storagecache/product_image/242607039-3edd9a54-d7fb-45a2-a5da-07cd50400af0.jpeg",
  "rose-water": "https://shop.altosindia.net/storagecache/product_image/235855229-001edb1f-fcc8-4c20-95ec-507bcfd81a4f.jpeg",
  "rose-and-gold-toner": "https://shop.altosindia.net/storagecache/product_image/234946580-7fc6b102-a7ce-4d26-877d-3b96e5e927c9.jpeg",
  "cold-cream": "https://altosindia.net/public/product/v1-face-care/cold-cream.jpg",
  "sunscreen-spf-50": "https://shop.altosindia.net/storagecache/product_image/230245448-66109dac-43f1-42a6-8362-e1b79da29fd9.jpeg",
  "bb-cream": "https://shop.altosindia.net/storagecache/product_image/240524705-62371be3-0623-4913-8495-3426bbfd3811.jpeg",
  "liquid-suhaag-sindoor": "https://shop.altosindia.net/storagecache/product_image/241338493-9b4b5c99-ce6a-4bed-8e56-61a756ba0ca1.jpeg",
  "matte-lipstick": "https://shop.altosindia.net/storagecache/product_image/243303166-312ce6f5-3897-48fc-b9c0-cc3c71ce9716.jpeg",
  "nail-polish": "https://shop.altosindia.net/storagecache/product_image/240308777-fe7b2db3-9a32-4814-8e80-310548d1fab1.jpeg",
  "prevent-hair-fall-shampoo": "https://shop.altosindia.net/storagecache/product_image/244953341-886c29da-8f0c-4a7c-bff4-bc8fc0c09363.jpeg",
  "zordan-black-hill-body-deodorant": "https://shop.altosindia.net/storagecache/product_image/253400216-272270d1-1938-4950-b54d-7b78fdfe48a7.jpeg",
  "perfume-blueflash-or-black-velvet": "https://shop.altosindia.net/storagecache/product_image/254937895-1830388b-6be7-4762-9c02-edcf81ea3c28.jpeg",
  "glass-cleaner": "https://awinenterprises.in/images/altos/glass-cleaner-original.jpg",
  "floor-cleaner": "https://shop.altosindia.net/storagecache/product_image/252951666-5a878207-116e-49ad-ab7e-2ac6212e5c87.jpeg",
  "pure-garam-masala": "https://shop.altosindia.net/storagecache/product_image/250644378-eba7b338-0a60-428f-b7fd-bab1dba4264f.jpeg",
  "royal-chandan-premium-agarbatti": "https://shop.altosindia.net/storagecache/product_image/252545163-78fd4956-3158-4cd7-9bf0-4ac8db1ee9f3.jpeg",
  "liquid-sindur-red-red": "https://shop.altosindia.net/storagecache/product_image/241338493-9b4b5c99-ce6a-4bed-8e56-61a756ba0ca1.jpeg",
  "zordan-blue-hill-body-deodorant": "https://shop.altosindia.net/storagecache/product_image/252855116-ce4b921c-567f-462d-9342-9fb9436fe64b.jpeg",
  "ultra-k-10-capsule-fat-burn": "https://shop.altosindia.net/storagecache/product_image/234520920-4da2aef7-beab-49a8-9dbd-b79137c93627.jpeg",
  "cold-cream-almond-and-cocoa-butter": "https://shop.altosindia.net/storagecache/product_image/235730412-8deaadb8-ebf0-4f83-9045-18ddb181d6d7.jpeg",
  "hydra-boost-gel": "https://shop.altosindia.net/storagecache/product_image/255338240-9d8b0aad-d891-4be6-931d-7d4bef393188.jpeg",
  "sun-screen-cream-spf-40": "https://shop.altosindia.net/storagecache/product_image/234100825-af9d1236-13d4-4f6e-b232-fb2b82f7f896.jpeg",
  "anti-dandruff-shampoo-100ml": "https://shop.altosindia.net/storagecache/product_image/231824333-dae13eca-0bf2-43c8-9f50-4ff601337405.jpeg",
  "zordan-perfume-bloom": "https://shop.altosindia.net/storagecache/product_image/250050007-885559c6-517c-4820-9006-992a1e3a71fb.jpeg",
  "dish-washing-gel": "https://shop.altosindia.net/storagecache/product_image/231021489-88892149-62b2-4635-9aca-68c23fa6d512.jpeg",
  "ws7-detergent": "https://shop.altosindia.net/storagecache/product_image/235957356-80996ed7-49d7-404c-8ad5-3ea644779aff.jpeg",
  "alvet-cal-for-animals": "https://altosindia.net/public/product/v1-agriculture-aid/alvet-cal.jpg",
  "rose-and-musk-moisturising-lotion": "https://shop.altosindia.net/storagecache/product_image/231609931-fd68faff-2019-45ec-8b45-d832e083555c.jpeg",
  "talcum-powder": "https://shop.altosindia.net/storagecache/product_image/242050167-dc1e91a9-ddf1-48da-b67d-2bdbdd294da1.jpeg",
  "face-wash-ubtan": "https://shop.altosindia.net/storagecache/product_image/230222375-e099c679-be9e-420c-a8c7-a2c1864f22aa.jpeg",
  "ubtan-face-wash": "https://shop.altosindia.net/storagecache/product_image/230222375-e099c679-be9e-420c-a8c7-a2c1864f22aa.jpeg",
  "fruit-cream": "https://shop.altosindia.net/storagecache/product_image/245236272-1cc4825b-021d-40a4-93c6-b0bd39b57104.jpeg",
  "zordan-footcare-cream": "https://shop.altosindia.net/storagecache/product_image/242328348-78bb3d40-9ffb-45f9-829f-c7f326d04cc7.jpeg",
  "amla-hair-oil": "https://shop.altosindia.net/storagecache/product_image/234445808-f4536bd4-5065-4e78-b63a-861f2633385a.jpeg",
  "vigvit-protein-powder-200g": "https://shop.altosindia.net/storagecache/product_image/230656117-2b3b804d-3ca0-4c35-af25-7f5869a81121.jpeg",
  "paindon-plus": "https://shop.altosindia.net/storagecache/product_image/231508892-75ce1104-25a8-43c6-9a1c-04a659066b6a.jpeg",
  "glucosamine-hcl": "https://shop.altosindia.net/storagecache/product_image/232415346-aff9a7c8-31b0-41ab-aeb3-54369b6f31ef.jpeg",
  "spirulina-30-tabs": "https://shop.altosindia.net/storagecache/product_image/231844933-b8bc3ce8-7c05-4b57-a4a1-628e98c7c439.jpeg",
  "orecal-d": "https://shop.altosindia.net/storagecache/product_image/244953380-7097ed83-4e7a-4282-98b7-60601a29a1e6.jpeg",
  "b-big": "https://shop.altosindia.net/storagecache/product_image/254114884-d5c1943c-fba8-40eb-a0ab-a1378012cce1.jpeg",
  "altos-balm": "https://shop.altosindia.net/storagecache/product_image/230207747-f73def28-619c-4067-ab44-7e9bc808b0ed.jpeg",
  "oregel-diab": "https://shop.altosindia.net/storagecache/product_image/231133914-2c266ae3-6b17-4be5-9fed-ad2eee0c638c.jpeg",
  "mini-facial-kit": "https://shop.altosindia.net/storagecache/product_image/241253639-3b943f07-f7c8-4efc-9ef6-9bb1ca1c0b05.jpeg",
  "vitamin-c-face-wash": "https://shop.altosindia.net/storagecache/product_image/231552208-a050ba5b-ee44-426e-9e70-10b54da6f5f0.jpeg",
  "anti-acne-and-pimple-cream": "https://shop.altosindia.net/storagecache/product_image/232722351-476f2a55-989c-4d99-ab1b-43c783a12635.jpeg",
  "ayush-kwath-powder": "https://shop.altosindia.net/storagecache/product_image/244316451-a0dd723b-4122-4b78-995d-3685330a7699.jpeg",
  "mc-vital": "https://shop.altosindia.net/storagecache/product_image/240023743-57fa0af4-8f8e-4d51-8298-0ca0be09eeeb.jpeg",
  "oregain-weight-gainer": "https://shop.altosindia.net/storagecache/product_image/245422003-354d6fad-1c49-4e60-a3fd-50886244ea06.jpeg",
  "pure-turmeric-powder-haldi": "https://shop.altosindia.net/storagecache/product_image/241540744-ffcedfe3-037b-4383-ab65-5b62922cb282.jpeg",
  "sharbat-sweet-rose": "https://altosindia.net/public/product/v1-home-care/sweet-rose-sharbat.jpg",
  "shudh-shilajit-paste": "https://shop.altosindia.net/storagecache/product_image/234820161-af6ab9eb-79e6-45f0-ba03-920040c32df5.jpeg",
  "under-eye-cream": "https://shop.altosindia.net/storagecache/product_image/244108634-328f45ee-795d-411a-a83a-eeecbca264e2.jpeg",
  "vigvit-multivitamin-syrup": "https://shop.altosindia.net/storagecache/product_image/250752197-2ec4ee0b-b0c5-40c9-bd0f-e8f8b59f6f3c.jpeg",
  "antiseptic-hand-wash": "https://shop.altosindia.net/storagecache/product_image/241521574-45566806-2c87-4b00-9375-5384ca1b8a24.jpeg",
  "hand-wash-250ml": "https://shop.altosindia.net/storagecache/product_image/241521574-45566806-2c87-4b00-9375-5384ca1b8a24.jpeg",
  "d-tan-face-pack": "https://shop.altosindia.net/storagecache/product_image/251152641-e1b127f7-53a2-4ed7-853b-405f8a591144.jpeg",
  "herbal-shaving-cream": "https://shop.altosindia.net/storagecache/product_image/250015143-9a6dddd1-e621-4c4d-a99b-2d435efb4d72.jpeg",
  "pure-red-chilli-powder-lal-mirch": "https://shop.altosindia.net/storagecache/product_image/241927847-16f35b8a-77d6-49e7-a17b-7858a18c647d.jpeg",
  "pure-coriander-powder-dhania": "https://shop.altosindia.net/storagecache/product_image/242058094-15c90df2-87c0-42a5-878b-6d0ac28f81ec.jpeg",
  "kadak-tea": "https://shop.altosindia.net/storagecache/product_image/233040737-7c3d8d12-a67b-4feb-8ad9-9cf3725e85f4.jpeg",
  "ultra-black-kajal": "https://shop.altosindia.net/storagecache/product_image/242051497-6749f230-3bf7-487d-9a21-b07dda633079.jpeg",
  "vitamin-c-serum": "https://shop.altosindia.net/storagecache/product_image/242700442-a9aa54ba-8284-4d66-9e52-23e70811dd43.jpeg",
  "calcium-with-vitamin-d": "https://shop.altosindia.net/storagecache/product_image/243309494-7e748196-a6ea-44a7-890f-a49e7710d5aa.jpeg",
  "stevia-drops": "https://shop.altosindia.net/storagecache/product_image/252920914-8c06fc77-1006-4ad4-96ca-89b797164af4.jpeg",
  "coloston-bovine-colostrum": "https://shop.altosindia.net/storagecache/product_image/235712619-aeea641a-c0b9-4567-8866-19e8c924d367.jpeg",
  "black-kajal-pencil": "https://shop.altosindia.net/storagecache/product_image/242051497-6749f230-3bf7-487d-9a21-b07dda633079.jpeg",
  "sun-screen-cream-spf-20": "https://shop.altosindia.net/storagecache/product_image/242028491-fa4578e8-714b-4f51-98c7-d07e4f403926.jpeg",
  "sanitary-pads-with-anion-chip": "https://shop.altosindia.net/storagecache/product_image/233833399-e6fd0f11-36e9-4bee-88a8-0e8dc2d81754.jpeg",
  "red-ginseng": "https://shop.altosindia.net/storagecache/product_image/235329779-bf17c7f6-afb2-4362-a60f-37d9d7738605.jpeg",
  "oremol-natural-black-hair": "https://shop.altosindia.net/storagecache/product_image/233352321-d029a7e8-6b6d-4dba-8dfa-993aad8de952.jpeg",
  "shine-home-cream-soap": "https://shop.altosindia.net/storagecache/product_image/240244129-2544b3f9-4392-445b-8027-c32784cf0138.jpeg",
  "oregon-80-water-retention": "https://altosindia.net/public/product/v1-agriculture-aid/oregon-80.jpg",
  "oregon-80-sa-agent": "https://altosindia.net/public/product/v1-agriculture-aid/oregon-80.jpg",
  "alto-gro-plant-booster": "https://altosindia.net/public/product/v1-agriculture-aid/alto-gro.jpg",
  "altos-care-pest-control": "https://altosindia.net/public/product/v1-agriculture-aid/alto-care.jpg",
  "ft-15-fruit-extract": "https://shop.altosindia.net/storagecache/product_image/230257751-65334e21-89ec-40aa-8165-6346d3acf534.jpeg",
  "aroplex": "https://shop.altosindia.net/storagecache/product_image/243230340-25e30603-991c-4aae-8e0a-f3e27b481d47.jpeg",
  "haldi-with-kesar-drops": "https://altosindia.net/public/product/v1-ayurvedic-medicine/haldi-with-kesar-drops1.jpg",
  "abhinol": "https://shop.altosindia.net/storagecache/product_image/234657044-81e0fe9b-4eba-4d50-a990-0e1ea8a912f6.jpeg",
  "aloe-vera-moisturising-gel-100g": "https://shop.altosindia.net/storagecache/product_image/233342252-1a88bbf2-7cd2-4a07-81b8-402cf9a3b43c.jpeg",
  "anti-dandruff-shampoo": "https://shop.altosindia.net/storagecache/product_image/231824333-dae13eca-0bf2-43c8-9f50-4ff601337405.jpeg",
  "chelated-iron": "https://shop.altosindia.net/storagecache/product_image/232900762-1cae9593-1868-4abc-a20e-611c7b0e3464.jpeg",
  "multi-collagen-complex": "https://shop.altosindia.net/storagecache/product_image/233707993-c5cb6ec8-e8ee-4b04-993a-cd4e816f022c.jpeg",
  "noni": "https://shop.altosindia.net/storagecache/product_image/243006800-40f2d971-b8bf-47ba-82d6-f4790d8d94e3.jpeg",
  "aloevera-moisturising-gel": "https://shop.altosindia.net/storagecache/product_image/233342252-1a88bbf2-7cd2-4a07-81b8-402cf9a3b43c.jpeg",
  "dish-top-gel": "https://shop.altosindia.net/storagecache/product_image/231021489-88892149-62b2-4635-9aca-68c23fa6d512.jpeg",
  "enrich-gold-tea": "https://shop.altosindia.net/storagecache/product_image/232717290-fcd3e52c-a447-4f3f-8e8e-de7f10c5e430.jpeg",
  "young-look": "https://shop.altosindia.net/storagecache/product_image/230521058-86abe931-2315-4405-a159-a23bd46a4303.jpeg",
  "flax-oil": "https://shop.altosindia.net/storagecache/product_image/230236288-7627b600-f819-4ce9-9e61-506e4783f9f7.jpeg",
  "nutroprash": "https://shop.altosindia.net/storagecache/product_image/243038022-77720d02-54dc-429d-9046-e01525752891.jpeg",
  "garlicplus": "https://shop.altosindia.net/storagecache/product_image/231644472-06d57e7f-7ce1-4cac-a946-131f9fe567f6.jpeg",
  "hadjod": "https://shop.altosindia.net/storagecache/product_image/232630242-11c39019-877a-47ac-89ae-979fd032cf52.jpeg",
  "ore-piles": "https://shop.altosindia.net/storagecache/product_image/231221966-b9423a69-3fe2-48b0-bc28-dc2faf21b9df.jpeg",
  "nutroton": "https://shop.altosindia.net/storagecache/product_image/234746125-baa05589-78fd-4474-94bb-e55867a4e7bd.jpeg",
  "vig-r": "https://shop.altosindia.net/storagecache/product_image/242823429-6ff2172d-95ab-444c-b838-bde5ff1405a5.jpeg",
  "ganoderma": "https://shop.altosindia.net/storagecache/product_image/234255247-3f829fa2-bb56-4562-a549-fe2337701cbd.jpeg",
  "vigvit-capsules": "https://shop.altosindia.net/storagecache/product_image/242927340-bbac77b3-7784-4b4e-8037-179aab418d0b.jpeg",
  "rakatchap": "https://shop.altosindia.net/storagecache/product_image/232031905-8a2c702c-c808-447e-9913-e7e9114eacd3.jpeg",
  "shatavari": "https://shop.altosindia.net/storagecache/product_image/235313356-ddcb586d-5591-4bae-8d96-d92b981cd57f.jpeg",
  "papita-giloy": "https://shop.altosindia.net/storagecache/product_image/230140018-4a557646-fa94-4049-83ee-e606fb287e0b.jpeg",
  "musli-pure": "https://shop.altosindia.net/storagecache/product_image/241535256-65dfb97f-06f3-4c05-85e7-fe01962df567.jpeg",
  "slimming-young-look": "https://shop.altosindia.net/storagecache/product_image/235034508-f1de8ce6-c275-4961-9904-2fb4b6c5c390.jpeg",
  "ore-piles-ointment": "https://shop.altosindia.net/storagecache/product_image/231715150-5e8ae6fe-c481-4b8d-9bfa-b2f7574f9dd9.jpeg",
  "swadisht-powder": "https://shop.altosindia.net/storagecache/product_image/251559024-58cf0fd2-9521-4b2a-bd91-026058c0596d.jpeg",
  "energize-powder": "https://shop.altosindia.net/storagecache/product_image/240035106-ca380965-9dd5-426c-8558-7d05f0c2e78f.jpeg",
  "ore-amla-gel": "https://shop.altosindia.net/storagecache/product_image/235827476-ed1790a3-6b56-4d8d-89e3-c056eb45b6af.jpeg",
  "abhiliv-liver-syrup": "https://shop.altosindia.net/storagecache/product_image/233037453-e7782173-96d4-425d-a5d5-109832317b95.jpeg",
  "blood-purifier-syrup": "https://shop.altosindia.net/storagecache/product_image/234627591-5a7db8d6-1495-484a-9699-fed28f46cdbf.jpeg",
  "anti-wrinkle-cream": "https://shop.altosindia.net/storagecache/product_image/232918767-94a5b88c-5fdc-46f0-8a3c-abdfbba5c537.jpeg",
  "to-breen-capsule-altos": "https://shop.altosindia.net/storagecache/product_image/254251621-75fcc6f9-de79-47be-8b58-4534a5a91438.jpeg",
  "lip-balm": "https://shop.altosindia.net/storagecache/product_image/231043027-bb96cb2b-9af8-49ce-964b-81cb388f9853.jpeg",
  "jeewan-shakti": "https://shop.altosindia.net/storagecache/product_image/231052734-43f9cf88-a94f-4e46-8f09-7b5f38643add.jpeg",
  "sunscreen-spf-30": "https://shop.altosindia.net/storagecache/product_image/241558108-2923089b-34ee-41dc-be11-e3a6a65dea13.jpeg",
  "ashwagandha": "https://shop.altosindia.net/storagecache/product_image/242739686-c97e6c00-01e2-49a0-91c6-e5b0576f00f1.jpeg",
  "brahmi": "https://shop.altosindia.net/storagecache/product_image/230814159-f7ead6b9-cd99-4559-87a1-9cea1731f758.jpeg",
  "neem": "https://shop.altosindia.net/storagecache/product_image/233935218-968d4183-32b5-43fc-82d7-5cb9eb3b7e58.jpeg",
  "korvin-oil": "https://shop.altosindia.net/storagecache/product_image/230534874-7060da48-9630-4e09-9e13-933e31a0b9a1.jpeg",
  "itch-care-cream": "https://shop.altosindia.net/storagecache/product_image/232349598-b433f1c9-bc5d-462c-a270-31bf1112a49a.jpeg",
  "nutro-dia-powder": "https://shop.altosindia.net/storagecache/product_image/234828492-143060de-2d7c-4409-bb8b-ff444a66a0b9.jpeg",
  "paindon-ointment": "https://shop.altosindia.net/storagecache/product_image/232211968-8eaa886b-8e52-4838-ab15-aaf50b1735f3.jpeg",
  "paindon-oil": "https://shop.altosindia.net/storagecache/product_image/231926827-48efb9d6-f4bb-4b20-8fa0-76710d4bf224.jpeg",
  "oreslim-powder": "https://shop.altosindia.net/storagecache/product_image/230930954-2b2b7f4d-dfbd-408b-95ab-4efcbb982ae8.jpeg",
  "consoft-powder": "https://shop.altosindia.net/storagecache/product_image/235219736-7c7637cf-48f9-4ec1-afe4-c549deb9de2d.jpeg",
  "oregel-aloevera": "https://shop.altosindia.net/storagecache/product_image/234927017-850d963b-69c2-40e2-b3ac-cc39599f68db.jpeg",
  "noni-juice": "https://shop.altosindia.net/storagecache/product_image/231230459-7181c41a-0c5f-471b-b781-38016878d2a0.jpeg",
  "abhizyme-syrup": "https://shop.altosindia.net/storagecache/product_image/231331723-010b5ee0-ce0d-4dc8-b0a2-909ac6cb4de5.jpeg",
  "breen-syrup": "https://shop.altosindia.net/storagecache/product_image/230856690-dfd78eaf-c597-43e1-b477-e8b3db480c32.jpeg",
  "hridya-care-syrup": "https://shop.altosindia.net/storagecache/product_image/235358724-6ddbd1d2-76ec-4012-b743-ad78a3ffb204.jpeg",
  "sundri-jiwan": "https://shop.altosindia.net/storagecache/product_image/230046525-566c515f-d8de-4ed2-ad2d-e417dd1c9df5.jpeg",
  "uripure-syrup": "https://shop.altosindia.net/storagecache/product_image/245834399-f4dbd39d-2c36-487f-b4ac-1cb4ea29754d.jpeg",
  "tulsi-syrup": "https://shop.altosindia.net/storagecache/product_image/234913928-f555673d-a51a-4f26-9c5f-d929d128f988.jpeg",
  "giloy-syrup": "https://shop.altosindia.net/storagecache/product_image/233512400-a0b7d898-6846-436a-8c2d-cb0a7d29be85.jpeg",
  "skin-glow-face-wash": "https://shop.altosindia.net/storagecache/product_image/235713283-653d75db-691a-4723-baf7-69fa0e302a6e.jpeg",
  "gold-face-wash": "https://shop.altosindia.net/storagecache/product_image/230032228-1cc740c0-730c-493c-8e52-10815b1ec150.jpeg",
  "neem-face-wash-60ml": "https://shop.altosindia.net/storagecache/product_image/230158582-8c885360-656d-4e2f-9aa7-495aeac57d1c.jpeg",
  "honey-and-saffron-body-lotion": "https://shop.altosindia.net/storagecache/product_image/230244716-d0bfe2be-6f7f-48ea-8c77-d0a59f3cf376.jpeg",
  "anti-blemishing-cream": "https://shop.altosindia.net/storagecache/product_image/233028978-f7658c0f-9077-4869-8217-930a9c2476c4.jpeg",
  "onion-black-seed-hair-oil": "https://shop.altosindia.net/storagecache/product_image/234016957-97cfdab3-75be-4f3d-8b25-096541ae1dab.jpeg",
  "bhringraj-hair-oil": "https://shop.altosindia.net/storagecache/product_image/230201055-28bcd540-d8c9-47d2-84e5-60d1ceb24bc1.jpeg",
  "9-in-1-hair-oil-100ml": "https://shop.altosindia.net/storagecache/product_image/243241860-0d9a39e7-a07f-4fb7-89cb-d4d8843985db.jpeg",
  "amla-shikakai-shampoo": "https://shop.altosindia.net/storagecache/product_image/231120832-ad0f769e-224e-4dea-a092-6b5ae682d024.jpeg",
  "hair-conditioner": "https://shop.altosindia.net/storagecache/product_image/242846461-aa1879c3-6241-4cbb-b3ec-d423b69ad343.jpeg",
  "orefresh-gel": "https://shop.altosindia.net/storagecache/product_image/231736620-016cb5ab-c64e-44f7-9d90-030b0088fb50.jpeg",
  "shine-bathing-bar": "https://shop.altosindia.net/storagecache/product_image/231902954-4c09ada6-77e4-4299-8675-9f3fe35bb8fa.jpeg",
  "rice-bran-oil": "https://shop.altosindia.net/storagecache/product_image/232440206-fa8cdae4-6a24-4827-b7f6-96c8eaff1d11.jpeg",
  "haldi-pure-capsule": "https://shop.altosindia.net/storagecache/product_image/232909711-b1da22da-a8c7-43b9-911d-f685f24fdaf0.jpeg",
  "altocare": "https://altosindia.net/public/product/v1-agriculture-aid/alto-care.jpg",
  "coloston-capsule": "https://shop.altosindia.net/storagecache/product_image/235712619-aeea641a-c0b9-4567-8866-19e8c924d367.jpeg",
  "face-wash-gold": "https://shop.altosindia.net/storagecache/product_image/230032228-1cc740c0-730c-493c-8e52-10815b1ec150.jpeg",
  "face-wash-skin-glow": "https://shop.altosindia.net/storagecache/product_image/235713283-653d75db-691a-4723-baf7-69fa0e302a6e.jpeg",
  "jojoba-moisturising-lotion": "https://shop.altosindia.net/storagecache/product_image/233131017-e52c1e11-6dd6-4e42-974d-50f2019e7903.jpeg",
  "hena-hair-pack": "https://shop.altosindia.net/storagecache/product_image/233227998-adc40d2d-1074-4aca-a3b7-52ea97a9affb.jpeg",
  "onion-shampoo": "https://shop.altosindia.net/storagecache/product_image/255546805-5e0ce0e2-49af-4ca3-aa78-f69bc8b77b99.jpeg",
  "hair-serum": "https://shop.altosindia.net/storagecache/product_image/233517819-d81f64d1-c16c-42b4-87e2-8408dc648e24.jpeg",
  "long-hair-shampoo": "https://shop.altosindia.net/storagecache/product_image/231631435-0a2d4e42-2dce-4679-a1d4-280b1a1d923b.jpeg",
  "kesar-soap": "https://shop.altosindia.net/storagecache/product_image/232249129-ab31862c-ceb2-4190-96ad-463df4ffd567.jpeg",
  "oredent-toothpaste-100g": "https://shop.altosindia.net/storagecache/product_image/231809893-f2469fff-abb5-45f2-a3e4-80354d24dfb8.jpeg",
  "very-cool-hair-oil": "https://shop.altosindia.net/storagecache/product_image/230320906-87e03ae8-2a72-4403-8120-022171f1db31.jpeg",
  "vitalizer-hair-oil": "https://shop.altosindia.net/storagecache/product_image/245839596-5206dc6b-9bad-49d1-9bcf-91420e3d53d9.jpeg",
  "papaya-face-wash-60ml": "https://shop.altosindia.net/storagecache/product_image/230350314-66882881-e413-4ac5-ac76-a0ced8d0afda.jpeg",
  "apricot-scrub": "https://shop.altosindia.net/storagecache/product_image/231453148-93a2977c-decb-41c8-8e47-03f254fb5542.jpeg",
  "beauty-face-pack": "https://shop.altosindia.net/storagecache/product_image/232114505-e0d912b3-12a8-4956-8722-b890b18771c0.jpeg",
  "face-wash-papaya": "https://shop.altosindia.net/storagecache/product_image/230350314-66882881-e413-4ac5-ac76-a0ced8d0afda.jpeg",
  "face-pack-beauty": "https://shop.altosindia.net/storagecache/product_image/232114505-e0d912b3-12a8-4956-8722-b890b18771c0.jpeg",
  "netar-jyoti-eye-drops": "https://shop.altosindia.net/storagecache/product_image/232914560-444dbfa5-b193-457f-8e6d-94198f63da06.jpeg",
  "tulsi-power": "https://shop.altosindia.net/storagecache/product_image/234440797-6e4c58e5-e7aa-4c12-97fa-26497c9bd321.jpeg",
  "charcoal-face-wash": "https://shop.altosindia.net/storagecache/product_image/231809127-31179eb4-ffac-4a41-9b2b-23a96468948d.jpeg",
  "face-wash-charcoal": "https://shop.altosindia.net/storagecache/product_image/231809127-31179eb4-ffac-4a41-9b2b-23a96468948d.jpeg"
};

const productDetails = {
  "papaya-anti-blemish-face-pack": {summary:"A facial pack with Papaya and Saffron.",ingredients:["Papaya","Saffron"],directions:["Apply evenly to a clean face and neck, avoiding the eye area.","Rinse after 10–15 minutes. Use twice a week."]},
  "papaya-face-wash-120ml": {"summary": "A 120 ml Papaya and Aloe Vera facial cleanser.", "ingredients": ["Papaya", "Aloe Vera"], "directions": ["Take a small quantity on your palm and gently massage over the face.", "The manufacturer specifies two to three minutes of gentle massage; follow the directions on your current pack.", "Rinse with water."], "source": "https://shop.altosindia.net/eshop/product/info/papaya-face-wash"},
  "complete-health-pack": {"summary": "Four 60-capsule packs: Aroplex Plus, Vig-R, Curcum Plus and Coloston.", "ingredients": ["Aroplex Plus Capsule", "Vig-R Capsule", "Curcum Plus Capsule", "Coloston Capsule"], "directions": ["Follow the directions on each included pack and the advice of your healthcare professional."], "source": "https://shop.altosindia.net/eshop/product/info/the-complete-health-pack"},
  "advance-hair-serum": {"summary": "A scalp serum with Redensyl, Saw Palmetto, Baicapil, Rosemary, Biotin and Anagain.", "ingredients": ["REDENSYL", "SAW PALMETTO", "BAICAPIL", "ROSEMARY", "BIOTIN", "ANAGAIN"], "directions": ["Apply a small amount to a clean scalp with the dropper and massage gently with your fingertips.", "Allow it to absorb and follow the frequency stated on your current pack."], "source": "https://shop.altosindia.net/eshop/product/info/adbance-hair-serum"},
  "almond-hair-oil": {"summary": "An almond hair oil for scalp and hair massage.", "ingredients": ["Almond"], "directions": ["Pour the required amount onto your palm, apply to the scalp and massage gently into the roots.", "The manufacturer suggests leaving it overnight; follow your pack directions."], "source": "https://shop.altosindia.net/eshop/product/info/almond-hair-oil"},
  "herbal-hair-oil": {"summary": "A herbal hair oil containing Bhringraj, Majeeth and Nagkesar.", "ingredients": ["Bhringraj", "Majeeth", "Nagkesar"], "directions": ["Spread evenly through dry hair, concentrating on the roots.", "Massage gently, following the directions on your bottle."], "source": "https://shop.altosindia.net/eshop/product/info/hair-oil"},
  "liquid-cream-soap": {"summary": "A liquid cream soap for everyday hand and skin cleansing.", "ingredients": [], "directions": ["Take a small amount in your hands and massage gently to cleanse.", "Rinse thoroughly with water."], "source": "https://shop.altosindia.net/eshop/product/info/liquid-cream-soap"},
  "nabhi-oil": {"summary": "An oil blend intended for external application around the navel area.", "ingredients": ["Ajwain Oil", "Almond Oil", "Olive Oil", "Coconut Oil", "Kalonji Oil", "Clove Oil", "Garlic Oil", "Cinnamon Oil", "Eucalyptus Oil", "Camphor", "Amla", "Haritaki & Baheda", "Hibiscus", "Nutmeg"], "directions": ["Clean and dry the navel area before application.", "The manufacturer specifies four drops before bedtime; massage gently around the navel and allow it to absorb.", "Use externally and follow the precautions on your current bottle."], "source": "https://shop.altosindia.net/eshop/product/info/nabhi-oil"},
  "sea-buckthorn-juice": {"summary": "A sea buckthorn juice supplied in a 500 ml bottle.", "ingredients": ["Sea buckthorns"], "directions": ["Follow the serving directions and dilution instructions on your current bottle, or your healthcare professional’s advice."], "source": "https://shop.altosindia.net/eshop/product/info/sea-buckthorn-juice"},
  "body-oil-100ml": {"summary": "A body massage oil containing almond oil and olive oil for moisturising dry skin.", "ingredients": ["Almond Oil", "Olive Oil"], "directions": ["Massage gently over the body, following the directions on your bottle."], "source": "https://shop.altosindia.net/eshop/product/info/body-oil"},
  "winter-care-cream": {"summary": "A moisturising winter-care cream with Tulsi and Aloe Vera extracts.", "ingredients": ["Tulsi Extract", "Aloevera Extract"], "directions": ["Apply the required amount using gentle upward circular movements.", "Follow the application frequency on your current pack."], "source": "https://shop.altosindia.net/eshop/product/info/winter-care-cream"},
  "sanjeevani-granules": {"summary": "Herbal granules in a 60 g pack containing 12 sachets.", "ingredients": ["KONCH BEEZ", "ASHWAGANDHA", "TULSI", "CLOVE", "SUPARI", "YASHTIMADHU", "HARITKI", "BRAHMI", "GREEN TEA", "AKARKARA"], "directions": ["Use under the guidance of a qualified healthcare professional and follow the serving size and duration printed on your sachets."], "source": "https://shop.altosindia.net/eshop/product/info/sanjivani-granules"},
  "triphala-churna": {"summary": "A 100 g pack of Triphala herbal powder.", "ingredients": [], "directions": ["Follow the serving size and directions printed on your current pack or those given by your healthcare professional."], "source": "https://shop.altosindia.net/eshop/product/info/triphala-churna"},
  "hair-removal-cream": {"summary": "A hair-removal cream containing Papaya and Shea Butter.", "ingredients": ["papaya", "Shea Butter"], "directions": ["Follow the patch-test instructions and precautions on your pack.", "Apply with the spatula. The manufacturer specifies three to five minutes before removal; follow your pack’s time limit.", "Remove, rinse with water and moisturise as directed."], "source": "https://shop.altosindia.net/eshop/product/info/hair-removal-cream"},
  "herbal-antiseptic-cream": {"summary": "A topical herbal cream containing Neem, Tulsi, Haldi and other listed ingredients.", "ingredients": ["Kapoor Kachari", "Safed-Chandan", "Ghritkumari", "Neem", "Tulsi", "Haldi", "Khair", "Jashad", "Tankan Bhasma", "Dugdha Pashana"], "directions": ["Apply the required amount to the skin and massage gently with your fingertips.", "Follow the frequency and precautions printed on your pack."], "source": "https://shop.altosindia.net/eshop/product/info/herbal-antisepticcream"},
  "skin-glow-cream": {"summary": "A facial cream containing Aloe Vera and Basil extracts.", "ingredients": ["Aloevera Extract", "Basil extract"], "directions": ["Cleanse the face before application.", "Apply the cream evenly and follow the morning/evening directions on your pack."], "source": "https://shop.altosindia.net/eshop/product/info/skin-glow-cream"},
  "whitening-and-glow-cream": {"summary": "A facial cream containing Almond and Apricot ingredients.", "ingredients": ["Almond", "Apricot"], "directions": ["Cleanse the face, then apply the cream evenly.", "Follow the frequency and precautions on your current pack."], "source": "https://shop.altosindia.net/eshop/product/info/whitening-and-glow-cream"},
  "prakruti-punch": {"summary": "A 500 ml herbal juice blend with Aloe Vera, Tulsi, Haldi, Amla and other listed plant ingredients.", "ingredients": ["Aloe Vera", "Tulsi", "Haldi", "Arjun Chhal", "Karela", "Wheatgrass", "Shilajit", "Moringa", "Ashwagandha", "Neem", "Amla"], "directions": ["Follow the serving directions on your bottle or those given by your healthcare professional."], "source": "https://shop.altosindia.net/eshop/product/info/prakruti-punch"},
  "moringa-tablets": {"summary": "A 60-tablet Moringa supplement.", "ingredients": ["Moringa"], "directions": ["The manufacturer lists one tablet twice daily after meals, or as advised by a healthcare practitioner.", "Check the directions and precautions on your current pack."], "source": "https://shop.altosindia.net/eshop/product/info/moringa-tablets"},
  "hair-revitalizer-tablets": {"summary": "A hair-nutrition supplement supplied as 60 tablets, described by the manufacturer as a blend of 19 nutrients.", "ingredients": ["Blend of 19 Nutrients"], "directions": ["Use the serving directions on your current pack or the instructions given by your healthcare professional."], "source": "https://shop.altosindia.net/eshop/product/info/hair-revitalizer-tablets"},
  "oreslim-advance-fat-burner-tablets": {"summary": "A 60-tablet supplement containing L-Carnitine, Garcinia Cambogia, caffeine and green coffee extracts.", "ingredients": ["L-Carnitine", "Garcinia Cambogia", "Caffeine Extract", "Green Coffee Extract", "Black Pepper Extract"], "directions": ["Follow the serving size, usage directions and precautions printed on your pack.", "Consult a healthcare professional about suitability before use."], "source": "https://shop.altosindia.net/eshop/product/info/advance-fat-burner-tablet"},
  "vitamin-c-tablets": {"summary": "A 60-tablet Vitamin C supplement with Amla extract and Zinc.", "ingredients": ["Vitamin C", "Zinc"], "directions": ["The manufacturer specifies one tablet daily with a meal, or as advised by a healthcare professional."], "source": "https://shop.altosindia.net/eshop/product/info/vitamin-c"},
  "oreslim-tea": {"summary": "A 100 g tea blend with green tea, green coffee, black tea, Hibiscus and other listed ingredients.", "ingredients": ["Green Tea Extract", "Green Coffee Extract", "Garcinia Cambogia", "Caffeine", "Black Tea", "Hibiscus Flower powder"], "directions": ["Mix the quantity specified on your pack into warm water and stir well.", "Follow the serving frequency and precautions on your pack."], "source": "https://shop.altosindia.net/eshop/product/info/oreslim-tea"},
  "cleansing-milk": {"summary": "A facial cleansing milk containing Cucumber and Aloe Vera extracts.", "ingredients": ["Cucumber extract", "Aloevera Extract"], "directions": ["Wash the face, then apply cleansing milk gently with a cotton ball, following the directions on your bottle."], "source": "https://shop.altosindia.net/eshop/product/info/cleansing-milk"},
  "facial-skin-toner": {"summary": "A 120 ml facial skin toner containing Rose Petals.", "ingredients": ["Rose Petals"], "directions": ["Put the required amount on a cotton ball and apply gently over the face.", "Follow the precautions on your bottle."], "source": "https://shop.altosindia.net/eshop/product/info/facial-skin-toner"},
  "orefresh-toothpaste": {"summary": "A toothpaste containing Tulsi, Clove and Mint.", "ingredients": ["Tulsi", "Clove", "Mint"], "directions": ["Put the required amount on a soft-bristled toothbrush and brush the teeth and gums gently.", "Rinse the mouth thoroughly. The manufacturer recommends brushing twice daily."], "source": "https://shop.altosindia.net/eshop/product/info/orefresh-toothpaste"},

  "calcium-with-vitamin-d": {
    "summary": "A Vigvit calcium supplement with vitamin D.",
    "ingredients": [
      "Calcium",
      "Vitamin D",
      "Magnesium",
      "Zinc"
    ],
    "directions": [
      "Follow the directions on the pack or those given by your healthcare professional."
    ],
    "source": "https://shop.altosindia.net/eshop/product/section/newly-launched"
  },
  "vigvit-multivitamin-syrup": {
    "summary": "A liquid multivitamin and mineral supplement.",
    "ingredients": [
      "Vitamin A",
      "B-complex vitamins",
      "Vitamin D3",
      "Vitamin E"
    ],
    "directions": [
      "Follow the directions on the pack or those given by your healthcare professional."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/Multivitamin-Syrup"
  },
  "rose-and-gold-toner": {
    "summary": "A Zordan facial toner listing for the Rose and Gold variants.",
    "ingredients": [],
    "directions": [
      "Apply gently to the face with a cotton pad, following the directions for your selected toner."
    ],
    "source": "https://altosindia.net/products/product/rose-skin-toner"
  },
  "cold-cream": {
    "summary": "A 75 gm Zordan Skin White cold cream with aloe vera extract to moisturise dry skin.",
    "ingredients": [
      "Aloe vera extract"
    ],
    "directions": [
      "Massage gently onto the face and neck in upward strokes."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/cold-cream"
  },
  "sun-screen-cream-spf-20": {
    "summary": "A Zordan SPF 20 sunscreen lotion.",
    "ingredients": [
      "Sunflower oil",
      "Sandalwood oil"
    ],
    "directions": [
      "Apply before going outdoors. Follow the application and reapplication directions on the pack."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/spf-20-sunscreen-lotion"
  },
  "sun-screen-cream-spf-40": {
    "summary": "A Zordan SPF 40 sunblock product.",
    "ingredients": [],
    "directions": [
      "Follow the directions on the pack for application and reapplication."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/sun-block-cream-spf-40"
  },
  "dish-washing-gel": {
    "summary": "A dishwashing gel for removing grease from utensils.",
    "ingredients": [],
    "directions": [
      "Follow the directions and precautions on the pack."
    ],
    "source": "https://altosindia.net/products/product/dishtop"
  },
  "ws7-detergent": {
    "summary": "An Altos WS7 laundry detergent powder for hand or machine washing.",
    "ingredients": [],
    "directions": [
      "Check the pack for the amount to use for your wash load."
    ],
    "source": "https://altosindia.net/products/product/detergent-powder"
  },
  "sanitary-pads-with-anion-chip": {
    "summary": "Zordan winged sanitary pads with an anion-chip layer.",
    "ingredients": [],
    "directions": [
      "Peel off the backing and secure the pad and wings to your underwear."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/sanitary-pad"
  },
  "mini-facial-kit": {
    "summary": "A Zordan mini facial kit with several facial-care steps.",
    "ingredients": [],
    "directions": [
      "Follow the order and directions on the individual sachets in your selected kit."
    ],
    "source": "https://altosindia.net/public/download/Altos%20Product%20Brochure%28June%202025%29.pdf"
  },
  "facial-kit-papaya-or-gold": {
    "summary": "A Zordan facial kit available in Papaya or Gold.",
    "ingredients": [],
    "directions": [
      "Use the steps in the order printed on your selected kit."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/facial-kits"
  },
  "gold-bleach-cream-339g": {
    "summary": "A Zordan Gold facial bleach kit.",
    "ingredients": [],
    "directions": [
      "Follow the directions and precautions printed on the pack."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/gold-bleach-cream"
  },
  "fruit-cream": {
    "summary": "A Zordan facial moisturiser containing strawberry and almond.",
    "ingredients": [
      "Strawberry",
      "Almond"
    ],
    "directions": [
      "Massage gently onto the face and neck, according to the pack directions."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/fruit-cream"
  },
  "talcum-powder": {
    "summary": "Zordan body talcum powder.",
    "ingredients": [],
    "directions": [
      "Follow the directions and precautions printed on the pack."
    ],
    "source": "https://altosindia.net/products/product/talcum-powder"
  },
  "heal-cough-syrup-sugar-free": {
    "summary": "Altos Heal syrup, sugar-free variant.",
    "ingredients": [],
    "directions": [
      "Check the pack for the full formulation and follow its directions or advice from your healthcare professional."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/heal-cough-syrup-sugar-free"
  },
  "altocare": {
    "summary": "An Altos plant-care product containing clove, neem and thyme oils.",
    "ingredients": [
      "Clove oil",
      "Neem oil",
      "Thyme oil"
    ],
    "directions": [
      "Follow the directions and precautions printed on the pack."
    ],
    "source": "https://altosindia.net/products/product/altocare"
  },
  "red-ginseng": {
    "summary": "Vigvit Red Ginseng capsules with ginseng root extract.",
    "ingredients": [
      "Red ginseng root extract"
    ],
    "directions": [
      "Follow the directions on the pack or those given by your healthcare professional."
    ],
    "source": "https://altosindia.net/eshop/product/info/red-korean-ginseng"
  },
  "ultra-k-10-capsule-fat-burn": {
    "summary": "An Altos supplement containing green coffee, kokum and green tea extracts.",
    "ingredients": [
      "Green coffee extract",
      "Kokum extract",
      "Green tea extract"
    ],
    "directions": [
      "Follow the directions on the pack or those given by your healthcare professional."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/ultra-k10-capsule"
  },
  "vigvit-ultra-k-10": {
    "summary": "An Altos supplement containing green coffee, kokum and green tea extracts.",
    "ingredients": [
      "Green coffee extract",
      "Kokum extract",
      "Green tea extract"
    ],
    "directions": [
      "Follow the directions on the pack or those given by your healthcare professional."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/ultra-k10-capsule"
  },
  "oregain-weight-gainer": {
    "summary": "Oregain vanilla-flavoured powder with soy protein.",
    "ingredients": [
      "Soy protein",
      "Vanilla powder"
    ],
    "directions": [
      "Mix according to the serving directions on your pack."
    ],
    "source": "https://altosindia.net/products/product/oregain-powder-vanilla"
  },
  "prevent-hair-fall-shampoo": {
    "summary": "A rinse-off shampoo with neem and bhringraj.",
    "ingredients": [
      "Neem extract",
      "Bhringraj"
    ],
    "directions": [
      "Apply to wet hair and rinse thoroughly."
    ],
    "source": "https://altosindia.net/eshop/product/info/prevent-hairfall-shampoo"
  },
  "d-tan-face-pack": {
    "summary": "Zordan D-Tan Face Pack for facial skin care.",
    "ingredients": [],
    "directions": [
      "Follow the directions and precautions on the pack."
    ],
    "source": "https://altosindia.net/public/download/Altos%20Product%20Brochure%28June%202025%29.pdf"
  },
  "ultra-black-kajal": {
    "summary": "Zordan Ultra Black Kajal for a defined black eye-makeup look.",
    "ingredients": [],
    "directions": [
      "Follow the directions and precautions on the pack."
    ],
    "source": "https://altosindia.net/public/download/Altos%20Product%20Brochure%28June%202025%29.pdf"
  },
  "black-kajal-pencil": {
    "summary": "Black kajal for defining your eye makeup.",
    "ingredients": [],
    "directions": [
      "Follow the directions and precautions on the pack."
    ],
    "source": "https://altosindia.net/public/download/Altos%20Product%20Brochure%28June%202025%29.pdf"
  },
  "matte-lipstick": {
    "summary": "Zordan lipstick with a matte finish.",
    "ingredients": [],
    "directions": [
      "Follow the directions and precautions on the pack."
    ],
    "source": "https://altosindia.net/public/download/Altos%20Product%20Brochure%28June%202025%29.pdf"
  },
  "nail-polish": {
    "summary": "Zordan nail colour for everyday or occasion wear.",
    "ingredients": [],
    "directions": [
      "Follow the directions and precautions on the pack."
    ],
    "source": "https://altosindia.net/public/download/Altos%20Product%20Brochure%28June%202025%29.pdf"
  },
  "antiseptic-hand-wash": {
    "summary": "Altos antiseptic liquid hand wash.",
    "ingredients": [],
    "directions": [
      "Lather on wet hands and rinse with water."
    ],
    "source": "https://altosindia.net/public/download/Altos%20Product%20Brochure%28June%202025%29.pdf"
  },
  "hand-wash-250ml": {
    "summary": "Altos antiseptic liquid hand wash.",
    "ingredients": [],
    "directions": [
      "Lather on wet hands and rinse with water."
    ],
    "source": "https://altosindia.net/public/download/Altos%20Product%20Brochure%28June%202025%29.pdf"
  },
  "glass-cleaner": {
    "summary": "Altos liquid cleaner for glass surfaces.",
    "ingredients": [],
    "directions": [
      "Follow the directions and precautions on the pack."
    ],
    "source": "https://altosindia.net/public/download/Altos%20Product%20Brochure%28June%202025%29.pdf"
  },
  "floor-cleaner": {
    "summary": "Altos liquid floor cleaner.",
    "ingredients": [],
    "directions": [
      "Follow the label for dilution and suitable surfaces."
    ],
    "source": "https://altosindia.net/public/download/Altos%20Product%20Brochure%28June%202025%29.pdf"
  },
  "pure-turmeric-powder-haldi": {
    "summary": "Ground turmeric for cooking.",
    "ingredients": [
      "Turmeric"
    ],
    "directions": [
      "Season your dishes to taste."
    ],
    "source": "https://altosindia.net/public/download/Altos%20Product%20Brochure%28June%202025%29.pdf"
  },
  "pure-red-chilli-powder-lal-mirch": {
    "summary": "Ground red chilli for adding heat to dishes.",
    "ingredients": [
      "Red chilli"
    ],
    "directions": [
      "Season your dishes to taste."
    ],
    "source": "https://altosindia.net/public/download/Altos%20Product%20Brochure%28June%202025%29.pdf"
  },
  "pure-coriander-powder-dhania": {
    "summary": "Ground coriander for cooking.",
    "ingredients": [
      "Coriander"
    ],
    "directions": [
      "Season your dishes to taste."
    ],
    "source": "https://altosindia.net/public/download/Altos%20Product%20Brochure%28June%202025%29.pdf"
  },
  "pure-garam-masala": {
    "summary": "A ground garam masala spice blend for cooking.",
    "ingredients": [],
    "directions": [
      "Season your dishes to taste."
    ],
    "source": "https://altosindia.net/public/download/Altos%20Product%20Brochure%28June%202025%29.pdf"
  },
  "rice-bran-oil": {
    "summary": "Altos rice bran cooking oil.",
    "ingredients": [
      "Rice bran oil"
    ],
    "directions": [
      "Use as a cooking oil according to your recipe."
    ],
    "source": "https://altosindia.net/public/download/Altos%20Product%20Brochure%28June%202025%29.pdf"
  },
  "sharbat-sweet-rose": {
    "summary": "A rose-flavoured sharbat concentrate.",
    "ingredients": [],
    "directions": [
      "Dilute according to the directions on your bottle and serve chilled."
    ],
    "source": "https://altosindia.net/public/download/Altos%20Product%20Brochure%28June%202025%29.pdf"
  },
  "royal-chandan-premium-agarbatti": {
    "summary": "Royal Chandan sandalwood-scented incense sticks.",
    "ingredients": [],
    "directions": [
      "Follow the directions and precautions on the pack."
    ],
    "source": "https://altosindia.net/public/download/Altos%20Product%20Brochure%28June%202025%29.pdf"
  },
  "zordan-black-hill-body-deodorant": {
    "summary": "Zordan Black Hill body deodorant has a strong, masculine fragrance. Altos describes it as a non-sticky formula for lasting freshness and body-odour protection.",
    "ingredients": [],
    "directions": [
      "Follow the application directions and safety precautions printed on the can."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/black-hill-deodorant"
  },
  "zordan-blue-hill-body-deodorant": {
    "summary": "Zordan Blue Hill body deodorant.",
    "ingredients": [],
    "directions": [
      "Follow the directions and precautions on the pack."
    ],
    "source": "https://altosindia.net/public/download/Altos%20Product%20Brochure%28June%202025%29.pdf"
  },
  "perfume-blueflash-or-black-velvet": {
    "summary": "Zordan perfume in Blueflash or Black Velvet fragrance.",
    "ingredients": [],
    "directions": [
      "Follow the directions and precautions on the pack."
    ],
    "source": "https://altosindia.net/public/download/Altos%20Product%20Brochure%28June%202025%29.pdf"
  },
  "oremol-natural-black-hair": {
    "summary": "A black hair-colour emulsion with amla, almond and bhringraj.",
    "ingredients": [
      "Amla",
      "Almond",
      "Bhringraj"
    ],
    "directions": [
      "Follow the directions and precautions on the pack."
    ],
    "source": "https://altosindia.net/products/product/oremol-hair-black"
  },
  "shine-home-cream-soap": {
    "summary": "A facial cleansing bar with saffron, sandalwood and aloe vera.",
    "ingredients": [
      "Kesar",
      "Chandan",
      "Aloevera"
    ],
    "directions": [
      "Work into a lather on damp skin, rinse with water and pat dry."
    ],
    "source": "https://altosindia.net/products/product/home-shine-facial-bar"
  },
  "oregon-80-water-retention": {
    "summary": "An agricultural spray additive from Altos.",
    "ingredients": [],
    "directions": [
      "Follow the directions and precautions on the pack."
    ],
    "source": "https://altosindia.net/products/product/oregon"
  },
  "oregon-80-sa-agent": {
    "summary": "An agricultural spray additive from Altos.",
    "ingredients": [],
    "directions": [
      "Follow the directions and precautions on the pack."
    ],
    "source": "https://altosindia.net/products/product/oregon"
  },
  "alto-gro-plant-booster": {
    "summary": "A plant-care formulation containing micronutrients, enzymes and plant extracts.",
    "ingredients": [
      "Micronutrients",
      "Enzymes",
      "Plant Extracts"
    ],
    "directions": [
      "Follow the directions and precautions on the pack."
    ],
    "source": "https://altosindia.net/products/product/altogro"
  },
  "altos-care-pest-control": {
    "summary": "An Altos plant-care product containing clove, neem and thyme oils.",
    "ingredients": [
      "Clove Oil",
      "Neem Oil",
      "Thyme Oil"
    ],
    "directions": [
      "Follow the directions and precautions on the pack."
    ],
    "source": "https://altosindia.net/products/product/altocare"
  },
  "ft-15-fruit-extract": {
    "summary": "A concentrate made with a blend of 15 fruits.",
    "ingredients": [
      "Acai Berry",
      "Blueberry",
      "Cranberry",
      "Goji Berry",
      "Dragon fruit",
      "Sea Buckthorn",
      "Pomegranate",
      "Grape Seed",
      "Guava",
      "Pineapple",
      "Mango",
      "Orange",
      "Pear",
      "Banana",
      "Papaya"
    ],
    "directions": [
      "Follow the directions and precautions on the pack."
    ],
    "source": "https://altosindia.net/products/product/ft-15-fruit-concentrate-extract"
  },
  "wheatgrass": {
    "summary": "An Altos tablet made with wheatgrass extract.",
    "ingredients": [
      "Wheatgrass"
    ],
    "directions": [
      "Follow the pack directions or the advice of your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/wheatgrass-tablet"
  },
  "spirulina-30-tabs": {
    "summary": "Altos Spirulina tablets in a 30-tablet pack.",
    "ingredients": [],
    "directions": [
      "Follow the pack directions or the advice of your healthcare professional."
    ],
    "source": "https://altosindia.net/products/product/spirulina-tablet"
  },
  "rose-and-musk-moisturising-lotion": {
    "summary": "A rose-and-musk body lotion.",
    "ingredients": [
      "Rose"
    ],
    "directions": [
      "Smooth a small amount gently over the body."
    ],
    "source": "https://altosindia.net/products/product/rose-musk-lotion"
  },
  "herbal-shaving-cream": {
    "summary": "A shaving cream with menthol and aloe vera.",
    "ingredients": [
      "Menthol",
      "Aloe vera",
      "Glycerine"
    ],
    "directions": [
      "Apply to a wet face with a damp shaving brush. Rinse after shaving."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/shaving-cream"
  },
  "shudh-shilajit-paste": {
    "summary": "An Altos shilajit paste in a 20 g pack.",
    "ingredients": [
      "Shilajit"
    ],
    "directions": [
      "Follow the pack directions or the advice of your healthcare professional."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/shudh-shilajit-paste"
  },
  "baby-oil": {
    "summary": "An oil blend formulated for baby massage.",
    "ingredients": [
      "Shankhapushpi",
      "Masha",
      "Brahmi",
      "Aloe vera",
      "Ratanjot",
      "Coconut oil",
      "Almond oil",
      "Sesame oil",
      "Chamomile"
    ],
    "directions": [
      "Follow the directions and precautions on the pack."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/ayurvedic-baby-massage-oil"
  },
  "ayush-kwath-powder": {
    "summary": "An Altos herbal powder blend.",
    "ingredients": [
      "Tulsi",
      "Dalchini",
      "Marich",
      "Sunthi"
    ],
    "directions": [
      "Follow the pack directions or the advice of your healthcare professional."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/ayush-kwath"
  },
  "choco-kidz-powder": {
    "summary": "A chocolate-flavoured nutrition powder with protein, vitamins and minerals.",
    "ingredients": [
      "Protein",
      "Vitamin A",
      "Vitamin C",
      "Vitamin D2",
      "Calcium",
      "Iron",
      "Zinc"
    ],
    "directions": [
      "Use the serving instructions on the pack."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/vigvit-choco-kidz"
  },
  "b-big": {
    "summary": "An Altos herbal capsule formulation.",
    "ingredients": [
      "Ashwagandha",
      "Vidarikand",
      "Chansur",
      "Guggal",
      "Arjuna",
      "Giloy",
      "Brahmi",
      "Shankhpushpi",
      "Yashtimadhu",
      "Vayvidang"
    ],
    "directions": [
      "Follow the pack directions or the advice of your healthcare professional."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/little-b-big-capsule"
  },
  "anti-acne-and-pimple-cream": {
    "summary": "A topical skin-care formulation with neem, tea tree oil and clove oil.",
    "ingredients": [
      "Neem",
      "Tea tree oil",
      "Clove oil"
    ],
    "directions": [
      "Follow the directions and precautions on the pack."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/anti-acne-and-pimple-gel"
  },
  "multivitamin-gummies": {
    "summary": "Vigvit multivitamin and mineral gummies for children.",
    "ingredients": [
      "Vitamin A",
      "Vitamin B12",
      "Vitamin C"
    ],
    "directions": [
      "Follow the age and serving guidance on the pack."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/multivitamins-with-minerals-gummies"
  },
  "mc-vital": {
    "summary": "An Altos multivitamin and mineral tablet with ginseng.",
    "ingredients": [
      "Ginseng",
      "Vitamins",
      "Minerals"
    ],
    "directions": [
      "Follow the pack directions or the advice of your healthcare professional."
    ],
    "source": "https://shop.altosindia.net/eshop/product/info/mc-vital"
  },
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
  if (params.slug === "deodorant-blue-hill-or-black-hill") {
    return new Response(null, { status: 301, headers: { Location: "/products/zordan-black-hill-body-deodorant" } });
  }
  const product = [...products, ...buildCareKits(products, kitDefinitions)].find((item) => item.slug === params.slug);
  if (!product) {
    return new Response("Product not found", {
      status: 404,
      headers: { "Content-Type": "text/plain; charset=utf-8" }
    });
  }

  const details = product.components ? {summary: product.summary, ingredients: [], directions: product.routine} : (Object.hasOwn(productDetails, product.slug) ? productDetails[product.slug] : undefined);
  const image = Object.hasOwn(manufacturerImages, product.slug) ? manufacturerImages[product.slug] : product.image;
  const url = `${SITE}/products/${product.slug}`;
  const inStock = product.inStock ?? true;
  const stockLabel = inStock ? "In stock" : "Out of stock";
  const brand = product.brand ?? (
    product.slug === "tulsi-power" ? "Altos Ayurveda" :
    product.slug === "aroplex" ? "Altos" :
    product.slug === "charcoal-face-wash" || product.name.startsWith("Zordan ") ? "Zordan" :
    undefined
  );
  const returnPolicy = {
    "@type": "MerchantReturnPolicy",
    applicableCountry: "IN",
    returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
    merchantReturnDays: 2,
    itemCondition: "https://schema.org/NewCondition",
    returnMethod: "https://schema.org/ReturnByMail",
    returnFees: "https://schema.org/FreeReturn",
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
    ...(product.sku ? { sku: product.sku } : {}),
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
<!-- GA4: shared measurement ID for all dynamically generated product pages -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-8B69YQR316"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-8B69YQR316');
gtag('event', 'view_item', {currency:'INR',value:${product.price},items:[{item_id:${JSON.stringify(String(product.id))},item_name:${JSON.stringify(product.name)},price:${product.price},quantity:1}]});
</script>
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
:root{font-family:Arial,Helvetica,sans-serif;color:#17211b;background:#f7faf6}*{box-sizing:border-box}body{margin:0;line-height:1.6;overflow-x:hidden;overflow-wrap:anywhere}img{max-width:100%}.top{background:#064e3b;color:#fff;text-align:center;padding:10px}.wrap{max-width:1050px;margin:auto;padding:22px}.brand{color:#064e3b;font-weight:800;text-decoration:none;font-size:20px}.back{float:right;color:#14532d;font-weight:700}.card{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:32px;background:#fff;border:1px solid #e2e9e1;border-radius:20px;padding:26px;margin-top:24px}.photo{background:#fff;border:1px solid #e2e9e1;border-radius:16px;display:grid;place-items:center;align-self:start;aspect-ratio:1/1;min-height:0;padding:8px;overflow:hidden}.photo img{display:block;width:100%;height:100%;min-height:0;object-fit:contain}.tag{color:#166534;font-weight:700;text-transform:uppercase;font-size:12px;letter-spacing:.08em}h1{font-size:clamp(28px,5vw,42px);line-height:1.15;color:#173c29;margin:10px 0}.muted{color:#65736a}.price{font-size:30px;font-weight:800;color:#064e3b}.mrp{text-decoration:line-through;color:#758078;font-size:16px;margin-left:8px}.btn{display:inline-block;background:#15803d;color:white;text-decoration:none;padding:13px 18px;border-radius:10px;font-weight:800;margin:8px 8px 0 0}.btn.alt{background:white;border:1px solid #b9c9bb;color:#064e3b}.note{font-size:13px;color:#65736a;background:#f1f6ed;padding:14px;border-radius:10px;margin-top:20px}footer{text-align:center;padding:28px;color:#65736a;font-size:14px}@media(max-width:700px){.card{grid-template-columns:1fr;padding:16px;gap:18px}.photo{min-height:0}.wrap{padding:16px}}
.checkout{margin-top:24px;background:white;border:1px solid #e2e9e1;border-radius:20px;padding:clamp(16px,4vw,26px)}.checkout form{display:grid;gap:12px;max-width:420px;min-width:0}.card>div,.checkout,.checkout form>*{min-width:0}.checkout label{display:grid;gap:4px;font-weight:700}.checkout input,.checkout textarea{width:100%;padding:10px;border:1px solid #aabbb0;border-radius:8px;font:inherit}.checkout button{font:inherit;font-weight:800;cursor:pointer;border:0;justify-self:start}.checkout h2{margin-top:0}.checkout output{font-weight:800}.details{margin:24px 0}.details summary{cursor:pointer;font-weight:700}.product-meta{display:flex;gap:12px;flex-wrap:wrap}.stock{color:#166534}
.upi-payment{margin:4px 0;padding:14px;border:1px solid #e2e9e1;border-radius:12px;background:#f7faf6}.upi-payment img{display:block;width:184px;height:184px;margin:8px 0;background:#fff}.upi-payment code{user-select:all;font-size:1rem}.upi-payment .btn{margin-bottom:8px}.upi-payment code{overflow-wrap:anywhere}.upi-help{font-size:13px;color:#425449}.btn{max-width:100%;text-align:center;white-space:normal}@media(max-width:700px){.wrap{padding:12px}.card{margin-top:14px}.top{font-size:13px}.brand{font-size:17px}.back{float:none;display:block;margin-top:6px}.photo{min-height:0;aspect-ratio:1/1;padding:8px}.photo img{width:100%;height:100%;max-height:none;min-height:0}.checkout{margin-top:14px}.checkout button,.checkout .btn{width:100%;justify-self:stretch}.upi-payment img{max-width:100%;height:auto}}
.product-details{margin-top:24px;background:#fff;border:1px solid #e2e9e1;border-radius:20px;padding:clamp(16px,4vw,26px)}.product-details h2{margin-top:0}.product-details h3{margin-bottom:4px}.product-details p,.product-details ol{margin-top:4px}.product-details a{color:#14532d}
#add-product-to-cart[hidden]{display:none}
#browser-checkout-link[hidden]{display:none}
</style>
</head>
<body>
<div class="top">Awin Enterprises · Online product enquiries and orders</div>
<div class="wrap">
<header><a class="brand" href="/">Awin Enterprises</a><a class="back" href="/">← Browse catalogue</a></header>
<main class="card">
<div class="photo" ${product.components ? `style="display:grid;grid-template-columns:repeat(${product.components.length > 5 ? 3 : 2},minmax(0,1fr));gap:10px;aspect-ratio:auto"` : ""}>${product.components ? product.components.map(p => `<img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.name)}" style="width:100%;height:150px;object-fit:contain" loading="eager">`).join("") : `<img src="${escapeHtml(image)}" alt="${escapeHtml(product.name)}" style="transform:scale(${product.imageScale ?? 1})" loading="eager">`}</div>
<div>
<div class="tag">${escapeHtml(product.category)}</div>
<h1>${escapeHtml(product.name)}</h1>
<p class="muted">Pack size: ${escapeHtml(product.pack)}</p>
<div class="price">₹${product.price.toLocaleString("en-IN")} <span class="mrp">MRP ₹${product.mrp.toLocaleString("en-IN")}</span></div>
${product.components ? `<p>Individual selling total <s>₹${product.regularTotal}</s> · Extra 5% OFF · Save extra ₹${product.savings}</p><ul>${product.components.map(p=>`<li>${escapeHtml(p.id===112 ? "Hair Vitalizer Aroma" : p.id===97 ? "Papaya Light Anti-Blemishing Cream" : p.name)} · ${escapeHtml(p.pack)} · 1 pack</li>`).join("")}</ul><p class="note">${escapeHtml(product.note)}</p><p><a href="${whatsapp}">Product selection aur istemaal ki jaankari ke liye WhatsApp karein</a></p>` : ""}
<p class="product-meta"><strong class="stock">${stockLabel}</strong>${brand ? `<span>Brand: ${escapeHtml(brand)}</span>` : ""}</p>
${inStock ? '<a class="btn" href="#checkout">Buy Now</a><button class="btn alt" id="add-product-to-cart" type="button" hidden>Add to Cart</button><a class="btn alt" href="/?cart=open">View Cart</a><p id="add-cart-status" role="status"></p>' : ""}
<a class="btn alt" href="${whatsapp}" rel="noopener noreferrer">Ask on WhatsApp</a>
${details ? `<p class="muted">${escapeHtml(details.summary)} <a href="#product-details">${!details.directions.length ? "Kit details" : details.ingredients.length ? "Ingredients &amp; how to use" : "Product details &amp; how to use"}</a></p>` : '<div class="note">Please check the product packaging for ingredients, directions for use, warnings and other product-specific information. Product details and prices may change; confirm before ordering.</div>'}
</div>
</main>
${details ? `
<section class="product-details" id="product-details" aria-labelledby="product-details-title">
<h2 id="product-details-title">Product details</h2>
${details.ingredients.length ? `<h3>Key ingredients</h3>\n<p>${details.ingredients.map(escapeHtml).join(", ")}.</p>` : ""}
<p class="muted">Check the pack label for the full ingredient list and any warnings.</p>
${details.directions.length ? `<h3>${product.components ? "Care routine" : "How to use"}</h3><ol>${details.directions.map(step => `<li>${escapeHtml(step)}</li>`).join("")}</ol>` : ""}
</section>` : ""}
${inStock ? `
<section class="checkout" id="checkout" aria-labelledby="checkout-title">
<h2 id="checkout-title">Checkout</h2>
<p>${escapeHtml(product.name)} · ${escapeHtml(product.pack)} · ₹${product.price.toLocaleString("en-IN")} each</p>
<form id="order-form" data-product-id="${product.id}" data-product="${escapeHtml(product.name + (product.components ? " — " + product.components.map(p=>p.name+" ("+p.pack+")").join(" + ") : ""))}" data-pack="${escapeHtml(product.pack)}" data-price="${product.price}" data-whatsapp="${PHONE}" data-upi="${UPI_ID}" data-payee="${PAYEE}">
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
<a id="upi-link" class="btn" href="#" rel="external">Open UPI app</a>
<a id="browser-checkout-link" class="btn alt" target="_blank" rel="noopener noreferrer" hidden>Open checkout in browser</a><p id="upi-help" class="upi-help" role="status" aria-live="polite">If your UPI app does not open, enter the UPI ID and total shown above in your payment app, or scan this QR from another device.</p>
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
<p>Request a return on WhatsApp within 48 hours of delivery and share your order number. Unwanted products must be unused, unopened, fully packed and factory-sealed to qualify for a return. Approved returns have free courier pickup, subject to the pickup agent verifying the packaging, seal and condition. Opened or used products are not eligible for ordinary returns. If your order arrives damaged, leaking, defective, expired or incorrect, share clear photos or an unboxing video so we can assess a replacement or refund, including where the item arrived with a broken seal. Approved refunds are processed to the original payment method within 5–7 working days. Your statutory consumer rights remain unaffected.</p>
</section>
</div>
<footer>© Awin Enterprises · <a href="https://awinenterprises.in/">awinenterprises.in</a></footer>
${inStock ? `<script>
  const gaItem = {item_id: ${JSON.stringify(String(product.id))}, item_name: ${JSON.stringify(product.name)}, price: ${product.price}, quantity: 1};
  const trackGa = (eventName, data) => { if (typeof window.gtag === "function") window.gtag("event", eventName, data); };
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
      trackGa('add_to_cart', {currency:'INR',value:gaItem.price,items:[gaItem]});
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
  const browserLink = document.getElementById("browser-checkout-link");
  const currentPage = new URL(window.location.href);
  const browserCheckout = currentPage.searchParams.get("checkout-browser") === "1";
  const isAndroid = /Android/i.test(navigator.userAgent);
  if (browserCheckout) {
    const selectedQuantity = Number(currentPage.searchParams.get("qty"));
    if (Number.isSafeInteger(selectedQuantity) && selectedQuantity >= 1 && selectedQuantity <= 99) {
      quantity.value = String(selectedQuantity);
    }
  }
  const confirmPayment = document.getElementById("confirm-payment");

  function updateCheckout() {
    const amount = productSubtotal();
    const charge = deliveryCharge(amount);
    subtotal.value = quantity.validity.valid ? formatPrice.format(amount) : "—";
    shipping.value = quantity.validity.valid ? (charge ? formatPrice.format(charge) : "Free") : "—";
    total.value = quantity.validity.valid ? formatPrice.format(amount + charge) : "—";
    payment.hidden = !quantity.validity.valid;
    confirmPayment.disabled = payment.hidden;
    browserLink.hidden = payment.hidden || !isAndroid || browserCheckout;
    if (payment.hidden) return;

    if (!browserLink.hidden) {
      const checkoutPage = new URL(currentPage.pathname, currentPage.origin);
      checkoutPage.searchParams.set("checkout-browser", "1");
      checkoutPage.searchParams.set("qty", String(quantity.valueAsNumber));
      checkoutPage.hash = "checkout";
      browserLink.href = checkoutPage.href;
    }

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

  document.querySelector('a[href="#checkout"]')?.addEventListener("click", () => {
    const qty = Number(quantity.value) || 1;
    trackGa('begin_checkout', {currency:'INR',value:gaItem.price*qty+deliveryCharge(gaItem.price*qty),items:[{...gaItem,quantity:qty}]});
  });
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
    trackGa('whatsapp_order_inquiry', {currency:'INR',value:amount+charge,items:[{...gaItem,quantity:Number(quantity.value)}]});
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
