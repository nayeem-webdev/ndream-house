import { ChevronsRight } from "lucide-react";

const ServiceCard = ({ service }) => {
  const IconComponent = service.icon;

  return (
    <div
      key={service.id}
      className="flex justify-between items-center border-2 p-4 rounded-lg border-primary bg-primary/5 hover:scale-102 transition-all backdrop-blur-md"
    >
      <div className="flex gap-4 items-center">
        <div
          className={`text-2xl ${service.iconBgColor} ${service.iconColor} p-2 rounded-md`}
        >
          <IconComponent size={30} />
        </div>
        <p className="font-medium">{service.title}</p>
      </div>
      <div className="text-primary">
        <ChevronsRight size={30} />
      </div>
    </div>
  );
};

export default ServiceCard;
