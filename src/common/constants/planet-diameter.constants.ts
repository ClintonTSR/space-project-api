export const PLANET_DIAMETER = {
    sun: 1392684
} as const;

export type PlanetName = keyof typeof PLANET_DIAMETER;
