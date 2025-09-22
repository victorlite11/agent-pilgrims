import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Example translations
const resources = {
  en: {
    translation: {
      "Upload Document": "Upload Document",
      "Cancel": "Cancel",
      "Upload New": "Upload New",
      "Select document type": "Select document type",
      "Select File": "Select File",
      "Click to select a file or drag and drop": "Click to select a file or drag and drop",
      "JPG, PNG, or PDF (max 5MB)": "JPG, PNG, or PDF (max 5MB)",
      "Important Notes": "Important Notes",
      "Documents must be clear and legible": "Documents must be clear and legible",
      "All text must be in English or translated": "All text must be in English or translated",
      "Processing may take 2-3 business days": "Processing may take 2-3 business days"
    }
  },
  fr: {
    translation: {
      "Upload Document": "Télécharger le document",
      "Cancel": "Annuler",
      "Upload New": "Télécharger nouveau",
      "Select document type": "Sélectionner le type de document",
      "Select File": "Sélectionner le fichier",
      "Click to select a file or drag and drop": "Cliquez pour sélectionner un fichier ou faites glisser et déposez",
      "JPG, PNG, or PDF (max 5MB)": "JPG, PNG ou PDF (max 5 Mo)",
      "Important Notes": "Notes importantes",
      "Documents must be clear and legible": "Les documents doivent être clairs et lisibles",
      "All text must be in English or translated": "Tout texte doit être en anglais ou traduit",
      "Processing may take 2-3 business days": "Le traitement peut prendre 2-3 jours ouvrables"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
