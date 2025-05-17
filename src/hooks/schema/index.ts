// src/lib/monsterSchema.ts
import { z } from 'zod';

const attackSchema = z.object({
  name: z.string().min(1, 'Nome do ataque é obrigatório'),
  interval: z.coerce.number().min(0, 'Intervalo deve ser no mínimo 0'),
  minValueAttack: z.coerce.number().min(0, 'Valor mínimo deve ser no mínimo 0'),
  maxValueAttack: z.coerce.number().min(0, 'Valor máximo deve ser no mínimo 0'),
});

const summonSchema = z.object({
  name: z.string().min(1, 'Nome do summon é obrigatório'),
  interval: z.coerce.number().min(0, 'Intervalo deve ser no mínimo 0'),
  chance: z.coerce
    .number()
    .min(0, 'Chance deve ser no mínimo 0')
    .max(100, 'Chance deve ser no máximo 100'),
  qtdMax: z.coerce.number().min(0, 'Quantidade máxima deve ser no mínimo 0'),
});

const lootItemSchema = z.object({
  name: z.string().min(1, 'Nome do loot é obrigatório'),
  isCountMax: z.boolean().default(false),
  countmax: z.coerce
    .number()
    .min(0, 'Contagem máxima deve ser no mínimo 0')
    .optional(),
  chance: z.coerce
    .number()
    .min(0, 'Chance deve ser no mínimo 0')
    .max(100, 'Chance deve ser no máximo 100'),
});

export const monsterFormSchema = z.object({
  name: z.string().min(1, 'Nome do monstro é obrigatório'),
  description: z.string().optional(), // Será preenchido automaticamente
  race: z.string().min(1, 'Raça é obrigatória'),
  experience: z.coerce.number().min(0, 'Experiência deve ser no mínimo 0'),
  speed: z.coerce.number().min(0, 'Velocidade deve ser no mínimo 0'),
  heath: z.object({
    min: z.coerce.number().min(0, 'Vida mínima deve ser no mínimo 0'),
    max: z.coerce.number().min(0, 'Vida máxima deve ser no mínimo 0'),
  }),
  looktype: z.object({
    type: z.coerce.number().min(0),
    head: z.coerce.number().min(0),
    body: z.coerce.number().min(0),
    legs: z.coerce.number().min(0),
    feet: z.coerce.number().min(0),
    addons: z.coerce.number().min(0),
    typeex: z.coerce.number().min(0),
    corpse: z.coerce.number().min(0),
  }),
  isAttack: z.boolean().default(false),
  attack: z.array(attackSchema).optional(),
  isImmunities: z.boolean().default(false),
  immunities: z
    .object({
      physical: z.coerce.number().min(0).optional(),
      energy: z.coerce.number().min(0).optional(),
      fire: z.coerce.number().min(0).optional(),
      poison: z.coerce.number().min(0).optional(),
      earth: z.coerce.number().min(0).optional(),
      ice: z.coerce.number().min(0).optional(),
      holy: z.coerce.number().min(0).optional(),
      death: z.coerce.number().min(0).optional(),
      drown: z.coerce.number().min(0).optional(),
      lifedrain: z.coerce.number().min(0).optional(),
      manadrain: z.coerce.number().min(0).optional(),
      outfit: z.coerce.number().min(0).optional(),
      drunk: z.coerce.number().min(0).optional(),
      invisible: z.coerce.number().min(0).optional(),
      paralyze: z.coerce.number().min(0).optional(),
    })
    .optional(),
  isDefenses: z.boolean().default(false), // A lógica de 'defenses' não está clara no código original, apenas o checkbox
  isElements: z.boolean().default(false),
  elements: z
    .object({
      firePercent: z.coerce.number().min(0).optional(),
      energyPercent: z.coerce.number().min(0).optional(),
      icePercent: z.coerce.number().min(0).optional(),
      poisonPercent: z.coerce.number().min(0).optional(),
      holyPercent: z.coerce.number().min(0).optional(),
      deathPercent: z.coerce.number().min(0).optional(),
      drownPercent: z.coerce.number().min(0).optional(),
      earthPercent: z.coerce.number().min(0).optional(),
      physicalPercent: z.coerce.number().min(0).optional(),
      lifedrainPercent: z.coerce.number().min(0).optional(),
      manadrainPercent: z.coerce.number().min(0).optional(),
      healingPercent: z.coerce.number().min(0).optional(),
      undefinedPercent: z.coerce.number().min(0).optional(),
    })
    .optional(),
  isSummons: z.boolean().default(false),
  summons: z.array(summonSchema).optional(),
  isVoices: z.boolean().default(false),
  voices: z
    .object({
      message: z.string().optional(),
    })
    .optional(),
  isLoot: z.boolean().default(false),
  loot: z.array(lootItemSchema).optional(),
});

export type MonsterFormData = z.infer<typeof monsterFormSchema>;

// Valores padrão para o formulário
export const defaultMonsterValues: MonsterFormData = {
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
  attack: [],
  isImmunities: false,
  immunities: {},
  isDefenses: false,
  isElements: false,
  elements: {},
  isSummons: false,
  summons: [],
  isVoices: false,
  voices: { message: '' },
  isLoot: false,
  loot: [],
};
