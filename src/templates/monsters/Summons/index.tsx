import CheckboxToggle from '@/components/CheckboxToggle';
import FormSection from '@/components/FormSection';
import { FormField } from '@/components/ui/form';
import useMonsters from '@/hooks/useMonsters';
import SummonsInputs from './inputs';

const Summons = () => {
  const { form } = useMonsters();
  const summons = form.watch('summons') || [];

  return (
    <FormSection title="Invocações (Summons)">
      <FormField
        control={form.control}
        name="isSummons"
        render={({ field }) => (
          <CheckboxToggle
            id="hasIsSummons"
            label="Possui invocações?"
            checked={field.value}
            onCheckedChange={field.onChange}
          />
        )}
      />
      {form.watch('isSummons') && (
        <div className="space-y-4">
          {summons.map((summon, index) => (
            <SummonsInputs key={summon.id || index} index={index} />
          ))}
        </div>
      )}
    </FormSection>
  );
};

export default Summons;
