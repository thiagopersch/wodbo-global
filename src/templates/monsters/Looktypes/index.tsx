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
import { MonsterFormData } from '@/hooks/schema';
import useMonsters from '@/hooks/useMonsters';

const Looktypes: React.FC = () => {
  const { form, lookTypes } = useMonsters();

  return (
    <FormSection title="Aparência (Looktypes)">
      <Columns cols={9}>
        {lookTypes.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={
              `looktype.${field.name}` as `looktype.${keyof MonsterFormData['looktype']}`
            }
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  <Input
                    {...formField}
                    type="number"
                    value={formField.value ?? ''}
                    onChange={(e) => formField.onChange(Number(e.target.value))}
                    disabled={form.formState.isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </Columns>
    </FormSection>
  );
};

export default Looktypes;
