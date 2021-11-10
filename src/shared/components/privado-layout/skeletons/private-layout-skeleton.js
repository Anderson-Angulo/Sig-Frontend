import { Skeleton } from 'primereact/skeleton';
import '../privado-layout.scss';
import './private-layout-skeleton.scss';

const PrivateLayoutSekeleton = () => {
  return (
    <div className="private-layout scroll">
      <Skeleton width="100%" height="6rem"></Skeleton>
      <main className="private-layout-content">
        <div className="skeleton-sidebar">
          <Skeleton width="100%" height="100%"></Skeleton>
        </div>

        <Skeleton width="10rem" size="100%"></Skeleton>
        <Skeleton width="100%" height="100%"></Skeleton>
      </main>
    </div>
  );
};

export default PrivateLayoutSekeleton;
