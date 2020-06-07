import { createAsyncThunk } from '@reduxjs/toolkit'
import { API_URL } from '../../services/utils'

const headers = { 'Content-Type': 'application/json', "Accept": '*/*', "Access-Control-Allow-Origin": "*" }

export const login = createAsyncThunk(
    "user/login",
    (arg: { email: string, password: string }, thunkApi) => {
        const { email, password } = arg;
        return fetch(`${API_URL}/login`, {
            method: "POST",
            headers,
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(res => res.json())
            .then(resJson => { return resJson })
            .catch(err => { return err})
    }
)