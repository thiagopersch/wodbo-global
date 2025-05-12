interface FormSectionProps {
  title: string;
  children: React.ReactNode;
}

const FormSection: React.FC<FormSectionProps> = ({ title, children }) => (
  <div className="space-y-4">
    <h2 className="text-primary text-xl font-bold">{title}</h2>
    {children}
  </div>
);

export default FormSection;
