// src/hooks/useMonsterForm.ts
'use client';
import {
  MonsterFormData,
  defaultMonsterValues,
  monsterFormSchema,
} from '@/hooks/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
// Supondo que useGenerateXML seja uma função utilitária agora
// import generateXMLFunction from "@/lib/generateXML"; // Ajuste o caminho

// Simulação da função, substitua pela sua lógica real
const generateXMLFunction = (data: MonsterFormData): string => {
  console.log('Generating XML for:', data);
  return `<monster name="${data.name}">\n  <description>${data.description || ''}</description>\n  \n</monster>`;
};

export const useMonsterForm = () => {
  const [xmlString, setXmlString] = useState<string>('');

  const form = useForm<MonsterFormData>({
    resolver: zodResolver(monsterFormSchema),
    defaultValues: defaultMonsterValues,
    mode: 'onChange', // Para feedback de validação mais imediato
  });

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = form;

  // Atualiza a descrição quando o nome muda
  const watchedName = watch('name');
  useEffect(() => {
    if (watchedName) {
      setValue('description', watchedName.toLowerCase(), {
        shouldValidate: true,
      });
    }
  }, [watchedName, setValue]);

  const onSubmit = (data: MonsterFormData) => {
    console.log('Form data submitted:', data);
    const generatedXml = generateXMLFunction(data);
    setXmlString(generatedXml);
  };

  // Watch para renderização condicional
  const watchIsAttack = watch('isAttack');
  const watchIsImmunities = watch('isImmunities');
  const watchIsElements = watch('isElements');
  const watchIsSummons = watch('isSummons');
  const watchIsVoices = watch('isVoices');
  const watchIsLoot = watch('isLoot');

  // Field Arrays
  const {
    fields: attackFields,
    append: appendAttack,
    remove: removeAttack,
  } = useFieldArray({ control, name: 'attack' });
  const {
    fields: summonFields,
    append: appendSummon,
    remove: removeSummon,
  } = useFieldArray({ control, name: 'summons' });
  const {
    fields: lootFields,
    append: appendLoot,
    remove: removeLoot,
  } = useFieldArray({ control, name: 'loot' });

  return {
    form,
    handleSubmit: handleSubmit(onSubmit),
    control,
    errors,
    isSubmitting,
    xmlString,
    setXmlString, // Se precisar limpar externamente
    watchedFields: {
      isAttack: watchIsAttack,
      isImmunities: watchIsImmunities,
      isElements: watchIsElements,
      isSummons: watchIsSummons,
      isVoices: watchIsVoices,
      isLoot: watchIsLoot,
    },
    fieldArrays: {
      attackFields,
      appendAttack: () =>
        appendAttack({
          name: '',
          interval: 0,
          minValueAttack: 0,
          maxValueAttack: 0,
        }),
      removeAttack,
      summonFields,
      appendSummon: () =>
        appendSummon({ name: '', interval: 0, chance: 0, qtdMax: 0 }),
      removeSummon,
      lootFields,
      appendLoot: () =>
        appendLoot({ name: '', isCountMax: false, countmax: 0, chance: 0 }),
      removeLoot,
    },
  };
};
