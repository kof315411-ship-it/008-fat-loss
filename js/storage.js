/**
 * 減脂餐應用程式 - LocalStorage 本地儲存管理
 */
const STORAGE_KEYS = {
  FAVORITES: "fat_loss_favorites_v1",
  CUSTOM_RECIPES: "fat_loss_custom_recipes_v1",
  SHOPPING_LIST: "fat_loss_shopping_list_v1"
};

const StorageManager = {
  // 取得所有食譜（包含預設食譜與使用者自訂食譜）
  getAllRecipes() {
    const custom = this.getCustomRecipes();
    return [...DEFAULT_RECIPES, ...custom];
  },

  // 取得自訂食譜
  getCustomRecipes() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CUSTOM_RECIPES);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("讀取自訂食譜失敗", e);
      return [];
    }
  },

  // 儲存自訂食譜
  saveCustomRecipe(recipe) {
    const custom = this.getCustomRecipes();
    custom.unshift(recipe);
    try {
      localStorage.setItem(STORAGE_KEYS.CUSTOM_RECIPES, JSON.stringify(custom));
      return true;
    } catch (e) {
      console.error("儲存自訂食譜失敗", e);
      return false;
    }
  },

  // 刪除自訂食譜
  deleteCustomRecipe(recipeId) {
    let custom = this.getCustomRecipes();
    custom = custom.filter(r => r.id !== recipeId);
    try {
      localStorage.setItem(STORAGE_KEYS.CUSTOM_RECIPES, JSON.stringify(custom));
      return true;
    } catch (e) {
      console.error("刪除自訂食譜失敗", e);
      return false;
    }
  },

  // 取得收藏清單
  getFavorites() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.FAVORITES);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("讀取收藏清單失敗", e);
      return [];
    }
  },

  // 切換收藏狀態 (傳入 recipeId，回傳是否為收藏狀態)
  toggleFavorite(recipeId) {
    const favs = this.getFavorites();
    const index = favs.indexOf(recipeId);
    let isFav = false;
    if (index > -1) {
      favs.splice(index, 1);
      isFav = false;
    } else {
      favs.push(recipeId);
      isFav = true;
    }
    try {
      localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favs));
    } catch (e) {
      console.error("更新收藏清單失敗", e);
    }
    return isFav;
  },

  // 檢查是否已收藏
  isFavorite(recipeId) {
    const favs = this.getFavorites();
    return favs.includes(recipeId);
  },

  // 取得採買清單
  getShoppingList() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SHOPPING_LIST);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("讀取採買清單失敗", e);
      return [];
    }
  },

  // 加入項目至採買清單
  addShoppingItems(items) {
    const list = this.getShoppingList();
    items.forEach(item => {
      // 避免完全重複的項目
      const exists = list.some(existing => existing.name === item.name && existing.recipeTitle === item.recipeTitle);
      if (!exists) {
        list.push({
          id: "item-" + Date.now() + "-" + Math.random().toString(36).substr(2, 5),
          name: item.name,
          amount: item.amount || "",
          recipeTitle: item.recipeTitle || "",
          checked: false,
          createdAt: Date.now()
        });
      }
    });
    try {
      localStorage.setItem(STORAGE_KEYS.SHOPPING_LIST, JSON.stringify(list));
      return list;
    } catch (e) {
      console.error("儲存採買清單失敗", e);
      return list;
    }
  },

  // 切換採買項目狀態
  toggleShoppingItem(itemId) {
    const list = this.getShoppingList();
    const target = list.find(i => i.id === itemId);
    if (target) {
      target.checked = !target.checked;
      localStorage.setItem(STORAGE_KEYS.SHOPPING_LIST, JSON.stringify(list));
    }
    return list;
  },

  // 移除採買項目
  removeShoppingItem(itemId) {
    let list = this.getShoppingList();
    list = list.filter(i => i.id !== itemId);
    localStorage.setItem(STORAGE_KEYS.SHOPPING_LIST, JSON.stringify(list));
    return list;
  },

  // 清空已完成或全部項目
  clearShoppingList(onlyChecked = false) {
    let list = this.getShoppingList();
    if (onlyChecked) {
      list = list.filter(i => !i.checked);
    } else {
      list = [];
    }
    localStorage.setItem(STORAGE_KEYS.SHOPPING_LIST, JSON.stringify(list));
    return list;
  }
};
