import { ReactComponent as House } from './svg/house.svg';
import { ReactComponent as RoadNorth } from './svg/road_n.svg';
import { ReactComponent as RoadEast } from './svg/road_e.svg';
import { ReactComponent as RoadSouth } from './svg/road_s.svg';
import { ReactComponent as RoadWest } from './svg/road_w.svg';
import { ReactComponent as Pawn } from './svg/pawn.svg';
import { ReactComponent as Orc } from './svg/orc.svg';
import { ReactComponent as Cave } from './svg/cave.svg';
import { ReactComponent as Rock } from './svg/rock.svg';
import { ReactComponent as Tree } from './svg/tree.svg';
import { ReactComponent as Wall } from './svg/wall.svg';
import { ReactComponent as Logs } from './svg/logs.svg';
import { ReactComponent as Ore } from './svg/ore.svg';
import { ReactComponent as Ingot } from './svg/ingot.svg';
import { ReactComponent as Axe } from './svg/axe.svg';
import { ReactComponent as Pick } from './svg/pick.svg';
import { ReactComponent as Sword } from './svg/sword.svg';
import { ReactComponent as Shield } from './svg/shield.svg';
import { ReactComponent as Hoe } from './svg/hoe.svg';
import { ReactComponent as Scythe } from './svg/scythe.svg';
import { ReactComponent as Bucket } from './svg/bucket.svg';
import { ReactComponent as FishingRod } from './svg/fishing-rod.svg';
import { ReactComponent as Wheat } from './svg/wheat.svg';
import { ReactComponent as Crops } from './svg/crops.svg';
import { ReactComponent as Sprout } from './svg/sprout.svg';
import { ReactComponent as Seeds } from './svg/seeds.svg';
import { ReactComponent as Fish } from './svg/fish.svg';
import { ReactComponent as Stump } from './svg/stump.svg';
import { ReactComponent as Bush } from './svg/bush.svg';
import { ReactComponent as StoneworkTable } from './svg/stonework-table.svg';
import { ReactComponent as StonePile } from './svg/stone-pile.svg';
import { ReactComponent as Stone } from './svg/stone.svg';
import { ReactComponent as Anvil } from './svg/anvil.svg';
import { ReactComponent as Chest } from './svg/chest.svg';
import { ReactComponent as Mine } from './svg/mine.svg';
import { ReactComponent as Furnace } from './svg/furnace.svg';

/* Config */
export const GRID_SIZE = 64;
export const TICK_RATE = 1; // per second
export const MAX_FOOD = 20;

/* Buildings */
export type CraftingRecipe = {
  input: string,
  output: string,
  input_quantity?: number,
  output_quantity?: number,
}

export type BuildingConfig = {
  id: string,
  svg: React.FunctionComponent,
  craftingRecipes?: CraftingRecipe[]
}

export const BUILDINGS_CONFIG: BuildingConfig[] = [
  {
    id: 'house',
    svg: House,
  },
  {
    id: 'stonework-table',
    svg: StoneworkTable,
    craftingRecipes: [
      {
        input: 'stone',
        output: 'axe',
      },
      {
        input: 'stone',
        output: 'pick',
      },
      {
        input: 'stone',
        output: 'sword',
      },
    ]
  },
  {
    id: 'road_n',
    svg: RoadNorth,
  },
  {
    id: 'road_e',
    svg: RoadEast,
  },
  {
    id: 'road_s',
    svg: RoadSouth,
  },
  {
    id: 'road_w',
    svg: RoadWest,
  },
  {
    id: 'cave',
    svg: Cave,
  },
  {
    id: 'rock',
    svg: Rock,
  },
  {
    id: 'tree',
    svg: Tree,
  },
  {
    id: 'wall',
    svg: Wall,
  },
  {
    id: 'crops',
    svg: Crops,
  },
  {
    id: 'sprout',
    svg: Sprout,
  },
  {
    id: 'stump',
    svg: Stump,
  },
  {
    id: 'bush',
    svg: Bush,
  },
  {
    id: 'stone-pile',
    svg: StonePile,
  },
  {
    id: 'chest',
    svg: Chest,
  },
  {
    id: 'anvil',
    svg: Anvil,
  },
  {
    id: 'mine',
    svg: Mine,
  },
  {
    id: 'furnace',
    svg: Furnace,
  },
];

export type ConnectorType = 'in' | 'out' | null;

export class Building {
  x: number;
  y: number;
  type: string;
  svg: React.FunctionComponent;
  cooldown: number = 0;
  connector_n: ConnectorType = null;
  connector_s: ConnectorType = null;
  connector_e: ConnectorType = null;
  connector_w: ConnectorType = null;
  input: Item[] = [];
  output: Item[] = [];

  constructor(x: number, y: number, type: string){
    this.x = x;
    this.y = y;
    this.type = type;
    this.svg = BUILDINGS_CONFIG.find(config => config.id === type)!.svg;
  }
}

/* Units */
export type UnitConfig = {
  id: string,
  svg: React.FunctionComponent,
}

export const UNITS_CONFIG: UnitConfig[] = [
  {
    id: 'pawn',
    svg: Pawn,
  },
  {
    id: 'orc',
    svg: Orc,
  },
];

export class Unit {
  x: number;
  y: number;
  type: string;
  food: number;
  svg: React.FunctionComponent;
  held_item: Item | null;

  constructor(x: number, y: number, type: string){
    this.x = x;
    this.y = y;
    this.type = type;
    this.food = 20;
    this.held_item = null;
    this.svg = UNITS_CONFIG.find(config => config.id === type)!.svg;
  }
}

/* Items */
export type ItemConfig = {
  id: string,
  svg: React.FunctionComponent,
}

export const ITEMS_CONFIG: ItemConfig[] = [
  {
    id: 'logs',
    svg: Logs,
  },
  {
    id: 'ore',
    svg: Ore,
  },
  {
    id: 'ingot',
    svg: Ingot,
  },
  {
    id: 'axe',
    svg: Axe,
  },
  {
    id: 'pick',
    svg: Pick,
  },
  {
    id: 'sword',
    svg: Sword,
  },
  {
    id: 'shield',
    svg: Shield,
  },
  {
    id: 'hoe',
    svg: Hoe,
  },
  {
    id: 'scythe',
    svg: Scythe,
  },
  {
    id: 'bucket',
    svg: Bucket,
  },
  {
    id: 'fishing-rod',
    svg: FishingRod,
  },
  {
    id: 'wheat',
    svg: Wheat,
  },
  {
    id: 'seeds',
    svg: Seeds,
  },
  {
    id: 'fish',
    svg: Fish,
  },
  {
    id: 'stone',
    svg: Stone,
  },
];

export class Item {
  x: number;
  y: number;
  type: string;
  svg: React.FunctionComponent;

  constructor(x: number, y: number, type: string){
    this.x = x;
    this.y = y;
    this.type = type;
    this.svg = ITEMS_CONFIG.find(config => config.id === type)!.svg;
  }
}