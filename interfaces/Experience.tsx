export interface Experience {
  title?: string | null;
  role?: string | null;
  blurb?: string | null;
  img?: typeof import("*.jpg") | typeof import("*.png") | null;
  detailed?: string | null;
  technologies?: string[] | null;
  link?: string | null;
}
