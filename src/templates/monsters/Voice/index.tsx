import CheckboxToggle from '@/components/CheckboxToggle';
import FormSection from '@/components/FormSection';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import useMonsters from '@/hooks/useMonsters';

const Voice = () => {
  const { form } = useMonsters();

  return (
    <FormSection title="Vozes (Voices)">
      <FormField
        control={form.control}
        name="isVoices"
        render={({ field }) => (
          <CheckboxToggle
            id="hasIsVoices"
            label="Possui vozes?"
            checked={field.value}
            onCheckedChange={field.onChange}
          />
        )}
      />
      {form.watch('isVoices') && (
        <FormField
          control={form.control}
          name="voices.message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensagem da Voz *</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  value={field.value ?? ''}
                  disabled={form.formState.isSubmitting}
                  placeholder="Mensagem da voz (obrigatório)"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}
    </FormSection>
  );
};

export default Voice;
