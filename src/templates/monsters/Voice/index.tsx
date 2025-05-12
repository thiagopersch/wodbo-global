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
  const {
    form,
    hasIsVoices,
    handleCheckboxisVoicesChange,
    handleChangeVoice,
    monsterData,
  } = useMonsters();
  return (
    <FormSection title="Vozes (Voices)">
      <CheckboxToggle
        id="hasIsVoices"
        label="Possui vozes?"
        checked={hasIsVoices}
        onCheckedChange={handleCheckboxisVoicesChange}
      />
      {hasIsVoices && (
        <FormField
          control={form.control}
          name="voices.message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensagem da Voz</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  value={monsterData.voices?.message}
                  onChange={handleChangeVoice}
                  disabled={form.formState.isSubmitting}
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
