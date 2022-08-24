import { Media } from 'api/types';

export interface MediaModalProps {
  data: Media;
  show: boolean;
  onClose: () => void;
}
