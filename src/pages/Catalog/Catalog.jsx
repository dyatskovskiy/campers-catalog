import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CampersList } from '../../components/CampersList/CampersList';
import { PageWrapper } from '../../components/PageWrapper/PageWrapper';

import { Sidebar } from '../../components/Sidebar/Sidebar';
import { selectCampers, selectError, selectIsLoading } from '../../redux/selectors';
import { fetchCampers } from '../../redux/operations';

export default function Catalog() {
  const dispatch = useDispatch();

  const campers = useSelector(selectCampers);

  const isLoading = useSelector(selectIsLoading);

  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <PageWrapper>
      <Sidebar></Sidebar>
      {campers.length > 0 && <CampersList campers={campers} />}
      {isLoading && <p>Loading...</p>}
      {isError && <p>{isError}</p>}
    </PageWrapper>
  );
}
