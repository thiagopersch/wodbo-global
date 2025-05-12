import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';

interface CheckboxToggleProps {
  id: string;
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

const CheckboxToggle: React.FC<CheckboxToggleProps> = ({
  id,
  label,
  checked,
  onCheckedChange,
}) => (
  <div className="flex items-center space-x-2">
    <Checkbox id={id} checked={checked} onCheckedChange={onCheckedChange} />
    <Label htmlFor={id}>{label}</Label>
  </div>
);

export default CheckboxToggle;
