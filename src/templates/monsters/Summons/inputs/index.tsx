'use client';

import Columns from '@/components/Columns';
import CTA from '@/components/CTA';
import { Button } from '@/components/ui/button';
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

type SummonsProps = {
  index: number;
};

const SummonsInputs = ({ index }: SummonsProps) => {
  const { form, handleAddSummon, handleRemoveSummon } = useMonsters();

  return (
    <div className="space-y-2">
      <Columns cols={4}>
        <FormField
          control={form.control}
          name={`summons.${index}.name`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Summon: {field.value || 'Novo summon'} *</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  value={field.value ?? ''}
                  disabled={form.formState.isSubmitting}
                  placeholder="Nome da invocação (obrigatório)"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={`summons.${index}.interval`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Intervalo em ms *</FormLabel>
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
        <FormField
          control={form.control}
          name={`summons.${index}.chance`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Chance *</FormLabel>
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
        <FormField
          control={form.control}
          name={`summons.${index}.qtdMax`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantidade Máxima *</FormLabel>
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
      </Columns>
      <CTA>
        <Button
          type="button"
          variant="destructive"
          onClick={() => handleRemoveSummon(index)}
          disabled={form.getValues('summons')?.length === 1}
        >
          <Trash2 className="h-4 w-4" />
          Remover
        </Button>
        <Button type="button" variant="default" onClick={handleAddSummon}>
          Adicionar um novo
        </Button>
      </CTA>
    </div>
  );
};

export default SummonsInputs;
