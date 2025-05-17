import Columns from '@/components/Columns';
import FormSection from '@/components/FormSection';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import useMonsters from '@/hooks/useMonsters';

const DataBasics = () => {
  const { form, raceMonsters } = useMonsters();

  return (
    <FormSection title="Dados Básicos">
      <Columns cols={4}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome *</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  disabled={form.formState.isSubmitting}
                  placeholder="Ex.: Demon (obrigatório)"
                  onChange={(e) => field.onChange(e.target.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="race"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Raça *</FormLabel>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                disabled={form.formState.isSubmitting}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma raça" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {raceMonsters.map((race) => (
                    <SelectItem key={race.code} value={race.code}>
                      {race.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Experiência *</FormLabel>
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
          name="speed"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Velocidade *</FormLabel>
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
      <Columns cols={2}>
        <FormField
          control={form.control}
          name="health.min"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vida Mínima *</FormLabel>
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
          name="health.max"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vida Máxima *</FormLabel>
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
    </FormSection>
  );
};

export default DataBasics;
