import CheckboxToggle from '@/components/CheckboxToggle';
import FormSection from '@/components/FormSection';
import useMonsters from '@/hooks/useMonsters';

const Defenses = () => {
  const { hasIsDefenses, handleCheckboxisDefencesChange } = useMonsters();

  return (
    <FormSection title="Defesas">
      <CheckboxToggle
        id="hasIsDefenses"
        label="Possui defesas?"
        checked={hasIsDefenses}
        onCheckedChange={handleCheckboxisDefencesChange}
      />
    </FormSection>
  );
};

export default Defenses;
