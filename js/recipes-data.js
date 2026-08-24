/**
 * 減脂餐食譜資料庫 (精選多國多元健康減脂食譜)
 * 來源：BBC Good Food、EatingWell、Jamie Oliver、Delish、FitMenCook、Minimalist Baker、日本Kurashiru、愛料理 iCook、Cookpad
 * 經嚴格去重審核，剔除食材與步驟相似度大於90%之食譜，確保每道料理風味、烹調法與文化特色鮮明獨特！
 */
const DEFAULT_RECIPES = [
  // ==========================================
  // 【一、歐美與地中海風情料理】
  // ==========================================
  {
    id: "rec-intl-001",
    title: "希臘檸檬香草烤雞佐黃瓜酸奶醬 (Tzatziki)",
    category: "high-protein",
    categoryName: "高蛋白肌力",
    calories: 270,
    protein: 38,
    fat: 7,
    carbs: 9,
    prepTime: 18,
    difficulty: "簡單",
    servings: 1,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    source: "BBC Good Food (英國)",
    sourceUrl: "https://www.bbcgoodfood.com",
    tags: ["增肌", "減脂", "低糖", "少鹽", "雞胸肉", "無糖希臘優格", "小黃瓜", "檸檬汁", "大蒜", "地中海飲食"],
    ingredients: [
      { name: "雞胸肉", amount: "180g (切厚片)", isMain: true },
      { name: "無糖希臘優格", amount: "60g (製作Tzatziki黃瓜醬)", isMain: true },
      { name: "小黃瓜", amount: "半條 (磨碎擠乾水分)", isMain: true },
      { name: "新鮮檸檬汁", amount: "1大匙", isMain: false },
      { name: "大蒜泥", amount: "1瓣", isMain: false },
      { name: "乾燥奧勒岡草/蒔蘿", amount: "1/2小匙", isMain: false },
      { name: "初榨橄欖油", amount: "1/2小匙", isMain: false },
      { name: "黑胡椒", amount: "少許", isMain: false }
    ],
    steps: [
      "雞胸肉以檸檬汁、奧勒岡草、黑胡椒與微量橄欖油醃漬 10 分鐘。",
      "將希臘優格、擠乾水分的碎小黃瓜、蒜泥與檸檬汁拌勻成清爽濃郁的希臘經典 Tzatziki 醬。",
      "熱平底鍋或氣炸鍋（190°C），將雞胸肉煎烤至雙面金黃熟透（約 8-10 分鐘）。",
      "起鍋切片，佐上冰涼的黃瓜酸奶醬享用，享受地中海高蛋白清爽風味！"
    ],
    tips: "希臘優格取代高熱量沙拉醬，蛋白質倍增且富含活性益生菌，乳清酸香與烤雞胸是絕配！"
  },
  {
    id: "rec-intl-002",
    title: "地中海烤海鱸魚佐刺山柑番茄黑橄欖",
    category: "high-protein",
    categoryName: "高蛋白肌力",
    calories: 230,
    protein: 34,
    fat: 7,
    carbs: 6,
    prepTime: 15,
    difficulty: "簡單",
    servings: 1,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    source: "Jamie Oliver 健康專欄 (歐洲)",
    sourceUrl: "https://www.jamieoliver.com",
    tags: ["增肌", "減脂", "低糖", "少鹽", "鱸魚", "小番茄", "黑橄欖", "刺山柑", "白酒", "地中海飲食"],
    ingredients: [
      { name: "金目鱸魚菲力", amount: "180g", isMain: true },
      { name: "小番茄", amount: "6顆 (對半切)", isMain: true },
      { name: "黑橄欖", amount: "4顆 (切圈)", isMain: false },
      { name: "新鮮羅勒葉", amount: "1小把", isMain: false },
      { name: "大蒜", amount: "2瓣 (切薄片)", isMain: false },
      { name: "白酒/米酒", amount: "1大匙", isMain: false },
      { name: "橄欖油", amount: "1/2小匙", isMain: false }
    ],
    steps: [
      "烤盤底鋪上蒜片、小番茄與黑橄欖圈，淋少許橄欖油。",
      "將鱸魚菲力魚皮朝上放在番茄蔬菜上方，淋上一大匙白酒提鮮。",
      "烤箱預熱 200°C 烤 12-14 分鐘至番茄微爆汁、魚肉雪白細嫩。",
      "出爐灑上新鮮羅勒葉碎，番茄酸甜與黑橄欖天然果香完美融合！"
    ],
    tips: "刺山柑與黑橄欖自帶地中海天然鹹香與抗氧化多酚，完全不需額外加精鹽調味！"
  },
  {
    id: "rec-intl-003",
    title: "法式第戎芥末籽慢烤鮭魚佐球芽甘藍",
    category: "high-protein",
    categoryName: "高蛋白肌力",
    calories: 330,
    protein: 35,
    fat: 17,
    carbs: 8,
    prepTime: 20,
    difficulty: "簡單",
    servings: 1,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
    source: "EatingWell (美國)",
    sourceUrl: "https://www.eatingwell.com",
    tags: ["增肌", "減脂", "低糖", "少鹽", "鮭魚", "球芽甘藍", "抱子甘藍", "第戎芥末醬", "迷迭香", "Omega3"],
    ingredients: [
      { name: "生鮮鮭魚菲力", amount: "150g", isMain: true },
      { name: "球芽甘藍/抱子甘藍", amount: "80g (對半切)", isMain: true },
      { name: "法式第戎芥末籽醬", amount: "1大匙", isMain: false },
      { name: "檸檬汁", amount: "1小匙", isMain: false },
      { name: "現磨粗黑胡椒", amount: "1/2小匙", isMain: false },
      { name: "蒜粉", amount: "少許", isMain: false }
    ],
    steps: [
      "將第戎芥末籽醬、檸檬汁、蒜粉與黑胡椒調勻，厚厚塗抹在鮭魚菲力頂部。",
      "球芽甘藍切面朝下鋪在烤盤邊緣，中心放入厚切鮭魚排。",
      "氣炸鍋或烤箱 180°C 烤 14-16 分鐘至甘藍邊緣微焦脆、鮭魚油脂滋滋作響。",
      "起鍋享受芥末籽微辛甘甜與鮭魚肥美 Omega-3 的法式盛宴。"
    ],
    tips: "球芽甘藍富含硫代葡萄糖苷與維生素K，與鮭魚健康油脂一同烘烤能倍增脂溶性營養素吸收！"
  },
  {
    id: "rec-intl-004",
    title: "西班牙蒜香紅椒低油白蝦熱鐵板 (Gambas al Ajillo)",
    category: "quick-meal",
    categoryName: "超快即食",
    calories: 190,
    protein: 28,
    fat: 6,
    carbs: 4,
    prepTime: 8,
    difficulty: "極簡易",
    servings: 1,
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    source: "Serious Eats (美國)",
    sourceUrl: "https://www.seriouseats.com",
    tags: ["減脂", "低糖", "低脂", "少鹽", "蝦仁", "白蝦", "大蒜", "西班牙煙燻紅椒粉", "歐芹", "Tapas"],
    ingredients: [
      { name: "生鮮無毒大蝦仁", amount: "10-12隻", isMain: true },
      { name: "大蒜", amount: "5瓣 (切厚片)", isMain: true },
      { name: "西班牙煙燻紅椒粉 (Pimentón)", amount: "1/2小匙", isMain: false },
      { name: "乾燥碎辣椒", amount: "1/3小匙", isMain: false },
      { name: "新鮮歐芹/巴西里", amount: "1小把 (切碎)", isMain: false },
      { name: "特級初榨橄欖油", amount: "1小匙 (減油改良版)", isMain: false },
      { name: "檸檬角", amount: "1塊", isMain: false }
    ],
    steps: [
      "小鑄鐵鍋或不沾鍋下一小匙橄欖油，冷油下蒜片與碎辣椒極小火慢煸出蒜香。",
      "轉中大火，下擦乾水分的鮮蝦仁快速翻炒 90 秒至雙面轉紅彈牙。",
      "關火加入煙燻紅椒粉與大量歐芹碎翻勻，擠上新鮮檸檬汁趁熱享用。"
    ],
    tips: "傳統西班牙蒜蝦浸在厚厚橄欖油中，改良版僅用 1 小匙油低溫煸蒜香，熱量直降 70%！"
  },
  {
    id: "rec-intl-005",
    title: "墨西哥青檸彩椒牛排法士達碗 (Fajita Bowl)",
    category: "high-protein",
    categoryName: "高蛋白肌力",
    calories: 340,
    protein: 38,
    fat: 9,
    carbs: 22,
    prepTime: 15,
    difficulty: "簡單",
    servings: 1,
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    source: "Delish (美國)",
    sourceUrl: "https://www.delish.com",
    tags: ["增肌", "減脂", "低糖", "牛板腱", "牛肉", "彩椒", "洋蔥", "酪梨", "孜然", "墨西哥料理"],
    ingredients: [
      { name: "牛板腱/牛里肌肉", amount: "170g (切粗條)", isMain: true },
      { name: "三色彩椒", amount: "1顆 (切粗絲)", isMain: true },
      { name: "紫洋蔥", amount: "半顆 (切粗絲)", isMain: true },
      { name: "成熟酪梨", amount: "30g (切丁)", isMain: false },
      { name: "墨西哥塔可香料/孜然粉", amount: "1小匙", isMain: false },
      { name: "青檸檬汁", amount: "1大匙", isMain: false },
      { name: "橄欖油", amount: "1/2小匙", isMain: false }
    ],
    steps: [
      "牛肉條以孜然粉、紅椒粉、青檸汁醃 5 分鐘。",
      "熱鍋噴薄油，先將彩椒絲與洋蔥絲大火翻炒至邊緣微焦糖化（約 2 分鐘）盛起。",
      "同鍋大火下牛肉條高溫翻煎 90 秒至 7 分熟軟嫩。",
      "大碗盛入彩椒洋蔥基底，放上炙烤牛柳，頂部加酪梨丁與青檸角拌勻開吃！"
    ],
    tips: "高溫快炒彩椒能鎖住多汁脆度，搭配酪梨優質好油，滿足感十足且無多餘澱粉負擔！"
  },
  {
    id: "rec-intl-006",
    title: "義式托斯卡尼番茄嫩白豆燉雞 (Tuscan Chicken)",
    category: "high-protein",
    categoryName: "高蛋白肌力",
    calories: 320,
    protein: 40,
    fat: 6,
    carbs: 22,
    prepTime: 20,
    difficulty: "簡單",
    servings: 1,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    source: "EatingWell (美國)",
    sourceUrl: "https://www.eatingwell.com",
    tags: ["增肌", "減脂", "低脂", "少鹽", "雞胸肉", "白豆", "熟白豆", "嫩菠菜", "牛番茄", "義大利料理"],
    ingredients: [
      { name: "雞胸肉排", amount: "180g", isMain: true },
      { name: "熟白豆/鷹嘴豆", amount: "70g", isMain: true },
      { name: "新鮮嫩菠菜", amount: "60g", isMain: true },
      { name: "熟透牛番茄", amount: "1顆 (切丁)", isMain: true },
      { name: "大蒜", amount: "2瓣 (切碎)", isMain: false },
      { name: "迷迭香與百里香", amount: "1/2小匙", isMain: false },
      { name: "黑胡椒", amount: "少許", isMain: false }
    ],
    steps: [
      "熱鍋噴少許油，先將雞胸肉雙面煎至金黃後取出。",
      "同鍋下蒜碎、番茄丁與 100ml 水小火煮至番茄軟爛化成醬汁。",
      "加入熟白豆與迷迭香草燉煮 3 分鐘吸味。",
      "倒回雞胸肉，最後放入嫩菠菜燜煮 1 分鐘至菠菜軟化即可盛盤。"
    ],
    tips: "托斯卡尼白豆（Cannellini Beans）富含慢消化抗性澱粉與纖維，搭配濃郁番茄菠菜高蛋白又低脂！"
  },
  {
    id: "rec-intl-007",
    title: "秘魯青檸醃鮮魚酪梨冷盤 (Classic Ceviche)",
    category: "quick-meal",
    categoryName: "超快即食",
    calories: 210,
    protein: 30,
    fat: 7,
    carbs: 6,
    prepTime: 10,
    difficulty: "極簡易",
    servings: 1,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    source: "BBC Good Food (英國)",
    sourceUrl: "https://www.bbcgoodfood.com",
    tags: ["減脂", "低糖", "低脂", "少鹽", "鯛魚片", "鱸魚", "酪梨", "紫洋蔥", "新鮮檸檬汁", "無油免開火", "生酮"],
    ingredients: [
      { name: "生食級鯛魚/鱸魚菲力", amount: "160g (切一口方塊)", isMain: true },
      { name: "新鮮檸檬汁", amount: "3大匙 (醃熟魚肉蛋白質)", isMain: true },
      { name: "紫洋蔥", amount: "1/4顆 (切細絲泡冰水)", isMain: true },
      { name: "成熟酪梨", amount: "30g (切丁)", isMain: false },
      { name: "新鮮香菜", amount: "1小把 (切碎)", isMain: false },
      { name: "紅辣椒圈", amount: "少許", isMain: false },
      { name: "海鹽與黑胡椒", amount: "微量", isMain: false }
    ],
    steps: [
      "將鮮魚塊放入玻璃碗中，倒入滿滿的新鮮檸檬汁完全浸沒。",
      "放入冰箱冷藏 10 分鐘（檸檬酸天然變性蛋白質使魚肉熟化變白緊緻）。",
      "加入瀝乾的紫洋蔥絲、香菜碎、辣椒圈與酪梨丁輕柔拌勻。",
      "冷冽酸香、魚肉鮮甜彈嫩，是一道完全零熱量油脂的南美減脂神菜！"
    ],
    tips: "利用柑橘酸「冷熟（Curing）」魚肉蛋白質，保留 100% 水溶性維生素與微量元素！"
  },
  {
    id: "rec-intl-008",
    title: "摩洛哥香料烤鷹嘴豆花椰菜溫沙拉",
    category: "low-carb",
    categoryName: "極低碳減醣",
    calories: 240,
    protein: 14,
    fat: 8,
    carbs: 26,
    prepTime: 18,
    difficulty: "簡單",
    servings: 1,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    source: "Minimalist Baker (美國)",
    sourceUrl: "https://minimalistbaker.com",
    tags: ["減脂", "低糖", "低脂", "少鹽", "白花椰菜", "熟鷹嘴豆", "薑黃粉", "孜然粉", "紅椒粉", "純素友好", "高纖"],
    ingredients: [
      { name: "白花椰菜", amount: "150g (切小朵)", isMain: true },
      { name: "熟鷹嘴豆", amount: "80g", isMain: true },
      { name: "孜然粉與薑黃粉", amount: "各1/2小匙", isMain: false },
      { name: "匈牙利紅椒粉", amount: "1/2小匙", isMain: false },
      { name: "新鮮檸檬汁", amount: "1小匙", isMain: false },
      { name: "橄欖油", amount: "1/2小匙", isMain: false },
      { name: "熟白芝麻", amount: "少許", isMain: false }
    ],
    steps: [
      "白花椰菜與鷹嘴豆拌入孜然、薑黃、紅椒粉與少許橄欖油抓勻。",
      "平鋪於烤盤，氣炸鍋或烤箱 200°C 烤 12-15 分鐘至花椰菜邊緣焦香酥脆、鷹嘴豆如堅果般香脆。",
      "出爐擠上檸檬汁、撒上白芝麻，溫熱酥脆極具中東異國風情！"
    ],
    tips: "薑黃與孜然具備強大抗發炎與促進基礎代謝機能，烤酥的鷹嘴豆能完美解饞！"
  },
  {
    id: "rec-intl-009",
    title: "越南清爽鮮蝦米紙生春捲 (Summer Rolls)",
    category: "quick-meal",
    categoryName: "超快即食",
    calories: 220,
    protein: 24,
    fat: 3,
    carbs: 22,
    prepTime: 12,
    difficulty: "簡單",
    servings: 1,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    source: "Tasty (國際)",
    sourceUrl: "https://tasty.co",
    tags: ["減脂", "低脂", "少鹽", "鮮蝦仁", "米紙皮", "小黃瓜", "美生菜", "薄荷葉", "東南亞輕食"],
    ingredients: [
      { name: "熟鮮蝦仁", amount: "8隻 (橫切對半)", isMain: true },
      { name: "越南米紙春捲皮", amount: "3張", isMain: true },
      { name: "美生菜葉", amount: "50g (切絲)", isMain: true },
      { name: "小黃瓜", amount: "半條 (切細條)", isMain: true },
      { name: "新鮮九層塔/薄荷葉", amount: "1小把", isMain: false },
      { name: "香檸魚露沾醬", amount: "1大匙 (魚露+水+檸檬汁+辣椒)", isMain: false }
    ],
    steps: [
      "米紙皮在溫水中快速沾浸 3 秒取出鋪平在乾淨盤上。",
      "中央依序鋪上生菜絲、小黃瓜條、薄荷葉與紅潤的蝦仁切面朝下。",
      "將米紙左右折起，緊實捲成圓條狀。",
      "沾著清爽香檸酸辣汁一口咬下，晶瑩透亮、無油清脆高蛋白！"
    ],
    tips: "一張越南米紙熱量僅約 30 大卡，捲入大量蔬菜與鮮蝦，是全球健身族最愛的清爽主食！"
  },
  {
    id: "rec-intl-010",
    title: "奇亞籽野莓無糖希臘優格高蛋白布丁",
    category: "quick-meal",
    categoryName: "超快即食",
    calories: 210,
    protein: 20,
    fat: 5,
    carbs: 18,
    prepTime: 5,
    difficulty: "極簡易",
    servings: 1,
    image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80",
    source: "FitMenCook (美國)",
    sourceUrl: "https://fitmencook.com",
    tags: ["減脂", "低糖", "低脂", "無糖希臘優格", "奇亞籽", "冷凍藍莓", "高纖甜點", "免開火"],
    ingredients: [
      { name: "無糖希臘優格", amount: "120g", isMain: true },
      { name: "奇亞籽", amount: "10g (約1大匙)", isMain: true },
      { name: "無糖豆漿/杏仁奶", amount: "50ml", isMain: true },
      { name: "新鮮藍莓/野莓", amount: "30g", isMain: false },
      { name: "純香草精", amount: "2滴 (提升甜香)", isMain: false }
    ],
    steps: [
      "在玻璃杯中將奇亞籽、無糖豆漿與希臘優格、香草精充分攪拌均勻。",
      "靜置冷藏 20 分鐘（或隔夜），奇亞籽吸水膨脹形成如布丁般Q彈膠狀口感。",
      "頂部鋪上新鮮藍莓即完成高纖低卡又解饞的蛋白質甜點！"
    ],
    tips: "奇亞籽吸水後膨脹 10 倍，富含水溶性膳食纖維與 Omega-3，能有效撫平甜食飢餓感！"
  },

  // ==========================================
  // 【二、在地與亞洲各國經典減脂料理】
  // ==========================================
  {
    id: "rec-asia-001",
    title: "經典香檸黑椒舒肥雞胸肉",
    category: "high-protein",
    categoryName: "高蛋白肌力",
    calories: 220,
    protein: 42,
    fat: 3.5,
    carbs: 2,
    prepTime: 15,
    difficulty: "簡單",
    servings: 1,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    source: "愛料理 iCook",
    sourceUrl: "https://icook.tw",
    tags: ["增肌", "減脂", "低糖", "低脂", "少鹽", "雞胸肉", "檸檬汁", "黑胡椒", "大蒜", "高蛋白"],
    ingredients: [
      { name: "雞胸肉", amount: "200g", isMain: true },
      { name: "檸檬汁", amount: "1大匙", isMain: false },
      { name: "黑胡椒粒", amount: "1小匙", isMain: false },
      { name: "橄欖油", amount: "1/2小匙", isMain: false },
      { name: "大蒜", amount: "2瓣 (切碎)", isMain: false },
      { name: "義大利香料", amount: "1/2小匙", isMain: false }
    ],
    steps: [
      "雞胸肉吸乾水分，劃數刀方便入味。",
      "將檸檬汁、黑胡椒、蒜碎與義式香料均勻抹在雞胸肉上醃漬 10 分鐘。",
      "平底鍋噴薄油，中火煎兩面金黃各 2 分鐘，蓋鍋小火燜煎 4 分鐘。",
      "關火靜置 3 分鐘鎖住肉汁後切片享用。"
    ],
    tips: "靜置（Resting）是雞胸肉鮮嫩爆汁的唯一秘訣！"
  },
  {
    id: "rec-asia-002",
    title: "低碳蝦仁青花菜炒「飯」（花椰菜米）",
    category: "low-carb",
    categoryName: "極低碳減醣",
    calories: 260,
    protein: 28,
    fat: 8,
    carbs: 14,
    prepTime: 12,
    difficulty: "簡單",
    servings: 1,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    source: "Cookpad",
    sourceUrl: "https://cookpad.com/tw",
    tags: ["減脂", "低糖", "減醣", "鮮蝦仁", "白花椰菜米", "青花菜", "雞蛋", "青蔥", "偽炒飯"],
    ingredients: [
      { name: "白花椰菜米", amount: "200g", isMain: true },
      { name: "青花菜", amount: "80g (切小朵)", isMain: true },
      { name: "無毒鮮蝦仁", amount: "100g", isMain: true },
      { name: "雞蛋", amount: "1顆", isMain: true },
      { name: "青蔥", amount: "1支 (切花)", isMain: false },
      { name: "白胡椒粉", amount: "適量", isMain: false },
      { name: "薄鹽醬油", amount: "1小匙", isMain: false },
      { name: "橄欖油", amount: "1小匙", isMain: false }
    ],
    steps: [
      "先炒散雞蛋成碎蛋盛起，蝦仁煎至 8 分熟盛起。",
      "同鍋下花椰菜米與青花菜大火翻炒 2-3 分鐘炒乾水分。",
      "倒回炒蛋與蝦仁，加薄鹽醬油與胡椒粉翻勻，灑上蔥花起鍋。"
    ],
    tips: "花椰菜米乾炒不加水，才能營造出粒粒分明的香香炒飯口感！"
  },
  {
    id: "rec-asia-003",
    title: "蒜香黑胡椒煎牛里肌佐杏鮑菇",
    category: "high-protein",
    categoryName: "高蛋白肌力",
    calories: 320,
    protein: 38,
    fat: 10,
    carbs: 6,
    prepTime: 15,
    difficulty: "簡單",
    servings: 1,
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    source: "愛料理 iCook",
    sourceUrl: "https://icook.tw",
    tags: ["增肌", "減脂", "低糖", "牛里肌", "牛肉", "杏鮑菇", "蒜頭", "黑胡椒", "高鐵"],
    ingredients: [
      { name: "牛里肌肉", amount: "180g (切大丁)", isMain: true },
      { name: "杏鮑菇", amount: "2根 (切滾刀塊)", isMain: true },
      { name: "大蒜", amount: "4瓣 (切片)", isMain: false },
      { name: "粗粒黑胡椒", amount: "1小匙", isMain: false },
      { name: "橄欖油", amount: "1小匙", isMain: false }
    ],
    steps: [
      "熱鍋下一小匙油小火煎香蒜片至金黃酥脆後撈起。",
      "轉大火下牛里肌丁快速翻煎 90 秒至焦香微脆。",
      "加入杏鮑菇塊大火同炒至出汁軟嫩，起鍋撒回蒜酥片與現磨黑胡椒。"
    ],
    tips: "里肌肉油脂少，大火快煎保持內部 7 分熟最軟嫩多汁！"
  },
  {
    id: "rec-asia-004",
    title: "鮮甜干貝花椰菜米海鮮減脂羹",
    category: "soups",
    categoryName: "低卡暖胃湯",
    calories: 190,
    protein: 26,
    fat: 3,
    carbs: 11,
    prepTime: 15,
    difficulty: "簡單",
    servings: 1,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    source: "Cookpad",
    sourceUrl: "https://cookpad.com/tw",
    tags: ["減脂", "低脂", "低糖", "少鹽", "鮮干貝", "板豆腐", "金針菇", "雞蛋", "無勾芡", "低卡濃湯"],
    ingredients: [
      { name: "鮮干貝", amount: "5顆", isMain: true },
      { name: "板豆腐", amount: "100g (切小細丁)", isMain: true },
      { name: "金針菇", amount: "半包 (切小段)", isMain: true },
      { name: "雞蛋", amount: "1顆 (打散成蛋花)", isMain: true },
      { name: "白胡椒粉與海鹽", amount: "少許", isMain: false },
      { name: "清水", amount: "400ml", isMain: false }
    ],
    steps: [
      "高湯煮沸，下金針菇與板豆腐丁，金針菇天然多醣體煮出濃稠羹湯質地（零太白粉！）。",
      "加入鮮干貝微煮 1.5 分鐘保持嫩甜。",
      "轉圈倒入蛋液形成絲滑蛋花，撒上白胡椒粉即可出鍋。"
    ],
    tips: "金針菇煮熱釋放天然黏稠膠質，完全省去澱粉勾芡熱量！"
  },
  {
    id: "rec-asia-005",
    title: "日式海帶芽鮭魚味噌嫩豆腐湯",
    category: "soups",
    categoryName: "低卡暖胃湯",
    calories: 220,
    protein: 26,
    fat: 8,
    carbs: 8,
    prepTime: 12,
    difficulty: "極簡易",
    servings: 1,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    source: "日本減醣食譜 Kurashiru",
    sourceUrl: "https://cookpad.com/tw",
    tags: ["增肌", "減脂", "少鹽", "鮭魚", "嫩豆腐", "海帶芽", "味噌", "日式定食", "益生菌"],
    ingredients: [
      { name: "生鮮鮭魚切塊", amount: "100g", isMain: true },
      { name: "嫩豆腐", amount: "半盒 (切塊)", isMain: true },
      { name: "海帶芽", amount: "1小撮 (發開)", isMain: true },
      { name: "日式低鹽味噌", amount: "1大匙", isMain: false },
      { name: "青蔥花", amount: "1大匙", isMain: false },
      { name: "清水", amount: "400ml", isMain: false }
    ],
    steps: [
      "水滾下嫩豆腐與鮭魚塊中火煮 3 分鐘至魚肉熟透。",
      "加入海帶芽煮 30 秒後熄火。",
      "以濾網溶化味噌（避免大火滾煮破壞酵母），撒上青蔥享用。"
    ],
    tips: "發酵味噌關火溶入能完整保留益生菌，暖胃護腸促代謝！"
  },
  {
    id: "rec-asia-006",
    title: "氣炸薄鹽多汁挪威鯖魚排",
    category: "quick-meal",
    categoryName: "超快即食",
    calories: 280,
    protein: 24,
    fat: 18,
    carbs: 1,
    prepTime: 12,
    difficulty: "極簡易",
    servings: 1,
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    source: "日本減醣食譜 Kurashiru",
    sourceUrl: "https://cookpad.com/tw",
    tags: ["增肌", "減脂", "低糖", "鯖魚", "青花魚", "檸檬汁", "氣炸鍋", "日式定食", "好油脂"],
    ingredients: [
      { name: "薄鹽鯖魚菲力", amount: "1片 (約150g)", isMain: true },
      { name: "檸檬角", amount: "1塊", isMain: false },
      { name: "七味粉/黑胡椒", amount: "少許", isMain: false }
    ],
    steps: [
      "鯖魚菲力表面劃十字斜紋。",
      "氣炸鍋 190°C 烤 10 分鐘，最後以 200°C 烤 2 分鐘逼出香脆魚油。",
      "擠上新鮮檸檬汁去膩，外酥內嫩多汁！"
    ],
    tips: "氣炸能逼出鯖魚多餘油脂，保留深海天然好油 DHA & EPA！"
  },
  {
    id: "rec-asia-007",
    title: "韓式泡菜炒雙色花椰菜米無米飯",
    category: "low-carb",
    categoryName: "極低碳減醣",
    calories: 230,
    protein: 22,
    fat: 7,
    carbs: 15,
    prepTime: 12,
    difficulty: "簡單",
    servings: 1,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    source: "愛料理 iCook",
    sourceUrl: "https://icook.tw",
    tags: ["減脂", "低糖", "減醣", "白花椰菜米", "泡菜", "雞胸肉", "雞蛋", "韓式料理", "無澱粉"],
    ingredients: [
      { name: "白花椰菜米", amount: "180g", isMain: true },
      { name: "韓式泡菜", amount: "60g (切碎)", isMain: true },
      { name: "雞胸肉丁", amount: "80g", isMain: true },
      { name: "太陽蛋/煎蛋", amount: "1顆", isMain: true },
      { name: "海苔絲", amount: "少許", isMain: false },
      { name: "香油", amount: "1/3小匙", isMain: false }
    ],
    steps: [
      "熱鍋薄油炒香雞胸丁與泡菜碎。",
      "加入花椰菜米大火翻炒 3 分鐘至水分收乾焦香。",
      "盛盤放上一顆半熟蛋與海苔絲，劃破蛋黃拌勻超銷魂！"
    ],
    tips: "花椰菜米吸飽泡菜天然發酵酸辣汁，口感如石鍋拌飯卻零澱粉！"
  },
  {
    id: "rec-asia-008",
    title: "泰式九層塔打拋舒肥雞胸肉",
    category: "high-protein",
    categoryName: "高蛋白肌力",
    calories: 250,
    protein: 38,
    fat: 6,
    carbs: 8,
    prepTime: 12,
    difficulty: "簡單",
    servings: 1,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    source: "愛料理 iCook",
    sourceUrl: "https://icook.tw",
    tags: ["增肌", "減脂", "低糖", "低脂", "雞胸絞肉", "雞胸肉", "九層塔", "牛番茄", "大蒜", "泰式打拋"],
    ingredients: [
      { name: "雞胸肉丁/絞肉", amount: "180g", isMain: true },
      { name: "九層塔", amount: "1大把", isMain: true },
      { name: "牛番茄", amount: "半顆 (切丁)", isMain: true },
      { name: "蒜末與辣椒", amount: "各1小匙", isMain: false },
      { name: "魚露", amount: "1小匙", isMain: false },
      { name: "薄鹽醬油", amount: "1小匙", isMain: false }
    ],
    steps: [
      "鍋內爆香蒜末與辣椒碎，下雞肉丁大火炒至變白。",
      "加入番茄丁、魚露與醬油翻炒入味。",
      "關火投入大把九層塔利用餘溫翻勻起鍋。"
    ],
    tips: "以低脂雞胸肉丁取代肥豬絞肉，熱量大砍半，高蛋白酸辣開胃！"
  },
  {
    id: "rec-asia-009",
    title: "冬瓜干貝芹菜高鉀排鈉消水腫湯",
    category: "soups",
    categoryName: "低卡暖胃湯",
    calories: 110,
    protein: 16,
    fat: 1,
    carbs: 9,
    prepTime: 15,
    difficulty: "極簡易",
    servings: 2,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    source: "愛料理 iCook",
    sourceUrl: "https://icook.tw",
    tags: ["少鹽", "減鈉", "減脂", "低脂", "低糖", "冬瓜", "生食級干貝", "干貝", "芹菜", "消水腫", "DASH飲食"],
    ingredients: [
      { name: "冬瓜", amount: "200g (去皮切片)", isMain: true },
      { name: "鮮干貝", amount: "6顆", isMain: true },
      { name: "芹菜末", amount: "2大匙 (高鉀)", isMain: true },
      { name: "薑絲", amount: "1小撮", isMain: false },
      { name: "白胡椒粉", amount: "少許", isMain: false },
      { name: "清水", amount: "500ml", isMain: false }
    ],
    steps: [
      "水 500ml 加薑絲與冬瓜煮沸，中小火煮 8 分鐘至冬瓜透明。",
      "下鮮干貝續煮 1.5 分鐘溶出天然海鮮甘甜。",
      "關火撒芹菜末與白胡椒粉即可出鍋。"
    ],
    tips: "冬瓜與芹菜高鉀排鈉，干貝自帶天然海鹽鮮甜，不加一粒鹽排腫力MAX！"
  },
  {
    id: "rec-asia-010",
    title: "微波5分鐘高蛋白無麵粉燕麥香蕉蛋糕",
    category: "quick-meal",
    categoryName: "超快即食",
    calories: 240,
    protein: 16,
    fat: 5,
    carbs: 32,
    prepTime: 5,
    difficulty: "極簡易",
    servings: 1,
    image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80",
    source: "愛料理 iCook",
    sourceUrl: "https://icook.tw",
    tags: ["增肌", "減脂", "低脂", "大燕麥片", "香蕉", "雞蛋", "無糖純可可粉", "微波爐", "無麵粉"],
    ingredients: [
      { name: "熟透香蕉", amount: "半根 (壓泥)", isMain: true },
      { name: "大燕麥片", amount: "30g", isMain: true },
      { name: "雞蛋", amount: "1顆", isMain: true },
      { name: "無糖可可粉", amount: "1小匙", isMain: false },
      { name: "無糖豆漿", amount: "20ml", isMain: false }
    ],
    steps: [
      "在馬克杯中壓碎香蕉，加入雞蛋、燕麥、可可粉與豆漿攪勻。",
      "微波爐中高火加熱 90 秒至蛋糕蓬鬆乾爽即可挖著吃。"
    ],
    tips: "香蕉天然果糖提甜，無油無精緻糖，如同熔岩布朗尼般濃郁！"
  }
];

// 熱門食材標籤清單，供使用者快速點擊
const POPULAR_INGREDIENTS = [
  { name: "雞胸肉", icon: "🍗" },
  { name: "雞蛋", icon: "🥚" },
  { name: "花椰菜", icon: "🥦" },
  { name: "蝦仁", icon: "🦐" },
  { name: "豆腐", icon: "🧊" },
  { name: "鮭魚", icon: "🐟" },
  { name: "牛肉", icon: "🥩" },
  { name: "地瓜", icon: "🍠" },
  { name: "番茄", icon: "🍅" },
  { name: "酪梨", icon: "🥑" },
  { name: "燕麥", icon: "🌾" },
  { name: "菇類", icon: "🍄" },
  { name: "櫛瓜", icon: "🥒" },
  { name: "菠菜", icon: "🥬" },
  { name: "鯛魚", icon: "🐡" },
  { name: "鱸魚", icon: "🐟" },
  { name: "鯖魚", icon: "🐟" },
  { name: "蛤蜊", icon: "🦪" },
  { name: "秋葵", icon: "🌱" },
  { name: "冬瓜", icon: "🍈" }
];

// 食材與飲食目標別名對應字典（模糊搜尋拓展）
const INGREDIENT_SYNONYMS = {
  // 飲食目標關鍵字拓展
  "增肌": ["增肌", "高蛋白", "牛里肌", "牛排", "牛板腱", "生鮮鮪魚", "三色藜麥", "鷹嘴豆", "雞胸肉", "雞肉", "舒肥雞胸", "鱸魚", "鯛魚", "蝦仁", "毛豆仁", "白豆"],
  "減脂": ["減脂", "低卡", "負卡", "蒟蒻", "蒟蒻絲", "白花椰菜米", "花椰菜米", "冬瓜", "金針菇", "小黃瓜", "海帶芽", "絲瓜", "雙菇", "無油", "球芽甘藍"],
  "低糖": ["低糖", "減醣", "極低碳", "低碳", "無糖", "生酮", "無澱粉", "無麵粉", "花椰菜米", "櫛瓜麵", "生菜包", "蒟蒻絲", "低GI", "燕麥", "奇亞籽"],
  "減醣": ["低糖", "減醣", "極低碳", "低碳", "無糖", "生酮", "無澱粉", "無麵粉", "花椰菜米", "櫛瓜麵", "米紙皮"],
  "低脂": ["低脂", "無油", "清蒸", "水煮", "氣炸", "去皮", "雞胸肉", "鯛魚", "鱸魚", "蝦仁", "干貝", "蛤蜊", "嫩豆腐", "白豆"],
  "少鹽": ["少鹽", "減鈉", "無鹽", "薄鹽", "清淡", "檸檬汁", "迷迭香", "天然辛香料", "消水腫", "DASH", "冬瓜", "芹菜", "黑橄欖", "第戎芥末醬"],
  "減鈉": ["少鹽", "減鈉", "無鹽", "薄鹽", "消水腫", "高鉀", "冬瓜", "芹菜", "干貝", "檸檬汁", "天然辛香料"],
  "無油": ["無油", "清蒸", "水煮", "免開火", "氣炸", "生春捲", "涼拌"],
  "高蛋白": ["增肌", "高蛋白", "雞胸肉", "牛肉", "鮭魚", "鯛魚", "鱸魚", "蝦仁", "雞蛋", "豆腐", "毛豆仁", "鮪魚", "希臘優格", "白豆"],

  // 國外著名料理關鍵字拓展
  "希臘": ["希臘檸檬香草烤雞佐黃瓜酸奶醬", "無糖希臘優格", "地中海飲食"],
  "地中海": ["地中海烤海鱸魚佐刺山柑番茄黑橄欖", "希臘檸檬香草烤雞佐黃瓜酸奶醬", "橄欖油", "黑橄欖"],
  "墨西哥": ["墨西哥青檸彩椒牛排法士達碗", "牛板腱", "彩椒", "酪梨", "孜然"],
  "法式": ["法式第戎芥末籽慢烤鮭魚佐球芽甘藍", "第戎芥末籽醬"],
  "西班牙": ["西班牙蒜香紅椒低油白蝦熱鐵板", "煙燻紅椒粉"],
  "越南": ["越南清爽鮮蝦米紙生春捲", "米紙皮", "生春捲"],

  // 食材別名
  "蛋": ["雞蛋", "水煮蛋", "蛋花", "溏心蛋", "炒蛋", "嫩蛋", "太陽蛋", "荷包蛋", "茶碗蒸", "烘蛋"],
  "雞蛋": ["蛋", "水煮蛋", "蛋液", "太陽蛋", "荷包蛋", "烘蛋"],
  "雞肉": ["雞胸肉", "去骨雞腿排", "雞腿肉", "雞絲", "舒肥雞胸", "雞里肌", "雞柳條", "雞胸絞肉", "雞肉丁"],
  "雞胸": ["雞胸肉", "雞胸", "舒肥雞胸", "雞絲", "雞胸絞肉", "雞胸肉丁"],
  "牛": ["牛肉", "牛里肌", "牛里肌肉", "牛排", "牛腩", "牛瘦肉片", "牛柳", "牛肉片", "牛板腱", "牛板腱肉排"],
  "牛肉": ["牛里肌", "牛里肌肉片", "牛排", "牛瘦肉片", "牛柳", "牛肉片", "牛板腱"],
  "魚": ["鮭魚", "鯛魚", "魚排", "生鮮鮭魚菲力", "台灣鯛魚排", "鱸魚", "鯖魚", "金目鱸魚排", "薄鹽鯖魚菲力", "鮪魚", "生鮮鮪魚排"],
  "鮭魚": ["生鮮鮭魚菲力", "鮭魚排", "生鮮鮭魚切塊", "鮭魚"],
  "鯛魚": ["台灣鯛魚排", "鯛魚片", "鯛魚"],
  "鱸魚": ["金目鱸魚排", "鱸魚菲力", "鱸魚", "金目鱸魚"],
  "鯖魚": ["青花魚", "薄鹽鯖魚菲力", "鯖魚"],
  "鮪魚": ["生鮮鮪魚排", "鮪魚", "鮪魚排"],
  "蝦": ["蝦仁", "鮮蝦仁", "白蝦", "生鮮蝦仁", "熟蝦仁", "鮮蝦", "無毒鮮蝦仁"],
  "蝦仁": ["蝦", "白蝦", "鮮蝦仁", "熟蝦仁", "鮮蝦"],
  "豆腐": ["板豆腐", "嫩豆腐", "老板豆腐", "豆腐丁", "碎豆腐"],
  "花椰菜": ["青花菜", "白花椰菜", "白花椰菜米", "花椰菜米"],
  "番茄": ["牛番茄", "小番茄", "番茄塊", "番茄丁"],
  "菇": ["杏鮑菇", "鴻禧菇", "金針菇", "香菇", "鮮香菇", "鮮菇", "鮮冬菇", "雙菇"],
  "地瓜": ["黃地瓜", "地瓜塊", "甘藷", "紫地瓜"],
  "燕麥": ["大燕麥片", "燕麥片", "燕麥"],
  "藜麥": ["三色藜麥", "熟三色藜麥", "藜麥"],
  "鷹嘴豆": ["熟鷹嘴豆", "鷹嘴豆", "白豆"],
  "優格": ["無糖希臘優格", "希臘優格", "優格"],
  "奇亞籽": ["奇亞籽"],
  "蒟蒻": ["蒟蒻絲", "魔芋絲", "蒟蒻結", "蒟蒻"],
  "瓜": ["櫛瓜", "小黃瓜", "絲瓜", "南瓜", "冬瓜"],
  "貝": ["干貝", "鮮干貝", "蛤蜊", "活蛤蜊"],
  "菜": ["青花菜", "菠菜", "娃娃菜", "高麗菜", "生菜", "綜合生菜", "美生菜", "芹菜", "球芽甘藍", "抱子甘藍"],
  "海鮮": ["鮭魚", "鯛魚", "鱸魚", "鯖魚", "蝦仁", "鮮蝦", "白蝦", "蛤蜊", "干貝", "魚排", "生鮮鮭魚菲力", "台灣鯛魚排", "金目鱸魚排", "薄鹽鯖魚菲力", "鮪魚"],
  "辣": ["辣椒", "辣椒粉", "紅辣椒", "泡菜", "韓式辣醬", "花椒", "七味粉", "蒜辣", "泰式", "打拋"],
  "辣椒": ["辣椒粉", "紅辣椒", "辣椒碎", "辣椒圈"],
  "香菜": ["新鮮香菜", "香菜"],
  "蒜": ["蒜頭", "大蒜", "蒜片", "蒜泥", "蒜末", "蒜蓉", "大蒜粉"],
  "洋蔥": ["洋蔥", "紫洋蔥", "洋蔥絲", "洋蔥丁", "洋蔥末"],
  "起司": ["起司絲", "摩佐羅拉起司", "低脂摩佐羅拉起司絲", "起司"],
  "乳製品": ["起司", "起司絲", "摩佐羅拉起司", "無糖希臘優格", "希臘優格", "牛奶", "無鹽奶油"],
  "豬": ["培根", "豬肉", "豬里肌"]
};
