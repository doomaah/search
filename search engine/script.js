document.addEventListener('DOMContentLoaded', () => {
    const [searchButton, clearHistoryButton, searchInput, historyList] = [
      'search-button',
      'clear-history-button',
      'search-input',
      'history-list',
    ].map(id => document.getElementById(id));
  
    let searchHistory = JSON.parse(localStorage.searchHistory || '[]');
  
    const updateHistory = () => {
      historyList.innerHTML = '';
      searchHistory.forEach(searchItem => {
        const li = document.createElement('li');
        li.textContent = searchItem;
        historyList.appendChild(li);
      });
      localStorage.searchHistory = JSON.stringify(searchHistory);
    };
  
    searchButton.addEventListener('click', () => {
      const searchTerm = searchInput.value.trim();
      if (searchTerm) {
        searchHistory.push(searchTerm);
        updateHistory();
        searchInput.value = '';
      }
    });
  
    clearHistoryButton.addEventListener('click', () => {
      searchHistory = [];
      updateHistory();
    });
  
    updateHistory();
  });