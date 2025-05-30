// src/data/tokens.ts

export interface Token {
  address: string;
  name: string;
  symbol: string;
  price: number;
  makerFee: number;
  takerFee: number;
}

const tokenDataRaw: Record<string, { name: string; symbol: string; last_price: number; maker_fee: number; taker_fee: number }> = {
  "0x78B050d981d7f6E019Bf6E361D0d1167de6B19dA": {
    "name": "Ether",
    "symbol": "ETH",
    "last_price": 2565.38323083957,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xA55F26319462355474A9F2c8790860776a329aA4": {
    "name": "Wrapped NRG",
    "symbol": "WNRG",
    "last_price": 0.0300836951029058,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x52B16632A9ed3977D7D701108bD548Ce693b610c": {
    "name": "Pepe",
    "symbol": "PEPE",
    "last_price": 0.000013309195952924,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xFFD7510ca0a3279c7a5F50018A26c21d5bc1DBcF": {
    "name": "USD Coin",
    "symbol": "USDC",
    "last_price": 0.999170485966784,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x29a791703e5A5A8D1578F8611b4D3691377CEbc0": {
    "name": "Bitcoin",
    "symbol": "BTC",
    "last_price": 106226.156275708,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x0ee5893f434017d8881750101Ea2F7c49c0eb503": {
    "name": "Dai Stablecoin",
    "symbol": "DAI",
    "last_price": 1.00721782056376,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x9d1a68399D14e1cf31dE846b69BA8E70b87a711F": {
    "name": "Dogecoin",
    "symbol": "DOGE",
    "last_price": 0.225457204877327,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x34f0411586d2A077499d4E11AD0CC575b06A1556": {
    "name": "XRP",
    "symbol": "XRP",
    "last_price": 2.37616676719239,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xC3C19Ee91cF3C1F7Fbf3716a09d21dC35De0bd6d": {
    "name": "Binance Coin",
    "symbol": "BNB",
    "last_price": 651.313134059521,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xA7F2f790355E0C32CAb03f92F6EB7f488E6F049a": {
    "name": "Aave",
    "symbol": "AAVE",
    "last_price": 265.876789839125,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x0F46Fe95a8d6573990118AEE8b7AC9A3532f5963": {
    "name": "Energi Dollar",
    "symbol": "USDE",
    "last_price": 0.987452229370779,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xD7B8710f5713D2739dA301A5ecdB8b6fFB5ec60D": {
    "name": "Avalanche",
    "symbol": "AVAX",
    "last_price": 22.3978873890957,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x98997E1651919fAeacEe7B96aFbB3DfD96cb6036": {
    "name": "Polygon",
    "symbol": "MATIC",
    "last_price": 0.243508611725367,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x7FFABDADa3ea65D32a6CCC7a1f20c0D071286535": {
    "name": "Stacks",
    "symbol": "STX",
    "last_price": 0.860372058152233,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x21a5230038C8C849d2FFb0d3ce762228Ed245237": {
    "name": "Litecoin",
    "symbol": "LTC",
    "last_price": 97.2092530177996,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x2208824Cd05Ac473D5F92D39b28F145D481669de": {
    "name": "Polkadot",
    "symbol": "DOT",
    "last_price": 4.6412588946471,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xD1C63C41455afAEe16484e0896B7260CBB89e95B": {
    "name": "Near",
    "symbol": "NEAR",
    "last_price": 2.84462624769531,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x665B3A802979eC24e076c80025bFF33c18eB6007": {
    "name": "Uniswap",
    "symbol": "UNI",
    "last_price": 6.02016045918126,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xE13B07C79De28Bd34D021663744258ec456E8484": {
    "name": "Cardano",
    "symbol": "ADA",
    "last_price": 0.744770331529267,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xce6A83632aB102ff004282AE73F34AAD4C49447F": {
    "name": "VeChain",
    "symbol": "VET",
    "last_price": 0.0283086363159183,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x73a4AC88c12D66AD08c1cfC891bF47883919ba74": {
    "name": "SAND",
    "symbol": "SAND",
    "last_price": 0.311380312600927,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x68Ca48cA2626c415A89756471D4ADe2CC9034008": {
    "name": "Chainlink",
    "symbol": "LINK",
    "last_price": 16.2556477152137,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x7f3c85AB5D87f8eB8F19B545AC09a7FDd49e2B6c": {
    "name": "THORChain",
    "symbol": "RUNE",
    "last_price": 1.78982859765308,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xEbC564e6997F11fA7606fD5a84c7082ad53abE4b": {
    "name": "Ethereum Classic",
    "symbol": "ETC",
    "last_price": 18.5530192662287,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x46dBd9e16c42feD902e9D35c7Bd3c9f6A3cB6321": {
    "name": "PancakeSwap",
    "symbol": "CAKE",
    "last_price": 2.28459902751245,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x65622f8e8b569aDE3F684B5F2a189F78F98A75b0": {
    "name": "THETA",
    "symbol": "THETA",
    "last_price": 0.907781848327756,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xE469960B138abBfD4c82147393e955C537bB6b54": {
    "name": "Decentraland",
    "symbol": "MANA",
    "last_price": 0.325396226792341,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x050317d93f29D1bA5FF3EaC3b8157fD4E345588D": {
    "name": "Maker",
    "symbol": "MKR",
    "last_price": 1781.10432562553,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x881145b61c604D4d27B8969B917BC4844Cc8A9dC": {
    "name": "Solana",
    "symbol": "SOL",
    "last_price": 169.788415065644,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xC61382eC7C236211207575cB75410546da98be17": {
    "name": "Nervos Network",
    "symbol": "CKB",
    "last_price": 0.00522217799998615,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x23f9918ee9CA163F6087aA9a8fCA1c92626F062A": {
    "name": "Elrond",
    "symbol": "EGLD",
    "last_price": 18.4763247826993,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x0883E6c6f1644BB5567865DCD5B286D92031eE20": {
    "name": "Algorand",
    "symbol": "ALGO",
    "last_price": 0.226029663419847,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x59aB18fE5990E45e5E508930eEF3369DB7A422f5": {
    "name": "Siacoin",
    "symbol": "SC",
    "last_price": 0.0034604224020863,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xC439E2053a97862D84FCF52629330C3e3a2D31f2": {
    "name": "Hedera Hashgraph",
    "symbol": "HBAR",
    "last_price": 0.195630542000187,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xC424de9851dFAFB5d30b7Ec034EB00c22e1B537c": {
    "name": "DigiByte",
    "symbol": "DGB",
    "last_price": 0.0102634859923479,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xbb73A680B1A1085Bed5B41f6077F692ae04EF6a8": {
    "name": "Oasis Network",
    "symbol": "ROSE",
    "last_price": 0.0339862281981134,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xD001188ee1830425fD2B0Fb21f6F3bB79BaB161E": {
    "name": "Harmony",
    "symbol": "ONE",
    "last_price": 0.0141515476906244,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xC0Cd560393A3fAD67486B10BBb461eD2a42DD882": {
    "name": "Stellar",
    "symbol": "XLM",
    "last_price": 0.286291266745827,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xe2b7ed0b29C445F701b5954D71463beB8A77c085": {
    "name": "Horizen",
    "symbol": "ZEN",
    "last_price": 9.23443060564407,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x5cB7423aEd7173eE3209408E0963f4600a7A05cd": {
    "name": "Nano",
    "symbol": "NANO",
    "last_price": 0.960190649209683,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xd3319EAF3c4743ac75AaCE77befCFA445Ed6E69E": {
    "name": "Curve DAO",
    "symbol": "CRV",
    "last_price": 0.740048926593972,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x77f38fAB153FDb599c5983533df0c894C2B7DD76": {
    "name": "Helium",
    "symbol": "HNT",
    "last_price": 3.98229034834839,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xb69708fFD2699FeDd7e62a4e26055A117e7369f0": {
    "name": "Monero",
    "symbol": "XMR",
    "last_price": 348.448579845339,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xfe39fb0A69AcD40c3fe4FE71C813AD9F371dD28f": {
    "name": "IOST",
    "symbol": "IOST",
    "last_price": 0.0038633147010913,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xdf46057212Dc0476C845fad421aAC683608458a2": {
    "name": "Kusama",
    "symbol": "KSM",
    "last_price": 18.7779987201192,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xe59028425E3D3Cb0B9F71F9E18345bE517364d91": {
    "name": "Zilliqa",
    "symbol": "ZIL",
    "last_price": 0.0128793700172925,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x12490d720747E312bE64029Dfd475837Ed285cFe": {
    "name": "SafePal",
    "symbol": "SFP",
    "last_price": 0.55773957084508,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xF452bff8e958C6F335F06fC3aAc427Ee195366fE": {
    "name": "Gnosis",
    "symbol": "GNO",
    "last_price": 135.984811855403,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x1833e138fadf220Eb951A8590B8BA9058785DDDe": {
    "name": "Celer Network",
    "symbol": "CELR",
    "last_price": 0.0100592266634061,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x4bdAC5441C79de6709839dD06Ba407D5b386f2fb": {
    "name": "Decred",
    "symbol": "DCR",
    "last_price": 15.3142028324648,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x02C6c53930B20BCEd86Ddf64007BEBcd923e1093": {
    "name": "QuarkChain",
    "symbol": "QKC",
    "last_price": 0.00765352235887333,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xAD7ABE6f12F1059bDf48aE67bfF92B00438ceD95": {
    "name": "Amp",
    "symbol": "AMP",
    "last_price": 0.00465910115559663,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x241eBDFDfbED02c6e727562777C902E54eEE53c3": {
    "name": "Kava.io",
    "symbol": "KAVA",
    "last_price": 0.428976689581131,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xcDe71daaFFB6a12d584f55777D4c9e9D3c353c1E": {
    "name": "Storj",
    "symbol": "STORJ",
    "last_price": 0.297951459574263,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x0AfE3ff501cF4a7f6dD510D32d90e4D8aC963ABD": {
    "name": "RSK Infrastructure Framework",
    "symbol": "RIF",
    "last_price": 0.0557906398194333,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x1a4d26bD3E3Eaf582aC47E7B566A915e52d2Adf5": {
    "name": "Hive",
    "symbol": "HIVE",
    "last_price": 0.260983731358336,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x923E363CBa492D2c448B4bed7717f3D090851A8a": {
    "name": "Ravencoin",
    "symbol": "RVN",
    "last_price": 0.0126349305713782,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xD30b72eA55f9c6340B848D1A57ebBf159e7079B9": {
    "name": "Ontology",
    "symbol": "ONT",
    "last_price": 0.152465054102291,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x456b1366783D0F5FBf0bBb89E7c9476AB328Db84": {
    "name": "Ankr",
    "symbol": "ANKR",
    "last_price": 0.0188586805212135,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x35eF8875672b072e38e87Ebe22A0aa3965534584": {
    "name": "Celo",
    "symbol": "CELO",
    "last_price": 0.388008178597737,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xf3ff3bF1d1afCbeBD98A304482c4099Dc953E9a8": {
    "name": "Golem",
    "symbol": "GLM",
    "last_price": 0.268088237866302,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x470075Cf46e6132aaD78C40a1BE53a494b05E831": {
    "name": "Tether USD",
    "symbol": "USDT",
    "last_price": 0.987451730459993,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x4Bd75f8c7E067Ea9B6E2DFBECd99d805396bC5FF": {
    "name": "Aavegotchi",
    "symbol": "GHST",
    "last_price": 0.513337740565399,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xb8dF08566f48b25C8b960e829BAdf79a4740dDc2": {
    "name": "CertiK",
    "symbol": "CTK",
    "last_price": 0.34544881082666,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xF8A425E39aF1976e1826f0C8843149AfA5e9Ec04": {
    "name": "Filecoin",
    "symbol": "FIL",
    "last_price": 2.87278721461414,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xee15d16a31F24b8c4e249D75878b3F6d4086Ad2e": {
    "name": "Travala.com",
    "symbol": "AVA",
    "last_price": 0.625538145165193,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x6b2972207c550964E12c4d30CB87a69dc53ac0D3": {
    "name": "Zcash",
    "symbol": "ZEC",
    "last_price": 40.6149394375864,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xa5526097203C4C3a9d8bD5810ff0A7C9AECE58C4": {
    "name": "Tellor",
    "symbol": "TRB",
    "last_price": 31.3448113439734,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xaFB4942F45a01c67C83d969EA83129926e05f6Fe": {
    "name": "Qtum",
    "symbol": "QTUM",
    "last_price": 2.30587093194071,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xDDa6205Dc3f47e5280Eb726613B27374Eee9D130": {
    "name": "1inch",
    "symbol": "1INCH",
    "last_price": 0.227921006179769,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x34b97EEaB6FD9BBe95A5eAF4645307c5a6f3D4d0": {
    "name": "Holo",
    "symbol": "HOT",
    "last_price": 0.00115418262315714,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x4fffe0168b04f039496ca5189f9596c22693A19c": {
    "name": "IoTeX",
    "symbol": "IOTX",
    "last_price": 0.0206752422207591,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x6bb14afEdC740dCE4904B7a65807fE3b967f4c94": {
    "name": "Status",
    "symbol": "SNT",
    "last_price": 0.0286113190647723,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xFAA02b262130431B44c929fDd960e202fFEABfE3": {
    "name": "Trust Wallet Token",
    "symbol": "TWT",
    "last_price": 0.835274475640732,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xaFDf614Ea3E1c0d93730f6Fc31f23BA30F17eCeA": {
    "name": "Fantom",
    "symbol": "FTM",
    "last_price": 0.544308935022952,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xfcE13BB63B60f6e20ed846ae73ed242D29129800": {
    "name": "Reserve Rights",
    "symbol": "RSR",
    "last_price": 0.00871068609935806,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xf7a1d806dA81242319Cfd6407a49a39b5517C877": {
    "name": "SuperFarm",
    "symbol": "SUPER",
    "last_price": 0.791691185177787,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x79786Ed8a70ccEC6C7A31debC7FeFc5119f9dc95": {
    "name": "Ampleforth",
    "symbol": "AMPL",
    "last_price": 1.18690266698657,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x746514E2c7D91E1e84C20c54d1F6F537b28A7d8e": {
    "name": "Mask Network",
    "symbol": "MASK",
    "last_price": 1.81090509484248,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x3e85A2A0Da09780208A5a3bf6C371bF752175a97": {
    "name": "Tomochain",
    "symbol": "TOMO",
    "last_price": 0.23177539896452,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xD4A161EAA78E77Eb2Af35D8E5BBDcF6af07a6835": {
    "name": "Bitcoin Cash",
    "symbol": "BCH",
    "last_price": 396.280112509794,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xD821dB2439ECF24e5A623079c783E951646da449": {
    "name": "Cosmos",
    "symbol": "ATOM",
    "last_price": 4.85544695651197,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x591C19DC0821704BEDAA5Bbc6A66fee277d9437e": {
    "name": "0x",
    "symbol": "ZRX",
    "last_price": 0.273263237003408,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xB9D26bCD5a865eB0C9420C45BF0B59a77787Ff98": {
    "name": "ICON",
    "symbol": "ICX",
    "last_price": 0.108165707328447,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x13cA6f2ec4045Dae6E052268e12d0D3d2Cea0bf9": {
    "name": "Komodo",
    "symbol": "KMD",
    "last_price": 0.143045021464784,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xDc5F62055A2911F85cF16Df9f7662403387c8d46": {
    "name": "TRON",
    "symbol": "TRX",
    "last_price": 0.270768212697649,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xE8d81BD45c9cB01813031F66ABe10bd3de3551Bb": {
    "name": "Ardor",
    "symbol": "ARDR",
    "last_price": 0.0984638016457267,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x18Cd49ABDAf652EAB2C802608CD63F9505a15bC0": {
    "name": "Steem",
    "symbol": "STEEM",
    "last_price": 0.149703378992419,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xa82fc24687fFbDe40776DeDe7C70F845b67f3EF7": {
    "name": "Chiliz",
    "symbol": "CHZ",
    "last_price": 0.0444483783753891,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x003d765F3793DE38AD5eA9D5FD0021cF12C3bA68": {
    "name": "ECOMI",
    "symbol": "OMI",
    "last_price": 0.000202731915951954,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xC51D97a1FD0Fd93fa16c3aEea4e42F7034D0a6EF": {
    "name": "EOS",
    "symbol": "EOS",
    "last_price": 0.781341611297642,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x81639e65b88873675Ae76427537Ba3BCA4c7d1f0": {
    "name": "Wanchain",
    "symbol": "WAN",
    "last_price": 0.124833196440421,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xd72922E849477a042a7E6DC84309F4bC1C1227A2": {
    "name": "Numeraire",
    "symbol": "NMR",
    "last_price": 9.22015688464546,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x32Aff6ADC46331dAc93E608A9CD4b0332d93a23a": {
    "name": "Sushi",
    "symbol": "SUSHI",
    "last_price": 0.727896798677517,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xD2D28530A79634423154c1FD5BDb7C1B0216cD1A": {
    "name": "Metal",
    "symbol": "MTL",
    "last_price": 0.823984076482017,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x771513bA693D457Df3678c951c448701f2eAAad5": {
    "name": "The Graph",
    "symbol": "GRT",
    "last_price": 0.111784155999666,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xDA79DcF81c948Dfb85CBdA738Bc898195A2Ba861": {
    "name": "FTX Token",
    "symbol": "FTT",
    "last_price": 1.27516465104924,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x2b02cd785e30a6831d41027449FB58CA62Ba157F": {
    "name": "Ark",
    "symbol": "ARK",
    "last_price": 0.412861834019126,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x32e6842a6ea6a913687885aC856c2493b5b12F6f": {
    "name": "BADGER",
    "symbol": "BADGER",
    "last_price": 1.26724743521098,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x762204d444123BCC511718A24158A86E3D853266": {
    "name": "HEGIC",
    "symbol": "HEGIC",
    "last_price": 0.0371283471581,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x2A7ed4A3e15f036d86a28271BEe580D8682A1eea": {
    "name": "Syscoin",
    "symbol": "SYS",
    "last_price": 0.0544121856434156,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x2464dD0E7eeCA2b880ECF15C7AB3A81790e0aD4C": {
    "name": "Neo",
    "symbol": "NEO",
    "last_price": 6.57855741368311,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x7fDb933327aa6989ae706001c2EA54BA5E046e79": {
    "name": "Shiba Inu",
    "symbol": "SHIB",
    "last_price": 0.0000146727222323,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x3FA2C976654A6BA6DCb1e532a4B1E31Fd4DCd3b9": {
    "name": "Bluzelle",
    "symbol": "BLZ",
    "last_price": 0.0444317898662056,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xd9dd4B6764946B354CBFc85F5C1C6fF7BccB01e3": {
    "name": "Rarible",
    "symbol": "RARI",
    "last_price": 1.23724363334156,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x9Bb3Ca9e1b664030cd4CF820F5b3230F2386e0c6": {
    "name": "IOTA",
    "symbol": "MIOTA",
    "last_price": 0.224220763648455,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x117fe461FFCF40C2a5A6d95FFC7FE151d243bAD2": {
    "name": "DUSK Network",
    "symbol": "DUSK",
    "last_price": 0.0884415639518139,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xa34146187bF01B368017ab3555D1078380aaDB4b": {
    "name": "COTI",
    "symbol": "COTI",
    "last_price": 0.0715567737512609,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xA2f452358CA632be20BAd0a60dE51d3F0fd59910": {
    "name": "district0x",
    "symbol": "DNT",
    "last_price": 0.0303509975144759,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x9419e8EdCF570a71eB0dd006602949742B711a80": {
    "name": "Bancor",
    "symbol": "BNT",
    "last_price": 0.738674888636921,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xe854f0AA927C5244a38336548b11E903721fCa53": {
    "name": "Tezos",
    "symbol": "XTZ",
    "last_price": 0.622273322346813,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xCF0a240Ce14d80287C993611419A4AeFAe269Ef3": {
    "name": "DeFiPulse Index",
    "symbol": "DPI",
    "last_price": 91.9617590551976,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x3A5B18733c8807508138b0Fa74eb612b9E70F001": {
    "name": "BitShares",
    "symbol": "BTS",
    "last_price": 0.00111662821608241,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xd02538b3B96564aDCf4382DCE60dfa3C26114519": {
    "name": "NEM",
    "symbol": "XEM",
    "last_price": 0.0135673780958135,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x132E2cd6A9bB3c53E3b0de1c4Eb005ED1BE01417": {
    "name": "Dash",
    "symbol": "DASH",
    "last_price": 23.7015071125299,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x202317a4046fF991B97F9278D5988993DF5ED26e": {
    "name": "Nexus",
    "symbol": "NXS",
    "last_price": 0.0218206394834643,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x52Af68F0Ff7452DADf8694Be0af11E52dF936Fb4": {
    "name": "UMA",
    "symbol": "UMA",
    "last_price": 1.20033279742397,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x462B35452E552A66B519EcF70aEdb1835d434965": {
    "name": "Quant",
    "symbol": "QNT",
    "last_price": 96.3074313898497,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x1e3EEd9c1eba5e5114D4c185DC71d13c3C66dd84": {
    "name": "Origin Protocol",
    "symbol": "OGN",
    "last_price": 0.0651114393774528,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x827c3f7FFa144598144F1E10ec9E157B5a0ABA18": {
    "name": "Secret",
    "symbol": "SCRT",
    "last_price": 0.215691940246384,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x193Da10f8A969D4C081b9097B15337b1488CBbEC": {
    "name": "Loopring",
    "symbol": "LRC",
    "last_price": 0.110349029655526,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x2A2666F62157769D09A64488Bbb51bD77036F6CE": {
    "name": "Augur",
    "symbol": "REP",
    "last_price": 1.14541507945776,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x4B3686EEc98b2b89102F2830003097C7D4e1f691": {
    "name": "Aragon",
    "symbol": "ANT",
    "last_price": 0.187839136855983,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x86670E263ef2bE4E1110A08AE418483b07f2544b": {
    "name": "Keep Network",
    "symbol": "KEEP",
    "last_price": 0.0832209030313354,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x324A1e5707F356218356C95cFe20D5D9b1440f30": {
    "name": "Trustswap",
    "symbol": "SWAP",
    "last_price": 0.0990591113174467,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x81888a2B486670f70c2c5F8e394519939da01524": {
    "name": "OMG Network",
    "symbol": "OMG",
    "last_price": 0.20491961097742,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x516A98c8D473904e26Fd60dE9cb3fC4cA9869CFa": {
    "name": "Waves",
    "symbol": "WAVES",
    "last_price": 1.33913085626388,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x2483a716A4A5476da5E657be13A37Cf62b608AB6": {
    "name": "Populous",
    "symbol": "PPT",
    "last_price": 0.0846801134667528,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xb2Ef65460BF71a05d59FDf5e8F114A32d445D164": {
    "name": "Band Protocol",
    "symbol": "BAND",
    "last_price": 0.777686450508113,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x3e44694d00835cB8187CA32828C8Bd7480778048": {
    "name": "bZx Protocol",
    "symbol": "BZRX",
    "last_price": 0.00567380678957659,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x04cd06cf05b816F09395375f0143584B4A95eA9f": {
    "name": "FunFair",
    "symbol": "FUN",
    "last_price": 0.00474446265214301,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x5d6b480d7B11656BA575E5883Dce50809C619732": {
    "name": "Cream",
    "symbol": "CREAM",
    "last_price": 1.53154722140806,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x44F26117E6c7f6Aa4Ba8C9F068246f973423bcd0": {
    "name": "NuCypher",
    "symbol": "NU",
    "last_price": 0.0565484343207132,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x0702bf2aBBB53f8fEB101A71199965b891dbAE97": {
    "name": "MAPS",
    "symbol": "MAPS",
    "last_price": 0.0163640379373239,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x2C25972d4AdB478773bE354a09E4596f29E31fb3": {
    "name": "Audius",
    "symbol": "AUDIO",
    "last_price": 0.0758266887833924,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xDb045876525A707f4E150D3D64868E50893a79ba": {
    "name": "Polkastarter",
    "symbol": "POLS",
    "last_price": 0.245178939613403,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x4Fec4E046E6B8dE5D22785C3FbdB104F14F5A306": {
    "name": "DODO",
    "symbol": "DODO",
    "last_price": 0.0532613063425185,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x0894840ba7d57c7Adf2cAf8fd3c41Eb79AF5B8e7": {
    "name": "WazirX",
    "symbol": "WRX",
    "last_price": 0.0325762858344938,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x66bC411714e16B6F0C68be12bD9c666cc4576063": {
    "name": "Compound",
    "symbol": "COMP",
    "last_price": 43.8608863791181,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x723E54fB61BEeC583B3a5cE80a4484CF5E816F99": {
    "name": "Bao Finance",
    "symbol": "BAO",
    "last_price": 0.000005181404791218,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xbF8afa4663B30c621a5f7497a972Fc63c1a06c66": {
    "name": "PAX Gold",
    "symbol": "PAXG",
    "last_price": 3224.68685641093,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xf4D3AC1322BaE5B0b7b49b4C582941131c5e0A82": {
    "name": "Lisk",
    "symbol": "LSK",
    "last_price": 0.528523550984024,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xa255461fF545d6ecE153283f421D67D2DE5D0E29": {
    "name": "Synthetix",
    "symbol": "SNX",
    "last_price": 0.851305972696245,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xAf86Af19fE816afa951596be5E379C7d728622D8": {
    "name": "Loom",
    "symbol": "LOOM",
    "last_price": 0.00521172134150859,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x09F24E5E54dB6705df1a1a71D2Bd5eAC0d692beA": {
    "name": "Keep3rV1",
    "symbol": "KP3R",
    "last_price": 7.36522118983403,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x204a90B57d15417864080df1Cd6e907831c206A6": {
    "name": "Enjin Coin",
    "symbol": "ENJ",
    "last_price": 0.0882220721606155,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x81d9458b4e2ec614e7FCFC303D331F33d986F9BE": {
    "name": "Hifi Finance",
    "symbol": "MFT",
    "last_price": 0.00295948418304703,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x99A17fB61fBDc4E42F6b0f496fe92Ba820CE5d2b": {
    "name": "Ocean Protocol",
    "symbol": "OCEAN",
    "last_price": 0.331440134336362,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x04640Dc771eDd73cbeB934FB5461674830BAea11": {
    "name": "Nexo",
    "symbol": "NEXO",
    "last_price": 1.26474399020328,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x83AF4137Ed450F4765A72831Dd938B5203f5d2Fb": {
    "name": "Serum",
    "symbol": "SRM",
    "last_price": 0.0206617306405911,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x1bf6eA422574E0F5d336083a771768Cb4e11390d": {
    "name": "Pundi X",
    "symbol": "NPXS",
    "last_price": 0.000008695133923323,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x09319044A98e6Bb4D95a6C112789AFcEBE5B58AC": {
    "name": "saffron.finance",
    "symbol": "SFI",
    "last_price": 26.5414417632191,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x96717283E442FfCE9b636f004C196517a72eE4cA": {
    "name": "Aion",
    "symbol": "AION",
    "last_price": 0.000830144970818304,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x05D1C70c98f0Bc85001CA36dE589397243754e33": {
    "name": "HARD Protocol",
    "symbol": "HARD",
    "last_price": 0.00925405516651095,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x83ab721c8B3Dd30AD711460f666371366550C5A7": {
    "name": "Ren",
    "symbol": "REN",
    "last_price": 0.0137579374595645,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xda319365F512B165Df8827365AF680550e98058F": {
    "name": "Perpetual Protocol",
    "symbol": "PERP",
    "last_price": 0.280858539614648,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xba71E0c0b13E724bF2329eCb9BdF5775a2Ce9e8d": {
    "name": "DFI.money",
    "symbol": "YFII",
    "last_price": 194.776304480967,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xE99BBD3b25A014Aac93127Cf868d3De07386c4DD": {
    "name": "Polymath Network",
    "symbol": "POLY",
    "last_price": 0.0979687902718447,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xF2176b1089c92FC0631bACBB36DD9F604f698b4E": {
    "name": "KeeperDAO",
    "symbol": "ROOK",
    "last_price": 0.616645536918367,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x05B357201B31093A13a22d76dE1b1eb23aD83017": {
    "name": "Alpha Finance",
    "symbol": "ALPHA",
    "last_price": 0.0320027103580374,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xF4BB0ED25Ac7bcc9c327B88BaC5CA288A08eC41e": {
    "name": "Rari Governance Token",
    "symbol": "RGT",
    "last_price": 0.10337467192806,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xD1BBC2A68B97A8aE4b423BbF534e767Ef6275a30": {
    "name": "Power Ledger",
    "symbol": "POWR",
    "last_price": 0.184445747978038,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xB9acFE14eF575Cb043Ffde23922c2bf97651a207": {
    "name": "xDAI Stake",
    "symbol": "STAKE",
    "last_price": 0.0946711691005775,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x1b53c0662414B195FcD5802C09754765b930A312": {
    "name": "Celsius Network",
    "symbol": "CEL",
    "last_price": 0.101977558473472,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xf25Ef66291CC2469781Fa18512d6b26431CB0747": {
    "name": "Hxro",
    "symbol": "HXRO",
    "last_price": 0.00404960870866995,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x7E58CeF7C589E0e1771B9c049cBa313fDEc31976": {
    "name": "Mirror Protocol",
    "symbol": "MIR",
    "last_price": 0.0169859769212837,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x2C969B248144dC371b428705Da84b413203d9e76": {
    "name": "Reef Finance",
    "symbol": "REEF",
    "last_price": 0.000402403087181355,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x5E2D55bC07B63b18Af6C9ED8Da06CD33258ebb35": {
    "name": "Orion Protocol",
    "symbol": "ORN",
    "last_price": 0.342120808026502,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xC4eFAd8386124927Fb46b146526625e143e5a63A": {
    "name": "ZKSwap",
    "symbol": "ZKS",
    "last_price": 0.00143340012680986,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xaAD4Add9b6ED577f3fe9E6bccbbe3bDCe596b062": {
    "name": "RedFOX Labs",
    "symbol": "RFOX",
    "last_price": 0.000374799506279751,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x99a828fe0C1D68D9aeBBB8651CDBDbac65dc6207": {
    "name": "Fajar Purnama Experiment",
    "symbol": "0FP0EXP",
    "last_price": 0,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x387005F39bF464c00bF3aC7C80021f919c2F4164": {
    "name": "Energy Web Token",
    "symbol": "EWT",
    "last_price": 1.5141373524628,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xA4ECF6D10B8D61D4A022821A6FF8b9536a47c70D": {
    "name": "Illuvium",
    "symbol": "ILV",
    "last_price": 13.7330613745106,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x12357548161Df5fA9BD5E9313A405Cd161d46C35": {
    "name": "Akropolis",
    "symbol": "AKRO",
    "last_price": 0.000219740432341079,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xEe0837E18F64EC6cf3bECe2dA75a1e5f679A6D84": {
    "name": "Ferrum Network",
    "symbol": "FRM",
    "last_price": 0.000943199205697113,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xab1078F4c4d949a176a6Ebcabe50C723aBf1fdb8": {
    "name": "Injective Protocol",
    "symbol": "INJ",
    "last_price": 12.2602243080894,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xF1BdCF2D4163adF9554111439dAbdD6f18fF9BA7": {
    "name": "BitTorrent",
    "symbol": "BTT",
    "last_price": 0.000003555508458589,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x2726Dd5efb3A209a54C512e9562A2045B8F45DBc": {
    "name": "yearn.finance",
    "symbol": "YFI",
    "last_price": 5609.69461433609,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xFA8710C6fcd9D1357b06D92d67349741626dB312": {
    "name": "Dogelon",
    "symbol": "ELON",
    "last_price": 1.48748170123709e-7,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xB4Ff17b5e93C40ff09326B0d538118022F02dc2b": {
    "name": "iExec RLC",
    "symbol": "RLC",
    "last_price": 1.22146921528927,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x9ffBE4f6416A7FB51f233966562B6b0DC3fE6B9B": {
    "name": "Spell Token",
    "symbol": "SPELL",
    "last_price": 0.000621328515327628,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xe8Ba8D7765bD33BA7Ff3B19b9020C15BF14123B6": {
    "name": "Basic Attention Token",
    "symbol": "BAT",
    "last_price": 0.14964722692445,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x5666444647f4fD66DECF411D69f994B8244EbeE3": {
    "name": "SwissBorg",
    "symbol": "CHSB",
    "last_price": 0.225613015540955,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xb2b1F16b7bB342ADCb57671f5aBa0Ae160196b75": {
    "name": "Terra",
    "symbol": "LUNA",
    "last_price": 0.00040346597795128,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x7CD3D51beE45434Dd80822c5D58b999333b69FfB": {
    "name": "Axie Infinity",
    "symbol": "AXS",
    "last_price": 3.04693819362842,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xE3D7a5C28d5a4143831242E8ab218D7e9B5c2c87": {
    "name": "Unibright",
    "symbol": "UBT",
    "last_price": 0.0208335760278131,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x8dbAD759014B0AA140ECd7AEd0e052b4F5C63bE1": {
    "name": "Kyber Network",
    "symbol": "KNC",
    "last_price": 0.360228336789901,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x0d91d554768dC20E1D3D95FF9d5bC041edC3bA0f": {
    "name": "Civic",
    "symbol": "CVC",
    "last_price": 0.131500685186065,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xA55b5de8598e8A2E313CD17ec5e2eDf2811Ce0D9": {
    "name": "Harvest Finance",
    "symbol": "FARM",
    "last_price": 31.6217617995631,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xc0C36bab186BE1a2dbaF01B73CcBAAF8cF5A467E": {
    "name": "dForce Token",
    "symbol": "DF",
    "last_price": 0.0494095685627278,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0x9b817C6E9a38E604606AeA3ad6ed271cE8EaA9d6": {
    "name": "Balancer",
    "symbol": "BAL",
    "last_price": 1.1600995726069,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xb7AE81B04584fA27572A73Abc599104D7DA42f02": {
    "name": "Premia",
    "symbol": "PREMIA",
    "last_price": 0.0957621927435987,
    "maker_fee": 0,
    "taker_fee": 0.003
  },
  "0xBb640dB8e023b735813a2db1B4656E7aA5155a3f": {
    "name": "Tether USD",
    "symbol": "USDT",
    "last_price": 0,
    "maker_fee": 0,
    "taker_fee": 0.003
  }
};

export const tokens: Token[] = Object.entries(tokenDataRaw).map(([address, { name, symbol, last_price, maker_fee, taker_fee }]) => ({
  address,
  name,
  symbol,
  price: last_price,
  makerFee: maker_fee,
  takerFee: taker_fee
}));
