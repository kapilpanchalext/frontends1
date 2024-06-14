import { Palette, PaletteColor, TypeBackground } from '@mui/material/styles/createPalette';

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    neutral: PaletteColor;
  }

  interface PaletteColor {
      50?: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700?: string;
      800?: string;
      900?: string;
      [key: number]: string;
  }

  interface TypeBackground {
    default: string;
    paper: string;
    alt: string;
  }
};