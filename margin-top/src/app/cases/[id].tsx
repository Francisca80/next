// pages/cases/[id].tsx
import { useRouter } from 'next/router';

const CaseDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query; // Get the case ID from the URL

  return (
    <div>
      <h1>Case Detail for {id}</h1>
      {/* You can fetch and display more details about the case here */}
    </div>
  );
};

export default CaseDetail;

