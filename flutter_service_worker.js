'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ee30e519eb6450dfc62c40e2da8f1fb9",
"assets/assets/fonts/PoppinsMedium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/PoppinsRegular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/PoppinsSemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/TCM.ttf": "9b62dc86f936227b3f7b367bd0b6c05e",
"assets/assets/images/add_user_image.png": "086c50b6057bf9863ac793f09ac87041",
"assets/assets/images/angryicon.png": "d5a7d788f34076982092f5906f9a6994",
"assets/assets/images/announce_icon.png": "c3a5c2a00b2ffe9e849fb2435a985901",
"assets/assets/images/announce_outline.png": "69dae49aa909e5566126fb726e1c28c2",
"assets/assets/images/arrow_forward_icon.png": "cfb3847c6d3aaffd65b43a1b4a4531dc",
"assets/assets/images/ArticleBar.png": "a754903ee56ff0c6e8d467021212ea4d",
"assets/assets/images/backGround_image.png": "772510741bda07224bc5a70eb49f0194",
"assets/assets/images/baloon_icon.png": "233a35187c2c20713feda1e857555025",
"assets/assets/images/Banner.jpg": "f2dab779a884cdc844a77fbfd398d512",
"assets/assets/images/Banner.png": "4c12f3502b725dc31c20e10bd4461870",
"assets/assets/images/BJP-logo.png": "84797372014b192b7fc250cbcd596785",
"assets/assets/images/bjpLogo.png": "e4eee519f04f0914d3be3adf61d3c3cd",
"assets/assets/images/blue_round_shape.png": "ac03d5b36225f1484134e649dd005bf8",
"assets/assets/images/booth.png": "56e2dbf7dbe6971bca2a924a6d637773",
"assets/assets/images/buisness_icon.png": "0885c94d5732f6c66004a038324f22a0",
"assets/assets/images/calander_icon.png": "7ad6916cd8806b3a3a1387b13b0c0213",
"assets/assets/images/calender.png": "84a646b38f61582a509d669edff6278d",
"assets/assets/images/calender_1.png": "606c4a2d92c1bddff6f1bd81c3faa44f",
"assets/assets/images/call_icon.png": "f8ad7acbeadf49d158b7223c7029ce24",
"assets/assets/images/camera_icon.png": "c5a5145f2d768327a997e3f0afdfd6ba",
"assets/assets/images/checkbox.png": "5df18537f89b6046d355f10f1dee0c14",
"assets/assets/images/circle1.png": "706f12049463bf0a10757d77aebe0e16",
"assets/assets/images/circle2.png": "7c9f6bd6eba21bb8ce6e09ddf000b346",
"assets/assets/images/clear_icon.png": "84f395b7a122361cd3ff65e74912cff9",
"assets/assets/images/customer_service(1).png": "b8a6659fc3d19a6e18cf50221f7b966e",
"assets/assets/images/customer_service.png": "cbce9818a296aeb28adbe9b46f6ce1c2",
"assets/assets/images/DashMKB.png": "170f8f44b977fab4e350dbd6d8a70d8f",
"assets/assets/images/DashMKB2.jpg": "cec2ddc82308bae5f92df776ef6b254e",
"assets/assets/images/DashMKB3.png": "4ae22cea09d927d826955d866ba2b209",
"assets/assets/images/DashMKB3Edit.jpg": "9eb64459827d3fb2ccb69b3219e7bdfd",
"assets/assets/images/datePicker.png": "a1156fcccc83323519789f63457839ef",
"assets/assets/images/deleteIcon.png": "af50904bb4abe7b940c7c0c65276c13c",
"assets/assets/images/designation.png": "307e5bf023ee84db48a7742246c43857",
"assets/assets/images/drawer_icon.png": "0908bc1c5c9fe72474ae4fd3383f0e92",
"assets/assets/images/education_icon.png": "2dd019b0f7e90ec25814eeae139b5336",
"assets/assets/images/eye.png": "329f54e3cc04068f9608dd91c49321a1",
"assets/assets/images/eye2.png": "222477d4fb3d25edf20d5f9c3022c325",
"assets/assets/images/file_list_icon.png": "0302ca313d9b90438d521efc35974d76",
"assets/assets/images/fill_buisness_icon.png": "07e9054cefdcfbe8ee3468216fdd2853",
"assets/assets/images/gallery_color_image.png": "4b8b20615ba26e376c4426cf55977ddd",
"assets/assets/images/gallery_image.png": "e3e82249af25eeb341d3c56e095626d1",
"assets/assets/images/gender_icon.png": "f06e2ddb9f5d28655a0a16eeaf57ec91",
"assets/assets/images/hearticon.png": "14140323e06e8e58c792ec46a7dab04c",
"assets/assets/images/help.png": "b6ce85bda3732c3a09a2d20bc644e439",
"assets/assets/images/helpline_icon.png": "1691084b81dd27ba8db477f429786d81",
"assets/assets/images/home_icons.png": "b848f12325f71a99a0484c8f192596dc",
"assets/assets/images/home_outline.png": "b41b28541e5b8d3ccf118d0be1c9b393",
"assets/assets/images/image.png": "9ddff800bcdb85b02be45c1bb9bb7c9c",
"assets/assets/images/image2.png": "09420cc41512786b6b1223c18ec489a3",
"assets/assets/images/instagramLogo.png": "72f4a014227cbfd30f46f091a740e4df",
"assets/assets/images/language_icon.png": "533106b9fa54baad346db939bb42fc71",
"assets/assets/images/links.png": "ba9c5be66a324086092b739ccfe21832",
"assets/assets/images/listview_image.png": "c1bd53504e469510d92268e4ad9d3107",
"assets/assets/images/login_image.png": "8ec827078f320e1beef4925f23f179e3",
"assets/assets/images/logout_icon.png": "cfb30420158be65b4f8265d6fb6d041d",
"assets/assets/images/mandal.png": "e6282c3a2866d4a40e15ceec51e3d1a7",
"assets/assets/images/mannkibaaatmiclogo.png": "b186920231aedc350c720f5358748adb",
"assets/assets/images/mannkibaaatmodilogo.png": "4dcc14409abdfbaddf74169a583c50db",
"assets/assets/images/mannkibaat/formsuccess.png": "89d53805f818a66fdfad3e83f6f737b5",
"assets/assets/images/mannkibaat/image.png": "9ddff800bcdb85b02be45c1bb9bb7c9c",
"assets/assets/images/mannkibaat/image1.png": "e004d4e8c3882675116d655102fbeb35",
"assets/assets/images/mannkibaat/image10.png": "87a75d40ed3e708cabcba96538e470a6",
"assets/assets/images/mannkibaat/image11.png": "0d8ad7816e1255d641a2269793ecdaee",
"assets/assets/images/mannkibaat/image12.png": "65aa63a601b229d2b49db9b0608d17ef",
"assets/assets/images/mannkibaat/image2.png": "09420cc41512786b6b1223c18ec489a3",
"assets/assets/images/mannkibaat/image3.png": "0450e4e2fcfbaccf052e1649862ef96f",
"assets/assets/images/mannkibaat/image4.png": "16967f15b4a712d2d4d8bfdb85391a22",
"assets/assets/images/mannkibaat/image5.png": "67b27323e32d2bbc8a6b4f8d62c2ed95",
"assets/assets/images/mannkibaat/image6.png": "6afb2b15fd6e478e28b93f50a6c14d8a",
"assets/assets/images/mannkibaat/image7.png": "7c6bcc8de4533494f2c26d0e5fd413cd",
"assets/assets/images/mannkibaat/image8.png": "93b393511a92e3a57aa8d5afd4c93307",
"assets/assets/images/mannkibaat/image9.png": "084aec1e7af52f07ec2264c245890f53",
"assets/assets/images/mannkibaat/mic.png": "5e01355bd2380594ff4e23898b9ca7f3",
"assets/assets/images/marker.png": "bb22bd911ad3e4b0976cf8d5e4053ccd",
"assets/assets/images/member_image.png": "61842f43cd5e75f6bce7884265aaebc8",
"assets/assets/images/menu_icon.png": "811a9834fb42085433a9f5ac1f71d22d",
"assets/assets/images/menu_outline.png": "254e3bcf7e030e85c3b989a033987af7",
"assets/assets/images/metting_image.png": "897a0c2535d26e0d6d8eeacbbf1b6add",
"assets/assets/images/mic_logo.png": "4976471c36bb35ddec6e84bd1532e71b",
"assets/assets/images/mobile_icon.png": "d97f2ab5ea15f766f0d225c48a963ec1",
"assets/assets/images/nolinks.png": "e3a19cce47134f633e9acf6ba886f92c",
"assets/assets/images/notificationBackIcon.png": "683a26e2c2487a436cf83af45bfb0eb4",
"assets/assets/images/notificationBell.png": "0c05f8f9ef86b491c1abeec7139e332d",
"assets/assets/images/notificationDateIcon.png": "32bd6c0a6e6df1b8ba2636455d335608",
"assets/assets/images/notificationImageIcon.png": "7e5912994754868ad45a64a99c70dea4",
"assets/assets/images/notificationLinkIcon.png": "7cb45a3773e7a185e4fb82d17a24db2b",
"assets/assets/images/notificationPdfIcon.png": "a6b004c5e05a5170f56c2d232a599251",
"assets/assets/images/notification_icon.png": "3e65b6c0e78a9c8f9cbdb216acdb77f1",
"assets/assets/images/orange_round_shape.png": "3e936eba347830d56699042d4c341119",
"assets/assets/images/pause.png": "b643db1ca7dd2aaa690b299a36541788",
"assets/assets/images/pdf.png": "e056162db4d6c2204566e81e531cfc01",
"assets/assets/images/pdf_icon.png": "7e7d1f457124505ac73abce10c40f4f0",
"assets/assets/images/person_image.png": "fd940d81a7b99b12878febabe5dbe1c3",
"assets/assets/images/person_logo.png": "883e5be0c1b5a01edbb77fc93c243c36",
"assets/assets/images/photo.png": "0403fce12128732cbc7f153d2a5c2c63",
"assets/assets/images/profile.png": "3e6e6e5ad7751857214605dc17fd1fc5",
"assets/assets/images/profile_back.png": "9d009457e319f19b324c1d7a32512e17",
"assets/assets/images/question_mark_icon.png": "2c908cc445f370bf4d6086983238dced",
"assets/assets/images/rectangle.png": "7ed1160d8f659d43099ea056bec3daa0",
"assets/assets/images/sadicon.png": "60923f101bf72faaa4405dd8d04b37fd",
"assets/assets/images/sangathan_card_image.png": "7451fd3ab621819d6aa36d61b5913fda",
"assets/assets/images/sangathan_logo.png": "c3ac0b58414e9629467a8c1677937f24",
"assets/assets/images/search_icon.png": "1994e8548db0d60fbc939c51ccf92c18",
"assets/assets/images/shaktikendra_image.png": "9afc9cf5ddf7962b3e650690d9478d7e",
"assets/assets/images/SiderMKB.png": "eab406d6f08e84eca34bb534b51e2116",
"assets/assets/images/SiderMKB2.png": "59e9d6e78c219253c11ec77712cad4d5",
"assets/assets/images/social_page_image.png": "5b140d9308132e1e901310ee61978ff1",
"assets/assets/images/support.png": "4c2f65a75f25cdfc3036bb126ed6138f",
"assets/assets/images/syncGif.gif": "94a97e47665803bb49217ff3901fa303",
"assets/assets/images/temp.png": "f6780cfa762cff89b23c3eca1922535e",
"assets/assets/images/temp_image_1.png": "bf9406001a0ec9ad829c6a6d2d9fee8f",
"assets/assets/images/textLogo.png": "3db21dbf733b69427a616b59dd2fdedd",
"assets/assets/images/themePM.png": "21c227a7ba615994a0172848c8035f9f",
"assets/assets/images/themePM1.png": "7cbfe195a3026ba75acd5aaee550e2a2",
"assets/assets/images/themePM2.png": "c6e25b3237ce3b2f9b0e5e2c7ead68c7",
"assets/assets/images/themePM3.png": "7a1f3c9703f4c2e4a2c716b4e957fc5b",
"assets/assets/images/user_image.png": "7de09ceb6811ec4b3a48f2c87157589f",
"assets/assets/images/user_logo.png": "523d12bf13d4a6b29ba9bfffa90b109a",
"assets/assets/images/user_profile_placeholder.png": "c9f8e52c375bb38bc7436d7203cec907",
"assets/assets/images/verify_icon.png": "9949f5ec5a13110c4cd164d91f7216c1",
"assets/assets/images/videos.png": "c5afbad19dcad0d722fa5161804eb949",
"assets/assets/images/video_back_image.png": "bd511bf48b71ded68a64caea5d0094e7",
"assets/assets/images/vidhansabha.png": "270d7b4e8fd9f88e211086de13bdd533",
"assets/assets/images/viewReportsLogo.png": "c9c53aa7ef0518a3e22fe6b6e8f57364",
"assets/assets/images/whatsappPlayIcon.png": "3ce9d10abc2b0aeaaa35a80cc934b0cd",
"assets/assets/images/whatsappShareIcon.png": "ea910b9a0540451cb2614ee1aec7c7c0",
"assets/assets/images/whatsapp_icon.png": "5687b7ad4614e4555994ef5e57fedb65",
"assets/assets/images/wowicon.png": "fd5ecdd681951b016b8a4990b2d58d74",
"assets/FontManifest.json": "f47a1ceac4a3c1aa2e69fdd965c82639",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "d698bcbc0ea8194b483abe31f002747d",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/golden_toolkit/fonts/Roboto-Regular.ttf": "ac3f799d5bbaf5196fab15ab8de8431c",
"assets/packages/tweet_ui/assets/1.5x/tw__ic_gif_badge.png": "e7058cebdf872eedf158c32b71e58e54",
"assets/packages/tweet_ui/assets/1.5x/tw__ic_logo_blue.png": "1da8f9509282d7f0bede0fba9f73e55b",
"assets/packages/tweet_ui/assets/1.5x/tw__ic_retweet_light.png": "92bb8d0a7b9e9962860908deead4716f",
"assets/packages/tweet_ui/assets/1.5x/tw__ic_tweet_verified.png": "b3b8d4100a88fc43878cc46573dd2158",
"assets/packages/tweet_ui/assets/2.0x/tw__ic_gif_badge.png": "52b0e256ed08222b624e17524ef7cd12",
"assets/packages/tweet_ui/assets/2.0x/tw__ic_logo_blue.png": "0aa8488a8034a2e33ea8f424010ddbe8",
"assets/packages/tweet_ui/assets/2.0x/tw__ic_retweet_light.png": "116f8552f66d3d13e4a5d3bf620414fe",
"assets/packages/tweet_ui/assets/2.0x/tw__ic_tweet_verified.png": "33cf341dc3a4a8a6ee1ef51d33e6f8e6",
"assets/packages/tweet_ui/assets/3.0x/tw__ic_gif_badge.png": "04f1c53e00c1a42b112acd7a813ee839",
"assets/packages/tweet_ui/assets/3.0x/tw__ic_logo_blue.png": "6892a9e7e66a270b78fbb26b9b904cbd",
"assets/packages/tweet_ui/assets/3.0x/tw__ic_retweet_light.png": "2422621ae89838c41d3b2310457f5f58",
"assets/packages/tweet_ui/assets/3.0x/tw__ic_tweet_verified.png": "4b55cf25af102e90d13a66808675fd58",
"assets/packages/tweet_ui/assets/tw__ic_gif_badge.png": "c2b27f534a3372b69e3396134ffc7ad5",
"assets/packages/tweet_ui/assets/tw__ic_logo_blue.png": "90dcde7ede2b1700bbc6f02f5789f497",
"assets/packages/tweet_ui/assets/tw__ic_retweet_light.png": "707c63749ebf8bbba9dba32ac86d0de6",
"assets/packages/tweet_ui/assets/tw__ic_tweet_verified.png": "0100960db882f9f51517f3c79bc27c7b",
"assets/packages/tweet_ui/fonts/Roboto-Black.ttf": "5ebb24ee1112dd9562629375c387879a",
"assets/packages/tweet_ui/fonts/Roboto-BlackItalic.ttf": "99682a78fa4fe61e1177b94757336bbf",
"assets/packages/tweet_ui/fonts/Roboto-Bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"assets/packages/tweet_ui/fonts/Roboto-BoldItalic.ttf": "5b44818d2b9eda3e23cd5edd7b49b7d5",
"assets/packages/tweet_ui/fonts/Roboto-Light.ttf": "88823c2015ffd5fa89d567e17297a137",
"assets/packages/tweet_ui/fonts/Roboto-LightItalic.ttf": "a3ce4440f2abf76f4a1b14b83920138c",
"assets/packages/tweet_ui/fonts/Roboto-Medium.ttf": "58aef543c97bbaf6a9896e8484456d98",
"assets/packages/tweet_ui/fonts/Roboto-MediumItalic.ttf": "cf23e1bb619029496260760b72aebd30",
"assets/packages/tweet_ui/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/packages/tweet_ui/fonts/Roboto-RegularItalic.ttf": "a720f17aa773e493a7ebf8b08459e66c",
"assets/packages/tweet_ui/fonts/Roboto-Thin.ttf": "321de678e592d0b8f44f1a82d7ca4b62",
"assets/packages/tweet_ui/fonts/Roboto-ThinItalic.ttf": "35a9c89aff1396595ad345e378a32aca",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "017e3b6cb247781faaead74a4eb8ded5",
"/": "017e3b6cb247781faaead74a4eb8ded5",
"main.dart.js": "414e6691790d8f71b86093b0921f3f28",
"manifest.json": "7574c604f239a97146b9f90cadf05dbd",
"version.json": "305d6cfaa57b4f0513bf63f81b3cdd18"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
