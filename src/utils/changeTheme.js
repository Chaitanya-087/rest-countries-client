const root = document.documentElement;
const themes = {
    light: {
      element: '0, 0%, 100%',
      background: '0, 0%, 98%',
      text: '200, 15%, 8%'
    },
    dark: {
      element: '209, 23%, 22%',
      background: '207, 26%, 17%',
      text: '0, 0%, 100%'
    }
  };

const change = (type) => {
    const theme = themes[type]
    root.style.setProperty('--clr-element', theme.element)
    root.style.setProperty('--clr-background', theme.background)
    root.style.setProperty('--clr-text', theme.text)
}

export default change