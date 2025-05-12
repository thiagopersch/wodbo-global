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
import useMonsters from '@/hooks/useMonsters';

const Immunities: React.FC = () => {
  const {
    form,
    hasImmunities,
    immunities,
    monsterData,
    handleCheckboxImmunitiesChange,
  } = useMonsters();

  return (
    <FormSection title="Imunidades">
      <CheckboxToggle
        id="hasImmunities"
        label="Possui imunidades?"
        checked={hasImmunities}
        onCheckedChange={handleCheckboxImmunitiesChange}
      />
      {hasImmunities && (
        <Columns cols={4}>
          {immunities.map((field) => (
            <FormField
              key={field.code}
              control={form.control}
              name={`immunities.${field.code}` as keyof typeof monsterData}
              render={({ field: formField }) => (
                <FormItem className="flex items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      checked={!!formField.value}
                      onCheckedChange={formField.onChange}
                    />
                  </FormControl>
                  <FormLabel className="cursor-pointer">
                    {field.label}
                  </FormLabel>
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
