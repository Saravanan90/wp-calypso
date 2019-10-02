/**
 * Internal dependencies
 */
import { combineReducers, withSchemaValidation } from 'state/utils';
import { TIMEZONES_RECEIVE } from 'state/action-types';

import { rawOffsetsSchema, labelsSchema, continentsSchema } from './schema';

export const rawOffsets = withSchemaValidation( rawOffsetsSchema, ( state = {}, action ) => {
	switch ( action.type ) {
		case TIMEZONES_RECEIVE:
			return ( ( state, actions ) => actions.rawOffsets )( state, action );
	}

	return state;
} );

export const labels = withSchemaValidation( labelsSchema, ( state = {}, action ) => {
	switch ( action.type ) {
		case TIMEZONES_RECEIVE:
			return ( ( state, actions ) => actions.labels )( state, action );
	}

	return state;
} );

export const byContinents = withSchemaValidation( continentsSchema, ( state = {}, action ) => {
	switch ( action.type ) {
		case TIMEZONES_RECEIVE:
			return ( ( state, actions ) => actions.byContinents )( state, action );
	}

	return state;
} );

export default combineReducers( {
	rawOffsets,
	labels,
	byContinents,
} );
