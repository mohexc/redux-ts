import axios from 'axios'
import { Dispatch } from 'react'
import { ActionType } from '../action-types'
import { Actions } from '../actions'

export const searchRepositories = (term: string) => {
    return async (dispatch: Dispatch<Actions>) => {
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES
        })

        try {

            const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
                params: {
                    text: term
                }
            })

            const names = data.object.map((result: any) => {
                return result.package.name
            })

            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: names
            })

            return

        } catch (err) {
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_ERROR,
                payload: err.message
            })
        }
    }
}