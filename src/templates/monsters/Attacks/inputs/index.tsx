'use client';

import Columns from '@/components/Columns';
import CTA from '@/components/CTA';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import useMonsters from '@/hooks/useMonsters';
import type { Attacks } from '@/models/attacks';
import { Trash2 } from 'lucide-react';

type AttackProps = {
  index: number;
  attack: Attacks;
  onAttackChange: (index: number, updatedAttack: Attacks) => void;
  onRemoveAttack: (index: number) => void;
};

const AttacksInputs: React.FC<AttackProps> = ({
  index,
  attack,
  onAttackChange,
  onRemoveAttack,
}: AttackProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onAttackChange(index, {
      ...attack,
      [name]: name.includes('Value') ? Number(value) : value,
    });
  };

  const { handleAddAttack } = useMonsters();

  return (
    <div className="space-y-2">
      <span className="my-8 block text-2xl font-bold text-black">
        Ataque: {attack.name || 'Novo ataque'}
      </span>
      <Columns cols={4}>
        <div className="space-y-1">
          <Label htmlFor={`attack-name-${index}`}>Nome</Label>
          <Input
            id={`attack-name-${index}`}
            name="name"
            value={attack.name}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor={`attack-interval-${index}`}>Intervalo em ms</Label>
          <Input
            id={`attack-interval-${index}`}
            name="interval"
            type="number"
            value={attack.interval}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor={`attack-minValue-${index}`}>Valor mínimo</Label>
          <Input
            id={`attack-minValue-${index}`}
            name="minValueAttack"
            type="number"
            value={attack.minValueAttack}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor={`attack-maxValue-${index}`}>Valor máximo</Label>
          <Input
            id={`attack-maxValue-${index}`}
            name="maxValueAttack"
            type="number"
            value={attack.maxValueAttack}
            onChange={handleChange}
          />
        </div>
      </Columns>
      <CTA>
        <Button
          type="button"
          variant="destructive"
          onClick={() => onRemoveAttack(index)}
          disabled={index === 0}
        >
          <Trash2 className="h-4 w-4" />
          Remover
        </Button>
        <Button type="button" onClick={handleAddAttack}>
          Novo ataque
        </Button>
      </CTA>
    </div>
  );
};

export default AttacksInputs;
