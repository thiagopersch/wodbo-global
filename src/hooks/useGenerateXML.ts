import { MonsterFormData } from './schema';

const escapeXml = (unsafe: string) => {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
};

const useGenerateXML = (data: MonsterFormData) => {
  const xmlString = `<?xml version="1.0" encoding="UTF-8"?>
<monster name="${escapeXml(data.name)}" description="a ${escapeXml(data.description)}" race="${data.race}" experience="${data.experience}" speed="${data.speed}">
  <health now="${data.health.min}" max="${data.health.max}"/>
  <look type="${data.looktype.type ?? 0}" head="${data.looktype.head ?? 0}" body="${data.looktype.body ?? 0}" legs="${data.looktype.legs ?? 0}" feet="${data.looktype.feet ?? 0}" addons="${data.looktype.addons ?? 0}" typeex="${data.looktype.typeex ?? 0}" corpse="${data.looktype.corpse ?? 0}"/>
  <targetchange interval="4000" chance="10"/>
  <flags>
    <flag summonable="0"/>
    <flag attackable="1"/>
    <flag hostile="1"/>
    <flag illusionable="1"/>
    <flag convinceable="0"/>
    <flag pushable="0"/>
    <flag canpushitems="1"/>
    <flag canpushcreatures="0"/>
    <flag hidename="0"/>
    <flag hidehealth="0"/>
    <flag lightlevel="0"/>
    <flag lightcolor="0"/>
    <flag lootmessage="0"/>
    <flag targetdistance="1"/>
    <flag staticattack="90"/>
    <flag runonhealth="20"/>
    <flag lureable="0"/>
    <flag walkable="0"/>
    <flag skull="0"/>
    <flag shield="0"/>
    <flag emblem="0"/>
    <flag canwalkonenergy="0"/>
    <flag canwalkonfire="0"/>
    <flag canwalkonpoison="0"/>
  </flags>
  ${
    data.isAttack && data.attacks?.length > 0
      ? `
  <attacks>
    ${data.attacks.map((attack) => `<attack name="${escapeXml(attack.name)}" interval="${attack.interval}" min="-${attack.minValueAttack}" max="-${attack.maxValueAttack}"/>`).join('\n\t\t')}
  </attacks>`
      : ''
  }
  <immunities>
    <immunity physical="${data.immunities.physical ? 1 : 0}"/>
    <immunity energy="${data.immunities.energy ? 1 : 0}"/>
    <immunity fire="${data.immunities.fire ? 1 : 0}"/>
    <immunity poison="${data.immunities.poison ? 1 : 0}"/>
    <immunity earth="${data.immunities.earth ? 1 : 0}"/>
    <immunity ice="${data.immunities.ice ? 1 : 0}"/>
    <immunity holy="${data.immunities.holy ? 1 : 0}"/>
    <immunity death="${data.immunities.death ? 1 : 0}"/>
    <immunity drown="${data.immunities.drown ? 1 : 0}"/>
    <immunity lifedrain="${data.immunities.lifedrain ? 1 : 0}"/>
    <immunity manadrain="${data.immunities.manadrain ? 1 : 0}"/>
    <immunity outfit="${data.immunities.outfit ? 1 : 0}"/>
    <immunity drunk="${data.immunities.drunk ? 1 : 0}"/>
    <immunity invisible="${data.immunities.invisible ? 1 : 0}"/>
    <immunity paralyze="${data.immunities.paralyze ? 1 : 0}"/>
  </immunities>
  ${
    data.isDefenses
      ? `
  <defenses armor="35" defense="35">
    <defense name="speed" interval="2000" chance="15" speedchange="450" duration="5000">
      <attribute key="areaEffect" value="redshimmer"/>
    </defense>
    <defense name="healing" interval="2000" chance="10" min="0" max="110">
      <attribute key="areaEffect" value="blueshimmer"/>
    </defense>
  </defenses>`
      : ''
  }
  <elements>
    <element firePercent="${data.elements.firePercent}"/>
    <element energyPercent="${data.elements.energyPercent}"/>
    <element icePercent="${data.elements.icePercent}"/>
    <element poisonPercent="${data.elements.poisonPercent}"/>
    <element holyPercent="${data.elements.holyPercent}"/>
    <element deathPercent="${data.elements.deathPercent}"/>
    <element drownPercent="${data.elements.drownPercent}"/>
    <element earthPercent="${data.elements.earthPercent}"/>
    <element physicalPercent="${data.elements.physicalPercent}"/>
    <element lifeDrainPercent="${data.elements.lifedrainPercent}"/>
    <element manaDrainPercent="${data.elements.manadrainPercent}"/>
    <element healingPercent="${data.elements.healingPercent}"/>
    <element undefinedPercent="${data.elements.undefinedPercent}"/>
  </elements>
  ${
    data.isSummons && (data.summons?.length ?? 0) > 0
      ? `
  <summons>
    ${data?.summons?.map((summon) => `<summon name="${escapeXml(summon.name)}" interval="${summon.interval}" chance="${summon.chance}" max="${summon.qtdMax}"/>`).join('\n\t\t')}
  </summons>`
      : ''
  }
  ${
    data.isVoices && data.voices.message
      ? `
  <voices interval="5000" chance="10">
    <voice sentence="${escapeXml(data.voices.message)}" yell="1"/>
  </voices>`
      : ''
  }
  ${
    data.isLoot && data.loot?.length > 0
      ? `
  <loot>
    ${data.loot.map((loot) => (loot.isCountMax ? `<item name="${escapeXml(loot.name)}" countmax="${loot.countmax}" chance="${loot.chance}"/>` : `<item name="${escapeXml(loot.name)}" chance="${loot.chance}"/>`)).join('\n\t\t')}
  </loot>`
      : ''
  }
</monster>`;
  return xmlString;
};

export default useGenerateXML;
