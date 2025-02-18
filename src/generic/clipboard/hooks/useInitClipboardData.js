import { getClipboard } from '../../data/api';
import { updateClipboardData } from '../../data/slice';
/**
 * Custom React hook for store data in clipboard functionality.
 */
const useInitClipboardData = (dispatch) => {
  const fetchInitialClipboardData = async () => {
  try {
    const userClipboard = await getClipboard();
    dispatch(updateClipboardData(userClipboard));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Failed to fetch initial clipboard data: ${error}`);
  }
  };
  fetchInitialClipboardData();
}
export default useInitClipboardData;