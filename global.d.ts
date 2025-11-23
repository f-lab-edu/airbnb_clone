declare module "*.png";
declare module "*.jpg";
declare module "*.svg";

declare namespace NodeJS {
  interface ProcessEnv {
    readonly API_BASE_URL: string;
    readonly API_ACCESS_TOKEN: string;
  }
}
