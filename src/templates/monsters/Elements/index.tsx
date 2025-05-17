import CheckboxToggle from '@/components/CheckboxToggle';
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

const Elements: React.FC = () => {
  const { form, elements } = useMonsters();

  // Type the elements array to match the keys of elementsSchema
  const elementKeys = elements as (keyof MonsterFormData['elements'])[];

  return (
    <FormSection title="Elementos">
      <FormField
        control={form.control}
        name="isElements"
        render={({ field }) => (
          <CheckboxToggle
            id="hasElements"
            label="Possui elementos?"
            checked={field.value}
            onCheckedChange={field.onChange}
          />
        )}
      />
      {form.watch('isElements') && (
        <Columns cols={6}>
          {elementKeys.map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={`elements.${field}`}
              render={({ field: formField }) => (
                <FormItem>
                  <FormLabel>
                    {field
                      .replace('Percent', '')
                      .replace(/([A-Z])/g, ' $1')
                      .trim()
                      .charAt(0)
                      .toUpperCase() +
                      field
                        .replace('Percent', '')
                        .replace(/([A-Z])/g, ' $1')
                        .trim()
                        .slice(1) +
                      ' (%)'}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...formField}
                      type="number"
                      value={formField.value ?? ''}
                      onChange={(e) =>
                        formField.onChange(Number(e.target.value))
                      }
                      disabled={form.formState.isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </Columns>
      )}
    </FormSection>
  );
};

export default Elements;
