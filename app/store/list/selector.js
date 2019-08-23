import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the cart state domain
 */
const selectLisdDomain = state => state.list || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by List
 */

export const makeSelectList = () =>
  createSelector(
    selectLisdDomain,
    substate => substate,
  );

export { selectLisdDomain };
