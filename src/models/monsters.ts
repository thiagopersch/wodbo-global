export type Monsters = {
  name?: string;
  description?: string;
  race?: string;
  experience?: number;
  speed?: number;
  health: {
    min?: number;
    max?: number;
  };
  looktype: {
    type?: number;
    head?: number;
    body?: number;
    legs?: number;
    feet?: number;
    addons?: number;
    typeex?: number;
    corpse?: number;
  };
  isAttack?: boolean;
  attacks: {
    name?: string;
    interval?: number;
    minValueAttack?: number;
    maxValueAttack?: number;
  }[];
  isImmunities?: boolean;
  immunities?: {
    physical?: boolean;
    energy?: boolean;
    fire?: boolean;
    poison?: boolean;
    earth?: boolean;
    ice?: boolean;
    holy?: boolean;
    death?: boolean;
    drown?: boolean;
    lifedrain?: boolean;
    manadrain?: boolean;
    outfit?: boolean;
    drunk?: boolean;
    invisible?: boolean;
    paralyze?: boolean;
  };
  isDefenses?: boolean;
  isElements?: boolean;
  elements?: {
    firePercent?: number;
    energyPercent?: number;
    icePercent?: number;
    poisonPercent?: number;
    holyPercent?: number;
    deathPercent?: number;
    drownPercent?: number;
    earthPercent?: number;
    physicalPercent?: number;
    lifedrainPercent?: number;
    manadrainPercent?: number;
    healingPercent?: number;
    undefinedPercent?: number;
  };
  isSummons?: boolean;
  summons?: {
    name?: string;
    interval?: number;
    chance?: number;
    qtdMax?: number;
  }[];
  isVoices?: boolean;
  voices?: {
    message?: string;
  };
  isLoot?: boolean;
  loot: {
    name: string;
    isCountMax: boolean;
    countmax: number;
    chance: number;
  }[];
};
