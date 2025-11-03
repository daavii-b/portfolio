/// <reference types="vite/client" />

interface ViteTypeOptions {
  strictImportMetaEnv: unknown;
}

interface ImportMetaEnv {
  readonly VITE_WA_LINK: string;
  readonly VITE_EMAIL: string;
  readonly VITE_LKDIN_LINK: string;
  readonly VITE_GH_LINK: string;
  readonly VITE_QR_LINK: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
