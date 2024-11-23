/// <reference path="../.astro/types.d.ts" />

import type { Light } from "three";

interface Window {
  getThemePreference(): "dark" | "light";
}
