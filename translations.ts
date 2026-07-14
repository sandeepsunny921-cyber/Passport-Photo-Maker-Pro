import { Language, Translation } from './types';

export const translations: Record<Language, Translation> = {
  en: {
    title: "Professional Passport Photo Maker",
    subtitle: "Generate a perfectly spaced, high-resolution 4x6 print sheet with 8 passport photos.",
    uploadBoxTitle: "Click to upload or drag & drop",
    uploadBoxSubtitle: "Supported formats: JPG, PNG, WEBP (High resolution recommended)",
    adjustmentsTitle: "Photo Adjustments",
    previewTitle: "4x6 Sheet Preview (8 Photos)",
    downloadJpg: "Download JPG (8K Quality)",
    downloadPdf: "Download PDF (Print Ready)",
    zoom: "Zoom",
    panX: "Horizontal Shift",
    panY: "Vertical Shift",
    rotation: "Rotate",
    brightness: "Brightness",
    contrast: "Contrast",
    saturation: "Saturation",
    borderColor: "Border Color",
    borderWidth: "Border Thickness",
    reset: "Reset Adjustments",
    helpText: "Tips: For best results, use a well-lit photo with a plain background. You can adjust the framing, scale, and colors using the controls on the left.",
    uploadNew: "Upload Different Image",
    qualityWarning: "The sheet will be generated at 1200 DPI (7200 x 4800 px) for crisp, professional photo-lab quality printing.",
    colors: {
      gray: "Light Gray",
      black: "Black",
      white: "White",
      none: "No Border"
    }
  },
  te: {
    title: "ప్రొఫెషనల్ పాస్‌పోర్ట్ ఫోటో మేకర్",
    subtitle: "సరిగ్గా సరిపోయే ఖాళీలు మరియు బోర్డర్‌తో, 8 ఫోటోలు గల 4x6 ప్రింట్ షీట్ సులభంగా తయారుచేసుకోండి.",
    uploadBoxTitle: "ఫోటోను ఇక్కడ అప్‌లోడ్ చేయండి లేదా డ్రాగ్ చేయండి",
    uploadBoxSubtitle: "అనుమతించబడే ఫార్మాట్లు: JPG, PNG, WEBP (మంచి నాణ్యత గల ఫోటోలు శ్రేష్ఠం)",
    adjustmentsTitle: "ఫోటో అడ్జస్ట్‌మెంట్లు",
    previewTitle: "4x6 షీట్ ప్రివ్యూ (8 ఫోటోలు)",
    downloadJpg: "డౌన్‌లోడ్ JPG (8K నాణ్యత)",
    downloadPdf: "డౌన్‌లోడ్ PDF (ప్రింట్ సిద్ధం)",
    zoom: "జూమ్",
    panX: "ఎడమ / కుడి జరపండి",
    panY: "పైకి / కిందికి జరపండి",
    rotation: "తిప్పండి",
    brightness: "కాంతి (Brightness)",
    contrast: "కాంట్రాస్ట్ (Contrast)",
    saturation: "రంగు సాంద్రత (Saturation)",
    borderColor: "బోర్డర్ రంగు",
    borderWidth: "బోర్డర్ మందం",
    reset: "అడ్జస్ట్‌మెంట్లు రీసెట్ చేయి",
    helpText: "సహాయం: మంచి ఫలితాల కోసం, సమానమైన వెలుతురు మరియు ప్లెయిన్ బ్యాక్‌గ్రౌండ్ ఉన్న ఫోటోను ఉపయోగించండి. అవసరమైతే ఎడమ వైపు కంట్రోల్స్ ద్వారా ఫోటోను సర్దుబాటు చేయవచ్చు.",
    uploadNew: "మరొక ఫోటో అప్‌లోడ్ చేయండి",
    qualityWarning: "ప్రింటింగ్ షాపుల్లో స్పష్టమైన 8K ఫోటో-లాబ్ క్వాలిటీ కోసం ఈ షీట్ 1200 DPI (7200 x 4800 px) లో రూపొందించబడుతుంది.",
    colors: {
      gray: "లైట్ గ్రే",
      black: "నలుపు",
      white: "తెలుపు",
      none: "బోర్డర్ వద్దు"
    }
  }
};
