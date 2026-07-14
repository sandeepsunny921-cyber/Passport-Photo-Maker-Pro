export type Language = 'en' | 'te';

export interface PhotoAdjustments {
  zoom: number;
  panX: number;
  panY: number;
  rotation: number; // in degrees (0, 90, 180, 270 or continuous)
  brightness: number; // percentage (0-200)
  contrast: number; // percentage (0-200)
  saturation: number; // percentage (0-200)
}

export interface SheetSettings {
  borderColor: string;
  borderWidth: number; // in pixels at 1200 DPI
  paperSize: '4x6';
  gridCols: number;
  gridRows: number;
}

export interface Translation {
  title: string;
  subtitle: string;
  uploadBoxTitle: string;
  uploadBoxSubtitle: string;
  adjustmentsTitle: string;
  previewTitle: string;
  downloadJpg: string;
  downloadPdf: string;
  zoom: string;
  panX: string;
  panY: string;
  rotation: string;
  brightness: string;
  contrast: string;
  saturation: string;
  borderColor: string;
  borderWidth: string;
  reset: string;
  helpText: string;
  uploadNew: string;
  qualityWarning: string;
  colors: {
    gray: string;
    black: string;
    white: string;
    none: string;
  };
}
