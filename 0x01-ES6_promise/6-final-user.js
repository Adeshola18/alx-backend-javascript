import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => {
      const resArray = [];
      for (let i = 0; i < values.length; i += 1) {
        resArray.push({
          status: values[i].status,
          value: values[i].value ? values[i].value : `${values[i].reason}`,
        });
      }
      return resArray;
    });
}
