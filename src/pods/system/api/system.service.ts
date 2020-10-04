import { SystemStatus } from './model';

export const getSystemStatus = (): Promise<SystemStatus> => {
  return fetch(process.env.SYSTEM_STATUS_URL)
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        return response.json();
      } else {
        throw new Error(`${response.status} : ${response.statusText}`);
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};
