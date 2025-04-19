import { GLOBAL_CONSTANTS } from "../constants/globalConstants";

export const delayHandler = (isLoading, error) => {
    if (isLoading) return <div>{`${GLOBAL_CONSTANTS.LOADING}...`}</div>;
    if (error) return <div>{GLOBAL_CONSTANTS.ERROR_FETCH_MESSAGE}</div>;
}