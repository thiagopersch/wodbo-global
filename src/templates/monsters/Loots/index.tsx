import CheckboxToggle from '@/components/CheckboxToggle';
import FormSection from '@/components/FormSection';
import { FormField } from '@/components/ui/form';
import useMonsters from '@/hooks/useMonsters';
import LootsInputs from './inputs';

const Loots = () => {
  const { form } = useMonsters();
  const loots = form.watch('loot') || [];

  return (
    <FormSection title="Saques (Loots)">
      <FormField
        control={form.control}
        name="isLoot"
        render={({ field }) => (
          <CheckboxToggle
            id="hasIsLoot"
            label="Possui saques?"
            checked={field.value}
            onCheckedChange={field.onChange}
          />
        )}
      />
      {form.watch('isLoot') && (
        <div className="space-y-4">
          {loots.map((loot, index) => (
            <LootsInputs key={loot.id || index} index={index} />
          ))}
        </div>
      )}
    </FormSection>
  );
};

export default Loots;
