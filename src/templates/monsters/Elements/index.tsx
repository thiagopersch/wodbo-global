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
import useMonsters from '@/hooks/useMonsters';

const Elements: React.FC = () => {
  const {
    form,
    hasElements,
    elements,
    monsterData,
    handleNumberChange,
    handleCheckboxElementsChange,
  } = useMonsters();
  return (
    <FormSection title="Elementos">
      <CheckboxToggle
        id="hasElements"
        label="Possui elementos?"
        checked={hasElements}
        onCheckedChange={handleCheckboxElementsChange}
      />
      {hasElements && (
        <Columns cols={12}>
          {elements.map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={`elements.${field}` as keyof typeof monsterData}
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
                      value={
                        monsterData.elements?.[
                          field as keyof typeof monsterData.elements
                        ]
                      }
                      onChange={handleNumberChange}
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
