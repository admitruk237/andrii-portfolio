import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const validationErrorStyles =
  'text-red-500 text-[10px] lg:text-xs mt-1 transition-opacity duration-200 min-h-[1.25rem]';

export const FormField = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  isTextarea = false,
}) => {
  const InputComponent = isTextarea ? Textarea : Input;
  const inputProps = isTextarea
    ? { className: 'h-[200px]', placeholder, value, onChange }
    : { type, placeholder, value, onChange };

  return (
    <div>
      <InputComponent {...inputProps} />
      <p
        className={`${validationErrorStyles} ${
          error ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {error || '\u00A0'}
      </p>
    </div>
  );
};
