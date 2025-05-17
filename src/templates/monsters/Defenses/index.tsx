import CheckboxToggle from '@/components/CheckboxToggle';
import FormSection from '@/components/FormSection';
import { FormField } from '@/components/ui/form';
import useMonsters from '@/hooks/useMonsters';

const Defenses = () => {
  const { form } = useMonsters();

  return (
    <FormSection title="Defesas">
      <FormField
        control={form.control}
        name="isDefenses"
        render={({ field }) => (
          <CheckboxToggle
            id="hasIsDefenses"
            label="Possui defesas?"
            checked={field.value}
            onCheckedChange={field.onChange}
          />
        )}
      />
    </FormSection>
  );
};

export default Defenses;
