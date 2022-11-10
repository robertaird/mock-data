import { useQuery } from '@apollo/client';
import { GET_DOGS, Dogs as DogsType } from 'graphql/queries';

export const Dogs = () => {
  const { data, loading } = useQuery<{ dogs: DogsType[] }>(GET_DOGS);
  if (!data || loading) {
    return null;
  }

  return (
    <div>
      <ul>
        {data.dogs?.map(({ breed }) => (
          <li>{breed}</li>
        ))}
      </ul>
    </div>
  );
};
