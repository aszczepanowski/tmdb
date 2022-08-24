export interface FilterBoxProps {
  name: string;
  /**
   * @default []
   */
  options: Option[];
  selected?: string;
  onChange: (o: Option) => void;
}
