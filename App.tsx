import React, { useState, useEffect, useRef } from 'react';
import { Language, PhotoAdjustments, SheetSettings } from './types';
import { translations } from './translations';
import { LanguageSelector } from './components/LanguageSelector';
import { FileUploader } from './components/FileUploader';
import { ControlPanel } from './components/ControlPanel';
import { SheetPreview } from './components/SheetPreview';
import { 
  Camera, 
  Sparkles, 
  Printer, 
  HelpCircle, 
  ArrowRight,
  RefreshCw,
  Sliders,
  Maximize
} from 'lucide-react';

const defaultAdjustments: PhotoAdjustments = {
  zoom: 1.0,
  panX: 0,
  panY: 0,
  rotation: 0,
  brightness: 100,
  contrast: 100,
  saturation: 100,
};

const defaultSettings: SheetSettings = {
  borderColor: '#aaaaaa', // Light Gray (from user sample)
  borderWidth: 4,
  paperSize: '4x6',
  gridCols: 4,
  gridRows: 2,
};

export default function App() {
  const [language, setLanguage] = useState<Language>('te'); // Default to Telugu as per user prompt language
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imgElement, setImgElement] = useState<HTMLImageElement | null>(null);
  const [adjustments, setAdjustments] = useState<PhotoAdjustments>(defaultAdjustments);
  const [settings, setSettings] = useState<SheetSettings>(defaultSettings);
  
  // Ref for hidden file input to trigger from control panel
  const hiddenUploadRef = useRef<HTMLInputElement | null>(null);

  const translation = translations[language];

  // React to image upload
  useEffect(() => {
    if (!selectedImage) {
      setImgElement(null);
      return;
    }

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      setImgElement(img);
    };
    img.src = selectedImage;
  }, [selectedImage]);

  const handleFileSelect = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setSelectedImage(e.target.result as string);
        // Reset adjustments on new image upload
        setAdjustments(defaultAdjustments);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleTriggerNewUpload = () => {
    if (hiddenUploadRef.current) {
      hiddenUploadRef.current.click();
    }
  };

  const handleHiddenFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const handleResetAdjustments = () => {
    setAdjustments(defaultAdjustments);
    setSettings(defaultSettings);
  };

  const updateAdjustments = (newAdj: Partial<PhotoAdjustments>) => {
    setAdjustments(prev => ({ ...prev, ...newAdj }));
  };

  const updateSettings = (newSettings: Partial<SheetSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  return (
    <div id="app-root" className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased pb-16">
      
      {/* Hidden input for changing image from control panel */}
      <input
        id="hidden-file-input"
        type="file"
        ref={hiddenUploadRef}
        onChange={handleHiddenFileChange}
        accept="image/*"
        className="hidden"
      />

      {/* Header Bar */}
      <header id="app-header" className="bg-white border-b border-gray-200/80 sticky top-0 z-50 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <div className="p-2.5 bg-emerald-600 text-white rounded-xl shadow-md shadow-emerald-600/10 shrink-0">
              <Camera className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-gray-900 tracking-tight flex items-center gap-1.5 justify-center sm:justify-start">
                {translation.title}
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-md">
                  Studio V1.0
                </span>
              </h1>
              <p className="text-xs text-gray-500 mt-0.5">
                {translation.subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <LanguageSelector 
              currentLanguage={language} 
              onLanguageChange={setLanguage} 
            />
          </div>

        </div>
      </header>

      {/* Main Container */}
      <main id="app-main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {!selectedImage ? (
          
          /* Welcome & Uploader View */
          <div id="welcome-view" className="max-w-3xl mx-auto space-y-8 animate-fadeIn">
            
            {/* Elegant Hero card */}
            <div className="bg-white rounded-3xl border border-gray-200/80 p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-4 max-w-md text-center md:text-left">
                <div className="inline-flex items-center space-x-1.5 bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>8K Ultra High Resolution</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 leading-tight">
                  {language === 'te' 
                    ? "ఖచ్చితమైన ప్రింట్ షీట్ నిమిషాల్లో!" 
                    : "Create Print-Ready Sheets in Seconds!"}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {language === 'te'
                    ? "మీరు అప్‌లోడ్ చేసిన ఫొటోను జూమ్, రొటేట్ చేసి, సరియైన 4x6 పేపర్ సైజ్ షీట్ రూపంలో 8 పాస్‌పోర్ట్ కాపీలుగా మార్చుకోండి."
                    : "Upload any portrait photo, crop and adjust, and generate an exact 4x6-inch print sheet. Perfectly spaced borders and gaps ensure premium studio-lab quality."}
                </p>
              </div>

              {/* Graphical Steps */}
              <div className="grid grid-cols-3 gap-2 w-full md:w-auto shrink-0 bg-gray-50 p-4 rounded-2xl border border-gray-200/50">
                <div className="flex flex-col items-center text-center p-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center mb-1.5 shadow-2xs">
                    1
                  </div>
                  <span className="text-[10px] font-bold text-gray-700">Upload</span>
                </div>
                <div className="flex flex-col items-center text-center p-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center mb-1.5 shadow-2xs">
                    2
                  </div>
                  <span className="text-[10px] font-bold text-gray-700">Frame</span>
                </div>
                <div className="flex flex-col items-center text-center p-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs flex items-center justify-center mb-1.5 shadow-2xs">
                    3
                  </div>
                  <span className="text-[10px] font-bold text-gray-700">Print</span>
                </div>
              </div>
            </div>

            {/* The Main Drag/Drop Uploader */}
            <div className="bg-white rounded-3xl border border-gray-200/80 p-8 shadow-sm">
              <FileUploader 
                translation={translation} 
                onFileSelect={handleFileSelect} 
              />
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-600">
              <div className="bg-white p-4 rounded-2xl border border-gray-200/50 flex items-center space-x-3 shadow-3xs">
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                  <Printer className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Standard 4x6 Size</h4>
                  <p className="text-gray-500">Perfectly fits photo printer paper sheets.</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-gray-200/50 flex items-center space-x-3 shadow-3xs">
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                  <Sliders className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Crop & Rotate</h4>
                  <p className="text-gray-500">Rotate and scale dynamically to fit guides.</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-gray-200/50 flex items-center space-x-3 shadow-3xs">
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                  <Maximize className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Precise Gaps</h4>
                  <p className="text-gray-500">Zero error margin for clean borders.</p>
                </div>
              </div>
            </div>

          </div>
        ) : (
          
          /* Edit & Preview Grid View */
          <div id="editing-workspace" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn">
            
            {/* Left Hand: Custom Adjustments Form */}
            <section id="adjustments-sidebar" className="lg:col-span-5 xl:col-span-4 bg-slate-50">
              <ControlPanel
                translation={translation}
                adjustments={adjustments}
                onChangeAdjustments={updateAdjustments}
                settings={settings}
                onChangeSettings={updateSettings}
                onReset={handleResetAdjustments}
                onTriggerNewUpload={handleTriggerNewUpload}
              />
            </section>

            {/* Right Hand: High DPI Render Preview */}
            <section id="preview-workspace" className="lg:col-span-7 xl:col-span-8 bg-white rounded-3xl border border-gray-200/80 p-6 shadow-xs">
              <SheetPreview
                translation={translation}
                imgElement={imgElement}
                adjustments={adjustments}
                settings={settings}
              />
            </section>

          </div>
        )}
      </main>

      {/* Footer copyright and creator credits */}
      <footer id="app-footer-info" className="mt-16 text-center space-y-2">
        <p className="text-xs text-gray-400">
          &copy; 2026 Perfect Studio Passport Maker. All rights reserved.
        </p>
        <p className="text-[11px] font-bold tracking-widest text-emerald-600/80 uppercase">
          CREDITS BY MUNIGALA SANDEEP LVS CREATIONS & PRINTS
        </p>
      </footer>

    </div>
  );
}
