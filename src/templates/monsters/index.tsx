'use client';

import CTA from '@/components/CTA';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import useMonsters from '@/hooks/useMonsters';
import { Editor } from '@monaco-editor/react';
import Attacks from './Attacks';
import DataBasics from './DataBasics';
import Defenses from './Defenses';
import Elements from './Elements';
import Immunities from './Immunities';
import Looktypes from './Looktypes';
import Loots from './Loots';
import Summons from './Summons';
import Voice from './Voice';

const AddMonsters: React.FC = () => {
  const { handleSubmit, xmlString, form } = useMonsters();

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <DataBasics />
        <Looktypes />
        <Immunities />
        <Elements />
        <Attacks />
        <Defenses />
        <Summons />
        <Voice />
        <Loots />
        <CTA>
          <Button
            type="submit"
            className="md:max-m-0 m-8 h-12 w-full max-w-md"
            disabled={form.formState.isSubmitting}
          >
            Gerar XML
          </Button>
        </CTA>
      </form>

      {xmlString && (
        <div className="mt-8">
          <h2 className="text-primary my-4 text-xl font-bold">XML Gerado</h2>
          <Editor
            value={xmlString}
            height="90vh"
            defaultLanguage="xml"
            theme="vs-dark"
            loading="Gerando..."
            className="w-full"
          />
        </div>
      )}
    </Form>
  );
};

export default AddMonsters;
