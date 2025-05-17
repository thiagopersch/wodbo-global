import CheckboxToggle from '@/components/CheckboxToggle';
import Columns from '@/components/Columns';
import FormSection from '@/components/FormSection';
import { Checkbox } from '@/components/ui/checkbox';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { MonsterFormData } from '@/hooks/schema';
import useMonsters from '@/hooks/useMonsters';

const Immunities: React.FC = () => {
  const { form, immunities } = useMonsters();

  return (
    <FormSection title="Imunidades">
      <FormField
        control={form.control}
        name="isImmunities"
        render={({ field }) => (
          <CheckboxToggle
            id="hasImmunities"
            label="Possui imunidades?"
            checked={field.value}
            onCheckedChange={field.onChange}
          />
        )}
      />
      {form.watch('isImmunities') && (
        <Columns cols={4}>
          {immunities.map(({ code, label }) => (
            <FormField
              key={code}
              control={form.control}
              name={
                `immunities.${code}` as `immunities.${keyof MonsterFormData['immunities']}`
              }
              render={({ field: formField }) => (
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      checked={formField.value}
                      onCheckedChange={formField.onChange}
                    />
                  </FormControl>
                  <FormLabel className="cursor-pointer">{label}</FormLabel>
                </FormItem>
              )}
            />
          ))}
        </Columns>
      )}
    </FormSection>
  );
};

export default Immunities;
