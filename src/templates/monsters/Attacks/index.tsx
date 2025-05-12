import CheckboxToggle from '@/components/CheckboxToggle';
import FormSection from '@/components/FormSection';
import useMonsters from '@/hooks/useMonsters';
import React from 'react';
import AttacksInputs from './inputs';

const Attacks: React.FC = () => {
  const {
    attacks,
    hasIsAttack,
    handleCheckboxisAttackChange,
    handleAttackChange,
    handleRemoveAttack,
  } = useMonsters();

  return (
    <FormSection title="Ataques">
      <CheckboxToggle
        id="hasIsAttack"
        label="Possui ataques?"
        checked={hasIsAttack}
        onCheckedChange={handleCheckboxisAttackChange}
      />
      {hasIsAttack && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Lista de Ataques</h3>
          </div>
          {attacks.map((attack, index) => (
            <AttacksInputs
              key={index}
              index={index}
              attack={attack}
              onAttackChange={handleAttackChange}
              onRemoveAttack={handleRemoveAttack}
            />
          ))}
        </div>
      )}
    </FormSection>
  );
};

export default Attacks;
