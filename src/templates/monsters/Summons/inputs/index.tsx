'use client';

import CTA from '@/components/CTA';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import useMonsters from '@/hooks/useMonsters';
import type { Summons } from '@/models/summons';
import { Trash2 } from 'lucide-react';

type SummonsProps = {
  index: number;
  summons: Summons;
  onAttackChange: (index: number, updatedSummon: Summons) => void;
  onRemoveAttack: (index: number) => void;
};

const SummonsInputs = ({
  index,
  summons,
  onAttackChange,
  onRemoveAttack,
}: SummonsProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onAttackChange(index, {
      ...summons,
      [name]: name === 'name' ? value : Number(value),
    });
  };

  const { handleAddSummons } = useMonsters();

  return (
    <div className="space-y-2">
      <Label>Summon: {summons.name || 'Novo summon'}</Label>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4">
        <div className="space-y-1">
          <Label htmlFor={`summons-name-${index}`}>Nome</Label>
          <Input
            id={`summons-name-${index}`}
            name="name"
            value={summons.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor={`summons-interval-${index}`}>Intervalo em ms</Label>
          <Input
            id={`summons-interval-${index}`}
            name="interval"
            type="number"
            value={summons.interval}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor={`summons-chance-${index}`}>Chance</Label>
          <Input
            id={`summons-chance-${index}`}
            name="chance"
            type="number"
            value={summons.chance}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor={`summons-qtdMax-${index}`}>Quantidade Máxima</Label>
          <Input
            id={`summons-qtdMax-${index}`}
            name="qtdMax"
            type="number"
            value={summons.qtdMax}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <CTA>
        <Button
          variant="destructive"
          onClick={() => onRemoveAttack(index)}
          disabled={index === 0}
        >
          <Trash2 className="h-4 w-4" />
          Remover
        </Button>
        <Button type="button" variant="outline" onClick={handleAddSummons}>
          Adicionar Invocação
        </Button>
      </CTA>
    </div>
  );
};

export default SummonsInputs;
