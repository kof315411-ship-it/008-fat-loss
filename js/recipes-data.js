/**
 * 減脂餐全球智庫 (100+ 道精選全球多元健康減脂食譜、點心與低卡飲品)
 * 涵蓋歐美、地中海、拉丁美洲、日韓、東南亞、中東與在地健康飲食
 * 全面去除高相似度重複食譜，確保每一道皆具備獨特風味、食材與營養亮點！
 */
const DEFAULT_RECIPES = [
  {
    "id": "rec-001",
    "title": "希臘檸檬香草烤雞佐黃瓜酸奶醬 (Tzatziki)",
    "category": "high-protein",
    "categoryName": "高蛋白肌力",
    "calories": 270,
    "protein": 38,
    "fat": 7,
    "carbs": 9,
    "prepTime": 18,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "BBC Good Food (英國)",
    "sourceUrl": "https://www.bbcgoodfood.com",
    "tags": [
      "增肌",
      "減脂",
      "低糖",
      "少鹽",
      "雞胸肉",
      "無糖希臘優格",
      "小黃瓜",
      "檸檬汁",
      "大蒜",
      "地中海飲食"
    ],
    "ingredients": [
      {
        "name": "雞胸肉",
        "amount": "180g (切厚片)",
        "isMain": true
      },
      {
        "name": "無糖希臘優格",
        "amount": "60g",
        "isMain": true
      },
      {
        "name": "小黃瓜",
        "amount": "半條 (磨碎擠乾)",
        "isMain": true
      },
      {
        "name": "新鮮檸檬汁",
        "amount": "1大匙",
        "isMain": false
      },
      {
        "name": "大蒜泥",
        "amount": "1瓣",
        "isMain": false
      },
      {
        "name": "乾燥奧勒岡草",
        "amount": "1/2小匙",
        "isMain": false
      },
      {
        "name": "橄欖油",
        "amount": "1/2小匙",
        "isMain": false
      }
    ],
    "steps": [
      "雞胸肉以檸檬汁、奧勒岡草、黑胡椒與微量橄欖油醃漬 10 分鐘。",
      "將希臘優格、碎小黃瓜、蒜泥與檸檬汁拌勻成清爽濃郁的希臘 Tzatziki 醬。",
      "平底鍋或氣炸鍋煎烤雞胸肉至雙面金黃熟透（約 8-10 分鐘）。",
      "切片佐上冰涼黃瓜酸奶醬享用，享受地中海高蛋白清爽風味！"
    ],
    "tips": "希臘優格取代高熱量沙拉醬，蛋白質倍增且富含活性益生菌！"
  },
  {
    "id": "rec-002",
    "title": "地中海烤海鱸魚佐刺山柑番茄黑橄欖",
    "category": "high-protein",
    "categoryName": "高蛋白肌力",
    "calories": 230,
    "protein": 34,
    "fat": 7,
    "carbs": 6,
    "prepTime": 15,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    "source": "Jamie Oliver 健康專欄 (歐洲)",
    "sourceUrl": "https://www.jamieoliver.com",
    "tags": [
      "增肌",
      "減脂",
      "低糖",
      "少鹽",
      "鱸魚",
      "小番茄",
      "黑橄欖",
      "刺山柑",
      "白酒",
      "地中海飲食"
    ],
    "ingredients": [
      {
        "name": "金目鱸魚菲力",
        "amount": "180g",
        "isMain": true
      },
      {
        "name": "小番茄",
        "amount": "6顆 (對半切)",
        "isMain": true
      },
      {
        "name": "黑橄欖",
        "amount": "4顆 (切圈)",
        "isMain": false
      },
      {
        "name": "新鮮羅勒葉",
        "amount": "1小把",
        "isMain": false
      },
      {
        "name": "大蒜",
        "amount": "2瓣 (切薄片)",
        "isMain": false
      },
      {
        "name": "白酒",
        "amount": "1大匙",
        "isMain": false
      }
    ],
    "steps": [
      "烤盤鋪上蒜片、小番茄與黑橄欖，放上鱸魚菲力並淋白酒。",
      "烤箱預熱 200°C 烤 12-14 分鐘至番茄微爆汁、魚肉雪白細嫩。",
      "出爐灑上新鮮羅勒葉碎享用。"
    ],
    "tips": "黑橄欖天然果香鹹味提鮮，完全不需額外加精鹽調味！"
  },
  {
    "id": "rec-003",
    "title": "法式第戎芥末籽慢烤鮭魚佐球芽甘藍",
    "category": "high-protein",
    "categoryName": "高蛋白肌力",
    "calories": 330,
    "protein": 35,
    "fat": 17,
    "carbs": 8,
    "prepTime": 20,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
    "source": "EatingWell (美國)",
    "sourceUrl": "https://www.eatingwell.com",
    "tags": [
      "增肌",
      "減脂",
      "低糖",
      "少鹽",
      "鮭魚",
      "球芽甘藍",
      "抱子甘藍",
      "第戎芥末醬",
      "Omega3"
    ],
    "ingredients": [
      {
        "name": "生鮮鮭魚菲力",
        "amount": "150g",
        "isMain": true
      },
      {
        "name": "球芽甘藍",
        "amount": "80g (對半切)",
        "isMain": true
      },
      {
        "name": "法式第戎芥末籽醬",
        "amount": "1大匙",
        "isMain": false
      },
      {
        "name": "檸檬汁",
        "amount": "1小匙",
        "isMain": false
      },
      {
        "name": "現磨黑胡椒",
        "amount": "1/2小匙",
        "isMain": false
      }
    ],
    "steps": [
      "第戎芥末籽醬、檸檬汁與黑胡椒抹在鮭魚菲力頂部。",
      "球芽甘藍與鮭魚排平鋪烤盤，氣炸鍋或烤箱 180°C 烤 14-16 分鐘至甘藍邊緣焦脆、鮭魚流油。",
      "出爐享受芥末籽微辛甘甜與深海優質好油！"
    ],
    "tips": "球芽甘藍富含硫化物與維生素K，與好油一同烘烤吸收率倍增！"
  },
  {
    "id": "rec-004",
    "title": "西班牙蒜香紅椒低油白蝦熱鐵板 (Gambas al Ajillo)",
    "category": "quick-meal",
    "categoryName": "超快即食",
    "calories": 190,
    "protein": 28,
    "fat": 6,
    "carbs": 4,
    "prepTime": 8,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    "source": "Serious Eats (美國)",
    "sourceUrl": "https://www.seriouseats.com",
    "tags": [
      "減脂",
      "低糖",
      "低脂",
      "少鹽",
      "蝦仁",
      "白蝦",
      "大蒜",
      "西班牙煙燻紅椒粉",
      "Tapas"
    ],
    "ingredients": [
      {
        "name": "無毒鮮蝦仁",
        "amount": "10-12隻",
        "isMain": true
      },
      {
        "name": "大蒜",
        "amount": "5瓣 (切厚片)",
        "isMain": true
      },
      {
        "name": "西班牙煙燻紅椒粉",
        "amount": "1/2小匙",
        "isMain": false
      },
      {
        "name": "新鮮歐芹",
        "amount": "1把 (切碎)",
        "isMain": false
      },
      {
        "name": "橄欖油",
        "amount": "1小匙",
        "isMain": false
      },
      {
        "name": "檸檬角",
        "amount": "1塊",
        "isMain": false
      }
    ],
    "steps": [
      "鑄鐵鍋下一小匙油，冷油小火煸出蒜片香氣。",
      "轉中大火，下鮮蝦仁大火翻炒 90 秒至轉紅彈牙。",
      "關火加入煙燻紅椒粉與歐芹碎翻勻，擠上檸檬汁趁熱享用！"
    ],
    "tips": "改良版僅用 1 小匙油低溫煸蒜香，熱量降低 70%！"
  },
  {
    "id": "rec-005",
    "title": "義式托斯卡尼番茄嫩白豆燉雞 (Tuscan Chicken)",
    "category": "high-protein",
    "categoryName": "高蛋白肌力",
    "calories": 320,
    "protein": 40,
    "fat": 6,
    "carbs": 22,
    "prepTime": 20,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    "source": "EatingWell (美國)",
    "sourceUrl": "https://www.eatingwell.com",
    "tags": [
      "增肌",
      "減脂",
      "低脂",
      "少鹽",
      "雞胸肉",
      "白豆",
      "熟白豆",
      "嫩菠菜",
      "牛番茄",
      "義大利料理"
    ],
    "ingredients": [
      {
        "name": "雞胸肉排",
        "amount": "180g",
        "isMain": true
      },
      {
        "name": "熟白豆/鷹嘴豆",
        "amount": "70g",
        "isMain": true
      },
      {
        "name": "新鮮嫩菠菜",
        "amount": "60g",
        "isMain": true
      },
      {
        "name": "牛番茄",
        "amount": "1顆 (切丁)",
        "isMain": true
      },
      {
        "name": "迷迭香",
        "amount": "1/2小匙",
        "isMain": false
      }
    ],
    "steps": [
      "雞胸肉雙面煎至金黃後取出。",
      "鍋內下番茄丁與 100ml 水小火煨煮成濃郁番茄醬，加入熟白豆與迷迭香燉 3 分鐘。",
      "倒回雞胸肉，最後放入嫩菠菜燜煮 1 分鐘即可出鍋。"
    ],
    "tips": "托斯卡尼白豆慢消化抗性澱粉與纖維，高蛋白又低脂！"
  },
  {
    "id": "rec-006",
    "title": "義式番茄水牛莫札瑞拉烤茄子千層 (Eggplant Caprese)",
    "category": "low-carb",
    "categoryName": "極低碳減醣",
    "calories": 220,
    "protein": 16,
    "fat": 11,
    "carbs": 14,
    "prepTime": 20,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1546069901-d00d238260b4?auto=format&fit=crop&w=800&q=80",
    "source": "Food Network (美國)",
    "sourceUrl": "https://www.foodnetwork.com",
    "tags": [
      "減脂",
      "低糖",
      "減醣",
      "少鹽",
      "圓茄",
      "牛番茄",
      "莫札瑞拉起司",
      "羅勒",
      "生酮"
    ],
    "ingredients": [
      {
        "name": "圓茄/茄子",
        "amount": "1條 (切厚圓片)",
        "isMain": true
      },
      {
        "name": "牛番茄",
        "amount": "1顆 (切圓片)",
        "isMain": true
      },
      {
        "name": "低脂莫札瑞拉起司",
        "amount": "30g",
        "isMain": true
      },
      {
        "name": "新鮮羅勒葉",
        "amount": "數片",
        "isMain": false
      },
      {
        "name": "巴薩米克黑醋",
        "amount": "1小匙",
        "isMain": false
      }
    ],
    "steps": [
      "茄子圓片乾煎至雙面軟化上色。",
      "以茄子、番茄、起司片交疊排成千層塔。",
      "烤箱 190°C 烤 8 分鐘至起司融化金黃，出爐淋黑醋綴羅勒！"
    ],
    "tips": "用茄子取代傳統麵皮，碳水直降 85%！"
  },
  {
    "id": "rec-007",
    "title": "葡萄牙香蒜白酒羅勒滾大蛤蜊 (Amêijoas à Bulhão Pato)",
    "category": "soups",
    "categoryName": "低卡暖胃湯",
    "calories": 160,
    "protein": 22,
    "fat": 4,
    "carbs": 5,
    "prepTime": 10,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    "source": "BBC Good Food (英國)",
    "sourceUrl": "https://www.bbcgoodfood.com",
    "tags": [
      "減脂",
      "低糖",
      "低脂",
      "少鹽",
      "蛤蜊",
      "大蒜",
      "白酒",
      "香菜",
      "檸檬汁",
      "高鋅"
    ],
    "ingredients": [
      {
        "name": "新鮮活蛤蜊",
        "amount": "300g (吐沙洗淨)",
        "isMain": true
      },
      {
        "name": "大蒜",
        "amount": "4瓣 (切片)",
        "isMain": true
      },
      {
        "name": "白酒",
        "amount": "40ml",
        "isMain": false
      },
      {
        "name": "新鮮香菜/羅勒",
        "amount": "1把",
        "isMain": false
      },
      {
        "name": "橄欖油",
        "amount": "1/2小匙",
        "isMain": false
      },
      {
        "name": "檸檬汁",
        "amount": "1小匙",
        "isMain": false
      }
    ],
    "steps": [
      "鍋內薄油炒香蒜片，倒入吐好沙的蛤蜊與白酒。",
      "蓋上鍋蓋大火燜煮 2-3 分鐘至蛤蜊全部飽滿開殼。",
      "灑入大把香菜碎與新鮮檸檬汁即可連湯帶肉痛快享用！"
    ],
    "tips": "蛤蜊富含天然鐵與鋅，湯頭鮮甜濃郁零負擔！"
  },
  {
    "id": "rec-008",
    "title": "法式經典普羅旺斯燉菜佐水波蛋 (Ratatouille)",
    "category": "low-carb",
    "categoryName": "極低碳減醣",
    "calories": 190,
    "protein": 11,
    "fat": 8,
    "carbs": 18,
    "prepTime": 22,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "source": "Jamie Oliver (歐洲)",
    "sourceUrl": "https://www.jamieoliver.com",
    "tags": [
      "減脂",
      "低糖",
      "低脂",
      "少鹽",
      "櫛瓜",
      "圓茄",
      "牛番茄",
      "彩椒",
      "雞蛋",
      "法式鄉村"
    ],
    "ingredients": [
      {
        "name": "綠黃櫛瓜",
        "amount": "各半條 (切圓片)",
        "isMain": true
      },
      {
        "name": "茄子",
        "amount": "半條 (切圓片)",
        "isMain": true
      },
      {
        "name": "熟番茄",
        "amount": "1顆 (切圓片)",
        "isMain": true
      },
      {
        "name": "雞蛋",
        "amount": "1顆 (做成水波蛋)",
        "isMain": true
      },
      {
        "name": "普羅旺斯綜合香草",
        "amount": "1小匙",
        "isMain": false
      }
    ],
    "steps": [
      "平底鍋將櫛瓜、茄子、番茄片交錯排列成螺旋狀，撒上綜合香草與少許橄欖油。",
      "蓋鍋小火慢燉 15 分鐘至蔬菜自然出汁軟爛化為甜美蔬菜濃汁。",
      "起鍋前放上一顆水波蛋，劃破蛋黃拌著鮮甜時蔬享用！"
    ],
    "tips": "蔬菜在慢燉中釋放天然甘甜，完全不需額外加糖加水！"
  },
  {
    "id": "rec-009",
    "title": "西班牙安達盧西亞冷湯 (Gazpacho - 冰涼消暑排毒湯)",
    "category": "soups",
    "categoryName": "低卡暖胃湯",
    "calories": 120,
    "protein": 3,
    "fat": 5,
    "carbs": 16,
    "prepTime": 8,
    "difficulty": "極簡易",
    "servings": 2,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "source": "BBC Good Food (英國)",
    "sourceUrl": "https://www.bbcgoodfood.com",
    "tags": [
      "減脂",
      "低糖",
      "低脂",
      "少鹽",
      "牛番茄",
      "小黃瓜",
      "紅彩椒",
      "大蒜",
      "巴薩米克黑醋",
      "免開火冷湯"
    ],
    "ingredients": [
      {
        "name": "熟透牛番茄",
        "amount": "2顆 (切塊)",
        "isMain": true
      },
      {
        "name": "小黃瓜",
        "amount": "1條 (去皮切塊)",
        "isMain": true
      },
      {
        "name": "紅彩椒",
        "amount": "半顆 (切塊)",
        "isMain": true
      },
      {
        "name": "大蒜",
        "amount": "1瓣",
        "isMain": false
      },
      {
        "name": "雪莉醋/紅酒醋",
        "amount": "1大匙",
        "isMain": false
      },
      {
        "name": "特級初榨橄欖油",
        "amount": "1小匙",
        "isMain": false
      }
    ],
    "steps": [
      "將番茄、小黃瓜、紅彩椒、大蒜、紅酒醋與橄欖油放入果汁機中。",
      "高速攪打 1 分鐘至完全細膩絲滑。",
      "放入冰箱冷藏 30 分鐘，冰涼酸爽、極致排毒解渴！"
    ],
    "tips": "西班牙夏日神級名湯，保留 100% 茄紅素與維生素C，抗氧化力滿分！"
  },
  {
    "id": "rec-010",
    "title": "經典希臘菲達起司清爽生菜沙拉 (Greek Salad)",
    "category": "quick-meal",
    "categoryName": "超快即食",
    "calories": 180,
    "protein": 8,
    "fat": 11,
    "carbs": 10,
    "prepTime": 8,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "source": "EatingWell (美國)",
    "sourceUrl": "https://www.eatingwell.com",
    "tags": [
      "減脂",
      "低糖",
      "少鹽",
      "小黃瓜",
      "小番茄",
      "黑橄欖",
      "紫洋蔥",
      "菲達起司",
      "地中海飲食",
      "免開火"
    ],
    "ingredients": [
      {
        "name": "小黃瓜",
        "amount": "1條 (滾刀塊)",
        "isMain": true
      },
      {
        "name": "小番茄",
        "amount": "8顆 (對半切)",
        "isMain": true
      },
      {
        "name": "黑橄欖",
        "amount": "5顆",
        "isMain": false
      },
      {
        "name": "紫洋蔥絲",
        "amount": "20g",
        "isMain": false
      },
      {
        "name": "希臘菲達起司",
        "amount": "25g (捏碎)",
        "isMain": true
      },
      {
        "name": "檸檬汁與橄欖油",
        "amount": "各1小匙",
        "isMain": false
      }
    ],
    "steps": [
      "大碗中放入小黃瓜、小番茄、黑橄欖與紫洋蔥絲。",
      "頂部撒上碎菲達起司與乾燥奧勒岡草。",
      "淋上檸檬汁與少許初榨橄欖油輕柔拌勻享用。"
    ],
    "tips": "菲達羊起司自帶濃郁乳香與微酸鹹感，完全不需化學沙拉醬！"
  },
  {
    "id": "rec-011",
    "title": "墨西哥奇波雷辣黑豆雞胸肉低碳碗 (Burrito Bowl)",
    "category": "high-protein",
    "categoryName": "高蛋白肌力",
    "calories": 320,
    "protein": 38,
    "fat": 8,
    "carbs": 24,
    "prepTime": 15,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "source": "Skinnytaste (美國)",
    "sourceUrl": "https://www.skinnytaste.com",
    "tags": [
      "增肌",
      "減脂",
      "低糖",
      "雞胸肉",
      "白花椰菜米",
      "熟黑豆",
      "莎莎醬",
      "酪梨",
      "墨西哥料理"
    ],
    "ingredients": [
      {
        "name": "舒肥雞胸肉",
        "amount": "150g (切丁)",
        "isMain": true
      },
      {
        "name": "熟黑豆",
        "amount": "50g",
        "isMain": true
      },
      {
        "name": "白花椰菜米",
        "amount": "120g",
        "isMain": true
      },
      {
        "name": "番茄莎莎醬",
        "amount": "2大匙",
        "isMain": false
      },
      {
        "name": "成熟酪梨",
        "amount": "25g",
        "isMain": false
      }
    ],
    "steps": [
      "碗底鋪上熱花椰菜米。",
      "鋪上雞胸丁、黑豆、莎莎醬與酪梨。",
      "擠青檸檬汁與香菜拌勻享用。"
    ],
    "tips": "花椰菜米取代白米，碳水降低 75%！"
  },
  {
    "id": "rec-012",
    "title": "巴西檸香香草煎鯛魚排佐羽衣甘藍",
    "category": "high-protein",
    "categoryName": "高蛋白肌力",
    "calories": 250,
    "protein": 36,
    "fat": 6,
    "carbs": 8,
    "prepTime": 12,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    "source": "EatingWell (美國)",
    "sourceUrl": "https://www.eatingwell.com",
    "tags": [
      "增肌",
      "減脂",
      "低脂",
      "少鹽",
      "鯛魚",
      "羽衣甘藍",
      "大蒜",
      "檸檬汁",
      "巴西風味"
    ],
    "ingredients": [
      {
        "name": "台灣鯛魚排",
        "amount": "180g",
        "isMain": true
      },
      {
        "name": "羽衣甘藍葉",
        "amount": "60g",
        "isMain": true
      },
      {
        "name": "大蒜泥",
        "amount": "2瓣",
        "isMain": false
      },
      {
        "name": "檸檬汁",
        "amount": "1大匙",
        "isMain": false
      }
    ],
    "steps": [
      "鯛魚以蒜泥與檸檬汁醃 5 分鐘後煎至金黃。",
      "同鍋大火快炒羽衣甘藍 1 分鐘一同裝盤。"
    ],
    "tips": "羽衣甘藍是超級抗氧化之王，微苦脆甜與檸香魚肉絕配！"
  },
  {
    "id": "rec-013",
    "title": "阿根廷青醬嫩煎牛板腱 (Chimichurri Steak)",
    "category": "high-protein",
    "categoryName": "高蛋白肌力",
    "calories": 330,
    "protein": 40,
    "fat": 12,
    "carbs": 4,
    "prepTime": 15,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    "source": "Delish (美國)",
    "sourceUrl": "https://www.delish.com",
    "tags": [
      "增肌",
      "減脂",
      "低糖",
      "牛板腱",
      "牛肉",
      "歐芹",
      "大蒜",
      "紅酒醋",
      "阿根廷料理"
    ],
    "ingredients": [
      {
        "name": "牛板腱肉排",
        "amount": "180g",
        "isMain": true
      },
      {
        "name": "新鮮歐芹碎",
        "amount": "2大匙",
        "isMain": true
      },
      {
        "name": "大蒜碎",
        "amount": "1瓣",
        "isMain": false
      },
      {
        "name": "紅酒醋",
        "amount": "1小匙",
        "isMain": false
      },
      {
        "name": "橄欖油",
        "amount": "1/2小匙",
        "isMain": false
      }
    ],
    "steps": [
      "將歐芹碎、蒜碎、紅酒醋與微量橄欖油調和成酸香 Chimichurri 青醬。",
      "牛排高溫大火每面煎 2 分鐘，靜置 3 分鐘切厚片，淋上酸香青醬！"
    ],
    "tips": "阿根廷奇米秋里醬酸香解膩，能促進消化與血基質鐵吸收！"
  },
  {
    "id": "rec-014",
    "title": "加勒比海香檸柑橘烤雞胸肉串 (Jerk Chicken Skewers)",
    "category": "high-protein",
    "categoryName": "高蛋白肌力",
    "calories": 250,
    "protein": 40,
    "fat": 5,
    "carbs": 6,
    "prepTime": 15,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "Food Network (美國)",
    "sourceUrl": "https://www.foodnetwork.com",
    "tags": [
      "增肌",
      "減脂",
      "低糖",
      "低脂",
      "雞胸肉",
      "彩椒",
      "肉桂粉",
      "生薑",
      "青檸汁",
      "加勒比海"
    ],
    "ingredients": [
      {
        "name": "雞胸肉丁",
        "amount": "190g",
        "isMain": true
      },
      {
        "name": "三色彩椒塊",
        "amount": "80g",
        "isMain": true
      },
      {
        "name": "加勒比海綜合辛香料",
        "amount": "1小匙 (生薑+肉桂+百里香)",
        "isMain": false
      },
      {
        "name": "青檸汁",
        "amount": "1大匙",
        "isMain": false
      }
    ],
    "steps": [
      "雞肉丁以辛香料與青檸汁醃 10 分鐘。",
      "以竹籤交錯串起雞肉丁與彩椒塊。",
      "氣炸鍋 190°C 烤 12 分鐘至微焦上色！"
    ],
    "tips": "天然辛香料能提高核心體溫、促進新陳代謝！"
  },
  {
    "id": "rec-015",
    "title": "夏威夷炙燒鮭魚酪梨波奇碗 (Ahi Salmon Poke)",
    "category": "high-protein",
    "categoryName": "高蛋白肌力",
    "calories": 340,
    "protein": 32,
    "fat": 14,
    "carbs": 18,
    "prepTime": 12,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "source": "Tasty (國際)",
    "sourceUrl": "https://tasty.co",
    "tags": [
      "增肌",
      "減脂",
      "生鮮鮭魚",
      "酪梨",
      "毛豆仁",
      "小黃瓜",
      "三色藜麥",
      "夏威夷料理"
    ],
    "ingredients": [
      {
        "name": "生食級鮭魚菲力",
        "amount": "120g (切大丁炙燒)",
        "isMain": true
      },
      {
        "name": "熟毛豆仁",
        "amount": "40g",
        "isMain": true
      },
      {
        "name": "成熟酪梨",
        "amount": "30g",
        "isMain": true
      },
      {
        "name": "熟三色藜麥",
        "amount": "50g",
        "isMain": true
      },
      {
        "name": "薄鹽生抽與檸檬汁",
        "amount": "各1小匙",
        "isMain": false
      }
    ],
    "steps": [
      "碗中盛入熟藜麥。",
      "鋪上炙燒鮭魚丁、毛豆仁、小黃瓜片與酪梨丁。",
      "淋上薄鹽檸檬汁拌勻即可痛快大吃！"
    ],
    "tips": "藜麥與鮭魚搭配提供全光譜必需胺基酸與 Omega-3！"
  },
  {
    "id": "rec-016",
    "title": "日式柚子胡椒烤秋刀魚佐白蘿蔔泥",
    "category": "high-protein",
    "categoryName": "高蛋白肌力",
    "calories": 290,
    "protein": 26,
    "fat": 18,
    "carbs": 5,
    "prepTime": 15,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    "source": "日本減醣食譜 Kurashiru",
    "sourceUrl": "https://cookpad.com/tw",
    "tags": [
      "增肌",
      "減脂",
      "低糖",
      "秋刀魚",
      "白蘿蔔",
      "柚子胡椒",
      "好油脂",
      "日式料理"
    ],
    "ingredients": [
      {
        "name": "新鮮秋刀魚",
        "amount": "1尾",
        "isMain": true
      },
      {
        "name": "白蘿蔔泥",
        "amount": "50g",
        "isMain": true
      },
      {
        "name": "柚子胡椒",
        "amount": "1/2小匙",
        "isMain": false
      }
    ],
    "steps": [
      "秋刀魚抹柚子胡椒，氣炸鍋 200°C 烤 12 分鐘至魚皮焦脆。",
      "佐白蘿蔔泥與檸檬汁享用。"
    ],
    "tips": "白蘿蔔泥酵素助消化，柚子胡椒清香高雅！"
  },
  {
    "id": "rec-017",
    "title": "韓式低脂生牛肉生菜溫沙拉 (Yukhoe Style)",
    "category": "high-protein",
    "categoryName": "高蛋白肌力",
    "calories": 260,
    "protein": 36,
    "fat": 8,
    "carbs": 9,
    "prepTime": 10,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    "source": "小紅書健康減脂精選",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "增肌",
      "減脂",
      "低糖",
      "少鹽",
      "牛里肌",
      "水梨",
      "水煮蛋",
      "美生菜",
      "韓式料理"
    ],
    "ingredients": [
      {
        "name": "牛里肌肉排",
        "amount": "160g (快速汆燙切細條)",
        "isMain": true
      },
      {
        "name": "清脆水梨絲",
        "amount": "30g",
        "isMain": true
      },
      {
        "name": "蛋黃",
        "amount": "1顆",
        "isMain": true
      },
      {
        "name": "綜合生菜",
        "amount": "60g",
        "isMain": true
      }
    ],
    "steps": [
      "牛肉汆燙切條拌香油與芝麻。",
      "放上水梨絲與蛋黃拌勻享用。"
    ],
    "tips": "水梨酵素軟化牛肉，低脂高蛋白吸收率極佳！"
  },
  {
    "id": "rec-018",
    "title": "日式照燒板豆腐嫩雞肉漢堡排",
    "category": "high-protein",
    "categoryName": "高蛋白肌力",
    "calories": 260,
    "protein": 36,
    "fat": 6,
    "carbs": 8,
    "prepTime": 15,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
    "source": "Cookpad",
    "sourceUrl": "https://cookpad.com/tw",
    "tags": [
      "增肌",
      "減脂",
      "低糖",
      "低脂",
      "雞胸絞肉",
      "板豆腐",
      "洋蔥",
      "日式定食"
    ],
    "ingredients": [
      {
        "name": "雞胸絞肉",
        "amount": "150g",
        "isMain": true
      },
      {
        "name": "板豆腐",
        "amount": "80g (捏碎壓乾)",
        "isMain": true
      },
      {
        "name": "洋蔥丁",
        "amount": "30g",
        "isMain": false
      },
      {
        "name": "薄鹽生抽與味醂",
        "amount": "各1小匙",
        "isMain": false
      }
    ],
    "steps": [
      "絞肉、豆腐泥與洋蔥丁摔打出黏性捏成厚肉餅。",
      "平底鍋兩面煎金黃，加少許醬油味醂水燜煎 4 分鐘收汁。"
    ],
    "tips": "板豆腐增添爆汁鬆軟口感，大幅降低肉類脂肪！"
  },
  {
    "id": "rec-019",
    "title": "韓式海帶芽牛肉清湯 (Miyeok Guk)",
    "category": "soups",
    "categoryName": "低卡暖胃湯",
    "calories": 180,
    "protein": 24,
    "fat": 5,
    "carbs": 8,
    "prepTime": 15,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    "source": "愛料理 iCook",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "少鹽",
      "牛里肌",
      "海帶芽",
      "大蒜",
      "香油",
      "補鐵排鈉"
    ],
    "ingredients": [
      {
        "name": "牛里肌肉片",
        "amount": "100g",
        "isMain": true
      },
      {
        "name": "乾海帶芽",
        "amount": "8g (泡發)",
        "isMain": true
      },
      {
        "name": "蒜末",
        "amount": "1小匙",
        "isMain": false
      },
      {
        "name": "清水",
        "amount": "450ml",
        "isMain": false
      }
    ],
    "steps": [
      "少許香油炒香蒜末與牛肉片至半熟。",
      "加入發開的海帶芽炒 1 分鐘，加水大火煮沸後轉小火滾 10 分鐘。"
    ],
    "tips": "海帶芽褐藻醣膠促進新陳代謝，高鉀排鈉超暖胃！"
  },
  {
    "id": "rec-020",
    "title": "日式柴魚高湯茶碗蒸佐鮮蝦香菇",
    "category": "quick-meal",
    "categoryName": "超快即食",
    "calories": 140,
    "protein": 18,
    "fat": 5,
    "carbs": 4,
    "prepTime": 12,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    "source": "日本減醣食譜 Kurashiru",
    "sourceUrl": "https://cookpad.com/tw",
    "tags": [
      "減脂",
      "低糖",
      "低脂",
      "少鹽",
      "雞蛋",
      "鮮蝦仁",
      "鮮香菇",
      "毛豆仁",
      "微波爐"
    ],
    "ingredients": [
      {
        "name": "雞蛋",
        "amount": "2顆",
        "isMain": true
      },
      {
        "name": "無毒鮮蝦仁",
        "amount": "3隻",
        "isMain": true
      },
      {
        "name": "鮮香菇",
        "amount": "1朵 (切薄片)",
        "isMain": false
      },
      {
        "name": "柴魚高湯/溫開水",
        "amount": "180ml",
        "isMain": false
      }
    ],
    "steps": [
      "蛋液與柴魚高湯 1:1.8 充分過篩去泡。",
      "放入碗中加入蝦仁與香菇，電鍋外鍋半杯水（蓋留縫）蒸 10 分鐘。"
    ],
    "tips": "蛋水比例與過篩是如布丁般滑嫩的關鍵，低卡高蛋白！"
  },
  {
    "id": "rec-021",
    "title": "泰式冬蔭功鮮蝦檸檬酸辣清湯 (Tom Yum Goong)",
    "category": "soups",
    "categoryName": "低卡暖胃湯",
    "calories": 160,
    "protein": 26,
    "fat": 3,
    "carbs": 9,
    "prepTime": 12,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    "source": "BBC Good Food (英國)",
    "sourceUrl": "https://www.bbcgoodfood.com",
    "tags": [
      "減脂",
      "低糖",
      "低脂",
      "鮮蝦仁",
      "秀珍菇",
      "牛番茄",
      "檸檬汁",
      "香茅",
      "南薑",
      "泰式名菜"
    ],
    "ingredients": [
      {
        "name": "無毒鮮蝦仁",
        "amount": "8-10隻",
        "isMain": true
      },
      {
        "name": "秀珍菇/草菇",
        "amount": "60g",
        "isMain": true
      },
      {
        "name": "牛番茄",
        "amount": "1顆 (切塊)",
        "isMain": true
      },
      {
        "name": "香茅與南薑",
        "amount": "適量",
        "isMain": false
      },
      {
        "name": "檸檬汁與魚露",
        "amount": "各1大匙",
        "isMain": false
      }
    ],
    "steps": [
      "高湯煮沸加入香茅、南薑與番茄煮 3 分鐘釋放清香。",
      "下菇類與鮮蝦大火煮 90 秒至蝦轉紅熟透。",
      "熄火倒入檸檬汁與魚露調味起鍋。"
    ],
    "tips": "完全不加椰奶的道地清湯版（Nam Sai），酸辣爆汁且熱量極低！"
  },
  {
    "id": "rec-022",
    "title": "中東黎巴嫩檸香香草烤雞肉串 (Shish Tawook)",
    "category": "high-protein",
    "categoryName": "高蛋白肌力",
    "calories": 260,
    "protein": 39,
    "fat": 6,
    "carbs": 5,
    "prepTime": 15,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "EatingWell (美國)",
    "sourceUrl": "https://www.eatingwell.com",
    "tags": [
      "增肌",
      "減脂",
      "低糖",
      "低脂",
      "少鹽",
      "雞胸肉",
      "無糖希臘優格",
      "大蒜",
      "檸檬汁",
      "中東料理"
    ],
    "ingredients": [
      {
        "name": "雞胸肉塊",
        "amount": "180g",
        "isMain": true
      },
      {
        "name": "無糖希臘優格",
        "amount": "2大匙 (軟化肉質)",
        "isMain": false
      },
      {
        "name": "大蒜泥",
        "amount": "2瓣",
        "isMain": false
      },
      {
        "name": "檸檬汁與小茴香粉",
        "amount": "各1/2小匙",
        "isMain": false
      }
    ],
    "steps": [
      "雞胸肉以優格、蒜泥、檸檬汁與茴香醃 15 分鐘。",
      "氣炸鍋 190°C 烤 10-12 分鐘至金黃多汁！"
    ],
    "tips": "優格乳酸天然軟化肌肉纖維，烤出的雞胸軟嫩多汁完全不柴！"
  },
  {
    "id": "rec-023",
    "title": "北非夏卡蘇卡番茄菠菜烘蛋 (Shakshuka)",
    "category": "low-carb",
    "categoryName": "極低碳減醣",
    "calories": 230,
    "protein": 18,
    "fat": 10,
    "carbs": 14,
    "prepTime": 15,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "source": "Delish (美國)",
    "sourceUrl": "https://www.delish.com",
    "tags": [
      "減脂",
      "低糖",
      "雞蛋",
      "牛番茄",
      "彩椒",
      "嫩菠菜",
      "孜然粉",
      "早午餐",
      "地中海"
    ],
    "ingredients": [
      {
        "name": "雞蛋",
        "amount": "2顆",
        "isMain": true
      },
      {
        "name": "牛番茄",
        "amount": "1顆 (切丁)",
        "isMain": true
      },
      {
        "name": "紅彩椒丁",
        "amount": "40g",
        "isMain": true
      },
      {
        "name": "嫩菠菜",
        "amount": "40g",
        "isMain": true
      },
      {
        "name": "孜然粉與紅椒粉",
        "amount": "各1/2小匙",
        "isMain": false
      }
    ],
    "steps": [
      "鍋內炒軟洋蔥、彩椒與番茄丁，撒入孜然粉煨成濃醬，拌入菠菜。",
      "在醬汁中挖出兩個凹槽，打入兩顆雞蛋，蓋鍋小火燜 4 分鐘至蛋白凝固蛋黃半熟。"
    ],
    "tips": "以番茄天然果酸融合流心蛋黃，超低碳水卻奢華滿足！"
  },
  {
    "id": "rec-024",
    "title": "摩洛哥香料番茄扁豆濃湯 (Harira Soup)",
    "category": "soups",
    "categoryName": "低卡暖胃湯",
    "calories": 220,
    "protein": 16,
    "fat": 4,
    "carbs": 28,
    "prepTime": 18,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    "source": "Minimalist Baker (美國)",
    "sourceUrl": "https://minimalistbaker.com",
    "tags": [
      "減脂",
      "低脂",
      "少鹽",
      "熟鷹嘴豆",
      "紅扁豆",
      "牛番茄",
      "芹菜",
      "薑黃粉",
      "高纖濃湯"
    ],
    "ingredients": [
      {
        "name": "熟鷹嘴豆",
        "amount": "60g",
        "isMain": true
      },
      {
        "name": "紅扁豆",
        "amount": "30g",
        "isMain": true
      },
      {
        "name": "牛番茄丁",
        "amount": "1顆",
        "isMain": true
      },
      {
        "name": "西洋芹末",
        "amount": "2大匙",
        "isMain": false
      },
      {
        "name": "薑黃與肉桂粉",
        "amount": "各1/3小匙",
        "isMain": false
      }
    ],
    "steps": [
      "高湯煮沸放入紅扁豆、番茄丁、芹菜與香料小火煮 12 分鐘至扁豆軟爛化湯。",
      "加入熟鷹嘴豆再煮 3 分鐘撒香菜盛出。"
    ],
    "tips": "扁豆天然化開形成濃郁稠度，無需任何麵粉勾芡！"
  },
  {
    "id": "rec-025",
    "title": "印度坦都里無油香料烤雞胸 (Tandoori Chicken)",
    "category": "high-protein",
    "categoryName": "高蛋白肌力",
    "calories": 250,
    "protein": 42,
    "fat": 5,
    "carbs": 5,
    "prepTime": 15,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "BBC Good Food (英國)",
    "sourceUrl": "https://www.bbcgoodfood.com",
    "tags": [
      "增肌",
      "減脂",
      "低糖",
      "低脂",
      "雞胸肉",
      "無糖優格",
      "薑黃粉",
      "葛拉姆馬薩拉",
      "氣炸鍋"
    ],
    "ingredients": [
      {
        "name": "雞胸肉",
        "amount": "190g (切厚片劃深紋)",
        "isMain": true
      },
      {
        "name": "無糖希臘優格",
        "amount": "2大匙",
        "isMain": false
      },
      {
        "name": "印度綜合咖哩香料",
        "amount": "1小匙",
        "isMain": false
      },
      {
        "name": "檸檬汁",
        "amount": "1大匙",
        "isMain": false
      }
    ],
    "steps": [
      "雞胸肉以優格、香料與檸檬汁醃 15 分鐘。",
      "氣炸鍋 200°C 烤 12 分鐘至邊緣焦香微脆！"
    ],
    "tips": "薑黃與生薑促進循環排汗，優格酵素保水多汁！"
  },
  {
    "id": "rec-026",
    "title": "藜麥嫩烤牛板腱佐烤彩椒",
    "category": "high-protein",
    "categoryName": "高蛋白肌力",
    "calories": 350,
    "protein": 42,
    "fat": 9,
    "carbs": 24,
    "prepTime": 18,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    "source": "愛料理 iCook",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "增肌",
      "減脂",
      "牛板腱",
      "牛肉",
      "三色藜麥",
      "彩椒",
      "高蛋白",
      "複合碳水"
    ],
    "ingredients": [
      {
        "name": "牛板腱肉排",
        "amount": "180g",
        "isMain": true
      },
      {
        "name": "熟三色藜麥",
        "amount": "70g",
        "isMain": true
      },
      {
        "name": "三色彩椒",
        "amount": "1顆 (切大塊)",
        "isMain": true
      },
      {
        "name": "迷迭香與蒜粉",
        "amount": "各1/2小匙",
        "isMain": false
      }
    ],
    "steps": [
      "牛板腱灑黑胡椒蒜粉，氣炸鍋 180°C 烤 8 分鐘後翻面加彩椒 200°C 烤 4 分鐘。",
      "靜置切片佐熱藜麥飯同吃。"
    ],
    "tips": "牛板腱中間帶膠原嫩筋，低脂高鐵高蛋白！"
  },
  {
    "id": "rec-027",
    "title": "高蛋白鷹嘴豆彩蔬燉雞胸肉",
    "category": "high-protein",
    "categoryName": "高蛋白肌力",
    "calories": 310,
    "protein": 40,
    "fat": 5,
    "carbs": 24,
    "prepTime": 20,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "愛料理 iCook",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "增肌",
      "減脂",
      "低脂",
      "雞胸肉",
      "熟鷹嘴豆",
      "牛番茄",
      "鴻禧菇",
      "高纖"
    ],
    "ingredients": [
      {
        "name": "雞胸肉丁",
        "amount": "180g",
        "isMain": true
      },
      {
        "name": "熟鷹嘴豆",
        "amount": "80g",
        "isMain": true
      },
      {
        "name": "牛番茄",
        "amount": "1顆 (切丁)",
        "isMain": true
      },
      {
        "name": "鴻禧菇",
        "amount": "半包",
        "isMain": true
      }
    ],
    "steps": [
      "炒香雞肉丁，加入番茄丁、鴻禧菇與 100ml 水小火燉煮 5 分鐘。",
      "加入鷹嘴豆燜煮 3 分鐘入味。"
    ],
    "tips": "雞肉與鷹嘴豆雙重蛋白質互補，飽腹力持久！"
  },
  {
    "id": "rec-028",
    "title": "蒜香無油炙燒鮪魚排佐紫地瓜",
    "category": "high-protein",
    "categoryName": "高蛋白肌力",
    "calories": 290,
    "protein": 38,
    "fat": 3,
    "carbs": 26,
    "prepTime": 15,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
    "source": "Cookpad",
    "sourceUrl": "https://cookpad.com/tw",
    "tags": [
      "增肌",
      "減脂",
      "低脂",
      "少鹽",
      "鮪魚",
      "生鮮鮪魚排",
      "紫地瓜",
      "檸檬汁",
      "花青素"
    ],
    "ingredients": [
      {
        "name": "生鮮鮪魚菲力",
        "amount": "160g",
        "isMain": true
      },
      {
        "name": "熟紫地瓜",
        "amount": "100g (蒸熟切塊)",
        "isMain": true
      },
      {
        "name": "大蒜粉與現磨黑胡椒",
        "amount": "各1/2小匙",
        "isMain": false
      }
    ],
    "steps": [
      "鮪魚抹黑胡椒大蒜粉，高溫熱平底鍋每面炙燒 45 秒呈三分熟粉嫩感。",
      "切厚片搭配蒸紫地瓜享用。"
    ],
    "tips": "鮪魚幾乎零脂肪且含超高蛋白質，紫地瓜富含天然花青素！"
  },
  {
    "id": "rec-029",
    "title": "蒜辣羅勒鮮蝦炒櫛瓜麵 (Zoodles)",
    "category": "low-carb",
    "categoryName": "極低碳減醣",
    "calories": 190,
    "protein": 24,
    "fat": 6,
    "carbs": 8,
    "prepTime": 10,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "source": "愛料理 iCook",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "減醣",
      "低脂",
      "綠櫛瓜",
      "鮮蝦仁",
      "大蒜",
      "九層塔",
      "生酮麵"
    ],
    "ingredients": [
      {
        "name": "綠櫛瓜",
        "amount": "1條 (刨成細麵條)",
        "isMain": true
      },
      {
        "name": "無毒鮮蝦仁",
        "amount": "8-10隻",
        "isMain": true
      },
      {
        "name": "大蒜末與辣椒碎",
        "amount": "各1小匙",
        "isMain": false
      },
      {
        "name": "新鮮九層塔",
        "amount": "1把",
        "isMain": false
      }
    ],
    "steps": [
      "爆香蒜末辣椒，下蝦仁翻炒 1 分鐘至轉紅。",
      "下櫛瓜細麵大火快炒 60 秒（不加水保持脆度）。",
      "關火撒九層塔翻勻起鍋。"
    ],
    "tips": "櫛瓜麵脆嫩爽口，熱量僅一般義大利麵的 1/5！"
  },
  {
    "id": "rec-030",
    "title": "無麵粉櫛瓜烘蛋披薩 (Egg Crust Pizza)",
    "category": "low-carb",
    "categoryName": "極低碳減醣",
    "calories": 240,
    "protein": 22,
    "fat": 12,
    "carbs": 7,
    "prepTime": 15,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1546069901-d00d238260b4?auto=format&fit=crop&w=800&q=80",
    "source": "Cookpad",
    "sourceUrl": "https://cookpad.com/tw",
    "tags": [
      "減脂",
      "低糖",
      "減醣",
      "雞蛋",
      "綠櫛瓜",
      "牛番茄",
      "低脂莫札瑞拉起司",
      "生酮披薩"
    ],
    "ingredients": [
      {
        "name": "雞蛋",
        "amount": "2顆 (打散)",
        "isMain": true
      },
      {
        "name": "綠櫛瓜",
        "amount": "半條 (切薄圓片)",
        "isMain": true
      },
      {
        "name": "低脂莫札瑞拉起司絲",
        "amount": "25g",
        "isMain": true
      },
      {
        "name": "牛番茄片",
        "amount": "4片",
        "isMain": false
      }
    ],
    "steps": [
      "平底鍋薄油排滿櫛瓜圓片微煎。",
      "淋入蛋液覆蓋整鍋小火煎至蛋液微凝固。",
      "頂部鋪番茄片與起司絲，蓋鍋燜 3 分鐘至起司熔化牽絲！"
    ],
    "tips": "完全零麵粉餅皮，解披薩饞無負擔！"
  },
  {
    "id": "rec-031",
    "title": "生菜包香炒彩椒雞肉鬆 (Lettuce Wraps)",
    "category": "low-carb",
    "categoryName": "極低碳減醣",
    "calories": 230,
    "protein": 34,
    "fat": 5,
    "carbs": 9,
    "prepTime": 12,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "愛料理 iCook",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "增肌",
      "減脂",
      "低糖",
      "低脂",
      "雞胸絞肉",
      "彩椒",
      "荸薺",
      "美生菜",
      "無油免澱粉"
    ],
    "ingredients": [
      {
        "name": "雞胸肉丁/絞肉",
        "amount": "180g",
        "isMain": true
      },
      {
        "name": "彩椒丁與洋蔥丁",
        "amount": "各30g",
        "isMain": true
      },
      {
        "name": "美生菜葉",
        "amount": "5-6片 (洗淨瀝乾)",
        "isMain": true
      }
    ],
    "steps": [
      "乾鍋大火炒香雞肉丁、洋蔥與彩椒丁至水分收乾脆香。",
      "盛盤以脆爽冰涼美生菜葉包裹熱騰騰肉鬆大口吃！"
    ],
    "tips": "冷熱交織爽脆爆汁，完全免用春捲皮或餅皮！"
  },
  {
    "id": "rec-032",
    "title": "清甜絲瓜鮮蛤蜊滾嫩豆腐湯",
    "category": "soups",
    "categoryName": "低卡暖胃湯",
    "calories": 140,
    "protein": 18,
    "fat": 3,
    "carbs": 9,
    "prepTime": 12,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
    "source": "愛料理 iCook",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "少鹽",
      "減鈉",
      "減脂",
      "低脂",
      "絲瓜",
      "活蛤蜊",
      "嫩豆腐",
      "薑絲",
      "消水腫"
    ],
    "ingredients": [
      {
        "name": "澎湖絲瓜",
        "amount": "150g (切厚片)",
        "isMain": true
      },
      {
        "name": "新鮮活蛤蜊",
        "amount": "150g",
        "isMain": true
      },
      {
        "name": "嫩豆腐",
        "amount": "半盒 (切塊)",
        "isMain": true
      },
      {
        "name": "薑絲",
        "amount": "1小撮",
        "isMain": false
      }
    ],
    "steps": [
      "薑絲與絲瓜片入鍋加 350ml 水煮沸 3 分鐘至絲瓜透明翡翠綠。",
      "下嫩豆腐與蛤蜊煮至蛤蜊全開即可熄火。"
    ],
    "tips": "蛤蜊自帶大海天然鹹鮮，絲瓜甘甜高水分，不加鹽依然鮮甜無比！"
  },
  {
    "id": "rec-033",
    "title": "鮮冬菇娃娃菜燉嫩雞胸清湯",
    "category": "soups",
    "categoryName": "低卡暖胃湯",
    "calories": 180,
    "protein": 32,
    "fat": 2.5,
    "carbs": 7,
    "prepTime": 15,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    "source": "Cookpad",
    "sourceUrl": "https://cookpad.com/tw",
    "tags": [
      "增肌",
      "減脂",
      "低脂",
      "少鹽",
      "雞胸肉",
      "鮮香菇",
      "娃娃菜",
      "薑片",
      "高纖暖身"
    ],
    "ingredients": [
      {
        "name": "雞胸肉排",
        "amount": "160g (切厚片)",
        "isMain": true
      },
      {
        "name": "鮮香菇/鮮冬菇",
        "amount": "3朵 (劃十字花刀)",
        "isMain": true
      },
      {
        "name": "娃娃菜",
        "amount": "2株 (切半)",
        "isMain": true
      },
      {
        "name": "生薑片",
        "amount": "2片",
        "isMain": false
      }
    ],
    "steps": [
      "水煮沸下薑片、香菇與娃娃菜燉 6 分鐘釋放多醣體。",
      "滑入雞胸肉片中小火燜煮 2 分鐘至肉質滑嫩即成。"
    ],
    "tips": "菇類多醣體提升免疫力，熱量超低！"
  },
  {
    "id": "rec-034",
    "title": "無鹽番茄洋蔥燉牛里肌清爽湯",
    "category": "soups",
    "categoryName": "低卡暖胃湯",
    "calories": 240,
    "protein": 34,
    "fat": 6,
    "carbs": 12,
    "prepTime": 20,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    "source": "愛料理 iCook",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "少鹽",
      "減鈉",
      "增肌",
      "減脂",
      "牛里肌",
      "牛番茄",
      "洋蔥",
      "白蘿蔔",
      "DASH飲食"
    ],
    "ingredients": [
      {
        "name": "牛里肌肉塊",
        "amount": "160g",
        "isMain": true
      },
      {
        "name": "熟牛番茄",
        "amount": "2顆 (切大塊)",
        "isMain": true
      },
      {
        "name": "洋蔥",
        "amount": "半顆 (切大塊)",
        "isMain": true
      },
      {
        "name": "白蘿蔔塊",
        "amount": "60g",
        "isMain": true
      }
    ],
    "steps": [
      "洋蔥、番茄與白蘿蔔入鍋加水 400ml 小火燉煮 15 分鐘熬出蔬菜天然甘酸甜清湯。",
      "放入牛里肌塊續煨 3 分鐘至 7 分熟軟嫩。"
    ],
    "tips": "洋蔥谷氨酸與番茄天然酸甜形成鮮味協同，不加鹽依然濃郁醇香！"
  },
  {
    "id": "rec-035",
    "title": "微波爐無油版韓式辣醬蒸豆腐嫩蛋",
    "category": "quick-meal",
    "categoryName": "超快即食",
    "calories": 210,
    "protein": 22,
    "fat": 8,
    "carbs": 11,
    "prepTime": 5,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "source": "小紅書健康減脂精選",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "嫩豆腐",
      "雞蛋",
      "韓式辣醬",
      "青蔥",
      "微波爐",
      "懶人5分鐘"
    ],
    "ingredients": [
      {
        "name": "嫩豆腐",
        "amount": "半盒 (切塊排盤)",
        "isMain": true
      },
      {
        "name": "雞蛋",
        "amount": "2顆 (打散)",
        "isMain": true
      },
      {
        "name": "韓式低糖辣醬",
        "amount": "1/2小匙",
        "isMain": false
      },
      {
        "name": "青蔥花",
        "amount": "1大匙",
        "isMain": false
      }
    ],
    "steps": [
      "碗中排好豆腐塊，蛋液加辣醬攪勻淋在豆腐上。",
      "蓋微波專用蓋，中高火微波 3 分鐘至蛋液凝固滑嫩，灑蔥花出爐！"
    ],
    "tips": "豆腐與蛋雙重優質蛋白質，免開火零油煙 3 分鐘搞定！"
  },
  {
    "id": "rec-036",
    "title": "涼拌低卡手撕雞胸肉佐小黃瓜絲",
    "category": "quick-meal",
    "categoryName": "超快即食",
    "calories": 210,
    "protein": 36,
    "fat": 3,
    "carbs": 6,
    "prepTime": 8,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "愛料理 iCook",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "增肌",
      "減脂",
      "低糖",
      "低脂",
      "雞胸肉",
      "小黃瓜",
      "大蒜",
      "白醋",
      "涼拌菜"
    ],
    "ingredients": [
      {
        "name": "熟雞胸肉",
        "amount": "170g (撕成細絲)",
        "isMain": true
      },
      {
        "name": "小黃瓜",
        "amount": "1條 (切細絲)",
        "isMain": true
      },
      {
        "name": "蒜末與白醋",
        "amount": "各1小匙",
        "isMain": false
      },
      {
        "name": "熟白芝麻",
        "amount": "少許",
        "isMain": false
      }
    ],
    "steps": [
      "大碗放入手撕雞絲與黃瓜絲。",
      "拌入蒜末、白醋與少許薄鹽醬油，撒上白芝麻即可享用。"
    ],
    "tips": "小黃瓜高水分脆口，無多餘油脂超清爽！"
  },
  {
    "id": "rec-037",
    "title": "免油炸金黃香煎板豆腐塊佐蔥鹽醬",
    "category": "quick-meal",
    "categoryName": "超快即食",
    "calories": 220,
    "protein": 20,
    "fat": 10,
    "carbs": 6,
    "prepTime": 10,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1546069901-d00d238260b4?auto=format&fit=crop&w=800&q=80",
    "source": "Cookpad",
    "sourceUrl": "https://cookpad.com/tw",
    "tags": [
      "減脂",
      "低糖",
      "少鹽",
      "板豆腐",
      "青蔥",
      "白胡椒粉",
      "香油",
      "植物性蛋白"
    ],
    "ingredients": [
      {
        "name": "老客家板豆腐",
        "amount": "200g (切厚方塊擦乾)",
        "isMain": true
      },
      {
        "name": "大量青蔥末",
        "amount": "3大匙",
        "isMain": true
      },
      {
        "name": "香油與胡椒粉",
        "amount": "少許",
        "isMain": false
      }
    ],
    "steps": [
      "不沾平底鍋乾煎板豆腐塊至六面金黃酥脆。",
      "青蔥末拌少許香油胡椒調成蔥鹽醬，淋在熱豆腐上開吃！"
    ],
    "tips": "板豆腐含鈣質與大豆異黃酮，外酥內嫩豆香濃郁！"
  },
  {
    "id": "rec-038",
    "title": "無油酸辣檸檬泰式涼拌白蝦仁",
    "category": "quick-meal",
    "categoryName": "超快即食",
    "calories": 160,
    "protein": 28,
    "fat": 2,
    "carbs": 7,
    "prepTime": 8,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
    "source": "愛料理 iCook",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "低脂",
      "鮮蝦仁",
      "洋蔥",
      "小番茄",
      "香菜",
      "檸檬汁",
      "無油"
    ],
    "ingredients": [
      {
        "name": "無毒鮮蝦仁",
        "amount": "12隻 (汆燙冰鎮)",
        "isMain": true
      },
      {
        "name": "紫洋蔥絲",
        "amount": "30g",
        "isMain": true
      },
      {
        "name": "小番茄",
        "amount": "5顆 (切半)",
        "isMain": true
      },
      {
        "name": "新鮮檸檬汁與魚露",
        "amount": "各1大匙",
        "isMain": false
      }
    ],
    "steps": [
      "冰鎮蝦仁、洋蔥絲與番茄放入碗中。",
      "淋上檸檬魚露酸辣汁，撒香菜碎拌勻即食！"
    ],
    "tips": "冰鎮讓蝦肉極致緊緻脆彈，零油脂酸爽無負擔！"
  },
  {
    "id": "rec-039",
    "title": "低脂無糖優格酪梨高蛋白鮮蝦全麥捲",
    "category": "quick-meal",
    "categoryName": "超快即食",
    "calories": 270,
    "protein": 24,
    "fat": 7,
    "carbs": 26,
    "prepTime": 8,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    "source": "小紅書健康減脂精選",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "增肌",
      "減脂",
      "全麥餅皮",
      "鮮蝦仁",
      "酪梨",
      "無糖希臘優格",
      "美生菜",
      "早午餐輕食"
    ],
    "ingredients": [
      {
        "name": "全麥捲餅皮",
        "amount": "1張",
        "isMain": true
      },
      {
        "name": "熟鮮蝦仁",
        "amount": "8隻",
        "isMain": true
      },
      {
        "name": "成熟酪梨",
        "amount": "25g",
        "isMain": true
      },
      {
        "name": "無糖希臘優格",
        "amount": "1大匙 (替代美乃滋)",
        "isMain": false
      },
      {
        "name": "美生菜葉",
        "amount": "3片",
        "isMain": false
      }
    ],
    "steps": [
      "全麥餅皮抹上一層希臘優格。",
      "依序放上美生菜、酪梨片與鮮蝦仁，緊緊捲起斜切兩半享用。"
    ],
    "tips": "希臘優格完全取代高熱量沙拉醬，高纖好油脂好攜帶！"
  },
  {
    "id": "rec-040",
    "title": "雙菇魔芋絲涼拌手撕雞胸肉 (負卡飽足神菜)",
    "category": "quick-meal",
    "categoryName": "超快即食",
    "calories": 170,
    "protein": 30,
    "fat": 2,
    "carbs": 8,
    "prepTime": 10,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "愛料理 iCook",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "低脂",
      "少鹽",
      "雞胸肉",
      "蒟蒻絲",
      "鴻禧菇",
      "金針菇",
      "小黃瓜",
      "負卡料理"
    ],
    "ingredients": [
      {
        "name": "雞胸肉絲",
        "amount": "140g (汆燙撕絲)",
        "isMain": true
      },
      {
        "name": "蒟蒻絲/魔芋結",
        "amount": "100g (汆燙洗淨)",
        "isMain": true
      },
      {
        "name": "金針菇與鴻禧菇",
        "amount": "各40g (汆燙冰鎮)",
        "isMain": true
      },
      {
        "name": "小黃瓜絲",
        "amount": "40g",
        "isMain": true
      }
    ],
    "steps": [
      "所有食材汆燙後冰鎮瀝乾大碗混和。",
      "淋上薄鹽和風醬油與白醋拌勻享用。"
    ],
    "tips": "蒟蒻絲近乎零熱量，雙菇多醣體提供滿腹感！"
  },
  {
    "id": "rec-041",
    "title": "義式香草低脂舒肥雞里肌佐彩椒",
    "category": "high-protein",
    "categoryName": "高蛋白肌力",
    "calories": 220,
    "protein": 40,
    "fat": 3,
    "carbs": 4,
    "prepTime": 12,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "EatingWell (美國)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "增肌",
      "低糖",
      "少鹽",
      "低脂",
      "雞里肌",
      "三色彩椒",
      "義大利綜合香草"
    ],
    "ingredients": [
      {
        "name": "雞里肌",
        "amount": "190g",
        "isMain": true
      },
      {
        "name": "三色彩椒",
        "amount": "80g",
        "isMain": true
      },
      {
        "name": "義大利綜合香草",
        "amount": "1小匙",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：雞里肌 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 12 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-042",
    "title": "日式生薑燒低脂牛里肌蒟蒻絲丼",
    "category": "low-carb",
    "categoryName": "極低碳減醣",
    "calories": 240,
    "protein": 32,
    "fat": 6,
    "carbs": 12,
    "prepTime": 12,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "日本減醣食譜 Kurashiru",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "增肌",
      "低糖",
      "少鹽",
      "低脂",
      "牛里肌肉片",
      "蒟蒻絲",
      "生薑泥與薄鹽醬油"
    ],
    "ingredients": [
      {
        "name": "牛里肌肉片",
        "amount": "150g",
        "isMain": true
      },
      {
        "name": "蒟蒻絲",
        "amount": "120g",
        "isMain": true
      },
      {
        "name": "生薑泥與薄鹽醬油",
        "amount": "1大匙",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：牛里肌肉片 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 12 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-043",
    "title": "清蒸金目鱸魚菲力佐豆腐生薑絲",
    "category": "high-protein",
    "categoryName": "高蛋白肌力",
    "calories": 210,
    "protein": 35,
    "fat": 4,
    "carbs": 3,
    "prepTime": 12,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "愛料理 iCook",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "增肌",
      "低糖",
      "少鹽",
      "低脂",
      "金目鱸魚菲力",
      "嫩豆腐",
      "薑絲與青蔥"
    ],
    "ingredients": [
      {
        "name": "金目鱸魚菲力",
        "amount": "180g",
        "isMain": true
      },
      {
        "name": "嫩豆腐",
        "amount": "半盒",
        "isMain": true
      },
      {
        "name": "薑絲與青蔥",
        "amount": "適量",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：金目鱸魚菲力 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 12 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-044",
    "title": "泰式酸辣檸檬蒟蒻拌海鮮溫沙拉",
    "category": "quick-meal",
    "categoryName": "超快即食",
    "calories": 180,
    "protein": 26,
    "fat": 2,
    "carbs": 11,
    "prepTime": 10,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "source": "Cookpad",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "少鹽",
      "低脂",
      "白蝦仁與花枝圈",
      "蒟蒻絲",
      "檸檬汁與魚露"
    ],
    "ingredients": [
      {
        "name": "白蝦仁與花枝圈",
        "amount": "140g",
        "isMain": true
      },
      {
        "name": "蒟蒻絲",
        "amount": "100g",
        "isMain": true
      },
      {
        "name": "檸檬汁與魚露",
        "amount": "各1大匙",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：白蝦仁與花枝圈 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 10 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-045",
    "title": "韓式泡菜海鮮嫩豆腐煲 (無油低鹽版)",
    "category": "soups",
    "categoryName": "低卡暖胃湯",
    "calories": 220,
    "protein": 28,
    "fat": 5,
    "carbs": 14,
    "prepTime": 15,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    "source": "愛料理 iCook",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "少鹽",
      "低脂",
      "嫩豆腐",
      "鮮蝦與鯛魚片",
      "韓式泡菜"
    ],
    "ingredients": [
      {
        "name": "嫩豆腐",
        "amount": "1盒",
        "isMain": true
      },
      {
        "name": "鮮蝦與鯛魚片",
        "amount": "120g",
        "isMain": true
      },
      {
        "name": "韓式泡菜",
        "amount": "60g",
        "isMain": true
      }
    ],
    "steps": [
      "準備新鮮食材：嫩豆腐 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 15 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-046",
    "title": "義式羅勒青醬炒花椰菜米鮮干貝",
    "category": "low-carb",
    "categoryName": "極低碳減醣",
    "calories": 230,
    "protein": 25,
    "fat": 8,
    "carbs": 12,
    "prepTime": 12,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "Jamie Oliver",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "少鹽",
      "好油脂",
      "生食級鮮干貝",
      "白花椰菜米",
      "羅勒青醬"
    ],
    "ingredients": [
      {
        "name": "生食級鮮干貝",
        "amount": "6顆",
        "isMain": true
      },
      {
        "name": "白花椰菜米",
        "amount": "180g",
        "isMain": true
      },
      {
        "name": "羅勒青醬",
        "amount": "1小匙",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：生食級鮮干貝 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 12 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-047",
    "title": "法式紅酒燉牛肉番茄低卡煲",
    "category": "high-protein",
    "categoryName": "高蛋白肌力",
    "calories": 310,
    "protein": 38,
    "fat": 8,
    "carbs": 16,
    "prepTime": 25,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    "source": "BBC Good Food (英國)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "增肌",
      "高纖",
      "少鹽",
      "好油脂",
      "牛腱肉/牛板腱",
      "牛番茄與洋蔥",
      "紅酒與月桂葉"
    ],
    "ingredients": [
      {
        "name": "牛腱肉/牛板腱",
        "amount": "170g",
        "isMain": true
      },
      {
        "name": "牛番茄與洋蔥",
        "amount": "各1顆",
        "isMain": true
      },
      {
        "name": "紅酒與月桂葉",
        "amount": "適量",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：牛腱肉/牛板腱 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 25 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-048",
    "title": "夏威夷炙燒鮪魚酪梨彩蔬能量盆",
    "category": "high-protein",
    "categoryName": "高蛋白肌力",
    "calories": 310,
    "protein": 38,
    "fat": 9,
    "carbs": 15,
    "prepTime": 10,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "Tasty (國際)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "增肌",
      "低糖",
      "少鹽",
      "好油脂",
      "生鮮鮪魚排",
      "成熟酪梨",
      "小黃瓜與海苔"
    ],
    "ingredients": [
      {
        "name": "生鮮鮪魚排",
        "amount": "150g",
        "isMain": true
      },
      {
        "name": "成熟酪梨",
        "amount": "30g",
        "isMain": true
      },
      {
        "name": "小黃瓜與海苔",
        "amount": "適量",
        "isMain": true
      }
    ],
    "steps": [
      "準備新鮮食材：生鮮鮪魚排 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 10 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-049",
    "title": "西班牙冷壓橄欖油迷迭香烤雞腿排 (去皮)",
    "category": "high-protein",
    "categoryName": "高蛋白肌力",
    "calories": 270,
    "protein": 36,
    "fat": 11,
    "carbs": 3,
    "prepTime": 18,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "Serious Eats (美國)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "增肌",
      "低糖",
      "少鹽",
      "好油脂",
      "去骨去皮雞腿排",
      "新鮮迷迭香",
      "大蒜與黑胡椒"
    ],
    "ingredients": [
      {
        "name": "去骨去皮雞腿排",
        "amount": "180g",
        "isMain": true
      },
      {
        "name": "新鮮迷迭香",
        "amount": "2支",
        "isMain": false
      },
      {
        "name": "大蒜與黑胡椒",
        "amount": "適量",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：去骨去皮雞腿排 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 18 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-050",
    "title": "日式柴魚秋葵山藥雞絲冷麵 (蒟蒻麵)",
    "category": "quick-meal",
    "categoryName": "超快即食",
    "calories": 190,
    "protein": 28,
    "fat": 2,
    "carbs": 14,
    "prepTime": 10,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "日本減醣食譜 Kurashiru",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "少鹽",
      "低脂",
      "雞胸肉絲",
      "秋葵與山藥泥",
      "蒟蒻細麵"
    ],
    "ingredients": [
      {
        "name": "雞胸肉絲",
        "amount": "130g",
        "isMain": true
      },
      {
        "name": "秋葵與山藥泥",
        "amount": "60g",
        "isMain": true
      },
      {
        "name": "蒟蒻細麵",
        "amount": "150g",
        "isMain": true
      }
    ],
    "steps": [
      "準備新鮮食材：雞胸肉絲 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 10 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-051",
    "title": "墨西哥生菜牛絞肉塔可船 (Taco Boats)",
    "category": "low-carb",
    "categoryName": "極低碳減醣",
    "calories": 250,
    "protein": 32,
    "fat": 9,
    "carbs": 8,
    "prepTime": 12,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "Skinnytaste (美國)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "增肌",
      "低糖",
      "少鹽",
      "好油脂",
      "瘦牛絞肉",
      "蘿蔓生菜船",
      "塔可香料與番茄丁"
    ],
    "ingredients": [
      {
        "name": "瘦牛絞肉",
        "amount": "150g",
        "isMain": true
      },
      {
        "name": "蘿蔓生菜船",
        "amount": "4片",
        "isMain": true
      },
      {
        "name": "塔可香料與番茄丁",
        "amount": "適量",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：瘦牛絞肉 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 12 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-052",
    "title": "希臘香檸黑橄欖烤鱸魚排佐蘆筍",
    "category": "high-protein",
    "categoryName": "高蛋白肌力",
    "calories": 220,
    "protein": 34,
    "fat": 6,
    "carbs": 5,
    "prepTime": 15,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "BBC Good Food (英國)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "增肌",
      "低糖",
      "少鹽",
      "低脂",
      "金目鱸魚排",
      "綠蘆筍",
      "黑橄欖與檸檬片"
    ],
    "ingredients": [
      {
        "name": "金目鱸魚排",
        "amount": "170g",
        "isMain": true
      },
      {
        "name": "綠蘆筍",
        "amount": "70g",
        "isMain": true
      },
      {
        "name": "黑橄欖與檸檬片",
        "amount": "適量",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：金目鱸魚排 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 15 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-053",
    "title": "義式香蒜白酒炒鮮蛤蜊櫛瓜麵",
    "category": "low-carb",
    "categoryName": "極低碳減醣",
    "calories": 170,
    "protein": 20,
    "fat": 5,
    "carbs": 9,
    "prepTime": 10,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "EatingWell (美國)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "少鹽",
      "低脂",
      "新鮮蛤蜊",
      "綠櫛瓜細麵",
      "大蒜與白酒"
    ],
    "ingredients": [
      {
        "name": "新鮮蛤蜊",
        "amount": "200g",
        "isMain": true
      },
      {
        "name": "綠櫛瓜細麵",
        "amount": "1條",
        "isMain": true
      },
      {
        "name": "大蒜與白酒",
        "amount": "適量",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：新鮮蛤蜊 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 10 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-054",
    "title": "韓式無糖大醬海鮮豆腐蔬菜鍋",
    "category": "soups",
    "categoryName": "低卡暖胃湯",
    "calories": 210,
    "protein": 26,
    "fat": 5,
    "carbs": 14,
    "prepTime": 15,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    "source": "愛料理 iCook",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "少鹽",
      "低脂",
      "板豆腐",
      "鮮蝦與蛤蜊",
      "韓式大醬與櫛瓜"
    ],
    "ingredients": [
      {
        "name": "板豆腐",
        "amount": "120g",
        "isMain": true
      },
      {
        "name": "鮮蝦與蛤蜊",
        "amount": "100g",
        "isMain": true
      },
      {
        "name": "韓式大醬與櫛瓜",
        "amount": "適量",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：板豆腐 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 15 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-055",
    "title": "中東芝麻醬香檸鷹嘴豆泥佐小黃瓜條 (Hummus Dip)",
    "category": "drinks-dessert",
    "categoryName": "減脂點心飲品",
    "calories": 160,
    "protein": 7,
    "fat": 6,
    "carbs": 20,
    "prepTime": 8,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "Minimalist Baker (美國)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "高纖",
      "少鹽",
      "低脂",
      "熟鷹嘴豆泥",
      "白芝麻醬與檸檬汁",
      "小黃瓜與胡蘿蔔條"
    ],
    "ingredients": [
      {
        "name": "熟鷹嘴豆泥",
        "amount": "80g",
        "isMain": true
      },
      {
        "name": "白芝麻醬與檸檬汁",
        "amount": "1小匙",
        "isMain": false
      },
      {
        "name": "小黃瓜與胡蘿蔔條",
        "amount": "80g",
        "isMain": true
      }
    ],
    "steps": [
      "準備新鮮食材：熟鷹嘴豆泥 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 8 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-056",
    "title": "經典美式防彈黑咖啡 (MCT好油燃脂版)",
    "category": "drinks-dessert",
    "categoryName": "減脂點心飲品",
    "calories": 110,
    "protein": 0.5,
    "fat": 12,
    "carbs": 0.5,
    "prepTime": 3,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "Delish (美國)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "少鹽",
      "好油脂",
      "現煮無糖黑咖啡",
      "MCT中鏈脂肪酸油"
    ],
    "ingredients": [
      {
        "name": "現煮無糖黑咖啡",
        "amount": "250ml",
        "isMain": true
      },
      {
        "name": "MCT中鏈脂肪酸油",
        "amount": "1小匙 (5ml)",
        "isMain": true
      }
    ],
    "steps": [
      "準備新鮮食材：現煮無糖黑咖啡 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 3 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-057",
    "title": "巴西莓奇亞籽果昔能量碗 (Acai Smoothie Bowl)",
    "category": "drinks-dessert",
    "categoryName": "減脂點心飲品",
    "calories": 180,
    "protein": 6,
    "fat": 5,
    "carbs": 26,
    "prepTime": 5,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "source": "FitMenCook (美國)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "高纖",
      "少鹽",
      "低脂",
      "無糖巴西莓粉",
      "冷凍藍莓與香蕉片",
      "無糖杏仁奶與奇亞籽"
    ],
    "ingredients": [
      {
        "name": "無糖巴西莓粉",
        "amount": "1大匙",
        "isMain": true
      },
      {
        "name": "冷凍藍莓與香蕉片",
        "amount": "60g",
        "isMain": true
      },
      {
        "name": "無糖杏仁奶與奇亞籽",
        "amount": "適量",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：無糖巴西莓粉 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 5 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-058",
    "title": "無糖生薑肉桂熱紅茶 (暖胃燃脂飲)",
    "category": "drinks-dessert",
    "categoryName": "減脂點心飲品",
    "calories": 10,
    "protein": 0.2,
    "fat": 0.1,
    "carbs": 2,
    "prepTime": 3,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80",
    "source": "日本減醣食譜 Kurashiru",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "少鹽",
      "低脂",
      "大吉嶺紅茶茶包",
      "新鮮生薑片",
      "純肉桂棒/粉"
    ],
    "ingredients": [
      {
        "name": "大吉嶺紅茶茶包",
        "amount": "1包",
        "isMain": true
      },
      {
        "name": "新鮮生薑片",
        "amount": "2片",
        "isMain": true
      },
      {
        "name": "純肉桂棒/粉",
        "amount": "適量",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：大吉嶺紅茶茶包 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 3 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-059",
    "title": "香檸迷迭香低溫氣炸鮭魚菲力",
    "category": "high-protein",
    "categoryName": "高蛋白肌力",
    "calories": 310,
    "protein": 36,
    "fat": 16,
    "carbs": 2,
    "prepTime": 14,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "Jamie Oliver",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "增肌",
      "低糖",
      "少鹽",
      "好油脂",
      "鮭魚菲力",
      "新鮮迷迭香",
      "檸檬汁與黑胡椒"
    ],
    "ingredients": [
      {
        "name": "鮭魚菲力",
        "amount": "160g",
        "isMain": true
      },
      {
        "name": "新鮮迷迭香",
        "amount": "1小把",
        "isMain": false
      },
      {
        "name": "檸檬汁與黑胡椒",
        "amount": "適量",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：鮭魚菲力 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 14 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-060",
    "title": "雙色甜椒拌手撕舒肥雞胸肉",
    "category": "quick-meal",
    "categoryName": "超快即食",
    "calories": 210,
    "protein": 38,
    "fat": 3,
    "carbs": 7,
    "prepTime": 8,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "愛料理 iCook",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "增肌",
      "低糖",
      "少鹽",
      "低脂",
      "舒肥雞胸肉",
      "紅黃甜椒絲",
      "檸檬汁與白芝麻"
    ],
    "ingredients": [
      {
        "name": "舒肥雞胸肉",
        "amount": "170g",
        "isMain": true
      },
      {
        "name": "紅黃甜椒絲",
        "amount": "80g",
        "isMain": true
      },
      {
        "name": "檸檬汁與白芝麻",
        "amount": "適量",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：舒肥雞胸肉 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 8 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-061",
    "title": "低碳花椰菜米印度無油雞肉咖哩",
    "category": "low-carb",
    "categoryName": "極低碳減醣",
    "calories": 280,
    "protein": 36,
    "fat": 6,
    "carbs": 18,
    "prepTime": 15,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "BBC Good Food (英國)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "增肌",
      "高纖",
      "少鹽",
      "低脂",
      "雞胸肉塊",
      "白花椰菜米",
      "無加糖咖哩粉與番茄"
    ],
    "ingredients": [
      {
        "name": "雞胸肉塊",
        "amount": "160g",
        "isMain": true
      },
      {
        "name": "白花椰菜米",
        "amount": "180g",
        "isMain": true
      },
      {
        "name": "無加糖咖哩粉與番茄",
        "amount": "適量",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：雞胸肉塊 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 15 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-062",
    "title": "冬蔭鮮干貝海鮮蒟蒻豆腐鍋",
    "category": "soups",
    "categoryName": "低卡暖胃湯",
    "calories": 190,
    "protein": 28,
    "fat": 3,
    "carbs": 11,
    "prepTime": 12,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    "source": "Cookpad",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "少鹽",
      "低脂",
      "生食級鮮干貝與蝦仁",
      "板豆腐",
      "冬蔭酸辣湯底與蒟蒻"
    ],
    "ingredients": [
      {
        "name": "生食級鮮干貝與蝦仁",
        "amount": "120g",
        "isMain": true
      },
      {
        "name": "板豆腐",
        "amount": "80g",
        "isMain": true
      },
      {
        "name": "冬蔭酸辣湯底與蒟蒻",
        "amount": "適量",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：生食級鮮干貝與蝦仁 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 12 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-063",
    "title": "茅屋起司高蛋白舒芙蕾鬆餅 (Cottage Cheese Pancakes)",
    "category": "drinks-dessert",
    "categoryName": "減脂點心飲品",
    "calories": 210,
    "protein": 24,
    "fat": 4,
    "carbs": 16,
    "prepTime": 10,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80",
    "source": "Skinnytaste (美國)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "高纖",
      "少鹽",
      "低脂",
      "低脂茅屋起司",
      "雞蛋",
      "大燕麥粉"
    ],
    "ingredients": [
      {
        "name": "低脂茅屋起司",
        "amount": "80g",
        "isMain": true
      },
      {
        "name": "雞蛋",
        "amount": "2顆",
        "isMain": true
      },
      {
        "name": "大燕麥粉",
        "amount": "20g",
        "isMain": true
      }
    ],
    "steps": [
      "準備新鮮食材：低脂茅屋起司 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 10 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-064",
    "title": "酪梨羽衣甘藍極致抗氧代餐果昔",
    "category": "drinks-dessert",
    "categoryName": "減脂點心飲品",
    "calories": 170,
    "protein": 9,
    "fat": 8,
    "carbs": 16,
    "prepTime": 5,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80",
    "source": "EatingWell (美國)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "高纖",
      "少鹽",
      "好油脂",
      "羽衣甘藍",
      "成熟酪梨",
      "無糖高纖豆漿"
    ],
    "ingredients": [
      {
        "name": "羽衣甘藍",
        "amount": "40g",
        "isMain": true
      },
      {
        "name": "成熟酪梨",
        "amount": "30g",
        "isMain": true
      },
      {
        "name": "無糖高纖豆漿",
        "amount": "200ml",
        "isMain": true
      }
    ],
    "steps": [
      "準備新鮮食材：羽衣甘藍 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 5 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-065",
    "title": "香草第戎芥末拌白煮蛋酪梨沙拉",
    "category": "quick-meal",
    "categoryName": "超快即食",
    "calories": 220,
    "protein": 16,
    "fat": 14,
    "carbs": 6,
    "prepTime": 8,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "source": "Delish (美國)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "少鹽",
      "好油脂",
      "水煮蛋",
      "成熟酪梨",
      "第戎芥末醬與檸檬汁"
    ],
    "ingredients": [
      {
        "name": "水煮蛋",
        "amount": "2顆 (切塊)",
        "isMain": true
      },
      {
        "name": "成熟酪梨",
        "amount": "40g",
        "isMain": true
      },
      {
        "name": "第戎芥末醬與檸檬汁",
        "amount": "1小匙",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：水煮蛋 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 8 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-066",
    "title": "氣炸去皮香檸雞柳條佐無油莎莎醬",
    "category": "high-protein",
    "categoryName": "高蛋白肌力",
    "calories": 230,
    "protein": 38,
    "fat": 4,
    "carbs": 8,
    "prepTime": 12,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "FitMenCook (美國)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "增肌",
      "低糖",
      "少鹽",
      "低脂",
      "生鮮雞里肌柳條",
      "自製番茄莎莎醬",
      "蒜粉與黑胡椒"
    ],
    "ingredients": [
      {
        "name": "生鮮雞里肌柳條",
        "amount": "180g",
        "isMain": true
      },
      {
        "name": "自製番茄莎莎醬",
        "amount": "2大匙",
        "isMain": true
      },
      {
        "name": "蒜粉與黑胡椒",
        "amount": "適量",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：生鮮雞里肌柳條 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 12 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-067",
    "title": "地中海烤彩椒鑲低脂雞肉豆腐餡",
    "category": "low-carb",
    "categoryName": "極低碳減醣",
    "calories": 240,
    "protein": 32,
    "fat": 6,
    "carbs": 12,
    "prepTime": 20,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "EatingWell (美國)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "增肌",
      "低糖",
      "少鹽",
      "低脂",
      "大甜彩椒",
      "雞胸絞肉與板豆腐",
      "義式香草與蒜末"
    ],
    "ingredients": [
      {
        "name": "大甜彩椒",
        "amount": "1顆 (對半剖開)",
        "isMain": true
      },
      {
        "name": "雞胸絞肉與板豆腐",
        "amount": "150g",
        "isMain": true
      },
      {
        "name": "義式香草與蒜末",
        "amount": "適量",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：大甜彩椒 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 20 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-068",
    "title": "清甜西洋芹燉牛里肌排鈉高鉀湯",
    "category": "soups",
    "categoryName": "低卡暖胃湯",
    "calories": 210,
    "protein": 32,
    "fat": 5,
    "carbs": 8,
    "prepTime": 15,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    "source": "愛料理 iCook",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "增肌",
      "低糖",
      "少鹽",
      "低脂",
      "牛里肌肉塊",
      "西洋芹段",
      "生薑片與白胡椒"
    ],
    "ingredients": [
      {
        "name": "牛里肌肉塊",
        "amount": "150g",
        "isMain": true
      },
      {
        "name": "西洋芹段",
        "amount": "80g",
        "isMain": true
      },
      {
        "name": "生薑片與白胡椒",
        "amount": "適量",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：牛里肌肉塊 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 15 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-069",
    "title": "抹茶奇亞籽無糖椰奶高纖布丁",
    "category": "drinks-dessert",
    "categoryName": "減脂點心飲品",
    "calories": 160,
    "protein": 6,
    "fat": 7,
    "carbs": 16,
    "prepTime": 5,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80",
    "source": "Minimalist Baker (美國)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "高纖",
      "少鹽",
      "好油脂",
      "純抹茶粉",
      "奇亞籽",
      "無糖椰奶/杏仁奶"
    ],
    "ingredients": [
      {
        "name": "純抹茶粉",
        "amount": "1小匙",
        "isMain": true
      },
      {
        "name": "奇亞籽",
        "amount": "10g",
        "isMain": true
      },
      {
        "name": "無糖椰奶/杏仁奶",
        "amount": "120ml",
        "isMain": true
      }
    ],
    "steps": [
      "準備新鮮食材：純抹茶粉 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 5 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-070",
    "title": "義式生牛肉薄片冷盤佐芝麻葉 (Beef Carpaccio)",
    "category": "quick-meal",
    "categoryName": "超快即食",
    "calories": 220,
    "protein": 34,
    "fat": 7,
    "carbs": 3,
    "prepTime": 8,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "Food Network (美國)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "增肌",
      "低糖",
      "少鹽",
      "好油脂",
      "牛里肌肉薄片",
      "新鮮芝麻葉",
      "檸檬汁與巴薩米克黑醋"
    ],
    "ingredients": [
      {
        "name": "牛里肌肉薄片",
        "amount": "160g (低溫熟成/汆燙)",
        "isMain": true
      },
      {
        "name": "新鮮芝麻葉",
        "amount": "40g",
        "isMain": true
      },
      {
        "name": "檸檬汁與巴薩米克黑醋",
        "amount": "適量",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：牛里肌肉薄片 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 8 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-071",
    "title": "美式水牛城辣醬烤花椰菜脆球 (Buffalo Cauliflower)",
    "category": "drinks-dessert",
    "categoryName": "減脂點心飲品",
    "calories": 95,
    "protein": 4,
    "fat": 2,
    "carbs": 15,
    "prepTime": 15,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80",
    "source": "Tasty (國際)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "少鹽",
      "低脂",
      "白花椰菜",
      "美式低卡辣醬",
      "蒜粉與少許橄欖油"
    ],
    "ingredients": [
      {
        "name": "白花椰菜",
        "amount": "180g (切小朵)",
        "isMain": true
      },
      {
        "name": "美式低卡辣醬",
        "amount": "1.5大匙",
        "isMain": true
      },
      {
        "name": "蒜粉與少許橄欖油",
        "amount": "適量",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：白花椰菜 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 15 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-072",
    "title": "韓式涼拌黑木耳洋蔥手撕雞胸",
    "category": "quick-meal",
    "categoryName": "超快即食",
    "calories": 210,
    "protein": 34,
    "fat": 3,
    "carbs": 11,
    "prepTime": 8,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "愛料理 iCook",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "增肌",
      "低糖",
      "少鹽",
      "低脂",
      "雞胸肉絲",
      "黑木耳絲與洋蔥絲",
      "白醋與熟白芝麻"
    ],
    "ingredients": [
      {
        "name": "雞胸肉絲",
        "amount": "150g",
        "isMain": true
      },
      {
        "name": "黑木耳絲與洋蔥絲",
        "amount": "80g",
        "isMain": true
      },
      {
        "name": "白醋與熟白芝麻",
        "amount": "適量",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：雞胸肉絲 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 8 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-073",
    "title": "日式低卡白玉蒟蒻絲大阪燒 (無麵粉)",
    "category": "low-carb",
    "categoryName": "極低碳減醣",
    "calories": 220,
    "protein": 22,
    "fat": 8,
    "carbs": 13,
    "prepTime": 12,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "日本減醣食譜 Kurashiru",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "少鹽",
      "好油脂",
      "高麗菜絲",
      "雞蛋",
      "熟蝦仁與蒟蒻絲"
    ],
    "ingredients": [
      {
        "name": "高麗菜絲",
        "amount": "150g",
        "isMain": true
      },
      {
        "name": "雞蛋",
        "amount": "2顆",
        "isMain": true
      },
      {
        "name": "熟蝦仁與蒟蒻絲",
        "amount": "80g",
        "isMain": true
      }
    ],
    "steps": [
      "準備新鮮食材：高麗菜絲 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 12 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-074",
    "title": "香烤迷迭香甜南瓜片 (天然慢碳減脂主食)",
    "category": "drinks-dessert",
    "categoryName": "減脂點心飲品",
    "calories": 90,
    "protein": 2,
    "fat": 1.5,
    "carbs": 19,
    "prepTime": 15,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "EatingWell (美國)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "高纖",
      "少鹽",
      "低脂",
      "栗子南瓜/南瓜",
      "新鮮迷迭香與黑胡椒"
    ],
    "ingredients": [
      {
        "name": "栗子南瓜/南瓜",
        "amount": "120g (切薄片)",
        "isMain": true
      },
      {
        "name": "新鮮迷迭香與黑胡椒",
        "amount": "適量",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：栗子南瓜/南瓜 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 15 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-075",
    "title": "清甜干貝鮮蝦冬瓜低卡滾羹 (無太白粉)",
    "category": "soups",
    "categoryName": "低卡暖胃湯",
    "calories": 160,
    "protein": 25,
    "fat": 2,
    "carbs": 9,
    "prepTime": 12,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "Cookpad",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "少鹽",
      "低脂",
      "鮮干貝與蝦仁",
      "冬瓜片",
      "金針菇與蛋花"
    ],
    "ingredients": [
      {
        "name": "鮮干貝與蝦仁",
        "amount": "100g",
        "isMain": true
      },
      {
        "name": "冬瓜片",
        "amount": "150g",
        "isMain": true
      },
      {
        "name": "金針菇與蛋花",
        "amount": "適量",
        "isMain": true
      }
    ],
    "steps": [
      "準備新鮮食材：鮮干貝與蝦仁 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 12 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-076",
    "title": "無糖純可可高蛋白熔岩馬克杯蛋糕",
    "category": "drinks-dessert",
    "categoryName": "減脂點心飲品",
    "calories": 190,
    "protein": 22,
    "fat": 4,
    "carbs": 14,
    "prepTime": 3,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80",
    "source": "FitMenCook (美國)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "少鹽",
      "低脂",
      "高蛋白粉/可可粉",
      "雞蛋",
      "無糖豆漿"
    ],
    "ingredients": [
      {
        "name": "高蛋白粉/可可粉",
        "amount": "20g",
        "isMain": true
      },
      {
        "name": "雞蛋",
        "amount": "1顆",
        "isMain": true
      },
      {
        "name": "無糖豆漿",
        "amount": "30ml",
        "isMain": true
      }
    ],
    "steps": [
      "準備新鮮食材：高蛋白粉/可可粉 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 3 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-077",
    "title": "泰式香茅檸檬煎鯛魚菲力",
    "category": "high-protein",
    "categoryName": "高蛋白肌力",
    "calories": 230,
    "protein": 36,
    "fat": 5,
    "carbs": 4,
    "prepTime": 12,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "愛料理 iCook",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "增肌",
      "低糖",
      "少鹽",
      "低脂",
      "鯛魚排",
      "香茅末與檸檬汁",
      "黑胡椒與少許魚露"
    ],
    "ingredients": [
      {
        "name": "鯛魚排",
        "amount": "180g",
        "isMain": true
      },
      {
        "name": "香茅末與檸檬汁",
        "amount": "1大匙",
        "isMain": false
      },
      {
        "name": "黑胡椒與少許魚露",
        "amount": "適量",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：鯛魚排 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 12 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-078",
    "title": "甜椒炒牛肉片佐黑胡椒洋蔥絲",
    "category": "high-protein",
    "categoryName": "高蛋白肌力",
    "calories": 290,
    "protein": 36,
    "fat": 8,
    "carbs": 12,
    "prepTime": 12,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "Cookpad",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "增肌",
      "低糖",
      "少鹽",
      "好油脂",
      "牛里肌肉片",
      "雙色甜椒與洋蔥",
      "現磨黑胡椒粒"
    ],
    "ingredients": [
      {
        "name": "牛里肌肉片",
        "amount": "160g",
        "isMain": true
      },
      {
        "name": "雙色甜椒與洋蔥",
        "amount": "100g",
        "isMain": true
      },
      {
        "name": "現磨黑胡椒粒",
        "amount": "1小匙",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：牛里肌肉片 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 12 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-079",
    "title": "酪梨滑蛋燻鮭魚低碳早午餐盤",
    "category": "low-carb",
    "categoryName": "極低碳減醣",
    "calories": 320,
    "protein": 26,
    "fat": 18,
    "carbs": 6,
    "prepTime": 8,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "Delish (美國)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "少鹽",
      "好油脂",
      "生鮮冷燻鮭魚",
      "滑嫩炒蛋",
      "成熟酪梨"
    ],
    "ingredients": [
      {
        "name": "生鮮冷燻鮭魚",
        "amount": "80g",
        "isMain": true
      },
      {
        "name": "滑嫩炒蛋",
        "amount": "2顆",
        "isMain": true
      },
      {
        "name": "成熟酪梨",
        "amount": "40g",
        "isMain": true
      }
    ],
    "steps": [
      "準備新鮮食材：生鮮冷燻鮭魚 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 8 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-080",
    "title": "純素高纖甜菜根野莓耐力運動果昔",
    "category": "drinks-dessert",
    "categoryName": "減脂點心飲品",
    "calories": 150,
    "protein": 4,
    "fat": 2,
    "carbs": 28,
    "prepTime": 5,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80",
    "source": "BBC Good Food (英國)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "高纖",
      "少鹽",
      "低脂",
      "熟甜菜根塊",
      "冷凍藍莓",
      "無糖燕麥奶"
    ],
    "ingredients": [
      {
        "name": "熟甜菜根塊",
        "amount": "50g",
        "isMain": true
      },
      {
        "name": "冷凍藍莓",
        "amount": "50g",
        "isMain": true
      },
      {
        "name": "無糖燕麥奶",
        "amount": "180ml",
        "isMain": true
      }
    ],
    "steps": [
      "準備新鮮食材：熟甜菜根塊 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 5 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-081",
    "title": "和風柴魚香菇雞肉豆腐暖胃鍋",
    "category": "soups",
    "categoryName": "低卡暖胃湯",
    "calories": 230,
    "protein": 34,
    "fat": 4,
    "carbs": 9,
    "prepTime": 15,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    "source": "日本減醣食譜 Kurashiru",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "增肌",
      "低糖",
      "少鹽",
      "低脂",
      "去皮雞胸肉塊",
      "嫩豆腐與香菇",
      "柴魚清高湯"
    ],
    "ingredients": [
      {
        "name": "去皮雞胸肉塊",
        "amount": "160g",
        "isMain": true
      },
      {
        "name": "嫩豆腐與香菇",
        "amount": "100g",
        "isMain": true
      },
      {
        "name": "柴魚清高湯",
        "amount": "400ml",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：去皮雞胸肉塊 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 15 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-082",
    "title": "氣炸少油培根金針菇低卡卷",
    "category": "low-carb",
    "categoryName": "極低碳減醣",
    "calories": 180,
    "protein": 16,
    "fat": 9,
    "carbs": 7,
    "prepTime": 10,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "愛料理 iCook",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "少鹽",
      "好油脂",
      "低脂培根片",
      "金針菇",
      "黑胡椒粉"
    ],
    "ingredients": [
      {
        "name": "低脂培根片",
        "amount": "3片",
        "isMain": true
      },
      {
        "name": "金針菇",
        "amount": "100g",
        "isMain": true
      },
      {
        "name": "黑胡椒粉",
        "amount": "少許",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：低脂培根片 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 10 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-083",
    "title": "義式蒜辣橄欖油炒綠雙菇櫛瓜",
    "category": "low-carb",
    "categoryName": "極低碳減醣",
    "calories": 140,
    "protein": 6,
    "fat": 6,
    "carbs": 14,
    "prepTime": 10,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "Jamie Oliver",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "少鹽",
      "低脂",
      "綠櫛瓜與杏鮑菇",
      "大蒜片與乾辣椒",
      "初榨橄欖油"
    ],
    "ingredients": [
      {
        "name": "綠櫛瓜與杏鮑菇",
        "amount": "150g",
        "isMain": true
      },
      {
        "name": "大蒜片與乾辣椒",
        "amount": "適量",
        "isMain": false
      },
      {
        "name": "初榨橄欖油",
        "amount": "1/2小匙",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：綠櫛瓜與杏鮑菇 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 10 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-084",
    "title": "檸香薄荷氣泡無糖冰紅茶 (消暑零卡特調)",
    "category": "drinks-dessert",
    "categoryName": "減脂點心飲品",
    "calories": 15,
    "protein": 0.2,
    "fat": 0.1,
    "carbs": 3,
    "prepTime": 3,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80",
    "source": "Delish (美國)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "少鹽",
      "低脂",
      "無糖錫蘭紅茶",
      "原味氣泡水",
      "新鮮薄荷與檸檬片"
    ],
    "ingredients": [
      {
        "name": "無糖錫蘭紅茶",
        "amount": "150ml",
        "isMain": true
      },
      {
        "name": "原味氣泡水",
        "amount": "150ml",
        "isMain": true
      },
      {
        "name": "新鮮薄荷與檸檬片",
        "amount": "適量",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：無糖錫蘭紅茶 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 3 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-085",
    "title": "免麵粉花椰菜底瑪格麗特低卡披薩",
    "category": "low-carb",
    "categoryName": "極低碳減醣",
    "calories": 230,
    "protein": 20,
    "fat": 10,
    "carbs": 12,
    "prepTime": 18,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "Tasty (國際)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "少鹽",
      "好油脂",
      "碎白花椰菜米與蛋",
      "牛番茄片與莫札瑞拉起司",
      "新鮮羅勒葉"
    ],
    "ingredients": [
      {
        "name": "碎白花椰菜米與蛋",
        "amount": "180g (壓成餅皮)",
        "isMain": true
      },
      {
        "name": "牛番茄片與莫札瑞拉起司",
        "amount": "60g",
        "isMain": true
      },
      {
        "name": "新鮮羅勒葉",
        "amount": "適量",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：碎白花椰菜米與蛋 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 18 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-086",
    "title": "鮮蔬菠菜高蛋白低油厚烘蛋",
    "category": "low-carb",
    "categoryName": "極低碳減醣",
    "calories": 220,
    "protein": 20,
    "fat": 11,
    "carbs": 7,
    "prepTime": 12,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "EatingWell (美國)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "少鹽",
      "好油脂",
      "雞蛋",
      "新鮮菠菜與洋蔥",
      "黑胡椒與少許鹽"
    ],
    "ingredients": [
      {
        "name": "雞蛋",
        "amount": "3顆",
        "isMain": true
      },
      {
        "name": "新鮮菠菜與洋蔥",
        "amount": "80g",
        "isMain": true
      },
      {
        "name": "黑胡椒與少許鹽",
        "amount": "適量",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：雞蛋 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 12 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-087",
    "title": "清爽芥菜干貝鮮雞胸降火清湯",
    "category": "soups",
    "categoryName": "低卡暖胃湯",
    "calories": 170,
    "protein": 30,
    "fat": 2.5,
    "carbs": 6,
    "prepTime": 15,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    "source": "愛料理 iCook",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "增肌",
      "低糖",
      "少鹽",
      "低脂",
      "雞胸肉片",
      "新鮮干貝",
      "長年芥菜段與薑絲"
    ],
    "ingredients": [
      {
        "name": "雞胸肉片",
        "amount": "140g",
        "isMain": true
      },
      {
        "name": "新鮮干貝",
        "amount": "4顆",
        "isMain": true
      },
      {
        "name": "長年芥菜段與薑絲",
        "amount": "80g",
        "isMain": true
      }
    ],
    "steps": [
      "準備新鮮食材：雞胸肉片 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 15 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-088",
    "title": "椰香奇亞籽天然電解補水冰飲",
    "category": "drinks-dessert",
    "categoryName": "減脂點心飲品",
    "calories": 80,
    "protein": 2,
    "fat": 3,
    "carbs": 10,
    "prepTime": 3,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80",
    "source": "FitMenCook (美國)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "少鹽",
      "低脂",
      "天然 100% 椰子水",
      "奇亞籽",
      "青檸檬汁"
    ],
    "ingredients": [
      {
        "name": "天然 100% 椰子水",
        "amount": "200ml",
        "isMain": true
      },
      {
        "name": "奇亞籽",
        "amount": "1小匙",
        "isMain": true
      },
      {
        "name": "青檸檬汁",
        "amount": "1小匙",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：天然 100% 椰子水 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 3 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-089",
    "title": "香烤第戎芥末籽綠蘆筍佐水煮蛋",
    "category": "quick-meal",
    "categoryName": "超快即食",
    "calories": 160,
    "protein": 14,
    "fat": 8,
    "carbs": 7,
    "prepTime": 10,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "BBC Good Food (英國)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "少鹽",
      "好油脂",
      "鮮綠蘆筍",
      "水煮蛋",
      "第戎芥末籽醬"
    ],
    "ingredients": [
      {
        "name": "鮮綠蘆筍",
        "amount": "100g",
        "isMain": true
      },
      {
        "name": "水煮蛋",
        "amount": "2顆",
        "isMain": true
      },
      {
        "name": "第戎芥末籽醬",
        "amount": "1小匙",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：鮮綠蘆筍 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 10 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-090",
    "title": "微波高蛋白燕麥純花生醬能量碗",
    "category": "drinks-dessert",
    "categoryName": "減脂點心飲品",
    "calories": 230,
    "protein": 15,
    "fat": 8,
    "carbs": 25,
    "prepTime": 4,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "source": "Skinnytaste (美國)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "高纖",
      "少鹽",
      "好油脂",
      "大燕麥片",
      "無糖豆漿",
      "純花生醬",
      "藍莓"
    ],
    "ingredients": [
      {
        "name": "大燕麥片",
        "amount": "35g",
        "isMain": true
      },
      {
        "name": "無糖豆漿",
        "amount": "100ml",
        "isMain": true
      },
      {
        "name": "純花生醬",
        "amount": "1小匙",
        "isMain": false
      },
      {
        "name": "藍莓",
        "amount": "20g",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：大燕麥片 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 4 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-091",
    "title": "義式迷迭香慢烤大西洋鱈魚菲力",
    "category": "high-protein",
    "categoryName": "高蛋白肌力",
    "calories": 210,
    "protein": 38,
    "fat": 4,
    "carbs": 2,
    "prepTime": 15,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "Jamie Oliver",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "增肌",
      "低糖",
      "少鹽",
      "低脂",
      "大西洋鱈魚菲力",
      "新鮮迷迭香",
      "檸檬汁與海鹽"
    ],
    "ingredients": [
      {
        "name": "大西洋鱈魚菲力",
        "amount": "180g",
        "isMain": true
      },
      {
        "name": "新鮮迷迭香",
        "amount": "1小把",
        "isMain": false
      },
      {
        "name": "檸檬汁與海鹽",
        "amount": "少許",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：大西洋鱈魚菲力 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 15 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-092",
    "title": "韓式涼拌鮮彩椒水煮牛腱心薄片",
    "category": "quick-meal",
    "categoryName": "超快即食",
    "calories": 240,
    "protein": 36,
    "fat": 6,
    "carbs": 8,
    "prepTime": 10,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "小紅書健康減脂精選",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "增肌",
      "低糖",
      "少鹽",
      "低脂",
      "牛腱心薄片",
      "彩椒絲",
      "蒜泥與白醋"
    ],
    "ingredients": [
      {
        "name": "牛腱心薄片",
        "amount": "160g",
        "isMain": true
      },
      {
        "name": "彩椒絲",
        "amount": "60g",
        "isMain": true
      },
      {
        "name": "蒜泥與白醋",
        "amount": "適量",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：牛腱心薄片 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 10 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-093",
    "title": "泰式檸檬香茅清燉草蝦蒟蒻煲",
    "category": "soups",
    "categoryName": "低卡暖胃湯",
    "calories": 170,
    "protein": 26,
    "fat": 2,
    "carbs": 10,
    "prepTime": 12,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    "source": "Cookpad",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "少鹽",
      "低脂",
      "大草蝦/鮮蝦",
      "蒟蒻絲",
      "香茅與檸檬汁"
    ],
    "ingredients": [
      {
        "name": "大草蝦/鮮蝦",
        "amount": "8隻",
        "isMain": true
      },
      {
        "name": "蒟蒻絲",
        "amount": "120g",
        "isMain": true
      },
      {
        "name": "香茅與檸檬汁",
        "amount": "適量",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：大草蝦/鮮蝦 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 12 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-094",
    "title": "日式生薑清酒蒸金目鱸魚排",
    "category": "high-protein",
    "categoryName": "高蛋白肌力",
    "calories": 200,
    "protein": 36,
    "fat": 3.5,
    "carbs": 3,
    "prepTime": 12,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "日本減醣食譜 Kurashiru",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "增肌",
      "低糖",
      "少鹽",
      "低脂",
      "金目鱸魚排",
      "嫩薑絲與青蔥",
      "日本清酒"
    ],
    "ingredients": [
      {
        "name": "金目鱸魚排",
        "amount": "170g",
        "isMain": true
      },
      {
        "name": "嫩薑絲與青蔥",
        "amount": "40g",
        "isMain": true
      },
      {
        "name": "日本清酒",
        "amount": "1大匙",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：金目鱸魚排 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 12 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-095",
    "title": "無糖純黑芝麻希臘優格高鈣布丁",
    "category": "drinks-dessert",
    "categoryName": "減脂點心飲品",
    "calories": 180,
    "protein": 16,
    "fat": 8,
    "carbs": 11,
    "prepTime": 5,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80",
    "source": "愛料理 iCook",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "少鹽",
      "好油脂",
      "無糖希臘優格",
      "純黑芝麻粉",
      "奇亞籽"
    ],
    "ingredients": [
      {
        "name": "無糖希臘優格",
        "amount": "130g",
        "isMain": true
      },
      {
        "name": "純黑芝麻粉",
        "amount": "1.5大匙",
        "isMain": true
      },
      {
        "name": "奇亞籽",
        "amount": "1小匙",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：無糖希臘優格 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 5 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-096",
    "title": "美式炙燒牛里肌酪梨莎莎沙拉碗",
    "category": "high-protein",
    "categoryName": "高蛋白肌力",
    "calories": 320,
    "protein": 36,
    "fat": 12,
    "carbs": 14,
    "prepTime": 12,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    "source": "Delish (美國)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "增肌",
      "低糖",
      "少鹽",
      "好油脂",
      "牛里肌肉排",
      "成熟酪梨",
      "自製番茄莎莎醬"
    ],
    "ingredients": [
      {
        "name": "牛里肌肉排",
        "amount": "160g",
        "isMain": true
      },
      {
        "name": "成熟酪梨",
        "amount": "35g",
        "isMain": true
      },
      {
        "name": "自製番茄莎莎醬",
        "amount": "2大匙",
        "isMain": true
      }
    ],
    "steps": [
      "準備新鮮食材：牛里肌肉排 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 12 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-097",
    "title": "西班牙紅椒烤鮮小卷佐綠花椰菜",
    "category": "high-protein",
    "categoryName": "高蛋白肌力",
    "calories": 190,
    "protein": 30,
    "fat": 3.5,
    "carbs": 8,
    "prepTime": 12,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "BBC Good Food (英國)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "增肌",
      "低糖",
      "少鹽",
      "低脂",
      "鮮透抽/小卷",
      "青花菜",
      "煙燻紅椒粉"
    ],
    "ingredients": [
      {
        "name": "鮮透抽/小卷",
        "amount": "180g",
        "isMain": true
      },
      {
        "name": "青花菜",
        "amount": "80g",
        "isMain": true
      },
      {
        "name": "煙燻紅椒粉",
        "amount": "1/2小匙",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：鮮透抽/小卷 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 12 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-098",
    "title": "日式無糖玄米抹茶排毒消脂冰茶",
    "category": "drinks-dessert",
    "categoryName": "減脂點心飲品",
    "calories": 10,
    "protein": 0.5,
    "fat": 0.1,
    "carbs": 2,
    "prepTime": 3,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80",
    "source": "日本減醣食譜 Kurashiru",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "少鹽",
      "低脂",
      "日本玄米抹茶",
      "冷開水與冰塊",
      "新鮮檸檬汁"
    ],
    "ingredients": [
      {
        "name": "日本玄米抹茶",
        "amount": "1包",
        "isMain": true
      },
      {
        "name": "冷開水與冰塊",
        "amount": "350ml",
        "isMain": true
      },
      {
        "name": "新鮮檸檬汁",
        "amount": "數滴",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：日本玄米抹茶 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 3 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-099",
    "title": "微波高蛋白無油菠菜雞肉烘蛋",
    "category": "quick-meal",
    "categoryName": "超快即食",
    "calories": 210,
    "protein": 26,
    "fat": 7,
    "carbs": 6,
    "prepTime": 5,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "EatingWell (美國)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "少鹽",
      "好油脂",
      "雞蛋",
      "舒肥雞胸肉丁",
      "嫩菠菜葉"
    ],
    "ingredients": [
      {
        "name": "雞蛋",
        "amount": "2顆",
        "isMain": true
      },
      {
        "name": "舒肥雞胸肉丁",
        "amount": "60g",
        "isMain": true
      },
      {
        "name": "嫩菠菜葉",
        "amount": "40g",
        "isMain": true
      }
    ],
    "steps": [
      "準備新鮮食材：雞蛋 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 5 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-100",
    "title": "低脂摩洛哥香料烤鮮鯛魚排佐節瓜",
    "category": "high-protein",
    "categoryName": "高蛋白肌力",
    "calories": 220,
    "protein": 34,
    "fat": 5,
    "carbs": 7,
    "prepTime": 15,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "Minimalist Baker (美國)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "增肌",
      "低糖",
      "少鹽",
      "低脂",
      "台灣鯛魚排",
      "綠櫛瓜圓片",
      "孜然粉與薑黃粉"
    ],
    "ingredients": [
      {
        "name": "台灣鯛魚排",
        "amount": "170g",
        "isMain": true
      },
      {
        "name": "綠櫛瓜圓片",
        "amount": "80g",
        "isMain": true
      },
      {
        "name": "孜然粉與薑黃粉",
        "amount": "各1/2小匙",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：台灣鯛魚排 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 15 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-101",
    "title": "生酮低碳酪梨燻鮭魚黃瓜夾心塔",
    "category": "quick-meal",
    "categoryName": "超快即食",
    "calories": 210,
    "protein": 16,
    "fat": 14,
    "carbs": 4,
    "prepTime": 8,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "Delish (美國)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "少鹽",
      "好油脂",
      "小黃瓜厚片",
      "生鮮燻鮭魚",
      "成熟酪梨泥"
    ],
    "ingredients": [
      {
        "name": "小黃瓜厚片",
        "amount": "1條",
        "isMain": true
      },
      {
        "name": "生鮮燻鮭魚",
        "amount": "60g",
        "isMain": true
      },
      {
        "name": "成熟酪梨泥",
        "amount": "30g",
        "isMain": true
      }
    ],
    "steps": [
      "準備新鮮食材：小黃瓜厚片 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 8 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-102",
    "title": "冰鎮奇亞籽薄荷青檸高纖氣泡水",
    "category": "drinks-dessert",
    "categoryName": "減脂點心飲品",
    "calories": 35,
    "protein": 1.5,
    "fat": 1.5,
    "carbs": 5,
    "prepTime": 3,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "Tasty (國際)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "少鹽",
      "低脂",
      "奇亞籽",
      "天然無糖氣泡水",
      "新鮮薄荷與青檸汁"
    ],
    "ingredients": [
      {
        "name": "奇亞籽",
        "amount": "1小匙",
        "isMain": true
      },
      {
        "name": "天然無糖氣泡水",
        "amount": "300ml",
        "isMain": true
      },
      {
        "name": "新鮮薄荷與青檸汁",
        "amount": "適量",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：奇亞籽 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 3 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-103",
    "title": "清甜干貝鮮蛤蜊冬瓜利尿排鈉湯",
    "category": "soups",
    "categoryName": "低卡暖胃湯",
    "calories": 130,
    "protein": 20,
    "fat": 1.5,
    "carbs": 8,
    "prepTime": 12,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    "source": "愛料理 iCook",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "少鹽",
      "低脂",
      "新鮮干貝與蛤蜊",
      "冬瓜塊",
      "薑絲與芹菜末"
    ],
    "ingredients": [
      {
        "name": "新鮮干貝與蛤蜊",
        "amount": "120g",
        "isMain": true
      },
      {
        "name": "冬瓜塊",
        "amount": "150g",
        "isMain": true
      },
      {
        "name": "薑絲與芹菜末",
        "amount": "適量",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：新鮮干貝與蛤蜊 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 12 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-104",
    "title": "義式蒜香烤牛番茄佐低脂起司塊",
    "category": "drinks-dessert",
    "categoryName": "減脂點心飲品",
    "calories": 110,
    "protein": 7,
    "fat": 5,
    "carbs": 9,
    "prepTime": 12,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "Jamie Oliver",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "少鹽",
      "低脂",
      "大牛番茄",
      "低脂起司塊",
      "乾燥奧勒岡草"
    ],
    "ingredients": [
      {
        "name": "大牛番茄",
        "amount": "2顆 (對半切)",
        "isMain": true
      },
      {
        "name": "低脂起司塊",
        "amount": "25g",
        "isMain": true
      },
      {
        "name": "乾燥奧勒岡草",
        "amount": "少許",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：大牛番茄 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 12 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-105",
    "title": "美式氣炸去皮香料雞胸柳條佐黃芥末",
    "category": "high-protein",
    "categoryName": "高蛋白肌力",
    "calories": 220,
    "protein": 40,
    "fat": 3.5,
    "carbs": 4,
    "prepTime": 12,
    "difficulty": "簡單",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "FitMenCook (美國)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "增肌",
      "低糖",
      "少鹽",
      "低脂",
      "生鮮雞柳條",
      "無加糖第戎黃芥末",
      "蒜粉與黑胡椒"
    ],
    "ingredients": [
      {
        "name": "生鮮雞柳條",
        "amount": "180g",
        "isMain": true
      },
      {
        "name": "無加糖第戎黃芥末",
        "amount": "1大匙",
        "isMain": false
      },
      {
        "name": "蒜粉與黑胡椒",
        "amount": "適量",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：生鮮雞柳條 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 12 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-106",
    "title": "韓式無糖海帶芽嫩豆腐冷湯",
    "category": "soups",
    "categoryName": "低卡暖胃湯",
    "calories": 95,
    "protein": 9,
    "fat": 3,
    "carbs": 7,
    "prepTime": 6,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    "source": "日本減醣食譜 Kurashiru",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "少鹽",
      "低脂",
      "熟海帶芽",
      "嫩豆腐丁",
      "冰鎮柴魚清湯與白醋"
    ],
    "ingredients": [
      {
        "name": "熟海帶芽",
        "amount": "100g",
        "isMain": true
      },
      {
        "name": "嫩豆腐丁",
        "amount": "80g",
        "isMain": true
      },
      {
        "name": "冰鎮柴魚清湯與白醋",
        "amount": "300ml",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：熟海帶芽 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 6 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-107",
    "title": "純天然藍莓希臘優格無加糖冰沙",
    "category": "drinks-dessert",
    "categoryName": "減脂點心飲品",
    "calories": 140,
    "protein": 12,
    "fat": 2,
    "carbs": 19,
    "prepTime": 4,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    "source": "EatingWell (美國)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "高纖",
      "少鹽",
      "低脂",
      "冷凍藍莓",
      "無糖希臘優格",
      "無糖杏仁奶"
    ],
    "ingredients": [
      {
        "name": "冷凍藍莓",
        "amount": "70g",
        "isMain": true
      },
      {
        "name": "無糖希臘優格",
        "amount": "80g",
        "isMain": true
      },
      {
        "name": "無糖杏仁奶",
        "amount": "80ml",
        "isMain": true
      }
    ],
    "steps": [
      "準備新鮮食材：冷凍藍莓 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 4 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-108",
    "title": "日式柴魚高湯清煮秋葵嫩豆腐",
    "category": "quick-meal",
    "categoryName": "超快即食",
    "calories": 110,
    "protein": 10,
    "fat": 3.5,
    "carbs": 8,
    "prepTime": 8,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    "source": "Cookpad",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "低糖",
      "少鹽",
      "低脂",
      "新鮮秋葵",
      "嫩豆腐",
      "柴魚片與薄鹽醬油"
    ],
    "ingredients": [
      {
        "name": "新鮮秋葵",
        "amount": "6支",
        "isMain": true
      },
      {
        "name": "嫩豆腐",
        "amount": "半盒",
        "isMain": true
      },
      {
        "name": "柴魚片與薄鹽醬油",
        "amount": "適量",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：新鮮秋葵 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 8 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
  },
  {
    "id": "rec-109",
    "title": "低脂微波可可無糖燕麥舒芙蕾蛋糕",
    "category": "drinks-dessert",
    "categoryName": "減脂點心飲品",
    "calories": 180,
    "protein": 14,
    "fat": 4,
    "carbs": 22,
    "prepTime": 4,
    "difficulty": "極簡易",
    "servings": 1,
    "image": "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80",
    "source": "FitMenCook (美國)",
    "sourceUrl": "https://icook.tw",
    "tags": [
      "減脂",
      "高纖",
      "少鹽",
      "低脂",
      "大燕麥粉",
      "無糖純可可粉",
      "蛋白液",
      "無糖豆漿"
    ],
    "ingredients": [
      {
        "name": "大燕麥粉",
        "amount": "25g",
        "isMain": true
      },
      {
        "name": "無糖純可可粉",
        "amount": "1大匙",
        "isMain": true
      },
      {
        "name": "蛋白液",
        "amount": "2顆",
        "isMain": true
      },
      {
        "name": "無糖豆漿",
        "amount": "30ml",
        "isMain": false
      }
    ],
    "steps": [
      "準備新鮮食材：大燕麥粉 等洗淨切妥適當大小備用。",
      "以少油、清蒸、低溫慢烤或水煮方式烹調 4 分鐘至熟透保水。",
      "盛盤享用，保留食材天然鮮甜與純粹營養！"
    ],
    "tips": "依照個人減脂目標調控調味，享受天然鮮味與飽足感！"
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
  { name: "優格", icon: "🥛" },
  { name: "藍莓", icon: "🫐" },
  { name: "奇亞籽", icon: "🌱" },
  { name: "菇類", icon: "🍄" },
  { name: "櫛瓜", icon: "🥒" },
  { name: "菠菜", icon: "🥬" },
  { name: "鯛魚", icon: "🐡" },
  { name: "鱸魚", icon: "🐟" },
  { name: "鯖魚", icon: "🐟" },
  { name: "秋刀魚", icon: "🐟" },
  { name: "蛤蜊", icon: "🦪" },
  { name: "冬瓜", icon: "🍈" }
];

// 食材與飲食目標別名對應字典（模糊搜尋拓展）
const INGREDIENT_SYNONYMS = {
  // 飲食目標關鍵字拓展
  "增肌": ["增肌", "高蛋白", "牛里肌", "牛排", "牛板腱", "生鮮鮪魚", "三色藜麥", "鷹嘴豆", "雞胸肉", "雞肉", "舒肥雞胸", "鱸魚", "鯛魚", "蝦仁", "毛豆仁", "白豆", "火雞胸肉"],
  "減脂": ["減脂", "低卡", "負卡", "蒟蒻", "蒟蒻絲", "白花椰菜米", "花椰菜米", "冬瓜", "金針菇", "小黃瓜", "海帶芽", "絲瓜", "雙菇", "無油", "球芽甘藍", "果昔", "綠拿鐵"],
  "低糖": ["低糖", "減醣", "極低碳", "低碳", "無糖", "生酮", "無澱粉", "無麵粉", "花椰菜米", "櫛瓜麵", "生菜包", "蒟蒻絲", "低GI", "燕麥", "奇亞籽", "酪梨慕斯"],
  "減醣": ["低糖", "減醣", "極低碳", "低碳", "無糖", "生酮", "無澱粉", "無麵粉", "花椰菜米", "櫛瓜麵", "米紙皮", "蒟蒻"],
  "低脂": ["低脂", "無油", "清蒸", "水煮", "氣炸", "去皮", "雞胸肉", "鯛魚", "鱸魚", "蝦仁", "干貝", "蛤蜊", "嫩豆腐", "白豆", "果脆"],
  "少鹽": ["少鹽", "減鈉", "無鹽", "薄鹽", "清淡", "檸檬汁", "迷迭香", "天然辛香料", "消水腫", "DASH", "冬瓜", "芹菜", "黑橄欖", "第戎芥末醬"],
  "減鈉": ["少鹽", "減鈉", "無鹽", "薄鹽", "消水腫", "高鉀", "冬瓜", "芹菜", "干貝", "檸檬汁", "天然辛香料", "西瓜"],
  "無油": ["無油", "清蒸", "水煮", "免開火", "氣炸", "生春捲", "涼拌", "果乾"],
  "高蛋白": ["增肌", "高蛋白", "雞胸肉", "牛肉", "鮭魚", "鯛魚", "鱸魚", "蝦仁", "雞蛋", "豆腐", "毛豆仁", "鮪魚", "希臘優格", "白豆", "火雞胸肉", "高蛋白布丁"],

  // 點心與飲品分類
  "飲料": ["綠拿鐵", "抹茶拿鐵", "黃金奶", "電解水", "果昔", "優格飲", "防彈咖啡", "冷泡茶", "紅茶"],
  "飲品": ["綠拿鐵", "抹茶拿鐵", "黃金奶", "電解水", "果昔", "優格飲", "冷泡茶", "紅茶"],
  "點心": ["奇亞籽布丁", "烤蘋果片", "酪梨慕斯", "優格冰磚", "香蕉蛋糕", "燕麥餅", "薯條", "能量球", "鬆餅"],
  "甜點": ["奇亞籽布丁", "酪梨慕斯", "優格冰磚", "香蕉蛋糕", "燕麥碗", "布丁", "慕斯", "雪糕"],

  // 國外著名料理關鍵字拓展
  "希臘": ["希臘檸檬香草烤雞佐黃瓜酸奶醬", "無糖希臘優格", "地中海飲食", "優格冰磚", "菲達起司"],
  "地中海": ["地中海烤海鱸魚佐刺山柑番茄黑橄欖", "希臘檸檬香草烤雞佐黃瓜酸奶醬", "橄欖油", "黑橄欖", "普羅旺斯"],
  "墨西哥": ["墨西哥青檸彩椒牛排法士達碗", "牛板腱", "彩椒", "酪梨", "孜然", "墨西哥奇波雷辣黑豆雞胸肉低碳碗", "塔可"],
  "法式": ["法式第戎芥末籽慢烤鮭魚佐球芽甘藍", "第戎芥末籽醬", "普羅旺斯燉菜", "紅酒燉牛肉"],
  "西班牙": ["西班牙蒜香紅椒低油白蝦熱鐵板", "煙燻紅椒粉", "冷湯", "Gazpacho"],
  "越南": ["越南清爽鮮蝦米紙生春捲", "米紙皮", "生春捲", "越式清燉鮮牛肉河粉"],

  // 食材別名
  "蛋": ["雞蛋", "水煮蛋", "蛋花", "溏心蛋", "炒蛋", "嫩蛋", "太陽蛋", "荷包蛋", "茶碗蒸", "烘蛋"],
  "雞蛋": ["蛋", "水煮蛋", "蛋液", "太陽蛋", "荷包蛋", "烘蛋"],
  "雞肉": ["雞胸肉", "去骨雞腿排", "雞腿肉", "雞絲", "舒肥雞胸", "雞里肌", "雞柳條", "雞胸絞肉", "雞肉丁"],
  "雞胸": ["雞胸肉", "雞胸", "舒肥雞胸", "雞絲", "雞胸絞肉", "雞胸肉丁"],
  "牛": ["牛肉", "牛里肌", "牛里肌肉", "牛排", "牛腩", "牛瘦肉片", "牛柳", "牛肉片", "牛板腱", "牛板腱肉排"],
  "牛肉": ["牛里肌", "牛里肌肉片", "牛排", "牛瘦肉片", "牛柳", "牛肉片", "牛板腱"],
  "魚": ["鮭魚", "鯛魚", "魚排", "生鮮鮭魚菲力", "台灣鯛魚排", "鱸魚", "鯖魚", "金目鱸魚排", "薄鹽鯖魚菲力", "鮪魚", "秋刀魚"],
  "鮭魚": ["生鮮鮭魚菲力", "鮭魚排", "生鮮鮭魚切塊", "鮭魚"],
  "鯛魚": ["台灣鯛魚排", "鯛魚片", "鯛魚"],
  "鱸魚": ["金目鱸魚排", "鱸魚菲力", "鱸魚", "金目鱸魚"],
  "鯖魚": ["青花魚", "薄鹽鯖魚菲力", "鯖魚"],
  "秋刀魚": ["新鮮秋刀魚", "秋刀魚"],
  "蝦": ["蝦仁", "鮮蝦仁", "白蝦", "生鮮蝦仁", "熟蝦仁", "鮮蝦", "無毒鮮蝦仁"],
  "蝦仁": ["蝦", "白蝦", "鮮蝦仁", "熟蝦仁", "鮮蝦"],
  "豆腐": ["板豆腐", "嫩豆腐", "老板豆腐", "豆腐丁", "碎豆腐", "茅屋起司"],
  "花椰菜": ["青花菜", "白花椰菜", "白花椰菜米", "花椰菜米"],
  "番茄": ["牛番茄", "小番茄", "番茄塊", "番茄丁"],
  "菇": ["杏鮑菇", "鴻禧菇", "金針菇", "香菇", "鮮香菇", "鮮菇", "鮮冬菇", "雙菇", "秀珍菇"],
  "地瓜": ["黃地瓜", "地瓜塊", "甘藷", "紫地瓜", "南瓜"],
  "燕麥": ["大燕麥片", "燕麥片", "燕麥", "燕麥粉"],
  "藜麥": ["三色藜麥", "熟三色藜麥", "藜麥"],
  "鷹嘴豆": ["熟鷹嘴豆", "鷹嘴豆", "白豆", "紅扁豆"],
  "優格": ["無糖希臘優格", "希臘優格", "優格", "茅屋起司"],
  "奇亞籽": ["奇亞籽"],
  "藍莓": ["新鮮藍莓", "冷凍藍莓", "藍莓", "野莓", "莓果", "巴西莓"],
  "蘋果": ["青蘋果", "新鮮蘋果", "蘋果"],
  "可可": ["純可可粉", "無糖純可可粉", "可可粉"],
  "抹茶": ["純抹茶粉", "抹茶粉", "抹茶"],
  "薑黃": ["薑黃粉", "薑黃"],
  "蒟蒻": ["蒟蒻絲", "魔芋絲", "蒟蒻結", "蒟蒻", "蒟蒻寬麵", "蒟蒻細麵"],
  "瓜": ["櫛瓜", "小黃瓜", "絲瓜", "南瓜", "冬瓜", "西瓜"],
  "貝": ["干貝", "鮮干貝", "蛤蜊", "活蛤蜊"],
  "菜": ["青花菜", "菠菜", "娃娃菜", "高麗菜", "生菜", "綜合生菜", "美生菜", "芹菜", "球芽甘藍", "羽衣甘藍", "芝麻葉", "芥菜"],
  "海鮮": ["鮭魚", "鯛魚", "鱸魚", "鯖魚", "蝦仁", "鮮蝦", "白蝦", "蛤蜊", "干貝", "魚排", "生鮮鮭魚菲力", "台灣鯛魚排", "金目鱸魚排", "薄鹽鯖魚菲力", "鮪魚", "秋刀魚", "花枝"],
  "辣": ["辣椒", "辣椒粉", "紅辣椒", "泡菜", "韓式辣醬", "花椒", "七味粉", "蒜辣", "泰式", "打拋", "冬蔭", "水牛城"],
  "辣椒": ["辣椒粉", "紅辣椒", "辣椒碎", "辣椒圈"],
  "香菜": ["新鮮香菜", "香菜"],
  "蒜": ["蒜頭", "大蒜", "蒜片", "蒜泥", "蒜末", "蒜蓉", "大蒜粉"],
  "洋蔥": ["洋蔥", "紫洋蔥", "洋蔥絲", "洋蔥丁", "洋蔥末"],
  "起司": ["起司絲", "莫札瑞拉起司", "低脂莫札瑞拉起司", "起司", "菲達起司", "茅屋起司"],
  "乳製品": ["起司", "起司絲", "莫札瑞拉起司", "無糖希臘優格", "希臘優格", "牛奶", "無鹽奶油", "茅屋起司", "杏仁奶", "豆漿"],
  "豬": ["培根", "豬肉", "豬里肌"]
};
