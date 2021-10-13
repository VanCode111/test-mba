import { fetchApi } from ".";
const getCourses = async () => {
  const { data } = await fetchApi(
    "https://ipo-cp.ru/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses"
  );
  return data;
};

export { getCourses };
