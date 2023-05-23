import { Input } from "antd";
import { styled } from "styled-components";

interface FilterInputProps {
  value: string;
  onFilter: (e: any) => void;
}

const FilterInput: React.FC<FilterInputProps> = ({ value, onFilter }) => {
  return (
    <FormContainer>
      <Input
        placeholder="Search bot"
        size="large"
        value={value}
        onChange={onFilter}
      />
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
  row-gap: 12px;
`;

export default FilterInput;
