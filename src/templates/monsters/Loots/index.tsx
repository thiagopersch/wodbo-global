import CheckboxToggle from '@/components/CheckboxToggle';
import FormSection from '@/components/FormSection';
import { Button } from '@/components/ui/button';
import useMonsters from '@/hooks/useMonsters';
import LootsInputs from './inputs';

const Loots = () => {
  const {
    hasIsLoot,
    loots,
    handleAddLoot,
    handleRemoveLoot,
    handleLootChange,
    handleCheckboxisLootChange,
  } = useMonsters();
  return (
    <FormSection title="Saques (Loots)">
      <CheckboxToggle
        id="hasIsLoot"
        label="Possui saques?"
        checked={hasIsLoot}
        onCheckedChange={handleCheckboxisLootChange}
      />
      {hasIsLoot && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Lista de Saques</h3>
            <Button variant="outline" onClick={handleAddLoot}>
              Adicionar Saque
            </Button>
          </div>
          {loots.map((loot, index) => (
            <LootsInputs
              key={index}
              index={index}
              loot={loot}
              onLootChange={handleLootChange}
              onRemoveLoot={handleRemoveLoot}
            />
          ))}
        </div>
      )}
    </FormSection>
  );
};

export default Loots;
