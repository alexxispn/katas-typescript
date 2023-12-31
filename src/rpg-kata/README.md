# RPG Combat Kata

> Originally created
>
by [Daniel Ojeda](https://twitter.com/danielojed4), [here are the slides](http://www.slideshare.net/DanielOjedaLoisel/rpg-combat-kata)

# Background

This is a fun kata that has the programmer building simple combat rules, as for a role-playing game (RPG). It is
implemented as a sequence of iterations. The domain doesn't include a map or any other character skills apart from their
ability to damage and heal one another.

# Instructions

1. Complete each iteration before reading the next one.

2. It's recommended you perform this kata with a pairing partner and while writing tests.

## Iteration One

<details>
  <summary>Show me!</summary>

1. All Characters, when created, have:

    - Health, starting at 1000
    - Level, starting at 1
    - May be Alive or Dead, starting Alive (Alive may be a true/false)

2. Characters can Deal Damage to Characters.

    - Damage is subtracted from Health
    - When damage received exceeds current Health, Health becomes 0 and the character dies

3. A Character can Heal a Character.
    - Dead characters cannot be healed
    - Healing cannot raise health above 1000

</details>

## Iteration Two

<details>
  <summary>Show me!</summary>

1. A Character cannot Deal Damage to itself.

2. A Character can only Heal itself.

3. When dealing damage:
    - If the target is 5 or more Levels above the attacker, Damage is reduced by 50%
    - If the target is 5 or more Levels below the attacker, Damage is increased by 50%

</details>

## Iteration Three

<details>
  <summary>Show me!</summary>

1. Characters have an attack Max Range.

2. _Melee_ fighters have a range of 2 meters.

3. _Ranged_ fighters have a range of 20 meters.

4. Characters must be in range to deal damage to a target.

</details>

## Retrospective

<details>
  <summary>Show me!</summary>

- Are you keeping up with the requirements? Has any iteration been a big challenge?
- Do you feel good about your design? Is it scalable and easily adapted to new requirements?
- Is everything tested? Are you confident in your code?

</details>

## Iteration Four

<details>
  <summary>Show me!</summary>

1. Characters may belong to one or more Factions.

    - Newly created Characters belong to no Faction.

2. A Character may Join or Leave one or more Factions.

3. Players belonging to the same Faction are considered Allies.

4. Allies cannot Deal Damage to one another.

5. Allies can Heal one another.

</details>

## Iteration Five

<details>
  <summary>Show me!</summary>

1. Characters can damage non-character _things_ (props).
    - Anything that has Health may be a target
    - These things cannot be Healed and they do not Deal Damage
    - These things do not belong to Factions; they are neutral
    - When reduced to 0 Health, things are _Destroyed_
    - As an example, you may create a Tree with 2000 Health

</details>

## Retrospective

- What problems did you encounter?
- What have you learned? Any new technique or pattern?
- Share your design with others, and get feedback on different approaches.
