import axios from 'axios'
export const checklistSuccess = (data) => ({
  type: 'CHECKLIST_SUCCESS',
  payload: data,
});

export const getChecklistAll = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://94.74.86.174:8080/api/checklist', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      console.log("data", response?.data?.data);
      dispatch(checklistSuccess(response?.data?.data));
    } catch (error) {
      // Handle login failure (e.g., display an error message)
      console.error('Login failed:', error);
    }
  };
};

export const postChecklistAll = (data) => {
  return async (dispatch) => {
    console.log("data__", data);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://94.74.86.174:8080/api/checklist', {name: data}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("post___", response);
      // console.log("data", response?.data?.data);

      // dispatch(checklistSuccess(response?.data?.data));
    } catch (error) {
      // Handle login failure (e.g., display an error message)
      console.error('Login failed:', error);
    }
  };
};