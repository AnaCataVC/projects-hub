export {};

declare global {
  interface Window {
    launchProject: (displayId: string, fullId: string) => void;
    handleMenuClick: (idx: number, e?: Event) => void;
    handleMenuHover: (idx: number, e?: Event) => void;
    updateUIText: (lang: string) => void;
    updateToggleUI: (
      activeBtn: HTMLElement | null,
      inactiveBtn: HTMLElement | null,
      indicatorEl: HTMLElement | null,
      isRight: boolean,
    ) => void;
    setLanguageGlobal: (lang?: "es" | "en") => void;
    toggleLanguageGlobal: () => void;
    setThemeGlobal: (isDark: boolean, saveToStorage?: boolean) => void;
  }
}
