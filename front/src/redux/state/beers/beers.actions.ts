import { Beer } from '../../../model/Beer'
import { BeerActionTypes } from './beers.model'

export const beerActions = {
  fetchBeersIfNot: () => ({
    type: BeerActionTypes.BEERS_FETCH_IF_NOT,
  }),
  fetchBeers: () => ({
    type: BeerActionTypes.BEERS_FETCH,
  }),
  setBeers: (beers: Array<Beer>) => ({
    type: BeerActionTypes.BEERS_SET,
    beers,
  }),
  fetchBeersSuccess: () => ({
    type: BeerActionTypes.BEERS_FETCH_SUCCESS,
  }),
  fetchBeersFailure: () => ({
    type: BeerActionTypes.BEERS_FETCH_FAILURE,
  }),
  createBeer: (beer: Partial<Beer>) => ({
    type: BeerActionTypes.BEERS_CREATE,
    beer,
  }),
  updateBeer: (beer: Beer) => ({
    type: BeerActionTypes.BEERS_UPDATE,
    beer
  }),
  setNewlyCreatedBeer: (beer: Beer) => ({
    type: BeerActionTypes.BEERS_SET_NEW,
    beer,
  }),
  rateBeer: (uuid: Beer["uuid"], score: number) => ({
    type: BeerActionTypes.BEERS_RATE,
    uuid,
    score
  }),
} as const

export type BeerActionCollection = typeof beerActions
export type AnyBeerAction = BeerActionCollection[keyof BeerActionCollection]
export type AnyBeerActionResut = ReturnType<AnyBeerAction>
