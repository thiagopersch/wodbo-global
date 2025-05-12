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
  const { form, raceMonsters, monsterData, handleNumberChange } = useMonsters();
  return (
    <FormSection title="Dados Básicos">
      <Columns cols={4}>
        <FormField
          control={form.control}
          name="name"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  disabled={form.formState.isSubmitting}
                  placeholder="Ex.: Demon"
                  error={fieldState.error?.message}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="race"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel>Raça</FormLabel>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                disabled={form.formState.isSubmitting}
              >
                <FormControl>
                  <SelectTrigger error={!!fieldState.error}>
                    <SelectValue placeholder="Selecione uma raça" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {raceMonsters.map((race) => (
                    <SelectItem key={race.code} value={race.code ?? ''}>
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
              <FormLabel>Experiência</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  value={monsterData.experience}
                  onChange={handleNumberChange}
                  disabled={form.formState.isSubmitting}
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
              <FormLabel>Velocidade</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  value={monsterData.speed}
                  onChange={handleNumberChange}
                  disabled={form.formState.isSubmitting}
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
          name="heath.min"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vida Mínima</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  value={monsterData.heath.min}
                  onChange={handleNumberChange}
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="heath.max"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vida Máxima</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="string"
                  value={monsterData.heath.max}
                  onChange={handleNumberChange}
                  disabled={form.formState.isSubmitting}
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
