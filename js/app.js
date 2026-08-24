/**
 * 減脂餐料理搜尋 Web App - 主程式邏輯
 */

// 應用程式全域狀態
const AppState = {
  activeTab: "all",
  searchQuery: "",
  excludeQuery: "",
  selectedPills: new Set(),
  selectedExcludePills: new Set(),
  maxCalories: 500,
  maxTime: 60,
  sortBy: "match", // match, calories-asc, protein-desc, time-asc
  currentRecipeId: null,
  currentServings: 1,
  completedSteps: new Set()
};

// DOM 元素快取
const DOM = {
  searchInput: null,
  searchClearBtn: null,
  excludeInput: null,
  excludeClearBtn: null,
  excludeStatusTag: null,
  popularPillsContainer: null,
  recipesGrid: null,
  emptyState: null,
  resultsCount: null,
  categoryTabs: null,
  calorieSlider: null,
  calorieValue: null,
  timeSelect: null,
  sortSelect: null,
  shoppingDrawer: null,
  shoppingListContainer: null,
  shoppingBadge: null,
  recipeModal: null,
  modalBody: null,
  addRecipeModal: null,
  toast: null
};

// 初始化應用程式
document.addEventListener("DOMContentLoaded", () => {
  initDOMReferences();
  renderPopularPills();
  bindEvents();
  renderRecipes();
  updateShoppingBadge();
  lucide.createIcons();
});

// 初始化 DOM 參照
function initDOMReferences() {
  DOM.searchInput = document.getElementById("ingredient-search");
  DOM.searchClearBtn = document.getElementById("search-clear-btn");
  DOM.excludeInput = document.getElementById("exclude-search");
  DOM.excludeClearBtn = document.getElementById("exclude-clear-btn");
  DOM.excludeStatusTag = document.getElementById("exclude-status-tag");
  DOM.popularPillsContainer = document.getElementById("popular-pills");
  DOM.recipesGrid = document.getElementById("recipes-grid");
  DOM.emptyState = document.getElementById("empty-state");
  DOM.resultsCount = document.getElementById("results-count");
  DOM.categoryTabs = document.querySelectorAll(".category-tab");
  DOM.calorieSlider = document.getElementById("calorie-slider");
  DOM.calorieValue = document.getElementById("calorie-value");
  DOM.timeSelect = document.getElementById("time-select");
  DOM.sortSelect = document.getElementById("sort-select");
  DOM.shoppingDrawer = document.getElementById("shopping-drawer");
  DOM.shoppingListContainer = document.getElementById("shopping-list-items");
  DOM.shoppingBadge = document.getElementById("shopping-badge");
  DOM.recipeModal = document.getElementById("recipe-modal");
  DOM.modalBody = document.getElementById("modal-body");
  DOM.addRecipeModal = document.getElementById("add-recipe-modal");
  DOM.toast = document.getElementById("toast");
}

// 綁定事件監聽
function bindEvents() {
  // 想要食材搜尋輸入
  DOM.searchInput.addEventListener("input", (e) => {
    AppState.searchQuery = e.target.value.trim();
    DOM.searchClearBtn.classList.toggle("hidden", !AppState.searchQuery);
    renderRecipes();
  });

  // 清除想要食材搜尋按鈕
  DOM.searchClearBtn.addEventListener("click", () => {
    DOM.searchInput.value = "";
    AppState.searchQuery = "";
    DOM.searchClearBtn.classList.add("hidden");
    AppState.selectedPills.clear();
    updatePillVisuals();
    renderRecipes();
  });

  // 避開食材搜尋輸入
  if (DOM.excludeInput) {
    DOM.excludeInput.addEventListener("input", (e) => {
      AppState.excludeQuery = e.target.value.trim();
      const hasExclude = AppState.excludeQuery.length > 0;
      DOM.excludeClearBtn.classList.toggle("hidden", !hasExclude);
      DOM.excludeStatusTag.classList.toggle("hidden", !hasExclude);
      renderRecipes();
    });

    // 清除避開食材按鈕
    DOM.excludeClearBtn.addEventListener("click", () => {
      DOM.excludeInput.value = "";
      AppState.excludeQuery = "";
      DOM.excludeClearBtn.classList.add("hidden");
      DOM.excludeStatusTag.classList.add("hidden");
      AppState.selectedExcludePills.clear();
      updateExcludePillVisuals();
      renderRecipes();
    });

    // 快捷避開標籤按鈕
    document.querySelectorAll(".exclude-quick-pill").forEach(btn => {
      btn.addEventListener("click", () => {
        const item = btn.dataset.exclude;
        if (AppState.selectedExcludePills.has(item)) {
          AppState.selectedExcludePills.delete(item);
        } else {
          AppState.selectedExcludePills.add(item);
        }

        DOM.excludeInput.value = Array.from(AppState.selectedExcludePills).join(" ");
        AppState.excludeQuery = DOM.excludeInput.value;
        const hasExclude = AppState.excludeQuery.length > 0;
        DOM.excludeClearBtn.classList.toggle("hidden", !hasExclude);
        DOM.excludeStatusTag.classList.toggle("hidden", !hasExclude);

        updateExcludePillVisuals();
        renderRecipes();
      });
    });
  }

  // 飲食目標快捷按鈕點擊（增肌、減脂、低糖、低脂、少鹽、減鈉）
  document.querySelectorAll(".diet-goal-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      const goal = btn.dataset.goal;
      DOM.searchInput.value = goal;
      AppState.searchQuery = goal;
      DOM.searchClearBtn.classList.remove("hidden");
      AppState.selectedPills.clear();
      updatePillVisuals();
      renderRecipes();
      showToast(`已為您篩選「${btn.textContent.trim()}」相關食譜`, "info");
    });
  });

  // 分類標籤切換
  DOM.categoryTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      DOM.categoryTabs.forEach(t => t.classList.remove("active-tab", "bg-emerald-600", "text-white"));
      DOM.categoryTabs.forEach(t => t.classList.add("bg-stone-100", "text-stone-700", "hover:bg-stone-200"));
      
      tab.classList.add("active-tab", "bg-emerald-600", "text-white");
      tab.classList.remove("bg-stone-100", "text-stone-700", "hover:bg-stone-200");
      
      AppState.activeTab = tab.dataset.category;
      renderRecipes();
    });
  });

  // 熱量滑桿
  DOM.calorieSlider.addEventListener("input", (e) => {
    AppState.maxCalories = parseInt(e.target.value, 10);
    DOM.calorieValue.textContent = AppState.maxCalories >= 500 ? "不限" : `≤ ${AppState.maxCalories} kcal`;
    renderRecipes();
  });

  // 時間篩選
  DOM.timeSelect.addEventListener("change", (e) => {
    AppState.maxTime = parseInt(e.target.value, 10);
    renderRecipes();
  });

  // 排序選單
  DOM.sortSelect.addEventListener("change", (e) => {
    AppState.sortBy = e.target.value;
    renderRecipes();
  });

  // 採買清單抽屜開啟/關閉
  document.getElementById("open-shopping-btn").addEventListener("click", openShoppingDrawer);
  document.getElementById("close-shopping-btn").addEventListener("click", closeShoppingDrawer);
  document.getElementById("shopping-backdrop").addEventListener("click", closeShoppingDrawer);

  // 清空採買清單
  document.getElementById("clear-shopping-btn").addEventListener("click", () => {
    if (confirm("確定要清空整份採買清單嗎？")) {
      StorageManager.clearShoppingList(false);
      renderShoppingList();
      updateShoppingBadge();
      showToast("已清空採買清單", "info");
    }
  });

  // 複製採買清單
  document.getElementById("copy-shopping-btn").addEventListener("click", copyShoppingListToClipboard);

  // 新增食譜彈窗
  document.getElementById("open-add-recipe-btn").addEventListener("click", openAddRecipeModal);
  document.getElementById("close-add-modal-btn").addEventListener("click", closeAddRecipeModal);
  document.getElementById("add-recipe-backdrop").addEventListener("click", closeAddRecipeModal);
  document.getElementById("add-recipe-form").addEventListener("submit", handleAddRecipeSubmit);

  // 食譜詳情彈窗關閉
  document.getElementById("close-recipe-modal-btn").addEventListener("click", closeRecipeModal);
  document.getElementById("recipe-modal-backdrop").addEventListener("click", closeRecipeModal);

  // ESC 鍵關閉彈窗
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeRecipeModal();
      closeShoppingDrawer();
      closeAddRecipeModal();
    }
  });
}

// 渲染熱門食材標籤
function renderPopularPills() {
  DOM.popularPillsContainer.innerHTML = POPULAR_INGREDIENTS.map(item => `
    <button 
      class="ingredient-pill inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium border border-stone-200 bg-white text-stone-700 hover:border-emerald-500 hover:text-emerald-700 transition shadow-sm cursor-pointer"
      data-ingredient="${item.name}"
    >
      <span>${item.icon}</span>
      <span>${item.name}</span>
    </button>
  `).join("");

  DOM.popularPillsContainer.querySelectorAll(".ingredient-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      const ingredient = btn.dataset.ingredient;
      if (AppState.selectedPills.has(ingredient)) {
        AppState.selectedPills.delete(ingredient);
      } else {
        AppState.selectedPills.add(ingredient);
      }
      
      // 更新搜尋欄文字
      DOM.searchInput.value = Array.from(AppState.selectedPills).join(" ");
      AppState.searchQuery = DOM.searchInput.value;
      DOM.searchClearBtn.classList.toggle("hidden", !AppState.searchQuery);
      
      updatePillVisuals();
      renderRecipes();
    });
  });
}

// 更新想要食材標籤外觀選取狀態
function updatePillVisuals() {
  DOM.popularPillsContainer.querySelectorAll(".ingredient-pill").forEach(btn => {
    const isSelected = AppState.selectedPills.has(btn.dataset.ingredient);
    btn.classList.toggle("bg-emerald-600", isSelected);
    btn.classList.toggle("text-white", isSelected);
    btn.classList.toggle("border-emerald-600", isSelected);
    btn.classList.toggle("bg-white", !isSelected);
    btn.classList.toggle("text-stone-700", !isSelected);
    btn.classList.toggle("border-stone-200", !isSelected);
  });
}

// 更新避開食材快捷標籤外觀選取狀態
function updateExcludePillVisuals() {
  document.querySelectorAll(".exclude-quick-pill").forEach(btn => {
    const isSelected = AppState.selectedExcludePills.has(btn.dataset.exclude);
    btn.classList.toggle("bg-rose-600", isSelected);
    btn.classList.toggle("text-white", isSelected);
    btn.classList.toggle("border-rose-500", isSelected);
    btn.classList.toggle("bg-black/30", !isSelected);
    btn.classList.toggle("text-stone-200", !isSelected);
    btn.classList.toggle("border-white/10", !isSelected);
  });
}

// 搜尋關鍵字拆解與同義詞擴展
function extractSearchKeywords(query) {
  if (!query) return { rawKeywords: [], expandedList: [] };
  // 支援空白、逗號、加號、頓號分割
  const rawKeywords = query
    .toLowerCase()
    .split(/[\s,，、+]+/)
    .map(k => k.trim())
    .filter(k => k.length > 0);

  // 結合同義詞拓展搜尋
  const expandedList = [];
  rawKeywords.forEach(kw => {
    expandedList.push(kw);
    // 檢查同義詞庫
    for (const [key, synonyms] of Object.entries(INGREDIENT_SYNONYMS)) {
      if (kw === key || kw.includes(key) || key.includes(kw)) {
        synonyms.forEach(syn => {
          if (!expandedList.includes(syn.toLowerCase())) {
            expandedList.push(syn.toLowerCase());
          }
        });
      }
    }
  });

  return { rawKeywords, expandedList };
}

// 計算食材匹配度
function calculateRecipeMatch(recipe, searchData) {
  const { rawKeywords, expandedList } = searchData;
  if (!rawKeywords || rawKeywords.length === 0) {
    return {
      matchCount: 0,
      totalCount: recipe.ingredients.length,
      matchRatio: 0,
      matchedIngredients: [],
      missingIngredients: recipe.ingredients.map(i => i.name)
    };
  }

  const recipeIngredients = recipe.ingredients.map(i => i.name);
  const matchedIngredients = [];
  const missingIngredients = [];

  recipe.ingredients.forEach(ing => {
    const ingNameLower = ing.name.toLowerCase();
    // 判斷此食譜食材是否命中任一關鍵字
    const isMatched = expandedList.some(kw => ingNameLower.includes(kw) || kw.includes(ingNameLower));
    if (isMatched) {
      matchedIngredients.push(ing.name);
    } else {
      missingIngredients.push(ing.name);
    }
  });

  // 計算使用者輸入的原始食材關鍵字中，有多少個被此食譜滿足
  let userKeywordHitCount = 0;
  rawKeywords.forEach(userKw => {
    const isHit = recipe.ingredients.some(ing => {
      const name = ing.name.toLowerCase();
      if (name.includes(userKw) || userKw.includes(name)) return true;
      // 檢查此關鍵字同義詞是否命中
      const syns = INGREDIENT_SYNONYMS[userKw] || [];
      return syns.some(s => name.includes(s.toLowerCase()));
    }) || recipe.title.toLowerCase().includes(userKw) || recipe.tags.some(t => t.toLowerCase().includes(userKw));

    if (isHit) {
      userKeywordHitCount++;
    }
  });

  const totalUserKeywords = rawKeywords.length;
  const matchRatio = totalUserKeywords > 0 ? (userKeywordHitCount / totalUserKeywords) : 0;

  return {
    userKeywordHitCount,
    totalUserKeywords,
    matchCount: matchedIngredients.length,
    totalCount: recipe.ingredients.length,
    matchRatio,
    matchedIngredients,
    missingIngredients
  };
}

// 取得篩選與排序後的食譜清單
function getFilteredAndSortedRecipes() {
  const allRecipes = StorageManager.getAllRecipes();
  const searchData = extractSearchKeywords(AppState.searchQuery);
  const excludeData = extractSearchKeywords(AppState.excludeQuery);
  const favorites = StorageManager.getFavorites();

  // 1. 篩選
  const filtered = allRecipes.filter(recipe => {
    // 收藏分類
    if (AppState.activeTab === "favorites") {
      if (!favorites.includes(recipe.id)) return false;
    }
    // 自訂食譜分類
    else if (AppState.activeTab === "custom") {
      if (!recipe.id.startsWith("custom-")) return false;
    }
    // 預設分類篩選
    else if (AppState.activeTab !== "all") {
      if (recipe.category !== AppState.activeTab) return false;
    }

    // 熱量篩選
    if (AppState.maxCalories < 500 && recipe.calories > AppState.maxCalories) {
      return false;
    }

    // 時間篩選
    if (AppState.maxTime < 60 && recipe.prepTime > AppState.maxTime) {
      return false;
    }

    // 🚫 避開食材過濾：若包含任何排除關鍵字或其同義詞，一律過濾剔除！
    if (excludeData.rawKeywords.length > 0) {
      const isExcluded = recipe.ingredients.some(ing => {
        const name = ing.name.toLowerCase();
        return excludeData.expandedList.some(exKw => name.includes(exKw) || exKw.includes(name));
      }) || excludeData.expandedList.some(exKw => recipe.title.toLowerCase().includes(exKw)) || recipe.tags.some(t => excludeData.expandedList.some(exKw => t.toLowerCase().includes(exKw)));

      if (isExcluded) {
        return false;
      }
    }

    // 關鍵字搜尋過濾：若有輸入想要關鍵字，必須至少命中 1 個食材/標題/標籤
    if (searchData.rawKeywords.length > 0) {
      const match = calculateRecipeMatch(recipe, searchData);
      const titleHit = searchData.expandedList.some(k => recipe.title.toLowerCase().includes(k));
      const tagHit = recipe.tags.some(t => searchData.expandedList.some(k => t.toLowerCase().includes(k)));
      if (match.userKeywordHitCount === 0 && !titleHit && !tagHit) {
        return false;
      }
    }

    return true;
  });

  // 2. 附加匹配資訊
  const withMatchInfo = filtered.map(recipe => {
    const matchInfo = calculateRecipeMatch(recipe, searchData);
    return {
      ...recipe,
      matchInfo,
      isFav: favorites.includes(recipe.id)
    };
  });

  // 3. 排序
  withMatchInfo.sort((a, b) => {
    if (AppState.sortBy === "match") {
      // 依關鍵字命中比例排序，再依熱量低到高
      if (b.matchInfo.matchRatio !== a.matchInfo.matchRatio) {
        return b.matchInfo.matchRatio - a.matchInfo.matchRatio;
      }
      return a.calories - b.calories;
    } else if (AppState.sortBy === "calories-asc") {
      return a.calories - b.calories;
    } else if (AppState.sortBy === "protein-desc") {
      return b.protein - a.protein;
    } else if (AppState.sortBy === "time-asc") {
      return a.prepTime - b.prepTime;
    }
    return 0;
  });

  return withMatchInfo;
}

// 渲染食譜卡片清單
function renderRecipes() {
  const recipes = getFilteredAndSortedRecipes();
  const hasExclude = AppState.excludeQuery.length > 0;
  
  DOM.resultsCount.innerHTML = `
    共 <span class="text-emerald-700">${recipes.length}</span> 道料理
    ${hasExclude ? `<span class="text-[11px] text-rose-500 font-normal ml-1">(已避開「${AppState.excludeQuery}」)</span>` : ""}
  `;

  if (recipes.length === 0) {
    DOM.recipesGrid.innerHTML = "";
    DOM.emptyState.classList.remove("hidden");
    return;
  }

  DOM.emptyState.classList.add("hidden");
  DOM.recipesGrid.innerHTML = recipes.map(recipe => createRecipeCardHTML(recipe)).join("");

  // 綁定卡片點擊與收藏按鈕
  DOM.recipesGrid.querySelectorAll(".recipe-card").forEach(card => {
    const recipeId = card.dataset.id;
    
    // 點擊卡片開啟詳情
    card.addEventListener("click", (e) => {
      // 若點擊的是收藏按鈕則不開彈窗
      if (e.target.closest(".fav-btn") || e.target.closest(".quick-add-btn")) return;
      openRecipeModal(recipeId);
    });

    // 收藏按鈕
    const favBtn = card.querySelector(".fav-btn");
    if (favBtn) {
      favBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isFav = StorageManager.toggleFavorite(recipeId);
        favBtn.classList.toggle("text-rose-500", isFav);
        favBtn.classList.toggle("text-stone-400", !isFav);
        favBtn.querySelector("i").setAttribute("data-lucide", isFav ? "heart-fill" : "heart");
        showToast(isFav ? "已加入我的收藏" : "已取消收藏", "success");
        if (AppState.activeTab === "favorites") {
          renderRecipes();
        }
        lucide.createIcons();
      });
    }
  });

  lucide.createIcons();
}

// 產生單一食譜卡片 HTML
function createRecipeCardHTML(recipe) {
  const isCustom = recipe.id.startsWith("custom-");
  const hasSearch = AppState.searchQuery.length > 0;
  const matchInfo = recipe.matchInfo;
  
  // 吻合標籤 HTML
  let matchBadgeHTML = "";
  if (hasSearch && matchInfo.totalUserKeywords > 0) {
    if (matchInfo.matchRatio === 1) {
      matchBadgeHTML = `
        <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
          <i data-lucide="sparkles" class="w-3 h-3 text-emerald-600"></i>
          100% 完美吻合食材
        </span>
      `;
    } else if (matchInfo.userKeywordHitCount > 0) {
      matchBadgeHTML = `
        <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-300">
          <i data-lucide="check" class="w-3 h-3 text-amber-600"></i>
          手邊有 ${matchInfo.userKeywordHitCount}/${matchInfo.totalUserKeywords} 種食材
        </span>
      `;
    }
  }

  return `
    <article 
      class="recipe-card group bg-white rounded-2xl overflow-hidden border border-stone-200/80 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
      data-id="${recipe.id}"
    >
      <!-- 圖片與標籤區 -->
      <div class="relative h-48 w-full overflow-hidden bg-stone-100">
        <img 
          src="${recipe.image}" 
          alt="${recipe.title}" 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80'"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>
        
        <!-- 分類徽章 -->
        <div class="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span class="px-2.5 py-1 rounded-lg text-xs font-semibold bg-stone-900/80 text-white backdrop-blur-md">
            ${recipe.categoryName}
          </span>
          ${isCustom ? `
            <span class="px-2 py-1 rounded-lg text-xs font-semibold bg-amber-500/90 text-white backdrop-blur-md">
              自訂私房
            </span>
          ` : ""}
        </div>

        <!-- 收藏按鈕 -->
        <button 
          class="fav-btn absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-md shadow-sm hover:scale-110 active:scale-95 transition cursor-pointer ${recipe.isFav ? 'text-rose-500' : 'text-stone-400 hover:text-rose-500'}"
          title="加入收藏"
        >
          <i data-lucide="${recipe.isFav ? 'heart' : 'heart'}" class="w-4 h-4 ${recipe.isFav ? 'fill-rose-500' : ''}"></i>
        </button>

        <!-- 底部熱量與時間快捷條 -->
        <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-medium">
          <div class="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
            <i data-lucide="flame" class="w-3.5 h-3.5 text-orange-400"></i>
            <span class="font-bold text-white">${recipe.calories}</span> kcal
          </div>
          <div class="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full">
            <i data-lucide="clock" class="w-3.5 h-3.5 text-emerald-300"></i>
            <span>${recipe.prepTime} 分鐘</span>
          </div>
        </div>
      </div>

      <!-- 內容資訊區 -->
      <div class="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <!-- 匹配度徽章 (若有搜尋) -->
          ${matchBadgeHTML ? `<div class="mb-2">${matchBadgeHTML}</div>` : ""}

          <!-- 標題 -->
          <h3 class="font-bold text-stone-800 text-lg leading-snug group-hover:text-emerald-700 transition line-clamp-1">
            ${recipe.title}
          </h3>

          <!-- 巨量營養素數值 -->
          <div class="grid grid-cols-3 gap-2 my-3 p-2 bg-stone-50 rounded-xl text-center border border-stone-100">
            <div>
              <div class="text-[11px] text-stone-500">蛋白質</div>
              <div class="text-xs sm:text-sm font-bold text-emerald-700">${recipe.protein}g</div>
            </div>
            <div>
              <div class="text-[11px] text-stone-500">脂肪</div>
              <div class="text-xs sm:text-sm font-bold text-amber-700">${recipe.fat}g</div>
            </div>
            <div>
              <div class="text-[11px] text-stone-500">碳水</div>
              <div class="text-xs sm:text-sm font-bold text-sky-700">${recipe.carbs}g</div>
            </div>
          </div>

          <!-- 食材摘要標籤 -->
          <div class="flex flex-wrap gap-1.5 line-clamp-2">
            ${recipe.ingredients.slice(0, 4).map(ing => {
              const isMatched = matchInfo.matchedIngredients && matchInfo.matchedIngredients.includes(ing.name);
              return `
                <span class="text-xs px-2 py-0.5 rounded-md ${isMatched ? 'bg-emerald-100 text-emerald-800 font-semibold border border-emerald-200' : 'bg-stone-100 text-stone-600'}">
                  ${ing.name}
                </span>
              `;
            }).join("")}
            ${recipe.ingredients.length > 4 ? `
              <span class="text-xs px-1.5 py-0.5 rounded-md bg-stone-100 text-stone-400">
                +${recipe.ingredients.length - 4}
              </span>
            ` : ""}
          </div>
        </div>

        <!-- 來源與點擊查看 -->
        <div class="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
          <span class="inline-flex items-center gap-1 text-stone-400 hover:text-stone-600">
            <i data-lucide="globe" class="w-3 h-3"></i>
            ${recipe.source}
          </span>
          <span class="text-emerald-600 font-medium group-hover:translate-x-1 transition inline-flex items-center gap-0.5">
            查看作法
            <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
          </span>
        </div>
      </div>
    </article>
  `;
}

// 開啟食譜詳情彈窗
function openRecipeModal(recipeId) {
  const allRecipes = StorageManager.getAllRecipes();
  const recipe = allRecipes.find(r => r.id === recipeId);
  if (!recipe) return;

  AppState.currentRecipeId = recipeId;
  AppState.currentServings = recipe.servings || 1;
  AppState.completedSteps.clear();

  renderModalContent(recipe);
  DOM.recipeModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  lucide.createIcons();
}

// 關閉食譜詳情彈窗
function closeRecipeModal() {
  DOM.recipeModal.classList.add("hidden");
  document.body.style.overflow = "";
}

// 渲染彈窗詳細內容
function renderModalContent(recipe) {
  const isCustom = recipe.id.startsWith("custom-");
  const isFav = StorageManager.isFavorite(recipe.id);
  const searchData = extractSearchKeywords(AppState.searchQuery);
  const matchInfo = calculateRecipeMatch(recipe, searchData);

  // 巨量營養比例計算
  const totalCalFromMacros = (recipe.protein * 4) + (recipe.fat * 9) + (recipe.carbs * 4) || 1;
  const pPct = Math.round(((recipe.protein * 4) / totalCalFromMacros) * 100);
  const fPct = Math.round(((recipe.fat * 9) / totalCalFromMacros) * 100);
  const cPct = 100 - pPct - fPct;

  DOM.modalBody.innerHTML = `
    <!-- 頂部大圖與基本資訊 -->
    <div class="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-900">
      <img 
        src="${recipe.image}" 
        alt="${recipe.title}" 
        class="w-full h-full object-cover opacity-90"
        onerror="this.src='https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80'"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"></div>
      
      <!-- 頂部操作列 -->
      <div class="absolute top-4 right-4 flex items-center gap-2">
        <button 
          id="modal-fav-btn" 
          class="p-2.5 rounded-full bg-black/50 text-white hover:bg-black/70 backdrop-blur-md transition cursor-pointer ${isFav ? 'text-rose-500' : 'text-white'}"
          title="收藏食譜"
        >
          <i data-lucide="heart" class="w-5 h-5 ${isFav ? 'fill-rose-500 text-rose-500' : ''}"></i>
        </button>
        ${isCustom ? `
          <button 
            id="modal-delete-recipe-btn" 
            class="p-2.5 rounded-full bg-rose-600/80 text-white hover:bg-rose-700 backdrop-blur-md transition cursor-pointer"
            title="刪除此私房食譜"
          >
            <i data-lucide="trash-2" class="w-5 h-5"></i>
          </button>
        ` : ""}
      </div>

      <!-- 標題與標籤 -->
      <div class="absolute bottom-4 left-4 right-4 text-white">
        <div class="flex items-center gap-2 mb-2">
          <span class="px-2.5 py-0.5 rounded-md text-xs font-bold bg-emerald-500 text-white">
            ${recipe.categoryName}
          </span>
          <span class="text-xs text-stone-300 flex items-center gap-1">
            <i data-lucide="globe" class="w-3 h-3"></i>
            來源：${recipe.source}
          </span>
        </div>
        <h2 class="text-xl sm:text-2xl font-black leading-tight text-white">
          ${recipe.title}
        </h2>
      </div>
    </div>

    <!-- 內容區域 -->
    <div class="p-5 sm:p-6 space-y-6">
      
      <!-- 營養素速覽面板 -->
      <div class="bg-gradient-to-br from-stone-50 to-emerald-50/40 p-4 rounded-2xl border border-stone-200">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold text-stone-500 uppercase tracking-wider">每份營養成分估算</span>
          <span class="text-lg font-black text-emerald-800 flex items-center gap-1">
            <i data-lucide="flame" class="w-5 h-5 text-orange-500"></i>
            ${recipe.calories} <span class="text-xs font-medium text-stone-600">kcal</span>
          </span>
        </div>

        <div class="grid grid-cols-3 gap-3 text-center">
          <div class="bg-white p-3 rounded-xl shadow-xs border border-emerald-100">
            <div class="text-xs text-stone-500 font-medium">蛋白質 (${pPct}%)</div>
            <div class="text-base sm:text-lg font-black text-emerald-600">${recipe.protein}g</div>
          </div>
          <div class="bg-white p-3 rounded-xl shadow-xs border border-amber-100">
            <div class="text-xs text-stone-500 font-medium">脂肪 (${fPct}%)</div>
            <div class="text-base sm:text-lg font-black text-amber-600">${recipe.fat}g</div>
          </div>
          <div class="bg-white p-3 rounded-xl shadow-xs border border-sky-100">
            <div class="text-xs text-stone-500 font-medium">碳水 (${cPct}%)</div>
            <div class="text-base sm:text-lg font-black text-sky-600">${recipe.carbs}g</div>
          </div>
        </div>

        <!-- 巨量營養素長條圖 -->
        <div class="mt-3 w-full h-2 rounded-full overflow-hidden flex bg-stone-200">
          <div style="width: ${pPct}%" class="bg-emerald-500" title="蛋白質 ${pPct}%"></div>
          <div style="width: ${fPct}%" class="bg-amber-500" title="脂肪 ${fPct}%"></div>
          <div style="width: ${cPct}%" class="bg-sky-500" title="碳水 ${cPct}%"></div>
        </div>
      </div>

      <!-- 減脂烹調小撇步 -->
      ${recipe.tips ? `
        <div class="flex items-start gap-3 p-3.5 bg-amber-50/80 rounded-xl border border-amber-200 text-amber-900 text-xs sm:text-sm">
          <i data-lucide="lightbulb" class="w-5 h-5 text-amber-600 shrink-0 mt-0.5"></i>
          <div>
            <span class="font-bold block mb-0.5">減脂控卡技巧</span>
            <span>${recipe.tips}</span>
          </div>
        </div>
      ` : ""}

      <!-- 準備食材清單 -->
      <div>
        <div class="flex items-center justify-between mb-3">
          <h3 class="text-base font-bold text-stone-800 flex items-center gap-2">
            <i data-lucide="utensils" class="w-4 h-4 text-emerald-600"></i>
            準備食材
          </h3>
          <button 
            id="add-all-missing-btn" 
            class="text-xs text-emerald-700 hover:text-emerald-800 font-bold bg-emerald-100 hover:bg-emerald-200 px-3 py-1.5 rounded-lg transition inline-flex items-center gap-1 cursor-pointer"
          >
            <i data-lucide="plus-circle" class="w-3.5 h-3.5"></i>
            一鍵將缺少的食材加入採買清單
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${recipe.ingredients.map(ing => {
            const isMatched = matchInfo.matchedIngredients.includes(ing.name);
            return `
              <div class="flex items-center justify-between p-2.5 rounded-xl border ${isMatched ? 'bg-emerald-50/70 border-emerald-200' : 'bg-stone-50 border-stone-200'} text-sm">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full ${isMatched ? 'bg-emerald-500' : 'bg-stone-300'}"></span>
                  <span class="font-medium ${isMatched ? 'text-emerald-900 font-bold' : 'text-stone-700'}">${ing.name}</span>
                  ${isMatched ? `
                    <span class="text-[10px] bg-emerald-200 text-emerald-800 px-1.5 py-0.2 rounded font-semibold">手邊已有</span>
                  ` : ""}
                </div>
                <span class="text-stone-500 font-mono text-xs">${ing.amount}</span>
              </div>
            `;
          }).join("")}
        </div>
      </div>

      <!-- 烹調步驟 -->
      <div>
        <h3 class="text-base font-bold text-stone-800 mb-3 flex items-center gap-2">
          <i data-lucide="list-ordered" class="w-4 h-4 text-emerald-600"></i>
          料理步驟（點擊可勾選進度）
        </h3>
        <div class="space-y-2.5">
          ${recipe.steps.map((step, index) => `
            <div 
              class="step-item flex items-start gap-3 p-3 rounded-xl border border-stone-200 hover:bg-stone-50 transition cursor-pointer select-none"
              data-step-idx="${index}"
            >
              <div class="step-checkbox w-6 h-6 rounded-full border-2 border-stone-300 flex items-center justify-center text-xs font-bold text-stone-400 shrink-0 mt-0.5">
                ${index + 1}
              </div>
              <p class="step-text text-sm text-stone-700 leading-relaxed">${step}</p>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- 外部連結與操作按鈕 -->
      <div class="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
        <a 
          href="${recipe.sourceUrl}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-emerald-700 underline"
        >
          <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
          前往原食譜網站 (${recipe.source})
        </a>
        <button 
          onclick="closeRecipeModal()" 
          class="px-5 py-2 rounded-xl bg-stone-800 text-white text-sm font-semibold hover:bg-stone-900 transition cursor-pointer"
        >
          完成關閉
        </button>
      </div>

    </div>
  `;

  // 綁定彈窗內互動
  // 1. 收藏
  const modalFavBtn = document.getElementById("modal-fav-btn");
  if (modalFavBtn) {
    modalFavBtn.addEventListener("click", () => {
      const isNowFav = StorageManager.toggleFavorite(recipe.id);
      modalFavBtn.querySelector("i").setAttribute("data-lucide", isNowFav ? "heart-fill" : "heart");
      modalFavBtn.classList.toggle("text-rose-500", isNowFav);
      modalFavBtn.classList.toggle("text-white", !isNowFav);
      showToast(isNowFav ? "已加入我的收藏" : "已取消收藏", "success");
      renderRecipes();
      lucide.createIcons();
    });
  }

  // 2. 刪除自訂食譜
  const deleteBtn = document.getElementById("modal-delete-recipe-btn");
  if (deleteBtn) {
    deleteBtn.addEventListener("click", () => {
      if (confirm(`確定要刪除私房食譜「${recipe.title}」嗎？`)) {
        StorageManager.deleteCustomRecipe(recipe.id);
        closeRecipeModal();
        renderRecipes();
        showToast("已刪除私房食譜", "info");
      }
    });
  }

  // 3. 一鍵將缺少食材加入採買清單
  const addAllBtn = document.getElementById("add-all-missing-btn");
  if (addAllBtn) {
    addAllBtn.addEventListener("click", () => {
      const missingList = recipe.ingredients
        .filter(ing => !matchInfo.matchedIngredients.includes(ing.name))
        .map(ing => ({
          name: ing.name,
          amount: ing.amount,
          recipeTitle: recipe.title
        }));

      const itemsToAdd = missingList.length > 0 ? missingList : recipe.ingredients.map(ing => ({
        name: ing.name,
        amount: ing.amount,
        recipeTitle: recipe.title
      }));

      StorageManager.addShoppingItems(itemsToAdd);
      updateShoppingBadge();
      showToast(`已將 ${itemsToAdd.length} 項食材加入採買清單！`, "success");
    });
  }

  // 4. 步驟打勾互動
  const stepItems = DOM.modalBody.querySelectorAll(".step-item");
  stepItems.forEach(item => {
    item.addEventListener("click", () => {
      const idx = item.dataset.stepIdx;
      const checkbox = item.querySelector(".step-checkbox");
      const text = item.querySelector(".step-text");
      
      if (AppState.completedSteps.has(idx)) {
        AppState.completedSteps.delete(idx);
        checkbox.innerHTML = parseInt(idx, 10) + 1;
        checkbox.className = "step-checkbox w-6 h-6 rounded-full border-2 border-stone-300 flex items-center justify-center text-xs font-bold text-stone-400 shrink-0 mt-0.5";
        text.classList.remove("line-through", "text-stone-400");
        text.classList.add("text-stone-700");
      } else {
        AppState.completedSteps.add(idx);
        checkbox.innerHTML = `<i data-lucide="check" class="w-3.5 h-3.5 text-white"></i>`;
        checkbox.className = "step-checkbox w-6 h-6 rounded-full bg-emerald-600 border-2 border-emerald-600 flex items-center justify-center text-xs font-bold text-white shrink-0 mt-0.5";
        text.classList.add("line-through", "text-stone-400");
        text.classList.remove("text-stone-700");
        lucide.createIcons();
      }
    });
  });
}

// 採買清單抽屜開啟
function openShoppingDrawer() {
  renderShoppingList();
  DOM.shoppingDrawer.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  lucide.createIcons();
}

// 採買清單抽屜關閉
function closeShoppingDrawer() {
  DOM.shoppingDrawer.classList.add("hidden");
  document.body.style.overflow = "";
}

// 渲染採買清單項目
function renderShoppingList() {
  const list = StorageManager.getShoppingList();
  if (list.length === 0) {
    DOM.shoppingListContainer.innerHTML = `
      <div class="text-center py-12 text-stone-400">
        <i data-lucide="shopping-cart" class="w-12 h-12 mx-auto mb-3 opacity-30"></i>
        <p class="text-sm">採買清單目前是空的</p>
        <p class="text-xs text-stone-400 mt-1">從食譜詳情中點選「加入採買清單」即可自動帶入！</p>
      </div>
    `;
    return;
  }

  DOM.shoppingListContainer.innerHTML = list.map(item => `
    <div class="flex items-center justify-between p-3 rounded-xl border ${item.checked ? 'bg-stone-50 border-stone-200' : 'bg-white border-stone-200 shadow-xs'} transition">
      <label class="flex items-center gap-3 cursor-pointer select-none flex-1">
        <input 
          type="checkbox" 
          class="shopping-item-check w-4 h-4 text-emerald-600 rounded border-stone-300 focus:ring-emerald-500 cursor-pointer"
          data-id="${item.id}"
          ${item.checked ? 'checked' : ''}
        />
        <div>
          <span class="text-sm font-medium ${item.checked ? 'line-through text-stone-400' : 'text-stone-800'}">
            ${item.name}
          </span>
          ${item.amount ? `<span class="text-xs text-stone-400 ml-1">(${item.amount})</span>` : ""}
          ${item.recipeTitle ? `<div class="text-[11px] text-emerald-600">來自：${item.recipeTitle}</div>` : ""}
        </div>
      </label>
      <button 
        class="delete-shopping-item-btn text-stone-400 hover:text-rose-500 p-1.5 rounded-lg transition cursor-pointer"
        data-id="${item.id}"
        title="移除"
      >
        <i data-lucide="x" class="w-4 h-4"></i>
      </button>
    </div>
  `).join("");

  // 綁定打勾與刪除
  DOM.shoppingListContainer.querySelectorAll(".shopping-item-check").forEach(chk => {
    chk.addEventListener("change", () => {
      StorageManager.toggleShoppingItem(chk.dataset.id);
      renderShoppingList();
      updateShoppingBadge();
    });
  });

  DOM.shoppingListContainer.querySelectorAll(".delete-shopping-item-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      StorageManager.removeShoppingItem(btn.dataset.id);
      renderShoppingList();
      updateShoppingBadge();
    });
  });

  lucide.createIcons();
}

// 更新採買數量紅點
function updateShoppingBadge() {
  const list = StorageManager.getShoppingList();
  const uncheckCount = list.filter(i => !i.checked).length;
  if (uncheckCount > 0) {
    DOM.shoppingBadge.textContent = uncheckCount;
    DOM.shoppingBadge.classList.remove("hidden");
  } else {
    DOM.shoppingBadge.classList.add("hidden");
  }
}

// 複製採買清單至剪貼簿
function copyShoppingListToClipboard() {
  const list = StorageManager.getShoppingList();
  if (list.length === 0) {
    showToast("目前沒有可複製的項目", "info");
    return;
  }

  const text = "🛒 減脂食材採買清單：\n" + list
    .map(i => `${i.checked ? '☑' : '☐'} ${i.name} ${i.amount || ''} ${i.recipeTitle ? `(來自：${i.recipeTitle})` : ''}`)
    .join("\n");

  navigator.clipboard.writeText(text).then(() => {
    showToast("採買清單已複製至剪貼簿，可直接傳給家人或貼到 LINE！", "success");
  }).catch(() => {
    showToast("複製失敗，請手動複製", "error");
  });
}

// 開啟新增食譜彈窗
function openAddRecipeModal() {
  DOM.addRecipeModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  lucide.createIcons();
}

// 關閉新增食譜彈窗
function closeAddRecipeModal() {
  DOM.addRecipeModal.classList.add("hidden");
  document.body.style.overflow = "";
}

// 處理新增自訂食譜表單提交
function handleAddRecipeSubmit(e) {
  e.preventDefault();

  const title = document.getElementById("new-title").value.trim();
  const category = document.getElementById("new-category").value;
  const calories = parseInt(document.getElementById("new-calories").value, 10) || 250;
  const protein = parseInt(document.getElementById("new-protein").value, 10) || 20;
  const fat = parseInt(document.getElementById("new-fat").value, 10) || 5;
  const carbs = parseInt(document.getElementById("new-carbs").value, 10) || 15;
  const prepTime = parseInt(document.getElementById("new-time").value, 10) || 15;
  const imageUrl = document.getElementById("new-image").value.trim() || "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80";
  const rawIngredients = document.getElementById("new-ingredients").value.trim();
  const rawSteps = document.getElementById("new-steps").value.trim();
  const tips = document.getElementById("new-tips").value.trim();

  // 解析食材（支援換行或逗號）
  const ingredients = rawIngredients.split(/[\n,，]+/).map(line => {
    const parts = line.trim().split(/[\s:：]+/);
    return {
      name: parts[0] || "自訂食材",
      amount: parts.slice(1).join(" ") || "適量",
      isMain: true
    };
  }).filter(i => i.name);

  // 解析步驟
  const steps = rawSteps.split("\n").map(s => s.trim()).filter(s => s.length > 0);

  const categoryNames = {
    "high-protein": "高蛋白肌力",
    "low-carb": "極低碳減醣",
    "soups": "低卡暖胃湯",
    "quick-meal": "超快即食",
    "drinks-dessert": "減脂點心飲品"
  };

  const newRecipe = {
    id: "custom-" + Date.now(),
    title,
    category,
    categoryName: categoryNames[category] || "自訂私房",
    calories,
    protein,
    fat,
    carbs,
    prepTime,
    difficulty: "簡單",
    servings: 1,
    image: imageUrl,
    source: "我的私房食譜",
    sourceUrl: "#",
    tags: [categoryNames[category] || "減脂", ...ingredients.map(i => i.name)],
    ingredients,
    steps: steps.length > 0 ? steps : ["按照個人喜好將食材均勻加熱烹煮即可。"],
    tips: tips || "依照個人低鈉、低油飲食習慣調味。"
  };

  StorageManager.saveCustomRecipe(newRecipe);
  closeAddRecipeModal();
  document.getElementById("add-recipe-form").reset();
  renderRecipes();
  showToast("成功建立私房減脂食譜！", "success");
}

// 顯示 Toast 提示訊息
function showToast(message, type = "info") {
  if (!DOM.toast) return;
  
  const iconMap = {
    success: "check-circle",
    error: "alert-circle",
    info: "info"
  };

  DOM.toast.innerHTML = `
    <div class="flex items-center gap-2 bg-stone-900/90 backdrop-blur-md text-white text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-2xl border border-stone-700/50">
      <i data-lucide="${iconMap[type] || 'info'}" class="w-4 h-4 text-emerald-400"></i>
      <span>${message}</span>
    </div>
  `;
  
  DOM.toast.classList.remove("hidden", "opacity-0", "translate-y-4");
  DOM.toast.classList.add("opacity-100", "translate-y-0");
  lucide.createIcons();

  clearTimeout(DOM.toast._timeout);
  DOM.toast._timeout = setTimeout(() => {
    DOM.toast.classList.add("opacity-0", "translate-y-4");
    setTimeout(() => DOM.toast.classList.add("hidden"), 300);
  }, 2500);
}
