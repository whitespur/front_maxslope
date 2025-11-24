import { TimelineChapter } from './types';

// Helper to map categories
// 1-3: Universe
// 4-7: Life
// 8-36: Civilization
// 37-40: Tech

export const TIMELINE_CHAPTERS: TimelineChapter[] = [
  {
    id: 1,
    title: "宇宙誕生 (大爆炸)",
    description: "「大爆炸」指的是宇宙從一種極端高溫、高密度的狀態開始膨脹；冷卻後形成最早的氫和氦；引力讓物質不斷聚集，形成最初的恆星和星系；銀河系大約在 130 億年前形成，是太陽系的家園。",
    category: "universe",
    imageUrl: "https://storage.googleapis.com/aifun/taijiao_chapter_images/01/chapter_1_0.png"
  },
  {
    id: 2,
    title: "太陽的誕生",
    description: "太陽由一團星際氣體和塵埃雲在重力作用下坍縮形成；中心溫度和壓力不斷升高，點燃核聚變，成為一顆恆星；太陽主要成分：氫約 74%，氦約 24%；預計總壽命約 100 億年，目前處於主序階段中期。",
    category: "universe",
    imageUrl: "https://storage.googleapis.com/aifun/taijiao_chapter_images/02/chapter_2_0.png"
  },
  {
    id: 3,
    title: "地球的誕生",
    description: "早期地球為熔融態，表面不斷被隕石撞擊；冷卻後形成地殼，火山噴發釋放大量氣體和水蒸氣；凝結的水形成原始海洋，大氣層逐漸穩定；主流觀點認為月球由一次巨大撞擊（忒伊亞撞擊）形成。",
    category: "universe",
    imageUrl: "https://storage.googleapis.com/aifun/taijiao_chapter_images/03/chapter_3_0.png"
  },
  {
    id: 4,
    title: "生命的起源",
    description: "生命起源於原始海洋中的化學演化；形成能夠複製自己的分子（可能是 RNA）和原始細胞膜；最早的生物是單細胞微生物；一部分微生物發展出光合作用，釋放氧氣，引發「大氧化事件」，為複雜生命打基礎。",
    category: "life",
    imageUrl: "https://storage.googleapis.com/aifun/taijiao_chapter_images/04/chapter_4_0.png"
  },
  {
    id: 5,
    title: "寒武紀生命大爆發",
    description: "寒武紀生命大爆發大約發生在 5.4 億年前；短時間內出現大量複雜多細胞生物，如三葉蟲、奇蝦等；生物首次大規模擁有眼睛、硬殼和複雜捕食結構；生態系統開始形成多層級的「食物網」。",
    category: "life",
    imageUrl: "https://storage.googleapis.com/aifun/taijiao_chapter_images/05/chapter_5_0.png"
  },
  {
    id: 6,
    title: "恐龍時代",
    description: "恐龍時代大致橫跨三疊紀、侏羅紀和白堊紀（約 2.3 億—6600 萬年前）；恐龍分為多類：如蜥腳類（長頸草食）、獸腳類（多為肉食）、鳥臀目等；同期有翼龍和海生爬行動物；約 6600 萬年前一顆小行星撞擊地球，引發大滅絕。",
    category: "life",
    imageUrl: "https://storage.googleapis.com/aifun/taijiao_chapter_images/06/chapter_6_0.png"
  },
  {
    id: 7,
    title: "哺乳動物崛起",
    description: "恐龍滅絕後，很多生態位空出來，哺乳動物多樣性迅速增加；體型從老鼠大小，擴展到大型草食和肉食動物；出現靈長類、鯨類、蹄類等主要哺乳動物分支；腦容量和社會性逐漸增強，為後來的「人」提供基礎。",
    category: "life",
    imageUrl: "https://storage.googleapis.com/aifun/taijiao_chapter_images/07/chapter_7_0.png"
  },
  {
    id: 8,
    title: "人類祖先",
    description: "大約 600 萬年前，非洲出現了早期人族（古猿向人過渡形態）；雙足行走逐漸穩定：比四肢行走更省能量、視野更好、解放雙手；南方古猿是較著名的人類早期祖先之一；群體生活和協作在這一時期開始變得重要。",
    category: "civilization",
    imageUrl: "https://storage.googleapis.com/aifun/taijiao_chapter_images/08/chapter_8_0.png"
  },
  {
    id: 9,
    title: "智人出現",
    description: "智人大約在 20 萬年前出現在非洲；相比早期人類，智人擁有更複雜的語言與抽象思維；會製作多樣工具、進行洞穴壁畫創作，形成原始藝術與宗教觀念；大約 6–7 萬年前，智人開始「走出非洲」，遷徙到全世界。",
    category: "civilization",
    imageUrl: "https://storage.googleapis.com/aifun/taijiao_chapter_images/09/chapter_9_0.png"
  },
  {
    id: 10,
    title: "農業革命",
    description: "大約公元前 1 萬年左右，人類在多個地區獨立進入農業時代；典型起源中心：中東肥沃新月地帶、中國、中美洲；農業帶來定居生活、人口增長、勞動分工與社會階層；這是從「狩獵採集」向「文明社會」過渡的關鍵一步。",
    category: "civilization",
    imageUrl: "https://storage.googleapis.com/aifun/taijiao_chapter_images/10/chapter_10_0.png"
  },
  {
    id: 11,
    title: "動物馴化與村落出現",
    description: "最早被馴化的動物包括：狗、羊、豬、牛等；村落結構：泥磚房屋、糧倉、牲畜圈、簡易灌溉系統；社會結構：氏族或家族為單位，共同勞動與防禦；農業 + 動物馴化共同構成早期文明的經濟基礎。",
    category: "civilization",
    imageUrl: null
  },
  {
    id: 12,
    title: "陶器、紡織與技術萌芽",
    description: "陶器技術出現後，人類可以儲存糧食、水和油，生活安全感提升；紡織技術使布料和衣物成為重要日常用品；出現更多專業工具：石鐮、石斧、磨盤、針等；手工藝逐漸發展出審美與裝飾意味，文化萌芽。",
    category: "civilization",
    imageUrl: null
  },
  {
    id: 13,
    title: "第一批城市出現",
    description: "公元前 3500 年左右，兩河流域出現世界上最早的城市，如烏魯克、烏爾；城市擁有城牆、神廟、宮殿和集市；統治者通過稅收、軍隊和行政機構管理城市及其周邊村落；城市成為文明擴散和創新的中心。",
    category: "civilization",
    imageUrl: null
  },
  {
    id: 14,
    title: "文字的出現",
    description: "公元前 3300 年左右，楔形文字在美索不達米亞出現，用於記錄稅收和貨物；古埃及發展出象形文字，用於宗教與王權記錄；後來中國有甲骨文，瑪雅有自己的文字系統；文字讓法律、宗教、歷史與行政管理可以跨地域和跨世代傳承。",
    category: "civilization",
    imageUrl: null
  },
  {
    id: 15,
    title: "兩河文明",
    description: "蘇美爾城邦是早期城市文明，巴比倫王國制定《漢謨拉比法典》，是世界最早成文法之一；數學和天文高度發達，採用六十進制，影響至今（如 60 分鐘、360 度）；對後世的法律、城市和宗教觀念具有深遠影響。",
    category: "civilization",
    imageUrl: null
  },
  {
    id: 16,
    title: "古埃及文明",
    description: "尼羅河定期泛濫帶來肥沃土壤，形成高度穩定的農業文明；古埃及發展出象形文字、木乃伊技術、金字塔建築和太陽曆法；社會等級分明但維持了數千年的連續性；紙草紙和部分知識被後世繼承。",
    category: "civilization",
    imageUrl: null
  },
  {
    id: 17,
    title: "印度河文明",
    description: "印度河文明中心：摩亨佐達羅、哈拉帕等城市；特點：城市規劃嚴格、排水系統先進、磚塊尺寸標準化；文字系統尚未完全破譯，宗教和政治結構仍在研究中；可能因氣候變化、河流改道等原因逐漸衰落。",
    category: "civilization",
    imageUrl: null
  },
  {
    id: 18,
    title: "中國早期文明",
    description: "仰韶文化彩陶著名；龍山文化黑陶細膩，社會分化加劇，出現城牆和大規模聚落；夏朝被視為中國最早的王朝；青銅器、祭祀制度與早期文字為後續商周奠定基礎。",
    category: "civilization",
    imageUrl: null
  },
  {
    id: 19,
    title: "西亞與波斯的崛起",
    description: "波斯帝國（阿契美尼德王朝）統一了廣大的西亞和中亞地區；創立行省制度、皇家大道和早期郵政系統；宗教：瑣羅亞斯德教強調善惡對立和最終審判；在軍事強力之外，也以相對寬容的民族政策著稱。",
    category: "civilization",
    imageUrl: null
  },
  {
    id: 20,
    title: "早期地中海文明",
    description: "邁錫尼文明：青銅時代的希臘文明，留下宮殿遺址與線性文字 B；腓尼基人是著名的海上商人和造船者；腓尼基字母是許多後世字母系統的祖先；地中海貿易網絡初步形成，為希臘和羅馬的興起鋪路。",
    category: "civilization",
    imageUrl: null
  },
  {
    id: 21,
    title: "軸心時代的思想覺醒",
    description: "軸心時代（約公元前 800–前 200 年）概念由哲學家雅斯貝爾斯提出；中國：孔子、老子等；印度：佛陀；希臘：蘇格拉底、柏拉圖等；不同地方的人們幾乎同時開始思考「什麼是善良」、「人要怎樣活」等根本問題。",
    category: "civilization",
    imageUrl: null
  },
  {
    id: 22,
    title: "春秋戰國與諸子百家",
    description: "春秋戰國時期禮崩樂壞，同時帶來思想大爆發；儒家重仁禮；道家重自然；墨家兼愛；法家重法律；兵家分析戰爭；這些思想共同塑造後世中國政治與文化。",
    category: "civilization",
    imageUrl: "https://storage.googleapis.com/aifun/taijiao_chapter_images/22/chapter_22_0.png"
  },
  {
    id: 23,
    title: "印度文明的盛放",
    description: "佛陀的教導在恒河流域廣泛傳播；孔雀王朝統一大部分印度次大陸；阿育王在戰爭後深感罪惡，轉向弘揚佛法，樹立石柱刻下法敕；古印度在數學、天文和哲學上持續發展。",
    category: "civilization",
    imageUrl: "https://storage.googleapis.com/aifun/taijiao_chapter_images/23/chapter_23_0.png"
  },
  {
    id: 24,
    title: "波斯帝國的黃金時代",
    description: "阿契美尼德帝國是橫跨歐亞非的大帝國之一；通過行省制度管理不同民族，皇家大道和驛站體系保證信息傳遞；薩珊王朝延續波斯文化傳統，並在與羅馬/拜占庭的對抗中影響深遠。",
    category: "civilization",
    imageUrl: "https://storage.googleapis.com/aifun/taijiao_chapter_images/24/chapter_24_0.png"
  },
  {
    id: 25,
    title: "希臘文明與城邦時代",
    description: "希臘城邦：雅典發展出早期民主制度，斯巴達重軍事訓練；希臘人在數學、幾何、天文、哲學和藝術方面貢獻巨大；奧林匹克運動會源自古希臘宗教與體育傳統。",
    category: "civilization",
    imageUrl: "https://storage.googleapis.com/aifun/taijiao_chapter_images/25/chapter_25_0.png"
  },
  {
    id: 26,
    title: "亞歷山大大帝與希臘化世界",
    description: "馬其頓王國的亞歷山大征服了希臘、埃及、波斯等地，建立龐大帝國；希臘化時代形成城市文化中心，如亞歷山大港；圖書館、學派和科學傳統在此時期繁榮。",
    category: "civilization",
    imageUrl: "https://storage.googleapis.com/aifun/taijiao_chapter_images/26/chapter_26_0.png"
  },
  {
    id: 27,
    title: "羅馬的興起與帝國時代",
    description: "羅馬從小城邦發展成共和政體，再轉為帝國；建立複雜的法律體系和公民身份制度；修建遍布帝國的道路網、水道橋和大型公共建築；「羅馬和平」保障了長期相對穩定。",
    category: "civilization",
    imageUrl: "https://storage.googleapis.com/aifun/taijiao_chapter_images/27/chapter_27_0.png"
  },
  {
    id: 28,
    title: "中國：秦漢帝國",
    description: "秦始皇統一六國，實行郡縣制、統一度量衡和文字；漢承秦制，在制度上更為穩定；漢武帝時期開拓絲綢之路；漢文化對後世東亞文明影響極深，「漢人」、「漢字」等概念由此而來。",
    category: "civilization",
    imageUrl: "https://storage.googleapis.com/aifun/taijiao_chapter_images/28/chapter_28_0.png"
  },
  {
    id: 29,
    title: "中美洲的瑪雅文明",
    description: "瑪雅文明分佈於今天的墨西哥南部、中美洲一帶；發展出複雜的曆法系統與象形文字；城市如蒂卡爾具有宏偉的金字塔和祭祀廣場；並非徹底「消失」，而是城市衰落、人口向周邊分散。",
    category: "civilization",
    imageUrl: "https://storage.googleapis.com/aifun/taijiao_chapter_images/29/chapter_29_0.png"
  },
  {
    id: 30,
    title: "南美的安第斯文明與印加",
    description: "印加帝國在 15 世紀達到鼎盛，以庫斯科為中心；馬丘比丘等遺址展現出精湛石工和山地工程技術；通過繩結記錄（基普）進行行政與統計管理。",
    category: "civilization",
    imageUrl: "https://storage.googleapis.com/aifun/taijiao_chapter_images/30/chapter_30_0.png"
  },
  {
    id: 31,
    title: "伊斯蘭黃金時代",
    description: "阿拔斯王朝時期，巴格達成為學術中心；伊斯蘭學者在數學、天文、醫學等方面做出重要貢獻；大量翻譯希臘、波斯、印度典籍，並加以發展；這些知識隨後傳入歐洲，成為文藝復興的重要來源。",
    category: "civilization",
    imageUrl: "https://storage.googleapis.com/aifun/taijiao_chapter_images/31/chapter_31_0.png"
  },
  {
    id: 32,
    title: "中國：隋唐宋元明",
    description: "隋修建大運河；唐政治開放、文化藝術高峰；宋商業革命、科技創新（火藥、活字印刷、指南針）；元是蒙古帝國的一部分，歐亞交流加強；明完善科舉，鄭和下西洋。",
    category: "civilization",
    imageUrl: "https://storage.googleapis.com/aifun/taijiao_chapter_images/32/chapter_32_0.png"
  },
  {
    id: 33,
    title: "歐洲中世紀與文藝復興前夜",
    description: "中世紀以封建制度為主；教會和修道院在知識保存方面起重要作用；城鎮和行會逐漸發展，市民階層興起；首批大學在 11–13 世紀間誕生；這一時期為後來的文藝復興積蓄力量。",
    category: "civilization",
    imageUrl: "https://storage.googleapis.com/aifun/taijiao_chapter_images/33/chapter_33_0.png"
  },
  {
    id: 34,
    title: "非洲文明",
    description: "埃塞俄比亞王國保存有獨特的基督教傳統；馬里帝國憑藉黃金和鹽貿易成為富裕王國；蒂姆布克圖成為學術與貿易中心；東非斯瓦希里城邦沿海建立，連接阿拉伯、印度貿易。",
    category: "civilization",
    imageUrl: "https://storage.googleapis.com/aifun/taijiao_chapter_images/34/chapter_34_0.png"
  },
  {
    id: 35,
    title: "日本與東南亞文明",
    description: "日本：大和、奈良時期接受中國文明；鎌倉、室町時期武士階層崛起。東南亞：高棉帝國建造吳哥窟；斯里維加亞等海上王國控制貿易；印度、伊斯蘭和中國文化在此交匯。",
    category: "civilization",
    imageUrl: "https://storage.googleapis.com/aifun/taijiao_chapter_images/35/chapter_35_0.png"
  },
  {
    id: 36,
    title: "文藝復興與大航海時代",
    description: "文藝復興起源於意大利，強調人的價值與理性；同期科學革命推動天文物理發展；大航海時代哥倫布、麥哲倫等建立全球航線；全球化開始形成，舊大陸與新大陸之間進行物種與文化大交換。",
    category: "civilization",
    imageUrl: "https://storage.googleapis.com/aifun/taijiao_chapter_images/36/chapter_36_0.png"
  },
  {
    id: 37,
    title: "工業革命",
    description: "第一次工業革命：蒸汽機、紡織機械、鐵路；第二次工業革命：電力、化工、內燃機；生產力極大提高，也帶來城市化、階級問題和環境壓力；科學技術與經濟增長深度捆綁。",
    category: "tech",
    imageUrl: "https://storage.googleapis.com/aifun/taijiao_chapter_images/37/chapter_37_0.png"
  },
  {
    id: 38,
    title: "世界大戰與現代國家體系",
    description: "20 世紀經歷了兩次世界大戰；戰後建立聯合國，推動國際合作；去殖民化浪潮中大量國家獨立；冷戰時期美蘇對峙，核武器帶來「相互保證毀滅」的威懾格局。",
    category: "tech",
    imageUrl: "https://storage.googleapis.com/aifun/taijiao_chapter_images/38/chapter_38_0.png"
  },
  {
    id: 39,
    title: "信息革命",
    description: "晶體管和集成電路推動電子計算機普及；個人電腦走入家庭；互聯網基於 TCP/IP 協議發展，萬維網讓信息極易訪問；移動互聯網和智能手機改變生活方式；數據量爆炸式增長。",
    category: "tech",
    imageUrl: "https://storage.googleapis.com/aifun/taijiao_chapter_images/39/chapter_39_0.png"
  },
  {
    id: 40,
    title: "AI 時代",
    description: "深度學習和神經網絡迅速發展；Transformer 讓大語言模型成為可能；AI 已在圖像識別、自然語言處理、科學研究等領域發揮作用；人類與 AI 的關係更像是「擴展工具」和「思維助手」。",
    category: "tech",
    imageUrl: "https://storage.googleapis.com/aifun/taijiao_chapter_images/40/chapter_40_0.png"
  }
];