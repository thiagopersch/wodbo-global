import { z } from 'zod';

export const monsters = z.object({
  name: z
    .string()
    .nonempty({ message: 'Campo obrigatório.' })
    .min(3, { message: 'Minimo de 3 caracteres.' })
    .max(50, { message: 'Maximo de 50 caracteres.' }),
  description: z.string().max(50, { message: 'Maximo de 50 caracteres.' }),
  race: z.string().nonempty({ message: 'Campo obrigatório.' }),
  experience: z.number().min(0, { message: 'O Minimo de 0.' }),
  speed: z.number().min(0, { message: 'O Minimo de 0.' }),
  heath: z.object({
    min: z.number().min(0, { message: 'O Minimo de 0.' }),
    max: z.number().min(0, { message: 'O Minimo de 0.' }),
  }),
  looktype: z.object({
    type: z.number().min(0, { message: 'O Minimo de 0.' }),
    head: z.number().min(0, { message: 'O Minimo de 0.' }),
    body: z.number().min(0, { message: 'O Minimo de 0.' }),
    legs: z.number().min(0, { message: 'O Minimo de 0.' }),
    feet: z.number().min(0, { message: 'O Minimo de 0.' }),
    addons: z.number().min(0, { message: 'O Minimo de 0.' }),
    typeex: z.number().min(0, { message: 'O Minimo de 0.' }),
    corpse: z.number().min(0, { message: 'O Minimo de 0.' }),
  }),
  isAttack: z.boolean(),
  attack: z.array(
    z.object({
      name: z
        .string()
        .nonempty({ message: 'Campo obrigatório.' })
        .min(3, { message: 'Minimo de 3 caracteres.' })
        .max(50, { message: 'Maximo de 50 caracteres.' }),
      interval: z.number().min(0, { message: 'O Minimo de 0.' }),
      minValueAttack: z.number(),
      maxValueAttack: z.number(),
    }),
  ),
  isImmunities: z.boolean(),
  immunities: z.object({
    physical: z.boolean(),
    energy: z.boolean(),
    fire: z.boolean(),
    poison: z.boolean(),
    earth: z.boolean(),
    ice: z.boolean(),
    holy: z.boolean(),
    death: z.boolean(),
    drown: z.boolean(),
    lifedrain: z.boolean(),
    manadrain: z.boolean(),
    outfit: z.boolean(),
    drunk: z.boolean(),
    invisible: z.boolean(),
    paralyze: z.boolean(),
  }),
  isDefenses: z.boolean(),
  isElements: z.boolean(),
  elements: z.object({
    firePercent: z.number(),
    energyPercent: z.number(),
    icePercent: z.number(),
    poisonPercent: z.number(),
    holyPercent: z.number(),
    deathPercent: z.number(),
    drownPercent: z.number(),
    earthPercent: z.number(),
    physicalPercent: z.number(),
    lifedrainPercent: z.number(),
    manadrainPercent: z.number(),
    healingPercent: z.number(),
    undefinedPercent: z.number(),
  }),
  isSummons: z.boolean(),
  summons: z.array(
    z.object({
      name: z
        .string()
        .nonempty({ message: 'Campo obrigatório.' })
        .min(3, { message: 'Minimo de 3 caracteres.' })
        .max(50, { message: 'Maximo de 50 caracteres.' }),
      interval: z.number().min(0, { message: 'O Minimo de 0.' }),
      chance: z.number().min(0, { message: 'O Minimo de 0.' }),
      qtdMax: z.number().min(0, { message: 'O Minimo de 0.' }),
    }),
  ),
  isVoices: z.boolean(),
  voices: z.object({
    message: z.string().max(50, { message: 'Maximo de 50 caracteres.' }),
  }),
  isLoot: z.boolean(),
  loot: z.array(
    z.object({
      name: z
        .string()
        .nonempty({ message: 'Campo obrigatório.' })
        .min(3, { message: 'Minimo de 3 caracteres.' })
        .max(50, { message: 'Maximo de 50 caracteres.' }),
      isCountMax: z.boolean(),
      countmax: z.number().min(0, { message: 'O Minimo de 0.' }),
      chance: z.number().min(0, { message: 'O Minimo de 0.' }),
    }),
  ),
});
