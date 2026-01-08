import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
    const { i18n } = useTranslation()
    const lang = i18n.resolvedLanguage || i18n.language;

    return (
        <div className="flex gap-2">
            <button type="button" onClick={() => i18n.changeLanguage("en")} className="font-bold">
                EN
            </button>
            <button type="button" onClick={() => i18n.changeLanguage("fr")} className="font-bold">
                FR
            </button>
        </div> 
    )
}