'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { LootType } from '@/models/lootType';
import { Trash2 } from 'lucide-react';
import { useState } from 'react';

type LootProps = {
  index: number;
  loot: LootType;
  onLootChange: (index: number, updatedLoot: LootType) => void;
  onRemoveLoot: (index: number) => void;
};

const LootsInputs = ({
  index,
  loot,
  onLootChange,
  onRemoveLoot,
}: LootProps) => {
  const [hasCount, setHasCount] = useState(loot.isCountMax || false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onLootChange(index, {
      ...loot,
      [name]: name === 'countmax' ? Number(value) : value,
    });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setHasCount(checked);
    onLootChange(index, {
      ...loot,
      isCountMax: checked,
      countmax: checked ? loot.countmax : 0,
    });
  };

  return (
    <div className="space-y-2">
      <Label>Item: {loot.name || 'Novo item'}</Label>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <div className="space-y-1">
          <Label htmlFor={`loot-name-${index}`}>Loot Name</Label>
          <Input
            id={`loot-name-${index}`}
            name="name"
            value={loot.name}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor={`loot-chance-${index}`}>Loot Chance</Label>
          <Input
            id={`loot-chance-${index}`}
            name="chance"
            type="number"
            value={loot.chance}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id={`loot-hasCount-${index}`}
          checked={hasCount}
          onCheckedChange={handleCheckboxChange}
        />
        <Label htmlFor={`loot-hasCount-${index}`}>Possui count?</Label>
      </div>
      {hasCount && (
        <div className="space-y-1">
          <Label htmlFor={`loot-countmax-${index}`}>Loot Count Max</Label>
          <Input
            id={`loot-countmax-${index}`}
            name="countmax"
            type="number"
            value={loot.countmax}
            onChange={handleChange}
            required
          />
        </div>
      )}
      <Button
        variant="destructive"
        onClick={() => onRemoveLoot(index)}
        className="flex items-center gap-2"
      >
        <Trash2 className="h-4 w-4" />
        Remover
      </Button>
    </div>
  );
};

export default LootsInputs;
