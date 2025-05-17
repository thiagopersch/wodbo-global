import CheckboxToggle from '@/components/CheckboxToggle';
import FormSection from '@/components/FormSection';
import { FormField } from '@/components/ui/form';
import useMonsters from '@/hooks/useMonsters';
import AttacksInputs from './inputs';

const Attacks: React.FC = () => {
  const { form } = useMonsters();
  const attacks = form.watch('attacks') || [];

  return (
    <FormSection title="Ataques">
      <FormField
        control={form.control}
        name="isAttack"
        render={({ field }) => (
          <CheckboxToggle
            id="hasIsAttack"
            label="Possui ataques?"
            checked={field.value}
            onCheckedChange={field.onChange}
          />
        )}
      />
      {form.watch('isAttack') && (
        <div className="space-y-4">
          {attacks.map((attack, index) => (
            <AttacksInputs key={attack.id || index} index={index} />
          ))}
        </div>
      )}
    </FormSection>
  );
};

export default Attacks;
