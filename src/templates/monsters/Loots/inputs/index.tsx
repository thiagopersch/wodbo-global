'use client';

import Columns from '@/components/Columns';
import CTA from '@/components/CTA';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import useMonsters from '@/hooks/useMonsters';
import { Trash2 } from 'lucide-react';

type LootProps = {
  index: number;
};

const LootsInputs = ({ index }: LootProps) => {
  const { form, handleAddLoot, handleRemoveLoot } = useMonsters();

  return (
    <div className="space-y-2">
      <FormField
        control={form.control}
        name={`loot.${index}.isCountMax`}
        render={({ field }) => (
          <FormItem className="flex items-center space-x-2">
            <FormControl>
              <Checkbox
                id={`loot-hasCount-${index}`}
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <FormLabel className="cursor-pointer">Possui count?</FormLabel>
          </FormItem>
        )}
      />
      <Columns cols={3}>
        <FormField
          control={form.control}
          name={`loot.${index}.name`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Item: {field.value || 'Novo item'}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  value={field.value ?? ''}
                  disabled={form.formState.isSubmitting}
                  placeholder="Nome do item"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={`loot.${index}.chance`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Chance</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  value={field.value ?? ''}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                  disabled={form.formState.isSubmitting}
                  placeholder="Mínimo 1"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {form.watch(`loot.${index}.isCountMax`) && (
          <FormField
            control={form.control}
            name={`loot.${index}.countmax`}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantidade máxima</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="number"
                    value={field.value ?? ''}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                    disabled={form.formState.isSubmitting}
                    placeholder="Mínimo 1"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
      </Columns>
      <CTA>
        <Button
          variant="destructive"
          onClick={() => handleRemoveLoot(index)}
          className="flex items-center gap-2"
          disabled={form.getValues('loot').length === 1}
        >
          <Trash2 className="h-4 w-4" />
          Remover
        </Button>
        <Button type="button" onClick={handleAddLoot}>
          Novo saque
        </Button>
      </CTA>
    </div>
  );
};

export default LootsInputs;
