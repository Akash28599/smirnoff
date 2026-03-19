import { useAppContext } from '../context/AppContext';

export default function Toast() {
  const { toast } = useAppContext();
  if (!toast) return null;

  return (
    <div className={`toast ${toast.type}`}>
      {toast.message}
    </div>
  );
}
