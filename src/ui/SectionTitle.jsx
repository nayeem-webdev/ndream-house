import { BookOpen } from "lucide-react";

const SectionTitle = ({
  topTitle,
  title,
  titleColor,
  subtitle,
  color,
  icon: Icon = BookOpen,
}) => {
  return (
    <div className="max-w-3xl px-4 mb-10 mx-auto text-center">
      <div
        className={`inline-flex items-center space-x-2 bg-${color}/10 text-${color} px-4 py-2 rounded-full text-sm font-medium mb-4`}
      >
        <Icon size={16} />
        <span>{topTitle}</span>
      </div>
      <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 text-center">
        {title} <span className={`text-${color}`}>{titleColor}</span>
      </h2>
      <p className="leading-relaxed text-center text-xl text-slate-600 max-w-3xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;
