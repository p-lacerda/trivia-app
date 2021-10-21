export const USER_INFO = 'USER_INFO';
export const QUESTIONS_INFO = 'QUESTIONS_INFO';

export const userInfo = (user, email) => ({
  type: USER_INFO,
  payload: {
    user,
    email,
  },
});

export const questionsInfo = (questions) => ({ type: QUESTIONS_INFO, data: questions });

// export const questionsInfo = (response) => ({
//   type: QUESTIONS_INFO,
//   payload: {
//     response,
//   },
// });

// export const questionsInfoThunk = () => async (dispatch) => {
//   const response = await fetchApi();
//   const data = { response };
//   dispatch(questionsInfo(data));
// };
