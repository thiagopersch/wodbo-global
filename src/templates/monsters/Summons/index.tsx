import CheckboxToggle from '@/components/CheckboxToggle';
import FormSection from '@/components/FormSection';
import useMonsters from '@/hooks/useMonsters';
import SummonsInputs from './inputs';

const Summons = () => {
  const {
    hasIsSummons,
    handleCheckboxisSummonsChange,
    summons,
    handleSummonChange,
    handleRemoveSummon,
  } = useMonsters();

  return (
    <FormSection title="Invocações (Summons)">
      <CheckboxToggle
        id="hasIsSummons"
        label="Possui invocações?"
        checked={hasIsSummons}
        onCheckedChange={handleCheckboxisSummonsChange}
      />
      {hasIsSummons && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Lista de Invocações</h3>
          </div>
          {summons.map((summon, index) => (
            <SummonsInputs
              key={index}
              index={index}
              summons={summon}
              onAttackChange={handleSummonChange}
              onRemoveAttack={handleRemoveSummon}
            />
          ))}
        </div>
      )}
    </FormSection>
  );
};

export default Summons;
