/// <reference types="vite/client" />

interface ViteTypeOptions {
  strictImportMetaEnv: unknown;
}

interface ImportMetaEnv {
  readonly VITE_EMAIL: string;
  readonly VITE_LINKEDIN_LINK: string;
  readonly VITE_GITHUB_LINK: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
