function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'light' ? 'dark' : 'light';
    root.className = newTheme;
    
    document.querySelector('.theme-name').textContent = newTheme;
  }
  
document.querySelector('.theme-toggle').addEventListener('click', setTheme)

setTheme()