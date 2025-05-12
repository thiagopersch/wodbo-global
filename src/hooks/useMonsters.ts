import { Monsters } from '@/models/monsters';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { monsters } from './schema';
import useGenerateXML from './useGenerateXML';

type Schema = z.infer<typeof monsters>;

const useMonsters = () => {
  const lookTypes = [
    { name: 'type', label: 'Looktype' },
    { name: 'head', label: 'Looktype Head' },
    { name: 'body', label: 'Looktype Body' },
    { name: 'legs', label: 'Looktype Legs' },
    { name: 'feet', label: 'Looktype Feet' },
    { name: 'addons', label: 'Looktype Addons' },
    { name: 'typeex', label: 'Looktype Typeex' },
    { name: 'corpse', label: 'Looktype Corpse' },
  ];

  const raceMonsters = [
    {
      code: 'blood',
      label: 'Sangue',
    },
    {
      code: 'venom',
      label: 'Veneno',
    },
    {
      code: 'fire',
      label: 'Fogo',
    },
    {
      code: 'energy',
      label: 'Energia',
    },
    {
      code: 'undead',
      label: 'Morto-vivo',
    },
  ];

  const immunities = [
    {
      code: 'physical',
      label: 'physical',
    },
    {
      code: 'energy',
      label: 'energy',
    },
    {
      code: 'fire',
      label: 'fire',
    },
    {
      code: 'poison',
      label: 'poison',
    },
    {
      code: 'earth',
      label: 'earth',
    },
    {
      code: 'ice',
      label: 'ice',
    },
    {
      code: 'holy',
      label: 'holy',
    },
    {
      code: 'death',
      label: 'death',
    },
    {
      code: 'drown',
      label: 'drown',
    },
    {
      code: 'lifedrain',
      label: 'lifedrain',
    },
    {
      code: 'manadrain',
      label: 'manadrain',
    },
    {
      code: 'outfit',
      label: 'outfit',
    },
    {
      code: 'drunk',
      label: 'drunk',
    },
    {
      code: 'invisible',
      label: 'invisible',
    },
    {
      code: 'paralyze',
      label: 'paralyze',
    },
  ];

  const elements = [
    'firePercent',
    'energyPercent',
    'icePercent',
    'poisonPercent',
    'holyPercent',
    'deathPercent',
    'drownPercent',
    'earthPercent',
    'physicalPercent',
    'lifedrainPercent',
    'manadrainPercent',
    'healingPercent',
    'undefinedPercent',
  ];

  const [monsterData, setMonsterData] = useState<Monsters>({
    name: '',
    description: '',
    race: '',
    experience: 0,
    speed: 0,
    heath: { min: 0, max: 0 },
    looktype: {
      type: 0,
      head: 0,
      body: 0,
      legs: 0,
      feet: 0,
      addons: 0,
      typeex: 0,
      corpse: 0,
    },
    isAttack: false,
    attack: [{ name: '', interval: 0, minValueAttack: 0, maxValueAttack: 0 }],
    isImmunities: false,
    immunities: {
      physical: false,
      energy: false,
      fire: false,
      poison: false,
      earth: false,
      ice: false,
      holy: false,
      death: false,
      drown: false,
      lifedrain: false,
      manadrain: false,
      outfit: false,
      drunk: false,
      invisible: false,
      paralyze: false,
    },
    isDefenses: false,
    isElements: false,
    elements: {
      firePercent: 0,
      energyPercent: 0,
      icePercent: 0,
      poisonPercent: 0,
      holyPercent: 0,
      deathPercent: 0,
      drownPercent: 0,
      earthPercent: 0,
      physicalPercent: 0,
      lifedrainPercent: 0,
      manadrainPercent: 0,
      healingPercent: 0,
      undefinedPercent: 0,
    },
    isSummons: false,
    summons: [{ name: '', interval: 0, chance: 0, qtdMax: 0 }],
    isVoices: false,
    voices: { message: '' },
    isLoot: false,
    loot: [{ name: '', isCountMax: false, countmax: 0, chance: 0 }],
  });

  const form = useForm<Schema>({
    mode: 'all',
    criteriaMode: 'all',
    resolver: zodResolver(monsters),
    defaultValues: {
      name: '',
      description: '',
      race: 'blood',
      experience: 0,
      speed: 0,
      heath: { min: 0, max: 0 },
      looktype: {
        type: 0,
        head: 0,
        body: 0,
        legs: 0,
        feet: 0,
        addons: 0,
        typeex: 0,
        corpse: 0,
      },
      isAttack: false,
      attack: [{ name: '', interval: 0, minValueAttack: 0, maxValueAttack: 0 }],
      isImmunities: false,
      immunities: {
        physical: false,
        energy: false,
        fire: false,
        poison: false,
        earth: false,
        ice: false,
        holy: false,
        death: false,
        drown: false,
        lifedrain: false,
        manadrain: false,
        outfit: false,
        drunk: false,
        invisible: false,
        paralyze: false,
      },
      isDefenses: false,
      isElements: false,
      elements: {
        firePercent: 0,
        energyPercent: 0,
        icePercent: 0,
        poisonPercent: 0,
        holyPercent: 0,
        deathPercent: 0,
        drownPercent: 0,
        earthPercent: 0,
        physicalPercent: 0,
        lifedrainPercent: 0,
        manadrainPercent: 0,
        healingPercent: 0,
        undefinedPercent: 0,
      },
      isSummons: false,
      summons: [{ name: '', interval: 0, chance: 0, qtdMax: 0 }],
      isVoices: false,
      voices: { message: '' },
      isLoot: false,
      loot: [{ name: '', isCountMax: false, countmax: 0, chance: 0 }],
    },
  });
  useEffect(() => {
    setMonsterData((prev) => ({
      ...prev,
      description: prev.name ? prev.name.toLowerCase() : '',
    }));
  }, [monsterData.name]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMonsterData((prev) => ({
      ...prev,
      [name]: value,
      voices: { ...prev.voices, [name]: value },
    }));
  };

  const handleChangeVoice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMonsterData((prev) => ({
      ...prev,
      voices: { [name]: value },
    }));
  };

  const handleChangeRace = (value: string) => {
    setMonsterData((prev) => ({ ...prev, race: value }));
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMonsterData((prev) => ({
      ...prev,
      [name]: Number(value),
      heath: { ...prev.heath, [name]: Number(value) },
      looktype: { ...prev.looktype, [name]: Number(value) },
      immunities: { ...prev.immunities, [name]: Number(value) },
      elements: { ...prev.elements, [name]: Number(value) },
    }));
  };

  const [xmlString, setXmlString] = useState<string>('');
  const [hasImmunities, setHasImmunities] = useState<boolean>(
    !!monsterData.isImmunities,
  );
  const [hasElements, setHasElements] = useState<boolean>(
    !!monsterData.isElements,
  );
  const [hasIsDefenses, setHasIsDefenses] = useState<boolean>(
    !!monsterData.isDefenses,
  );
  const [hasIsSummons, setHasIsSummons] = useState<boolean>(
    !!monsterData.isSummons,
  );
  const [hasIsAttack, setHasIsAttack] = useState<boolean>(
    !!monsterData.isAttack,
  );
  const [hasIsLoot, setHasIsLoot] = useState<boolean>(!!monsterData.isLoot);
  const [hasIsVoices, setHasIsVoices] = useState<boolean>(
    !!monsterData.isVoices,
  );

  const [summons, setSummons] = useState<Monsters['summons']>(
    monsterData.summons?.map((summon) => ({ ...summon })) || [
      { name: '', interval: 0, chance: 0, qtdMax: 0 },
    ],
  );

  const [attacks, setAttacks] = useState<Monsters['attack']>(
    monsterData.attack?.map((attack) => ({ ...attack })) || [
      { name: '', interval: 0, minValueAttack: 0, maxValueAttack: 0 },
    ],
  );

  const [loots, setLoots] = useState<Monsters['loot']>(
    monsterData.loot?.map((loot) => ({ ...loot })) || [
      { name: '', isCountMax: false, countmax: 0, chance: 0 },
    ],
  );

  const handleCheckboxImmunitiesChange = (checked: boolean) => {
    setHasImmunities(checked);
  };

  const handleCheckboxElementsChange = (checked: boolean) => {
    setHasElements(checked);
  };

  const handleCheckboxisSummonsChange = (checked: boolean) => {
    setHasIsSummons(checked);
  };

  const handleCheckboxisAttackChange = (checked: boolean) => {
    setHasIsAttack(checked);
  };

  const handleCheckboxisLootChange = (checked: boolean) => {
    setHasIsLoot(checked);
  };

  const handleCheckboxisDefencesChange = (checked: boolean) => {
    setHasIsDefenses(checked);
  };

  const handleCheckboxisVoicesChange = (checked: boolean) => {
    setHasIsVoices(checked);
    if (!checked) {
      setMonsterData((prev) => ({
        ...prev,
        voices: { ...prev.voices, message: '' },
      }));
    }
  };

  const handleAddAttack = () => {
    setAttacks((prev) => [
      ...prev,
      { name: '', interval: 0, minValueAttack: 0, maxValueAttack: 0 },
    ]);
  };

  const handleAddSummons = () => {
    setSummons((prev) => [
      ...prev,
      { name: '', interval: 0, chance: 0, qtdMax: 0 },
    ]);
  };

  const handleAddLoot = () => {
    setLoots((prev) => [
      ...prev,
      { name: '', isCountMax: false, countmax: 0, chance: 0 },
    ]);
  };

  const handleSummonChange = (index: number, updatedSummon: any) => {
    setSummons((prev) =>
      prev.map((summon, i) => (i === index ? updatedSummon : summon)),
    );
  };

  const handleAttackChange = (index: number, updatedAttack: any) => {
    setAttacks((prev) =>
      prev.map((attack, i) => (i === index ? updatedAttack : attack)),
    );
  };

  const handleLootChange = (index: number, updatedLoot: any) => {
    setLoots((prev) =>
      prev.map((loot, i) => (i === index ? updatedLoot : loot)),
    );
  };

  const handleRemoveAttack = (index: number) => {
    setAttacks((prev) => prev.filter((_, i) => i !== index));
  };

  const handleRemoveLoot = (index: number) => {
    setLoots((prev) => prev.filter((_, i) => i !== index));
  };

  const handleRemoveSummon = (index: number) => {
    setSummons((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      ...monsterData,
      attack: attacks,
      loot: loots,
      summons,
      isSummons: hasIsSummons,
      isAttack: hasIsAttack,
      isLoot: hasIsLoot,
      isVoices: hasIsVoices,
      isDefenses: hasIsDefenses,
      isImmunities: hasImmunities,
      isElements: hasElements,
    };
    const generatedXmlString = useGenerateXML(data);
    setXmlString(generatedXmlString);
  };

  return {
    lookTypes,
    raceMonsters,
    immunities,
    elements,
    form,
    monsterData,
    xmlString,
    hasImmunities,
    hasElements,
    hasIsSummons,
    hasIsAttack,
    hasIsLoot,
    hasIsDefenses,
    hasIsVoices,
    attacks,
    summons,
    loots,
    handleSubmit,
    handleAddAttack,
    handleAddLoot,
    handleAddSummons,
    handleAttackChange,
    handleCheckboxElementsChange,
    handleCheckboxImmunitiesChange,
    handleCheckboxisAttackChange,
    handleCheckboxisDefencesChange,
    handleCheckboxisLootChange,
    handleCheckboxisSummonsChange,
    handleCheckboxisVoicesChange,
    handleLootChange,
    handleNumberChange,
    handleRemoveAttack,
    handleRemoveLoot,
    handleRemoveSummon,
    handleSummonChange,
    handleChange,
    handleChangeVoice,
    handleChangeRace,
  };
};

export default useMonsters;
