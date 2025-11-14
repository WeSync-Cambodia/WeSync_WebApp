'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c26f8d51910d7f0f48c169718e45f726",
"version.json": "3dcf23435ecb0571aa69cf45e57490bd",
"index.html": "8642ddc4decb0d085efdef79ff008f2a",
"/": "8642ddc4decb0d085efdef79ff008f2a",
"main.dart.js": "53fe45d5a19a918f7e4b7bc62a5c8a70",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "140c702385bea4b4c074a80ef5b5913e",
".git/config": "e0236e9e045fe787813d003e345852e6",
".git/objects/61/ec23de65d5b1f47aaf1315fa7b8399180eddba": "19b8f7248aa841b61996133235c5be6a",
".git/objects/61/45dc75952e48db43603478e862c1fb2144fefd": "ed28e1c836eb37a5a744bb9a828da9e4",
".git/objects/95/cac749960f96f6de13120da863139b340fc1fc": "59e293253b51f84ea7d655889f9770b9",
".git/objects/3e/e9af21900a7f738063b404f8fee5af86e942cc": "60395efa939972991f6cf70d13f7b370",
".git/objects/3e/eabe4fa3018142905efd30e15e8b3bd655d3a2": "ae08b99b839360e6f6d715b277e0cf8b",
".git/objects/68/c0766535aa836bfa887b927a98735b70403113": "5b2f4f3e5e82ee608d735ff121204135",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/3b/d6bd9bc3631ad9dd3fc341fb445db1964a111d": "6d5de1cb419c50a954cc82d4e37d76bc",
".git/objects/03/6c3c5829c241f21a75ba57df7de56355422753": "7a2f83ca2656fe16e9b7a2749708d324",
".git/objects/04/9956581da80a7b56004cf20c6f6799373782ea": "e99ca2a5831a0fb33a487fd2870c1535",
".git/objects/6a/7f2d0a9cde8ba3a98663230b2689c6a5a53bb1": "ffd68215ab8a816670a9ae8219a3dfcb",
".git/objects/35/1846d65a136daa16099c465a085be0caec3295": "687605da43ac557faafd9279dd3f37e5",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3c/50400cc77583804b60ae7b2456e87e01298d20": "f1e885f50922bc0f7adebf672cca816f",
".git/objects/3c/d2064beeb5b7bf4db01c26c929323dfec809b2": "80201ba2e01e77a1dddd851526a5c723",
".git/objects/56/3713a8707a4e5a5acfe2e4eb7450fb1992177a": "d46748f2859fc27aa7bdf858b0936e44",
".git/objects/56/834e16c6c2c9e002de14f5276674a0b87288c0": "e448bcbbc15890df3d11b302cbd0852f",
".git/objects/51/3633ade8abdad2a448a0f99e58981ffe4bf714": "d7b6934f4e13e75f304e29b206a46811",
".git/objects/58/a548dc8cbb69ae831ba842c248a6a87d009553": "fbecca77dcfd9bffd1d159dc5ecf3c0b",
".git/objects/94/24e1173c0c89d01fe8801a6f00759cfc426253": "9ce8e87a6a68a174e61e104d21519eb5",
".git/objects/34/abc9cd119708ddbe8b7c123f334525c3e11a5c": "e6e88e99be87e67af3202d4a86f0a308",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/33/2881be47db80d16e897444f4b9048d333e372d": "c69d5c4811a3e56169f725c90a06da77",
".git/objects/05/e2d0233416b232f74c3583c2b5ea4ab216bd94": "8135ffb24985c17d642b1b77cac90e13",
".git/objects/05/6aa9315e3b3e28e5fdf2fbc50897858333bb97": "af4b31a6577832783600598582bd2928",
".git/objects/9c/55a01eaf121a08895190344cd6414571330467": "79cdd822ba71570fed6c20999470a71a",
".git/objects/9c/afefbbbd831859e5446ae779a72973be79d01b": "042de52473336c48f05c364bcfbcdd8e",
".git/objects/02/77581a7051a1438368275bda6af910b35e628b": "c716ff4bbda359d38438fe8ebf751e0f",
".git/objects/02/b07c066ea76a5d8071d3933db8a70e023ab6a8": "aa3051684db952f704aaf96ecc24c198",
".git/objects/a4/5c3e8984a8445a31ab2d4344261c31bbd72d16": "635f86a95995f9dad143396c71e590d3",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/ad/5e6c5151db54c5865cd23b09f0b162c704b446": "c342d012f2ea53068449a9408fb40d63",
".git/objects/bb/ee589b448cddb006ba5a0dbd693807c14801ba": "5e1386a9f437ab93311c29db5a6503cf",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/1fa15a01cde79ef11e70700aca39b1babd0a7d": "9ba4f09d933be0a484e099c816927bc6",
".git/objects/df/3ab894e0d3e0e1998f05c4f41a3055974c52b0": "495f1e600389564d790198996e245d6d",
".git/objects/df/5b17731b4bc5a1d887f247e8ca239a2bef2ee9": "fb70b02695ad64e9cdc9aa45e6f0132a",
".git/objects/a5/023029aaa623e7738d0bda558d9af5fb5d1ae3": "c8e2c31cb72d14018aa43a5b5dd40b09",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/d1/c2c41cac60ab617f7650e1328a53216deb889e": "44fe5daa79bf25de0c1fb915dbe93a56",
".git/objects/d6/9f933062530dc762f188c3cafd60c8a92366f9": "2bfc9b36195bf1d9c7ff9dd7ad2543e3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/f5a4c3ed474862db4339cc531889ae950da6b4": "2e84f08857613ec1430678fb80f28f3c",
".git/objects/bc/b46d2ed7c10ceaa58454f01122cc365afb8d16": "1e323b5452410b5abba374ac8529e73e",
".git/objects/ae/acfad52783eb669060f8e12fecdaa2fce10253": "d83d0dc1333ed5144b2a0b1b7eeea0e2",
".git/objects/ab/02bc850951cab3f397d3e22b7e816e75d5951e": "08f0579b9e38570ef81916ec9bb80093",
".git/objects/e5/8f0ea76a7f23804ef8a90b81c28acd8a0f312d": "484c087a267f0b581eed4e3c042ae0f5",
".git/objects/e2/3a74e7c8938aeaa95b2ad0211119181e62b151": "9c3d4846c9e034338cc1f05bd323cc7e",
".git/objects/f3/45a7fb3f74ff1d44ac70cb62e0d92b116c8765": "5fc8f51b5a7bfc4fc580149f30c19b95",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/b54559535516ae2abd0d3d371b8d234a38dc0e": "23713a37fbed87963d7b2c0f4428d851",
".git/objects/c0/9825219ec5e62cf3b469d195e2c1a680d84f61": "1d72d022b2e03c29b8fe9f607e00603b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e3/e1047a5d2c237b8e6aa7ab65166a2f5595f642": "00d39771f0170045b1ee44180b8fcd9e",
".git/objects/e4/1358512c81280a11d0fa6ce5b0781a2ab97859": "c81d88d904749ce914fa269a86ca742a",
".git/objects/fe/a552f20fd676b77ebab8da328ab7866de715d1": "278882c885bfa18b82339dc866cd46df",
".git/objects/c8/3360027fe98ca77b3e92e4f660f2214f6880ac": "a0e1ad6de75a816eeb3cdb7bfc3543e7",
".git/objects/c8/642dc83a0f5f400b58b338076f2564bffb4405": "d2ec88dcb11465dc40608466005c7480",
".git/objects/c8/1668de624725bc7e15cef88a32951e09c0dd9c": "2146adf8e07aae5df9288230c789c749",
".git/objects/c1/af98d2a0804eee409201f21a6c3078d9ddce48": "786846ccdb838109c4b1b1175450114e",
".git/objects/c6/94b74be0a0e930f707c4a91c6cc8891ef0ee09": "902c36a880c0be39be0e352dbfc492a5",
".git/objects/c6/3a77d3a745c4a2536705989235a72728361423": "74983842585849f5346248a7088f4ea6",
".git/objects/ec/79a2bcf91bed6262af59bee1f9847848a87619": "f6c49cb0be9a3e0892f2f71c67343621",
".git/objects/ec/8df3f16047b044784481cfb7a0d7bf7063e0c4": "dd201ee01fe09969208b54abe5524277",
".git/objects/4e/c535286121a08b7b1358c5035a14b4ed7bb3b3": "49da4e8fe95daefc95ba3aaa600b8323",
".git/objects/20/c198b0ffe86a5c75c9ef83a73adba2443445d1": "57794647c583fe1877d8c63bdd68cfb0",
".git/objects/18/18c8d19bfbada19cef17bbc52d74a8f3a6c9f7": "714f4838aa4ef8775bd21194aa58bf47",
".git/objects/18/24c858d9f4034af6757e358afc38e3d4b6fbf9": "4d0d3bfcdb399f62fec187044a9c3a22",
".git/objects/27/f3f7f3590d51a65ce268e37432f994502d8e98": "c5c28d662e5216c8e104dbfc576812e4",
".git/objects/27/bd8e72610056d2bf1577ac682111d2c4e50dac": "0bedd03887584282646c7652818b552b",
".git/objects/4b/d7f4e2557f64763db831a57e8b67d9974fe8c5": "7b8618eaaec1797d61b4f056bab402d4",
".git/objects/11/a37d1b992f4484b1855fcc769c986ee06c9bc0": "b34170e6d4ba1a70006df1f1aa29d8ca",
".git/objects/16/0d2315bc83d6f9261533937332930591cad20d": "5dee016568804947ca97a2483d64cb4e",
".git/objects/89/a4d41d0b9022264dfafb57cfb7f08abe088e03": "48e56039ed97054bf5572e1f83c09d80",
".git/objects/89/13da2ed912b42b877382147bac2e0b21146b9c": "7c55025cca1dee28593f9d1ce2faf8e2",
".git/objects/45/fd202c972d2306d978dbfb2d0a517c5e6aa754": "a741913ba7c27f25ee0c0693ec4348bf",
".git/objects/80/96bb15bc66548982f7b7a637738066e8f7509c": "19e334eeef81cea2af23f8106929aa47",
".git/objects/74/a5c06d8f366b76be0338010af56d2830e62956": "cb25db0ad4931884503d3a64fcc10047",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/042e59108dedf6b346075b7a474693b4cae379": "f54d590a574070e10c8ba03941c18b83",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/57c42c20e8349767a20f4860c802ad7016ee0f": "a4716325199952c195f812d38068bb54",
".git/objects/75/533944e006f5f39c20e3d747b93b3630c2cdb0": "e64c59bc791eef3fa5d062038c09a351",
".git/objects/75/b07427f6e62d6ffabcb2ca1f091bfbd24dca03": "bbb77cfd92ef981dd4bfc52a0f3f6977",
".git/objects/81/f935a341e93a0126187debd1a5cf1ef4462495": "5c9b390193d0600f50428b4fecb5efb3",
".git/objects/86/c485d2b6b0711f5cd3e3b212d8f70ec8442d99": "688634a125d3134b533ede7a45a79009",
".git/objects/2a/8d1914ca690f4c77075a083d7d5a721d803e07": "65d80186047030687b4f89148e5c9614",
".git/objects/2a/c4a916f40f9e63024838107405ff03aeb9d80b": "f7bbc4f9d81c60fe864f47949334a2b7",
".git/objects/2f/b3345276597246d3c7cae6221390cbd1f9ea9d": "aa7c02f310067147934a563633ce18c4",
".git/objects/2f/b24a4ea7b2a4fd761877b10a126a25c915bbed": "7c0e0b11f3a82999c77dac7a0e76c0e7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/480c05c5f9b47b1ca8ce7e115f090b20218258": "3cc36f69542ec39fa0e46b41bdb12047",
".git/objects/07/a94dfb065b55f88aee70202ed5c0afd3ac88e1": "40f473b64437b83230df0e63cd017e15",
".git/objects/6e/5981f89f7b63b1864739da6b24f658a1113cf0": "3ec6f2d040d495f11d92d5fb9c640c84",
".git/objects/5d/41f64b6eebbb51f5d9f53503bd372a51a61a8a": "d4c621f155575a05d7dc310e1f62ba3f",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/65/a9ec44f56470838ce7465dfb51aed3b0fde768": "72d850434b05159aa36b848fe5406df5",
".git/objects/3a/5e5c47116c6ea9f5a919e6251d53f267f0df86": "b35890690d0e26b364967410a4bf2183",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/54/e189a5e10377d6d2138e465d6396c22938fcd1": "d0e06df341d361aa0940517f58991dbe",
".git/objects/98/001f8429113eeb6b474640d286fcdac3e6d09a": "b0cef4b6ce642b182032b96bf952b19e",
".git/objects/98/5d82859a55329c8efac1813784760d76bb930b": "d771ca18185f6d1996206e9b33a7061d",
".git/objects/53/7a6a62407544028ce0e2f1d8f481144fcdb31d": "58904ae2361676abbf19efe539bceaf9",
".git/objects/53/4211382b0c69962213c1f64785e44579440453": "de2170d9589cf80b289cc0509fe050fc",
".git/objects/3f/c0fc179fdff3278c0d301c2e212d7abce15610": "0d40d24e5a9e97a01fd061ac702fa7b8",
".git/objects/5e/e4529e32808415a3da9d6f081001e497417d19": "b0cfbf11056763a8781c854049302594",
".git/objects/5e/6f605837bfd0c69f9580a52c6631a3b825dfa2": "943469e60812ea74f3e80c44770079bd",
".git/objects/5b/e20d08448bd89d87b7e8db28c94cf202918852": "c22c52d897edbfcac55eb76f92446f87",
".git/objects/5b/4c37e53d6c838c14bcac376c703d64f7a367f8": "aa3340fc5d293e3481d9017cb81d9089",
".git/objects/06/868c02b47b76caca74bc136561fbf8b0afc869": "ef436bc4324675d85e4d84f61eac884b",
".git/objects/99/e2aaccd3b3e4e5dca87382986cff45466865da": "526fcdee24a4dd267b111d3ed8fd0db1",
".git/objects/64/8a3b4a5b5af0e45a186ef22d8cf47fa3acbe9e": "8cf0eea6cf86631efa85419022868a89",
".git/objects/90/aa025dfe6ee3226a2aa3b256521676c438580f": "0a2d8272bfe23a9053a820339765f588",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/a0/087f82fd89effe339d0d04d7ba169151d3173a": "e4fef2526c8ea112d907a9a0568cebc4",
".git/objects/b8/ae2fc86a427a38adf71414a484cefebd133411": "c5a48d79cc53f2b899e977c5e1789dd7",
".git/objects/b8/e2b849b363766cc5793e5513cb396704f24de7": "2e0a3cc78cee86f6673b34c82218b3d1",
".git/objects/a9/bd2697138a6eed485ad194889ecad0efc2e333": "d341e3b39f63a232c2be60bce31cdbe5",
".git/objects/d5/23a1d1796ead9e1f165c02a5d04a8599796f70": "2f1237020cd661a4c1d215e01d9f65b3",
".git/objects/d5/b0eb70deec056133a7b949099b6e028d79ded2": "edc92dc09fe1cc1821b6e935515ca4d4",
".git/objects/aa/791ea3b9102e9cfab49726169dcd5f751d3ba1": "ace666cb62e9ee06cf923d1587cdb89b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/855b9886d27d58e054cf96bc8954ad00183434": "6aa042d3dd232bb34d46a3a5ded26464",
".git/objects/b7/019f6bfe56f16058939e7de9131bdbfe31b3e5": "cb2599ecc1fd20bdda57a1fdbda00846",
".git/objects/db/e4c242ac83735adb27a1f01021da8a45e480bc": "2182c301e7c07dd343885eb56ecf6f97",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/6a8eed91e6ab22b8890bf691ea1be36d8c0a54": "457c18e9255b70202a97695d77f7151a",
".git/objects/ea/52a455e4df041eeb00e78ddc4317c9a1229d9b": "3a5c68f34d7a3d1c15bb240c9c30b20e",
".git/objects/cd/8b8558b076b81cce686c67e0394a9dfc268e89": "03aef6697ed5ccc608850554713851a4",
".git/objects/cd/e9c9ac166d2c55e15b2940c2f734403779bf7a": "869f35bccadfcab81fd98edd55d6a290",
".git/objects/cd/a0db6721a4f42863ff1c9ad0ee97e01ceea6b7": "708e8335be86966b8911afa617bb2cf9",
".git/objects/cc/9a7ec09c9ecab147d11a7120e952bba6b8c22e": "3dacb7199cde06730b05d1c1bfdc81a8",
".git/objects/e6/cc1238dbc0b7ccf7f9688c5ed49177fcfbf8c9": "9cc5a5efdd3c45e2b3243d052fb3b9f1",
".git/objects/e6/c05749d02a663e1ef9926dc43aa7901aacb3e5": "d4a48baf5105fc4468c0b1853a8dba6b",
".git/objects/e8/5a32644c6e047a2e32bfe16548c013c53609e9": "cf50f0a5c6ecf5491d75eb1283481ebf",
".git/objects/e8/7c7c74a729c17f11be7f6698dd891a9df97eea": "7cd53339d1281e002434be0fe0c04a07",
".git/objects/fa/305362bb816019b2cedbac5c07207e3bc8e9dd": "e1792af39879275d31c8cb762f22af31",
".git/objects/ff/352956eb45b92ae611a32c7a60023ac4cd2154": "7312eb7bebf38224a26aac265df3b511",
".git/objects/c5/1be0fb33d3482f4e1088d26710016a69fe78f8": "a3db0fa58a460828aa7d565f6957f172",
".git/objects/c5/9212486c5ddfd0af8f6b79a8ae732b80cd5e34": "eee494ed7a7588a0783f0fab173e1e8c",
".git/objects/f6/119018f6f20e65a9f049382822ce9814e4f3d9": "eba614cdacb58462b3fc84cd9f790c03",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f1/d8bbf72bf922d5ce045c4490310027fc6fb4bd": "86ac2782bf945b63d14b4d842d0975db",
".git/objects/e7/8bbf204621188143e3556ac4051cbca4e0d4cc": "73a1a57b74f0389f832a5ada2c8359eb",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/00d585999554e459c7a527425d80e3527be88f": "80f89fe6d366c27b12286afeb4d3047c",
".git/objects/41/6cfe2f39c3dcf9530c068cf4e2b8abdc6f985b": "e39078af9113304966843523e96576d3",
".git/objects/1b/edde2c40f69ab5ca2b59e78aec471966c0732e": "78aabd1a888bced2b285f7d3c1c3744c",
".git/objects/77/e4f31dc21ca2e8636b30f66dbf5d3945e2f42c": "087237fdbf86930569024c618ff7c6bc",
".git/objects/70/73a687f4e0e864e16cb8a720ff9c52ccd09f02": "d51cb7f0262d37d170f4cc043ba75464",
".git/objects/1e/3b5543b0a2ad2ff3e4e1abf852d6f8f4eb6ffa": "4edc9d9c6f12e820fd177af258be9c7f",
".git/objects/1e/ac3e83e1eb1e96fe28719798fdc423ddf76671": "128f5d37ca49dde59009b95951dcbe83",
".git/objects/84/71e5b1475a7e2b6488d590998a3513833141a0": "9b20c75c61ee876fb456e69a91682596",
".git/objects/4f/162c5436dfe5d92dca8ae2d9583eaab391193a": "0908053b153177d8f988c08bae6bed07",
".git/objects/4f/35bd697d97abcc81df9ed04987ebf3aa22d3a1": "298cfce156bca2535e266843999f221a",
".git/objects/8d/0555367f453f2f326739c96765d1a2c5812543": "90166d4eb8a5c0e9a81e4b02a447529e",
".git/objects/8c/d9b51f08fc1f589e2ff824132db6b71c536a9c": "527e2bf5182a3d26943b4d08e1df5589",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/71/74cb2cb412dd4f8abae41c0712142a85d52f35": "b70504ed1a1627413a3ba76e6b3d9a3e",
".git/objects/71/f5429493fe73ea49efb3cd2aa5dca649103de3": "2ea189e18aedb1dfddc6e71824381f58",
".git/objects/71/b70592360f6f4b5c816a7b41cca603553d9c20": "a7eb6e2ce929d2fc9a281167485c538d",
".git/objects/1c/d705420131993c600dce9c3000d146fe902048": "f8923a9dc6e61f269fdb14294dbe50d9",
".git/objects/1c/695be031e53652498193e407ce634c9340161b": "e15a3146dc58b9af96b9aa454b4affe7",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/2e/679a6a358d69736332821dae53d82d55e2a67b": "04b8a68cc6e3f5dd5fa3745b1c49bf23",
".git/objects/8b/4491ac9acfc8f610e774903dd89a77bb8a200e": "5f6b376fe6b9ee4f562e73ec2b6e4a6b",
".git/objects/22/0311b3a31f5cd08dd3bcc6045d24c17cc96569": "5ace3c3d9691f6a3547f133c2a6fd13d",
".git/objects/25/438b67352b4acab285ed378bca81c95d3de795": "8af7dd07b2f5ee8ce2d99b8e3b6c6d3b",
".git/objects/25/189425adfb4977e6cb42b3566d85b50da8a179": "c8fb6633ac05284063bcb07524a9d6ca",
".git/HEAD": "50e80eba1a65dcf15e794b664a6a4268",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "00e07b8a9bb3a032643fc87edf2b60f3",
".git/logs/refs/heads/vibe": "00e07b8a9bb3a032643fc87edf2b60f3",
".git/logs/refs/remotes/origin/UpdateFamily": "4d01cabbe0d9af49abe0f623baf3d952",
".git/logs/refs/remotes/origin/web3": "ef4b2c8d0f21cfcb41ffac8b322fce6a",
".git/logs/refs/remotes/origin/web-build2": "af6f4dc8e670e80c5b3f1738b7471223",
".git/logs/refs/remotes/origin/vibe": "5c5ba87a77efdc15a6b38bba7ce5fed2",
".git/logs/refs/remotes/origin/main": "332dd7aa2cc467e2bab25311d4ba7b81",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/vibe": "cba59ef4a9f4c6e7f0b59c825076f6a9",
".git/refs/remotes/origin/UpdateFamily": "eefb36ab5cd1eaf15e0df90e76bcd0bc",
".git/refs/remotes/origin/web3": "2acb2bab58a7c67b4d03a9a5c3587bdd",
".git/refs/remotes/origin/web-build2": "9dd38511382f7280c8f3f73c99ba0496",
".git/refs/remotes/origin/vibe": "cba59ef4a9f4c6e7f0b59c825076f6a9",
".git/refs/remotes/origin/main": "6b9bea47d75750ddeecafe28dc2fe4af",
".git/index": "f18dec25d869844632391cd7bcc72111",
".git/COMMIT_EDITMSG": "be432133709d4a2c5d361e4084550bf3",
".git/FETCH_HEAD": "a00a312a6f1d20db74f3e45ac55b53aa",
"assets/AssetManifest.json": "98814d5cd441555434a52d6ff21e54e4",
"assets/NOTICES": "891bc34b37077a9502adff4730e9381b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "b36af745d1fd447ab0933c6013229a45",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "70a955351b326c9c953e5c1e169c7cbc",
"assets/fonts/MaterialIcons-Regular.otf": "2717908bdd53e290d6cc58795e418f9c",
"assets/assets/images/add.png": "a08b4c81e8d6c1f8d906f12f990fb720",
"assets/assets/images/record.png": "6c3ae6a514e15731069cf75880d9e9aa",
"assets/assets/images/analysis_background.png": "53725c50c58df759fa0fbe19c311ccb5",
"assets/assets/images/diabete.png": "3bae60fe8d1902cf9df98e20530d4975",
"assets/assets/images/Group.png": "66c8730d0165a8283d473f9b5d0ba38c",
"assets/assets/images/sleep.png": "5c62f2c7414342f9334fb574299c2458",
"assets/assets/images/Vector.png": "306ecb8927cda9bdc0e764a76befab03",
"assets/assets/images/doctor.png": "f3f802643f575186927379fbeb71eb15",
"assets/assets/images/family.png": "22720308fd994ea1b7ebcc1c0ab07680",
"assets/assets/images/home.png": "1cb8603eca970553b7d2a5f5ea440084",
"assets/assets/images/Rectangle.png": "3177567392a4883a4844cd0b3773c118",
"assets/assets/images/HomeBackground.png": "09d6ee6de737e0ea392aab48caf7ebe0",
"assets/assets/images/blood.png": "7d1af5da4870f855deb4072590966c25",
"assets/assets/images/background.png": "d6a1024b086c0d1183aba3f709aa3dbf",
"assets/assets/images/wesync.png": "c2b71bb5c66c68bd0e4b42c83f300483",
"assets/assets/images/history.png": "7f494389868926cab77210c39616b603",
"assets/assets/images/walking.png": "91c67582dcb04d342be0224735167e69",
"assets/assets/images/logo.png": "1dcf288c900f8ae6bcfbb71009d2d965",
"assets/assets/images/logo2.png": "307747ef287c408707c979d7237282ed",
"assets/assets/images/water.png": "bfd4963b3bc511efa49c38d7f7e65595",
"assets/assets/images/vital.png": "306ecb8927cda9bdc0e764a76befab03",
"assets/assets/images/family_background.png": "2a2c9087d551b539d9c7cb842021a3ed",
"assets/assets/images/analysis.png": "8f778c6769fddfb03f88ac1ed24376ca",
"assets/assets/images/kdmahnak.jpg": "636ba0c9f24f4f7bb0b8fef7acf7929f",
"assets/assets/images/patient.png": "64f0b726ca376f22a078a299378afd27",
"assets/assets/images/report.png": "90e9daabddb2f3f24fefc21b4c4921fe",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
