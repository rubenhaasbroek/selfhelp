// Global type declaration for UnicornStudio third-party embed
declare global {
  interface Window {
    UnicornStudio: {
      isInitialized: boolean;
      init: () => void;
    };
  }
}

export {};
