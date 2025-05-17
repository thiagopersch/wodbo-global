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

type AttackProps = {
  index: number;
};

const AttacksInputs: React.FC<AttackProps> = ({ index }) => {
  const { form, handleAddAttack, handleRemoveAttack } = useMonsters();

  return (
    <div className="space-y-2">
      <Columns cols={4}>
        <FormField
          control={form.control}
          name={`attacks.${index}.name`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ataque: {field.value || 'Novo ataque'} *</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  value={field.value ?? ''}
                  disabled={form.formState.isSubmitting}
                  placeholder="Nome do ataque (obrigatório)"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={`attacks.${index}.interval`}
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
                  placeholder="Mínimo 1000"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={`attacks.${index}.minValueAttack`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Valor mínimo *</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  value={field.value ?? ''}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                  disabled={form.formState.isSubmitting}
                  placeholder="0 ou maior"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={`attacks.${index}.maxValueAttack`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Valor máximo *</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  value={field.value ?? ''}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                  disabled={form.formState.isSubmitting}
                  placeholder="0 ou maior"
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
          onClick={() => handleRemoveAttack(index)}
          disabled={form.getValues('attacks').length === 1}
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
