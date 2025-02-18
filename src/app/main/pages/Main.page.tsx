import { useEffect, useState } from "react";

interface IData {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}
const Main = () => {
  const [data, setData] = useState<IData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const json = await response.json();
        //TODO: фильтрацию элементов могу тут вызвать
        setData(json);
      } catch (error) {
        console.log("Ошибка при загрузке данных", error);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  console.log(data);
  return (
    <>
      {data?.length ? (
        data.map((item) => (
          <div key={item.id}>
            <p>{item.title}d</p>
          </div>
        ))
      ) : (
        <p>Нет данных</p> // Добавляем обработку пустого массива
      )}
    </>
  );
};

export { Main };

//JSON - это текстовый формат обмена данными
// ПОЛУЕНИЕ СТРАНИЦЫ
