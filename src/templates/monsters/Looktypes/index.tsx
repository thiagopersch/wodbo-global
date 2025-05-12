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

const Looktypes: React.FC = () => {
  const { form, lookTypes, monsterData, handleNumberChange } = useMonsters();
  return (
    <FormSection title="Aparência (Looktypes)">
      <Columns cols={8}>
        {lookTypes.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={`looktype.${field.name}` as keyof typeof monsterData}
            render={({ field: formField }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  <Input
                    {...formField}
                    type="number"
                    value={
                      monsterData.looktype[
                        field.name as keyof typeof monsterData.looktype
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
    </FormSection>
  );
};

export default Looktypes;
